<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Object Entries

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's own enumerable property key-value pairs.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-entries
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var objectEntries = require( '@stdlib/utils-entries' );
```

#### objectEntries( obj )

Returns an `array` of an object's own enumerable property `[key, value]` pairs.

```javascript
var obj = {
    'a': 1,
    'b': 2
};

var entries = objectEntries( obj );
// e.g., returns [ ['a', 1], ['b', 2] ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Entry order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic return values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var objectEntries = require( '@stdlib/utils-entries' );

var obj = {
    'beep': 'boop',
    'a': {
        'b': 'c'
    },
    'foo': [ 'bar' ]
};

var entries = objectEntries( obj );
// e.g., returns [ ['beep', 'boop'], ['a', {'b':'c'}], ['foo', [ 'bar' ]] ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-entries-in`][@stdlib/utils/entries-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property key-value pairs.</span>
-   <span class="package-name">[`@stdlib/utils-from-entries`][@stdlib/utils/from-entries]</span><span class="delimiter">: </span><span class="description">create an object from key-value pairs.</span>
-   <span class="package-name">[`@stdlib/utils-keys`][@stdlib/utils/keys]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils-values`][@stdlib/utils/values]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-entries.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-entries

[test-image]: https://github.com/stdlib-js/utils-entries/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-entries/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-entries/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-entries?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-entries.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-entries/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-entries/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-entries/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-entries/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-entries/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-entries/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/entries-in]: https://github.com/stdlib-js/utils-entries-in

[@stdlib/utils/from-entries]: https://github.com/stdlib-js/utils-from-entries

[@stdlib/utils/keys]: https://github.com/stdlib-js/utils-keys

[@stdlib/utils/values]: https://github.com/stdlib-js/utils-values

<!-- </related-links> -->

</section>

<!-- /.links -->
