/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as actions from "../actions";
import * as telemetry from "../../telemetry";

export default (store) => (next) => (action) => {
  switch (action.type) {
  case actions.ADD_ITEM_STARTING:
    telemetry.recordEvent("itemAdding", "addItemForm");
    break;
  case actions.ADD_ITEM_COMPLETED:
    if (action.interactive) {
      telemetry.recordEvent("itemAdded", "addItemForm");
    }
    break;
  case actions.UPDATE_ITEM_STARTING:
    telemetry.recordEvent("itemUpdating", "updatingItemForm");
    break;
  case actions.REMOVE_ITEM_STARTING:
    telemetry.recordEvent("itemDeleting", "updatingItemForm");
    break;
  case actions.SELECT_ITEM_COMPLETED:
    telemetry.recordEvent("itemSelected", "itemList");
    break;
  case actions.START_NEW_ITEM:
    telemetry.recordEvent("addClick", "addButton");
    break;
  }

  return next(action);
};