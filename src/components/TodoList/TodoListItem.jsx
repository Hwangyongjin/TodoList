import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import styled from 'styled-components';

const TodoListItemParentDiv = styled.div`
  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

const TodoListItemDiv = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
    .text {
      margin-left: 0.5rem;
      flex: 1;
    }
    &.checked {
      svg {
        color: #22b8cf;
      }
      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  }
  .remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    <TodoListItemParentDiv style={style}>
      <TodoListItemDiv>
        <div
          className={cn('checkbox', { checked })}
          onClick={() => {
            onToggle(id);
          }}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div
          className="remove"
          onClick={() => {
            onRemove(id);
          }}
        >
          <MdRemoveCircleOutline />
        </div>
      </TodoListItemDiv>
    </TodoListItemParentDiv>
  );
};

export default React.memo(TodoListItem);
