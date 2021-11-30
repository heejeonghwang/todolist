// import React from 'react';
// import Counter from '../components/Counter';
// import { connect } from 'react-redux';
// import { increase, decrease } from '../modules/counter';
// import { bindActionCreators } from 'redux';

// const CounterContainer = ({number, increase, decrease}) => {
//     return <Counter number={number} onIncrease={increase} onDecrease={decrease} />
// }


// /** export 1번 ================================================================================= */
// /*컴포넌트를 리덕스와 연동시키기 connect함수 사용 */
// //리덕스 스토어 안의 상태 state를 컴포넌트의 props로 넘겨주는 함수
// const mapStateToProps = state => ({//파라미터는 현재스토어의 상태 state
//     number: state.counter.number
// });

// //액션생성 함수를 컴포넌트의 props로 넘겨주는 함수
// const mapDispatchToProps = dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease())
// });

// /*
// const makeContainer = connect(mapStateToProps, mapDispatchToProps);
// //connect 반환함수에 파라미터로 컴포넌트 넣어주면 리덕스와 연동된 컴포넌트가 만들어집니다.
// export default makeContainer(CounterContainer);
// */
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// /** export 2번 ================================================================================= */
// //익명함수 형태
// export default connect(
//     state => ({
//         number: state.counter.number
//     }),
//     dispatch => ({
//         increase: () => dispatch(increase()),
//         decrease: () => dispatch(decrease())
//     })
// )(CounterContainer);

// /*
// mapStateToProps -> 비구조화 할당을 통해 가져오기
// */
// const mapStateToProps = ({ counter }) => ({
//     number: counter.number
// })

// /*
// mapDispatchToProps -> bindActionCreators 유틸 함수 사용하여 dispatch감싸는 작업 없애기
// */
// const mapDispatchToProps = dispatch => 
//     bindActionCreators(
//         {
//             increase,
//             decrease
//         },
//         dispatch
//     )

// export default connect(
//     state => ({
//         number: state.counter.number
//     }),
//     dispatch => 
//         bindActionCreators(
//             {
//                 increase,
//                 decrease
//             },
//             dispatch
//         )
// )(CounterContainer);


// /** export 3번 ================================================================================= */
// //connect 함수 내부적으로 bindActionCreators 작업을 해줌. dispatch 자리에 객체 형태로 액션생성함수 넣어주기
// export default connect(
//     state => ({
//         number: state.counter.number
//     }),
//     {
//         increase,
//         decrease
//     }
// )(CounterContainer);

