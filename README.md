# irnSrc `<my-gallery>`

## Main Project Structure

#### `app`
includes all module code.

#### `demo`
used for consuming, displaying and live configuration of module.

## Install and Run

#### Prerequisites

 * npm
 * grunt
 * [ruby-compass](http://compass-style.org/install/) and sass (`gem install sass`)

#### Build

execute `grunt build` in root dir.

#### Run

execute `node demo/server.js` (it will use _node-static_ to serve the contents of `demo/public`)

## Architecture and Design Considerations

#### Project Structure
1. `scripts/api` for _<my-gallery>_ directive.
2. `scripts/commons` for all encapsulated _components_, _filters_ and _services_.
3. `styles/` for all scss [partials](http://sass-lang.com/guide#topic-4) (per view)
4. `views/` for all angular html templates (minified and converted into `$templateCache.put` code)

#### Relying on Angualr Bootstrap
Widgets (buttons, drop-downs, carousel and pagination panel) were taken from angualr-bootstrap-ui.
Thus, module is dependant on external css file (bootstrap 3).

#### One controller to rule them all
`scripts/api/my-gallery.ctrl.js` is the **only** controller in the project,
and the **single source of truth** for the gallery's expected state (e.g. number of images per page, sorting status, etc...).
