import { connect } from 'react-redux';
import PaneGrid from './pure';
import { PaneGridDispatchToProps } from './pure';
import { panes } from '../../actions';
import { ApplicationState, PanesState } from '../../reducers';

let mapStateToProps = ({ panes }: ApplicationState): PanesState => (
  {
    visiblePanes: panes.visiblePanes,
  }
);

let mapDispatchToProps: PaneGridDispatchToProps = {
    onToggleView: panes.toggleView,
  };

export default connect(mapStateToProps, mapDispatchToProps)(PaneGrid);
