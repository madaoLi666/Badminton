import React, {Component} from 'react';
import { InferGetServerSidePropsType, GetStaticProps } from "next"
import PropTypes from 'prop-types';
// import '@/app/globals.less';
import './index.sass';



// export default function BrandList(props:{text:string}) {


//   return (
//     <div className="main">
//       <div className="header">
//         BrandList
//       </div>
//       <div className="content">
//         <div className="message">
//           <div className="warning">warning</div>
//           <div className="error">error</div>
//         </div>
//         Recommend
//       </div>
//       <div>
//         Navigation
//       </div>
//     </div>
//   )
// }

class BrandList extends Component {

  constructor(props: any) {
    super(props);
    // this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e: any) {
    console.log(e);
  }

  render() {
    return (
      // <input
      //   type="text"
      //   onBlur={this.handleBlur}
      // />
      <div>
        <div/>
        <div></div>
        <div>{false}</div>
        <div>{null}</div>
        <div>{undefined}</div>
        <div>{true}</div>
      </div>
    )
  }
}
export default BrandList;