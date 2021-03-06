import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Wire from '../components/Wire'
import { increment, decrement, hasFocus } from '../actionCreators'

const mapStateToProps = ({wires}, {wireIndex}) =>
  ({...wires.collection[wireIndex]})

const mapDispatchToProps = (dispatch, {wireIndex}) =>
  bindActionCreators({
    increment: increment(wireIndex),
    decrement: decrement(wireIndex),
    onFocus: hasFocus(wireIndex)
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Wire)
