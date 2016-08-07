import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Wire from '../components/Wire'
import { increment, decrement } from '../actionsCreators'

const mapStateToProps = ({wiresCollection}, {wireIndex}) =>
  ({...wiresCollection[wireIndex]})

const mapDispatchToProps = (dispatch, {wireIndex}) =>
  bindActionCreators({
    increment: increment(wireIndex),
    decrement: decrement(wireIndex)
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Wire)
