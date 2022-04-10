import styledComponents from 'styled-components'

export const Comment = styledComponents.p`
    font-style: oblique;
    font-size: x-small;
    color: blue;
`

export const Submit = styledComponents.input`
    display: inline - block;
    margin: 0.5rem;
    color: gray;
    opacity: 0.7;
    font-style: italic;
    background - color: rgb(255, 255, 255);
    &:hover {
        opacity: 1;
        color: black;
        font-weight: bold;
        font-style: normal;
    }
`