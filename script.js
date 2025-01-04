
document.addEventListener('DOMContentLoaded', function() {
    var viewer = new $3Dmol.createViewer("molViewer", {
        backgroundColor: "white"
    });

    // Load a PDB structure - replace 'pdbID' with the actual PDB ID
    var pdbUri = 'https://files.rcsb.org/download/2POR.pdb'; // Example PDB ID
    $.get(pdbUri, function(data) {
        viewer.addModel(data, 'pdb');
        viewer.setStyle({}, {cartoon: {color: 'spectrum'}});
        viewer.zoomTo();
        viewer.render();
    });
});
