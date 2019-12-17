import React, { useState } from 'react';
import styled from 'styled-components';

interface TagItem {
  title: string;
}

interface SearchFieldProps {
  defaultTags: TagItem[];
}

const SearchField = ({ defaultTags }: SearchFieldProps) => {
  const [focused, changeFocus] = useState(false);
  console.log(`${focused} - non commentable, cause unused, input focus status`);
  const [tags, changeTags] = useState(defaultTags);
  const [fieldValue, changeFieldValue] = useState('');

  const removeTag = (id: number) => {
    const newTags = tags.filter((_, index) => index !== id);
    changeTags(newTags);
  };

  const addTag = (newTag: string) => {
    if (newTag.replace(/ /g, '') !== '') {
      const newTags = [
        ...tags,
        {
          title: newTag,
        },
      ];
      changeTags(newTags);
      changeFieldValue('');
    }
  };

  const trackTagAdding = (e: any) => {
    if (e.key === 'Enter') {
      addTag(e.target.value);
    } else if (e.key === 'Backspace' && e.target.value === '') {
      removeTag(tags.length - 1);
    }
  };

  const setFocus = () => {
    changeFocus(true);
  };

  const removeFocus = () => {
    changeFocus(false);
  };

  return (
    <FieldContainer>
      <FieldContent>
        {tags.length === 0 && fieldValue.length === 0 && (
          <Placeholder>Search for a freelancer…</Placeholder>
        )}
        <Tags>
          {tags.map((item: TagItem, index: number) => (
            <Tag key={item.title}>
              <div>{item.title}</div>
              <RemoveTagButton onClick={() => removeTag(index)}>
                <span className="icon-close" />
              </RemoveTagButton>
            </Tag>
          ))}
        </Tags>
        <Field
          value={fieldValue}
          size={fieldValue.length * 2}
          onChange={e => changeFieldValue(e.target.value)}
          onFocus={setFocus}
          onBlur={removeFocus}
          onKeyDown={trackTagAdding}
        />
      </FieldContent>
      <SearchButton>
        <span className="icon-search" />
      </SearchButton>
    </FieldContainer>
  );
};

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 6px;
  overflow: hidden;
`;

const FieldContent = styled.label`
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  width: 600px;
  height: 50px;
  padding: 8px 0;
  padding-left: 13px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  z-index: 2;
  font-family: 'Lato', cursive;
  color: ${props => props.theme.colors.darkGrayPlaceholder};
  font-style: italic;
  line-height: 34px;
  margin-left: 4px;
`;

const Field = styled.input`
  position: relative;
  z-index: 3;
  height: 34px;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.primaryBlue};
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  flex-shrink: 0;

  &:focus {
    outline: none;
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-shrink: 0;
`;

const Tag = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  font-size: 14px;
  line-height: 30px;
  color: ${props => props.theme.colors.white};
  padding: 0 10px 0 15px;
  background-color: ${props => props.theme.colors.primaryLightBlueTags};
  border-radius: 5px;
  margin-right: 10px;
  transition: 0.3s;
  border: 1px solid ${props => props.theme.colors.primaryLightBlueTags};

  &:hover {
    background-color: transparent;
    color: ${props => props.theme.colors.primaryLightBlueTags};
  }
`;

const RemoveTagButton = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  border-radius: 3px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primaryLightBlueRemoveButton};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${props =>
      props.theme.colors.primaryLightBlueRemoveButtonHover};
  }
`;

const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.colors.white};
  border: none;
  box-shadow: none;
  font-size: 25px;
  margin-right: 10px;
  margin-left: 10px;
  color: ${props => props.theme.colors.primaryBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

SearchField.defaultProps = {
  defaultTags: [],
};

export default SearchField;
