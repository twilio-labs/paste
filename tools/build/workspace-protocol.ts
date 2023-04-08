import {convertAllToWorkspaceProtocol} from '../utils/convertAllToWorkspaceProtocol';

(async () => {
  await Promise.all([convertAllToWorkspaceProtocol()]);
})();
