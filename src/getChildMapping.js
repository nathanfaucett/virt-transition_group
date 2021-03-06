var virt = require("@nathanfaucett/virt");


var isPrimitiveView = virt.View.isPrimitiveView;


module.exports = getChildMapping;


function getChildMapping(children) {
    var childMapping = null,
        i = -1,
        il = children.length - 1,
        child;

    while (i++ < il) {
        child = children[i];

        if (!isPrimitiveView(child)) {
            childMapping = childMapping || {};
            childMapping[child.key] = child;
        }
    }

    return childMapping;
}
