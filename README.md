## What is the problem that is shown by this project:

webpack `chunkhash` algorithm does not take is consideration ids used by `DllReferencePlugin` to point to DLL modules located on external bundle.

* *case 1*: 
app references the `jquery` library that is bundled in the `dll/dist/lib.bundle.js` with the id=1 => the generated bundle has the hash `3831aaef113a5b3a187a`

* *case 2*: 
app references the `jquery` library that is bundled in the `dll/dist/lib.bundle.js` with the id=4 => the generated bundle has the hash `3831aaef113a5b3a187a`

* expected result:
The two bundles must have different hashes since they have different content.

## Prerequisits
* nodejs (tested with nodejs 5.5.0)
* yarn (tested with yarn 0.20.3)

## How to build?

At the root directory   
``
yarn build
``
