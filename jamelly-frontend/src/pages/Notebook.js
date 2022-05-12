import React from "react";
import { motion } from "framer-motion";

function NotebookPage() {
  return (
    <motion.div
      className="NotebookMain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        <div id="NotebookPlaceholder">
          <p id="Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum, felis eu mollis convallis, erat elit auctor massa, eget accumsan dolor nibh vel nunc. Fusce nec facilisis neque. Nulla finibus consectetur erat, et vulputate risus tincidunt a. Proin enim metus, cursus eu enim eu, imperdiet congue orci. Ut in volutpat felis. 
Cras ornare ullamcorper nunc, eget tincidunt sapien lobortis ac. Sed consequat commodo nulla vel blandit. Integer ut sapien sit amet justo rutrum bibendum. Sed aliquam felis vel lectus tincidunt volutpat. Duis placerat, justo nec sollicitudin rhoncus, sem nisi posuere lacus, eu aliquam neque nulla sed justo. Vivamus</p>
        </div>
    </motion.div>
  );
}

export default NotebookPage;
