import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const DEFAULT_TEXT = 'Click here to edit'

export const BlockModel = ({id = uuidv4(), parentId = null, text, childrenIds = []}={}) => (
  {
    id,
    parentId,
    text,
    childrenIds
  }
)

const blocksSlice = createSlice({
  name: 'blocks',
  initialState: {
    'abcd': { id: 'abcd', parentId: null, text: 'Hello World', childrenIds: ['ijkl', 'mnop'] },
    'efgh': { id: 'efgh', parentId: null, text: 'Lorem ipsum', childrenIds: ['qrst'] },
    'ijkl': { id: 'ijkl', parentId: 'abcd', text: 'Normal *italics* **bold** ***bold italics***', childrenIds: [] },
    'mnop': { id: 'mnop', parentId: 'abcd', text: 'Link to [[Lorem ipsum]]', childrenIds: ['uvwx', 'a1'] },
    'qrst': { id: 'qrst', parentId: 'efgh', text: 'Click here to edit', childrenIds: [] },
    'uvwx': { id: 'uvwx', parentId: 'mnop', text: "I'm a third layer block", childrenIds: ['a2'] },
    'a1': { id: 'uvwx', parentId: 'mnop', text: "I'm another third layer block", childrenIds: [] },
    'a2': { id: 'uvwx', parentId: 'uvwx', text: "I'm a fourth layer block", childrenIds: [] },
  },
  reducers: {
    addBlock: (state, action) => {
      const block = action.payload
      if (!block.parentId) {
        const childBlock = BlockModel({ parentId: block.id, text: DEFAULT_TEXT })
        block.childrenIds.push(childBlock.id)
        state[childBlock.id] = childBlock
      } else {
        const parentBlock = state[block.parentId]
        parentBlock.childrenIds.push(block.id)
      }
      state[block.id] = block
    },
    changeParent: (state, action) => {
      const { blockId, parentId } = action.payload
      const block = state[blockId]
      block.parentId = parentId
      const parentBlock = state[parentId]
      parentBlock.childrenIds.push(blockId)
    },
    updateBlock: (state, action) => {
      const { blockId, parentId, childrenIds, text } = action.payload
      const block = state[blockId]
      if (block) {
        block.parentId = parentId || block.parentId
        block.childrenIds = childrenIds || block.childrenIds
        const currentText = block.text
        block.text = text || currentText
        state[blockId] = block
        if (!block.parentId) {
          blocksSlice.caseReducers.changeTitle(state, { payload: { currentTitle: currentText, newTitle: text } })
        }
      }
    },
    changeTitle: (state, action) => {
      const { currentTitle, newTitle } = action.payload
      /* eslint-disable no-useless-escape */
      const linkPat = new RegExp(`\[\[${currentTitle}\]\]`, 'g')
      Object.values(state)
        .map(block => {
          if (linkPat.test(block.text)) {
            state[block.id].text = block.text.replace(`[[${currentTitle}]]`, `[[${newTitle}]]`)
          }
          return true
        })
    },
    searchForBlocks: (state, action) => {
      const { query, exact } = action.payload
      if (!query) {
        return
      }
      const searchResults = Array.from(state)
        .filter(([blockId, block]) => {
          if (exact) {
            return block.text === query
          }
          return block.text.indexOf(query) !== -1
        })
        .map(([blockId, block]) => blockId)
      return searchResults
    },
    getOrAddBlock: (state, action) => {
      const { text, parentId } = action.payload
      const existingBlock = blocksSlice.caseReducers.getBlockByText(state, { text })
      if (existingBlock) {
        return existingBlock
      }
      return blocksSlice.caseReducers.addBlock(state, { text, parentId })
    }
  }
})

export const { getBlockByText, addBlock, updateBlock, searchForBlocks, getOrAddBlock } = blocksSlice.actions
export default blocksSlice.reducer