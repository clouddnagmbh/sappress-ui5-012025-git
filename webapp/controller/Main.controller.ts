import Controller from "sap/ui/core/mvc/Controller";
import MessageBox from "sap/m/MessageBox";
import MessageToast from "sap/m/MessageToast";
import Input from "sap/m/Input";

/**
 * @namespace at.clouddna.demo.controller
 */
export default class Main extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        let oView = this.getView(),
            oInputFirstname = oView?.byId("inputFirstname") as Input;
        oInputFirstname.setValue("Daniel");
    }

    private onSavePressed(){
        console.log("Test");
        MessageToast.show("Successfully saved.");
      }

      private onCancelPressed(){
        MessageBox.warning("Are you sure, you want to cancel?", {
          actions: [MessageBox.Action.YES, MessageBox.Action.NO],
          emphasizedAction: MessageBox.Action.YES, 
          onClose: (sSelectedAction: String) => {
            if(MessageBox.Action.YES === sSelectedAction){
              MessageBox.success("Successfully cancelled.");
            }
            }
        });
      }
      
}