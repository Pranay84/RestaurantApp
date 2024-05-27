import styled from 'styled-components'

export const Para = styled.p`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.dishType === 1? '#BF360C' : '#22aa00'};
    background-color: transparent;
    height: 15px;
    width: 15px;
    margin-bottom: 0px;
`

export const Span = styled.span`
background-color: ${props => props.dishType === 1? '#BF360C' : '#22aa00'};
    border: 0px;
    border-radius: 5px;
    height: 9px;
    width: 9px;
`