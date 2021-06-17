// import React, { useRef } from 'react';
// import InputStd from '../editable-forms/input-std'

// function SkillItems (props) {
//     const skillRef = useRef();
//     const filtered = props.value.filter(item => item !== 'enter skill')
//     const count = props.skillCount

//     function inputStd (index) {

//         return (<InputStd
//             childRef={skillRef}
//             value={props.value[index]}
//             >
//                 <input
//                     ref={skillRef}
//                     className="rect-std"
//                     placeholder='enter skill'
//                     value={props.value[index]}
//                     onChange={(e) => {
//                         props.setSkill(e, index);
//                     }}
//                 />
//             </InputStd>)
//     }

//     const array = [
//         inputStd(0),
//         inputStd(1),
//         inputStd(2),
//         inputStd(3),
//         inputStd(4),
//         inputStd(5),
//         inputStd(6),
//         inputStd(7),
//         inputStd(8)
//     ]
//     //if count is greater tahn one, return array with number of items equal to count

//     if (count >= 1) {
//         let items = []
//         items = array.slice(0, count)
//         return items
//     } else {
//         return null;
//     }
    
// }

// export default SkillItems;