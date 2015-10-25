# irnSrc `<my-gallery>`

## Main Project Structure

#### `app`
includes all module code.

#### `demo`
used for consuming, displaying and live configuration of module.

## Install and Run

#### Prerequisites

 * bower
 * npm
 * grunt
 * [ruby-compass](http://compass-style.org/install/) and sass : `gem install compass` && `gem install sass`
 * node-static (used only for serving demo files): `npm install node-static`

#### Build

first, make sure above prerequisites are properly installed. then, cd into root dir:

* `bower install` (resolve to angualr 1.4.7 if conflict is prompt)
* `npm install`
* `grunt build`

#### Run

cd into `demo/`, execute `node server.js` and visit `localhost:8080`.

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
