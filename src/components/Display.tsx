import React from "react";
import styled from "styled-components";


const StyledDisplay = styled.div`
 background-color: orange;
 padding: 50px;
 font-size: 20px;
 border-radius: 5px;
`;

interface DisplayProps {
    value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {

return (
<StyledDisplay className="display">
<input type="text" defaultValue={value} />
</StyledDisplay>
);
}

export default Display;