// import React, { useState } from 'react';
// import Axios from 'axios';

// const Form = ({ setPosts }) => {
//     const 
//     const [state, setState] = useState({
//         "title": "",
//         "contents": ""
//     })

//     const handleChange = e => {
//         setPosts({
//           posts: {
//             ...state,
//             [e.target.name]: e.target.value
//           }
//         });
//       };

//     const onSubmit = e => {
//         e.preventDefault();
//         Axios.post('http://localhost:4000/api/posts', state)
//         .then(res => {
//             console.log(res.data)
//         })
//         .catch(err => console.log(err.response))
//     }

//     return (
//         <div>
//           <form onSubmit={onSubmit}>
//             <input
//               type="text"
//               name="username"
//               value={state.title}
//               onChange={handleChange}
//             />
//             <input
//               type="password"
//               name="password"
//               value={state.contents}
//               onChange={handleChange}
//             />
//             <button>Submit</button>
//           </form>
//         </div>
//       );
// }

// export default Form;