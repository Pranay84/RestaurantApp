import {styled} from 'styled-components'

export const CatMenuButton = styled.button`
    color: ${props => props.selected ? 'red' : 'black'};
    border: 0px;
    border-bottom: ${props => props.selected ? '1px solid red' : '0'} ;
    padding-bottom: 10px;
    margin-bottom: 0px;
    background-color: transparent;
`