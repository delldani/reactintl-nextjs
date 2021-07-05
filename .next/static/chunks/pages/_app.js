(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/262.js":
/*!************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/262.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToString": function() { return /* binding */ ToString; },
/* harmony export */   "ToNumber": function() { return /* binding */ ToNumber; },
/* harmony export */   "TimeClip": function() { return /* binding */ TimeClip; },
/* harmony export */   "ToObject": function() { return /* binding */ ToObject; },
/* harmony export */   "SameValue": function() { return /* binding */ SameValue; },
/* harmony export */   "ArrayCreate": function() { return /* binding */ ArrayCreate; },
/* harmony export */   "HasOwnProperty": function() { return /* binding */ HasOwnProperty; },
/* harmony export */   "Type": function() { return /* binding */ Type; },
/* harmony export */   "Day": function() { return /* binding */ Day; },
/* harmony export */   "WeekDay": function() { return /* binding */ WeekDay; },
/* harmony export */   "DayFromYear": function() { return /* binding */ DayFromYear; },
/* harmony export */   "TimeFromYear": function() { return /* binding */ TimeFromYear; },
/* harmony export */   "YearFromTime": function() { return /* binding */ YearFromTime; },
/* harmony export */   "DaysInYear": function() { return /* binding */ DaysInYear; },
/* harmony export */   "DayWithinYear": function() { return /* binding */ DayWithinYear; },
/* harmony export */   "InLeapYear": function() { return /* binding */ InLeapYear; },
/* harmony export */   "MonthFromTime": function() { return /* binding */ MonthFromTime; },
/* harmony export */   "DateFromTime": function() { return /* binding */ DateFromTime; },
/* harmony export */   "HourFromTime": function() { return /* binding */ HourFromTime; },
/* harmony export */   "MinFromTime": function() { return /* binding */ MinFromTime; },
/* harmony export */   "SecFromTime": function() { return /* binding */ SecFromTime; },
/* harmony export */   "OrdinaryHasInstance": function() { return /* binding */ OrdinaryHasInstance; },
/* harmony export */   "msFromTime": function() { return /* binding */ msFromTime; }
/* harmony export */ });
/**
 * https://tc39.es/ecma262/#sec-tostring
 */
function ToString(o) {
    // Only symbol is irregular...
    if (typeof o === 'symbol') {
        throw TypeError('Cannot convert a Symbol value to a string');
    }
    return String(o);
}
/**
 * https://tc39.es/ecma262/#sec-tonumber
 * @param val
 */
function ToNumber(val) {
    if (val === undefined) {
        return NaN;
    }
    if (val === null) {
        return +0;
    }
    if (typeof val === 'boolean') {
        return val ? 1 : +0;
    }
    if (typeof val === 'number') {
        return val;
    }
    if (typeof val === 'symbol' || typeof val === 'bigint') {
        throw new TypeError('Cannot convert symbol/bigint to number');
    }
    return Number(val);
}
/**
 * https://tc39.es/ecma262/#sec-tointeger
 * @param n
 */
function ToInteger(n) {
    var number = ToNumber(n);
    if (isNaN(number) || SameValue(number, -0)) {
        return 0;
    }
    if (isFinite(number)) {
        return number;
    }
    var integer = Math.floor(Math.abs(number));
    if (number < 0) {
        integer = -integer;
    }
    if (SameValue(integer, -0)) {
        return 0;
    }
    return integer;
}
/**
 * https://tc39.es/ecma262/#sec-timeclip
 * @param time
 */
function TimeClip(time) {
    if (!isFinite(time)) {
        return NaN;
    }
    if (Math.abs(time) > 8.64 * 1e15) {
        return NaN;
    }
    return ToInteger(time);
}
/**
 * https://tc39.es/ecma262/#sec-toobject
 * @param arg
 */
function ToObject(arg) {
    if (arg == null) {
        throw new TypeError('undefined/null cannot be converted to object');
    }
    return Object(arg);
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-samevalue
 * @param x
 * @param y
 */
function SameValue(x, y) {
    if (Object.is) {
        return Object.is(x, y);
    }
    // SameValue algorithm
    if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
    }
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-arraycreate
 * @param len
 */
function ArrayCreate(len) {
    return new Array(len);
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-hasownproperty
 * @param o
 * @param prop
 */
function HasOwnProperty(o, prop) {
    return Object.prototype.hasOwnProperty.call(o, prop);
}
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#sec-type
 * @param x
 */
function Type(x) {
    if (x === null) {
        return 'Null';
    }
    if (typeof x === 'undefined') {
        return 'Undefined';
    }
    if (typeof x === 'function' || typeof x === 'object') {
        return 'Object';
    }
    if (typeof x === 'number') {
        return 'Number';
    }
    if (typeof x === 'boolean') {
        return 'Boolean';
    }
    if (typeof x === 'string') {
        return 'String';
    }
    if (typeof x === 'symbol') {
        return 'Symbol';
    }
    if (typeof x === 'bigint') {
        return 'BigInt';
    }
}
var MS_PER_DAY = 86400000;
/**
 * https://www.ecma-international.org/ecma-262/11.0/index.html#eqn-modulo
 * @param x
 * @param y
 * @return k of the same sign as y
 */
function mod(x, y) {
    return x - Math.floor(x / y) * y;
}
/**
 * https://tc39.es/ecma262/#eqn-Day
 * @param t
 */
function Day(t) {
    return Math.floor(t / MS_PER_DAY);
}
/**
 * https://tc39.es/ecma262/#sec-week-day
 * @param t
 */
function WeekDay(t) {
    return mod(Day(t) + 4, 7);
}
/**
 * https://tc39.es/ecma262/#sec-year-number
 * @param y
 */
function DayFromYear(y) {
    return Date.UTC(y, 0) / MS_PER_DAY;
}
/**
 * https://tc39.es/ecma262/#sec-year-number
 * @param y
 */
function TimeFromYear(y) {
    return Date.UTC(y, 0);
}
/**
 * https://tc39.es/ecma262/#sec-year-number
 * @param t
 */
function YearFromTime(t) {
    return new Date(t).getUTCFullYear();
}
function DaysInYear(y) {
    if (y % 4 !== 0) {
        return 365;
    }
    if (y % 100 !== 0) {
        return 366;
    }
    if (y % 400 !== 0) {
        return 365;
    }
    return 366;
}
function DayWithinYear(t) {
    return Day(t) - DayFromYear(YearFromTime(t));
}
function InLeapYear(t) {
    return DaysInYear(YearFromTime(t)) === 365 ? 0 : 1;
}
/**
 * https://tc39.es/ecma262/#sec-month-number
 * @param t
 */
function MonthFromTime(t) {
    var dwy = DayWithinYear(t);
    var leap = InLeapYear(t);
    if (dwy >= 0 && dwy < 31) {
        return 0;
    }
    if (dwy < 59 + leap) {
        return 1;
    }
    if (dwy < 90 + leap) {
        return 2;
    }
    if (dwy < 120 + leap) {
        return 3;
    }
    if (dwy < 151 + leap) {
        return 4;
    }
    if (dwy < 181 + leap) {
        return 5;
    }
    if (dwy < 212 + leap) {
        return 6;
    }
    if (dwy < 243 + leap) {
        return 7;
    }
    if (dwy < 273 + leap) {
        return 8;
    }
    if (dwy < 304 + leap) {
        return 9;
    }
    if (dwy < 334 + leap) {
        return 10;
    }
    if (dwy < 365 + leap) {
        return 11;
    }
    throw new Error('Invalid time');
}
function DateFromTime(t) {
    var dwy = DayWithinYear(t);
    var mft = MonthFromTime(t);
    var leap = InLeapYear(t);
    if (mft === 0) {
        return dwy + 1;
    }
    if (mft === 1) {
        return dwy - 30;
    }
    if (mft === 2) {
        return dwy - 58 - leap;
    }
    if (mft === 3) {
        return dwy - 89 - leap;
    }
    if (mft === 4) {
        return dwy - 119 - leap;
    }
    if (mft === 5) {
        return dwy - 150 - leap;
    }
    if (mft === 6) {
        return dwy - 180 - leap;
    }
    if (mft === 7) {
        return dwy - 211 - leap;
    }
    if (mft === 8) {
        return dwy - 242 - leap;
    }
    if (mft === 9) {
        return dwy - 272 - leap;
    }
    if (mft === 10) {
        return dwy - 303 - leap;
    }
    if (mft === 11) {
        return dwy - 333 - leap;
    }
    throw new Error('Invalid time');
}
var HOURS_PER_DAY = 24;
var MINUTES_PER_HOUR = 60;
var SECONDS_PER_MINUTE = 60;
var MS_PER_SECOND = 1e3;
var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;
function HourFromTime(t) {
    return mod(Math.floor(t / MS_PER_HOUR), HOURS_PER_DAY);
}
function MinFromTime(t) {
    return mod(Math.floor(t / MS_PER_MINUTE), MINUTES_PER_HOUR);
}
function SecFromTime(t) {
    return mod(Math.floor(t / MS_PER_SECOND), SECONDS_PER_MINUTE);
}
function IsCallable(fn) {
    return typeof fn === 'function';
}
/**
 * The abstract operation OrdinaryHasInstance implements
 * the default algorithm for determining if an object O
 * inherits from the instance object inheritance path
 * provided by constructor C.
 * @param C class
 * @param O object
 * @param internalSlots internalSlots
 */
function OrdinaryHasInstance(C, O, internalSlots) {
    if (!IsCallable(C)) {
        return false;
    }
    if (internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction) {
        var BC = internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction;
        return O instanceof BC;
    }
    if (typeof O !== 'object') {
        return false;
    }
    var P = C.prototype;
    if (typeof P !== 'object') {
        throw new TypeError('OrdinaryHasInstance called on an object with an invalid prototype property.');
    }
    return Object.prototype.isPrototypeOf.call(P, O);
}
function msFromTime(t) {
    return mod(t, MS_PER_SECOND);
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/BestAvailableLocale.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/BestAvailableLocale.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestAvailableLocale": function() { return /* binding */ BestAvailableLocale; }
/* harmony export */ });
/**
 * https://tc39.es/ecma402/#sec-bestavailablelocale
 * @param availableLocales
 * @param locale
 */
function BestAvailableLocale(availableLocales, locale) {
    var candidate = locale;
    while (true) {
        if (availableLocales.has(candidate)) {
            return candidate;
        }
        var pos = candidate.lastIndexOf('-');
        if (!~pos) {
            return undefined;
        }
        if (pos >= 2 && candidate[pos - 2] === '-') {
            pos -= 2;
        }
        candidate = candidate.slice(0, pos);
    }
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/BestFitMatcher.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/BestFitMatcher.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestFitMatcher": function() { return /* binding */ BestFitMatcher; }
/* harmony export */ });
/* harmony import */ var _BestAvailableLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BestAvailableLocale */ "./node_modules/@formatjs/ecma402-abstract/lib/BestAvailableLocale.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");


/**
 * https://tc39.es/ecma402/#sec-bestfitmatcher
 * @param availableLocales
 * @param requestedLocales
 * @param getDefaultLocale
 */
function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var minimizedAvailableLocaleMap = {};
    var minimizedAvailableLocales = new Set();
    availableLocales.forEach(function (locale) {
        var minimizedLocale = new Intl.Locale(locale)
            .minimize()
            .toString();
        minimizedAvailableLocaleMap[minimizedLocale] = locale;
        minimizedAvailableLocales.add(minimizedLocale);
    });
    var foundLocale;
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
        var l = requestedLocales_1[_i];
        if (foundLocale) {
            break;
        }
        var noExtensionLocale = l.replace(_utils__WEBPACK_IMPORTED_MODULE_0__.UNICODE_EXTENSION_SEQUENCE_REGEX, '');
        if (availableLocales.has(noExtensionLocale)) {
            foundLocale = noExtensionLocale;
            break;
        }
        if (minimizedAvailableLocales.has(noExtensionLocale)) {
            foundLocale = minimizedAvailableLocaleMap[noExtensionLocale];
            break;
        }
        var locale = new Intl.Locale(noExtensionLocale);
        var maximizedRequestedLocale = locale.maximize().toString();
        var minimizedRequestedLocale = locale.minimize().toString();
        // Check minimized locale
        if (minimizedAvailableLocales.has(minimizedRequestedLocale)) {
            foundLocale = minimizedAvailableLocaleMap[minimizedRequestedLocale];
            break;
        }
        // Lookup algo on maximized locale
        foundLocale = (0,_BestAvailableLocale__WEBPACK_IMPORTED_MODULE_1__.BestAvailableLocale)(minimizedAvailableLocales, maximizedRequestedLocale);
    }
    return {
        locale: foundLocale || getDefaultLocale(),
    };
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanonicalizeLocaleList": function() { return /* binding */ CanonicalizeLocaleList; }
/* harmony export */ });
/**
 * http://ecma-international.org/ecma-402/7.0/index.html#sec-canonicalizelocalelist
 * @param locales
 */
function CanonicalizeLocaleList(locales) {
    // TODO
    return Intl.getCanonicalLocales(locales);
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeTimeZoneName.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeTimeZoneName.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanonicalizeTimeZoneName": function() { return /* binding */ CanonicalizeTimeZoneName; }
/* harmony export */ });
/**
 * https://tc39.es/ecma402/#sec-canonicalizetimezonename
 * @param tz
 */
function CanonicalizeTimeZoneName(tz, _a) {
    var tzData = _a.tzData, uppercaseLinks = _a.uppercaseLinks;
    var uppercasedTz = tz.toUpperCase();
    var uppercasedZones = Object.keys(tzData).reduce(function (all, z) {
        all[z.toUpperCase()] = z;
        return all;
    }, {});
    var ianaTimeZone = uppercaseLinks[uppercasedTz] || uppercasedZones[uppercasedTz];
    if (ianaTimeZone === 'Etc/UTC' || ianaTimeZone === 'Etc/GMT') {
        return 'UTC';
    }
    return ianaTimeZone;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/CoerceOptionsToObject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/CoerceOptionsToObject.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoerceOptionsToObject": function() { return /* binding */ CoerceOptionsToObject; }
/* harmony export */ });
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");

/**
 * https://tc39.es/ecma402/#sec-coerceoptionstoobject
 * @param options
 * @returns
 */
function CoerceOptionsToObject(options) {
    if (typeof options === 'undefined') {
        return Object.create(null);
    }
    return (0,_262__WEBPACK_IMPORTED_MODULE_0__.ToObject)(options);
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultNumberOption": function() { return /* binding */ DefaultNumberOption; }
/* harmony export */ });
function DefaultNumberOption(val, min, max, fallback) {
    if (val !== undefined) {
        val = Number(val);
        if (isNaN(val) || val < min || val > max) {
            throw new RangeError(val + " is outside of range [" + min + ", " + max + "]");
        }
        return Math.floor(val);
    }
    return fallback;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/GetNumberOption.js":
/*!************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/GetNumberOption.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetNumberOption": function() { return /* binding */ GetNumberOption; }
/* harmony export */ });
/* harmony import */ var _DefaultNumberOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultNumberOption */ "./node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js");
/**
 * https://tc39.es/ecma402/#sec-getnumberoption
 * @param options
 * @param property
 * @param min
 * @param max
 * @param fallback
 */

function GetNumberOption(options, property, minimum, maximum, fallback) {
    var val = options[property];
    // @ts-expect-error
    return (0,_DefaultNumberOption__WEBPACK_IMPORTED_MODULE_0__.DefaultNumberOption)(val, minimum, maximum, fallback);
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js":
/*!******************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetOption": function() { return /* binding */ GetOption; }
/* harmony export */ });
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");

/**
 * https://tc39.es/ecma402/#sec-getoption
 * @param opts
 * @param prop
 * @param type
 * @param values
 * @param fallback
 */
function GetOption(opts, prop, type, values, fallback) {
    if (typeof opts !== 'object') {
        throw new TypeError('Options must be an object');
    }
    var value = opts[prop];
    if (value !== undefined) {
        if (type !== 'boolean' && type !== 'string') {
            throw new TypeError('invalid type');
        }
        if (type === 'boolean') {
            value = Boolean(value);
        }
        if (type === 'string') {
            value = (0,_262__WEBPACK_IMPORTED_MODULE_0__.ToString)(value);
        }
        if (values !== undefined && !values.filter(function (val) { return val == value; }).length) {
            throw new RangeError(value + " is not within " + values.join(', '));
        }
        return value;
    }
    return fallback;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/GetOptionsObject.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/GetOptionsObject.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetOptionsObject": function() { return /* binding */ GetOptionsObject; }
/* harmony export */ });
/**
 * https://tc39.es/ecma402/#sec-getoptionsobject
 * @param options
 * @returns
 */
function GetOptionsObject(options) {
    if (typeof options === 'undefined') {
        return Object.create(null);
    }
    if (typeof options === 'object') {
        return options;
    }
    throw new TypeError('Options must be an object');
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SANCTIONED_UNITS": function() { return /* binding */ SANCTIONED_UNITS; },
/* harmony export */   "removeUnitNamespace": function() { return /* binding */ removeUnitNamespace; },
/* harmony export */   "SIMPLE_UNITS": function() { return /* binding */ SIMPLE_UNITS; },
/* harmony export */   "IsSanctionedSimpleUnitIdentifier": function() { return /* binding */ IsSanctionedSimpleUnitIdentifier; }
/* harmony export */ });
/**
 * https://tc39.es/ecma402/#table-sanctioned-simple-unit-identifiers
 */
var SANCTIONED_UNITS = [
    'angle-degree',
    'area-acre',
    'area-hectare',
    'concentr-percent',
    'digital-bit',
    'digital-byte',
    'digital-gigabit',
    'digital-gigabyte',
    'digital-kilobit',
    'digital-kilobyte',
    'digital-megabit',
    'digital-megabyte',
    'digital-petabyte',
    'digital-terabit',
    'digital-terabyte',
    'duration-day',
    'duration-hour',
    'duration-millisecond',
    'duration-minute',
    'duration-month',
    'duration-second',
    'duration-week',
    'duration-year',
    'length-centimeter',
    'length-foot',
    'length-inch',
    'length-kilometer',
    'length-meter',
    'length-mile-scandinavian',
    'length-mile',
    'length-millimeter',
    'length-yard',
    'mass-gram',
    'mass-kilogram',
    'mass-ounce',
    'mass-pound',
    'mass-stone',
    'temperature-celsius',
    'temperature-fahrenheit',
    'volume-fluid-ounce',
    'volume-gallon',
    'volume-liter',
    'volume-milliliter',
];
// In CLDR, the unit name always follows the form `namespace-unit` pattern.
// For example: `digital-bit` instead of `bit`. This function removes the namespace prefix.
function removeUnitNamespace(unit) {
    return unit.slice(unit.indexOf('-') + 1);
}
/**
 * https://tc39.es/ecma402/#table-sanctioned-simple-unit-identifiers
 */
var SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);
/**
 * https://tc39.es/ecma402/#sec-issanctionedsimpleunitidentifier
 */
function IsSanctionedSimpleUnitIdentifier(unitIdentifier) {
    return SIMPLE_UNITS.indexOf(unitIdentifier) > -1;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/IsValidTimeZoneName.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/IsValidTimeZoneName.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsValidTimeZoneName": function() { return /* binding */ IsValidTimeZoneName; }
/* harmony export */ });
/**
 * https://tc39.es/ecma402/#sec-isvalidtimezonename
 * @param tz
 * @param implDetails implementation details
 */
function IsValidTimeZoneName(tz, _a) {
    var tzData = _a.tzData, uppercaseLinks = _a.uppercaseLinks;
    var uppercasedTz = tz.toUpperCase();
    var zoneNames = new Set();
    var linkNames = new Set();
    Object.keys(tzData)
        .map(function (z) { return z.toUpperCase(); })
        .forEach(function (z) { return zoneNames.add(z); });
    Object.keys(uppercaseLinks).forEach(function (linkName) {
        linkNames.add(linkName.toUpperCase());
        zoneNames.add(uppercaseLinks[linkName].toUpperCase());
    });
    return zoneNames.has(uppercasedTz) || linkNames.has(uppercasedTz);
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedCurrencyCode.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedCurrencyCode.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsWellFormedCurrencyCode": function() { return /* binding */ IsWellFormedCurrencyCode; }
/* harmony export */ });
/**
 * This follows https://tc39.es/ecma402/#sec-case-sensitivity-and-case-mapping
 * @param str string to convert
 */
function toUpperCase(str) {
    return str.replace(/([a-z])/g, function (_, c) { return c.toUpperCase(); });
}
var NOT_A_Z_REGEX = /[^A-Z]/;
/**
 * https://tc39.es/ecma402/#sec-iswellformedcurrencycode
 */
function IsWellFormedCurrencyCode(currency) {
    currency = toUpperCase(currency);
    if (currency.length !== 3) {
        return false;
    }
    if (NOT_A_Z_REGEX.test(currency)) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedUnitIdentifier.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedUnitIdentifier.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsWellFormedUnitIdentifier": function() { return /* binding */ IsWellFormedUnitIdentifier; }
/* harmony export */ });
/* harmony import */ var _IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IsSanctionedSimpleUnitIdentifier */ "./node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js");

/**
 * This follows https://tc39.es/ecma402/#sec-case-sensitivity-and-case-mapping
 * @param str string to convert
 */
function toLowerCase(str) {
    return str.replace(/([A-Z])/g, function (_, c) { return c.toLowerCase(); });
}
/**
 * https://tc39.es/ecma402/#sec-iswellformedunitidentifier
 * @param unit
 */
function IsWellFormedUnitIdentifier(unit) {
    unit = toLowerCase(unit);
    if ((0,_IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_0__.IsSanctionedSimpleUnitIdentifier)(unit)) {
        return true;
    }
    var units = unit.split('-per-');
    if (units.length !== 2) {
        return false;
    }
    var numerator = units[0], denominator = units[1];
    if (!(0,_IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_0__.IsSanctionedSimpleUnitIdentifier)(numerator) ||
        !(0,_IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_0__.IsSanctionedSimpleUnitIdentifier)(denominator)) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/LookupMatcher.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/LookupMatcher.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupMatcher": function() { return /* binding */ LookupMatcher; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");
/* harmony import */ var _BestAvailableLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BestAvailableLocale */ "./node_modules/@formatjs/ecma402-abstract/lib/BestAvailableLocale.js");


/**
 * https://tc39.es/ecma402/#sec-lookupmatcher
 * @param availableLocales
 * @param requestedLocales
 * @param getDefaultLocale
 */
function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var result = { locale: '' };
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
        var locale = requestedLocales_1[_i];
        var noExtensionLocale = locale.replace(_utils__WEBPACK_IMPORTED_MODULE_0__.UNICODE_EXTENSION_SEQUENCE_REGEX, '');
        var availableLocale = (0,_BestAvailableLocale__WEBPACK_IMPORTED_MODULE_1__.BestAvailableLocale)(availableLocales, noExtensionLocale);
        if (availableLocale) {
            result.locale = availableLocale;
            if (locale !== noExtensionLocale) {
                result.extension = locale.slice(noExtensionLocale.length + 1, locale.length);
            }
            return result;
        }
    }
    result.locale = getDefaultLocale();
    return result;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/LookupSupportedLocales.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/LookupSupportedLocales.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupSupportedLocales": function() { return /* binding */ LookupSupportedLocales; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");
/* harmony import */ var _BestAvailableLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BestAvailableLocale */ "./node_modules/@formatjs/ecma402-abstract/lib/BestAvailableLocale.js");


/**
 * https://tc39.es/ecma402/#sec-lookupsupportedlocales
 * @param availableLocales
 * @param requestedLocales
 */
function LookupSupportedLocales(availableLocales, requestedLocales) {
    var subset = [];
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
        var locale = requestedLocales_1[_i];
        var noExtensionLocale = locale.replace(_utils__WEBPACK_IMPORTED_MODULE_0__.UNICODE_EXTENSION_SEQUENCE_REGEX, '');
        var availableLocale = (0,_BestAvailableLocale__WEBPACK_IMPORTED_MODULE_1__.BestAvailableLocale)(availableLocales, noExtensionLocale);
        if (availableLocale) {
            subset.push(availableLocale);
        }
    }
    return subset;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponent.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputeExponent": function() { return /* binding */ ComputeExponent; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");
/* harmony import */ var _ComputeExponentForMagnitude__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputeExponentForMagnitude */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js");
/* harmony import */ var _FormatNumericToString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatNumericToString */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js");



/**
 * The abstract operation ComputeExponent computes an exponent (power of ten) by which to scale x
 * according to the number formatting settings. It handles cases such as 999 rounding up to 1000,
 * requiring a different exponent.
 *
 * NOT IN SPEC: it returns [exponent, magnitude].
 */
function ComputeExponent(numberFormat, x, _a) {
    var getInternalSlots = _a.getInternalSlots;
    if (x === 0) {
        return [0, 0];
    }
    if (x < 0) {
        x = -x;
    }
    var magnitude = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getMagnitude)(x);
    var exponent = (0,_ComputeExponentForMagnitude__WEBPACK_IMPORTED_MODULE_1__.ComputeExponentForMagnitude)(numberFormat, magnitude, {
        getInternalSlots: getInternalSlots,
    });
    // Preserve more precision by doing multiplication when exponent is negative.
    x = exponent < 0 ? x * Math.pow(10, -exponent) : x / Math.pow(10, exponent);
    var formatNumberResult = (0,_FormatNumericToString__WEBPACK_IMPORTED_MODULE_2__.FormatNumericToString)(getInternalSlots(numberFormat), x);
    if (formatNumberResult.roundedNumber === 0) {
        return [exponent, magnitude];
    }
    var newMagnitude = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getMagnitude)(formatNumberResult.roundedNumber);
    if (newMagnitude === magnitude - exponent) {
        return [exponent, magnitude];
    }
    return [
        (0,_ComputeExponentForMagnitude__WEBPACK_IMPORTED_MODULE_1__.ComputeExponentForMagnitude)(numberFormat, magnitude + 1, {
            getInternalSlots: getInternalSlots,
        }),
        magnitude + 1,
    ];
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputeExponentForMagnitude": function() { return /* binding */ ComputeExponentForMagnitude; }
/* harmony export */ });
/**
 * The abstract operation ComputeExponentForMagnitude computes an exponent by which to scale a
 * number of the given magnitude (power of ten of the most significant digit) according to the
 * locale and the desired notation (scientific, engineering, or compact).
 */
function ComputeExponentForMagnitude(numberFormat, magnitude, _a) {
    var getInternalSlots = _a.getInternalSlots;
    var internalSlots = getInternalSlots(numberFormat);
    var notation = internalSlots.notation, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
    switch (notation) {
        case 'standard':
            return 0;
        case 'scientific':
            return magnitude;
        case 'engineering':
            return Math.floor(magnitude / 3) * 3;
        default: {
            // Let exponent be an implementation- and locale-dependent (ILD) integer by which to scale a
            // number of the given magnitude in compact notation for the current locale.
            var compactDisplay = internalSlots.compactDisplay, style = internalSlots.style, currencyDisplay = internalSlots.currencyDisplay;
            var thresholdMap = void 0;
            if (style === 'currency' && currencyDisplay !== 'name') {
                var currency = dataLocaleData.numbers.currency[numberingSystem] ||
                    dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]];
                thresholdMap = currency.short;
            }
            else {
                var decimal = dataLocaleData.numbers.decimal[numberingSystem] ||
                    dataLocaleData.numbers.decimal[dataLocaleData.numbers.nu[0]];
                thresholdMap = compactDisplay === 'long' ? decimal.long : decimal.short;
            }
            if (!thresholdMap) {
                return 0;
            }
            var num = String(Math.pow(10, magnitude));
            var thresholds = Object.keys(thresholdMap); // TODO: this can be pre-processed
            if (num < thresholds[0]) {
                return 0;
            }
            if (num > thresholds[thresholds.length - 1]) {
                return thresholds[thresholds.length - 1].length - 1;
            }
            var i = thresholds.indexOf(num);
            if (i === -1) {
                return 0;
            }
            // See https://unicode.org/reports/tr35/tr35-numbers.html#Compact_Number_Formats
            // Special handling if the pattern is precisely `0`.
            var magnitudeKey = thresholds[i];
            // TODO: do we need to handle plural here?
            var compactPattern = thresholdMap[magnitudeKey].other;
            if (compactPattern === '0') {
                return 0;
            }
            // Example: in zh-TW, `10000000` maps to `0000萬`. So we need to return 8 - 4 = 4 here.
            return (magnitudeKey.length -
                thresholdMap[magnitudeKey].other.match(/0+/)[0].length);
        }
    }
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CurrencyDigits.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CurrencyDigits.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyDigits": function() { return /* binding */ CurrencyDigits; }
/* harmony export */ });
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");

/**
 * https://tc39.es/ecma402/#sec-currencydigits
 */
function CurrencyDigits(c, _a) {
    var currencyDigitsData = _a.currencyDigitsData;
    return (0,_262__WEBPACK_IMPORTED_MODULE_0__.HasOwnProperty)(currencyDigitsData, c)
        ? currencyDigitsData[c]
        : 2;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToParts.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToParts.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatNumericToParts": function() { return /* binding */ FormatNumericToParts; }
/* harmony export */ });
/* harmony import */ var _PartitionNumberPattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartitionNumberPattern */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberPattern.js");
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");


function FormatNumericToParts(nf, x, implDetails) {
    var parts = (0,_PartitionNumberPattern__WEBPACK_IMPORTED_MODULE_0__.PartitionNumberPattern)(nf, x, implDetails);
    var result = (0,_262__WEBPACK_IMPORTED_MODULE_1__.ArrayCreate)(0);
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
        var part = parts_1[_i];
        result.push({
            type: part.type,
            value: part.value,
        });
    }
    return result;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatNumericToString": function() { return /* binding */ FormatNumericToString; }
/* harmony export */ });
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");
/* harmony import */ var _ToRawPrecision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToRawPrecision */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");
/* harmony import */ var _ToRawFixed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToRawFixed */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js");




/**
 * https://tc39.es/ecma402/#sec-formatnumberstring
 */
function FormatNumericToString(intlObject, x) {
    var isNegative = x < 0 || (0,_262__WEBPACK_IMPORTED_MODULE_0__.SameValue)(x, -0);
    if (isNegative) {
        x = -x;
    }
    var result;
    var rourndingType = intlObject.roundingType;
    switch (rourndingType) {
        case 'significantDigits':
            result = (0,_ToRawPrecision__WEBPACK_IMPORTED_MODULE_1__.ToRawPrecision)(x, intlObject.minimumSignificantDigits, intlObject.maximumSignificantDigits);
            break;
        case 'fractionDigits':
            result = (0,_ToRawFixed__WEBPACK_IMPORTED_MODULE_2__.ToRawFixed)(x, intlObject.minimumFractionDigits, intlObject.maximumFractionDigits);
            break;
        default:
            result = (0,_ToRawPrecision__WEBPACK_IMPORTED_MODULE_1__.ToRawPrecision)(x, 1, 2);
            if (result.integerDigitsCount > 1) {
                result = (0,_ToRawFixed__WEBPACK_IMPORTED_MODULE_2__.ToRawFixed)(x, 0, 0);
            }
            break;
    }
    x = result.roundedNumber;
    var string = result.formattedString;
    var int = result.integerDigitsCount;
    var minInteger = intlObject.minimumIntegerDigits;
    if (int < minInteger) {
        var forwardZeros = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.repeat)('0', minInteger - int);
        string = forwardZeros + string;
    }
    if (isNegative) {
        x = -x;
    }
    return { roundedNumber: x, formattedString: string };
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/InitializeNumberFormat.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/InitializeNumberFormat.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitializeNumberFormat": function() { return /* binding */ InitializeNumberFormat; }
/* harmony export */ });
/* harmony import */ var _CanonicalizeLocaleList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CanonicalizeLocaleList */ "./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js");
/* harmony import */ var _GetOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GetOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js");
/* harmony import */ var _ResolveLocale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ResolveLocale */ "./node_modules/@formatjs/ecma402-abstract/lib/ResolveLocale.js");
/* harmony import */ var _SetNumberFormatUnitOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SetNumberFormatUnitOptions */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatUnitOptions.js");
/* harmony import */ var _CurrencyDigits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CurrencyDigits */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CurrencyDigits.js");
/* harmony import */ var _SetNumberFormatDigitOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SetNumberFormatDigitOptions */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");
/* harmony import */ var _CoerceOptionsToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CoerceOptionsToObject */ "./node_modules/@formatjs/ecma402-abstract/lib/CoerceOptionsToObject.js");








/**
 * https://tc39.es/ecma402/#sec-initializenumberformat
 */
function InitializeNumberFormat(nf, locales, opts, _a) {
    var getInternalSlots = _a.getInternalSlots, localeData = _a.localeData, availableLocales = _a.availableLocales, numberingSystemNames = _a.numberingSystemNames, getDefaultLocale = _a.getDefaultLocale, currencyDigitsData = _a.currencyDigitsData;
    // @ts-ignore
    var requestedLocales = (0,_CanonicalizeLocaleList__WEBPACK_IMPORTED_MODULE_0__.CanonicalizeLocaleList)(locales);
    var options = (0,_CoerceOptionsToObject__WEBPACK_IMPORTED_MODULE_1__.CoerceOptionsToObject)(opts);
    var opt = Object.create(null);
    var matcher = (0,_GetOption__WEBPACK_IMPORTED_MODULE_2__.GetOption)(options, 'localeMatcher', 'string', ['lookup', 'best fit'], 'best fit');
    opt.localeMatcher = matcher;
    var numberingSystem = (0,_GetOption__WEBPACK_IMPORTED_MODULE_2__.GetOption)(options, 'numberingSystem', 'string', undefined, undefined);
    if (numberingSystem !== undefined &&
        numberingSystemNames.indexOf(numberingSystem) < 0) {
        // 8.a. If numberingSystem does not match the Unicode Locale Identifier type nonterminal,
        // throw a RangeError exception.
        throw RangeError("Invalid numberingSystems: " + numberingSystem);
    }
    opt.nu = numberingSystem;
    var r = (0,_ResolveLocale__WEBPACK_IMPORTED_MODULE_3__.ResolveLocale)(availableLocales, requestedLocales, opt, 
    // [[RelevantExtensionKeys]] slot, which is a constant
    ['nu'], localeData, getDefaultLocale);
    var dataLocaleData = localeData[r.dataLocale];
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.invariant)(!!dataLocaleData, "Missing locale data for " + r.dataLocale);
    var internalSlots = getInternalSlots(nf);
    internalSlots.locale = r.locale;
    internalSlots.dataLocale = r.dataLocale;
    internalSlots.numberingSystem = r.nu;
    internalSlots.dataLocaleData = dataLocaleData;
    (0,_SetNumberFormatUnitOptions__WEBPACK_IMPORTED_MODULE_5__.SetNumberFormatUnitOptions)(nf, options, { getInternalSlots: getInternalSlots });
    var style = internalSlots.style;
    var mnfdDefault;
    var mxfdDefault;
    if (style === 'currency') {
        var currency = internalSlots.currency;
        var cDigits = (0,_CurrencyDigits__WEBPACK_IMPORTED_MODULE_6__.CurrencyDigits)(currency, { currencyDigitsData: currencyDigitsData });
        mnfdDefault = cDigits;
        mxfdDefault = cDigits;
    }
    else {
        mnfdDefault = 0;
        mxfdDefault = style === 'percent' ? 0 : 3;
    }
    var notation = (0,_GetOption__WEBPACK_IMPORTED_MODULE_2__.GetOption)(options, 'notation', 'string', ['standard', 'scientific', 'engineering', 'compact'], 'standard');
    internalSlots.notation = notation;
    (0,_SetNumberFormatDigitOptions__WEBPACK_IMPORTED_MODULE_7__.SetNumberFormatDigitOptions)(internalSlots, options, mnfdDefault, mxfdDefault, notation);
    var compactDisplay = (0,_GetOption__WEBPACK_IMPORTED_MODULE_2__.GetOption)(options, 'compactDisplay', 'string', ['short', 'long'], 'short');
    if (notation === 'compact') {
        internalSlots.compactDisplay = compactDisplay;
    }
    var useGrouping = (0,_GetOption__WEBPACK_IMPORTED_MODULE_2__.GetOption)(options, 'useGrouping', 'boolean', undefined, true);
    internalSlots.useGrouping = useGrouping;
    var signDisplay = (0,_GetOption__WEBPACK_IMPORTED_MODULE_2__.GetOption)(options, 'signDisplay', 'string', ['auto', 'never', 'always', 'exceptZero'], 'auto');
    internalSlots.signDisplay = signDisplay;
    return nf;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberPattern.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberPattern.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartitionNumberPattern": function() { return /* binding */ PartitionNumberPattern; }
/* harmony export */ });
/* harmony import */ var _FormatNumericToString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormatNumericToString */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js");
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");
/* harmony import */ var _ComputeExponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComputeExponent */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponent.js");
/* harmony import */ var _format_to_parts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format_to_parts */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js");




/**
 * https://tc39.es/ecma402/#sec-formatnumberstring
 */
function PartitionNumberPattern(numberFormat, x, _a) {
    var _b;
    var getInternalSlots = _a.getInternalSlots;
    var internalSlots = getInternalSlots(numberFormat);
    var pl = internalSlots.pl, dataLocaleData = internalSlots.dataLocaleData, numberingSystem = internalSlots.numberingSystem;
    var symbols = dataLocaleData.numbers.symbols[numberingSystem] ||
        dataLocaleData.numbers.symbols[dataLocaleData.numbers.nu[0]];
    var magnitude = 0;
    var exponent = 0;
    var n;
    if (isNaN(x)) {
        n = symbols.nan;
    }
    else if (!isFinite(x)) {
        n = symbols.infinity;
    }
    else {
        if (internalSlots.style === 'percent') {
            x *= 100;
        }
        ;
        _b = (0,_ComputeExponent__WEBPACK_IMPORTED_MODULE_0__.ComputeExponent)(numberFormat, x, {
            getInternalSlots: getInternalSlots,
        }), exponent = _b[0], magnitude = _b[1];
        // Preserve more precision by doing multiplication when exponent is negative.
        x = exponent < 0 ? x * Math.pow(10, -exponent) : x / Math.pow(10, exponent);
        var formatNumberResult = (0,_FormatNumericToString__WEBPACK_IMPORTED_MODULE_1__.FormatNumericToString)(internalSlots, x);
        n = formatNumberResult.formattedString;
        x = formatNumberResult.roundedNumber;
    }
    // Based on https://tc39.es/ecma402/#sec-getnumberformatpattern
    // We need to do this before `x` is rounded.
    var sign;
    var signDisplay = internalSlots.signDisplay;
    switch (signDisplay) {
        case 'never':
            sign = 0;
            break;
        case 'auto':
            if ((0,_262__WEBPACK_IMPORTED_MODULE_2__.SameValue)(x, 0) || x > 0 || isNaN(x)) {
                sign = 0;
            }
            else {
                sign = -1;
            }
            break;
        case 'always':
            if ((0,_262__WEBPACK_IMPORTED_MODULE_2__.SameValue)(x, 0) || x > 0 || isNaN(x)) {
                sign = 1;
            }
            else {
                sign = -1;
            }
            break;
        default:
            // x === 0 -> x is 0 or x is -0
            if (x === 0 || isNaN(x)) {
                sign = 0;
            }
            else if (x > 0) {
                sign = 1;
            }
            else {
                sign = -1;
            }
    }
    return (0,_format_to_parts__WEBPACK_IMPORTED_MODULE_3__.default)({ roundedNumber: x, formattedString: n, exponent: exponent, magnitude: magnitude, sign: sign }, internalSlots.dataLocaleData, pl, internalSlots);
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetNumberFormatDigitOptions": function() { return /* binding */ SetNumberFormatDigitOptions; }
/* harmony export */ });
/* harmony import */ var _GetNumberOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GetNumberOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetNumberOption.js");
/* harmony import */ var _DefaultNumberOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DefaultNumberOption */ "./node_modules/@formatjs/ecma402-abstract/lib/DefaultNumberOption.js");


/**
 * https://tc39.es/ecma402/#sec-setnfdigitoptions
 */
function SetNumberFormatDigitOptions(internalSlots, opts, mnfdDefault, mxfdDefault, notation) {
    var mnid = (0,_GetNumberOption__WEBPACK_IMPORTED_MODULE_0__.GetNumberOption)(opts, 'minimumIntegerDigits', 1, 21, 1);
    var mnfd = opts.minimumFractionDigits;
    var mxfd = opts.maximumFractionDigits;
    var mnsd = opts.minimumSignificantDigits;
    var mxsd = opts.maximumSignificantDigits;
    internalSlots.minimumIntegerDigits = mnid;
    if (mnsd !== undefined || mxsd !== undefined) {
        internalSlots.roundingType = 'significantDigits';
        mnsd = (0,_DefaultNumberOption__WEBPACK_IMPORTED_MODULE_1__.DefaultNumberOption)(mnsd, 1, 21, 1);
        mxsd = (0,_DefaultNumberOption__WEBPACK_IMPORTED_MODULE_1__.DefaultNumberOption)(mxsd, mnsd, 21, 21);
        internalSlots.minimumSignificantDigits = mnsd;
        internalSlots.maximumSignificantDigits = mxsd;
    }
    else if (mnfd !== undefined || mxfd !== undefined) {
        internalSlots.roundingType = 'fractionDigits';
        mnfd = (0,_DefaultNumberOption__WEBPACK_IMPORTED_MODULE_1__.DefaultNumberOption)(mnfd, 0, 20, mnfdDefault);
        var mxfdActualDefault = Math.max(mnfd, mxfdDefault);
        mxfd = (0,_DefaultNumberOption__WEBPACK_IMPORTED_MODULE_1__.DefaultNumberOption)(mxfd, mnfd, 20, mxfdActualDefault);
        internalSlots.minimumFractionDigits = mnfd;
        internalSlots.maximumFractionDigits = mxfd;
    }
    else if (notation === 'compact') {
        internalSlots.roundingType = 'compactRounding';
    }
    else {
        internalSlots.roundingType = 'fractionDigits';
        internalSlots.minimumFractionDigits = mnfdDefault;
        internalSlots.maximumFractionDigits = mxfdDefault;
    }
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatUnitOptions.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatUnitOptions.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetNumberFormatUnitOptions": function() { return /* binding */ SetNumberFormatUnitOptions; }
/* harmony export */ });
/* harmony import */ var _GetOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GetOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js");
/* harmony import */ var _IsWellFormedCurrencyCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IsWellFormedCurrencyCode */ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedCurrencyCode.js");
/* harmony import */ var _IsWellFormedUnitIdentifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IsWellFormedUnitIdentifier */ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedUnitIdentifier.js");



/**
 * https://tc39.es/ecma402/#sec-setnumberformatunitoptions
 */
function SetNumberFormatUnitOptions(nf, options, _a) {
    if (options === void 0) { options = Object.create(null); }
    var getInternalSlots = _a.getInternalSlots;
    var internalSlots = getInternalSlots(nf);
    var style = (0,_GetOption__WEBPACK_IMPORTED_MODULE_0__.GetOption)(options, 'style', 'string', ['decimal', 'percent', 'currency', 'unit'], 'decimal');
    internalSlots.style = style;
    var currency = (0,_GetOption__WEBPACK_IMPORTED_MODULE_0__.GetOption)(options, 'currency', 'string', undefined, undefined);
    if (currency !== undefined && !(0,_IsWellFormedCurrencyCode__WEBPACK_IMPORTED_MODULE_1__.IsWellFormedCurrencyCode)(currency)) {
        throw RangeError('Malformed currency code');
    }
    if (style === 'currency' && currency === undefined) {
        throw TypeError('currency cannot be undefined');
    }
    var currencyDisplay = (0,_GetOption__WEBPACK_IMPORTED_MODULE_0__.GetOption)(options, 'currencyDisplay', 'string', ['code', 'symbol', 'narrowSymbol', 'name'], 'symbol');
    var currencySign = (0,_GetOption__WEBPACK_IMPORTED_MODULE_0__.GetOption)(options, 'currencySign', 'string', ['standard', 'accounting'], 'standard');
    var unit = (0,_GetOption__WEBPACK_IMPORTED_MODULE_0__.GetOption)(options, 'unit', 'string', undefined, undefined);
    if (unit !== undefined && !(0,_IsWellFormedUnitIdentifier__WEBPACK_IMPORTED_MODULE_2__.IsWellFormedUnitIdentifier)(unit)) {
        throw RangeError('Invalid unit argument for Intl.NumberFormat()');
    }
    if (style === 'unit' && unit === undefined) {
        throw TypeError('unit cannot be undefined');
    }
    var unitDisplay = (0,_GetOption__WEBPACK_IMPORTED_MODULE_0__.GetOption)(options, 'unitDisplay', 'string', ['short', 'narrow', 'long'], 'short');
    if (style === 'currency') {
        internalSlots.currency = currency.toUpperCase();
        internalSlots.currencyDisplay = currencyDisplay;
        internalSlots.currencySign = currencySign;
    }
    if (style === 'unit') {
        internalSlots.unit = unit;
        internalSlots.unitDisplay = unitDisplay;
    }
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToRawFixed": function() { return /* binding */ ToRawFixed; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");

/**
 * TODO: dedup with intl-pluralrules and support BigInt
 * https://tc39.es/ecma402/#sec-torawfixed
 * @param x a finite non-negative Number or BigInt
 * @param minFraction and integer between 0 and 20
 * @param maxFraction and integer between 0 and 20
 */
function ToRawFixed(x, minFraction, maxFraction) {
    var f = maxFraction;
    var n = Math.round(x * Math.pow(10, f));
    var xFinal = n / Math.pow(10, f);
    // n is a positive integer, but it is possible to be greater than 1e21.
    // In such case we will go the slow path.
    // See also: https://tc39.es/ecma262/#sec-numeric-types-number-tostring
    var m;
    if (n < 1e21) {
        m = n.toString();
    }
    else {
        m = n.toString();
        var _a = m.split('e'), mantissa = _a[0], exponent = _a[1];
        m = mantissa.replace('.', '');
        m = m + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.repeat)('0', Math.max(+exponent - m.length + 1, 0));
    }
    var int;
    if (f !== 0) {
        var k = m.length;
        if (k <= f) {
            var z = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.repeat)('0', f + 1 - k);
            m = z + m;
            k = f + 1;
        }
        var a = m.slice(0, k - f);
        var b = m.slice(k - f);
        m = a + "." + b;
        int = a.length;
    }
    else {
        int = m.length;
    }
    var cut = maxFraction - minFraction;
    while (cut > 0 && m[m.length - 1] === '0') {
        m = m.slice(0, -1);
        cut--;
    }
    if (m[m.length - 1] === '.') {
        m = m.slice(0, -1);
    }
    return { formattedString: m, roundedNumber: xFinal, integerDigitsCount: int };
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToRawPrecision": function() { return /* binding */ ToRawPrecision; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");

function ToRawPrecision(x, minPrecision, maxPrecision) {
    var p = maxPrecision;
    var m;
    var e;
    var xFinal;
    if (x === 0) {
        m = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.repeat)('0', p);
        e = 0;
        xFinal = 0;
    }
    else {
        var xToString = x.toString();
        // If xToString is formatted as scientific notation, the number is either very small or very
        // large. If the precision of the formatted string is lower that requested max precision, we
        // should still infer them from the formatted string, otherwise the formatted result might have
        // precision loss (e.g. 1e41 will not have 0 in every trailing digits).
        var xToStringExponentIndex = xToString.indexOf('e');
        var _a = xToString.split('e'), xToStringMantissa = _a[0], xToStringExponent = _a[1];
        var xToStringMantissaWithoutDecimalPoint = xToStringMantissa.replace('.', '');
        if (xToStringExponentIndex >= 0 &&
            xToStringMantissaWithoutDecimalPoint.length <= p) {
            e = +xToStringExponent;
            m =
                xToStringMantissaWithoutDecimalPoint +
                    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.repeat)('0', p - xToStringMantissaWithoutDecimalPoint.length);
            xFinal = x;
        }
        else {
            e = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getMagnitude)(x);
            var decimalPlaceOffset = e - p + 1;
            // n is the integer containing the required precision digits. To derive the formatted string,
            // we will adjust its decimal place in the logic below.
            var n = Math.round(adjustDecimalPlace(x, decimalPlaceOffset));
            // The rounding caused the change of magnitude, so we should increment `e` by 1.
            if (adjustDecimalPlace(n, p - 1) >= 10) {
                e = e + 1;
                // Divide n by 10 to swallow one precision.
                n = Math.floor(n / 10);
            }
            m = n.toString();
            // Equivalent of n * 10 ** (e - p + 1)
            xFinal = adjustDecimalPlace(n, p - 1 - e);
        }
    }
    var int;
    if (e >= p - 1) {
        m = m + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.repeat)('0', e - p + 1);
        int = e + 1;
    }
    else if (e >= 0) {
        m = m.slice(0, e + 1) + "." + m.slice(e + 1);
        int = e + 1;
    }
    else {
        m = "0." + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.repeat)('0', -e - 1) + m;
        int = 1;
    }
    if (m.indexOf('.') >= 0 && maxPrecision > minPrecision) {
        var cut = maxPrecision - minPrecision;
        while (cut > 0 && m[m.length - 1] === '0') {
            m = m.slice(0, -1);
            cut--;
        }
        if (m[m.length - 1] === '.') {
            m = m.slice(0, -1);
        }
    }
    return { formattedString: m, roundedNumber: xFinal, integerDigitsCount: int };
    // x / (10 ** magnitude), but try to preserve as much floating point precision as possible.
    function adjustDecimalPlace(x, magnitude) {
        return magnitude < 0 ? x * Math.pow(10, -magnitude) : x / Math.pow(10, magnitude);
    }
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/digit-mapping.generated.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/digit-mapping.generated.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "digitMapping": function() { return /* binding */ digitMapping; }
/* harmony export */ });
var digitMapping = { "adlm": ["𞥐", "𞥑", "𞥒", "𞥓", "𞥔", "𞥕", "𞥖", "𞥗", "𞥘", "𞥙"], "ahom": ["𑜰", "𑜱", "𑜲", "𑜳", "𑜴", "𑜵", "𑜶", "𑜷", "𑜸", "𑜹"], "arab": ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"], "arabext": ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"], "bali": ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"], "beng": ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"], "bhks": ["𑱐", "𑱑", "𑱒", "𑱓", "𑱔", "𑱕", "𑱖", "𑱗", "𑱘", "𑱙"], "brah": ["𑁦", "𑁧", "𑁨", "𑁩", "𑁪", "𑁫", "𑁬", "𑁭", "𑁮", "𑁯"], "cakm": ["𑄶", "𑄷", "𑄸", "𑄹", "𑄺", "𑄻", "𑄼", "𑄽", "𑄾", "𑄿"], "cham": ["꩐", "꩑", "꩒", "꩓", "꩔", "꩕", "꩖", "꩗", "꩘", "꩙"], "deva": ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"], "diak": ["𑥐", "𑥑", "𑥒", "𑥓", "𑥔", "𑥕", "𑥖", "𑥗", "𑥘", "𑥙"], "fullwide": ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"], "gong": ["𑶠", "𑶡", "𑶢", "𑶣", "𑶤", "𑶥", "𑶦", "𑶧", "𑶨", "𑶩"], "gonm": ["𑵐", "𑵑", "𑵒", "𑵓", "𑵔", "𑵕", "𑵖", "𑵗", "𑵘", "𑵙"], "gujr": ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"], "guru": ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"], "hanidec": ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"], "hmng": ["𖭐", "𖭑", "𖭒", "𖭓", "𖭔", "𖭕", "𖭖", "𖭗", "𖭘", "𖭙"], "hmnp": ["𞅀", "𞅁", "𞅂", "𞅃", "𞅄", "𞅅", "𞅆", "𞅇", "𞅈", "𞅉"], "java": ["꧐", "꧑", "꧒", "꧓", "꧔", "꧕", "꧖", "꧗", "꧘", "꧙"], "kali": ["꤀", "꤁", "꤂", "꤃", "꤄", "꤅", "꤆", "꤇", "꤈", "꤉"], "khmr": ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"], "knda": ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"], "lana": ["᪀", "᪁", "᪂", "᪃", "᪄", "᪅", "᪆", "᪇", "᪈", "᪉"], "lanatham": ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"], "laoo": ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"], "lepc": ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"], "limb": ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"], "mathbold": ["𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"], "mathdbl": ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"], "mathmono": ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"], "mathsanb": ["𝟬", "𝟭", "𝟮", "𝟯", "𝟰", "𝟱", "𝟲", "𝟳", "𝟴", "𝟵"], "mathsans": ["𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"], "mlym": ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"], "modi": ["𑙐", "𑙑", "𑙒", "𑙓", "𑙔", "𑙕", "𑙖", "𑙗", "𑙘", "𑙙"], "mong": ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"], "mroo": ["𖩠", "𖩡", "𖩢", "𖩣", "𖩤", "𖩥", "𖩦", "𖩧", "𖩨", "𖩩"], "mtei": ["꯰", "꯱", "꯲", "꯳", "꯴", "꯵", "꯶", "꯷", "꯸", "꯹"], "mymr": ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"], "mymrshan": ["႐", "႑", "႒", "႓", "႔", "႕", "႖", "႗", "႘", "႙"], "mymrtlng": ["꧰", "꧱", "꧲", "꧳", "꧴", "꧵", "꧶", "꧷", "꧸", "꧹"], "newa": ["𑑐", "𑑑", "𑑒", "𑑓", "𑑔", "𑑕", "𑑖", "𑑗", "𑑘", "𑑙"], "nkoo": ["߀", "߁", "߂", "߃", "߄", "߅", "߆", "߇", "߈", "߉"], "olck": ["᱐", "᱑", "᱒", "᱓", "᱔", "᱕", "᱖", "᱗", "᱘", "᱙"], "orya": ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"], "osma": ["𐒠", "𐒡", "𐒢", "𐒣", "𐒤", "𐒥", "𐒦", "𐒧", "𐒨", "𐒩"], "rohg": ["𐴰", "𐴱", "𐴲", "𐴳", "𐴴", "𐴵", "𐴶", "𐴷", "𐴸", "𐴹"], "saur": ["꣐", "꣑", "꣒", "꣓", "꣔", "꣕", "꣖", "꣗", "꣘", "꣙"], "segment": ["🯰", "🯱", "🯲", "🯳", "🯴", "🯵", "🯶", "🯷", "🯸", "🯹"], "shrd": ["𑇐", "𑇑", "𑇒", "𑇓", "𑇔", "𑇕", "𑇖", "𑇗", "𑇘", "𑇙"], "sind": ["𑋰", "𑋱", "𑋲", "𑋳", "𑋴", "𑋵", "𑋶", "𑋷", "𑋸", "𑋹"], "sinh": ["෦", "෧", "෨", "෩", "෪", "෫", "෬", "෭", "෮", "෯"], "sora": ["𑃰", "𑃱", "𑃲", "𑃳", "𑃴", "𑃵", "𑃶", "𑃷", "𑃸", "𑃹"], "sund": ["᮰", "᮱", "᮲", "᮳", "᮴", "᮵", "᮶", "᮷", "᮸", "᮹"], "takr": ["𑛀", "𑛁", "𑛂", "𑛃", "𑛄", "𑛅", "𑛆", "𑛇", "𑛈", "𑛉"], "talu": ["᧐", "᧑", "᧒", "᧓", "᧔", "᧕", "᧖", "᧗", "᧘", "᧙"], "tamldec": ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"], "telu": ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"], "thai": ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"], "tibt": ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"], "tirh": ["𑓐", "𑓑", "𑓒", "𑓓", "𑓔", "𑓕", "𑓖", "𑓗", "𑓘", "𑓙"], "vaii": ["ᘠ", "ᘡ", "ᘢ", "ᘣ", "ᘤ", "ᘥ", "ᘦ", "ᘧ", "ᘨ", "ᘩ"], "wara": ["𑣠", "𑣡", "𑣢", "𑣣", "𑣤", "𑣥", "𑣦", "𑣧", "𑣨", "𑣩"], "wcho": ["𞋰", "𞋱", "𞋲", "𞋳", "𞋴", "𞋵", "𞋶", "𞋷", "𞋸", "𞋹"] };


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatToParts; }
/* harmony export */ });
/* harmony import */ var _ToRawFixed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToRawFixed */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js");
/* harmony import */ var _digit_mapping_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digit-mapping.generated */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/digit-mapping.generated.js");
/* harmony import */ var _regex_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../regex.generated */ "./node_modules/@formatjs/ecma402-abstract/lib/regex.generated.js");



// This is from: unicode-12.1.0/General_Category/Symbol/regex.js
// IE11 does not support unicode flag, otherwise this is just /\p{S}/u.
// /^\p{S}/u
var CARET_S_UNICODE_REGEX = new RegExp("^" + _regex_generated__WEBPACK_IMPORTED_MODULE_0__.S_UNICODE_REGEX.source);
// /\p{S}$/u
var S_DOLLAR_UNICODE_REGEX = new RegExp(_regex_generated__WEBPACK_IMPORTED_MODULE_0__.S_UNICODE_REGEX.source + "$");
var CLDR_NUMBER_PATTERN = /[#0](?:[\.,][#0]+)*/g;
function formatToParts(numberResult, data, pl, options) {
    var sign = numberResult.sign, exponent = numberResult.exponent, magnitude = numberResult.magnitude;
    var notation = options.notation, style = options.style, numberingSystem = options.numberingSystem;
    var defaultNumberingSystem = data.numbers.nu[0];
    // #region Part 1: partition and interpolate the CLDR number pattern.
    // ----------------------------------------------------------
    var compactNumberPattern = null;
    if (notation === 'compact' && magnitude) {
        compactNumberPattern = getCompactDisplayPattern(numberResult, pl, data, style, options.compactDisplay, options.currencyDisplay, numberingSystem);
    }
    // This is used multiple times
    var nonNameCurrencyPart;
    if (style === 'currency' && options.currencyDisplay !== 'name') {
        var byCurrencyDisplay = data.currencies[options.currency];
        if (byCurrencyDisplay) {
            switch (options.currencyDisplay) {
                case 'code':
                    nonNameCurrencyPart = options.currency;
                    break;
                case 'symbol':
                    nonNameCurrencyPart = byCurrencyDisplay.symbol;
                    break;
                default:
                    nonNameCurrencyPart = byCurrencyDisplay.narrow;
                    break;
            }
        }
        else {
            // Fallback for unknown currency
            nonNameCurrencyPart = options.currency;
        }
    }
    var numberPattern;
    if (!compactNumberPattern) {
        // Note: if the style is unit, or is currency and the currency display is name,
        // its unit parts will be interpolated in part 2. So here we can fallback to decimal.
        if (style === 'decimal' ||
            style === 'unit' ||
            (style === 'currency' && options.currencyDisplay === 'name')) {
            // Shortcut for decimal
            var decimalData = data.numbers.decimal[numberingSystem] ||
                data.numbers.decimal[defaultNumberingSystem];
            numberPattern = getPatternForSign(decimalData.standard, sign);
        }
        else if (style === 'currency') {
            var currencyData = data.numbers.currency[numberingSystem] ||
                data.numbers.currency[defaultNumberingSystem];
            // We replace number pattern part with `0` for easier postprocessing.
            numberPattern = getPatternForSign(currencyData[options.currencySign], sign);
        }
        else {
            // percent
            var percentPattern = data.numbers.percent[numberingSystem] ||
                data.numbers.percent[defaultNumberingSystem];
            numberPattern = getPatternForSign(percentPattern, sign);
        }
    }
    else {
        numberPattern = compactNumberPattern;
    }
    // Extract the decimal number pattern string. It looks like "#,##0,00", which will later be
    // used to infer decimal group sizes.
    var decimalNumberPattern = CLDR_NUMBER_PATTERN.exec(numberPattern)[0];
    // Now we start to substitute patterns
    // 1. replace strings like `0` and `#,##0.00` with `{0}`
    // 2. unquote characters (invariant: the quoted characters does not contain the special tokens)
    numberPattern = numberPattern
        .replace(CLDR_NUMBER_PATTERN, '{0}')
        .replace(/'(.)'/g, '$1');
    // Handle currency spacing (both compact and non-compact).
    if (style === 'currency' && options.currencyDisplay !== 'name') {
        var currencyData = data.numbers.currency[numberingSystem] ||
            data.numbers.currency[defaultNumberingSystem];
        // See `currencySpacing` substitution rule in TR-35.
        // Here we always assume the currencyMatch is "[:^S:]" and surroundingMatch is "[:digit:]".
        //
        // Example 1: for pattern "#,##0.00¤" with symbol "US$", we replace "¤" with the symbol,
        // but insert an extra non-break space before the symbol, because "[:^S:]" matches "U" in
        // "US$" and "[:digit:]" matches the latn numbering system digits.
        //
        // Example 2: for pattern "¤#,##0.00" with symbol "US$", there is no spacing between symbol
        // and number, because `$` does not match "[:^S:]".
        //
        // Implementation note: here we do the best effort to infer the insertion.
        // We also assume that `beforeInsertBetween` and `afterInsertBetween` will never be `;`.
        var afterCurrency = currencyData.currencySpacing.afterInsertBetween;
        if (afterCurrency && !S_DOLLAR_UNICODE_REGEX.test(nonNameCurrencyPart)) {
            numberPattern = numberPattern.replace('¤{0}', "\u00A4" + afterCurrency + "{0}");
        }
        var beforeCurrency = currencyData.currencySpacing.beforeInsertBetween;
        if (beforeCurrency && !CARET_S_UNICODE_REGEX.test(nonNameCurrencyPart)) {
            numberPattern = numberPattern.replace('{0}¤', "{0}" + beforeCurrency + "\u00A4");
        }
    }
    // The following tokens are special: `{0}`, `¤`, `%`, `-`, `+`, `{c:...}.
    var numberPatternParts = numberPattern.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g);
    var numberParts = [];
    var symbols = data.numbers.symbols[numberingSystem] ||
        data.numbers.symbols[defaultNumberingSystem];
    for (var _i = 0, numberPatternParts_1 = numberPatternParts; _i < numberPatternParts_1.length; _i++) {
        var part = numberPatternParts_1[_i];
        if (!part) {
            continue;
        }
        switch (part) {
            case '{0}': {
                // We only need to handle scientific and engineering notation here.
                numberParts.push.apply(numberParts, paritionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem, 
                // If compact number pattern exists, do not insert group separators.
                !compactNumberPattern && options.useGrouping, decimalNumberPattern));
                break;
            }
            case '-':
                numberParts.push({ type: 'minusSign', value: symbols.minusSign });
                break;
            case '+':
                numberParts.push({ type: 'plusSign', value: symbols.plusSign });
                break;
            case '%':
                numberParts.push({ type: 'percentSign', value: symbols.percentSign });
                break;
            case '¤':
                // Computed above when handling currency spacing.
                numberParts.push({ type: 'currency', value: nonNameCurrencyPart });
                break;
            default:
                if (/^\{c:/.test(part)) {
                    numberParts.push({
                        type: 'compact',
                        value: part.substring(3, part.length - 1),
                    });
                }
                else {
                    // literal
                    numberParts.push({ type: 'literal', value: part });
                }
                break;
        }
    }
    // #endregion
    // #region Part 2: interpolate unit pattern if necessary.
    // ----------------------------------------------
    switch (style) {
        case 'currency': {
            // `currencyDisplay: 'name'` has similar pattern handling as units.
            if (options.currencyDisplay === 'name') {
                var unitPattern = (data.numbers.currency[numberingSystem] ||
                    data.numbers.currency[defaultNumberingSystem]).unitPattern;
                // Select plural
                var unitName = void 0;
                var currencyNameData = data.currencies[options.currency];
                if (currencyNameData) {
                    unitName = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), currencyNameData.displayName);
                }
                else {
                    // Fallback for unknown currency
                    unitName = options.currency;
                }
                // Do {0} and {1} substitution
                var unitPatternParts = unitPattern.split(/(\{[01]\})/g);
                var result = [];
                for (var _a = 0, unitPatternParts_1 = unitPatternParts; _a < unitPatternParts_1.length; _a++) {
                    var part = unitPatternParts_1[_a];
                    switch (part) {
                        case '{0}':
                            result.push.apply(result, numberParts);
                            break;
                        case '{1}':
                            result.push({ type: 'currency', value: unitName });
                            break;
                        default:
                            if (part) {
                                result.push({ type: 'literal', value: part });
                            }
                            break;
                    }
                }
                return result;
            }
            else {
                return numberParts;
            }
        }
        case 'unit': {
            var unit = options.unit, unitDisplay = options.unitDisplay;
            var unitData = data.units.simple[unit];
            var unitPattern = void 0;
            if (unitData) {
                // Simple unit pattern
                unitPattern = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), data.units.simple[unit][unitDisplay]);
            }
            else {
                // See: http://unicode.org/reports/tr35/tr35-general.html#perUnitPatterns
                // If cannot find unit in the simple pattern, it must be "per" compound pattern.
                // Implementation note: we are not following TR-35 here because we need to format to parts!
                var _b = unit.split('-per-'), numeratorUnit = _b[0], denominatorUnit = _b[1];
                unitData = data.units.simple[numeratorUnit];
                var numeratorUnitPattern = selectPlural(pl, numberResult.roundedNumber * Math.pow(10, exponent), data.units.simple[numeratorUnit][unitDisplay]);
                var perUnitPattern = data.units.simple[denominatorUnit].perUnit[unitDisplay];
                if (perUnitPattern) {
                    // perUnitPattern exists, combine it with numeratorUnitPattern
                    unitPattern = perUnitPattern.replace('{0}', numeratorUnitPattern);
                }
                else {
                    // get compoundUnit pattern (e.g. "{0} per {1}"), repalce {0} with numerator pattern and {1} with
                    // the denominator pattern in singular form.
                    var perPattern = data.units.compound.per[unitDisplay];
                    var denominatorPattern = selectPlural(pl, 1, data.units.simple[denominatorUnit][unitDisplay]);
                    unitPattern = unitPattern = perPattern
                        .replace('{0}', numeratorUnitPattern)
                        .replace('{1}', denominatorPattern.replace('{0}', ''));
                }
            }
            var result = [];
            // We need spacing around "{0}" because they are not treated as "unit" parts, but "literal".
            for (var _c = 0, _d = unitPattern.split(/(\s*\{0\}\s*)/); _c < _d.length; _c++) {
                var part = _d[_c];
                var interpolateMatch = /^(\s*)\{0\}(\s*)$/.exec(part);
                if (interpolateMatch) {
                    // Space before "{0}"
                    if (interpolateMatch[1]) {
                        result.push({ type: 'literal', value: interpolateMatch[1] });
                    }
                    // "{0}" itself
                    result.push.apply(result, numberParts);
                    // Space after "{0}"
                    if (interpolateMatch[2]) {
                        result.push({ type: 'literal', value: interpolateMatch[2] });
                    }
                }
                else if (part) {
                    result.push({ type: 'unit', value: part });
                }
            }
            return result;
        }
        default:
            return numberParts;
    }
    // #endregion
}
// A subset of https://tc39.es/ecma402/#sec-partitionnotationsubpattern
// Plus the exponent parts handling.
function paritionNumberIntoParts(symbols, numberResult, notation, exponent, numberingSystem, useGrouping, 
/**
 * This is the decimal number pattern without signs or symbols.
 * It is used to infer the group size when `useGrouping` is true.
 *
 * A typical value looks like "#,##0.00" (primary group size is 3).
 * Some locales like Hindi has secondary group size of 2 (e.g. "#,##,##0.00").
 */
decimalNumberPattern) {
    var result = [];
    // eslint-disable-next-line prefer-const
    var n = numberResult.formattedString, x = numberResult.roundedNumber;
    if (isNaN(x)) {
        return [{ type: 'nan', value: n }];
    }
    else if (!isFinite(x)) {
        return [{ type: 'infinity', value: n }];
    }
    var digitReplacementTable = _digit_mapping_generated__WEBPACK_IMPORTED_MODULE_1__.digitMapping[numberingSystem];
    if (digitReplacementTable) {
        n = n.replace(/\d/g, function (digit) { return digitReplacementTable[+digit] || digit; });
    }
    // TODO: Else use an implementation dependent algorithm to map n to the appropriate
    // representation of n in the given numbering system.
    var decimalSepIndex = n.indexOf('.');
    var integer;
    var fraction;
    if (decimalSepIndex > 0) {
        integer = n.slice(0, decimalSepIndex);
        fraction = n.slice(decimalSepIndex + 1);
    }
    else {
        integer = n;
    }
    // #region Grouping integer digits
    // The weird compact and x >= 10000 check is to ensure consistency with Node.js and Chrome.
    // Note that `de` does not have compact form for thousands, but Node.js does not insert grouping separator
    // unless the rounded number is greater than 10000:
    //   NumberFormat('de', {notation: 'compact', compactDisplay: 'short'}).format(1234) //=> "1234"
    //   NumberFormat('de').format(1234) //=> "1.234"
    if (useGrouping && (notation !== 'compact' || x >= 10000)) {
        var groupSepSymbol = symbols.group;
        var groups = [];
        // > There may be two different grouping sizes: The primary grouping size used for the least
        // > significant integer group, and the secondary grouping size used for more significant groups.
        // > If a pattern contains multiple grouping separators, the interval between the last one and the
        // > end of the integer defines the primary grouping size, and the interval between the last two
        // > defines the secondary grouping size. All others are ignored.
        var integerNumberPattern = decimalNumberPattern.split('.')[0];
        var patternGroups = integerNumberPattern.split(',');
        var primaryGroupingSize = 3;
        var secondaryGroupingSize = 3;
        if (patternGroups.length > 1) {
            primaryGroupingSize = patternGroups[patternGroups.length - 1].length;
        }
        if (patternGroups.length > 2) {
            secondaryGroupingSize = patternGroups[patternGroups.length - 2].length;
        }
        var i = integer.length - primaryGroupingSize;
        if (i > 0) {
            // Slice the least significant integer group
            groups.push(integer.slice(i, i + primaryGroupingSize));
            // Then iteratively push the more signicant groups
            // TODO: handle surrogate pairs in some numbering system digits
            for (i -= secondaryGroupingSize; i > 0; i -= secondaryGroupingSize) {
                groups.push(integer.slice(i, i + secondaryGroupingSize));
            }
            groups.push(integer.slice(0, i + secondaryGroupingSize));
        }
        else {
            groups.push(integer);
        }
        while (groups.length > 0) {
            var integerGroup = groups.pop();
            result.push({ type: 'integer', value: integerGroup });
            if (groups.length > 0) {
                result.push({ type: 'group', value: groupSepSymbol });
            }
        }
    }
    else {
        result.push({ type: 'integer', value: integer });
    }
    // #endregion
    if (fraction !== undefined) {
        result.push({ type: 'decimal', value: symbols.decimal }, { type: 'fraction', value: fraction });
    }
    if ((notation === 'scientific' || notation === 'engineering') &&
        isFinite(x)) {
        result.push({ type: 'exponentSeparator', value: symbols.exponential });
        if (exponent < 0) {
            result.push({ type: 'exponentMinusSign', value: symbols.minusSign });
            exponent = -exponent;
        }
        var exponentResult = (0,_ToRawFixed__WEBPACK_IMPORTED_MODULE_2__.ToRawFixed)(exponent, 0, 0);
        result.push({
            type: 'exponentInteger',
            value: exponentResult.formattedString,
        });
    }
    return result;
}
function getPatternForSign(pattern, sign) {
    if (pattern.indexOf(';') < 0) {
        pattern = pattern + ";-" + pattern;
    }
    var _a = pattern.split(';'), zeroPattern = _a[0], negativePattern = _a[1];
    switch (sign) {
        case 0:
            return zeroPattern;
        case -1:
            return negativePattern;
        default:
            return negativePattern.indexOf('-') >= 0
                ? negativePattern.replace(/-/g, '+')
                : "+" + zeroPattern;
    }
}
// Find the CLDR pattern for compact notation based on the magnitude of data and style.
//
// Example return value: "¤ {c:laki}000;¤{c:laki} -0" (`sw` locale):
// - Notice the `{c:...}` token that wraps the compact literal.
// - The consecutive zeros are normalized to single zero to match CLDR_NUMBER_PATTERN.
//
// Returning null means the compact display pattern cannot be found.
function getCompactDisplayPattern(numberResult, pl, data, style, compactDisplay, currencyDisplay, numberingSystem) {
    var _a;
    var roundedNumber = numberResult.roundedNumber, sign = numberResult.sign, magnitude = numberResult.magnitude;
    var magnitudeKey = String(Math.pow(10, magnitude));
    var defaultNumberingSystem = data.numbers.nu[0];
    var pattern;
    if (style === 'currency' && currencyDisplay !== 'name') {
        var byNumberingSystem = data.numbers.currency;
        var currencyData = byNumberingSystem[numberingSystem] ||
            byNumberingSystem[defaultNumberingSystem];
        // NOTE: compact notation ignores currencySign!
        var compactPluralRules = (_a = currencyData.short) === null || _a === void 0 ? void 0 : _a[magnitudeKey];
        if (!compactPluralRules) {
            return null;
        }
        pattern = selectPlural(pl, roundedNumber, compactPluralRules);
    }
    else {
        var byNumberingSystem = data.numbers.decimal;
        var byCompactDisplay = byNumberingSystem[numberingSystem] ||
            byNumberingSystem[defaultNumberingSystem];
        var compactPlaralRule = byCompactDisplay[compactDisplay][magnitudeKey];
        if (!compactPlaralRule) {
            return null;
        }
        pattern = selectPlural(pl, roundedNumber, compactPlaralRule);
    }
    // See https://unicode.org/reports/tr35/tr35-numbers.html#Compact_Number_Formats
    // > If the value is precisely “0”, either explicit or defaulted, then the normal number format
    // > pattern for that sort of object is supplied.
    if (pattern === '0') {
        return null;
    }
    pattern = getPatternForSign(pattern, sign)
        // Extract compact literal from the pattern
        .replace(/([^\s;\-\+\d¤]+)/g, '{c:$1}')
        // We replace one or more zeros with a single zero so it matches `CLDR_NUMBER_PATTERN`.
        .replace(/0+/, '0');
    return pattern;
}
function selectPlural(pl, x, rules) {
    return rules[pl.select(x)] || rules.other;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/PartitionPattern.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/PartitionPattern.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartitionPattern": function() { return /* binding */ PartitionPattern; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");

/**
 * https://tc39.es/ecma402/#sec-partitionpattern
 * @param pattern
 */
function PartitionPattern(pattern) {
    var result = [];
    var beginIndex = pattern.indexOf('{');
    var endIndex = 0;
    var nextIndex = 0;
    var length = pattern.length;
    while (beginIndex < pattern.length && beginIndex > -1) {
        endIndex = pattern.indexOf('}', beginIndex);
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.invariant)(endIndex > beginIndex, "Invalid pattern " + pattern);
        if (beginIndex > nextIndex) {
            result.push({
                type: 'literal',
                value: pattern.substring(nextIndex, beginIndex),
            });
        }
        result.push({
            type: pattern.substring(beginIndex + 1, endIndex),
            value: undefined,
        });
        nextIndex = endIndex + 1;
        beginIndex = pattern.indexOf('{', nextIndex);
    }
    if (nextIndex < length) {
        result.push({
            type: 'literal',
            value: pattern.substring(nextIndex, length),
        });
    }
    return result;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/ResolveLocale.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/ResolveLocale.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolveLocale": function() { return /* binding */ ResolveLocale; }
/* harmony export */ });
/* harmony import */ var _LookupMatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LookupMatcher */ "./node_modules/@formatjs/ecma402-abstract/lib/LookupMatcher.js");
/* harmony import */ var _BestFitMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BestFitMatcher */ "./node_modules/@formatjs/ecma402-abstract/lib/BestFitMatcher.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");
/* harmony import */ var _UnicodeExtensionValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnicodeExtensionValue */ "./node_modules/@formatjs/ecma402-abstract/lib/UnicodeExtensionValue.js");




/**
 * https://tc39.es/ecma402/#sec-resolvelocale
 */
function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var matcher = options.localeMatcher;
    var r;
    if (matcher === 'lookup') {
        r = (0,_LookupMatcher__WEBPACK_IMPORTED_MODULE_0__.LookupMatcher)(availableLocales, requestedLocales, getDefaultLocale);
    }
    else {
        r = (0,_BestFitMatcher__WEBPACK_IMPORTED_MODULE_1__.BestFitMatcher)(availableLocales, requestedLocales, getDefaultLocale);
    }
    var foundLocale = r.locale;
    var result = { locale: '', dataLocale: foundLocale };
    var supportedExtension = '-u';
    for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
        var key = relevantExtensionKeys_1[_i];
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.invariant)(foundLocale in localeData, "Missing locale data for " + foundLocale);
        var foundLocaleData = localeData[foundLocale];
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.invariant)(typeof foundLocaleData === 'object' && foundLocaleData !== null, "locale data " + key + " must be an object");
        var keyLocaleData = foundLocaleData[key];
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.invariant)(Array.isArray(keyLocaleData), "keyLocaleData for " + key + " must be an array");
        var value = keyLocaleData[0];
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.invariant)(typeof value === 'string' || value === null, "value must be string or null but got " + typeof value + " in key " + key);
        var supportedExtensionAddition = '';
        if (r.extension) {
            var requestedValue = (0,_UnicodeExtensionValue__WEBPACK_IMPORTED_MODULE_3__.UnicodeExtensionValue)(r.extension, key);
            if (requestedValue !== undefined) {
                if (requestedValue !== '') {
                    if (~keyLocaleData.indexOf(requestedValue)) {
                        value = requestedValue;
                        supportedExtensionAddition = "-" + key + "-" + value;
                    }
                }
                else if (~requestedValue.indexOf('true')) {
                    value = 'true';
                    supportedExtensionAddition = "-" + key;
                }
            }
        }
        if (key in options) {
            var optionsValue = options[key];
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.invariant)(typeof optionsValue === 'string' ||
                typeof optionsValue === 'undefined' ||
                optionsValue === null, 'optionsValue must be String, Undefined or Null');
            if (~keyLocaleData.indexOf(optionsValue)) {
                if (optionsValue !== value) {
                    value = optionsValue;
                    supportedExtensionAddition = '';
                }
            }
        }
        result[key] = value;
        supportedExtension += supportedExtensionAddition;
    }
    if (supportedExtension.length > 2) {
        var privateIndex = foundLocale.indexOf('-x-');
        if (privateIndex === -1) {
            foundLocale = foundLocale + supportedExtension;
        }
        else {
            var preExtension = foundLocale.slice(0, privateIndex);
            var postExtension = foundLocale.slice(privateIndex, foundLocale.length);
            foundLocale = preExtension + supportedExtension + postExtension;
        }
        foundLocale = Intl.getCanonicalLocales(foundLocale)[0];
    }
    result.locale = foundLocale;
    return result;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/SupportedLocales.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/SupportedLocales.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportedLocales": function() { return /* binding */ SupportedLocales; }
/* harmony export */ });
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");
/* harmony import */ var _GetOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js");
/* harmony import */ var _LookupSupportedLocales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LookupSupportedLocales */ "./node_modules/@formatjs/ecma402-abstract/lib/LookupSupportedLocales.js");



/**
 * https://tc39.es/ecma402/#sec-supportedlocales
 * @param availableLocales
 * @param requestedLocales
 * @param options
 */
function SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = 'best fit';
    if (options !== undefined) {
        options = (0,_262__WEBPACK_IMPORTED_MODULE_0__.ToObject)(options);
        matcher = (0,_GetOption__WEBPACK_IMPORTED_MODULE_1__.GetOption)(options, 'localeMatcher', 'string', ['lookup', 'best fit'], 'best fit');
    }
    if (matcher === 'best fit') {
        return (0,_LookupSupportedLocales__WEBPACK_IMPORTED_MODULE_2__.LookupSupportedLocales)(availableLocales, requestedLocales);
    }
    return (0,_LookupSupportedLocales__WEBPACK_IMPORTED_MODULE_2__.LookupSupportedLocales)(availableLocales, requestedLocales);
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/UnicodeExtensionValue.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/UnicodeExtensionValue.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnicodeExtensionValue": function() { return /* binding */ UnicodeExtensionValue; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");

/**
 * https://tc39.es/ecma402/#sec-unicodeextensionvalue
 * @param extension
 * @param key
 */
function UnicodeExtensionValue(extension, key) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.invariant)(key.length === 2, 'key must have 2 elements');
    var size = extension.length;
    var searchValue = "-" + key + "-";
    var pos = extension.indexOf(searchValue);
    if (pos !== -1) {
        var start = pos + 4;
        var end = start;
        var k = start;
        var done = false;
        while (!done) {
            var e = extension.indexOf('-', k);
            var len = void 0;
            if (e === -1) {
                len = size - k;
            }
            else {
                len = e - k;
            }
            if (len === 2) {
                done = true;
            }
            else if (e === -1) {
                end = size;
                done = true;
            }
            else {
                end = e;
                k = e + 1;
            }
        }
        return extension.slice(start, end);
    }
    searchValue = "-" + key;
    pos = extension.indexOf(searchValue);
    if (pos !== -1 && pos + 3 === size) {
        return '';
    }
    return undefined;
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/data.js":
/*!*************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/data.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMissingLocaleDataError": function() { return /* binding */ isMissingLocaleDataError; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var MissingLocaleDataError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MissingLocaleDataError, _super);
    function MissingLocaleDataError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'MISSING_LOCALE_DATA';
        return _this;
    }
    return MissingLocaleDataError;
}(Error));
function isMissingLocaleDataError(e) {
    return e.type === 'MISSING_LOCALE_DATA';
}


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_formatToParts": function() { return /* reexport safe */ _NumberFormat_format_to_parts__WEBPACK_IMPORTED_MODULE_21__.default; },
/* harmony export */   "getInternalSlot": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_25__.getInternalSlot; },
/* harmony export */   "getMultiInternalSlots": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_25__.getMultiInternalSlots; },
/* harmony export */   "isLiteralPart": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_25__.isLiteralPart; },
/* harmony export */   "setInternalSlot": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_25__.setInternalSlot; },
/* harmony export */   "setMultiInternalSlots": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_25__.setMultiInternalSlots; },
/* harmony export */   "getMagnitude": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_25__.getMagnitude; },
/* harmony export */   "defineProperty": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_25__.defineProperty; },
/* harmony export */   "isMissingLocaleDataError": function() { return /* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_26__.isMissingLocaleDataError; },
/* harmony export */   "invariant": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_25__.invariant; }
/* harmony export */ });
/* harmony import */ var _CanonicalizeLocaleList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanonicalizeLocaleList */ "./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CanonicalizeLocaleList__WEBPACK_IMPORTED_MODULE_0__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _CanonicalizeLocaleList__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _CanonicalizeTimeZoneName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanonicalizeTimeZoneName */ "./node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeTimeZoneName.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CanonicalizeTimeZoneName__WEBPACK_IMPORTED_MODULE_1__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _CanonicalizeTimeZoneName__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _CoerceOptionsToObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoerceOptionsToObject */ "./node_modules/@formatjs/ecma402-abstract/lib/CoerceOptionsToObject.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CoerceOptionsToObject__WEBPACK_IMPORTED_MODULE_2__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _CoerceOptionsToObject__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _GetNumberOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetNumberOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetNumberOption.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _GetNumberOption__WEBPACK_IMPORTED_MODULE_3__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _GetNumberOption__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _GetOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GetOption */ "./node_modules/@formatjs/ecma402-abstract/lib/GetOption.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _GetOption__WEBPACK_IMPORTED_MODULE_4__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _GetOption__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _GetOptionsObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GetOptionsObject */ "./node_modules/@formatjs/ecma402-abstract/lib/GetOptionsObject.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _GetOptionsObject__WEBPACK_IMPORTED_MODULE_5__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _GetOptionsObject__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IsSanctionedSimpleUnitIdentifier */ "./node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_6__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _IsSanctionedSimpleUnitIdentifier__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _IsValidTimeZoneName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IsValidTimeZoneName */ "./node_modules/@formatjs/ecma402-abstract/lib/IsValidTimeZoneName.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IsValidTimeZoneName__WEBPACK_IMPORTED_MODULE_7__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _IsValidTimeZoneName__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _IsWellFormedCurrencyCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IsWellFormedCurrencyCode */ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedCurrencyCode.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IsWellFormedCurrencyCode__WEBPACK_IMPORTED_MODULE_8__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _IsWellFormedCurrencyCode__WEBPACK_IMPORTED_MODULE_8__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _IsWellFormedUnitIdentifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IsWellFormedUnitIdentifier */ "./node_modules/@formatjs/ecma402-abstract/lib/IsWellFormedUnitIdentifier.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IsWellFormedUnitIdentifier__WEBPACK_IMPORTED_MODULE_9__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _IsWellFormedUnitIdentifier__WEBPACK_IMPORTED_MODULE_9__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_ComputeExponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NumberFormat/ComputeExponent */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponent.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberFormat_ComputeExponent__WEBPACK_IMPORTED_MODULE_10__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _NumberFormat_ComputeExponent__WEBPACK_IMPORTED_MODULE_10__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_ComputeExponentForMagnitude__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NumberFormat/ComputeExponentForMagnitude */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ComputeExponentForMagnitude.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberFormat_ComputeExponentForMagnitude__WEBPACK_IMPORTED_MODULE_11__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _NumberFormat_ComputeExponentForMagnitude__WEBPACK_IMPORTED_MODULE_11__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_CurrencyDigits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NumberFormat/CurrencyDigits */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/CurrencyDigits.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberFormat_CurrencyDigits__WEBPACK_IMPORTED_MODULE_12__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _NumberFormat_CurrencyDigits__WEBPACK_IMPORTED_MODULE_12__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_FormatNumericToParts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NumberFormat/FormatNumericToParts */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToParts.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberFormat_FormatNumericToParts__WEBPACK_IMPORTED_MODULE_13__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _NumberFormat_FormatNumericToParts__WEBPACK_IMPORTED_MODULE_13__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_FormatNumericToString__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NumberFormat/FormatNumericToString */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/FormatNumericToString.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberFormat_FormatNumericToString__WEBPACK_IMPORTED_MODULE_14__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _NumberFormat_FormatNumericToString__WEBPACK_IMPORTED_MODULE_14__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_InitializeNumberFormat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./NumberFormat/InitializeNumberFormat */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/InitializeNumberFormat.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberFormat_InitializeNumberFormat__WEBPACK_IMPORTED_MODULE_15__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _NumberFormat_InitializeNumberFormat__WEBPACK_IMPORTED_MODULE_15__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_PartitionNumberPattern__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./NumberFormat/PartitionNumberPattern */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/PartitionNumberPattern.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberFormat_PartitionNumberPattern__WEBPACK_IMPORTED_MODULE_16__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _NumberFormat_PartitionNumberPattern__WEBPACK_IMPORTED_MODULE_16__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_SetNumberFormatDigitOptions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NumberFormat/SetNumberFormatDigitOptions */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatDigitOptions.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberFormat_SetNumberFormatDigitOptions__WEBPACK_IMPORTED_MODULE_17__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _NumberFormat_SetNumberFormatDigitOptions__WEBPACK_IMPORTED_MODULE_17__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_SetNumberFormatUnitOptions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./NumberFormat/SetNumberFormatUnitOptions */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/SetNumberFormatUnitOptions.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberFormat_SetNumberFormatUnitOptions__WEBPACK_IMPORTED_MODULE_18__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _NumberFormat_SetNumberFormatUnitOptions__WEBPACK_IMPORTED_MODULE_18__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_ToRawFixed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./NumberFormat/ToRawFixed */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawFixed.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberFormat_ToRawFixed__WEBPACK_IMPORTED_MODULE_19__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _NumberFormat_ToRawFixed__WEBPACK_IMPORTED_MODULE_19__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_ToRawPrecision__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./NumberFormat/ToRawPrecision */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/ToRawPrecision.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NumberFormat_ToRawPrecision__WEBPACK_IMPORTED_MODULE_20__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _NumberFormat_ToRawPrecision__WEBPACK_IMPORTED_MODULE_20__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _NumberFormat_format_to_parts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NumberFormat/format_to_parts */ "./node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js");
/* harmony import */ var _PartitionPattern__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PartitionPattern */ "./node_modules/@formatjs/ecma402-abstract/lib/PartitionPattern.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PartitionPattern__WEBPACK_IMPORTED_MODULE_22__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _PartitionPattern__WEBPACK_IMPORTED_MODULE_22__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _ResolveLocale__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ResolveLocale */ "./node_modules/@formatjs/ecma402-abstract/lib/ResolveLocale.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ResolveLocale__WEBPACK_IMPORTED_MODULE_23__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _ResolveLocale__WEBPACK_IMPORTED_MODULE_23__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _SupportedLocales__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SupportedLocales */ "./node_modules/@formatjs/ecma402-abstract/lib/SupportedLocales.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SupportedLocales__WEBPACK_IMPORTED_MODULE_24__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _SupportedLocales__WEBPACK_IMPORTED_MODULE_24__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./data */ "./node_modules/@formatjs/ecma402-abstract/lib/data.js");
/* harmony import */ var _types_relative_time__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./types/relative-time */ "./node_modules/@formatjs/ecma402-abstract/lib/types/relative-time.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_relative_time__WEBPACK_IMPORTED_MODULE_27__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_relative_time__WEBPACK_IMPORTED_MODULE_27__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _types_date_time__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./types/date-time */ "./node_modules/@formatjs/ecma402-abstract/lib/types/date-time.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_date_time__WEBPACK_IMPORTED_MODULE_28__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_date_time__WEBPACK_IMPORTED_MODULE_28__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _types_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./types/list */ "./node_modules/@formatjs/ecma402-abstract/lib/types/list.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_list__WEBPACK_IMPORTED_MODULE_29__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_list__WEBPACK_IMPORTED_MODULE_29__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _types_plural_rules__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./types/plural-rules */ "./node_modules/@formatjs/ecma402-abstract/lib/types/plural-rules.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_plural_rules__WEBPACK_IMPORTED_MODULE_30__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_plural_rules__WEBPACK_IMPORTED_MODULE_30__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _types_number__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./types/number */ "./node_modules/@formatjs/ecma402-abstract/lib/types/number.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_number__WEBPACK_IMPORTED_MODULE_31__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_number__WEBPACK_IMPORTED_MODULE_31__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _types_displaynames__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./types/displaynames */ "./node_modules/@formatjs/ecma402-abstract/lib/types/displaynames.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_displaynames__WEBPACK_IMPORTED_MODULE_32__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_displaynames__WEBPACK_IMPORTED_MODULE_32__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _262__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./262 */ "./node_modules/@formatjs/ecma402-abstract/lib/262.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _262__WEBPACK_IMPORTED_MODULE_33__) if(["default","_formatToParts","getInternalSlot","getMultiInternalSlots","isLiteralPart","setInternalSlot","setMultiInternalSlots","getMagnitude","defineProperty","isMissingLocaleDataError","invariant"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _262__WEBPACK_IMPORTED_MODULE_33__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





































/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/regex.generated.js":
/*!************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/regex.generated.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S_UNICODE_REGEX": function() { return /* binding */ S_UNICODE_REGEX; }
/* harmony export */ });
// @generated from regex-gen.ts
var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/date-time.js":
/*!************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/date-time.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangePatternType": function() { return /* binding */ RangePatternType; }
/* harmony export */ });
var RangePatternType;
(function (RangePatternType) {
    RangePatternType["startRange"] = "startRange";
    RangePatternType["shared"] = "shared";
    RangePatternType["endRange"] = "endRange";
})(RangePatternType || (RangePatternType = {}));


/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/displaynames.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/displaynames.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/list.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/list.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/number.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/number.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/plural-rules.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/plural-rules.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/types/relative-time.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/types/relative-time.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@formatjs/ecma402-abstract/lib/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/@formatjs/ecma402-abstract/lib/utils.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMagnitude": function() { return /* binding */ getMagnitude; },
/* harmony export */   "repeat": function() { return /* binding */ repeat; },
/* harmony export */   "setInternalSlot": function() { return /* binding */ setInternalSlot; },
/* harmony export */   "setMultiInternalSlots": function() { return /* binding */ setMultiInternalSlots; },
/* harmony export */   "getInternalSlot": function() { return /* binding */ getInternalSlot; },
/* harmony export */   "getMultiInternalSlots": function() { return /* binding */ getMultiInternalSlots; },
/* harmony export */   "isLiteralPart": function() { return /* binding */ isLiteralPart; },
/* harmony export */   "defineProperty": function() { return /* binding */ defineProperty; },
/* harmony export */   "UNICODE_EXTENSION_SEQUENCE_REGEX": function() { return /* binding */ UNICODE_EXTENSION_SEQUENCE_REGEX; },
/* harmony export */   "invariant": function() { return /* binding */ invariant; }
/* harmony export */ });
/**
 * Cannot do Math.log(x) / Math.log(10) bc if IEEE floating point issue
 * @param x number
 */
function getMagnitude(x) {
    // Cannot count string length via Number.toString because it may use scientific notation
    // for very small or very large numbers.
    return Math.floor(Math.log(x) * Math.LOG10E);
}
function repeat(s, times) {
    if (typeof s.repeat === 'function') {
        return s.repeat(times);
    }
    var arr = new Array(times);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = s;
    }
    return arr.join('');
}
function setInternalSlot(map, pl, field, value) {
    if (!map.get(pl)) {
        map.set(pl, Object.create(null));
    }
    var slots = map.get(pl);
    slots[field] = value;
}
function setMultiInternalSlots(map, pl, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var k = _a[_i];
        setInternalSlot(map, pl, k, props[k]);
    }
}
function getInternalSlot(map, pl, field) {
    return getMultiInternalSlots(map, pl, field)[field];
}
function getMultiInternalSlots(map, pl) {
    var fields = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        fields[_i - 2] = arguments[_i];
    }
    var slots = map.get(pl);
    if (!slots) {
        throw new TypeError(pl + " InternalSlot has not been initialized");
    }
    return fields.reduce(function (all, f) {
        all[f] = slots[f];
        return all;
    }, Object.create(null));
}
function isLiteralPart(patternPart) {
    return patternPart.type === 'literal';
}
/*
  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
*/
function defineProperty(target, name, _a) {
    var value = _a.value;
    Object.defineProperty(target, name, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: value,
    });
}
var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}


/***/ }),

/***/ "./node_modules/@formatjs/fast-memoize/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@formatjs/fast-memoize/lib/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ memoize; },
/* harmony export */   "strategies": function() { return /* binding */ strategies; }
/* harmony export */ });
//
// Main
//
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer,
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return (value == null || typeof value === 'number' || typeof value === 'boolean'); // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function () {
    return JSON.stringify(arguments);
};
//
// Cache
//
function ObjectWithoutPrototypeCache() {
    this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.has = function (key) {
    return key in this.cache;
};
ObjectWithoutPrototypeCache.prototype.get = function (key) {
    return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
    this.cache[key] = value;
};
var cacheDefault = {
    create: function create() {
        // @ts-ignore
        return new ObjectWithoutPrototypeCache();
    },
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic,
};


/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/error.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/error.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorKind": function() { return /* binding */ ErrorKind; }
/* harmony export */ });
var ErrorKind;
(function (ErrorKind) {
    /** Argument is unclosed (e.g. `{0`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    /** Argument is empty (e.g. `{}`). */
    ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    /** Argument is malformed (e.g. `{foo!}``) */
    ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    /** Expect an argument type (e.g. `{foo,}`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    /** Unsupported argument type (e.g. `{foo,foo}`) */
    ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    /** Expect an argument style (e.g. `{foo, number, }`) */
    ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    /** The number skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    /** The date time skeleton is invalid. */
    ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    /** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
    ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    /** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
    ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    /** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
    ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    /** Missing select argument options (e.g. `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    /** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    /** Expecting a selector in `select` argument (e.g `{foo, select}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    /** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    /** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
    ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    /**
     * Expecting a message fragment after the `plural` or `selectordinal` selector
     * (e.g. `{foo, plural, one}`)
     */
    ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    /** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
    ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    /**
     * Duplicate selectors in `plural` or `selectordinal` argument.
     * (e.g. {foo, plural, one {#} one {#}})
     */
    ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    /** Duplicate selectors in `select` argument.
     * (e.g. {foo, select, apple {apple} apple {apple}})
     */
    ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    /** Plural or select argument option must have `other` clause. */
    ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    /** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
    ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
    /** The tag name is invalid. (e.g. `<123>foo</123>`) */
    ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    /** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
    ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    /** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
    ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));


/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse": function() { return /* binding */ parse; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/icu-messageformat-parser/lib/error.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./node_modules/@formatjs/icu-messageformat-parser/lib/parser.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@formatjs/icu-messageformat-parser/lib/types.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if(["default","parse"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




function pruneLocation(els) {
    els.forEach(function (el) {
        delete el.location;
        if ((0,_types__WEBPACK_IMPORTED_MODULE_2__.isSelectElement)(el) || (0,_types__WEBPACK_IMPORTED_MODULE_2__.isPluralElement)(el)) {
            for (var k in el.options) {
                delete el.options[k].location;
                pruneLocation(el.options[k].value);
            }
        }
        else if ((0,_types__WEBPACK_IMPORTED_MODULE_2__.isNumberElement)(el) && (0,_types__WEBPACK_IMPORTED_MODULE_2__.isNumberSkeleton)(el.style)) {
            delete el.style.location;
        }
        else if (((0,_types__WEBPACK_IMPORTED_MODULE_2__.isDateElement)(el) || (0,_types__WEBPACK_IMPORTED_MODULE_2__.isTimeElement)(el)) &&
            (0,_types__WEBPACK_IMPORTED_MODULE_2__.isDateTimeSkeleton)(el.style)) {
            delete el.style.location;
        }
        else if ((0,_types__WEBPACK_IMPORTED_MODULE_2__.isTagElement)(el)) {
            pruneLocation(el.children);
        }
    });
}
function parse(message, opts) {
    if (opts === void 0) { opts = {}; }
    opts = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
    var result = new _parser__WEBPACK_IMPORTED_MODULE_1__.Parser(message, opts).parse();
    if (result.err) {
        var error = SyntaxError(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind[result.err.kind]);
        // @ts-expect-error Assign to error object
        error.location = result.err.location;
        // @ts-expect-error Assign to error object
        error.originalMessage = result.err.message;
        throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
        pruneLocation(result.val);
    }
    return result.val;
}



/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/parser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/parser.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Parser": function() { return /* binding */ Parser; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/icu-messageformat-parser/lib/error.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/@formatjs/icu-messageformat-parser/lib/types.js");
/* harmony import */ var _regex_generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regex.generated */ "./node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js");
/* harmony import */ var _formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @formatjs/icu-skeleton-parser */ "./node_modules/@formatjs/icu-skeleton-parser/lib/index.js");
var _a;





var SPACE_SEPARATOR_START_REGEX = new RegExp("^" + _regex_generated__WEBPACK_IMPORTED_MODULE_2__.SPACE_SEPARATOR_REGEX.source + "*");
var SPACE_SEPARATOR_END_REGEX = new RegExp(_regex_generated__WEBPACK_IMPORTED_MODULE_2__.SPACE_SEPARATOR_REGEX.source + "*$");
function createLocation(start, end) {
    return { start: start, end: end };
}
// #region Ponyfills
// Consolidate these variables up top for easier toggling during debugging
var hasNativeStartsWith = !!String.prototype.startsWith;
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var hasNativeIsSafeInteger = !!Number.isSafeInteger;
var isSafeInteger = hasNativeIsSafeInteger
    ? Number.isSafeInteger
    : function (n) {
        return (typeof n === 'number' &&
            isFinite(n) &&
            Math.floor(n) === n &&
            Math.abs(n) <= 0x1fffffffffffff);
    };
// IE11 does not support y and u.
var REGEX_SUPPORTS_U_AND_Y = true;
try {
    var re = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    /**
     * legacy Edge or Xbox One browser
     * Unicode flag support: supported
     * Pattern_Syntax support: not supported
     * See https://github.com/formatjs/formatjs/issues/2822
     */
    REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec('a')) === null || _a === void 0 ? void 0 : _a[0]) === 'a';
}
catch (_) {
    REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith
    ? // Native
        function startsWith(s, search, position) {
            return s.startsWith(search, position);
        }
    : // For IE11
        function startsWith(s, search, position) {
            return s.slice(position, position + search.length) === search;
        };
var fromCodePoint = hasNativeFromCodePoint
    ? String.fromCodePoint
    : // IE11
        function fromCodePoint() {
            var codePoints = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                codePoints[_i] = arguments[_i];
            }
            var elements = '';
            var length = codePoints.length;
            var i = 0;
            var code;
            while (length > i) {
                code = codePoints[i++];
                if (code > 0x10ffff)
                    throw RangeError(code + ' is not a valid code point');
                elements +=
                    code < 0x10000
                        ? String.fromCharCode(code)
                        : String.fromCharCode(((code -= 0x10000) >> 10) + 0xd800, (code % 0x400) + 0xdc00);
            }
            return elements;
        };
var fromEntries = 
// native
hasNativeFromEntries
    ? Object.fromEntries
    : // Ponyfill
        function fromEntries(entries) {
            var obj = {};
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var _a = entries_1[_i], k = _a[0], v = _a[1];
                obj[k] = v;
            }
            return obj;
        };
var codePointAt = hasNativeCodePointAt
    ? // Native
        function codePointAt(s, index) {
            return s.codePointAt(index);
        }
    : // IE 11
        function codePointAt(s, index) {
            var size = s.length;
            if (index < 0 || index >= size) {
                return undefined;
            }
            var first = s.charCodeAt(index);
            var second;
            return first < 0xd800 ||
                first > 0xdbff ||
                index + 1 === size ||
                (second = s.charCodeAt(index + 1)) < 0xdc00 ||
                second > 0xdfff
                ? first
                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
        };
var trimStart = hasTrimStart
    ? // Native
        function trimStart(s) {
            return s.trimStart();
        }
    : // Ponyfill
        function trimStart(s) {
            return s.replace(SPACE_SEPARATOR_START_REGEX, '');
        };
var trimEnd = hasTrimEnd
    ? // Native
        function trimEnd(s) {
            return s.trimEnd();
        }
    : // Ponyfill
        function trimEnd(s) {
            return s.replace(SPACE_SEPARATOR_END_REGEX, '');
        };
// Prevent minifier to translate new RegExp to literal form that might cause syntax error on IE11.
function RE(s, flag) {
    return new RegExp(s, flag);
}
// #endregion
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
    // Native
    var IDENTIFIER_PREFIX_RE_1 = RE('([^\\p{White_Space}\\p{Pattern_Syntax}]*)', 'yu');
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var _a;
        IDENTIFIER_PREFIX_RE_1.lastIndex = index;
        var match = IDENTIFIER_PREFIX_RE_1.exec(s);
        return (_a = match[1]) !== null && _a !== void 0 ? _a : '';
    };
}
else {
    // IE11
    matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
        var match = [];
        while (true) {
            var c = codePointAt(s, index);
            if (c === undefined || _isWhiteSpace(c) || _isPatternSyntax(c)) {
                break;
            }
            match.push(c);
            index += c >= 0x10000 ? 2 : 1;
        }
        return fromCodePoint.apply(void 0, match);
    };
}
var Parser = /** @class */ (function () {
    function Parser(message, options) {
        if (options === void 0) { options = {}; }
        this.message = message;
        this.position = { offset: 0, line: 1, column: 1 };
        this.ignoreTag = !!options.ignoreTag;
        this.requiresOtherClause = !!options.requiresOtherClause;
        this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser.prototype.parse = function () {
        if (this.offset() !== 0) {
            throw Error('parser can only be used once');
        }
        return this.parseMessage(0, '', false);
    };
    Parser.prototype.parseMessage = function (nestingLevel, parentArgType, expectingCloseTag) {
        var elements = [];
        while (!this.isEOF()) {
            var char = this.char();
            if (char === 123 /* `{` */) {
                var result = this.parseArgument(nestingLevel, expectingCloseTag);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else if (char === 125 /* `}` */ && nestingLevel > 0) {
                break;
            }
            else if (char === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) {
                var position = this.clonePosition();
                this.bump();
                elements.push({
                    type: _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.pound,
                    location: createLocation(position, this.clonePosition()),
                });
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                this.peek() === 47 // char code for '/'
            ) {
                if (expectingCloseTag) {
                    break;
                }
                else {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
                }
            }
            else if (char === 60 /* `<` */ &&
                !this.ignoreTag &&
                _isAlpha(this.peek() || 0)) {
                var result = this.parseTag(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
            else {
                var result = this.parseLiteral(nestingLevel, parentArgType);
                if (result.err) {
                    return result;
                }
                elements.push(result.val);
            }
        }
        return { val: elements, err: null };
    };
    /**
     * A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
     * [custom element name][] except that a dash is NOT always mandatory and uppercase letters
     * are accepted:
     *
     * ```
     * tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
     * tagName ::= [a-z] (PENChar)*
     * PENChar ::=
     *     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
     *     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
     *     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
     * ```
     *
     * [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
     * NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
     * since other tag-based engines like React allow it
     */
    Parser.prototype.parseTag = function (nestingLevel, parentArgType) {
        var startPosition = this.clonePosition();
        this.bump(); // `<`
        var tagName = this.parseTagName();
        this.bumpSpace();
        if (this.bumpIf('/>')) {
            // Self closing tag
            return {
                val: {
                    type: _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.literal,
                    value: "<" + tagName + "/>",
                    location: createLocation(startPosition, this.clonePosition()),
                },
                err: null,
            };
        }
        else if (this.bumpIf('>')) {
            var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
            if (childrenResult.err) {
                return childrenResult;
            }
            var children = childrenResult.val;
            // Expecting a close tag
            var endTagStartPosition = this.clonePosition();
            if (this.bumpIf('</')) {
                if (this.isEOF() || !_isAlpha(this.char())) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                var closingTagNameStartPosition = this.clonePosition();
                var closingTagName = this.parseTagName();
                if (tagName !== closingTagName) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
                }
                this.bumpSpace();
                if (!this.bumpIf('>')) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
                }
                return {
                    val: {
                        type: _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.tag,
                        value: tagName,
                        children: children,
                        location: createLocation(startPosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            else {
                return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
            }
        }
        else {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
        }
    };
    /**
     * This method assumes that the caller has peeked ahead for the first tag character.
     */
    Parser.prototype.parseTagName = function () {
        var startOffset = this.offset();
        this.bump(); // the first tag name character
        while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
            this.bump();
        }
        return this.message.slice(startOffset, this.offset());
    };
    Parser.prototype.parseLiteral = function (nestingLevel, parentArgType) {
        var start = this.clonePosition();
        var value = '';
        while (true) {
            var parseQuoteResult = this.tryParseQuote(parentArgType);
            if (parseQuoteResult) {
                value += parseQuoteResult;
                continue;
            }
            var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
            if (parseUnquotedResult) {
                value += parseUnquotedResult;
                continue;
            }
            var parseLeftAngleResult = this.tryParseLeftAngleBracket();
            if (parseLeftAngleResult) {
                value += parseLeftAngleResult;
                continue;
            }
            break;
        }
        var location = createLocation(start, this.clonePosition());
        return {
            val: { type: _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.literal, value: value, location: location },
            err: null,
        };
    };
    Parser.prototype.tryParseLeftAngleBracket = function () {
        if (!this.isEOF() &&
            this.char() === 60 /* `<` */ &&
            (this.ignoreTag ||
                // If at the opening tag or closing tag position, bail.
                !_isAlphaOrSlash(this.peek() || 0))) {
            this.bump(); // `<`
            return '<';
        }
        return null;
    };
    /**
     * Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
     * a character that requires quoting (that is, "only where needed"), and works the same in
     * nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
     */
    Parser.prototype.tryParseQuote = function (parentArgType) {
        if (this.isEOF() || this.char() !== 39 /* `'` */) {
            return null;
        }
        // Parse escaped char following the apostrophe, or early return if there is no escaped char.
        // Check if is valid escaped character
        switch (this.peek()) {
            case 39 /* `'` */:
                // double quote, should return as a single quote.
                this.bump();
                this.bump();
                return "'";
            // '{', '<', '>', '}'
            case 123:
            case 60:
            case 62:
            case 125:
                break;
            case 35: // '#'
                if (parentArgType === 'plural' || parentArgType === 'selectordinal') {
                    break;
                }
                return null;
            default:
                return null;
        }
        this.bump(); // apostrophe
        var codePoints = [this.char()]; // escaped char
        this.bump();
        // read chars until the optional closing apostrophe is found
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch === 39 /* `'` */) {
                if (this.peek() === 39 /* `'` */) {
                    codePoints.push(39);
                    // Bump one more time because we need to skip 2 characters.
                    this.bump();
                }
                else {
                    // Optional closing apostrophe.
                    this.bump();
                    break;
                }
            }
            else {
                codePoints.push(ch);
            }
            this.bump();
        }
        return fromCodePoint.apply(void 0, codePoints);
    };
    Parser.prototype.tryParseUnquoted = function (nestingLevel, parentArgType) {
        if (this.isEOF()) {
            return null;
        }
        var ch = this.char();
        if (ch === 60 /* `<` */ ||
            ch === 123 /* `{` */ ||
            (ch === 35 /* `#` */ &&
                (parentArgType === 'plural' || parentArgType === 'selectordinal')) ||
            (ch === 125 /* `}` */ && nestingLevel > 0)) {
            return null;
        }
        else {
            this.bump();
            return fromCodePoint(ch);
        }
    };
    Parser.prototype.parseArgument = function (nestingLevel, expectingCloseTag) {
        var openingBracePosition = this.clonePosition();
        this.bump(); // `{`
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        if (this.char() === 125 /* `}` */) {
            this.bump();
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        // argument name
        var value = this.parseIdentifierIfPossible().value;
        if (!value) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bumpSpace();
        if (this.isEOF()) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        switch (this.char()) {
            // Simple argument: `{name}`
            case 125 /* `}` */: {
                this.bump(); // `}`
                return {
                    val: {
                        type: _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.argument,
                        // value does not include the opening and closing braces.
                        value: value,
                        location: createLocation(openingBracePosition, this.clonePosition()),
                    },
                    err: null,
                };
            }
            // Argument with options: `{name, format, ...}`
            case 44 /* `,` */: {
                this.bump(); // `,`
                this.bumpSpace();
                if (this.isEOF()) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
                }
                return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
            }
            default:
                return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
        }
    };
    /**
     * Advance the parser until the end of the identifier, if it is currently on
     * an identifier character. Return an empty string otherwise.
     */
    Parser.prototype.parseIdentifierIfPossible = function () {
        var startingPosition = this.clonePosition();
        var startOffset = this.offset();
        var value = matchIdentifierAtIndex(this.message, startOffset);
        var endOffset = startOffset + value.length;
        this.bumpTo(endOffset);
        var endPosition = this.clonePosition();
        var location = createLocation(startingPosition, endPosition);
        return { value: value, location: location };
    };
    Parser.prototype.parseArgumentOptions = function (nestingLevel, expectingCloseTag, value, openingBracePosition) {
        var _a;
        // Parse this range:
        // {name, type, style}
        //        ^---^
        var typeStartPosition = this.clonePosition();
        var argType = this.parseIdentifierIfPossible().value;
        var typeEndPosition = this.clonePosition();
        switch (argType) {
            case '':
                // Expecting a style string number, date, time, plural, selectordinal, or select.
                return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
            case 'number':
            case 'date':
            case 'time': {
                // Parse this range:
                // {name, number, style}
                //              ^-------^
                this.bumpSpace();
                var styleAndLocation = null;
                if (this.bumpIf(',')) {
                    this.bumpSpace();
                    var styleStartPosition = this.clonePosition();
                    var result = this.parseSimpleArgStyleIfPossible();
                    if (result.err) {
                        return result;
                    }
                    var style = trimEnd(result.val);
                    if (style.length === 0) {
                        return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    var styleLocation = createLocation(styleStartPosition, this.clonePosition());
                    styleAndLocation = { style: style, styleLocation: styleLocation };
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_1 = createLocation(openingBracePosition, this.clonePosition());
                // Extract style or skeleton
                if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, '::', 0)) {
                    // Skeleton starts with `::`.
                    var skeleton = trimStart(styleAndLocation.style.slice(2));
                    if (argType === 'number') {
                        var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
                        if (result.err) {
                            return result;
                        }
                        return {
                            val: { type: _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.number, value: value, location: location_1, style: result.val },
                            err: null,
                        };
                    }
                    else {
                        if (skeleton.length === 0) {
                            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
                        }
                        var style = {
                            type: _types__WEBPACK_IMPORTED_MODULE_1__.SKELETON_TYPE.dateTime,
                            pattern: skeleton,
                            location: styleAndLocation.styleLocation,
                            parsedOptions: this.shouldParseSkeletons
                                ? (0,_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_3__.parseDateTimeSkeleton)(skeleton)
                                : {},
                        };
                        var type = argType === 'date' ? _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.date : _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.time;
                        return {
                            val: { type: type, value: value, location: location_1, style: style },
                            err: null,
                        };
                    }
                }
                // Regular style or no style.
                return {
                    val: {
                        type: argType === 'number'
                            ? _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.number
                            : argType === 'date'
                                ? _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.date
                                : _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.time,
                        value: value,
                        location: location_1,
                        style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null,
                    },
                    err: null,
                };
            }
            case 'plural':
            case 'selectordinal':
            case 'select': {
                // Parse this range:
                // {name, plural, options}
                //              ^---------^
                var typeEndPosition_1 = this.clonePosition();
                this.bumpSpace();
                if (!this.bumpIf(',')) {
                    return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, typeEndPosition_1)));
                }
                this.bumpSpace();
                // Parse offset:
                // {name, plural, offset:1, options}
                //                ^-----^
                //
                // or the first option:
                //
                // {name, plural, one {...} other {...}}
                //                ^--^
                var identifierAndLocation = this.parseIdentifierIfPossible();
                var pluralOffset = 0;
                if (argType !== 'select' && identifierAndLocation.value === 'offset') {
                    if (!this.bumpIf(':')) {
                        return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
                    }
                    this.bumpSpace();
                    var result = this.tryParseDecimalInteger(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, _error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                    if (result.err) {
                        return result;
                    }
                    // Parse another identifier for option parsing
                    this.bumpSpace();
                    identifierAndLocation = this.parseIdentifierIfPossible();
                    pluralOffset = result.val;
                }
                var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
                if (optionsResult.err) {
                    return optionsResult;
                }
                var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
                if (argCloseResult.err) {
                    return argCloseResult;
                }
                var location_2 = createLocation(openingBracePosition, this.clonePosition());
                if (argType === 'select') {
                    return {
                        val: {
                            type: _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.select,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            location: location_2,
                        },
                        err: null,
                    };
                }
                else {
                    return {
                        val: {
                            type: _types__WEBPACK_IMPORTED_MODULE_1__.TYPE.plural,
                            value: value,
                            options: fromEntries(optionsResult.val),
                            offset: pluralOffset,
                            pluralType: argType === 'plural' ? 'cardinal' : 'ordinal',
                            location: location_2,
                        },
                        err: null,
                    };
                }
            }
            default:
                return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        }
    };
    Parser.prototype.tryParseArgumentClose = function (openingBracePosition) {
        // Parse: {value, number, ::currency/GBP }
        //
        if (this.isEOF() || this.char() !== 125 /* `}` */) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
        }
        this.bump(); // `}`
        return { val: true, err: null };
    };
    /**
     * See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
     */
    Parser.prototype.parseSimpleArgStyleIfPossible = function () {
        var nestedBraces = 0;
        var startPosition = this.clonePosition();
        while (!this.isEOF()) {
            var ch = this.char();
            switch (ch) {
                case 39 /* `'` */: {
                    // Treat apostrophe as quoting but include it in the style part.
                    // Find the end of the quoted literal text.
                    this.bump();
                    var apostrophePosition = this.clonePosition();
                    if (!this.bumpUntil("'")) {
                        return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
                    }
                    this.bump();
                    break;
                }
                case 123 /* `{` */: {
                    nestedBraces += 1;
                    this.bump();
                    break;
                }
                case 125 /* `}` */: {
                    if (nestedBraces > 0) {
                        nestedBraces -= 1;
                    }
                    else {
                        return {
                            val: this.message.slice(startPosition.offset, this.offset()),
                            err: null,
                        };
                    }
                    break;
                }
                default:
                    this.bump();
                    break;
            }
        }
        return {
            val: this.message.slice(startPosition.offset, this.offset()),
            err: null,
        };
    };
    Parser.prototype.parseNumberSkeletonFromString = function (skeleton, location) {
        var tokens = [];
        try {
            tokens = (0,_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_3__.parseNumberSkeletonFromString)(skeleton);
        }
        catch (e) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.INVALID_NUMBER_SKELETON, location);
        }
        return {
            val: {
                type: _types__WEBPACK_IMPORTED_MODULE_1__.SKELETON_TYPE.number,
                tokens: tokens,
                location: location,
                parsedOptions: this.shouldParseSkeletons
                    ? (0,_formatjs_icu_skeleton_parser__WEBPACK_IMPORTED_MODULE_3__.parseNumberSkeleton)(tokens)
                    : {},
            },
            err: null,
        };
    };
    /**
     * @param nesting_level The current nesting level of messages.
     *     This can be positive when parsing message fragment in select or plural argument options.
     * @param parent_arg_type The parent argument's type.
     * @param parsed_first_identifier If provided, this is the first identifier-like selector of
     *     the argument. It is a by-product of a previous parsing attempt.
     * @param expecting_close_tag If true, this message is directly or indirectly nested inside
     *     between a pair of opening and closing tags. The nested message will not parse beyond
     *     the closing tag boundary.
     */
    Parser.prototype.tryParsePluralOrSelectOptions = function (nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
        var _a;
        var hasOtherClause = false;
        var options = [];
        var parsedSelectors = new Set();
        var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
        // Parse:
        // one {one apple}
        // ^--^
        while (true) {
            if (selector.length === 0) {
                var startPosition = this.clonePosition();
                if (parentArgType !== 'select' && this.bumpIf('=')) {
                    // Try parse `={number}` selector
                    var result = this.tryParseDecimalInteger(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, _error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
                    if (result.err) {
                        return result;
                    }
                    selectorLocation = createLocation(startPosition, this.clonePosition());
                    selector = this.message.slice(startPosition.offset, this.offset());
                }
                else {
                    break;
                }
            }
            // Duplicate selector clauses
            if (parsedSelectors.has(selector)) {
                return this.error(parentArgType === 'select'
                    ? _error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : _error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
            }
            if (selector === 'other') {
                hasOtherClause = true;
            }
            // Parse:
            // one {one apple}
            //     ^----------^
            this.bumpSpace();
            var openingBracePosition = this.clonePosition();
            if (!this.bumpIf('{')) {
                return this.error(parentArgType === 'select'
                    ? _error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : _error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
            if (fragmentResult.err) {
                return fragmentResult;
            }
            var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
            if (argCloseResult.err) {
                return argCloseResult;
            }
            options.push([
                selector,
                {
                    value: fragmentResult.val,
                    location: createLocation(openingBracePosition, this.clonePosition()),
                },
            ]);
            // Keep track of the existing selectors
            parsedSelectors.add(selector);
            // Prep next selector clause.
            this.bumpSpace();
            (_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location);
        }
        if (options.length === 0) {
            return this.error(parentArgType === 'select'
                ? _error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR
                : _error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
        }
        if (this.requiresOtherClause && !hasOtherClause) {
            return this.error(_error__WEBPACK_IMPORTED_MODULE_0__.ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
        }
        return { val: options, err: null };
    };
    Parser.prototype.tryParseDecimalInteger = function (expectNumberError, invalidNumberError) {
        var sign = 1;
        var startingPosition = this.clonePosition();
        if (this.bumpIf('+')) {
        }
        else if (this.bumpIf('-')) {
            sign = -1;
        }
        var hasDigits = false;
        var decimal = 0;
        while (!this.isEOF()) {
            var ch = this.char();
            if (ch >= 48 /* `0` */ && ch <= 57 /* `9` */) {
                hasDigits = true;
                decimal = decimal * 10 + (ch - 48);
                this.bump();
            }
            else {
                break;
            }
        }
        var location = createLocation(startingPosition, this.clonePosition());
        if (!hasDigits) {
            return this.error(expectNumberError, location);
        }
        decimal *= sign;
        if (!isSafeInteger(decimal)) {
            return this.error(invalidNumberError, location);
        }
        return { val: decimal, err: null };
    };
    Parser.prototype.offset = function () {
        return this.position.offset;
    };
    Parser.prototype.isEOF = function () {
        return this.offset() === this.message.length;
    };
    Parser.prototype.clonePosition = function () {
        // This is much faster than `Object.assign` or spread.
        return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column,
        };
    };
    /**
     * Return the code point at the current position of the parser.
     * Throws if the index is out of bound.
     */
    Parser.prototype.char = function () {
        var offset = this.position.offset;
        if (offset >= this.message.length) {
            throw Error('out of bound');
        }
        var code = codePointAt(this.message, offset);
        if (code === undefined) {
            throw Error("Offset " + offset + " is at invalid UTF-16 code unit boundary");
        }
        return code;
    };
    Parser.prototype.error = function (kind, location) {
        return {
            val: null,
            err: {
                kind: kind,
                message: this.message,
                location: location,
            },
        };
    };
    /** Bump the parser to the next UTF-16 code unit. */
    Parser.prototype.bump = function () {
        if (this.isEOF()) {
            return;
        }
        var code = this.char();
        if (code === 10 /* '\n' */) {
            this.position.line += 1;
            this.position.column = 1;
            this.position.offset += 1;
        }
        else {
            this.position.column += 1;
            // 0 ~ 0x10000 -> unicode BMP, otherwise skip the surrogate pair.
            this.position.offset += code < 0x10000 ? 1 : 2;
        }
    };
    /**
     * If the substring starting at the current position of the parser has
     * the given prefix, then bump the parser to the character immediately
     * following the prefix and return true. Otherwise, don't bump the parser
     * and return false.
     */
    Parser.prototype.bumpIf = function (prefix) {
        if (startsWith(this.message, prefix, this.offset())) {
            for (var i = 0; i < prefix.length; i++) {
                this.bump();
            }
            return true;
        }
        return false;
    };
    /**
     * Bump the parser until the pattern character is found and return `true`.
     * Otherwise bump to the end of the file and return `false`.
     */
    Parser.prototype.bumpUntil = function (pattern) {
        var currentOffset = this.offset();
        var index = this.message.indexOf(pattern, currentOffset);
        if (index >= 0) {
            this.bumpTo(index);
            return true;
        }
        else {
            this.bumpTo(this.message.length);
            return false;
        }
    };
    /**
     * Bump the parser to the target offset.
     * If target offset is beyond the end of the input, bump the parser to the end of the input.
     */
    Parser.prototype.bumpTo = function (targetOffset) {
        if (this.offset() > targetOffset) {
            throw Error("targetOffset " + targetOffset + " must be greater than or equal to the current offset " + this.offset());
        }
        targetOffset = Math.min(targetOffset, this.message.length);
        while (true) {
            var offset = this.offset();
            if (offset === targetOffset) {
                break;
            }
            if (offset > targetOffset) {
                throw Error("targetOffset " + targetOffset + " is at invalid UTF-16 code unit boundary");
            }
            this.bump();
            if (this.isEOF()) {
                break;
            }
        }
    };
    /** advance the parser through all whitespace to the next non-whitespace code unit. */
    Parser.prototype.bumpSpace = function () {
        while (!this.isEOF() && _isWhiteSpace(this.char())) {
            this.bump();
        }
    };
    /**
     * Peek at the *next* Unicode codepoint in the input without advancing the parser.
     * If the input has been exhausted, then this returns null.
     */
    Parser.prototype.peek = function () {
        if (this.isEOF()) {
            return null;
        }
        var code = this.char();
        var offset = this.offset();
        var nextCode = this.message.charCodeAt(offset + (code >= 0x10000 ? 2 : 1));
        return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser;
}());

/**
 * This check if codepoint is alphabet (lower & uppercase)
 * @param codepoint
 * @returns
 */
function _isAlpha(codepoint) {
    return ((codepoint >= 97 && codepoint <= 122) ||
        (codepoint >= 65 && codepoint <= 90));
}
function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47; /* '/' */
}
/** See `parseTag` function docs. */
function _isPotentialElementNameChar(c) {
    return (c === 45 /* '-' */ ||
        c === 46 /* '.' */ ||
        (c >= 48 && c <= 57) /* 0..9 */ ||
        c === 95 /* '_' */ ||
        (c >= 97 && c <= 122) /** a..z */ ||
        (c >= 65 && c <= 90) /* A..Z */ ||
        c == 0xb7 ||
        (c >= 0xc0 && c <= 0xd6) ||
        (c >= 0xd8 && c <= 0xf6) ||
        (c >= 0xf8 && c <= 0x37d) ||
        (c >= 0x37f && c <= 0x1fff) ||
        (c >= 0x200c && c <= 0x200d) ||
        (c >= 0x203f && c <= 0x2040) ||
        (c >= 0x2070 && c <= 0x218f) ||
        (c >= 0x2c00 && c <= 0x2fef) ||
        (c >= 0x3001 && c <= 0xd7ff) ||
        (c >= 0xf900 && c <= 0xfdcf) ||
        (c >= 0xfdf0 && c <= 0xfffd) ||
        (c >= 0x10000 && c <= 0xeffff));
}
/**
 * Code point equivalent of regex `\p{White_Space}`.
 * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isWhiteSpace(c) {
    return ((c >= 0x0009 && c <= 0x000d) ||
        c === 0x0020 ||
        c === 0x0085 ||
        (c >= 0x200e && c <= 0x200f) ||
        c === 0x2028 ||
        c === 0x2029);
}
/**
 * Code point equivalent of regex `\p{Pattern_Syntax}`.
 * See https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
 */
function _isPatternSyntax(c) {
    return ((c >= 0x0021 && c <= 0x0023) ||
        c === 0x0024 ||
        (c >= 0x0025 && c <= 0x0027) ||
        c === 0x0028 ||
        c === 0x0029 ||
        c === 0x002a ||
        c === 0x002b ||
        c === 0x002c ||
        c === 0x002d ||
        (c >= 0x002e && c <= 0x002f) ||
        (c >= 0x003a && c <= 0x003b) ||
        (c >= 0x003c && c <= 0x003e) ||
        (c >= 0x003f && c <= 0x0040) ||
        c === 0x005b ||
        c === 0x005c ||
        c === 0x005d ||
        c === 0x005e ||
        c === 0x0060 ||
        c === 0x007b ||
        c === 0x007c ||
        c === 0x007d ||
        c === 0x007e ||
        c === 0x00a1 ||
        (c >= 0x00a2 && c <= 0x00a5) ||
        c === 0x00a6 ||
        c === 0x00a7 ||
        c === 0x00a9 ||
        c === 0x00ab ||
        c === 0x00ac ||
        c === 0x00ae ||
        c === 0x00b0 ||
        c === 0x00b1 ||
        c === 0x00b6 ||
        c === 0x00bb ||
        c === 0x00bf ||
        c === 0x00d7 ||
        c === 0x00f7 ||
        (c >= 0x2010 && c <= 0x2015) ||
        (c >= 0x2016 && c <= 0x2017) ||
        c === 0x2018 ||
        c === 0x2019 ||
        c === 0x201a ||
        (c >= 0x201b && c <= 0x201c) ||
        c === 0x201d ||
        c === 0x201e ||
        c === 0x201f ||
        (c >= 0x2020 && c <= 0x2027) ||
        (c >= 0x2030 && c <= 0x2038) ||
        c === 0x2039 ||
        c === 0x203a ||
        (c >= 0x203b && c <= 0x203e) ||
        (c >= 0x2041 && c <= 0x2043) ||
        c === 0x2044 ||
        c === 0x2045 ||
        c === 0x2046 ||
        (c >= 0x2047 && c <= 0x2051) ||
        c === 0x2052 ||
        c === 0x2053 ||
        (c >= 0x2055 && c <= 0x205e) ||
        (c >= 0x2190 && c <= 0x2194) ||
        (c >= 0x2195 && c <= 0x2199) ||
        (c >= 0x219a && c <= 0x219b) ||
        (c >= 0x219c && c <= 0x219f) ||
        c === 0x21a0 ||
        (c >= 0x21a1 && c <= 0x21a2) ||
        c === 0x21a3 ||
        (c >= 0x21a4 && c <= 0x21a5) ||
        c === 0x21a6 ||
        (c >= 0x21a7 && c <= 0x21ad) ||
        c === 0x21ae ||
        (c >= 0x21af && c <= 0x21cd) ||
        (c >= 0x21ce && c <= 0x21cf) ||
        (c >= 0x21d0 && c <= 0x21d1) ||
        c === 0x21d2 ||
        c === 0x21d3 ||
        c === 0x21d4 ||
        (c >= 0x21d5 && c <= 0x21f3) ||
        (c >= 0x21f4 && c <= 0x22ff) ||
        (c >= 0x2300 && c <= 0x2307) ||
        c === 0x2308 ||
        c === 0x2309 ||
        c === 0x230a ||
        c === 0x230b ||
        (c >= 0x230c && c <= 0x231f) ||
        (c >= 0x2320 && c <= 0x2321) ||
        (c >= 0x2322 && c <= 0x2328) ||
        c === 0x2329 ||
        c === 0x232a ||
        (c >= 0x232b && c <= 0x237b) ||
        c === 0x237c ||
        (c >= 0x237d && c <= 0x239a) ||
        (c >= 0x239b && c <= 0x23b3) ||
        (c >= 0x23b4 && c <= 0x23db) ||
        (c >= 0x23dc && c <= 0x23e1) ||
        (c >= 0x23e2 && c <= 0x2426) ||
        (c >= 0x2427 && c <= 0x243f) ||
        (c >= 0x2440 && c <= 0x244a) ||
        (c >= 0x244b && c <= 0x245f) ||
        (c >= 0x2500 && c <= 0x25b6) ||
        c === 0x25b7 ||
        (c >= 0x25b8 && c <= 0x25c0) ||
        c === 0x25c1 ||
        (c >= 0x25c2 && c <= 0x25f7) ||
        (c >= 0x25f8 && c <= 0x25ff) ||
        (c >= 0x2600 && c <= 0x266e) ||
        c === 0x266f ||
        (c >= 0x2670 && c <= 0x2767) ||
        c === 0x2768 ||
        c === 0x2769 ||
        c === 0x276a ||
        c === 0x276b ||
        c === 0x276c ||
        c === 0x276d ||
        c === 0x276e ||
        c === 0x276f ||
        c === 0x2770 ||
        c === 0x2771 ||
        c === 0x2772 ||
        c === 0x2773 ||
        c === 0x2774 ||
        c === 0x2775 ||
        (c >= 0x2794 && c <= 0x27bf) ||
        (c >= 0x27c0 && c <= 0x27c4) ||
        c === 0x27c5 ||
        c === 0x27c6 ||
        (c >= 0x27c7 && c <= 0x27e5) ||
        c === 0x27e6 ||
        c === 0x27e7 ||
        c === 0x27e8 ||
        c === 0x27e9 ||
        c === 0x27ea ||
        c === 0x27eb ||
        c === 0x27ec ||
        c === 0x27ed ||
        c === 0x27ee ||
        c === 0x27ef ||
        (c >= 0x27f0 && c <= 0x27ff) ||
        (c >= 0x2800 && c <= 0x28ff) ||
        (c >= 0x2900 && c <= 0x2982) ||
        c === 0x2983 ||
        c === 0x2984 ||
        c === 0x2985 ||
        c === 0x2986 ||
        c === 0x2987 ||
        c === 0x2988 ||
        c === 0x2989 ||
        c === 0x298a ||
        c === 0x298b ||
        c === 0x298c ||
        c === 0x298d ||
        c === 0x298e ||
        c === 0x298f ||
        c === 0x2990 ||
        c === 0x2991 ||
        c === 0x2992 ||
        c === 0x2993 ||
        c === 0x2994 ||
        c === 0x2995 ||
        c === 0x2996 ||
        c === 0x2997 ||
        c === 0x2998 ||
        (c >= 0x2999 && c <= 0x29d7) ||
        c === 0x29d8 ||
        c === 0x29d9 ||
        c === 0x29da ||
        c === 0x29db ||
        (c >= 0x29dc && c <= 0x29fb) ||
        c === 0x29fc ||
        c === 0x29fd ||
        (c >= 0x29fe && c <= 0x2aff) ||
        (c >= 0x2b00 && c <= 0x2b2f) ||
        (c >= 0x2b30 && c <= 0x2b44) ||
        (c >= 0x2b45 && c <= 0x2b46) ||
        (c >= 0x2b47 && c <= 0x2b4c) ||
        (c >= 0x2b4d && c <= 0x2b73) ||
        (c >= 0x2b74 && c <= 0x2b75) ||
        (c >= 0x2b76 && c <= 0x2b95) ||
        c === 0x2b96 ||
        (c >= 0x2b97 && c <= 0x2bff) ||
        (c >= 0x2e00 && c <= 0x2e01) ||
        c === 0x2e02 ||
        c === 0x2e03 ||
        c === 0x2e04 ||
        c === 0x2e05 ||
        (c >= 0x2e06 && c <= 0x2e08) ||
        c === 0x2e09 ||
        c === 0x2e0a ||
        c === 0x2e0b ||
        c === 0x2e0c ||
        c === 0x2e0d ||
        (c >= 0x2e0e && c <= 0x2e16) ||
        c === 0x2e17 ||
        (c >= 0x2e18 && c <= 0x2e19) ||
        c === 0x2e1a ||
        c === 0x2e1b ||
        c === 0x2e1c ||
        c === 0x2e1d ||
        (c >= 0x2e1e && c <= 0x2e1f) ||
        c === 0x2e20 ||
        c === 0x2e21 ||
        c === 0x2e22 ||
        c === 0x2e23 ||
        c === 0x2e24 ||
        c === 0x2e25 ||
        c === 0x2e26 ||
        c === 0x2e27 ||
        c === 0x2e28 ||
        c === 0x2e29 ||
        (c >= 0x2e2a && c <= 0x2e2e) ||
        c === 0x2e2f ||
        (c >= 0x2e30 && c <= 0x2e39) ||
        (c >= 0x2e3a && c <= 0x2e3b) ||
        (c >= 0x2e3c && c <= 0x2e3f) ||
        c === 0x2e40 ||
        c === 0x2e41 ||
        c === 0x2e42 ||
        (c >= 0x2e43 && c <= 0x2e4f) ||
        (c >= 0x2e50 && c <= 0x2e51) ||
        c === 0x2e52 ||
        (c >= 0x2e53 && c <= 0x2e7f) ||
        (c >= 0x3001 && c <= 0x3003) ||
        c === 0x3008 ||
        c === 0x3009 ||
        c === 0x300a ||
        c === 0x300b ||
        c === 0x300c ||
        c === 0x300d ||
        c === 0x300e ||
        c === 0x300f ||
        c === 0x3010 ||
        c === 0x3011 ||
        (c >= 0x3012 && c <= 0x3013) ||
        c === 0x3014 ||
        c === 0x3015 ||
        c === 0x3016 ||
        c === 0x3017 ||
        c === 0x3018 ||
        c === 0x3019 ||
        c === 0x301a ||
        c === 0x301b ||
        c === 0x301c ||
        c === 0x301d ||
        (c >= 0x301e && c <= 0x301f) ||
        c === 0x3020 ||
        c === 0x3030 ||
        c === 0xfd3e ||
        c === 0xfd3f ||
        (c >= 0xfe45 && c <= 0xfe46));
}


/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SPACE_SEPARATOR_REGEX": function() { return /* binding */ SPACE_SEPARATOR_REGEX; },
/* harmony export */   "WHITE_SPACE_REGEX": function() { return /* binding */ WHITE_SPACE_REGEX; }
/* harmony export */ });
// @generated from regex-gen.ts
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/;


/***/ }),

/***/ "./node_modules/@formatjs/icu-messageformat-parser/lib/types.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-messageformat-parser/lib/types.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TYPE": function() { return /* binding */ TYPE; },
/* harmony export */   "SKELETON_TYPE": function() { return /* binding */ SKELETON_TYPE; },
/* harmony export */   "isLiteralElement": function() { return /* binding */ isLiteralElement; },
/* harmony export */   "isArgumentElement": function() { return /* binding */ isArgumentElement; },
/* harmony export */   "isNumberElement": function() { return /* binding */ isNumberElement; },
/* harmony export */   "isDateElement": function() { return /* binding */ isDateElement; },
/* harmony export */   "isTimeElement": function() { return /* binding */ isTimeElement; },
/* harmony export */   "isSelectElement": function() { return /* binding */ isSelectElement; },
/* harmony export */   "isPluralElement": function() { return /* binding */ isPluralElement; },
/* harmony export */   "isPoundElement": function() { return /* binding */ isPoundElement; },
/* harmony export */   "isTagElement": function() { return /* binding */ isTagElement; },
/* harmony export */   "isNumberSkeleton": function() { return /* binding */ isNumberSkeleton; },
/* harmony export */   "isDateTimeSkeleton": function() { return /* binding */ isDateTimeSkeleton; },
/* harmony export */   "createLiteralElement": function() { return /* binding */ createLiteralElement; },
/* harmony export */   "createNumberElement": function() { return /* binding */ createNumberElement; }
/* harmony export */ });
var TYPE;
(function (TYPE) {
    /**
     * Raw text
     */
    TYPE[TYPE["literal"] = 0] = "literal";
    /**
     * Variable w/o any format, e.g `var` in `this is a {var}`
     */
    TYPE[TYPE["argument"] = 1] = "argument";
    /**
     * Variable w/ number format
     */
    TYPE[TYPE["number"] = 2] = "number";
    /**
     * Variable w/ date format
     */
    TYPE[TYPE["date"] = 3] = "date";
    /**
     * Variable w/ time format
     */
    TYPE[TYPE["time"] = 4] = "time";
    /**
     * Variable w/ select format
     */
    TYPE[TYPE["select"] = 5] = "select";
    /**
     * Variable w/ plural format
     */
    TYPE[TYPE["plural"] = 6] = "plural";
    /**
     * Only possible within plural argument.
     * This is the `#` symbol that will be substituted with the count.
     */
    TYPE[TYPE["pound"] = 7] = "pound";
    /**
     * XML-like tag
     */
    TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function (SKELETON_TYPE) {
    SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
    SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
/**
 * Type Guards
 */
function isLiteralElement(el) {
    return el.type === TYPE.literal;
}
function isArgumentElement(el) {
    return el.type === TYPE.argument;
}
function isNumberElement(el) {
    return el.type === TYPE.number;
}
function isDateElement(el) {
    return el.type === TYPE.date;
}
function isTimeElement(el) {
    return el.type === TYPE.time;
}
function isSelectElement(el) {
    return el.type === TYPE.select;
}
function isPluralElement(el) {
    return el.type === TYPE.plural;
}
function isPoundElement(el) {
    return el.type === TYPE.pound;
}
function isTagElement(el) {
    return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
    return !!(el && typeof el === 'object' && el.type === SKELETON_TYPE.dateTime);
}
function createLiteralElement(value) {
    return {
        type: TYPE.literal,
        value: value,
    };
}
function createNumberElement(value, style) {
    return {
        type: TYPE.number,
        value: value,
        style: style,
    };
}


/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDateTimeSkeleton": function() { return /* binding */ parseDateTimeSkeleton; }
/* harmony export */ });
/**
 * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
 * with some tweaks
 */
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
/**
 * Parse Date time skeleton into Intl.DateTimeFormatOptions
 * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * @public
 * @param skeleton skeleton string
 */
function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function (match) {
        var len = match.length;
        switch (match[0]) {
            // Era
            case 'G':
                result.era = len === 4 ? 'long' : len === 5 ? 'narrow' : 'short';
                break;
            // Year
            case 'y':
                result.year = len === 2 ? '2-digit' : 'numeric';
                break;
            case 'Y':
            case 'u':
            case 'U':
            case 'r':
                throw new RangeError('`Y/u/U/r` (year) patterns are not supported, use `y` instead');
            // Quarter
            case 'q':
            case 'Q':
                throw new RangeError('`q/Q` (quarter) patterns are not supported');
            // Month
            case 'M':
            case 'L':
                result.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][len - 1];
                break;
            // Week
            case 'w':
            case 'W':
                throw new RangeError('`w/W` (week) patterns are not supported');
            case 'd':
                result.day = ['numeric', '2-digit'][len - 1];
                break;
            case 'D':
            case 'F':
            case 'g':
                throw new RangeError('`D/F/g` (day) patterns are not supported, use `d` instead');
            // Weekday
            case 'E':
                result.weekday = len === 4 ? 'short' : len === 5 ? 'narrow' : 'short';
                break;
            case 'e':
                if (len < 4) {
                    throw new RangeError('`e..eee` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            case 'c':
                if (len < 4) {
                    throw new RangeError('`c..ccc` (weekday) patterns are not supported');
                }
                result.weekday = ['short', 'long', 'narrow', 'short'][len - 4];
                break;
            // Period
            case 'a': // AM, PM
                result.hour12 = true;
                break;
            case 'b': // am, pm, noon, midnight
            case 'B': // flexible day periods
                throw new RangeError('`b/B` (period) patterns are not supported, use `a` instead');
            // Hour
            case 'h':
                result.hourCycle = 'h12';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'H':
                result.hourCycle = 'h23';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'K':
                result.hourCycle = 'h11';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'k':
                result.hourCycle = 'h24';
                result.hour = ['numeric', '2-digit'][len - 1];
                break;
            case 'j':
            case 'J':
            case 'C':
                throw new RangeError('`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead');
            // Minute
            case 'm':
                result.minute = ['numeric', '2-digit'][len - 1];
                break;
            // Second
            case 's':
                result.second = ['numeric', '2-digit'][len - 1];
                break;
            case 'S':
            case 'A':
                throw new RangeError('`S/A` (second) patterns are not supported, use `s` instead');
            // Zone
            case 'z': // 1..3, 4: specific non-location format
                result.timeZoneName = len < 4 ? 'short' : 'long';
                break;
            case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
            case 'O': // 1, 4: miliseconds in day short, long
            case 'v': // 1, 4: generic non-location format
            case 'V': // 1, 2, 3, 4: time zone ID or city
            case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
            case 'x': // 1, 2, 3, 4: The ISO8601 varios formats
                throw new RangeError('`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead');
        }
        return '';
    });
    return result;
}


/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-time */ "./node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _date_time__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _date_time__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./node_modules/@formatjs/icu-skeleton-parser/lib/number.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _number__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _number__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/number.js":
/*!******************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/number.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseNumberSkeletonFromString": function() { return /* binding */ parseNumberSkeletonFromString; },
/* harmony export */   "parseNumberSkeleton": function() { return /* binding */ parseNumberSkeleton; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _regex_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.generated */ "./node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js");


function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
        throw new Error('Number skeleton cannot be empty');
    }
    // Parse the skeleton
    var stringTokens = skeleton
        .split(_regex_generated__WEBPACK_IMPORTED_MODULE_0__.WHITE_SPACE_REGEX)
        .filter(function (x) { return x.length > 0; });
    var tokens = [];
    for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
        var stringToken = stringTokens_1[_i];
        var stemAndOptions = stringToken.split('/');
        if (stemAndOptions.length === 0) {
            throw new Error('Invalid number skeleton');
        }
        var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.length === 0) {
                throw new Error('Invalid number skeleton');
            }
        }
        tokens.push({ stem: stem, options: options });
    }
    return tokens;
}
function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, '');
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
    var result = {};
    str.replace(SIGNIFICANT_PRECISION_REGEX, function (_, g1, g2) {
        // @@@ case
        if (typeof g2 !== 'string') {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits = g1.length;
        }
        // @@@+ case
        else if (g2 === '+') {
            result.minimumSignificantDigits = g1.length;
        }
        // .### case
        else if (g1[0] === '#') {
            result.maximumSignificantDigits = g1.length;
        }
        // .@@## or .@@@ case
        else {
            result.minimumSignificantDigits = g1.length;
            result.maximumSignificantDigits =
                g1.length + (typeof g2 === 'string' ? g2.length : 0);
        }
        return '';
    });
    return result;
}
function parseSign(str) {
    switch (str) {
        case 'sign-auto':
            return {
                signDisplay: 'auto',
            };
        case 'sign-accounting':
        case '()':
            return {
                currencySign: 'accounting',
            };
        case 'sign-always':
        case '+!':
            return {
                signDisplay: 'always',
            };
        case 'sign-accounting-always':
        case '()!':
            return {
                signDisplay: 'always',
                currencySign: 'accounting',
            };
        case 'sign-except-zero':
        case '+?':
            return {
                signDisplay: 'exceptZero',
            };
        case 'sign-accounting-except-zero':
        case '()?':
            return {
                signDisplay: 'exceptZero',
                currencySign: 'accounting',
            };
        case 'sign-never':
        case '+_':
            return {
                signDisplay: 'never',
            };
    }
}
function parseConciseScientificAndEngineeringStem(stem) {
    // Engineering
    var result;
    if (stem[0] === 'E' && stem[1] === 'E') {
        result = {
            notation: 'engineering',
        };
        stem = stem.slice(2);
    }
    else if (stem[0] === 'E') {
        result = {
            notation: 'scientific',
        };
        stem = stem.slice(1);
    }
    if (result) {
        var signDisplay = stem.slice(0, 2);
        if (signDisplay === '+!') {
            result.signDisplay = 'always';
            stem = stem.slice(2);
        }
        else if (signDisplay === '+?') {
            result.signDisplay = 'exceptZero';
            stem = stem.slice(2);
        }
        if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
            throw new Error('Malformed concise eng/scientific notation');
        }
        result.minimumIntegerDigits = stem.length;
    }
    return result;
}
function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
        return signOpts;
    }
    return result;
}
/**
 * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
 */
function parseNumberSkeleton(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        switch (token.stem) {
            case 'percent':
            case '%':
                result.style = 'percent';
                continue;
            case '%x100':
                result.style = 'percent';
                result.scale = 100;
                continue;
            case 'currency':
                result.style = 'currency';
                result.currency = token.options[0];
                continue;
            case 'group-off':
            case ',_':
                result.useGrouping = false;
                continue;
            case 'precision-integer':
            case '.':
                result.maximumFractionDigits = 0;
                continue;
            case 'measure-unit':
            case 'unit':
                result.style = 'unit';
                result.unit = icuUnitToEcma(token.options[0]);
                continue;
            case 'compact-short':
            case 'K':
                result.notation = 'compact';
                result.compactDisplay = 'short';
                continue;
            case 'compact-long':
            case 'KK':
                result.notation = 'compact';
                result.compactDisplay = 'long';
                continue;
            case 'scientific':
                result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, result), { notation: 'scientific' }), token.options.reduce(function (all, opt) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'engineering':
                result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, result), { notation: 'engineering' }), token.options.reduce(function (all, opt) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, all), parseNotationOptions(opt))); }, {}));
                continue;
            case 'notation-simple':
                result.notation = 'standard';
                continue;
            // https://github.com/unicode-org/icu/blob/master/icu4c/source/i18n/unicode/unumberformatter.h
            case 'unit-width-narrow':
                result.currencyDisplay = 'narrowSymbol';
                result.unitDisplay = 'narrow';
                continue;
            case 'unit-width-short':
                result.currencyDisplay = 'code';
                result.unitDisplay = 'short';
                continue;
            case 'unit-width-full-name':
                result.currencyDisplay = 'name';
                result.unitDisplay = 'long';
                continue;
            case 'unit-width-iso-code':
                result.currencyDisplay = 'symbol';
                continue;
            case 'scale':
                result.scale = parseFloat(token.options[0]);
                continue;
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
            case 'integer-width':
                if (token.options.length > 1) {
                    throw new RangeError('integer-width stems only accept a single optional option');
                }
                token.options[0].replace(INTEGER_WIDTH_REGEX, function (_, g1, g2, g3, g4, g5) {
                    if (g1) {
                        result.minimumIntegerDigits = g2.length;
                    }
                    else if (g3 && g4) {
                        throw new Error('We currently do not support maximum integer digits');
                    }
                    else if (g5) {
                        throw new Error('We currently do not support exact integer digits');
                    }
                    return '';
                });
                continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#integer-width
        if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
            result.minimumIntegerDigits = token.stem.length;
            continue;
        }
        if (FRACTION_PRECISION_REGEX.test(token.stem)) {
            // Precision
            // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#fraction-precision
            // precision-integer case
            if (token.options.length > 1) {
                throw new RangeError('Fraction-precision stems only accept a single optional option');
            }
            token.stem.replace(FRACTION_PRECISION_REGEX, function (_, g1, g2, g3, g4, g5) {
                // .000* case (before ICU67 it was .000+)
                if (g2 === '*') {
                    result.minimumFractionDigits = g1.length;
                }
                // .### case
                else if (g3 && g3[0] === '#') {
                    result.maximumFractionDigits = g3.length;
                }
                // .00## case
                else if (g4 && g5) {
                    result.minimumFractionDigits = g4.length;
                    result.maximumFractionDigits = g4.length + g5.length;
                }
                else {
                    result.minimumFractionDigits = g1.length;
                    result.maximumFractionDigits = g1.length;
                }
                return '';
            });
            if (token.options.length) {
                result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, result), parseSignificantPrecision(token.options[0]));
            }
            continue;
        }
        // https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#significant-digits-precision
        if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
            result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, result), parseSignificantPrecision(token.stem));
            continue;
        }
        var signOpts = parseSign(token.stem);
        if (signOpts) {
            result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, result), signOpts);
        }
        var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
        if (conciseScientificAndEngineeringOpts) {
            result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, result), conciseScientificAndEngineeringOpts);
        }
    }
    return result;
}


/***/ }),

/***/ "./node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WHITE_SPACE_REGEX": function() { return /* binding */ WHITE_SPACE_REGEX; }
/* harmony export */ });
// @generated from regex-gen.ts
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;


/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defineMessages": function() { return /* binding */ defineMessages; },
/* harmony export */   "defineMessage": function() { return /* binding */ defineMessage; },
/* harmony export */   "createIntlCache": function() { return /* reexport safe */ _src_utils__WEBPACK_IMPORTED_MODULE_1__.createIntlCache; },
/* harmony export */   "filterProps": function() { return /* reexport safe */ _src_utils__WEBPACK_IMPORTED_MODULE_1__.filterProps; },
/* harmony export */   "DEFAULT_INTL_CONFIG": function() { return /* reexport safe */ _src_utils__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_INTL_CONFIG; },
/* harmony export */   "createFormatters": function() { return /* reexport safe */ _src_utils__WEBPACK_IMPORTED_MODULE_1__.createFormatters; },
/* harmony export */   "getNamedFormat": function() { return /* reexport safe */ _src_utils__WEBPACK_IMPORTED_MODULE_1__.getNamedFormat; },
/* harmony export */   "formatMessage": function() { return /* reexport safe */ _src_message__WEBPACK_IMPORTED_MODULE_3__.formatMessage; },
/* harmony export */   "formatDate": function() { return /* reexport safe */ _src_dateTime__WEBPACK_IMPORTED_MODULE_4__.formatDate; },
/* harmony export */   "formatDateToParts": function() { return /* reexport safe */ _src_dateTime__WEBPACK_IMPORTED_MODULE_4__.formatDateToParts; },
/* harmony export */   "formatTime": function() { return /* reexport safe */ _src_dateTime__WEBPACK_IMPORTED_MODULE_4__.formatTime; },
/* harmony export */   "formatTimeToParts": function() { return /* reexport safe */ _src_dateTime__WEBPACK_IMPORTED_MODULE_4__.formatTimeToParts; },
/* harmony export */   "formatDisplayName": function() { return /* reexport safe */ _src_displayName__WEBPACK_IMPORTED_MODULE_5__.formatDisplayName; },
/* harmony export */   "formatList": function() { return /* reexport safe */ _src_list__WEBPACK_IMPORTED_MODULE_6__.formatList; },
/* harmony export */   "formatPlural": function() { return /* reexport safe */ _src_plural__WEBPACK_IMPORTED_MODULE_7__.formatPlural; },
/* harmony export */   "formatRelativeTime": function() { return /* reexport safe */ _src_relativeTime__WEBPACK_IMPORTED_MODULE_8__.formatRelativeTime; },
/* harmony export */   "formatNumber": function() { return /* reexport safe */ _src_number__WEBPACK_IMPORTED_MODULE_9__.formatNumber; },
/* harmony export */   "formatNumberToParts": function() { return /* reexport safe */ _src_number__WEBPACK_IMPORTED_MODULE_9__.formatNumberToParts; },
/* harmony export */   "createIntl": function() { return /* reexport safe */ _src_create_intl__WEBPACK_IMPORTED_MODULE_10__.createIntl; }
/* harmony export */ });
/* harmony import */ var _src_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/types */ "./node_modules/@formatjs/intl/lib/src/types.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_types__WEBPACK_IMPORTED_MODULE_0__) if(["default","defineMessages","defineMessage","createIntlCache","filterProps","DEFAULT_INTL_CONFIG","createFormatters","getNamedFormat","formatMessage","formatDate","formatDateToParts","formatTime","formatTimeToParts","formatDisplayName","formatList","formatPlural","formatRelativeTime","formatNumber","formatNumberToParts","createIntl"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_types__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var _src_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/error */ "./node_modules/@formatjs/intl/lib/src/error.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_error__WEBPACK_IMPORTED_MODULE_2__) if(["default","defineMessages","defineMessage","createIntlCache","filterProps","DEFAULT_INTL_CONFIG","createFormatters","getNamedFormat","formatMessage","formatDate","formatDateToParts","formatTime","formatTimeToParts","formatDisplayName","formatList","formatPlural","formatRelativeTime","formatNumber","formatNumberToParts","createIntl"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_error__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/message */ "./node_modules/@formatjs/intl/lib/src/message.js");
/* harmony import */ var _src_dateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/dateTime */ "./node_modules/@formatjs/intl/lib/src/dateTime.js");
/* harmony import */ var _src_displayName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/displayName */ "./node_modules/@formatjs/intl/lib/src/displayName.js");
/* harmony import */ var _src_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/list */ "./node_modules/@formatjs/intl/lib/src/list.js");
/* harmony import */ var _src_plural__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/plural */ "./node_modules/@formatjs/intl/lib/src/plural.js");
/* harmony import */ var _src_relativeTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/relativeTime */ "./node_modules/@formatjs/intl/lib/src/relativeTime.js");
/* harmony import */ var _src_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/number */ "./node_modules/@formatjs/intl/lib/src/number.js");
/* harmony import */ var _src_create_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/create-intl */ "./node_modules/@formatjs/intl/lib/src/create-intl.js");

function defineMessages(msgs) {
    return msgs;
}
function defineMessage(msg) {
    return msg;
}












/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/create-intl.js":
/*!************************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/create-intl.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIntl": function() { return /* binding */ createIntl; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number */ "./node_modules/@formatjs/intl/lib/src/number.js");
/* harmony import */ var _relativeTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relativeTime */ "./node_modules/@formatjs/intl/lib/src/relativeTime.js");
/* harmony import */ var _dateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dateTime */ "./node_modules/@formatjs/intl/lib/src/dateTime.js");
/* harmony import */ var _plural__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plural */ "./node_modules/@formatjs/intl/lib/src/plural.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message */ "./node_modules/@formatjs/intl/lib/src/message.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list */ "./node_modules/@formatjs/intl/lib/src/list.js");
/* harmony import */ var _displayName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./displayName */ "./node_modules/@formatjs/intl/lib/src/displayName.js");










function messagesContainString(messages) {
    var firstMessage = messages ? messages[Object.keys(messages)[0]] : undefined;
    return typeof firstMessage === 'string';
}
function verifyConfigMessages(config) {
    if (config.defaultRichTextElements &&
        messagesContainString(config.messages || {})) {
        console.warn("[@formatjs/intl] \"defaultRichTextElements\" was specified but \"message\" was not pre-compiled. \nPlease consider using \"@formatjs/cli\" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution");
    }
}
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
function createIntl(config, cache) {
    var formatters = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createFormatters)(cache);
    var resolvedConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _utils__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_INTL_CONFIG), config);
    var locale = resolvedConfig.locale, defaultLocale = resolvedConfig.defaultLocale, onError = resolvedConfig.onError;
    if (!locale) {
        if (onError) {
            onError(new _error__WEBPACK_IMPORTED_MODULE_2__.InvalidConfigError("\"locale\" was not configured, using \"" + defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details"));
        }
        // Since there's no registered locale data for `locale`, this will
        // fallback to the `defaultLocale` to make sure things can render.
        // The `messages` are overridden to the `defaultProps` empty object
        // to maintain referential equality across re-renders. It's assumed
        // each <FormattedMessage> contains a `defaultMessage` prop.
        resolvedConfig.locale = resolvedConfig.defaultLocale || 'en';
    }
    else if (!Intl.NumberFormat.supportedLocalesOf(locale).length && onError) {
        onError(new _error__WEBPACK_IMPORTED_MODULE_2__.MissingDataError("Missing locale data for locale: \"" + locale + "\" in Intl.NumberFormat. Using default locale: \"" + defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details"));
    }
    else if (!Intl.DateTimeFormat.supportedLocalesOf(locale).length &&
        onError) {
        onError(new _error__WEBPACK_IMPORTED_MODULE_2__.MissingDataError("Missing locale data for locale: \"" + locale + "\" in Intl.DateTimeFormat. Using default locale: \"" + defaultLocale + "\" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details"));
    }
    verifyConfigMessages(resolvedConfig);
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, resolvedConfig), { formatters: formatters, formatNumber: _number__WEBPACK_IMPORTED_MODULE_3__.formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat), formatNumberToParts: _number__WEBPACK_IMPORTED_MODULE_3__.formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat), formatRelativeTime: _relativeTime__WEBPACK_IMPORTED_MODULE_4__.formatRelativeTime.bind(null, resolvedConfig, formatters.getRelativeTimeFormat), formatDate: _dateTime__WEBPACK_IMPORTED_MODULE_5__.formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateToParts: _dateTime__WEBPACK_IMPORTED_MODULE_5__.formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTime: _dateTime__WEBPACK_IMPORTED_MODULE_5__.formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateTimeRange: _dateTime__WEBPACK_IMPORTED_MODULE_5__.formatDateTimeRange.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTimeToParts: _dateTime__WEBPACK_IMPORTED_MODULE_5__.formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatPlural: _plural__WEBPACK_IMPORTED_MODULE_6__.formatPlural.bind(null, resolvedConfig, formatters.getPluralRules), formatMessage: _message__WEBPACK_IMPORTED_MODULE_7__.formatMessage.bind(null, resolvedConfig, formatters), formatList: _list__WEBPACK_IMPORTED_MODULE_8__.formatList.bind(null, resolvedConfig, formatters.getListFormat), formatListToParts: _list__WEBPACK_IMPORTED_MODULE_8__.formatListToParts.bind(null, resolvedConfig, formatters.getListFormat), formatDisplayName: _displayName__WEBPACK_IMPORTED_MODULE_9__.formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames) });
}


/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/dateTime.js":
/*!*********************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/dateTime.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormatter": function() { return /* binding */ getFormatter; },
/* harmony export */   "formatDate": function() { return /* binding */ formatDate; },
/* harmony export */   "formatTime": function() { return /* binding */ formatTime; },
/* harmony export */   "formatDateTimeRange": function() { return /* binding */ formatDateTimeRange; },
/* harmony export */   "formatDateToParts": function() { return /* binding */ formatDateToParts; },
/* harmony export */   "formatTimeToParts": function() { return /* binding */ formatTimeToParts; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");



var DATE_TIME_FORMAT_OPTIONS = [
    'localeMatcher',
    'formatMatcher',
    'timeZone',
    'hour12',
    'weekday',
    'era',
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'timeZoneName',
    'hourCycle',
    'dateStyle',
    'timeStyle',
    'calendar',
    // 'dayPeriod',
    'numberingSystem',
];
function getFormatter(_a, type, getDateTimeFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError, timeZone = _a.timeZone;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, (timeZone && { timeZone: timeZone })), (format && (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getNamedFormat)(formats, type, format, onError)));
    var filteredOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.filterProps)(options, DATE_TIME_FORMAT_OPTIONS, 
    // @ts-expect-error es2020 has a lot stuff from es2021 bleed in
    defaults);
    if (type === 'time' &&
        !filteredOptions.hour &&
        !filteredOptions.minute &&
        !filteredOptions.second &&
        !filteredOptions.timeStyle &&
        !filteredOptions.dateStyle) {
        // Add default formatting options if hour, minute, or second isn't defined.
        filteredOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, filteredOptions), { hour: 'numeric', minute: 'numeric' });
    }
    return getDateTimeFormat(locale, filteredOptions);
}
function formatDate(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return getFormatter(config, 'date', getDateTimeFormat, options).format(date);
    }
    catch (e) {
        config.onError(new _error__WEBPACK_IMPORTED_MODULE_2__.IntlError(_error__WEBPACK_IMPORTED_MODULE_2__.IntlErrorCode.FORMAT_ERROR, 'Error formatting date.', e));
    }
    return String(date);
}
function formatTime(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return getFormatter(config, 'time', getDateTimeFormat, options).format(date);
    }
    catch (e) {
        config.onError(new _error__WEBPACK_IMPORTED_MODULE_2__.IntlError(_error__WEBPACK_IMPORTED_MODULE_2__.IntlErrorCode.FORMAT_ERROR, 'Error formatting time.', e));
    }
    return String(date);
}
function formatDateTimeRange(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var from = _a[0], to = _a[1], _b = _a[2], options = _b === void 0 ? {} : _b;
    var timeZone = config.timeZone, locale = config.locale, onError = config.onError;
    var filteredOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.filterProps)(options, DATE_TIME_FORMAT_OPTIONS, timeZone ? { timeZone: timeZone } : {});
    try {
        return getDateTimeFormat(locale, filteredOptions).formatRange(from, to);
    }
    catch (e) {
        onError(new _error__WEBPACK_IMPORTED_MODULE_2__.IntlError(_error__WEBPACK_IMPORTED_MODULE_2__.IntlErrorCode.FORMAT_ERROR, 'Error formatting date time range.', e));
    }
    return String(from);
}
function formatDateToParts(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return getFormatter(config, 'date', getDateTimeFormat, options).formatToParts(date);
    }
    catch (e) {
        config.onError(new _error__WEBPACK_IMPORTED_MODULE_2__.IntlError(_error__WEBPACK_IMPORTED_MODULE_2__.IntlErrorCode.FORMAT_ERROR, 'Error formatting date.', e));
    }
    return [];
}
function formatTimeToParts(config, getDateTimeFormat) {
    var _a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _a[_i - 2] = arguments[_i];
    }
    var value = _a[0], _b = _a[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === 'string' ? new Date(value || 0) : value;
    try {
        return getFormatter(config, 'time', getDateTimeFormat, options).formatToParts(date);
    }
    catch (e) {
        config.onError(new _error__WEBPACK_IMPORTED_MODULE_2__.IntlError(_error__WEBPACK_IMPORTED_MODULE_2__.IntlErrorCode.FORMAT_ERROR, 'Error formatting time.', e));
    }
    return [];
}


/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/displayName.js":
/*!************************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/displayName.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDisplayName": function() { return /* binding */ formatDisplayName; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");



var DISPLAY_NAMES_OPTONS = [
    'localeMatcher',
    'style',
    'type',
    'fallback',
];
function formatDisplayName(_a, getDisplayNames, value, options) {
    var locale = _a.locale, onError = _a.onError;
    var DisplayNames = Intl.DisplayNames;
    if (!DisplayNames) {
        onError(new intl_messageformat__WEBPACK_IMPORTED_MODULE_0__.FormatError("Intl.DisplayNames is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-displaynames\"\n", intl_messageformat__WEBPACK_IMPORTED_MODULE_0__.ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.filterProps)(options, DISPLAY_NAMES_OPTONS);
    try {
        return getDisplayNames(locale, filteredOptions).of(value);
    }
    catch (e) {
        onError(new _error__WEBPACK_IMPORTED_MODULE_2__.IntlError(_error__WEBPACK_IMPORTED_MODULE_2__.IntlErrorCode.FORMAT_ERROR, 'Error formatting display name.', e));
    }
}


/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/error.js":
/*!******************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/error.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntlErrorCode": function() { return /* binding */ IntlErrorCode; },
/* harmony export */   "IntlError": function() { return /* binding */ IntlError; },
/* harmony export */   "UnsupportedFormatterError": function() { return /* binding */ UnsupportedFormatterError; },
/* harmony export */   "InvalidConfigError": function() { return /* binding */ InvalidConfigError; },
/* harmony export */   "MissingDataError": function() { return /* binding */ MissingDataError; },
/* harmony export */   "MessageFormatError": function() { return /* binding */ MessageFormatError; },
/* harmony export */   "MissingTranslationError": function() { return /* binding */ MissingTranslationError; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var IntlErrorCode;
(function (IntlErrorCode) {
    IntlErrorCode["FORMAT_ERROR"] = "FORMAT_ERROR";
    IntlErrorCode["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
    IntlErrorCode["INVALID_CONFIG"] = "INVALID_CONFIG";
    IntlErrorCode["MISSING_DATA"] = "MISSING_DATA";
    IntlErrorCode["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
})(IntlErrorCode || (IntlErrorCode = {}));
var IntlError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(IntlError, _super);
    function IntlError(code, message, exception) {
        var _this = _super.call(this, "[@formatjs/intl Error " + code + "] " + message + " \n" + (exception ? "\n" + exception.message + "\n" + exception.stack : '')) || this;
        _this.code = code;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, IntlError);
        }
        return _this;
    }
    return IntlError;
}(Error));

var UnsupportedFormatterError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(UnsupportedFormatterError, _super);
    function UnsupportedFormatterError(message, exception) {
        return _super.call(this, IntlErrorCode.UNSUPPORTED_FORMATTER, message, exception) || this;
    }
    return UnsupportedFormatterError;
}(IntlError));

var InvalidConfigError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(InvalidConfigError, _super);
    function InvalidConfigError(message, exception) {
        return _super.call(this, IntlErrorCode.INVALID_CONFIG, message, exception) || this;
    }
    return InvalidConfigError;
}(IntlError));

var MissingDataError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MissingDataError, _super);
    function MissingDataError(message, exception) {
        return _super.call(this, IntlErrorCode.MISSING_DATA, message, exception) || this;
    }
    return MissingDataError;
}(IntlError));

var MessageFormatError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MessageFormatError, _super);
    function MessageFormatError(message, locale, descriptor, exception) {
        var _this = _super.call(this, IntlErrorCode.FORMAT_ERROR, message + " \nLocale: " + locale + "\nMessageID: " + (descriptor === null || descriptor === void 0 ? void 0 : descriptor.id) + "\nDefault Message: " + (descriptor === null || descriptor === void 0 ? void 0 : descriptor.defaultMessage) + "\nDescription: " + (descriptor === null || descriptor === void 0 ? void 0 : descriptor.description) + " \n", exception) || this;
        _this.descriptor = descriptor;
        return _this;
    }
    return MessageFormatError;
}(IntlError));

var MissingTranslationError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MissingTranslationError, _super);
    function MissingTranslationError(descriptor, locale) {
        var _this = _super.call(this, IntlErrorCode.MISSING_TRANSLATION, "Missing message: \"" + descriptor.id + "\" for locale \"" + locale + "\", using " + (descriptor.defaultMessage ? 'default message' : 'id') + " as fallback.") || this;
        _this.descriptor = descriptor;
        return _this;
    }
    return MissingTranslationError;
}(IntlError));



/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/list.js":
/*!*****************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/list.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatList": function() { return /* binding */ formatList; },
/* harmony export */   "formatListToParts": function() { return /* binding */ formatListToParts; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");




var LIST_FORMAT_OPTIONS = [
    'localeMatcher',
    'type',
    'style',
];
var now = Date.now();
function generateToken(i) {
    return now + "_" + i + "_" + now;
}
function formatList(opts, getListFormat, values, options) {
    if (options === void 0) { options = {}; }
    var results = formatListToParts(opts, getListFormat, values, options).reduce(function (all, el) {
        var val = el.value;
        if (typeof val !== 'string') {
            all.push(val);
        }
        else if (typeof all[all.length - 1] === 'string') {
            all[all.length - 1] += val;
        }
        else {
            all.push(val);
        }
        return all;
    }, []);
    return results.length === 1 ? results[0] : results;
}
function formatListToParts(_a, getListFormat, values, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var ListFormat = Intl.ListFormat;
    if (!ListFormat) {
        onError(new intl_messageformat__WEBPACK_IMPORTED_MODULE_0__.FormatError("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n", intl_messageformat__WEBPACK_IMPORTED_MODULE_0__.ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.filterProps)(options, LIST_FORMAT_OPTIONS);
    try {
        var richValues_1 = {};
        var serializedValues = values.map(function (v, i) {
            if (typeof v === 'object') {
                var id = generateToken(i);
                richValues_1[id] = v;
                return id;
            }
            return String(v);
        });
        return getListFormat(locale, filteredOptions)
            .formatToParts(serializedValues)
            .map(function (part) {
            return part.type === 'literal'
                ? part
                : (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, part), { value: richValues_1[part.value] || part.value });
        });
    }
    catch (e) {
        onError(new _error__WEBPACK_IMPORTED_MODULE_3__.IntlError(_error__WEBPACK_IMPORTED_MODULE_3__.IntlErrorCode.FORMAT_ERROR, 'Error formatting list.', e));
    }
    // @ts-ignore
    return values;
}


/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/message.js":
/*!********************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/message.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatMessage": function() { return /* binding */ formatMessage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @formatjs/ecma402-abstract */ "./node_modules/@formatjs/ecma402-abstract/lib/index.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formatjs/icu-messageformat-parser */ "./node_modules/@formatjs/icu-messageformat-parser/lib/index.js");





function setTimeZoneInOptions(opts, timeZone) {
    return Object.keys(opts).reduce(function (all, k) {
        all[k] = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ timeZone: timeZone }, opts[k]);
        return all;
    }, {});
}
function deepMergeOptions(opts1, opts2) {
    var keys = Object.keys((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, opts1), opts2));
    return keys.reduce(function (all, k) {
        all[k] = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (opts1[k] || {})), (opts2[k] || {}));
        return all;
    }, {});
}
function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
    if (!timeZone) {
        return f1;
    }
    var mfFormats = intl_messageformat__WEBPACK_IMPORTED_MODULE_2__.IntlMessageFormat.formats;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, mfFormats), f1), { date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)), time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone)) });
}
function formatMessage(_a, state, messageDescriptor, values, opts) {
    var locale = _a.locale, formats = _a.formats, messages = _a.messages, defaultLocale = _a.defaultLocale, defaultFormats = _a.defaultFormats, onError = _a.onError, timeZone = _a.timeZone, defaultRichTextElements = _a.defaultRichTextElements;
    if (messageDescriptor === void 0) { messageDescriptor = { id: '' }; }
    var msgId = messageDescriptor.id, defaultMessage = messageDescriptor.defaultMessage;
    // `id` is a required field of a Message Descriptor.
    (0,_formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_3__.invariant)(!!msgId, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
    var id = String(msgId);
    var message = 
    // In case messages is Object.create(null)
    // e.g import('foo.json') from webpack)
    // See https://github.com/formatjs/formatjs/issues/1914
    messages &&
        Object.prototype.hasOwnProperty.call(messages, id) &&
        messages[id];
    // IMPORTANT: Hot path if `message` is AST with a single literal node
    if (Array.isArray(message) &&
        message.length === 1 &&
        message[0].type === _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.TYPE.literal) {
        return message[0].value;
    }
    // IMPORTANT: Hot path straight lookup for performance
    if (!values &&
        message &&
        typeof message === 'string' &&
        !defaultRichTextElements) {
        return message.replace(/'\{(.*?)\}'/gi, "{$1}");
    }
    values = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, defaultRichTextElements), (values || {}));
    formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
    defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
    if (!message) {
        if (!defaultMessage ||
            (locale && locale.toLowerCase() !== defaultLocale.toLowerCase())) {
            // This prevents warnings from littering the console in development
            // when no `messages` are passed into the <IntlProvider> for the
            // default locale.
            onError(new _error__WEBPACK_IMPORTED_MODULE_4__.MissingTranslationError(messageDescriptor, locale));
        }
        if (defaultMessage) {
            try {
                var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
                return formatter.format(values);
            }
            catch (e) {
                onError(new _error__WEBPACK_IMPORTED_MODULE_4__.MessageFormatError("Error formatting default message for: \"" + id + "\", rendering default message verbatim", locale, messageDescriptor, e));
                return typeof defaultMessage === 'string' ? defaultMessage : id;
            }
        }
        return id;
    }
    // We have the translated message
    try {
        var formatter = state.getMessageFormat(message, locale, formats, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ formatters: state }, (opts || {})));
        return formatter.format(values);
    }
    catch (e) {
        onError(new _error__WEBPACK_IMPORTED_MODULE_4__.MessageFormatError("Error formatting message: \"" + id + "\", using " + (defaultMessage ? 'default message' : 'id') + " as fallback.", locale, messageDescriptor, e));
    }
    if (defaultMessage) {
        try {
            var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
            return formatter.format(values);
        }
        catch (e) {
            onError(new _error__WEBPACK_IMPORTED_MODULE_4__.MessageFormatError("Error formatting the default message for: \"" + id + "\", rendering message verbatim", locale, messageDescriptor, e));
        }
    }
    if (typeof message === 'string') {
        return message;
    }
    if (typeof defaultMessage === 'string') {
        return defaultMessage;
    }
    return id;
}


/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/number.js":
/*!*******************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/number.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormatter": function() { return /* binding */ getFormatter; },
/* harmony export */   "formatNumber": function() { return /* binding */ formatNumber; },
/* harmony export */   "formatNumberToParts": function() { return /* binding */ formatNumberToParts; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");


var NUMBER_FORMAT_OPTIONS = [
    'localeMatcher',
    'style',
    'currency',
    'currencyDisplay',
    'unit',
    'unitDisplay',
    'useGrouping',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'minimumSignificantDigits',
    'maximumSignificantDigits',
    // ES2020 NumberFormat
    'compactDisplay',
    'currencyDisplay',
    'currencySign',
    'notation',
    'signDisplay',
    'unit',
    'unitDisplay',
    'numberingSystem',
];
function getFormatter(_a, getNumberFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = ((format &&
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNamedFormat)(formats, 'number', format, onError)) ||
        {});
    var filteredOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.filterProps)(options, NUMBER_FORMAT_OPTIONS, defaults);
    return getNumberFormat(locale, filteredOptions);
}
function formatNumber(config, getNumberFormat, value, options) {
    if (options === void 0) { options = {}; }
    try {
        return getFormatter(config, getNumberFormat, options).format(value);
    }
    catch (e) {
        config.onError(new _error__WEBPACK_IMPORTED_MODULE_1__.IntlError(_error__WEBPACK_IMPORTED_MODULE_1__.IntlErrorCode.FORMAT_ERROR, 'Error formatting number.', e));
    }
    return String(value);
}
function formatNumberToParts(config, getNumberFormat, value, options) {
    if (options === void 0) { options = {}; }
    try {
        return getFormatter(config, getNumberFormat, options).formatToParts(value);
    }
    catch (e) {
        config.onError(new _error__WEBPACK_IMPORTED_MODULE_1__.IntlError(_error__WEBPACK_IMPORTED_MODULE_1__.IntlErrorCode.FORMAT_ERROR, 'Error formatting number.', e));
    }
    return [];
}


/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/plural.js":
/*!*******************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/plural.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatPlural": function() { return /* binding */ formatPlural; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");



var PLURAL_FORMAT_OPTIONS = [
    'localeMatcher',
    'type',
];
function formatPlural(_a, getPluralRules, value, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    if (!Intl.PluralRules) {
        onError(new intl_messageformat__WEBPACK_IMPORTED_MODULE_0__.FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", intl_messageformat__WEBPACK_IMPORTED_MODULE_0__.ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.filterProps)(options, PLURAL_FORMAT_OPTIONS);
    try {
        return getPluralRules(locale, filteredOptions).select(value);
    }
    catch (e) {
        onError(new _error__WEBPACK_IMPORTED_MODULE_2__.MessageFormatError('Error formatting plural.', e));
    }
    return 'other';
}


/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/relativeTime.js":
/*!*************************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/relativeTime.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatRelativeTime": function() { return /* binding */ formatRelativeTime; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");



var RELATIVE_TIME_FORMAT_OPTIONS = ['numeric', 'style'];
function getFormatter(_a, getRelativeTimeFormat, options) {
    var locale = _a.locale, formats = _a.formats, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var format = options.format;
    var defaults = (!!format && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getNamedFormat)(formats, 'relative', format, onError)) || {};
    var filteredOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.filterProps)(options, RELATIVE_TIME_FORMAT_OPTIONS, defaults);
    return getRelativeTimeFormat(locale, filteredOptions);
}
function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options) {
    if (options === void 0) { options = {}; }
    if (!unit) {
        unit = 'second';
    }
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    if (!RelativeTimeFormat) {
        config.onError(new intl_messageformat__WEBPACK_IMPORTED_MODULE_1__.FormatError("Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-relativetimeformat\"\n", intl_messageformat__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.MISSING_INTL_API));
    }
    try {
        return getFormatter(config, getRelativeTimeFormat, options).format(value, unit);
    }
    catch (e) {
        config.onError(new _error__WEBPACK_IMPORTED_MODULE_2__.MessageFormatError('Error formatting relative time.', e));
    }
    return String(value);
}


/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/types.js":
/*!******************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/types.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@formatjs/intl/lib/src/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/@formatjs/intl/lib/src/utils.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterProps": function() { return /* binding */ filterProps; },
/* harmony export */   "DEFAULT_INTL_CONFIG": function() { return /* binding */ DEFAULT_INTL_CONFIG; },
/* harmony export */   "createIntlCache": function() { return /* binding */ createIntlCache; },
/* harmony export */   "createFormatters": function() { return /* binding */ createFormatters; },
/* harmony export */   "getNamedFormat": function() { return /* binding */ getNamedFormat; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/* harmony import */ var _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formatjs/fast-memoize */ "./node_modules/@formatjs/fast-memoize/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./node_modules/@formatjs/intl/lib/src/error.js");




function filterProps(props, whitelist, defaults) {
    if (defaults === void 0) { defaults = {}; }
    return whitelist.reduce(function (filtered, name) {
        if (name in props) {
            filtered[name] = props[name];
        }
        else if (name in defaults) {
            filtered[name] = defaults[name];
        }
        return filtered;
    }, {});
}
var defaultErrorHandler = function (error) {
    if (true) {
        console.error(error);
    }
};
var DEFAULT_INTL_CONFIG = {
    formats: {},
    messages: {},
    timeZone: undefined,
    defaultLocale: 'en',
    defaultFormats: {},
    onError: defaultErrorHandler,
};
function createIntlCache() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {},
    };
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                has: function (key) {
                    return key in store;
                },
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
/**
 * Create intl formatters and populate cache
 * @param cache explicit cache to prevent leaking memory
 */
function createFormatters(cache) {
    if (cache === void 0) { cache = createIntlCache(); }
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    var ListFormat = Intl.ListFormat;
    var DisplayNames = Intl.DisplayNames;
    var getDateTimeFormat = (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ((_a = Intl.DateTimeFormat).bind.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([void 0], args)))();
    }, {
        cache: createFastMemoizeCache(cache.dateTime),
        strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.strategies.variadic,
    });
    var getNumberFormat = (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ((_a = Intl.NumberFormat).bind.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([void 0], args)))();
    }, {
        cache: createFastMemoizeCache(cache.number),
        strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.strategies.variadic,
    });
    var getPluralRules = (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new ((_a = Intl.PluralRules).bind.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([void 0], args)))();
    }, {
        cache: createFastMemoizeCache(cache.pluralRules),
        strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.strategies.variadic,
    });
    return {
        getDateTimeFormat: getDateTimeFormat,
        getNumberFormat: getNumberFormat,
        getMessageFormat: (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function (message, locales, overrideFormats, opts) {
            return new intl_messageformat__WEBPACK_IMPORTED_MODULE_2__.IntlMessageFormat(message, locales, overrideFormats, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ formatters: {
                    getNumberFormat: getNumberFormat,
                    getDateTimeFormat: getDateTimeFormat,
                    getPluralRules: getPluralRules,
                } }, (opts || {})));
        }, {
            cache: createFastMemoizeCache(cache.message),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.strategies.variadic,
        }),
        getRelativeTimeFormat: (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (RelativeTimeFormat.bind.apply(RelativeTimeFormat, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.relativeTime),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.strategies.variadic,
        }),
        getPluralRules: getPluralRules,
        getListFormat: (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (ListFormat.bind.apply(ListFormat, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.list),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.strategies.variadic,
        }),
        getDisplayNames: (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (DisplayNames.bind.apply(DisplayNames, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.displayNames),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_0__.strategies.variadic,
        }),
    };
}
function getNamedFormat(formats, type, name, onError) {
    var formatType = formats && formats[type];
    var format;
    if (formatType) {
        format = formatType[name];
    }
    if (format) {
        return format;
    }
    onError(new _error__WEBPACK_IMPORTED_MODULE_3__.UnsupportedFormatterError("No " + type + " format named: " + name));
}


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_dani_PROGI_reactintl_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\dani\\PROGI\\reactintl-nextjs\\pages\\_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_dani_PROGI_reactintl_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // import all locales through barrel file
// import * as locales  from "../content/locale";



function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var locale = router.locale,
      defaultLocale = router.defaultLocale,
      pathname = router.pathname;
  var messages = {
    en: {
      BASIC: "Basic sentence",
      GREETING: "Hello {name}  <strong> strong</strong>",
      PLURAL: "This will be plural :{amount, plural, =0 {no languages} one {# one language}  other {# languages}}",
      FUNC: "függvény <b> tag-el",
      SWITCH: "Switc: {gender, select,male {He} female {She} other {They} } will respond shortly."
    },
    hu: {
      BASIC: "Alap mondat",
      GREETING: "Szia {name} <strong> kiemelt</strong>",
      PLURAL: "Ez plural lesz {amount, plural, =0 {no languages} one {# egy nyelv} other {# nyelvek}}",
      FUNC: "Function with <b> tag",
      SWITCH: "Switc: {gender, select,male {Ő} female {Ő} other {Ő}} hamarosan válaszol."
    }
  };
  var local = locale ? locale : "hu";
  var mess = messages[local.toString()];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_4__.IntlProvider, {
    locale: local,
    defaultLocale: "en",
    messages: mess,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(MyApp, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/intl-messageformat/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/core */ "./node_modules/intl-messageformat/lib/src/core.js");
/* harmony import */ var _src_formatters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/formatters */ "./node_modules/intl-messageformat/lib/src/formatters.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_formatters__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_formatters__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_core__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_core__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _src_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/error */ "./node_modules/intl-messageformat/lib/src/error.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_error__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _src_error__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/




/* harmony default export */ __webpack_exports__["default"] = (_src_core__WEBPACK_IMPORTED_MODULE_1__.IntlMessageFormat);


/***/ }),

/***/ "./node_modules/intl-messageformat/lib/src/core.js":
/*!*********************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/src/core.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntlMessageFormat": function() { return /* binding */ IntlMessageFormat; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formatjs/icu-messageformat-parser */ "./node_modules/@formatjs/icu-messageformat-parser/lib/index.js");
/* harmony import */ var _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @formatjs/fast-memoize */ "./node_modules/@formatjs/fast-memoize/lib/index.js");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatters */ "./node_modules/intl-messageformat/lib/src/formatters.js");
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/




// -- MessageFormat --------------------------------------------------------
function mergeConfig(c1, c2) {
    if (!c2) {
        return c1;
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, (c1 || {})), (c2 || {})), Object.keys(c1).reduce(function (all, k) {
        all[k] = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, c1[k]), (c2[k] || {}));
        return all;
    }, {}));
}
function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
        return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function (all, k) {
        all[k] = mergeConfig(defaultConfig[k], configs[k]);
        return all;
    }, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, defaultConfig));
}
function createFastMemoizeCache(store) {
    return {
        create: function () {
            return {
                has: function (key) {
                    return key in store;
                },
                get: function (key) {
                    return store[key];
                },
                set: function (key, value) {
                    store[key] = value;
                },
            };
        },
    };
}
function createDefaultFormatters(cache) {
    if (cache === void 0) { cache = {
        number: {},
        dateTime: {},
        pluralRules: {},
    }; }
    return {
        getNumberFormat: (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__.default)(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.NumberFormat).bind.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.number),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__.strategies.variadic,
        }),
        getDateTimeFormat: (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__.default)(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.DateTimeFormat).bind.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.dateTime),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__.strategies.variadic,
        }),
        getPluralRules: (0,_formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__.default)(function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new ((_a = Intl.PluralRules).bind.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([void 0], args)))();
        }, {
            cache: createFastMemoizeCache(cache.pluralRules),
            strategy: _formatjs_fast_memoize__WEBPACK_IMPORTED_MODULE_1__.strategies.variadic,
        }),
    };
}
var IntlMessageFormat = /** @class */ (function () {
    function IntlMessageFormat(message, locales, overrideFormats, opts) {
        var _this = this;
        if (locales === void 0) { locales = IntlMessageFormat.defaultLocale; }
        this.formatterCache = {
            number: {},
            dateTime: {},
            pluralRules: {},
        };
        this.format = function (values) {
            var parts = _this.formatToParts(values);
            // Hot path for straight simple msg translations
            if (parts.length === 1) {
                return parts[0].value;
            }
            var result = parts.reduce(function (all, part) {
                if (!all.length ||
                    part.type !== _formatters__WEBPACK_IMPORTED_MODULE_3__.PART_TYPE.literal ||
                    typeof all[all.length - 1] !== 'string') {
                    all.push(part.value);
                }
                else {
                    all[all.length - 1] += part.value;
                }
                return all;
            }, []);
            if (result.length <= 1) {
                return result[0] || '';
            }
            return result;
        };
        this.formatToParts = function (values) {
            return (0,_formatters__WEBPACK_IMPORTED_MODULE_3__.formatToParts)(_this.ast, _this.locales, _this.formatters, _this.formats, values, undefined, _this.message);
        };
        this.resolvedOptions = function () { return ({
            locale: Intl.NumberFormat.supportedLocalesOf(_this.locales)[0],
        }); };
        this.getAst = function () { return _this.ast; };
        if (typeof message === 'string') {
            this.message = message;
            if (!IntlMessageFormat.__parse) {
                throw new TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            }
            // Parse string messages into an AST.
            this.ast = IntlMessageFormat.__parse(message, {
                ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
            });
        }
        else {
            this.ast = message;
        }
        if (!Array.isArray(this.ast)) {
            throw new TypeError('A message must be provided as a String or AST.');
        }
        // Creates a new object with the specified `formats` merged with the default
        // formats.
        this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
        // Defined first because it's used to build the format pattern.
        this.locales = locales;
        this.formatters =
            (opts && opts.formatters) || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat, "defaultLocale", {
        get: function () {
            if (!IntlMessageFormat.memoizedDefaultLocale) {
                IntlMessageFormat.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale;
            }
            return IntlMessageFormat.memoizedDefaultLocale;
        },
        enumerable: false,
        configurable: true
    });
    IntlMessageFormat.memoizedDefaultLocale = null;
    IntlMessageFormat.__parse = _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.parse;
    // Default format options used as the prototype of the `formats` provided to the
    // constructor. These are used when constructing the internal Intl.NumberFormat
    // and Intl.DateTimeFormat instances.
    IntlMessageFormat.formats = {
        number: {
            integer: {
                maximumFractionDigits: 0,
            },
            currency: {
                style: 'currency',
            },
            percent: {
                style: 'percent',
            },
        },
        date: {
            short: {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
            },
            medium: {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            },
            long: {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
            full: {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            },
        },
        time: {
            short: {
                hour: 'numeric',
                minute: 'numeric',
            },
            medium: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            },
            long: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
            full: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            },
        },
    };
    return IntlMessageFormat;
}());



/***/ }),

/***/ "./node_modules/intl-messageformat/lib/src/error.js":
/*!**********************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/src/error.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorCode": function() { return /* binding */ ErrorCode; },
/* harmony export */   "FormatError": function() { return /* binding */ FormatError; },
/* harmony export */   "InvalidValueError": function() { return /* binding */ InvalidValueError; },
/* harmony export */   "InvalidValueTypeError": function() { return /* binding */ InvalidValueTypeError; },
/* harmony export */   "MissingValueError": function() { return /* binding */ MissingValueError; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ErrorCode;
(function (ErrorCode) {
    // When we have a placeholder but no value to format
    ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
    // When value supplied is invalid
    ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
    // When we need specific Intl API but it's not available
    ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(FormatError, _super);
    function FormatError(msg, code, originalMessage) {
        var _this = _super.call(this, msg) || this;
        _this.code = code;
        _this.originalMessage = originalMessage;
        return _this;
    }
    FormatError.prototype.toString = function () {
        return "[formatjs Error: " + this.code + "] " + this.message;
    };
    return FormatError;
}(Error));

var InvalidValueError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(InvalidValueError, _super);
    function InvalidValueError(variableId, value, options, originalMessage) {
        return _super.call(this, "Invalid values for \"" + variableId + "\": \"" + value + "\". Options are \"" + Object.keys(options).join('", "') + "\"", ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError;
}(FormatError));

var InvalidValueTypeError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(InvalidValueTypeError, _super);
    function InvalidValueTypeError(value, type, originalMessage) {
        return _super.call(this, "Value for \"" + value + "\" must be of type " + type, ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError;
}(FormatError));

var MissingValueError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MissingValueError, _super);
    function MissingValueError(variableId, originalMessage) {
        return _super.call(this, "The intl string context variable \"" + variableId + "\" was not provided to the string \"" + originalMessage + "\"", ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError;
}(FormatError));



/***/ }),

/***/ "./node_modules/intl-messageformat/lib/src/formatters.js":
/*!***************************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/src/formatters.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PART_TYPE": function() { return /* binding */ PART_TYPE; },
/* harmony export */   "isFormatXMLElementFn": function() { return /* binding */ isFormatXMLElementFn; },
/* harmony export */   "formatToParts": function() { return /* binding */ formatToParts; }
/* harmony export */ });
/* harmony import */ var _formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formatjs/icu-messageformat-parser */ "./node_modules/@formatjs/icu-messageformat-parser/lib/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/intl-messageformat/lib/src/error.js");


var PART_TYPE;
(function (PART_TYPE) {
    PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
    PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
    if (parts.length < 2) {
        return parts;
    }
    return parts.reduce(function (all, part) {
        var lastPart = all[all.length - 1];
        if (!lastPart ||
            lastPart.type !== PART_TYPE.literal ||
            part.type !== PART_TYPE.literal) {
            all.push(part);
        }
        else {
            lastPart.value += part.value;
        }
        return all;
    }, []);
}
function isFormatXMLElementFn(el) {
    return typeof el === 'function';
}
// TODO(skeleton): add skeleton support
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, 
// For debugging
originalMessage) {
    // Hot path for straight simple msg translations
    if (els.length === 1 && (0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isLiteralElement)(els[0])) {
        return [
            {
                type: PART_TYPE.literal,
                value: els[0].value,
            },
        ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
        var el = els_1[_i];
        // Exit early for string parts.
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isLiteralElement)(el)) {
            result.push({
                type: PART_TYPE.literal,
                value: el.value,
            });
            continue;
        }
        // TODO: should this part be literal type?
        // Replace `#` in plural rules with the actual numeric value.
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isPoundElement)(el)) {
            if (typeof currentPluralValue === 'number') {
                result.push({
                    type: PART_TYPE.literal,
                    value: formatters.getNumberFormat(locales).format(currentPluralValue),
                });
            }
            continue;
        }
        var varName = el.value;
        // Enforce that all required values are provided by the caller.
        if (!(values && varName in values)) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__.MissingValueError(varName, originalMessage);
        }
        var value = values[varName];
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isArgumentElement)(el)) {
            if (!value || typeof value === 'string' || typeof value === 'number') {
                value =
                    typeof value === 'string' || typeof value === 'number'
                        ? String(value)
                        : '';
            }
            result.push({
                type: typeof value === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                value: value,
            });
            continue;
        }
        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isDateElement)(el)) {
            var style = typeof el.style === 'string'
                ? formats.date[el.style]
                : (0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isDateTimeSkeleton)(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isTimeElement)(el)) {
            var style = typeof el.style === 'string'
                ? formats.time[el.style]
                : (0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isDateTimeSkeleton)(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getDateTimeFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isNumberElement)(el)) {
            var style = typeof el.style === 'string'
                ? formats.number[el.style]
                : (0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isNumberSkeleton)(el.style)
                    ? el.style.parsedOptions
                    : undefined;
            if (style && style.scale) {
                value =
                    value *
                        (style.scale || 1);
            }
            result.push({
                type: PART_TYPE.literal,
                value: formatters
                    .getNumberFormat(locales, style)
                    .format(value),
            });
            continue;
        }
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isTagElement)(el)) {
            var children = el.children, value_1 = el.value;
            var formatFn = values[value_1];
            if (!isFormatXMLElementFn(formatFn)) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__.InvalidValueTypeError(value_1, 'function', originalMessage);
            }
            var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
            var chunks = formatFn(parts.map(function (p) { return p.value; }));
            if (!Array.isArray(chunks)) {
                chunks = [chunks];
            }
            result.push.apply(result, chunks.map(function (c) {
                return {
                    type: typeof c === 'string' ? PART_TYPE.literal : PART_TYPE.object,
                    value: c,
                };
            }));
        }
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isSelectElement)(el)) {
            var opt = el.options[value] || el.options.other;
            if (!opt) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__.InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
            continue;
        }
        if ((0,_formatjs_icu_messageformat_parser__WEBPACK_IMPORTED_MODULE_0__.isPluralElement)(el)) {
            var opt = el.options["=" + value];
            if (!opt) {
                if (!Intl.PluralRules) {
                    throw new _error__WEBPACK_IMPORTED_MODULE_1__.FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", _error__WEBPACK_IMPORTED_MODULE_1__.ErrorCode.MISSING_INTL_API, originalMessage);
                }
                var rule = formatters
                    .getPluralRules(locales, { type: el.pluralType })
                    .select(value - (el.offset || 0));
                opt = el.options[rule] || el.options.other;
            }
            if (!opt) {
                throw new _error__WEBPACK_IMPORTED_MODULE_1__.InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
            }
            result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
            continue;
        }
    }
    return mergeLiteral(result);
}


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx! ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx");
      }
    ]);
  

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n", "",{"version":3,"sources":["webpack://styles/globals.css"],"names":[],"mappings":"AAAA;;EAEE,UAAU;EACV,SAAS;EACT;wEACsE;AACxE;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,8BAAsB;UAAtB,sBAAsB;AACxB","sourcesContent":["html,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/react-intl/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-intl/lib/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIntlCache": function() { return /* reexport safe */ _formatjs_intl__WEBPACK_IMPORTED_MODULE_0__.createIntlCache; },
/* harmony export */   "UnsupportedFormatterError": function() { return /* reexport safe */ _formatjs_intl__WEBPACK_IMPORTED_MODULE_0__.UnsupportedFormatterError; },
/* harmony export */   "InvalidConfigError": function() { return /* reexport safe */ _formatjs_intl__WEBPACK_IMPORTED_MODULE_0__.InvalidConfigError; },
/* harmony export */   "MissingDataError": function() { return /* reexport safe */ _formatjs_intl__WEBPACK_IMPORTED_MODULE_0__.MissingDataError; },
/* harmony export */   "MessageFormatError": function() { return /* reexport safe */ _formatjs_intl__WEBPACK_IMPORTED_MODULE_0__.MessageFormatError; },
/* harmony export */   "MissingTranslationError": function() { return /* reexport safe */ _formatjs_intl__WEBPACK_IMPORTED_MODULE_0__.MissingTranslationError; },
/* harmony export */   "ReactIntlErrorCode": function() { return /* reexport safe */ _formatjs_intl__WEBPACK_IMPORTED_MODULE_0__.IntlErrorCode; },
/* harmony export */   "ReactIntlError": function() { return /* reexport safe */ _formatjs_intl__WEBPACK_IMPORTED_MODULE_0__.IntlError; },
/* harmony export */   "defineMessages": function() { return /* binding */ defineMessages; },
/* harmony export */   "defineMessage": function() { return /* binding */ defineMessage; },
/* harmony export */   "injectIntl": function() { return /* reexport safe */ _src_components_injectIntl__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "RawIntlProvider": function() { return /* reexport safe */ _src_components_injectIntl__WEBPACK_IMPORTED_MODULE_1__.Provider; },
/* harmony export */   "IntlContext": function() { return /* reexport safe */ _src_components_injectIntl__WEBPACK_IMPORTED_MODULE_1__.Context; },
/* harmony export */   "useIntl": function() { return /* reexport safe */ _src_components_useIntl__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "IntlProvider": function() { return /* reexport safe */ _src_components_provider__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "createIntl": function() { return /* reexport safe */ _src_components_provider__WEBPACK_IMPORTED_MODULE_3__.createIntl; },
/* harmony export */   "FormattedDate": function() { return /* binding */ FormattedDate; },
/* harmony export */   "FormattedTime": function() { return /* binding */ FormattedTime; },
/* harmony export */   "FormattedNumber": function() { return /* binding */ FormattedNumber; },
/* harmony export */   "FormattedList": function() { return /* binding */ FormattedList; },
/* harmony export */   "FormattedDisplayName": function() { return /* binding */ FormattedDisplayName; },
/* harmony export */   "FormattedDateParts": function() { return /* binding */ FormattedDateParts; },
/* harmony export */   "FormattedTimeParts": function() { return /* binding */ FormattedTimeParts; },
/* harmony export */   "FormattedNumberParts": function() { return /* reexport safe */ _src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_4__.FormattedNumberParts; },
/* harmony export */   "FormattedListParts": function() { return /* reexport safe */ _src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_4__.FormattedListParts; },
/* harmony export */   "FormattedRelativeTime": function() { return /* reexport safe */ _src_components_relative__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "FormattedPlural": function() { return /* reexport safe */ _src_components_plural__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "FormattedMessage": function() { return /* reexport safe */ _src_components_message__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "FormattedDateTimeRange": function() { return /* reexport safe */ _src_components_dateTimeRange__WEBPACK_IMPORTED_MODULE_8__.default; }
/* harmony export */ });
/* harmony import */ var _src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/components/createFormattedComponent */ "./node_modules/react-intl/lib/src/components/createFormattedComponent.js");
/* harmony import */ var _formatjs_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @formatjs/intl */ "./node_modules/@formatjs/intl/lib/index.js");
/* harmony import */ var _src_components_injectIntl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/injectIntl */ "./node_modules/react-intl/lib/src/components/injectIntl.js");
/* harmony import */ var _src_components_useIntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _src_components_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/components/provider */ "./node_modules/react-intl/lib/src/components/provider.js");
/* harmony import */ var _src_components_relative__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/components/relative */ "./node_modules/react-intl/lib/src/components/relative.js");
/* harmony import */ var _src_components_plural__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/components/plural */ "./node_modules/react-intl/lib/src/components/plural.js");
/* harmony import */ var _src_components_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/components/message */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _src_components_dateTimeRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/components/dateTimeRange */ "./node_modules/react-intl/lib/src/components/dateTimeRange.js");


function defineMessages(msgs) {
    return msgs;
}
function defineMessage(msg) {
    return msg;
}



// IMPORTANT: Explicit here to prevent api-extractor from outputing `import('./src/types').CustomFormatConfig`
var FormattedDate = (0,_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_4__.createFormattedComponent)('formatDate');
var FormattedTime = (0,_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_4__.createFormattedComponent)('formatTime');
var FormattedNumber = (0,_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_4__.createFormattedComponent)('formatNumber');
var FormattedList = (0,_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_4__.createFormattedComponent)('formatList');
var FormattedDisplayName = (0,_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_4__.createFormattedComponent)('formatDisplayName');
var FormattedDateParts = (0,_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_4__.createFormattedDateTimePartsComponent)('formatDate');
var FormattedTimeParts = (0,_src_components_createFormattedComponent__WEBPACK_IMPORTED_MODULE_4__.createFormattedDateTimePartsComponent)('formatTime');







/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/createFormattedComponent.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/createFormattedComponent.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormattedNumberParts": function() { return /* binding */ FormattedNumberParts; },
/* harmony export */   "FormattedListParts": function() { return /* binding */ FormattedListParts; },
/* harmony export */   "createFormattedDateTimePartsComponent": function() { return /* binding */ createFormattedDateTimePartsComponent; },
/* harmony export */   "createFormattedComponent": function() { return /* binding */ createFormattedComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIntl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");



var DisplayName;
(function (DisplayName) {
    DisplayName["formatDate"] = "FormattedDate";
    DisplayName["formatTime"] = "FormattedTime";
    DisplayName["formatNumber"] = "FormattedNumber";
    DisplayName["formatList"] = "FormattedList";
    // Note that this DisplayName is the locale display name, not to be confused with
    // the name of the enum, which is for React component display name in dev tools.
    DisplayName["formatDisplayName"] = "FormattedDisplayName";
})(DisplayName || (DisplayName = {}));
var DisplayNameParts;
(function (DisplayNameParts) {
    DisplayNameParts["formatDate"] = "FormattedDateParts";
    DisplayNameParts["formatTime"] = "FormattedTimeParts";
    DisplayNameParts["formatNumber"] = "FormattedNumberParts";
    DisplayNameParts["formatList"] = "FormattedListParts";
})(DisplayNameParts || (DisplayNameParts = {}));
var FormattedNumberParts = function (props) {
    var intl = (0,_useIntl__WEBPACK_IMPORTED_MODULE_1__.default)();
    var value = props.value, children = props.children, formatProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(props, ["value", "children"]);
    return children(intl.formatNumberToParts(value, formatProps));
};
FormattedNumberParts.displayName = 'FormattedNumberParts';
var FormattedListParts = function (props) {
    var intl = (0,_useIntl__WEBPACK_IMPORTED_MODULE_1__.default)();
    var value = props.value, children = props.children, formatProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(props, ["value", "children"]);
    return children(intl.formatListToParts(value, formatProps));
};
FormattedNumberParts.displayName = 'FormattedNumberParts';
function createFormattedDateTimePartsComponent(name) {
    var ComponentParts = function (props) {
        var intl = (0,_useIntl__WEBPACK_IMPORTED_MODULE_1__.default)();
        var value = props.value, children = props.children, formatProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(props, ["value", "children"]);
        var date = typeof value === 'string' ? new Date(value || 0) : value;
        var formattedParts = name === 'formatDate'
            ? intl.formatDateToParts(date, formatProps)
            : intl.formatTimeToParts(date, formatProps);
        return children(formattedParts);
    };
    ComponentParts.displayName = DisplayNameParts[name];
    return ComponentParts;
}
function createFormattedComponent(name) {
    var Component = function (props) {
        var intl = (0,_useIntl__WEBPACK_IMPORTED_MODULE_1__.default)();
        var value = props.value, children = props.children, formatProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(props
        // TODO: fix TS type definition for localeMatcher upstream
        , ["value", "children"]);
        // TODO: fix TS type definition for localeMatcher upstream
        var formattedValue = intl[name](value, formatProps);
        if (typeof children === 'function') {
            return children(formattedValue);
        }
        var Text = intl.textComponent || react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Text, null, formattedValue);
    };
    Component.displayName = DisplayName[name];
    return Component;
}


/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/dateTimeRange.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/dateTimeRange.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIntl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");



var FormattedDateTimeRange = function (props) {
    var intl = (0,_useIntl__WEBPACK_IMPORTED_MODULE_1__.default)();
    var from = props.from, to = props.to, children = props.children, formatProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(props, ["from", "to", "children"]);
    var formattedValue = intl.formatDateTimeRange(from, to, formatProps);
    if (typeof children === 'function') {
        return children(formattedValue);
    }
    var Text = intl.textComponent || react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Text, null, formattedValue);
};
FormattedDateTimeRange.displayName = 'FormattedDateTimeRange';
/* harmony default export */ __webpack_exports__["default"] = (FormattedDateTimeRange);


/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/injectIntl.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/injectIntl.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": function() { return /* binding */ Provider; },
/* harmony export */   "Context": function() { return /* binding */ Context; },
/* harmony export */   "default": function() { return /* binding */ injectIntl; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/react-intl/lib/src/utils.js");




function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Component';
}
// TODO: We should provide initial value here
var IntlContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
var IntlConsumer = IntlContext.Consumer, IntlProvider = IntlContext.Provider;
var Provider = IntlProvider;
var Context = IntlContext;
function injectIntl(WrappedComponent, options) {
    var _a = options || {}, _b = _a.intlPropName, intlPropName = _b === void 0 ? 'intl' : _b, _c = _a.forwardRef, forwardRef = _c === void 0 ? false : _c, _d = _a.enforceContext, enforceContext = _d === void 0 ? true : _d;
    var WithIntl = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(IntlConsumer, null, function (intl) {
        var _a;
        if (enforceContext) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.invariantIntlContext)(intl);
        }
        var intlProp = (_a = {}, _a[intlPropName] = intl, _a);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, props, intlProp, { ref: forwardRef ? props.forwardedRef : null })));
    })); };
    WithIntl.displayName = "injectIntl(" + getDisplayName(WrappedComponent) + ")";
    WithIntl.WrappedComponent = WrappedComponent;
    if (forwardRef) {
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(WithIntl, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, props, { forwardedRef: ref }))); }), WrappedComponent);
    }
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(WithIntl, WrappedComponent);
}


/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/message.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/message.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIntl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/react-intl/lib/src/utils.js");
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */




function areEqual(prevProps, nextProps) {
    var values = prevProps.values, otherProps = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(prevProps, ["values"]);
    var nextValues = nextProps.values, nextOtherProps = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(nextProps, ["values"]);
    return ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.shallowEqual)(nextValues, values) &&
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.shallowEqual)(otherProps, nextOtherProps));
}
function FormattedMessage(props) {
    var intl = (0,_useIntl__WEBPACK_IMPORTED_MODULE_3__.default)();
    var formatMessage = intl.formatMessage, _a = intl.textComponent, Text = _a === void 0 ? react__WEBPACK_IMPORTED_MODULE_0__.Fragment : _a;
    var id = props.id, description = props.description, defaultMessage = props.defaultMessage, values = props.values, children = props.children, _b = props.tagName, Component = _b === void 0 ? Text : _b, ignoreTag = props.ignoreTag;
    var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
    var nodes = formatMessage(descriptor, values, {
        ignoreTag: ignoreTag,
    });
    if (!Array.isArray(nodes)) {
        nodes = [nodes];
    }
    if (typeof children === 'function') {
        return children(nodes);
    }
    if (Component) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, null, react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(nodes));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, nodes);
}
FormattedMessage.displayName = 'FormattedMessage';
var MemoizedFormattedMessage = react__WEBPACK_IMPORTED_MODULE_0__.memo(FormattedMessage, areEqual);
MemoizedFormattedMessage.displayName = 'MemoizedFormattedMessage';
/* harmony default export */ __webpack_exports__["default"] = (MemoizedFormattedMessage);


/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/plural.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/plural.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useIntl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */


var FormattedPlural = function (props) {
    var _a = (0,_useIntl__WEBPACK_IMPORTED_MODULE_1__.default)(), formatPlural = _a.formatPlural, Text = _a.textComponent;
    var value = props.value, other = props.other, children = props.children;
    var pluralCategory = formatPlural(value, props);
    var formattedPlural = props[pluralCategory] || other;
    if (typeof children === 'function') {
        return children(formattedPlural);
    }
    if (Text) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Text, null, formattedPlural);
    }
    // Work around @types/react where React.FC cannot return string
    return formattedPlural;
};
FormattedPlural.defaultProps = {
    type: 'cardinal',
};
FormattedPlural.displayName = 'FormattedPlural';
/* harmony default export */ __webpack_exports__["default"] = (FormattedPlural);


/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/provider.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/provider.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIntl": function() { return /* binding */ createIntl; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _injectIntl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./injectIntl */ "./node_modules/react-intl/lib/src/components/injectIntl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/react-intl/lib/src/utils.js");
/* harmony import */ var _formatjs_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @formatjs/intl */ "./node_modules/@formatjs/intl/lib/index.js");
/* harmony import */ var intl_messageformat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/lib/index.js");
/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */






function processIntlConfig(config) {
    return {
        locale: config.locale,
        timeZone: config.timeZone,
        formats: config.formats,
        textComponent: config.textComponent,
        messages: config.messages,
        defaultLocale: config.defaultLocale,
        defaultFormats: config.defaultFormats,
        onError: config.onError,
        wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
        defaultRichTextElements: config.defaultRichTextElements,
    };
}
function assignUniqueKeysToFormatXMLElementFnArgument(values) {
    if (!values) {
        return values;
    }
    return Object.keys(values).reduce(function (acc, k) {
        var v = values[k];
        acc[k] = (0,intl_messageformat__WEBPACK_IMPORTED_MODULE_1__.isFormatXMLElementFn)(v)
            ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.assignUniqueKeysToParts)(v)
            : v;
        return acc;
    }, {});
}
var formatMessage = function (config, formatters, descriptor, rawValues) {
    var rest = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        rest[_i - 4] = arguments[_i];
    }
    var values = assignUniqueKeysToFormatXMLElementFnArgument(rawValues);
    var chunks = _formatjs_intl__WEBPACK_IMPORTED_MODULE_3__.formatMessage.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([config,
        formatters,
        descriptor, values], rest));
    if (Array.isArray(chunks)) {
        return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(chunks);
    }
    return chunks;
};
/**
 * Create intl object
 * @param config intl config
 * @param cache cache for formatter instances to prevent memory leak
 */
var createIntl = function (_a, cache) {
    var rawDefaultRichTextElements = _a.defaultRichTextElements, config = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["defaultRichTextElements"]);
    var defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements);
    var coreIntl = (0,_formatjs_intl__WEBPACK_IMPORTED_MODULE_3__.createIntl)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, _utils__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_INTL_CONFIG), config), { defaultRichTextElements: defaultRichTextElements }), cache);
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, coreIntl), { formatMessage: formatMessage.bind(null, {
            locale: coreIntl.locale,
            timeZone: coreIntl.timeZone,
            formats: coreIntl.formats,
            defaultLocale: coreIntl.defaultLocale,
            defaultFormats: coreIntl.defaultFormats,
            messages: coreIntl.messages,
            onError: coreIntl.onError,
            defaultRichTextElements: defaultRichTextElements,
        }, coreIntl.formatters) });
};
var IntlProvider = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(IntlProvider, _super);
    function IntlProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cache = (0,_formatjs_intl__WEBPACK_IMPORTED_MODULE_3__.createIntlCache)();
        _this.state = {
            cache: _this.cache,
            intl: createIntl(processIntlConfig(_this.props), _this.cache),
            prevConfig: processIntlConfig(_this.props),
        };
        return _this;
    }
    IntlProvider.getDerivedStateFromProps = function (props, _a) {
        var prevConfig = _a.prevConfig, cache = _a.cache;
        var config = processIntlConfig(props);
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.shallowEqual)(prevConfig, config)) {
            return {
                intl: createIntl(config, cache),
                prevConfig: config,
            };
        }
        return null;
    };
    IntlProvider.prototype.render = function () {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.invariantIntlContext)(this.state.intl);
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_injectIntl__WEBPACK_IMPORTED_MODULE_5__.Provider, { value: this.state.intl }, this.props.children);
    };
    IntlProvider.displayName = 'IntlProvider';
    IntlProvider.defaultProps = _utils__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_INTL_CONFIG;
    return IntlProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent));
/* harmony default export */ __webpack_exports__["default"] = (IntlProvider);


/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/relative.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/relative.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @formatjs/ecma402-abstract */ "./node_modules/@formatjs/ecma402-abstract/lib/index.js");
/* harmony import */ var _useIntl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIntl */ "./node_modules/react-intl/lib/src/components/useIntl.js");

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */



var MINUTE = 60;
var HOUR = 60 * 60;
var DAY = 60 * 60 * 24;
function selectUnit(seconds) {
    var absValue = Math.abs(seconds);
    if (absValue < MINUTE) {
        return 'second';
    }
    if (absValue < HOUR) {
        return 'minute';
    }
    if (absValue < DAY) {
        return 'hour';
    }
    return 'day';
}
function getDurationInSeconds(unit) {
    switch (unit) {
        case 'second':
            return 1;
        case 'minute':
            return MINUTE;
        case 'hour':
            return HOUR;
        default:
            return DAY;
    }
}
function valueToSeconds(value, unit) {
    if (!value) {
        return 0;
    }
    switch (unit) {
        case 'second':
            return value;
        case 'minute':
            return value * MINUTE;
        default:
            return value * HOUR;
    }
}
var INCREMENTABLE_UNITS = [
    'second',
    'minute',
    'hour',
];
function canIncrement(unit) {
    if (unit === void 0) { unit = 'second'; }
    return INCREMENTABLE_UNITS.includes(unit);
}
var SimpleFormattedRelativeTime = function (props) {
    var _a = (0,_useIntl__WEBPACK_IMPORTED_MODULE_1__.default)(), formatRelativeTime = _a.formatRelativeTime, Text = _a.textComponent;
    var children = props.children, value = props.value, unit = props.unit, otherProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(props, ["children", "value", "unit"]);
    var formattedRelativeTime = formatRelativeTime(value || 0, unit, otherProps);
    if (typeof children === 'function') {
        return children(formattedRelativeTime);
    }
    if (Text) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Text, null, formattedRelativeTime);
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, formattedRelativeTime);
};
var FormattedRelativeTime = function (_a) {
    var value = _a.value, unit = _a.unit, updateIntervalInSeconds = _a.updateIntervalInSeconds, otherProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["value", "unit", "updateIntervalInSeconds"]);
    (0,_formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_3__.invariant)(!updateIntervalInSeconds ||
        !!(updateIntervalInSeconds && canIncrement(unit)), 'Cannot schedule update with unit longer than hour');
    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState(), prevUnit = _b[0], setPrevUnit = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__.useState(0), prevValue = _c[0], setPrevValue = _c[1];
    var _d = react__WEBPACK_IMPORTED_MODULE_0__.useState(0), currentValueInSeconds = _d[0], setCurrentValueInSeconds = _d[1];
    var updateTimer;
    if (unit !== prevUnit || value !== prevValue) {
        setPrevValue(value || 0);
        setPrevUnit(unit);
        setCurrentValueInSeconds(canIncrement(unit) ? valueToSeconds(value, unit) : 0);
    }
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        function clearUpdateTimer() {
            clearTimeout(updateTimer);
        }
        clearUpdateTimer();
        // If there's no interval and we cannot increment this unit, do nothing
        if (!updateIntervalInSeconds || !canIncrement(unit)) {
            return clearUpdateTimer;
        }
        // Figure out the next interesting time
        var nextValueInSeconds = currentValueInSeconds - updateIntervalInSeconds;
        var nextUnit = selectUnit(nextValueInSeconds);
        // We've reached the max auto incrementable unit, don't schedule another update
        if (nextUnit === 'day') {
            return clearUpdateTimer;
        }
        var unitDuration = getDurationInSeconds(nextUnit);
        var remainder = nextValueInSeconds % unitDuration;
        var prevInterestingValueInSeconds = nextValueInSeconds - remainder;
        var nextInterestingValueInSeconds = prevInterestingValueInSeconds >= currentValueInSeconds
            ? prevInterestingValueInSeconds - unitDuration
            : prevInterestingValueInSeconds;
        var delayInSeconds = Math.abs(nextInterestingValueInSeconds - currentValueInSeconds);
        if (currentValueInSeconds !== nextInterestingValueInSeconds) {
            updateTimer = setTimeout(function () { return setCurrentValueInSeconds(nextInterestingValueInSeconds); }, delayInSeconds * 1e3);
        }
        return clearUpdateTimer;
    }, [currentValueInSeconds, updateIntervalInSeconds, unit]);
    var currentValue = value || 0;
    var currentUnit = unit;
    if (canIncrement(unit) &&
        typeof currentValueInSeconds === 'number' &&
        updateIntervalInSeconds) {
        currentUnit = selectUnit(currentValueInSeconds);
        var unitDuration = getDurationInSeconds(currentUnit);
        currentValue = Math.round(currentValueInSeconds / unitDuration);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(SimpleFormattedRelativeTime, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ value: currentValue, unit: currentUnit }, otherProps)));
};
FormattedRelativeTime.displayName = 'FormattedRelativeTime';
FormattedRelativeTime.defaultProps = {
    value: 0,
    unit: 'second',
};
/* harmony default export */ __webpack_exports__["default"] = (FormattedRelativeTime);


/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/useIntl.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/useIntl.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useIntl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _injectIntl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injectIntl */ "./node_modules/react-intl/lib/src/components/injectIntl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/react-intl/lib/src/utils.js");



function useIntl() {
    var intl = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_injectIntl__WEBPACK_IMPORTED_MODULE_1__.Context);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.invariantIntlContext)(intl);
    return intl;
}


/***/ }),

/***/ "./node_modules/react-intl/lib/src/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/react-intl/lib/src/utils.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invariantIntlContext": function() { return /* binding */ invariantIntlContext; },
/* harmony export */   "DEFAULT_INTL_CONFIG": function() { return /* binding */ DEFAULT_INTL_CONFIG; },
/* harmony export */   "assignUniqueKeysToParts": function() { return /* binding */ assignUniqueKeysToParts; },
/* harmony export */   "shallowEqual": function() { return /* binding */ shallowEqual; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @formatjs/ecma402-abstract */ "./node_modules/@formatjs/ecma402-abstract/lib/index.js");
/* harmony import */ var _formatjs_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @formatjs/intl */ "./node_modules/@formatjs/intl/lib/index.js");




function invariantIntlContext(intl) {
    (0,_formatjs_ecma402_abstract__WEBPACK_IMPORTED_MODULE_1__.invariant)(intl, '[React Intl] Could not find required `intl` object. ' +
        '<IntlProvider> needs to exist in the component ancestry.');
}
var DEFAULT_INTL_CONFIG = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, _formatjs_intl__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_INTL_CONFIG), { textComponent: react__WEBPACK_IMPORTED_MODULE_0__.Fragment });
/**
 * Takes a `formatXMLElementFn`, and composes it in function, which passes
 * argument `parts` through, assigning unique key to each part, to prevent
 * "Each child in a list should have a unique "key"" React error.
 * @param formatXMLElementFn
 */
function assignUniqueKeysToParts(formatXMLElementFn) {
    return function (parts) {
        // eslint-disable-next-line prefer-rest-params
        return formatXMLElementFn(react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(parts));
    };
}
function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (!objA || !objB) {
        return false;
    }
    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);
    var len = aKeys.length;
    if (bKeys.length !== len) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        var key = aKeys[i];
        if (objA[key] !== objB[key] ||
            !Object.prototype.hasOwnProperty.call(objB, key)) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi8yNjIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvQmVzdEF2YWlsYWJsZUxvY2FsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi9CZXN0Rml0TWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi9DYW5vbmljYWxpemVMb2NhbGVMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL0Nhbm9uaWNhbGl6ZVRpbWVab25lTmFtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi9Db2VyY2VPcHRpb25zVG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvRGVmYXVsdE51bWJlck9wdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi9HZXROdW1iZXJPcHRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvR2V0T3B0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL0dldE9wdGlvbnNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvSXNTYW5jdGlvbmVkU2ltcGxlVW5pdElkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvSXNWYWxpZFRpbWVab25lTmFtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi9Jc1dlbGxGb3JtZWRDdXJyZW5jeUNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvSXNXZWxsRm9ybWVkVW5pdElkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvTG9va3VwTWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi9Mb29rdXBTdXBwb3J0ZWRMb2NhbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL051bWJlckZvcm1hdC9Db21wdXRlRXhwb25lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvTnVtYmVyRm9ybWF0L0NvbXB1dGVFeHBvbmVudEZvck1hZ25pdHVkZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi9OdW1iZXJGb3JtYXQvQ3VycmVuY3lEaWdpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvTnVtYmVyRm9ybWF0L0Zvcm1hdE51bWVyaWNUb1BhcnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL051bWJlckZvcm1hdC9Gb3JtYXROdW1lcmljVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvTnVtYmVyRm9ybWF0L0luaXRpYWxpemVOdW1iZXJGb3JtYXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvTnVtYmVyRm9ybWF0L1BhcnRpdGlvbk51bWJlclBhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvTnVtYmVyRm9ybWF0L1NldE51bWJlckZvcm1hdERpZ2l0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi9OdW1iZXJGb3JtYXQvU2V0TnVtYmVyRm9ybWF0VW5pdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvTnVtYmVyRm9ybWF0L1RvUmF3Rml4ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvTnVtYmVyRm9ybWF0L1RvUmF3UHJlY2lzaW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL051bWJlckZvcm1hdC9kaWdpdC1tYXBwaW5nLmdlbmVyYXRlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi9OdW1iZXJGb3JtYXQvZm9ybWF0X3RvX3BhcnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL1BhcnRpdGlvblBhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvUmVzb2x2ZUxvY2FsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi9TdXBwb3J0ZWRMb2NhbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL1VuaWNvZGVFeHRlbnNpb25WYWx1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi9kYXRhLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL3JlZ2V4LmdlbmVyYXRlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi90eXBlcy9kYXRlLXRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvdHlwZXMvZGlzcGxheW5hbWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL3R5cGVzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvZWNtYTQwMi1hYnN0cmFjdC9saWIvdHlwZXMvbnVtYmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL3R5cGVzL3BsdXJhbC1ydWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0L2xpYi90eXBlcy9yZWxhdGl2ZS10aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2VjbWE0MDItYWJzdHJhY3QvbGliL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2Zhc3QtbWVtb2l6ZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvaWN1LW1lc3NhZ2Vmb3JtYXQtcGFyc2VyL2xpYi9lcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9pY3UtbWVzc2FnZWZvcm1hdC1wYXJzZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ljdS1tZXNzYWdlZm9ybWF0LXBhcnNlci9saWIvcGFyc2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ljdS1tZXNzYWdlZm9ybWF0LXBhcnNlci9saWIvcmVnZXguZ2VuZXJhdGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ljdS1tZXNzYWdlZm9ybWF0LXBhcnNlci9saWIvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvaWN1LXNrZWxldG9uLXBhcnNlci9saWIvZGF0ZS10aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ljdS1za2VsZXRvbi1wYXJzZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ljdS1za2VsZXRvbi1wYXJzZXIvbGliL251bWJlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9pY3Utc2tlbGV0b24tcGFyc2VyL2xpYi9yZWdleC5nZW5lcmF0ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvaW50bC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvaW50bC9saWIvc3JjL2NyZWF0ZS1pbnRsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwvbGliL3NyYy9kYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9pbnRsL2xpYi9zcmMvZGlzcGxheU5hbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvaW50bC9saWIvc3JjL2Vycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwvbGliL3NyYy9saXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwvbGliL3NyYy9tZXNzYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwvbGliL3NyYy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZm9ybWF0anMvaW50bC9saWIvc3JjL3BsdXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9pbnRsL2xpYi9zcmMvcmVsYXRpdmVUaW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGZvcm1hdGpzL2ludGwvbGliL3NyYy90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bmb3JtYXRqcy9pbnRsL2xpYi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbnRsLW1lc3NhZ2Vmb3JtYXQvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L2xpYi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ludGwtbWVzc2FnZWZvcm1hdC9saWIvc3JjL2Vycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW50bC1tZXNzYWdlZm9ybWF0L2xpYi9zcmMvZm9ybWF0dGVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2E3MjMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvc3JjL2NvbXBvbmVudHMvY3JlYXRlRm9ybWF0dGVkQ29tcG9uZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvc3JjL2NvbXBvbmVudHMvZGF0ZVRpbWVSYW5nZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL3NyYy9jb21wb25lbnRzL2luamVjdEludGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9zcmMvY29tcG9uZW50cy9tZXNzYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvc3JjL2NvbXBvbmVudHMvcGx1cmFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50bC9saWIvc3JjL2NvbXBvbmVudHMvcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9zcmMvY29tcG9uZW50cy9yZWxhdGl2ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWludGwvbGliL3NyYy9jb21wb25lbnRzL3VzZUludGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnRsL2xpYi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwicGF0aG5hbWUiLCJtZXNzYWdlcyIsImVuIiwiQkFTSUMiLCJHUkVFVElORyIsIlBMVVJBTCIsIkZVTkMiLCJTV0lUQ0giLCJodSIsImxvY2FsIiwibWVzcyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9VQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCNEQ7QUFDRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyREFBMkQsZ0NBQWdDO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG9FQUFnQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlFQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOENBQVE7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzREO0FBQ3JEO0FBQ1A7QUFDQTtBQUNBLFdBQVcseUVBQW1CO0FBQzlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQVE7QUFDNUI7QUFDQSxtRUFBbUUscUJBQXFCLEVBQUU7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0IsRUFBRTtBQUNyRCwrQkFBK0IseUJBQXlCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx3QkFBd0IsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHdCQUF3QixFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsUUFBUSxtR0FBZ0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1HQUFnQztBQUN6QyxTQUFTLG1HQUFnQztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0IyRDtBQUNDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asa0JBQWtCO0FBQ2xCLDJEQUEyRCxnQ0FBZ0M7QUFDM0Y7QUFDQSwrQ0FBK0Msb0VBQWdDO0FBQy9FLDhCQUE4Qix5RUFBbUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEIyRDtBQUNDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsMkRBQTJELGdDQUFnQztBQUMzRjtBQUNBLCtDQUErQyxvRUFBZ0M7QUFDL0UsOEJBQThCLHlFQUFtQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQndDO0FBQ29DO0FBQ1o7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFZO0FBQ2hDLG1CQUFtQix5RkFBMkI7QUFDOUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZCQUE2Qiw2RUFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9EQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5RkFBMkI7QUFDbkM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNEd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLFdBQVcsb0RBQWM7QUFDekI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUa0U7QUFDN0I7QUFDOUI7QUFDUCxnQkFBZ0IsK0VBQXNCO0FBQ3RDLGlCQUFpQixpREFBVztBQUM1QixxQ0FBcUMscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibUM7QUFDZTtBQUNoQjtBQUNRO0FBQzFDO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCLCtDQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtEQUFjO0FBQ25DO0FBQ0E7QUFDQSxxQkFBcUIsdURBQVU7QUFDL0I7QUFDQTtBQUNBLHFCQUFxQiwrREFBYztBQUNuQztBQUNBLHlCQUF5Qix1REFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhDQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDbUU7QUFDMUI7QUFDUTtBQUN5QjtBQUN4QjtBQUMwQjtBQUN2QztBQUM0QjtBQUNqRTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwyQkFBMkIsK0VBQXNCO0FBQ2pELGtCQUFrQiw2RUFBcUI7QUFDdkM7QUFDQSxrQkFBa0IscURBQVM7QUFDM0I7QUFDQSwwQkFBMEIscURBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RkFBMEIsZUFBZSxxQ0FBcUM7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrREFBYyxZQUFZLHlDQUF5QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBUztBQUM1QjtBQUNBLElBQUkseUZBQTJCO0FBQy9CLHlCQUF5QixxREFBUztBQUNsQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVM7QUFDL0I7QUFDQSxzQkFBc0IscURBQVM7QUFDL0I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EZ0U7QUFDN0I7QUFDaUI7QUFDTjtBQUM5QztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlFQUFlO0FBQzVCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxpQ0FBaUMsNkVBQXFCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlEQUFhLEVBQUUsNkZBQTZGO0FBQ3ZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRXFEO0FBQ1E7QUFDN0Q7QUFDQTtBQUNBO0FBQ087QUFDUCxlQUFlLGlFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5RUFBbUI7QUFDbEMsZUFBZSx5RUFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUVBQW1CO0FBQ2xDO0FBQ0EsZUFBZSx5RUFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN5QztBQUM4QjtBQUNJO0FBQzNFO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCLCtCQUErQjtBQUM1RDtBQUNBO0FBQ0EsZ0JBQWdCLHFEQUFTO0FBQ3pCO0FBQ0EsbUJBQW1CLHFEQUFTO0FBQzVCLG1DQUFtQyxtRkFBd0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxREFBUztBQUNuQyx1QkFBdUIscURBQVM7QUFDaEMsZUFBZSxxREFBUztBQUN4QiwrQkFBK0IsdUZBQTBCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEZ0Q7QUFDekM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4Q0FBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekVPLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FlO0FBQ2U7QUFDSjtBQUNyRDtBQUNBLGtFQUFrRSxFQUFFO0FBQ3BFLFFBQVEsRUFBRTtBQUNWLDZDQUE2QyxvRUFBc0I7QUFDbkUsT0FBTyxFQUFFO0FBQ1Qsd0NBQXdDLG9FQUFzQjtBQUM5RDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELEVBQUU7QUFDM0Q7QUFDQTtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGO0FBQzlGO0FBQ0E7QUFDQSxxREFBcUQsRUFBRSxnQ0FBZ0MsRUFBRTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsRUFBRSxNQUFNLEVBQUU7QUFDOUQ7QUFDQTtBQUNBLDJDQUEyQyxFQUFFLHlCQUF5QixNQUFNO0FBQzVFLG9EQUFvRCxLQUFLLEdBQUcsR0FBRyxHQUFHO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxrQ0FBa0M7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixFQUFFO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDhDQUE4QztBQUNoRjtBQUNBO0FBQ0Esa0NBQWtDLDRDQUE0QztBQUM5RTtBQUNBO0FBQ0Esa0NBQWtDLGtEQUFrRDtBQUNwRjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsK0NBQStDO0FBQ2pGO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrQkFBK0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixFQUFFLE1BQU0sRUFBRTtBQUNqQyw2REFBNkQsTUFBTTtBQUNuRTtBQUNBLHVFQUF1RSxnQ0FBZ0M7QUFDdkc7QUFDQTtBQUNBLCtCQUErQixFQUFFO0FBQ2pDO0FBQ0E7QUFDQSwrQkFBK0IsRUFBRTtBQUNqQyx5Q0FBeUMsb0NBQW9DO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsRUFBRTtBQUM3RDtBQUNBO0FBQ0Esd0RBQXdELEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSw2QkFBNkIsRUFBRTtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxFQUFFO0FBQ3JDLG1DQUFtQyxFQUFFLGdDQUFnQyxFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxFQUFFO0FBQzFDLDJEQUEyRCxHQUFHLE9BQU8sZ0JBQWdCO0FBQ3JGO0FBQ0EsZ0RBQWdELEdBQUc7QUFDbkQ7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4QztBQUNBLHFDQUFxQyw4Q0FBOEM7QUFDbkY7QUFDQSx5QkFBeUIsRUFBRTtBQUMzQjtBQUNBLHFDQUFxQyxFQUFFO0FBQ3ZDO0FBQ0EscUNBQXFDLDhDQUE4QztBQUNuRjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNEJBQTRCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBLGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQSxnQ0FBZ0Msa0VBQVk7QUFDNUM7QUFDQSwrQ0FBK0MsK0NBQStDLEVBQUU7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2Q0FBNkM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUNBQXVDO0FBQ2hFO0FBQ0EsNkJBQTZCLHVDQUF1QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQ0FBa0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQyxHQUFHLG9DQUFvQztBQUN0RztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQXdEO0FBQzdFO0FBQ0EseUJBQXlCLHNEQUFzRDtBQUMvRTtBQUNBO0FBQ0EsNkJBQTZCLHVEQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUI7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTyxJQUFJLEVBQUUsT0FBTztBQUNqRCxrQkFBa0IsTUFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQixLQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3Bhb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLFFBQVEsaURBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENnRDtBQUNFO0FBQ2Q7QUFDNEI7QUFDaEU7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZEQUFhO0FBQ3pCO0FBQ0E7QUFDQSxZQUFZLCtEQUFjO0FBQzFCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxxRUFBcUUscUNBQXFDO0FBQzFHO0FBQ0EsUUFBUSxpREFBUztBQUNqQjtBQUNBLFFBQVEsaURBQVM7QUFDakI7QUFDQSxRQUFRLGlEQUFTO0FBQ2pCO0FBQ0EsUUFBUSxpREFBUztBQUNqQjtBQUNBO0FBQ0EsaUNBQWlDLDZFQUFxQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFaUM7QUFDTztBQUMwQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQkFBa0IsOENBQVE7QUFDMUIsa0JBQWtCLHFEQUFTO0FBQzNCO0FBQ0E7QUFDQSxlQUFlLCtFQUFzQjtBQUNyQztBQUNBLFdBQVcsK0VBQXNCO0FBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsSUFBSSxpREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NrQztBQUNsQztBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p5QztBQUNFO0FBQ0g7QUFDTjtBQUNOO0FBQ087QUFDZ0I7QUFDYjtBQUNLO0FBQ0U7QUFDRTtBQUNZO0FBQ2I7QUFDTTtBQUNDO0FBQ0M7QUFDQTtBQUNLO0FBQ0Q7QUFDaEI7QUFDSTtBQUM2QjtBQUN4QztBQUNIO0FBQ0c7QUFDb0g7QUFDckc7QUFDWjtBQUNKO0FBQ0w7QUFDUTtBQUNOO0FBQ007QUFDRDtBQUNkOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEN0QjtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNENBQTRDOzs7Ozs7Ozs7Ozs7O0FDTG5DOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBVjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2Q0FBNkMsZ0JBQWdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QztBQUM5QyxtREFBbUQ7QUFDbkQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPLHVEQUF1RCxJQUFJO0FBQzNEO0FBQ1AseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGTztBQUNQO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0Esc0NBQXNDLEtBQUs7QUFDM0M7QUFDQSx3Q0FBd0MsS0FBSztBQUM3QztBQUNBLDBDQUEwQyxRQUFRO0FBQ2xEO0FBQ0EseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxnQkFBZ0I7QUFDNUU7QUFDQSwrREFBK0QsY0FBYztBQUM3RTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBLGdEQUFnRCxZQUFZO0FBQzVEO0FBQ0EsaUZBQWlGLG9CQUFvQjtBQUNyRztBQUNBLHVFQUF1RSx1QkFBdUI7QUFDOUY7QUFDQSx5REFBeUQsWUFBWTtBQUNyRTtBQUNBLDRFQUE0RSxZQUFZO0FBQ3hGO0FBQ0EseUVBQXlFLG1CQUFtQjtBQUM1RjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0EscUVBQXFFLGlCQUFpQixHQUFHO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0JBQWtCLEVBQUUsTUFBTSxHQUFHO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0JBQW9CLE1BQU0sUUFBUSxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlERTtBQUNHO0FBQ0Y7QUFDNkg7QUFDL0o7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBZSxRQUFRLHVEQUFlO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdURBQWUsUUFBUSx3REFBZ0I7QUFDeEQ7QUFDQTtBQUNBLGtCQUFrQixxREFBYSxRQUFRLHFEQUFhO0FBQ3BELFlBQVksMERBQWtCO0FBQzlCO0FBQ0E7QUFDQSxpQkFBaUIsb0RBQVk7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1AsMEJBQTBCLFdBQVc7QUFDckMsV0FBVywrQ0FBUSxFQUFFLHdEQUF3RDtBQUM3RSxxQkFBcUIsMkNBQU07QUFDM0I7QUFDQSxnQ0FBZ0MsNkNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUN4QjtBQUNpQztBQUNHO0FBQ1c7QUFDVztBQUNpRTtBQUMzSCxtREFBbUQsMEVBQTRCO0FBQy9FLDJDQUEyQywwRUFBNEI7QUFDdkU7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVksSUFBSSxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsdUJBQXVCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVksSUFBSSxlQUFlO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFVO0FBQ3BDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxtRUFBK0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBWTtBQUN0QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHlEQUFxQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxtRUFBK0I7QUFDckU7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHlEQUFxQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNENBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBEQUFzQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseURBQXFCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU8sZ0RBQVksb0NBQW9DO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQix1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQSw4QkFBOEIsMkVBQXVDO0FBQ3JFO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsOEJBQThCLDREQUF3QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnRUFBNEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJFQUF1QztBQUNyRTtBQUNBO0FBQ0Esa0NBQWtDLEtBQUs7QUFDdkMsMEJBQTBCO0FBQzFCLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7QUFDQSw4QkFBOEIsaURBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxrQkFBa0I7QUFDMUQ7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLHNDQUFzQywyRUFBdUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0VBQTRCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0VBQThCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxtRUFBK0I7QUFDekU7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxPQUFPLCtDQUFXLHlEQUF5RDtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHVFQUFtQztBQUNqRjtBQUNBO0FBQ0Esa0NBQWtDLDBEQUFzQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msb0ZBQXFCO0FBQ3ZELG9DQUFvQztBQUNwQztBQUNBLHdEQUF3RCw2Q0FBUyxHQUFHLDZDQUFTO0FBQzdFO0FBQ0Esa0NBQWtDLCtEQUErRDtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtDQUFXO0FBQ3pDO0FBQ0Esa0NBQWtDLDZDQUFTO0FBQzNDLGtDQUFrQyw2Q0FBUztBQUMzQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNEVBQXdDLG9DQUFvQywrQ0FBUSxHQUFHO0FBQzdIO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUIsSUFBSSxRQUFRO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsaUZBQTZDO0FBQ3ZGO0FBQ0E7QUFDQSw2REFBNkQsaUZBQTZDLEVBQUUsa0ZBQThDO0FBQzFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsK0NBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrQ0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbUVBQStCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLHFEQUFxRDtBQUNyRCw4QkFBOEIsMkVBQXVDO0FBQ3JFO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDhFQUEwQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNEZBQTZCO0FBQ2xEO0FBQ0E7QUFDQSw4QkFBOEIscUVBQWlDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3REFBb0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtGQUFtQjtBQUN6Qyx3QkFBd0I7QUFDeEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxPQUFPO0FBQzNDLDZEQUE2RCw2RUFBeUMsRUFBRSw4RUFBMEM7QUFDbEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0ZBQTRDO0FBQ2xFLHNCQUFzQixnRkFBNEM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxzQkFBc0Isc0ZBQWtEO0FBQ3hFLHNCQUFzQixzRkFBa0Q7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkVBQXlDO0FBQzNELGtCQUFrQiw2RUFBeUM7QUFDM0Q7QUFDQTtBQUNBLDhCQUE4QixrRUFBOEI7QUFDNUQ7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDaUI7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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VztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFD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QTtBQUNBLHlDQUF5Qyw2QkFBNkI7QUFDdEUsQ0FBQztBQUNEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCw0Q0FBNEM7QUFDNUM7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUb1N0cmluZyhvKSB7XG4gICAgLy8gT25seSBzeW1ib2wgaXMgaXJyZWd1bGFyLi4uXG4gICAgaWYgKHR5cGVvZiBvID09PSAnc3ltYm9sJykge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcobyk7XG59XG4vKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9udW1iZXJcbiAqIEBwYXJhbSB2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRvTnVtYmVyKHZhbCkge1xuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiArMDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdmFsID8gMSA6ICswO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzeW1ib2wnIHx8IHR5cGVvZiB2YWwgPT09ICdiaWdpbnQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHN5bWJvbC9iaWdpbnQgdG8gbnVtYmVyJyk7XG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIodmFsKTtcbn1cbi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbiAqIEBwYXJhbSBuXG4gKi9cbmZ1bmN0aW9uIFRvSW50ZWdlcihuKSB7XG4gICAgdmFyIG51bWJlciA9IFRvTnVtYmVyKG4pO1xuICAgIGlmIChpc05hTihudW1iZXIpIHx8IFNhbWVWYWx1ZShudW1iZXIsIC0wKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICB9XG4gICAgdmFyIGludGVnZXIgPSBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIGludGVnZXIgPSAtaW50ZWdlcjtcbiAgICB9XG4gICAgaWYgKFNhbWVWYWx1ZShpbnRlZ2VyLCAtMCkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiBpbnRlZ2VyO1xufVxuLyoqXG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRpbWVjbGlwXG4gKiBAcGFyYW0gdGltZVxuICovXG5leHBvcnQgZnVuY3Rpb24gVGltZUNsaXAodGltZSkge1xuICAgIGlmICghaXNGaW5pdGUodGltZSkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgaWYgKE1hdGguYWJzKHRpbWUpID4gOC42NCAqIDFlMTUpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgcmV0dXJuIFRvSW50ZWdlcih0aW1lKTtcbn1cbi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxuICogQHBhcmFtIGFyZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gVG9PYmplY3QoYXJnKSB7XG4gICAgaWYgKGFyZyA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuZGVmaW5lZC9udWxsIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gb2JqZWN0Jyk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QoYXJnKTtcbn1cbi8qKlxuICogaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi8xMS4wL2luZGV4Lmh0bWwjc2VjLXNhbWV2YWx1ZVxuICogQHBhcmFtIHhcbiAqIEBwYXJhbSB5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTYW1lVmFsdWUoeCwgeSkge1xuICAgIGlmIChPYmplY3QuaXMpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5pcyh4LCB5KTtcbiAgICB9XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfVxuICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbn1cbi8qKlxuICogaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi8xMS4wL2luZGV4Lmh0bWwjc2VjLWFycmF5Y3JlYXRlXG4gKiBAcGFyYW0gbGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBBcnJheUNyZWF0ZShsZW4pIHtcbiAgICByZXR1cm4gbmV3IEFycmF5KGxlbik7XG59XG4vKipcbiAqIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvMTEuMC9pbmRleC5odG1sI3NlYy1oYXNvd25wcm9wZXJ0eVxuICogQHBhcmFtIG9cbiAqIEBwYXJhbSBwcm9wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBIYXNPd25Qcm9wZXJ0eShvLCBwcm9wKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwcm9wKTtcbn1cbi8qKlxuICogaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi8xMS4wL2luZGV4Lmh0bWwjc2VjLXR5cGVcbiAqIEBwYXJhbSB4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUeXBlKHgpIHtcbiAgICBpZiAoeCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ051bGwnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAnVW5kZWZpbmVkJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuICdOdW1iZXInO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gJ0Jvb2xlYW4nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiAnU3RyaW5nJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3ltYm9sJykge1xuICAgICAgICByZXR1cm4gJ1N5bWJvbCc7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgcmV0dXJuICdCaWdJbnQnO1xuICAgIH1cbn1cbnZhciBNU19QRVJfREFZID0gODY0MDAwMDA7XG4vKipcbiAqIGh0dHBzOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvMTEuMC9pbmRleC5odG1sI2Vxbi1tb2R1bG9cbiAqIEBwYXJhbSB4XG4gKiBAcGFyYW0geVxuICogQHJldHVybiBrIG9mIHRoZSBzYW1lIHNpZ24gYXMgeVxuICovXG5mdW5jdGlvbiBtb2QoeCwgeSkge1xuICAgIHJldHVybiB4IC0gTWF0aC5mbG9vcih4IC8geSkgKiB5O1xufVxuLyoqXG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jZXFuLURheVxuICogQHBhcmFtIHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIERheSh0KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodCAvIE1TX1BFUl9EQVkpO1xufVxuLyoqXG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXdlZWstZGF5XG4gKiBAcGFyYW0gdFxuICovXG5leHBvcnQgZnVuY3Rpb24gV2Vla0RheSh0KSB7XG4gICAgcmV0dXJuIG1vZChEYXkodCkgKyA0LCA3KTtcbn1cbi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy15ZWFyLW51bWJlclxuICogQHBhcmFtIHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIERheUZyb21ZZWFyKHkpIHtcbiAgICByZXR1cm4gRGF0ZS5VVEMoeSwgMCkgLyBNU19QRVJfREFZO1xufVxuLyoqXG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXllYXItbnVtYmVyXG4gKiBAcGFyYW0geVxuICovXG5leHBvcnQgZnVuY3Rpb24gVGltZUZyb21ZZWFyKHkpIHtcbiAgICByZXR1cm4gRGF0ZS5VVEMoeSwgMCk7XG59XG4vKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMteWVhci1udW1iZXJcbiAqIEBwYXJhbSB0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBZZWFyRnJvbVRpbWUodCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0KS5nZXRVVENGdWxsWWVhcigpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIERheXNJblllYXIoeSkge1xuICAgIGlmICh5ICUgNCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gMzY1O1xuICAgIH1cbiAgICBpZiAoeSAlIDEwMCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gMzY2O1xuICAgIH1cbiAgICBpZiAoeSAlIDQwMCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gMzY1O1xuICAgIH1cbiAgICByZXR1cm4gMzY2O1xufVxuZXhwb3J0IGZ1bmN0aW9uIERheVdpdGhpblllYXIodCkge1xuICAgIHJldHVybiBEYXkodCkgLSBEYXlGcm9tWWVhcihZZWFyRnJvbVRpbWUodCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEluTGVhcFllYXIodCkge1xuICAgIHJldHVybiBEYXlzSW5ZZWFyKFllYXJGcm9tVGltZSh0KSkgPT09IDM2NSA/IDAgOiAxO1xufVxuLyoqXG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1vbnRoLW51bWJlclxuICogQHBhcmFtIHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1vbnRoRnJvbVRpbWUodCkge1xuICAgIHZhciBkd3kgPSBEYXlXaXRoaW5ZZWFyKHQpO1xuICAgIHZhciBsZWFwID0gSW5MZWFwWWVhcih0KTtcbiAgICBpZiAoZHd5ID49IDAgJiYgZHd5IDwgMzEpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChkd3kgPCA1OSArIGxlYXApIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChkd3kgPCA5MCArIGxlYXApIHtcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIGlmIChkd3kgPCAxMjAgKyBsZWFwKSB7XG4gICAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICBpZiAoZHd5IDwgMTUxICsgbGVhcCkge1xuICAgICAgICByZXR1cm4gNDtcbiAgICB9XG4gICAgaWYgKGR3eSA8IDE4MSArIGxlYXApIHtcbiAgICAgICAgcmV0dXJuIDU7XG4gICAgfVxuICAgIGlmIChkd3kgPCAyMTIgKyBsZWFwKSB7XG4gICAgICAgIHJldHVybiA2O1xuICAgIH1cbiAgICBpZiAoZHd5IDwgMjQzICsgbGVhcCkge1xuICAgICAgICByZXR1cm4gNztcbiAgICB9XG4gICAgaWYgKGR3eSA8IDI3MyArIGxlYXApIHtcbiAgICAgICAgcmV0dXJuIDg7XG4gICAgfVxuICAgIGlmIChkd3kgPCAzMDQgKyBsZWFwKSB7XG4gICAgICAgIHJldHVybiA5O1xuICAgIH1cbiAgICBpZiAoZHd5IDwgMzM0ICsgbGVhcCkge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgfVxuICAgIGlmIChkd3kgPCAzNjUgKyBsZWFwKSB7XG4gICAgICAgIHJldHVybiAxMTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRpbWUnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBEYXRlRnJvbVRpbWUodCkge1xuICAgIHZhciBkd3kgPSBEYXlXaXRoaW5ZZWFyKHQpO1xuICAgIHZhciBtZnQgPSBNb250aEZyb21UaW1lKHQpO1xuICAgIHZhciBsZWFwID0gSW5MZWFwWWVhcih0KTtcbiAgICBpZiAobWZ0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBkd3kgKyAxO1xuICAgIH1cbiAgICBpZiAobWZ0ID09PSAxKSB7XG4gICAgICAgIHJldHVybiBkd3kgLSAzMDtcbiAgICB9XG4gICAgaWYgKG1mdCA9PT0gMikge1xuICAgICAgICByZXR1cm4gZHd5IC0gNTggLSBsZWFwO1xuICAgIH1cbiAgICBpZiAobWZ0ID09PSAzKSB7XG4gICAgICAgIHJldHVybiBkd3kgLSA4OSAtIGxlYXA7XG4gICAgfVxuICAgIGlmIChtZnQgPT09IDQpIHtcbiAgICAgICAgcmV0dXJuIGR3eSAtIDExOSAtIGxlYXA7XG4gICAgfVxuICAgIGlmIChtZnQgPT09IDUpIHtcbiAgICAgICAgcmV0dXJuIGR3eSAtIDE1MCAtIGxlYXA7XG4gICAgfVxuICAgIGlmIChtZnQgPT09IDYpIHtcbiAgICAgICAgcmV0dXJuIGR3eSAtIDE4MCAtIGxlYXA7XG4gICAgfVxuICAgIGlmIChtZnQgPT09IDcpIHtcbiAgICAgICAgcmV0dXJuIGR3eSAtIDIxMSAtIGxlYXA7XG4gICAgfVxuICAgIGlmIChtZnQgPT09IDgpIHtcbiAgICAgICAgcmV0dXJuIGR3eSAtIDI0MiAtIGxlYXA7XG4gICAgfVxuICAgIGlmIChtZnQgPT09IDkpIHtcbiAgICAgICAgcmV0dXJuIGR3eSAtIDI3MiAtIGxlYXA7XG4gICAgfVxuICAgIGlmIChtZnQgPT09IDEwKSB7XG4gICAgICAgIHJldHVybiBkd3kgLSAzMDMgLSBsZWFwO1xuICAgIH1cbiAgICBpZiAobWZ0ID09PSAxMSkge1xuICAgICAgICByZXR1cm4gZHd5IC0gMzMzIC0gbGVhcDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRpbWUnKTtcbn1cbnZhciBIT1VSU19QRVJfREFZID0gMjQ7XG52YXIgTUlOVVRFU19QRVJfSE9VUiA9IDYwO1xudmFyIFNFQ09ORFNfUEVSX01JTlVURSA9IDYwO1xudmFyIE1TX1BFUl9TRUNPTkQgPSAxZTM7XG52YXIgTVNfUEVSX01JTlVURSA9IE1TX1BFUl9TRUNPTkQgKiBTRUNPTkRTX1BFUl9NSU5VVEU7XG52YXIgTVNfUEVSX0hPVVIgPSBNU19QRVJfTUlOVVRFICogTUlOVVRFU19QRVJfSE9VUjtcbmV4cG9ydCBmdW5jdGlvbiBIb3VyRnJvbVRpbWUodCkge1xuICAgIHJldHVybiBtb2QoTWF0aC5mbG9vcih0IC8gTVNfUEVSX0hPVVIpLCBIT1VSU19QRVJfREFZKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBNaW5Gcm9tVGltZSh0KSB7XG4gICAgcmV0dXJuIG1vZChNYXRoLmZsb29yKHQgLyBNU19QRVJfTUlOVVRFKSwgTUlOVVRFU19QRVJfSE9VUik7XG59XG5leHBvcnQgZnVuY3Rpb24gU2VjRnJvbVRpbWUodCkge1xuICAgIHJldHVybiBtb2QoTWF0aC5mbG9vcih0IC8gTVNfUEVSX1NFQ09ORCksIFNFQ09ORFNfUEVSX01JTlVURSk7XG59XG5mdW5jdGlvbiBJc0NhbGxhYmxlKGZuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8qKlxuICogVGhlIGFic3RyYWN0IG9wZXJhdGlvbiBPcmRpbmFyeUhhc0luc3RhbmNlIGltcGxlbWVudHNcbiAqIHRoZSBkZWZhdWx0IGFsZ29yaXRobSBmb3IgZGV0ZXJtaW5pbmcgaWYgYW4gb2JqZWN0IE9cbiAqIGluaGVyaXRzIGZyb20gdGhlIGluc3RhbmNlIG9iamVjdCBpbmhlcml0YW5jZSBwYXRoXG4gKiBwcm92aWRlZCBieSBjb25zdHJ1Y3RvciBDLlxuICogQHBhcmFtIEMgY2xhc3NcbiAqIEBwYXJhbSBPIG9iamVjdFxuICogQHBhcmFtIGludGVybmFsU2xvdHMgaW50ZXJuYWxTbG90c1xuICovXG5leHBvcnQgZnVuY3Rpb24gT3JkaW5hcnlIYXNJbnN0YW5jZShDLCBPLCBpbnRlcm5hbFNsb3RzKSB7XG4gICAgaWYgKCFJc0NhbGxhYmxlKEMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGludGVybmFsU2xvdHMgPT09IG51bGwgfHwgaW50ZXJuYWxTbG90cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW50ZXJuYWxTbG90cy5ib3VuZFRhcmdldEZ1bmN0aW9uKSB7XG4gICAgICAgIHZhciBCQyA9IGludGVybmFsU2xvdHMgPT09IG51bGwgfHwgaW50ZXJuYWxTbG90cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW50ZXJuYWxTbG90cy5ib3VuZFRhcmdldEZ1bmN0aW9uO1xuICAgICAgICByZXR1cm4gTyBpbnN0YW5jZW9mIEJDO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIE8gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIFAgPSBDLnByb3RvdHlwZTtcbiAgICBpZiAodHlwZW9mIFAgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09yZGluYXJ5SGFzSW5zdGFuY2UgY2FsbGVkIG9uIGFuIG9iamVjdCB3aXRoIGFuIGludmFsaWQgcHJvdG90eXBlIHByb3BlcnR5LicpO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mLmNhbGwoUCwgTyk7XG59XG5leHBvcnQgZnVuY3Rpb24gbXNGcm9tVGltZSh0KSB7XG4gICAgcmV0dXJuIG1vZCh0LCBNU19QRVJfU0VDT05EKTtcbn1cbiIsIi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWE0MDIvI3NlYy1iZXN0YXZhaWxhYmxlbG9jYWxlXG4gKiBAcGFyYW0gYXZhaWxhYmxlTG9jYWxlc1xuICogQHBhcmFtIGxvY2FsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gQmVzdEF2YWlsYWJsZUxvY2FsZShhdmFpbGFibGVMb2NhbGVzLCBsb2NhbGUpIHtcbiAgICB2YXIgY2FuZGlkYXRlID0gbG9jYWxlO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGlmIChhdmFpbGFibGVMb2NhbGVzLmhhcyhjYW5kaWRhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb3MgPSBjYW5kaWRhdGUubGFzdEluZGV4T2YoJy0nKTtcbiAgICAgICAgaWYgKCF+cG9zKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3MgPj0gMiAmJiBjYW5kaWRhdGVbcG9zIC0gMl0gPT09ICctJykge1xuICAgICAgICAgICAgcG9zIC09IDI7XG4gICAgICAgIH1cbiAgICAgICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlLnNsaWNlKDAsIHBvcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmVzdEF2YWlsYWJsZUxvY2FsZSB9IGZyb20gJy4vQmVzdEF2YWlsYWJsZUxvY2FsZSc7XG5pbXBvcnQgeyBVTklDT0RFX0VYVEVOU0lPTl9TRVFVRU5DRV9SRUdFWCB9IGZyb20gJy4vdXRpbHMnO1xuLyoqXG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTQwMi8jc2VjLWJlc3RmaXRtYXRjaGVyXG4gKiBAcGFyYW0gYXZhaWxhYmxlTG9jYWxlc1xuICogQHBhcmFtIHJlcXVlc3RlZExvY2FsZXNcbiAqIEBwYXJhbSBnZXREZWZhdWx0TG9jYWxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCZXN0Rml0TWF0Y2hlcihhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzLCBnZXREZWZhdWx0TG9jYWxlKSB7XG4gICAgdmFyIG1pbmltaXplZEF2YWlsYWJsZUxvY2FsZU1hcCA9IHt9O1xuICAgIHZhciBtaW5pbWl6ZWRBdmFpbGFibGVMb2NhbGVzID0gbmV3IFNldCgpO1xuICAgIGF2YWlsYWJsZUxvY2FsZXMuZm9yRWFjaChmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgICAgIHZhciBtaW5pbWl6ZWRMb2NhbGUgPSBuZXcgSW50bC5Mb2NhbGUobG9jYWxlKVxuICAgICAgICAgICAgLm1pbmltaXplKClcbiAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICBtaW5pbWl6ZWRBdmFpbGFibGVMb2NhbGVNYXBbbWluaW1pemVkTG9jYWxlXSA9IGxvY2FsZTtcbiAgICAgICAgbWluaW1pemVkQXZhaWxhYmxlTG9jYWxlcy5hZGQobWluaW1pemVkTG9jYWxlKTtcbiAgICB9KTtcbiAgICB2YXIgZm91bmRMb2NhbGU7XG4gICAgZm9yICh2YXIgX2kgPSAwLCByZXF1ZXN0ZWRMb2NhbGVzXzEgPSByZXF1ZXN0ZWRMb2NhbGVzOyBfaSA8IHJlcXVlc3RlZExvY2FsZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGwgPSByZXF1ZXN0ZWRMb2NhbGVzXzFbX2ldO1xuICAgICAgICBpZiAoZm91bmRMb2NhbGUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub0V4dGVuc2lvbkxvY2FsZSA9IGwucmVwbGFjZShVTklDT0RFX0VYVEVOU0lPTl9TRVFVRU5DRV9SRUdFWCwgJycpO1xuICAgICAgICBpZiAoYXZhaWxhYmxlTG9jYWxlcy5oYXMobm9FeHRlbnNpb25Mb2NhbGUpKSB7XG4gICAgICAgICAgICBmb3VuZExvY2FsZSA9IG5vRXh0ZW5zaW9uTG9jYWxlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbmltaXplZEF2YWlsYWJsZUxvY2FsZXMuaGFzKG5vRXh0ZW5zaW9uTG9jYWxlKSkge1xuICAgICAgICAgICAgZm91bmRMb2NhbGUgPSBtaW5pbWl6ZWRBdmFpbGFibGVMb2NhbGVNYXBbbm9FeHRlbnNpb25Mb2NhbGVdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxvY2FsZSA9IG5ldyBJbnRsLkxvY2FsZShub0V4dGVuc2lvbkxvY2FsZSk7XG4gICAgICAgIHZhciBtYXhpbWl6ZWRSZXF1ZXN0ZWRMb2NhbGUgPSBsb2NhbGUubWF4aW1pemUoKS50b1N0cmluZygpO1xuICAgICAgICB2YXIgbWluaW1pemVkUmVxdWVzdGVkTG9jYWxlID0gbG9jYWxlLm1pbmltaXplKCkudG9TdHJpbmcoKTtcbiAgICAgICAgLy8gQ2hlY2sgbWluaW1pemVkIGxvY2FsZVxuICAgICAgICBpZiAobWluaW1pemVkQXZhaWxhYmxlTG9jYWxlcy5oYXMobWluaW1pemVkUmVxdWVzdGVkTG9jYWxlKSkge1xuICAgICAgICAgICAgZm91bmRMb2NhbGUgPSBtaW5pbWl6ZWRBdmFpbGFibGVMb2NhbGVNYXBbbWluaW1pemVkUmVxdWVzdGVkTG9jYWxlXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvb2t1cCBhbGdvIG9uIG1heGltaXplZCBsb2NhbGVcbiAgICAgICAgZm91bmRMb2NhbGUgPSBCZXN0QXZhaWxhYmxlTG9jYWxlKG1pbmltaXplZEF2YWlsYWJsZUxvY2FsZXMsIG1heGltaXplZFJlcXVlc3RlZExvY2FsZSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGxvY2FsZTogZm91bmRMb2NhbGUgfHwgZ2V0RGVmYXVsdExvY2FsZSgpLFxuICAgIH07XG59XG4iLCIvKipcbiAqIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtNDAyLzcuMC9pbmRleC5odG1sI3NlYy1jYW5vbmljYWxpemVsb2NhbGVsaXN0XG4gKiBAcGFyYW0gbG9jYWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gQ2Fub25pY2FsaXplTG9jYWxlTGlzdChsb2NhbGVzKSB7XG4gICAgLy8gVE9ET1xuICAgIHJldHVybiBJbnRsLmdldENhbm9uaWNhbExvY2FsZXMobG9jYWxlcyk7XG59XG4iLCIvKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtY2Fub25pY2FsaXpldGltZXpvbmVuYW1lXG4gKiBAcGFyYW0gdHpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENhbm9uaWNhbGl6ZVRpbWVab25lTmFtZSh0eiwgX2EpIHtcbiAgICB2YXIgdHpEYXRhID0gX2EudHpEYXRhLCB1cHBlcmNhc2VMaW5rcyA9IF9hLnVwcGVyY2FzZUxpbmtzO1xuICAgIHZhciB1cHBlcmNhc2VkVHogPSB0ei50b1VwcGVyQ2FzZSgpO1xuICAgIHZhciB1cHBlcmNhc2VkWm9uZXMgPSBPYmplY3Qua2V5cyh0ekRhdGEpLnJlZHVjZShmdW5jdGlvbiAoYWxsLCB6KSB7XG4gICAgICAgIGFsbFt6LnRvVXBwZXJDYXNlKCldID0gejtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICB9LCB7fSk7XG4gICAgdmFyIGlhbmFUaW1lWm9uZSA9IHVwcGVyY2FzZUxpbmtzW3VwcGVyY2FzZWRUel0gfHwgdXBwZXJjYXNlZFpvbmVzW3VwcGVyY2FzZWRUel07XG4gICAgaWYgKGlhbmFUaW1lWm9uZSA9PT0gJ0V0Yy9VVEMnIHx8IGlhbmFUaW1lWm9uZSA9PT0gJ0V0Yy9HTVQnKSB7XG4gICAgICAgIHJldHVybiAnVVRDJztcbiAgICB9XG4gICAgcmV0dXJuIGlhbmFUaW1lWm9uZTtcbn1cbiIsImltcG9ydCB7IFRvT2JqZWN0IH0gZnJvbSAnLi8yNjInO1xuLyoqXG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTQwMi8jc2VjLWNvZXJjZW9wdGlvbnN0b29iamVjdFxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb2VyY2VPcHRpb25zVG9PYmplY3Qob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBUb09iamVjdChvcHRpb25zKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBEZWZhdWx0TnVtYmVyT3B0aW9uKHZhbCwgbWluLCBtYXgsIGZhbGxiYWNrKSB7XG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbCA9IE51bWJlcih2YWwpO1xuICAgICAgICBpZiAoaXNOYU4odmFsKSB8fCB2YWwgPCBtaW4gfHwgdmFsID4gbWF4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcih2YWwgKyBcIiBpcyBvdXRzaWRlIG9mIHJhbmdlIFtcIiArIG1pbiArIFwiLCBcIiArIG1heCArIFwiXVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsbGJhY2s7XG59XG4iLCIvKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtZ2V0bnVtYmVyb3B0aW9uXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIHByb3BlcnR5XG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKiBAcGFyYW0gZmFsbGJhY2tcbiAqL1xuaW1wb3J0IHsgRGVmYXVsdE51bWJlck9wdGlvbiB9IGZyb20gJy4vRGVmYXVsdE51bWJlck9wdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gR2V0TnVtYmVyT3B0aW9uKG9wdGlvbnMsIHByb3BlcnR5LCBtaW5pbXVtLCBtYXhpbXVtLCBmYWxsYmFjaykge1xuICAgIHZhciB2YWwgPSBvcHRpb25zW3Byb3BlcnR5XTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcmV0dXJuIERlZmF1bHROdW1iZXJPcHRpb24odmFsLCBtaW5pbXVtLCBtYXhpbXVtLCBmYWxsYmFjayk7XG59XG4iLCJpbXBvcnQgeyBUb1N0cmluZyB9IGZyb20gJy4vMjYyJztcbi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWE0MDIvI3NlYy1nZXRvcHRpb25cbiAqIEBwYXJhbSBvcHRzXG4gKiBAcGFyYW0gcHJvcFxuICogQHBhcmFtIHR5cGVcbiAqIEBwYXJhbSB2YWx1ZXNcbiAqIEBwYXJhbSBmYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gR2V0T3B0aW9uKG9wdHMsIHByb3AsIHR5cGUsIHZhbHVlcywgZmFsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIG9wdHMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICB9XG4gICAgdmFyIHZhbHVlID0gb3B0c1twcm9wXTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZSAhPT0gJ2Jvb2xlYW4nICYmIHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHR5cGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSBUb1N0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlcyAhPT0gdW5kZWZpbmVkICYmICF2YWx1ZXMuZmlsdGVyKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbCA9PSB2YWx1ZTsgfSkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcih2YWx1ZSArIFwiIGlzIG5vdCB3aXRoaW4gXCIgKyB2YWx1ZXMuam9pbignLCAnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsbGJhY2s7XG59XG4iLCIvKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtZ2V0b3B0aW9uc29iamVjdFxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBHZXRPcHRpb25zT2JqZWN0KG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG59XG4iLCIvKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyN0YWJsZS1zYW5jdGlvbmVkLXNpbXBsZS11bml0LWlkZW50aWZpZXJzXG4gKi9cbmV4cG9ydCB2YXIgU0FOQ1RJT05FRF9VTklUUyA9IFtcbiAgICAnYW5nbGUtZGVncmVlJyxcbiAgICAnYXJlYS1hY3JlJyxcbiAgICAnYXJlYS1oZWN0YXJlJyxcbiAgICAnY29uY2VudHItcGVyY2VudCcsXG4gICAgJ2RpZ2l0YWwtYml0JyxcbiAgICAnZGlnaXRhbC1ieXRlJyxcbiAgICAnZGlnaXRhbC1naWdhYml0JyxcbiAgICAnZGlnaXRhbC1naWdhYnl0ZScsXG4gICAgJ2RpZ2l0YWwta2lsb2JpdCcsXG4gICAgJ2RpZ2l0YWwta2lsb2J5dGUnLFxuICAgICdkaWdpdGFsLW1lZ2FiaXQnLFxuICAgICdkaWdpdGFsLW1lZ2FieXRlJyxcbiAgICAnZGlnaXRhbC1wZXRhYnl0ZScsXG4gICAgJ2RpZ2l0YWwtdGVyYWJpdCcsXG4gICAgJ2RpZ2l0YWwtdGVyYWJ5dGUnLFxuICAgICdkdXJhdGlvbi1kYXknLFxuICAgICdkdXJhdGlvbi1ob3VyJyxcbiAgICAnZHVyYXRpb24tbWlsbGlzZWNvbmQnLFxuICAgICdkdXJhdGlvbi1taW51dGUnLFxuICAgICdkdXJhdGlvbi1tb250aCcsXG4gICAgJ2R1cmF0aW9uLXNlY29uZCcsXG4gICAgJ2R1cmF0aW9uLXdlZWsnLFxuICAgICdkdXJhdGlvbi15ZWFyJyxcbiAgICAnbGVuZ3RoLWNlbnRpbWV0ZXInLFxuICAgICdsZW5ndGgtZm9vdCcsXG4gICAgJ2xlbmd0aC1pbmNoJyxcbiAgICAnbGVuZ3RoLWtpbG9tZXRlcicsXG4gICAgJ2xlbmd0aC1tZXRlcicsXG4gICAgJ2xlbmd0aC1taWxlLXNjYW5kaW5hdmlhbicsXG4gICAgJ2xlbmd0aC1taWxlJyxcbiAgICAnbGVuZ3RoLW1pbGxpbWV0ZXInLFxuICAgICdsZW5ndGgteWFyZCcsXG4gICAgJ21hc3MtZ3JhbScsXG4gICAgJ21hc3Mta2lsb2dyYW0nLFxuICAgICdtYXNzLW91bmNlJyxcbiAgICAnbWFzcy1wb3VuZCcsXG4gICAgJ21hc3Mtc3RvbmUnLFxuICAgICd0ZW1wZXJhdHVyZS1jZWxzaXVzJyxcbiAgICAndGVtcGVyYXR1cmUtZmFocmVuaGVpdCcsXG4gICAgJ3ZvbHVtZS1mbHVpZC1vdW5jZScsXG4gICAgJ3ZvbHVtZS1nYWxsb24nLFxuICAgICd2b2x1bWUtbGl0ZXInLFxuICAgICd2b2x1bWUtbWlsbGlsaXRlcicsXG5dO1xuLy8gSW4gQ0xEUiwgdGhlIHVuaXQgbmFtZSBhbHdheXMgZm9sbG93cyB0aGUgZm9ybSBgbmFtZXNwYWNlLXVuaXRgIHBhdHRlcm4uXG4vLyBGb3IgZXhhbXBsZTogYGRpZ2l0YWwtYml0YCBpbnN0ZWFkIG9mIGBiaXRgLiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgdGhlIG5hbWVzcGFjZSBwcmVmaXguXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVW5pdE5hbWVzcGFjZSh1bml0KSB7XG4gICAgcmV0dXJuIHVuaXQuc2xpY2UodW5pdC5pbmRleE9mKCctJykgKyAxKTtcbn1cbi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWE0MDIvI3RhYmxlLXNhbmN0aW9uZWQtc2ltcGxlLXVuaXQtaWRlbnRpZmllcnNcbiAqL1xuZXhwb3J0IHZhciBTSU1QTEVfVU5JVFMgPSBTQU5DVElPTkVEX1VOSVRTLm1hcChyZW1vdmVVbml0TmFtZXNwYWNlKTtcbi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWE0MDIvI3NlYy1pc3NhbmN0aW9uZWRzaW1wbGV1bml0aWRlbnRpZmllclxuICovXG5leHBvcnQgZnVuY3Rpb24gSXNTYW5jdGlvbmVkU2ltcGxlVW5pdElkZW50aWZpZXIodW5pdElkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gU0lNUExFX1VOSVRTLmluZGV4T2YodW5pdElkZW50aWZpZXIpID4gLTE7XG59XG4iLCIvKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtaXN2YWxpZHRpbWV6b25lbmFtZVxuICogQHBhcmFtIHR6XG4gKiBAcGFyYW0gaW1wbERldGFpbHMgaW1wbGVtZW50YXRpb24gZGV0YWlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gSXNWYWxpZFRpbWVab25lTmFtZSh0eiwgX2EpIHtcbiAgICB2YXIgdHpEYXRhID0gX2EudHpEYXRhLCB1cHBlcmNhc2VMaW5rcyA9IF9hLnVwcGVyY2FzZUxpbmtzO1xuICAgIHZhciB1cHBlcmNhc2VkVHogPSB0ei50b1VwcGVyQ2FzZSgpO1xuICAgIHZhciB6b25lTmFtZXMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIGxpbmtOYW1lcyA9IG5ldyBTZXQoKTtcbiAgICBPYmplY3Qua2V5cyh0ekRhdGEpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHopIHsgcmV0dXJuIHoudG9VcHBlckNhc2UoKTsgfSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHopIHsgcmV0dXJuIHpvbmVOYW1lcy5hZGQoeik7IH0pO1xuICAgIE9iamVjdC5rZXlzKHVwcGVyY2FzZUxpbmtzKS5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rTmFtZSkge1xuICAgICAgICBsaW5rTmFtZXMuYWRkKGxpbmtOYW1lLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICB6b25lTmFtZXMuYWRkKHVwcGVyY2FzZUxpbmtzW2xpbmtOYW1lXS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gem9uZU5hbWVzLmhhcyh1cHBlcmNhc2VkVHopIHx8IGxpbmtOYW1lcy5oYXModXBwZXJjYXNlZFR6KTtcbn1cbiIsIi8qKlxuICogVGhpcyBmb2xsb3dzIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtY2FzZS1zZW5zaXRpdml0eS1hbmQtY2FzZS1tYXBwaW5nXG4gKiBAcGFyYW0gc3RyIHN0cmluZyB0byBjb252ZXJ0XG4gKi9cbmZ1bmN0aW9uIHRvVXBwZXJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdKS9nLCBmdW5jdGlvbiAoXywgYykgeyByZXR1cm4gYy50b1VwcGVyQ2FzZSgpOyB9KTtcbn1cbnZhciBOT1RfQV9aX1JFR0VYID0gL1teQS1aXS87XG4vKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtaXN3ZWxsZm9ybWVkY3VycmVuY3ljb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJc1dlbGxGb3JtZWRDdXJyZW5jeUNvZGUoY3VycmVuY3kpIHtcbiAgICBjdXJyZW5jeSA9IHRvVXBwZXJDYXNlKGN1cnJlbmN5KTtcbiAgICBpZiAoY3VycmVuY3kubGVuZ3RoICE9PSAzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKE5PVF9BX1pfUkVHRVgudGVzdChjdXJyZW5jeSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IElzU2FuY3Rpb25lZFNpbXBsZVVuaXRJZGVudGlmaWVyIH0gZnJvbSAnLi9Jc1NhbmN0aW9uZWRTaW1wbGVVbml0SWRlbnRpZmllcic7XG4vKipcbiAqIFRoaXMgZm9sbG93cyBodHRwczovL3RjMzkuZXMvZWNtYTQwMi8jc2VjLWNhc2Utc2Vuc2l0aXZpdHktYW5kLWNhc2UtbWFwcGluZ1xuICogQHBhcmFtIHN0ciBzdHJpbmcgdG8gY29udmVydFxuICovXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMudG9Mb3dlckNhc2UoKTsgfSk7XG59XG4vKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtaXN3ZWxsZm9ybWVkdW5pdGlkZW50aWZpZXJcbiAqIEBwYXJhbSB1bml0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJc1dlbGxGb3JtZWRVbml0SWRlbnRpZmllcih1bml0KSB7XG4gICAgdW5pdCA9IHRvTG93ZXJDYXNlKHVuaXQpO1xuICAgIGlmIChJc1NhbmN0aW9uZWRTaW1wbGVVbml0SWRlbnRpZmllcih1bml0KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHVuaXRzID0gdW5pdC5zcGxpdCgnLXBlci0nKTtcbiAgICBpZiAodW5pdHMubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIG51bWVyYXRvciA9IHVuaXRzWzBdLCBkZW5vbWluYXRvciA9IHVuaXRzWzFdO1xuICAgIGlmICghSXNTYW5jdGlvbmVkU2ltcGxlVW5pdElkZW50aWZpZXIobnVtZXJhdG9yKSB8fFxuICAgICAgICAhSXNTYW5jdGlvbmVkU2ltcGxlVW5pdElkZW50aWZpZXIoZGVub21pbmF0b3IpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBVTklDT0RFX0VYVEVOU0lPTl9TRVFVRU5DRV9SRUdFWCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgQmVzdEF2YWlsYWJsZUxvY2FsZSB9IGZyb20gJy4vQmVzdEF2YWlsYWJsZUxvY2FsZSc7XG4vKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtbG9va3VwbWF0Y2hlclxuICogQHBhcmFtIGF2YWlsYWJsZUxvY2FsZXNcbiAqIEBwYXJhbSByZXF1ZXN0ZWRMb2NhbGVzXG4gKiBAcGFyYW0gZ2V0RGVmYXVsdExvY2FsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gTG9va3VwTWF0Y2hlcihhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzLCBnZXREZWZhdWx0TG9jYWxlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHsgbG9jYWxlOiAnJyB9O1xuICAgIGZvciAodmFyIF9pID0gMCwgcmVxdWVzdGVkTG9jYWxlc18xID0gcmVxdWVzdGVkTG9jYWxlczsgX2kgPCByZXF1ZXN0ZWRMb2NhbGVzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBsb2NhbGUgPSByZXF1ZXN0ZWRMb2NhbGVzXzFbX2ldO1xuICAgICAgICB2YXIgbm9FeHRlbnNpb25Mb2NhbGUgPSBsb2NhbGUucmVwbGFjZShVTklDT0RFX0VYVEVOU0lPTl9TRVFVRU5DRV9SRUdFWCwgJycpO1xuICAgICAgICB2YXIgYXZhaWxhYmxlTG9jYWxlID0gQmVzdEF2YWlsYWJsZUxvY2FsZShhdmFpbGFibGVMb2NhbGVzLCBub0V4dGVuc2lvbkxvY2FsZSk7XG4gICAgICAgIGlmIChhdmFpbGFibGVMb2NhbGUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5sb2NhbGUgPSBhdmFpbGFibGVMb2NhbGU7XG4gICAgICAgICAgICBpZiAobG9jYWxlICE9PSBub0V4dGVuc2lvbkxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5leHRlbnNpb24gPSBsb2NhbGUuc2xpY2Uobm9FeHRlbnNpb25Mb2NhbGUubGVuZ3RoICsgMSwgbG9jYWxlLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sb2NhbGUgPSBnZXREZWZhdWx0TG9jYWxlKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IFVOSUNPREVfRVhURU5TSU9OX1NFUVVFTkNFX1JFR0VYIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBCZXN0QXZhaWxhYmxlTG9jYWxlIH0gZnJvbSAnLi9CZXN0QXZhaWxhYmxlTG9jYWxlJztcbi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWE0MDIvI3NlYy1sb29rdXBzdXBwb3J0ZWRsb2NhbGVzXG4gKiBAcGFyYW0gYXZhaWxhYmxlTG9jYWxlc1xuICogQHBhcmFtIHJlcXVlc3RlZExvY2FsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExvb2t1cFN1cHBvcnRlZExvY2FsZXMoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcykge1xuICAgIHZhciBzdWJzZXQgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIHJlcXVlc3RlZExvY2FsZXNfMSA9IHJlcXVlc3RlZExvY2FsZXM7IF9pIDwgcmVxdWVzdGVkTG9jYWxlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgbG9jYWxlID0gcmVxdWVzdGVkTG9jYWxlc18xW19pXTtcbiAgICAgICAgdmFyIG5vRXh0ZW5zaW9uTG9jYWxlID0gbG9jYWxlLnJlcGxhY2UoVU5JQ09ERV9FWFRFTlNJT05fU0VRVUVOQ0VfUkVHRVgsICcnKTtcbiAgICAgICAgdmFyIGF2YWlsYWJsZUxvY2FsZSA9IEJlc3RBdmFpbGFibGVMb2NhbGUoYXZhaWxhYmxlTG9jYWxlcywgbm9FeHRlbnNpb25Mb2NhbGUpO1xuICAgICAgICBpZiAoYXZhaWxhYmxlTG9jYWxlKSB7XG4gICAgICAgICAgICBzdWJzZXQucHVzaChhdmFpbGFibGVMb2NhbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdWJzZXQ7XG59XG4iLCJpbXBvcnQgeyBnZXRNYWduaXR1ZGUgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBDb21wdXRlRXhwb25lbnRGb3JNYWduaXR1ZGUgfSBmcm9tICcuL0NvbXB1dGVFeHBvbmVudEZvck1hZ25pdHVkZSc7XG5pbXBvcnQgeyBGb3JtYXROdW1lcmljVG9TdHJpbmcgfSBmcm9tICcuL0Zvcm1hdE51bWVyaWNUb1N0cmluZyc7XG4vKipcbiAqIFRoZSBhYnN0cmFjdCBvcGVyYXRpb24gQ29tcHV0ZUV4cG9uZW50IGNvbXB1dGVzIGFuIGV4cG9uZW50IChwb3dlciBvZiB0ZW4pIGJ5IHdoaWNoIHRvIHNjYWxlIHhcbiAqIGFjY29yZGluZyB0byB0aGUgbnVtYmVyIGZvcm1hdHRpbmcgc2V0dGluZ3MuIEl0IGhhbmRsZXMgY2FzZXMgc3VjaCBhcyA5OTkgcm91bmRpbmcgdXAgdG8gMTAwMCxcbiAqIHJlcXVpcmluZyBhIGRpZmZlcmVudCBleHBvbmVudC5cbiAqXG4gKiBOT1QgSU4gU1BFQzogaXQgcmV0dXJucyBbZXhwb25lbnQsIG1hZ25pdHVkZV0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb21wdXRlRXhwb25lbnQobnVtYmVyRm9ybWF0LCB4LCBfYSkge1xuICAgIHZhciBnZXRJbnRlcm5hbFNsb3RzID0gX2EuZ2V0SW50ZXJuYWxTbG90cztcbiAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gWzAsIDBdO1xuICAgIH1cbiAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgeCA9IC14O1xuICAgIH1cbiAgICB2YXIgbWFnbml0dWRlID0gZ2V0TWFnbml0dWRlKHgpO1xuICAgIHZhciBleHBvbmVudCA9IENvbXB1dGVFeHBvbmVudEZvck1hZ25pdHVkZShudW1iZXJGb3JtYXQsIG1hZ25pdHVkZSwge1xuICAgICAgICBnZXRJbnRlcm5hbFNsb3RzOiBnZXRJbnRlcm5hbFNsb3RzLFxuICAgIH0pO1xuICAgIC8vIFByZXNlcnZlIG1vcmUgcHJlY2lzaW9uIGJ5IGRvaW5nIG11bHRpcGxpY2F0aW9uIHdoZW4gZXhwb25lbnQgaXMgbmVnYXRpdmUuXG4gICAgeCA9IGV4cG9uZW50IDwgMCA/IHggKiBNYXRoLnBvdygxMCwgLWV4cG9uZW50KSA6IHggLyBNYXRoLnBvdygxMCwgZXhwb25lbnQpO1xuICAgIHZhciBmb3JtYXROdW1iZXJSZXN1bHQgPSBGb3JtYXROdW1lcmljVG9TdHJpbmcoZ2V0SW50ZXJuYWxTbG90cyhudW1iZXJGb3JtYXQpLCB4KTtcbiAgICBpZiAoZm9ybWF0TnVtYmVyUmVzdWx0LnJvdW5kZWROdW1iZXIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtleHBvbmVudCwgbWFnbml0dWRlXTtcbiAgICB9XG4gICAgdmFyIG5ld01hZ25pdHVkZSA9IGdldE1hZ25pdHVkZShmb3JtYXROdW1iZXJSZXN1bHQucm91bmRlZE51bWJlcik7XG4gICAgaWYgKG5ld01hZ25pdHVkZSA9PT0gbWFnbml0dWRlIC0gZXhwb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIFtleHBvbmVudCwgbWFnbml0dWRlXTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgICAgQ29tcHV0ZUV4cG9uZW50Rm9yTWFnbml0dWRlKG51bWJlckZvcm1hdCwgbWFnbml0dWRlICsgMSwge1xuICAgICAgICAgICAgZ2V0SW50ZXJuYWxTbG90czogZ2V0SW50ZXJuYWxTbG90cyxcbiAgICAgICAgfSksXG4gICAgICAgIG1hZ25pdHVkZSArIDEsXG4gICAgXTtcbn1cbiIsIi8qKlxuICogVGhlIGFic3RyYWN0IG9wZXJhdGlvbiBDb21wdXRlRXhwb25lbnRGb3JNYWduaXR1ZGUgY29tcHV0ZXMgYW4gZXhwb25lbnQgYnkgd2hpY2ggdG8gc2NhbGUgYVxuICogbnVtYmVyIG9mIHRoZSBnaXZlbiBtYWduaXR1ZGUgKHBvd2VyIG9mIHRlbiBvZiB0aGUgbW9zdCBzaWduaWZpY2FudCBkaWdpdCkgYWNjb3JkaW5nIHRvIHRoZVxuICogbG9jYWxlIGFuZCB0aGUgZGVzaXJlZCBub3RhdGlvbiAoc2NpZW50aWZpYywgZW5naW5lZXJpbmcsIG9yIGNvbXBhY3QpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gQ29tcHV0ZUV4cG9uZW50Rm9yTWFnbml0dWRlKG51bWJlckZvcm1hdCwgbWFnbml0dWRlLCBfYSkge1xuICAgIHZhciBnZXRJbnRlcm5hbFNsb3RzID0gX2EuZ2V0SW50ZXJuYWxTbG90cztcbiAgICB2YXIgaW50ZXJuYWxTbG90cyA9IGdldEludGVybmFsU2xvdHMobnVtYmVyRm9ybWF0KTtcbiAgICB2YXIgbm90YXRpb24gPSBpbnRlcm5hbFNsb3RzLm5vdGF0aW9uLCBkYXRhTG9jYWxlRGF0YSA9IGludGVybmFsU2xvdHMuZGF0YUxvY2FsZURhdGEsIG51bWJlcmluZ1N5c3RlbSA9IGludGVybmFsU2xvdHMubnVtYmVyaW5nU3lzdGVtO1xuICAgIHN3aXRjaCAobm90YXRpb24pIHtcbiAgICAgICAgY2FzZSAnc3RhbmRhcmQnOlxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIGNhc2UgJ3NjaWVudGlmaWMnOlxuICAgICAgICAgICAgcmV0dXJuIG1hZ25pdHVkZTtcbiAgICAgICAgY2FzZSAnZW5naW5lZXJpbmcnOlxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobWFnbml0dWRlIC8gMykgKiAzO1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAvLyBMZXQgZXhwb25lbnQgYmUgYW4gaW1wbGVtZW50YXRpb24tIGFuZCBsb2NhbGUtZGVwZW5kZW50IChJTEQpIGludGVnZXIgYnkgd2hpY2ggdG8gc2NhbGUgYVxuICAgICAgICAgICAgLy8gbnVtYmVyIG9mIHRoZSBnaXZlbiBtYWduaXR1ZGUgaW4gY29tcGFjdCBub3RhdGlvbiBmb3IgdGhlIGN1cnJlbnQgbG9jYWxlLlxuICAgICAgICAgICAgdmFyIGNvbXBhY3REaXNwbGF5ID0gaW50ZXJuYWxTbG90cy5jb21wYWN0RGlzcGxheSwgc3R5bGUgPSBpbnRlcm5hbFNsb3RzLnN0eWxlLCBjdXJyZW5jeURpc3BsYXkgPSBpbnRlcm5hbFNsb3RzLmN1cnJlbmN5RGlzcGxheTtcbiAgICAgICAgICAgIHZhciB0aHJlc2hvbGRNYXAgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoc3R5bGUgPT09ICdjdXJyZW5jeScgJiYgY3VycmVuY3lEaXNwbGF5ICE9PSAnbmFtZScpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3kgPSBkYXRhTG9jYWxlRGF0YS5udW1iZXJzLmN1cnJlbmN5W251bWJlcmluZ1N5c3RlbV0gfHxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxvY2FsZURhdGEubnVtYmVycy5jdXJyZW5jeVtkYXRhTG9jYWxlRGF0YS5udW1iZXJzLm51WzBdXTtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGRNYXAgPSBjdXJyZW5jeS5zaG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkZWNpbWFsID0gZGF0YUxvY2FsZURhdGEubnVtYmVycy5kZWNpbWFsW251bWJlcmluZ1N5c3RlbV0gfHxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUxvY2FsZURhdGEubnVtYmVycy5kZWNpbWFsW2RhdGFMb2NhbGVEYXRhLm51bWJlcnMubnVbMF1dO1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZE1hcCA9IGNvbXBhY3REaXNwbGF5ID09PSAnbG9uZycgPyBkZWNpbWFsLmxvbmcgOiBkZWNpbWFsLnNob3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aHJlc2hvbGRNYXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBudW0gPSBTdHJpbmcoTWF0aC5wb3coMTAsIG1hZ25pdHVkZSkpO1xuICAgICAgICAgICAgdmFyIHRocmVzaG9sZHMgPSBPYmplY3Qua2V5cyh0aHJlc2hvbGRNYXApOyAvLyBUT0RPOiB0aGlzIGNhbiBiZSBwcmUtcHJvY2Vzc2VkXG4gICAgICAgICAgICBpZiAobnVtIDwgdGhyZXNob2xkc1swXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG51bSA+IHRocmVzaG9sZHNbdGhyZXNob2xkcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aHJlc2hvbGRzW3RocmVzaG9sZHMubGVuZ3RoIC0gMV0ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpID0gdGhyZXNob2xkcy5pbmRleE9mKG51bSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL3VuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LW51bWJlcnMuaHRtbCNDb21wYWN0X051bWJlcl9Gb3JtYXRzXG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGlmIHRoZSBwYXR0ZXJuIGlzIHByZWNpc2VseSBgMGAuXG4gICAgICAgICAgICB2YXIgbWFnbml0dWRlS2V5ID0gdGhyZXNob2xkc1tpXTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdG8gaGFuZGxlIHBsdXJhbCBoZXJlP1xuICAgICAgICAgICAgdmFyIGNvbXBhY3RQYXR0ZXJuID0gdGhyZXNob2xkTWFwW21hZ25pdHVkZUtleV0ub3RoZXI7XG4gICAgICAgICAgICBpZiAoY29tcGFjdFBhdHRlcm4gPT09ICcwJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRXhhbXBsZTogaW4gemgtVFcsIGAxMDAwMDAwMGAgbWFwcyB0byBgMDAwMOiQrGAuIFNvIHdlIG5lZWQgdG8gcmV0dXJuIDggLSA0ID0gNCBoZXJlLlxuICAgICAgICAgICAgcmV0dXJuIChtYWduaXR1ZGVLZXkubGVuZ3RoIC1cbiAgICAgICAgICAgICAgICB0aHJlc2hvbGRNYXBbbWFnbml0dWRlS2V5XS5vdGhlci5tYXRjaCgvMCsvKVswXS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSGFzT3duUHJvcGVydHkgfSBmcm9tICcuLi8yNjInO1xuLyoqXG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTQwMi8jc2VjLWN1cnJlbmN5ZGlnaXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDdXJyZW5jeURpZ2l0cyhjLCBfYSkge1xuICAgIHZhciBjdXJyZW5jeURpZ2l0c0RhdGEgPSBfYS5jdXJyZW5jeURpZ2l0c0RhdGE7XG4gICAgcmV0dXJuIEhhc093blByb3BlcnR5KGN1cnJlbmN5RGlnaXRzRGF0YSwgYylcbiAgICAgICAgPyBjdXJyZW5jeURpZ2l0c0RhdGFbY11cbiAgICAgICAgOiAyO1xufVxuIiwiaW1wb3J0IHsgUGFydGl0aW9uTnVtYmVyUGF0dGVybiB9IGZyb20gJy4vUGFydGl0aW9uTnVtYmVyUGF0dGVybic7XG5pbXBvcnQgeyBBcnJheUNyZWF0ZSB9IGZyb20gJy4uLzI2Mic7XG5leHBvcnQgZnVuY3Rpb24gRm9ybWF0TnVtZXJpY1RvUGFydHMobmYsIHgsIGltcGxEZXRhaWxzKSB7XG4gICAgdmFyIHBhcnRzID0gUGFydGl0aW9uTnVtYmVyUGF0dGVybihuZiwgeCwgaW1wbERldGFpbHMpO1xuICAgIHZhciByZXN1bHQgPSBBcnJheUNyZWF0ZSgwKTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIHBhcnRzXzEgPSBwYXJ0czsgX2kgPCBwYXJ0c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgcGFydCA9IHBhcnRzXzFbX2ldO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiBwYXJ0LnR5cGUsXG4gICAgICAgICAgICB2YWx1ZTogcGFydC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyBTYW1lVmFsdWUgfSBmcm9tICcuLi8yNjInO1xuaW1wb3J0IHsgVG9SYXdQcmVjaXNpb24gfSBmcm9tICcuL1RvUmF3UHJlY2lzaW9uJztcbmltcG9ydCB7IHJlcGVhdCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFRvUmF3Rml4ZWQgfSBmcm9tICcuL1RvUmF3Rml4ZWQnO1xuLyoqXG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTQwMi8jc2VjLWZvcm1hdG51bWJlcnN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gRm9ybWF0TnVtZXJpY1RvU3RyaW5nKGludGxPYmplY3QsIHgpIHtcbiAgICB2YXIgaXNOZWdhdGl2ZSA9IHggPCAwIHx8IFNhbWVWYWx1ZSh4LCAtMCk7XG4gICAgaWYgKGlzTmVnYXRpdmUpIHtcbiAgICAgICAgeCA9IC14O1xuICAgIH1cbiAgICB2YXIgcmVzdWx0O1xuICAgIHZhciByb3VybmRpbmdUeXBlID0gaW50bE9iamVjdC5yb3VuZGluZ1R5cGU7XG4gICAgc3dpdGNoIChyb3VybmRpbmdUeXBlKSB7XG4gICAgICAgIGNhc2UgJ3NpZ25pZmljYW50RGlnaXRzJzpcbiAgICAgICAgICAgIHJlc3VsdCA9IFRvUmF3UHJlY2lzaW9uKHgsIGludGxPYmplY3QubWluaW11bVNpZ25pZmljYW50RGlnaXRzLCBpbnRsT2JqZWN0Lm1heGltdW1TaWduaWZpY2FudERpZ2l0cyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZnJhY3Rpb25EaWdpdHMnOlxuICAgICAgICAgICAgcmVzdWx0ID0gVG9SYXdGaXhlZCh4LCBpbnRsT2JqZWN0Lm1pbmltdW1GcmFjdGlvbkRpZ2l0cywgaW50bE9iamVjdC5tYXhpbXVtRnJhY3Rpb25EaWdpdHMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXN1bHQgPSBUb1Jhd1ByZWNpc2lvbih4LCAxLCAyKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaW50ZWdlckRpZ2l0c0NvdW50ID4gMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFRvUmF3Rml4ZWQoeCwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgeCA9IHJlc3VsdC5yb3VuZGVkTnVtYmVyO1xuICAgIHZhciBzdHJpbmcgPSByZXN1bHQuZm9ybWF0dGVkU3RyaW5nO1xuICAgIHZhciBpbnQgPSByZXN1bHQuaW50ZWdlckRpZ2l0c0NvdW50O1xuICAgIHZhciBtaW5JbnRlZ2VyID0gaW50bE9iamVjdC5taW5pbXVtSW50ZWdlckRpZ2l0cztcbiAgICBpZiAoaW50IDwgbWluSW50ZWdlcikge1xuICAgICAgICB2YXIgZm9yd2FyZFplcm9zID0gcmVwZWF0KCcwJywgbWluSW50ZWdlciAtIGludCk7XG4gICAgICAgIHN0cmluZyA9IGZvcndhcmRaZXJvcyArIHN0cmluZztcbiAgICB9XG4gICAgaWYgKGlzTmVnYXRpdmUpIHtcbiAgICAgICAgeCA9IC14O1xuICAgIH1cbiAgICByZXR1cm4geyByb3VuZGVkTnVtYmVyOiB4LCBmb3JtYXR0ZWRTdHJpbmc6IHN0cmluZyB9O1xufVxuIiwiaW1wb3J0IHsgQ2Fub25pY2FsaXplTG9jYWxlTGlzdCB9IGZyb20gJy4uL0Nhbm9uaWNhbGl6ZUxvY2FsZUxpc3QnO1xuaW1wb3J0IHsgR2V0T3B0aW9uIH0gZnJvbSAnLi4vR2V0T3B0aW9uJztcbmltcG9ydCB7IFJlc29sdmVMb2NhbGUgfSBmcm9tICcuLi9SZXNvbHZlTG9jYWxlJztcbmltcG9ydCB7IFNldE51bWJlckZvcm1hdFVuaXRPcHRpb25zIH0gZnJvbSAnLi9TZXROdW1iZXJGb3JtYXRVbml0T3B0aW9ucyc7XG5pbXBvcnQgeyBDdXJyZW5jeURpZ2l0cyB9IGZyb20gJy4vQ3VycmVuY3lEaWdpdHMnO1xuaW1wb3J0IHsgU2V0TnVtYmVyRm9ybWF0RGlnaXRPcHRpb25zIH0gZnJvbSAnLi9TZXROdW1iZXJGb3JtYXREaWdpdE9wdGlvbnMnO1xuaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29lcmNlT3B0aW9uc1RvT2JqZWN0IH0gZnJvbSAnLi4vQ29lcmNlT3B0aW9uc1RvT2JqZWN0Jztcbi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWE0MDIvI3NlYy1pbml0aWFsaXplbnVtYmVyZm9ybWF0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJbml0aWFsaXplTnVtYmVyRm9ybWF0KG5mLCBsb2NhbGVzLCBvcHRzLCBfYSkge1xuICAgIHZhciBnZXRJbnRlcm5hbFNsb3RzID0gX2EuZ2V0SW50ZXJuYWxTbG90cywgbG9jYWxlRGF0YSA9IF9hLmxvY2FsZURhdGEsIGF2YWlsYWJsZUxvY2FsZXMgPSBfYS5hdmFpbGFibGVMb2NhbGVzLCBudW1iZXJpbmdTeXN0ZW1OYW1lcyA9IF9hLm51bWJlcmluZ1N5c3RlbU5hbWVzLCBnZXREZWZhdWx0TG9jYWxlID0gX2EuZ2V0RGVmYXVsdExvY2FsZSwgY3VycmVuY3lEaWdpdHNEYXRhID0gX2EuY3VycmVuY3lEaWdpdHNEYXRhO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB2YXIgcmVxdWVzdGVkTG9jYWxlcyA9IENhbm9uaWNhbGl6ZUxvY2FsZUxpc3QobG9jYWxlcyk7XG4gICAgdmFyIG9wdGlvbnMgPSBDb2VyY2VPcHRpb25zVG9PYmplY3Qob3B0cyk7XG4gICAgdmFyIG9wdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIG1hdGNoZXIgPSBHZXRPcHRpb24ob3B0aW9ucywgJ2xvY2FsZU1hdGNoZXInLCAnc3RyaW5nJywgWydsb29rdXAnLCAnYmVzdCBmaXQnXSwgJ2Jlc3QgZml0Jyk7XG4gICAgb3B0LmxvY2FsZU1hdGNoZXIgPSBtYXRjaGVyO1xuICAgIHZhciBudW1iZXJpbmdTeXN0ZW0gPSBHZXRPcHRpb24ob3B0aW9ucywgJ251bWJlcmluZ1N5c3RlbScsICdzdHJpbmcnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgaWYgKG51bWJlcmluZ1N5c3RlbSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbU5hbWVzLmluZGV4T2YobnVtYmVyaW5nU3lzdGVtKSA8IDApIHtcbiAgICAgICAgLy8gOC5hLiBJZiBudW1iZXJpbmdTeXN0ZW0gZG9lcyBub3QgbWF0Y2ggdGhlIFVuaWNvZGUgTG9jYWxlIElkZW50aWZpZXIgdHlwZSBub250ZXJtaW5hbCxcbiAgICAgICAgLy8gdGhyb3cgYSBSYW5nZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihcIkludmFsaWQgbnVtYmVyaW5nU3lzdGVtczogXCIgKyBudW1iZXJpbmdTeXN0ZW0pO1xuICAgIH1cbiAgICBvcHQubnUgPSBudW1iZXJpbmdTeXN0ZW07XG4gICAgdmFyIHIgPSBSZXNvbHZlTG9jYWxlKGF2YWlsYWJsZUxvY2FsZXMsIHJlcXVlc3RlZExvY2FsZXMsIG9wdCwgXG4gICAgLy8gW1tSZWxldmFudEV4dGVuc2lvbktleXNdXSBzbG90LCB3aGljaCBpcyBhIGNvbnN0YW50XG4gICAgWydudSddLCBsb2NhbGVEYXRhLCBnZXREZWZhdWx0TG9jYWxlKTtcbiAgICB2YXIgZGF0YUxvY2FsZURhdGEgPSBsb2NhbGVEYXRhW3IuZGF0YUxvY2FsZV07XG4gICAgaW52YXJpYW50KCEhZGF0YUxvY2FsZURhdGEsIFwiTWlzc2luZyBsb2NhbGUgZGF0YSBmb3IgXCIgKyByLmRhdGFMb2NhbGUpO1xuICAgIHZhciBpbnRlcm5hbFNsb3RzID0gZ2V0SW50ZXJuYWxTbG90cyhuZik7XG4gICAgaW50ZXJuYWxTbG90cy5sb2NhbGUgPSByLmxvY2FsZTtcbiAgICBpbnRlcm5hbFNsb3RzLmRhdGFMb2NhbGUgPSByLmRhdGFMb2NhbGU7XG4gICAgaW50ZXJuYWxTbG90cy5udW1iZXJpbmdTeXN0ZW0gPSByLm51O1xuICAgIGludGVybmFsU2xvdHMuZGF0YUxvY2FsZURhdGEgPSBkYXRhTG9jYWxlRGF0YTtcbiAgICBTZXROdW1iZXJGb3JtYXRVbml0T3B0aW9ucyhuZiwgb3B0aW9ucywgeyBnZXRJbnRlcm5hbFNsb3RzOiBnZXRJbnRlcm5hbFNsb3RzIH0pO1xuICAgIHZhciBzdHlsZSA9IGludGVybmFsU2xvdHMuc3R5bGU7XG4gICAgdmFyIG1uZmREZWZhdWx0O1xuICAgIHZhciBteGZkRGVmYXVsdDtcbiAgICBpZiAoc3R5bGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgdmFyIGN1cnJlbmN5ID0gaW50ZXJuYWxTbG90cy5jdXJyZW5jeTtcbiAgICAgICAgdmFyIGNEaWdpdHMgPSBDdXJyZW5jeURpZ2l0cyhjdXJyZW5jeSwgeyBjdXJyZW5jeURpZ2l0c0RhdGE6IGN1cnJlbmN5RGlnaXRzRGF0YSB9KTtcbiAgICAgICAgbW5mZERlZmF1bHQgPSBjRGlnaXRzO1xuICAgICAgICBteGZkRGVmYXVsdCA9IGNEaWdpdHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtbmZkRGVmYXVsdCA9IDA7XG4gICAgICAgIG14ZmREZWZhdWx0ID0gc3R5bGUgPT09ICdwZXJjZW50JyA/IDAgOiAzO1xuICAgIH1cbiAgICB2YXIgbm90YXRpb24gPSBHZXRPcHRpb24ob3B0aW9ucywgJ25vdGF0aW9uJywgJ3N0cmluZycsIFsnc3RhbmRhcmQnLCAnc2NpZW50aWZpYycsICdlbmdpbmVlcmluZycsICdjb21wYWN0J10sICdzdGFuZGFyZCcpO1xuICAgIGludGVybmFsU2xvdHMubm90YXRpb24gPSBub3RhdGlvbjtcbiAgICBTZXROdW1iZXJGb3JtYXREaWdpdE9wdGlvbnMoaW50ZXJuYWxTbG90cywgb3B0aW9ucywgbW5mZERlZmF1bHQsIG14ZmREZWZhdWx0LCBub3RhdGlvbik7XG4gICAgdmFyIGNvbXBhY3REaXNwbGF5ID0gR2V0T3B0aW9uKG9wdGlvbnMsICdjb21wYWN0RGlzcGxheScsICdzdHJpbmcnLCBbJ3Nob3J0JywgJ2xvbmcnXSwgJ3Nob3J0Jyk7XG4gICAgaWYgKG5vdGF0aW9uID09PSAnY29tcGFjdCcpIHtcbiAgICAgICAgaW50ZXJuYWxTbG90cy5jb21wYWN0RGlzcGxheSA9IGNvbXBhY3REaXNwbGF5O1xuICAgIH1cbiAgICB2YXIgdXNlR3JvdXBpbmcgPSBHZXRPcHRpb24ob3B0aW9ucywgJ3VzZUdyb3VwaW5nJywgJ2Jvb2xlYW4nLCB1bmRlZmluZWQsIHRydWUpO1xuICAgIGludGVybmFsU2xvdHMudXNlR3JvdXBpbmcgPSB1c2VHcm91cGluZztcbiAgICB2YXIgc2lnbkRpc3BsYXkgPSBHZXRPcHRpb24ob3B0aW9ucywgJ3NpZ25EaXNwbGF5JywgJ3N0cmluZycsIFsnYXV0bycsICduZXZlcicsICdhbHdheXMnLCAnZXhjZXB0WmVybyddLCAnYXV0bycpO1xuICAgIGludGVybmFsU2xvdHMuc2lnbkRpc3BsYXkgPSBzaWduRGlzcGxheTtcbiAgICByZXR1cm4gbmY7XG59XG4iLCJpbXBvcnQgeyBGb3JtYXROdW1lcmljVG9TdHJpbmcgfSBmcm9tICcuL0Zvcm1hdE51bWVyaWNUb1N0cmluZyc7XG5pbXBvcnQgeyBTYW1lVmFsdWUgfSBmcm9tICcuLi8yNjInO1xuaW1wb3J0IHsgQ29tcHV0ZUV4cG9uZW50IH0gZnJvbSAnLi9Db21wdXRlRXhwb25lbnQnO1xuaW1wb3J0IGZvcm1hdFRvUGFydHMgZnJvbSAnLi9mb3JtYXRfdG9fcGFydHMnO1xuLyoqXG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTQwMi8jc2VjLWZvcm1hdG51bWJlcnN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gUGFydGl0aW9uTnVtYmVyUGF0dGVybihudW1iZXJGb3JtYXQsIHgsIF9hKSB7XG4gICAgdmFyIF9iO1xuICAgIHZhciBnZXRJbnRlcm5hbFNsb3RzID0gX2EuZ2V0SW50ZXJuYWxTbG90cztcbiAgICB2YXIgaW50ZXJuYWxTbG90cyA9IGdldEludGVybmFsU2xvdHMobnVtYmVyRm9ybWF0KTtcbiAgICB2YXIgcGwgPSBpbnRlcm5hbFNsb3RzLnBsLCBkYXRhTG9jYWxlRGF0YSA9IGludGVybmFsU2xvdHMuZGF0YUxvY2FsZURhdGEsIG51bWJlcmluZ1N5c3RlbSA9IGludGVybmFsU2xvdHMubnVtYmVyaW5nU3lzdGVtO1xuICAgIHZhciBzeW1ib2xzID0gZGF0YUxvY2FsZURhdGEubnVtYmVycy5zeW1ib2xzW251bWJlcmluZ1N5c3RlbV0gfHxcbiAgICAgICAgZGF0YUxvY2FsZURhdGEubnVtYmVycy5zeW1ib2xzW2RhdGFMb2NhbGVEYXRhLm51bWJlcnMubnVbMF1dO1xuICAgIHZhciBtYWduaXR1ZGUgPSAwO1xuICAgIHZhciBleHBvbmVudCA9IDA7XG4gICAgdmFyIG47XG4gICAgaWYgKGlzTmFOKHgpKSB7XG4gICAgICAgIG4gPSBzeW1ib2xzLm5hbjtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzRmluaXRlKHgpKSB7XG4gICAgICAgIG4gPSBzeW1ib2xzLmluZmluaXR5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGludGVybmFsU2xvdHMuc3R5bGUgPT09ICdwZXJjZW50Jykge1xuICAgICAgICAgICAgeCAqPSAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBfYiA9IENvbXB1dGVFeHBvbmVudChudW1iZXJGb3JtYXQsIHgsIHtcbiAgICAgICAgICAgIGdldEludGVybmFsU2xvdHM6IGdldEludGVybmFsU2xvdHMsXG4gICAgICAgIH0pLCBleHBvbmVudCA9IF9iWzBdLCBtYWduaXR1ZGUgPSBfYlsxXTtcbiAgICAgICAgLy8gUHJlc2VydmUgbW9yZSBwcmVjaXNpb24gYnkgZG9pbmcgbXVsdGlwbGljYXRpb24gd2hlbiBleHBvbmVudCBpcyBuZWdhdGl2ZS5cbiAgICAgICAgeCA9IGV4cG9uZW50IDwgMCA/IHggKiBNYXRoLnBvdygxMCwgLWV4cG9uZW50KSA6IHggLyBNYXRoLnBvdygxMCwgZXhwb25lbnQpO1xuICAgICAgICB2YXIgZm9ybWF0TnVtYmVyUmVzdWx0ID0gRm9ybWF0TnVtZXJpY1RvU3RyaW5nKGludGVybmFsU2xvdHMsIHgpO1xuICAgICAgICBuID0gZm9ybWF0TnVtYmVyUmVzdWx0LmZvcm1hdHRlZFN0cmluZztcbiAgICAgICAgeCA9IGZvcm1hdE51bWJlclJlc3VsdC5yb3VuZGVkTnVtYmVyO1xuICAgIH1cbiAgICAvLyBCYXNlZCBvbiBodHRwczovL3RjMzkuZXMvZWNtYTQwMi8jc2VjLWdldG51bWJlcmZvcm1hdHBhdHRlcm5cbiAgICAvLyBXZSBuZWVkIHRvIGRvIHRoaXMgYmVmb3JlIGB4YCBpcyByb3VuZGVkLlxuICAgIHZhciBzaWduO1xuICAgIHZhciBzaWduRGlzcGxheSA9IGludGVybmFsU2xvdHMuc2lnbkRpc3BsYXk7XG4gICAgc3dpdGNoIChzaWduRGlzcGxheSkge1xuICAgICAgICBjYXNlICduZXZlcic6XG4gICAgICAgICAgICBzaWduID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdXRvJzpcbiAgICAgICAgICAgIGlmIChTYW1lVmFsdWUoeCwgMCkgfHwgeCA+IDAgfHwgaXNOYU4oeCkpIHtcbiAgICAgICAgICAgICAgICBzaWduID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpZ24gPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbHdheXMnOlxuICAgICAgICAgICAgaWYgKFNhbWVWYWx1ZSh4LCAwKSB8fCB4ID4gMCB8fCBpc05hTih4KSkge1xuICAgICAgICAgICAgICAgIHNpZ24gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyB4ID09PSAwIC0+IHggaXMgMCBvciB4IGlzIC0wXG4gICAgICAgICAgICBpZiAoeCA9PT0gMCB8fCBpc05hTih4KSkge1xuICAgICAgICAgICAgICAgIHNpZ24gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoeCA+IDApIHtcbiAgICAgICAgICAgICAgICBzaWduID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpZ24gPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdFRvUGFydHMoeyByb3VuZGVkTnVtYmVyOiB4LCBmb3JtYXR0ZWRTdHJpbmc6IG4sIGV4cG9uZW50OiBleHBvbmVudCwgbWFnbml0dWRlOiBtYWduaXR1ZGUsIHNpZ246IHNpZ24gfSwgaW50ZXJuYWxTbG90cy5kYXRhTG9jYWxlRGF0YSwgcGwsIGludGVybmFsU2xvdHMpO1xufVxuIiwiaW1wb3J0IHsgR2V0TnVtYmVyT3B0aW9uIH0gZnJvbSAnLi4vR2V0TnVtYmVyT3B0aW9uJztcbmltcG9ydCB7IERlZmF1bHROdW1iZXJPcHRpb24gfSBmcm9tICcuLi9EZWZhdWx0TnVtYmVyT3B0aW9uJztcbi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWE0MDIvI3NlYy1zZXRuZmRpZ2l0b3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gU2V0TnVtYmVyRm9ybWF0RGlnaXRPcHRpb25zKGludGVybmFsU2xvdHMsIG9wdHMsIG1uZmREZWZhdWx0LCBteGZkRGVmYXVsdCwgbm90YXRpb24pIHtcbiAgICB2YXIgbW5pZCA9IEdldE51bWJlck9wdGlvbihvcHRzLCAnbWluaW11bUludGVnZXJEaWdpdHMnLCAxLCAyMSwgMSk7XG4gICAgdmFyIG1uZmQgPSBvcHRzLm1pbmltdW1GcmFjdGlvbkRpZ2l0cztcbiAgICB2YXIgbXhmZCA9IG9wdHMubWF4aW11bUZyYWN0aW9uRGlnaXRzO1xuICAgIHZhciBtbnNkID0gb3B0cy5taW5pbXVtU2lnbmlmaWNhbnREaWdpdHM7XG4gICAgdmFyIG14c2QgPSBvcHRzLm1heGltdW1TaWduaWZpY2FudERpZ2l0cztcbiAgICBpbnRlcm5hbFNsb3RzLm1pbmltdW1JbnRlZ2VyRGlnaXRzID0gbW5pZDtcbiAgICBpZiAobW5zZCAhPT0gdW5kZWZpbmVkIHx8IG14c2QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbnRlcm5hbFNsb3RzLnJvdW5kaW5nVHlwZSA9ICdzaWduaWZpY2FudERpZ2l0cyc7XG4gICAgICAgIG1uc2QgPSBEZWZhdWx0TnVtYmVyT3B0aW9uKG1uc2QsIDEsIDIxLCAxKTtcbiAgICAgICAgbXhzZCA9IERlZmF1bHROdW1iZXJPcHRpb24obXhzZCwgbW5zZCwgMjEsIDIxKTtcbiAgICAgICAgaW50ZXJuYWxTbG90cy5taW5pbXVtU2lnbmlmaWNhbnREaWdpdHMgPSBtbnNkO1xuICAgICAgICBpbnRlcm5hbFNsb3RzLm1heGltdW1TaWduaWZpY2FudERpZ2l0cyA9IG14c2Q7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1uZmQgIT09IHVuZGVmaW5lZCB8fCBteGZkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW50ZXJuYWxTbG90cy5yb3VuZGluZ1R5cGUgPSAnZnJhY3Rpb25EaWdpdHMnO1xuICAgICAgICBtbmZkID0gRGVmYXVsdE51bWJlck9wdGlvbihtbmZkLCAwLCAyMCwgbW5mZERlZmF1bHQpO1xuICAgICAgICB2YXIgbXhmZEFjdHVhbERlZmF1bHQgPSBNYXRoLm1heChtbmZkLCBteGZkRGVmYXVsdCk7XG4gICAgICAgIG14ZmQgPSBEZWZhdWx0TnVtYmVyT3B0aW9uKG14ZmQsIG1uZmQsIDIwLCBteGZkQWN0dWFsRGVmYXVsdCk7XG4gICAgICAgIGludGVybmFsU2xvdHMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gbW5mZDtcbiAgICAgICAgaW50ZXJuYWxTbG90cy5tYXhpbXVtRnJhY3Rpb25EaWdpdHMgPSBteGZkO1xuICAgIH1cbiAgICBlbHNlIGlmIChub3RhdGlvbiA9PT0gJ2NvbXBhY3QnKSB7XG4gICAgICAgIGludGVybmFsU2xvdHMucm91bmRpbmdUeXBlID0gJ2NvbXBhY3RSb3VuZGluZyc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbnRlcm5hbFNsb3RzLnJvdW5kaW5nVHlwZSA9ICdmcmFjdGlvbkRpZ2l0cyc7XG4gICAgICAgIGludGVybmFsU2xvdHMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gbW5mZERlZmF1bHQ7XG4gICAgICAgIGludGVybmFsU2xvdHMubWF4aW11bUZyYWN0aW9uRGlnaXRzID0gbXhmZERlZmF1bHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgR2V0T3B0aW9uIH0gZnJvbSAnLi4vR2V0T3B0aW9uJztcbmltcG9ydCB7IElzV2VsbEZvcm1lZEN1cnJlbmN5Q29kZSB9IGZyb20gJy4uL0lzV2VsbEZvcm1lZEN1cnJlbmN5Q29kZSc7XG5pbXBvcnQgeyBJc1dlbGxGb3JtZWRVbml0SWRlbnRpZmllciB9IGZyb20gJy4uL0lzV2VsbEZvcm1lZFVuaXRJZGVudGlmaWVyJztcbi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWE0MDIvI3NlYy1zZXRudW1iZXJmb3JtYXR1bml0b3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gU2V0TnVtYmVyRm9ybWF0VW5pdE9wdGlvbnMobmYsIG9wdGlvbnMsIF9hKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgfVxuICAgIHZhciBnZXRJbnRlcm5hbFNsb3RzID0gX2EuZ2V0SW50ZXJuYWxTbG90cztcbiAgICB2YXIgaW50ZXJuYWxTbG90cyA9IGdldEludGVybmFsU2xvdHMobmYpO1xuICAgIHZhciBzdHlsZSA9IEdldE9wdGlvbihvcHRpb25zLCAnc3R5bGUnLCAnc3RyaW5nJywgWydkZWNpbWFsJywgJ3BlcmNlbnQnLCAnY3VycmVuY3knLCAndW5pdCddLCAnZGVjaW1hbCcpO1xuICAgIGludGVybmFsU2xvdHMuc3R5bGUgPSBzdHlsZTtcbiAgICB2YXIgY3VycmVuY3kgPSBHZXRPcHRpb24ob3B0aW9ucywgJ2N1cnJlbmN5JywgJ3N0cmluZycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICBpZiAoY3VycmVuY3kgIT09IHVuZGVmaW5lZCAmJiAhSXNXZWxsRm9ybWVkQ3VycmVuY3lDb2RlKGN1cnJlbmN5KSkge1xuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdNYWxmb3JtZWQgY3VycmVuY3kgY29kZScpO1xuICAgIH1cbiAgICBpZiAoc3R5bGUgPT09ICdjdXJyZW5jeScgJiYgY3VycmVuY3kgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ2N1cnJlbmN5IGNhbm5vdCBiZSB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdmFyIGN1cnJlbmN5RGlzcGxheSA9IEdldE9wdGlvbihvcHRpb25zLCAnY3VycmVuY3lEaXNwbGF5JywgJ3N0cmluZycsIFsnY29kZScsICdzeW1ib2wnLCAnbmFycm93U3ltYm9sJywgJ25hbWUnXSwgJ3N5bWJvbCcpO1xuICAgIHZhciBjdXJyZW5jeVNpZ24gPSBHZXRPcHRpb24ob3B0aW9ucywgJ2N1cnJlbmN5U2lnbicsICdzdHJpbmcnLCBbJ3N0YW5kYXJkJywgJ2FjY291bnRpbmcnXSwgJ3N0YW5kYXJkJyk7XG4gICAgdmFyIHVuaXQgPSBHZXRPcHRpb24ob3B0aW9ucywgJ3VuaXQnLCAnc3RyaW5nJywgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIGlmICh1bml0ICE9PSB1bmRlZmluZWQgJiYgIUlzV2VsbEZvcm1lZFVuaXRJZGVudGlmaWVyKHVuaXQpKSB7XG4gICAgICAgIHRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgdW5pdCBhcmd1bWVudCBmb3IgSW50bC5OdW1iZXJGb3JtYXQoKScpO1xuICAgIH1cbiAgICBpZiAoc3R5bGUgPT09ICd1bml0JyAmJiB1bml0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCd1bml0IGNhbm5vdCBiZSB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdmFyIHVuaXREaXNwbGF5ID0gR2V0T3B0aW9uKG9wdGlvbnMsICd1bml0RGlzcGxheScsICdzdHJpbmcnLCBbJ3Nob3J0JywgJ25hcnJvdycsICdsb25nJ10sICdzaG9ydCcpO1xuICAgIGlmIChzdHlsZSA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgICBpbnRlcm5hbFNsb3RzLmN1cnJlbmN5ID0gY3VycmVuY3kudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaW50ZXJuYWxTbG90cy5jdXJyZW5jeURpc3BsYXkgPSBjdXJyZW5jeURpc3BsYXk7XG4gICAgICAgIGludGVybmFsU2xvdHMuY3VycmVuY3lTaWduID0gY3VycmVuY3lTaWduO1xuICAgIH1cbiAgICBpZiAoc3R5bGUgPT09ICd1bml0Jykge1xuICAgICAgICBpbnRlcm5hbFNsb3RzLnVuaXQgPSB1bml0O1xuICAgICAgICBpbnRlcm5hbFNsb3RzLnVuaXREaXNwbGF5ID0gdW5pdERpc3BsYXk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVwZWF0IH0gZnJvbSAnLi4vdXRpbHMnO1xuLyoqXG4gKiBUT0RPOiBkZWR1cCB3aXRoIGludGwtcGx1cmFscnVsZXMgYW5kIHN1cHBvcnQgQmlnSW50XG4gKiBodHRwczovL3RjMzkuZXMvZWNtYTQwMi8jc2VjLXRvcmF3Zml4ZWRcbiAqIEBwYXJhbSB4IGEgZmluaXRlIG5vbi1uZWdhdGl2ZSBOdW1iZXIgb3IgQmlnSW50XG4gKiBAcGFyYW0gbWluRnJhY3Rpb24gYW5kIGludGVnZXIgYmV0d2VlbiAwIGFuZCAyMFxuICogQHBhcmFtIG1heEZyYWN0aW9uIGFuZCBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRvUmF3Rml4ZWQoeCwgbWluRnJhY3Rpb24sIG1heEZyYWN0aW9uKSB7XG4gICAgdmFyIGYgPSBtYXhGcmFjdGlvbjtcbiAgICB2YXIgbiA9IE1hdGgucm91bmQoeCAqIE1hdGgucG93KDEwLCBmKSk7XG4gICAgdmFyIHhGaW5hbCA9IG4gLyBNYXRoLnBvdygxMCwgZik7XG4gICAgLy8gbiBpcyBhIHBvc2l0aXZlIGludGVnZXIsIGJ1dCBpdCBpcyBwb3NzaWJsZSB0byBiZSBncmVhdGVyIHRoYW4gMWUyMS5cbiAgICAvLyBJbiBzdWNoIGNhc2Ugd2Ugd2lsbCBnbyB0aGUgc2xvdyBwYXRoLlxuICAgIC8vIFNlZSBhbHNvOiBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWVyaWMtdHlwZXMtbnVtYmVyLXRvc3RyaW5nXG4gICAgdmFyIG07XG4gICAgaWYgKG4gPCAxZTIxKSB7XG4gICAgICAgIG0gPSBuLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtID0gbi50b1N0cmluZygpO1xuICAgICAgICB2YXIgX2EgPSBtLnNwbGl0KCdlJyksIG1hbnRpc3NhID0gX2FbMF0sIGV4cG9uZW50ID0gX2FbMV07XG4gICAgICAgIG0gPSBtYW50aXNzYS5yZXBsYWNlKCcuJywgJycpO1xuICAgICAgICBtID0gbSArIHJlcGVhdCgnMCcsIE1hdGgubWF4KCtleHBvbmVudCAtIG0ubGVuZ3RoICsgMSwgMCkpO1xuICAgIH1cbiAgICB2YXIgaW50O1xuICAgIGlmIChmICE9PSAwKSB7XG4gICAgICAgIHZhciBrID0gbS5sZW5ndGg7XG4gICAgICAgIGlmIChrIDw9IGYpIHtcbiAgICAgICAgICAgIHZhciB6ID0gcmVwZWF0KCcwJywgZiArIDEgLSBrKTtcbiAgICAgICAgICAgIG0gPSB6ICsgbTtcbiAgICAgICAgICAgIGsgPSBmICsgMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IG0uc2xpY2UoMCwgayAtIGYpO1xuICAgICAgICB2YXIgYiA9IG0uc2xpY2UoayAtIGYpO1xuICAgICAgICBtID0gYSArIFwiLlwiICsgYjtcbiAgICAgICAgaW50ID0gYS5sZW5ndGg7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbnQgPSBtLmxlbmd0aDtcbiAgICB9XG4gICAgdmFyIGN1dCA9IG1heEZyYWN0aW9uIC0gbWluRnJhY3Rpb247XG4gICAgd2hpbGUgKGN1dCA+IDAgJiYgbVttLmxlbmd0aCAtIDFdID09PSAnMCcpIHtcbiAgICAgICAgbSA9IG0uc2xpY2UoMCwgLTEpO1xuICAgICAgICBjdXQtLTtcbiAgICB9XG4gICAgaWYgKG1bbS5sZW5ndGggLSAxXSA9PT0gJy4nKSB7XG4gICAgICAgIG0gPSBtLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZm9ybWF0dGVkU3RyaW5nOiBtLCByb3VuZGVkTnVtYmVyOiB4RmluYWwsIGludGVnZXJEaWdpdHNDb3VudDogaW50IH07XG59XG4iLCJpbXBvcnQgeyByZXBlYXQsIGdldE1hZ25pdHVkZSB9IGZyb20gJy4uL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiBUb1Jhd1ByZWNpc2lvbih4LCBtaW5QcmVjaXNpb24sIG1heFByZWNpc2lvbikge1xuICAgIHZhciBwID0gbWF4UHJlY2lzaW9uO1xuICAgIHZhciBtO1xuICAgIHZhciBlO1xuICAgIHZhciB4RmluYWw7XG4gICAgaWYgKHggPT09IDApIHtcbiAgICAgICAgbSA9IHJlcGVhdCgnMCcsIHApO1xuICAgICAgICBlID0gMDtcbiAgICAgICAgeEZpbmFsID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB4VG9TdHJpbmcgPSB4LnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIElmIHhUb1N0cmluZyBpcyBmb3JtYXR0ZWQgYXMgc2NpZW50aWZpYyBub3RhdGlvbiwgdGhlIG51bWJlciBpcyBlaXRoZXIgdmVyeSBzbWFsbCBvciB2ZXJ5XG4gICAgICAgIC8vIGxhcmdlLiBJZiB0aGUgcHJlY2lzaW9uIG9mIHRoZSBmb3JtYXR0ZWQgc3RyaW5nIGlzIGxvd2VyIHRoYXQgcmVxdWVzdGVkIG1heCBwcmVjaXNpb24sIHdlXG4gICAgICAgIC8vIHNob3VsZCBzdGlsbCBpbmZlciB0aGVtIGZyb20gdGhlIGZvcm1hdHRlZCBzdHJpbmcsIG90aGVyd2lzZSB0aGUgZm9ybWF0dGVkIHJlc3VsdCBtaWdodCBoYXZlXG4gICAgICAgIC8vIHByZWNpc2lvbiBsb3NzIChlLmcuIDFlNDEgd2lsbCBub3QgaGF2ZSAwIGluIGV2ZXJ5IHRyYWlsaW5nIGRpZ2l0cykuXG4gICAgICAgIHZhciB4VG9TdHJpbmdFeHBvbmVudEluZGV4ID0geFRvU3RyaW5nLmluZGV4T2YoJ2UnKTtcbiAgICAgICAgdmFyIF9hID0geFRvU3RyaW5nLnNwbGl0KCdlJyksIHhUb1N0cmluZ01hbnRpc3NhID0gX2FbMF0sIHhUb1N0cmluZ0V4cG9uZW50ID0gX2FbMV07XG4gICAgICAgIHZhciB4VG9TdHJpbmdNYW50aXNzYVdpdGhvdXREZWNpbWFsUG9pbnQgPSB4VG9TdHJpbmdNYW50aXNzYS5yZXBsYWNlKCcuJywgJycpO1xuICAgICAgICBpZiAoeFRvU3RyaW5nRXhwb25lbnRJbmRleCA+PSAwICYmXG4gICAgICAgICAgICB4VG9TdHJpbmdNYW50aXNzYVdpdGhvdXREZWNpbWFsUG9pbnQubGVuZ3RoIDw9IHApIHtcbiAgICAgICAgICAgIGUgPSAreFRvU3RyaW5nRXhwb25lbnQ7XG4gICAgICAgICAgICBtID1cbiAgICAgICAgICAgICAgICB4VG9TdHJpbmdNYW50aXNzYVdpdGhvdXREZWNpbWFsUG9pbnQgK1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQoJzAnLCBwIC0geFRvU3RyaW5nTWFudGlzc2FXaXRob3V0RGVjaW1hbFBvaW50Lmxlbmd0aCk7XG4gICAgICAgICAgICB4RmluYWwgPSB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZSA9IGdldE1hZ25pdHVkZSh4KTtcbiAgICAgICAgICAgIHZhciBkZWNpbWFsUGxhY2VPZmZzZXQgPSBlIC0gcCArIDE7XG4gICAgICAgICAgICAvLyBuIGlzIHRoZSBpbnRlZ2VyIGNvbnRhaW5pbmcgdGhlIHJlcXVpcmVkIHByZWNpc2lvbiBkaWdpdHMuIFRvIGRlcml2ZSB0aGUgZm9ybWF0dGVkIHN0cmluZyxcbiAgICAgICAgICAgIC8vIHdlIHdpbGwgYWRqdXN0IGl0cyBkZWNpbWFsIHBsYWNlIGluIHRoZSBsb2dpYyBiZWxvdy5cbiAgICAgICAgICAgIHZhciBuID0gTWF0aC5yb3VuZChhZGp1c3REZWNpbWFsUGxhY2UoeCwgZGVjaW1hbFBsYWNlT2Zmc2V0KSk7XG4gICAgICAgICAgICAvLyBUaGUgcm91bmRpbmcgY2F1c2VkIHRoZSBjaGFuZ2Ugb2YgbWFnbml0dWRlLCBzbyB3ZSBzaG91bGQgaW5jcmVtZW50IGBlYCBieSAxLlxuICAgICAgICAgICAgaWYgKGFkanVzdERlY2ltYWxQbGFjZShuLCBwIC0gMSkgPj0gMTApIHtcbiAgICAgICAgICAgICAgICBlID0gZSArIDE7XG4gICAgICAgICAgICAgICAgLy8gRGl2aWRlIG4gYnkgMTAgdG8gc3dhbGxvdyBvbmUgcHJlY2lzaW9uLlxuICAgICAgICAgICAgICAgIG4gPSBNYXRoLmZsb29yKG4gLyAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtID0gbi50b1N0cmluZygpO1xuICAgICAgICAgICAgLy8gRXF1aXZhbGVudCBvZiBuICogMTAgKiogKGUgLSBwICsgMSlcbiAgICAgICAgICAgIHhGaW5hbCA9IGFkanVzdERlY2ltYWxQbGFjZShuLCBwIC0gMSAtIGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBpbnQ7XG4gICAgaWYgKGUgPj0gcCAtIDEpIHtcbiAgICAgICAgbSA9IG0gKyByZXBlYXQoJzAnLCBlIC0gcCArIDEpO1xuICAgICAgICBpbnQgPSBlICsgMTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZSA+PSAwKSB7XG4gICAgICAgIG0gPSBtLnNsaWNlKDAsIGUgKyAxKSArIFwiLlwiICsgbS5zbGljZShlICsgMSk7XG4gICAgICAgIGludCA9IGUgKyAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbSA9IFwiMC5cIiArIHJlcGVhdCgnMCcsIC1lIC0gMSkgKyBtO1xuICAgICAgICBpbnQgPSAxO1xuICAgIH1cbiAgICBpZiAobS5pbmRleE9mKCcuJykgPj0gMCAmJiBtYXhQcmVjaXNpb24gPiBtaW5QcmVjaXNpb24pIHtcbiAgICAgICAgdmFyIGN1dCA9IG1heFByZWNpc2lvbiAtIG1pblByZWNpc2lvbjtcbiAgICAgICAgd2hpbGUgKGN1dCA+IDAgJiYgbVttLmxlbmd0aCAtIDFdID09PSAnMCcpIHtcbiAgICAgICAgICAgIG0gPSBtLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIGN1dC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtW20ubGVuZ3RoIC0gMV0gPT09ICcuJykge1xuICAgICAgICAgICAgbSA9IG0uc2xpY2UoMCwgLTEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGZvcm1hdHRlZFN0cmluZzogbSwgcm91bmRlZE51bWJlcjogeEZpbmFsLCBpbnRlZ2VyRGlnaXRzQ291bnQ6IGludCB9O1xuICAgIC8vIHggLyAoMTAgKiogbWFnbml0dWRlKSwgYnV0IHRyeSB0byBwcmVzZXJ2ZSBhcyBtdWNoIGZsb2F0aW5nIHBvaW50IHByZWNpc2lvbiBhcyBwb3NzaWJsZS5cbiAgICBmdW5jdGlvbiBhZGp1c3REZWNpbWFsUGxhY2UoeCwgbWFnbml0dWRlKSB7XG4gICAgICAgIHJldHVybiBtYWduaXR1ZGUgPCAwID8geCAqIE1hdGgucG93KDEwLCAtbWFnbml0dWRlKSA6IHggLyBNYXRoLnBvdygxMCwgbWFnbml0dWRlKTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIGRpZ2l0TWFwcGluZyA9IHsgXCJhZGxtXCI6IFtcIvCepZBcIiwgXCLwnqWRXCIsIFwi8J6lklwiLCBcIvCepZNcIiwgXCLwnqWUXCIsIFwi8J6llVwiLCBcIvCepZZcIiwgXCLwnqWXXCIsIFwi8J6lmFwiLCBcIvCepZlcIl0sIFwiYWhvbVwiOiBbXCLwkZywXCIsIFwi8JGcsVwiLCBcIvCRnLJcIiwgXCLwkZyzXCIsIFwi8JGctFwiLCBcIvCRnLVcIiwgXCLwkZy2XCIsIFwi8JGct1wiLCBcIvCRnLhcIiwgXCLwkZy5XCJdLCBcImFyYWJcIjogW1wi2aBcIiwgXCLZoVwiLCBcItmiXCIsIFwi2aNcIiwgXCLZpFwiLCBcItmlXCIsIFwi2aZcIiwgXCLZp1wiLCBcItmoXCIsIFwi2alcIl0sIFwiYXJhYmV4dFwiOiBbXCLbsFwiLCBcItuxXCIsIFwi27JcIiwgXCLbs1wiLCBcItu0XCIsIFwi27VcIiwgXCLbtlwiLCBcItu3XCIsIFwi27hcIiwgXCLbuVwiXSwgXCJiYWxpXCI6IFtcIuGtkFwiLCBcIuGtkVwiLCBcIuGtklwiLCBcIuGtk1wiLCBcIuGtlFwiLCBcIuGtlVwiLCBcIuGtllwiLCBcIuGtl1wiLCBcIuGtmFwiLCBcIuGtmVwiXSwgXCJiZW5nXCI6IFtcIuCnplwiLCBcIuCnp1wiLCBcIuCnqFwiLCBcIuCnqVwiLCBcIuCnqlwiLCBcIuCnq1wiLCBcIuCnrFwiLCBcIuCnrVwiLCBcIuCnrlwiLCBcIuCnr1wiXSwgXCJiaGtzXCI6IFtcIvCRsZBcIiwgXCLwkbGRXCIsIFwi8JGxklwiLCBcIvCRsZNcIiwgXCLwkbGUXCIsIFwi8JGxlVwiLCBcIvCRsZZcIiwgXCLwkbGXXCIsIFwi8JGxmFwiLCBcIvCRsZlcIl0sIFwiYnJhaFwiOiBbXCLwkYGmXCIsIFwi8JGBp1wiLCBcIvCRgahcIiwgXCLwkYGpXCIsIFwi8JGBqlwiLCBcIvCRgatcIiwgXCLwkYGsXCIsIFwi8JGBrVwiLCBcIvCRga5cIiwgXCLwkYGvXCJdLCBcImNha21cIjogW1wi8JGEtlwiLCBcIvCRhLdcIiwgXCLwkYS4XCIsIFwi8JGEuVwiLCBcIvCRhLpcIiwgXCLwkYS7XCIsIFwi8JGEvFwiLCBcIvCRhL1cIiwgXCLwkYS+XCIsIFwi8JGEv1wiXSwgXCJjaGFtXCI6IFtcIuqpkFwiLCBcIuqpkVwiLCBcIuqpklwiLCBcIuqpk1wiLCBcIuqplFwiLCBcIuqplVwiLCBcIuqpllwiLCBcIuqpl1wiLCBcIuqpmFwiLCBcIuqpmVwiXSwgXCJkZXZhXCI6IFtcIuClplwiLCBcIuClp1wiLCBcIuClqFwiLCBcIuClqVwiLCBcIuClqlwiLCBcIuClq1wiLCBcIuClrFwiLCBcIuClrVwiLCBcIuClrlwiLCBcIuClr1wiXSwgXCJkaWFrXCI6IFtcIvCRpZBcIiwgXCLwkaWRXCIsIFwi8JGlklwiLCBcIvCRpZNcIiwgXCLwkaWUXCIsIFwi8JGllVwiLCBcIvCRpZZcIiwgXCLwkaWXXCIsIFwi8JGlmFwiLCBcIvCRpZlcIl0sIFwiZnVsbHdpZGVcIjogW1wi77yQXCIsIFwi77yRXCIsIFwi77ySXCIsIFwi77yTXCIsIFwi77yUXCIsIFwi77yVXCIsIFwi77yWXCIsIFwi77yXXCIsIFwi77yYXCIsIFwi77yZXCJdLCBcImdvbmdcIjogW1wi8JG2oFwiLCBcIvCRtqFcIiwgXCLwkbaiXCIsIFwi8JG2o1wiLCBcIvCRtqRcIiwgXCLwkbalXCIsIFwi8JG2plwiLCBcIvCRtqdcIiwgXCLwkbaoXCIsIFwi8JG2qVwiXSwgXCJnb25tXCI6IFtcIvCRtZBcIiwgXCLwkbWRXCIsIFwi8JG1klwiLCBcIvCRtZNcIiwgXCLwkbWUXCIsIFwi8JG1lVwiLCBcIvCRtZZcIiwgXCLwkbWXXCIsIFwi8JG1mFwiLCBcIvCRtZlcIl0sIFwiZ3VqclwiOiBbXCLgq6ZcIiwgXCLgq6dcIiwgXCLgq6hcIiwgXCLgq6lcIiwgXCLgq6pcIiwgXCLgq6tcIiwgXCLgq6xcIiwgXCLgq61cIiwgXCLgq65cIiwgXCLgq69cIl0sIFwiZ3VydVwiOiBbXCLgqaZcIiwgXCLgqadcIiwgXCLgqahcIiwgXCLgqalcIiwgXCLgqapcIiwgXCLgqatcIiwgXCLgqaxcIiwgXCLgqa1cIiwgXCLgqa5cIiwgXCLgqa9cIl0sIFwiaGFuaWRlY1wiOiBbXCLjgIdcIiwgXCLkuIBcIiwgXCLkuoxcIiwgXCLkuIlcIiwgXCLlm5tcIiwgXCLkupRcIiwgXCLlha1cIiwgXCLkuINcIiwgXCLlhatcIiwgXCLkuZ1cIl0sIFwiaG1uZ1wiOiBbXCLwlq2QXCIsIFwi8JatkVwiLCBcIvCWrZJcIiwgXCLwlq2TXCIsIFwi8JatlFwiLCBcIvCWrZVcIiwgXCLwlq2WXCIsIFwi8Jatl1wiLCBcIvCWrZhcIiwgXCLwlq2ZXCJdLCBcImhtbnBcIjogW1wi8J6FgFwiLCBcIvCehYFcIiwgXCLwnoWCXCIsIFwi8J6Fg1wiLCBcIvCehYRcIiwgXCLwnoWFXCIsIFwi8J6FhlwiLCBcIvCehYdcIiwgXCLwnoWIXCIsIFwi8J6FiVwiXSwgXCJqYXZhXCI6IFtcIuqnkFwiLCBcIuqnkVwiLCBcIuqnklwiLCBcIuqnk1wiLCBcIuqnlFwiLCBcIuqnlVwiLCBcIuqnllwiLCBcIuqnl1wiLCBcIuqnmFwiLCBcIuqnmVwiXSwgXCJrYWxpXCI6IFtcIuqkgFwiLCBcIuqkgVwiLCBcIuqkglwiLCBcIuqkg1wiLCBcIuqkhFwiLCBcIuqkhVwiLCBcIuqkhlwiLCBcIuqkh1wiLCBcIuqkiFwiLCBcIuqkiVwiXSwgXCJraG1yXCI6IFtcIuGfoFwiLCBcIuGfoVwiLCBcIuGfolwiLCBcIuGfo1wiLCBcIuGfpFwiLCBcIuGfpVwiLCBcIuGfplwiLCBcIuGfp1wiLCBcIuGfqFwiLCBcIuGfqVwiXSwgXCJrbmRhXCI6IFtcIuCzplwiLCBcIuCzp1wiLCBcIuCzqFwiLCBcIuCzqVwiLCBcIuCzqlwiLCBcIuCzq1wiLCBcIuCzrFwiLCBcIuCzrVwiLCBcIuCzrlwiLCBcIuCzr1wiXSwgXCJsYW5hXCI6IFtcIuGqgFwiLCBcIuGqgVwiLCBcIuGqglwiLCBcIuGqg1wiLCBcIuGqhFwiLCBcIuGqhVwiLCBcIuGqhlwiLCBcIuGqh1wiLCBcIuGqiFwiLCBcIuGqiVwiXSwgXCJsYW5hdGhhbVwiOiBbXCLhqpBcIiwgXCLhqpFcIiwgXCLhqpJcIiwgXCLhqpNcIiwgXCLhqpRcIiwgXCLhqpVcIiwgXCLhqpZcIiwgXCLhqpdcIiwgXCLhqphcIiwgXCLhqplcIl0sIFwibGFvb1wiOiBbXCLgu5BcIiwgXCLgu5FcIiwgXCLgu5JcIiwgXCLgu5NcIiwgXCLgu5RcIiwgXCLgu5VcIiwgXCLgu5ZcIiwgXCLgu5dcIiwgXCLgu5hcIiwgXCLgu5lcIl0sIFwibGVwY1wiOiBbXCLhqpBcIiwgXCLhqpFcIiwgXCLhqpJcIiwgXCLhqpNcIiwgXCLhqpRcIiwgXCLhqpVcIiwgXCLhqpZcIiwgXCLhqpdcIiwgXCLhqphcIiwgXCLhqplcIl0sIFwibGltYlwiOiBbXCLhpYZcIiwgXCLhpYdcIiwgXCLhpYhcIiwgXCLhpYlcIiwgXCLhpYpcIiwgXCLhpYtcIiwgXCLhpYxcIiwgXCLhpY1cIiwgXCLhpY5cIiwgXCLhpY9cIl0sIFwibWF0aGJvbGRcIjogW1wi8J2fjlwiLCBcIvCdn49cIiwgXCLwnZ+QXCIsIFwi8J2fkVwiLCBcIvCdn5JcIiwgXCLwnZ+TXCIsIFwi8J2flFwiLCBcIvCdn5VcIiwgXCLwnZ+WXCIsIFwi8J2fl1wiXSwgXCJtYXRoZGJsXCI6IFtcIvCdn5hcIiwgXCLwnZ+ZXCIsIFwi8J2fmlwiLCBcIvCdn5tcIiwgXCLwnZ+cXCIsIFwi8J2fnVwiLCBcIvCdn55cIiwgXCLwnZ+fXCIsIFwi8J2foFwiLCBcIvCdn6FcIl0sIFwibWF0aG1vbm9cIjogW1wi8J2ftlwiLCBcIvCdn7dcIiwgXCLwnZ+4XCIsIFwi8J2fuVwiLCBcIvCdn7pcIiwgXCLwnZ+7XCIsIFwi8J2fvFwiLCBcIvCdn71cIiwgXCLwnZ++XCIsIFwi8J2fv1wiXSwgXCJtYXRoc2FuYlwiOiBbXCLwnZ+sXCIsIFwi8J2frVwiLCBcIvCdn65cIiwgXCLwnZ+vXCIsIFwi8J2fsFwiLCBcIvCdn7FcIiwgXCLwnZ+yXCIsIFwi8J2fs1wiLCBcIvCdn7RcIiwgXCLwnZ+1XCJdLCBcIm1hdGhzYW5zXCI6IFtcIvCdn6JcIiwgXCLwnZ+jXCIsIFwi8J2fpFwiLCBcIvCdn6VcIiwgXCLwnZ+mXCIsIFwi8J2fp1wiLCBcIvCdn6hcIiwgXCLwnZ+pXCIsIFwi8J2fqlwiLCBcIvCdn6tcIl0sIFwibWx5bVwiOiBbXCLgtaZcIiwgXCLgtadcIiwgXCLgtahcIiwgXCLgtalcIiwgXCLgtapcIiwgXCLgtatcIiwgXCLgtaxcIiwgXCLgta1cIiwgXCLgta5cIiwgXCLgta9cIl0sIFwibW9kaVwiOiBbXCLwkZmQXCIsIFwi8JGZkVwiLCBcIvCRmZJcIiwgXCLwkZmTXCIsIFwi8JGZlFwiLCBcIvCRmZVcIiwgXCLwkZmWXCIsIFwi8JGZl1wiLCBcIvCRmZhcIiwgXCLwkZmZXCJdLCBcIm1vbmdcIjogW1wi4aCQXCIsIFwi4aCRXCIsIFwi4aCSXCIsIFwi4aCTXCIsIFwi4aCUXCIsIFwi4aCVXCIsIFwi4aCWXCIsIFwi4aCXXCIsIFwi4aCYXCIsIFwi4aCZXCJdLCBcIm1yb29cIjogW1wi8JapoFwiLCBcIvCWqaFcIiwgXCLwlqmiXCIsIFwi8Japo1wiLCBcIvCWqaRcIiwgXCLwlqmlXCIsIFwi8JapplwiLCBcIvCWqadcIiwgXCLwlqmoXCIsIFwi8JapqVwiXSwgXCJtdGVpXCI6IFtcIuqvsFwiLCBcIuqvsVwiLCBcIuqvslwiLCBcIuqvs1wiLCBcIuqvtFwiLCBcIuqvtVwiLCBcIuqvtlwiLCBcIuqvt1wiLCBcIuqvuFwiLCBcIuqvuVwiXSwgXCJteW1yXCI6IFtcIuGBgFwiLCBcIuGBgVwiLCBcIuGBglwiLCBcIuGBg1wiLCBcIuGBhFwiLCBcIuGBhVwiLCBcIuGBhlwiLCBcIuGBh1wiLCBcIuGBiFwiLCBcIuGBiVwiXSwgXCJteW1yc2hhblwiOiBbXCLhgpBcIiwgXCLhgpFcIiwgXCLhgpJcIiwgXCLhgpNcIiwgXCLhgpRcIiwgXCLhgpVcIiwgXCLhgpZcIiwgXCLhgpdcIiwgXCLhgphcIiwgXCLhgplcIl0sIFwibXltcnRsbmdcIjogW1wi6qewXCIsIFwi6qexXCIsIFwi6qeyXCIsIFwi6qezXCIsIFwi6qe0XCIsIFwi6qe1XCIsIFwi6qe2XCIsIFwi6qe3XCIsIFwi6qe4XCIsIFwi6qe5XCJdLCBcIm5ld2FcIjogW1wi8JGRkFwiLCBcIvCRkZFcIiwgXCLwkZGSXCIsIFwi8JGRk1wiLCBcIvCRkZRcIiwgXCLwkZGVXCIsIFwi8JGRllwiLCBcIvCRkZdcIiwgXCLwkZGYXCIsIFwi8JGRmVwiXSwgXCJua29vXCI6IFtcIt+AXCIsIFwi34FcIiwgXCLfglwiLCBcIt+DXCIsIFwi34RcIiwgXCLfhVwiLCBcIt+GXCIsIFwi34dcIiwgXCLfiFwiLCBcIt+JXCJdLCBcIm9sY2tcIjogW1wi4bGQXCIsIFwi4bGRXCIsIFwi4bGSXCIsIFwi4bGTXCIsIFwi4bGUXCIsIFwi4bGVXCIsIFwi4bGWXCIsIFwi4bGXXCIsIFwi4bGYXCIsIFwi4bGZXCJdLCBcIm9yeWFcIjogW1wi4K2mXCIsIFwi4K2nXCIsIFwi4K2oXCIsIFwi4K2pXCIsIFwi4K2qXCIsIFwi4K2rXCIsIFwi4K2sXCIsIFwi4K2tXCIsIFwi4K2uXCIsIFwi4K2vXCJdLCBcIm9zbWFcIjogW1wi8JCSoFwiLCBcIvCQkqFcIiwgXCLwkJKiXCIsIFwi8JCSo1wiLCBcIvCQkqRcIiwgXCLwkJKlXCIsIFwi8JCSplwiLCBcIvCQkqdcIiwgXCLwkJKoXCIsIFwi8JCSqVwiXSwgXCJyb2hnXCI6IFtcIvCQtLBcIiwgXCLwkLSxXCIsIFwi8JC0slwiLCBcIvCQtLNcIiwgXCLwkLS0XCIsIFwi8JC0tVwiLCBcIvCQtLZcIiwgXCLwkLS3XCIsIFwi8JC0uFwiLCBcIvCQtLlcIl0sIFwic2F1clwiOiBbXCLqo5BcIiwgXCLqo5FcIiwgXCLqo5JcIiwgXCLqo5NcIiwgXCLqo5RcIiwgXCLqo5VcIiwgXCLqo5ZcIiwgXCLqo5dcIiwgXCLqo5hcIiwgXCLqo5lcIl0sIFwic2VnbWVudFwiOiBbXCLwn6+wXCIsIFwi8J+vsVwiLCBcIvCfr7JcIiwgXCLwn6+zXCIsIFwi8J+vtFwiLCBcIvCfr7VcIiwgXCLwn6+2XCIsIFwi8J+vt1wiLCBcIvCfr7hcIiwgXCLwn6+5XCJdLCBcInNocmRcIjogW1wi8JGHkFwiLCBcIvCRh5FcIiwgXCLwkYeSXCIsIFwi8JGHk1wiLCBcIvCRh5RcIiwgXCLwkYeVXCIsIFwi8JGHllwiLCBcIvCRh5dcIiwgXCLwkYeYXCIsIFwi8JGHmVwiXSwgXCJzaW5kXCI6IFtcIvCRi7BcIiwgXCLwkYuxXCIsIFwi8JGLslwiLCBcIvCRi7NcIiwgXCLwkYu0XCIsIFwi8JGLtVwiLCBcIvCRi7ZcIiwgXCLwkYu3XCIsIFwi8JGLuFwiLCBcIvCRi7lcIl0sIFwic2luaFwiOiBbXCLgt6ZcIiwgXCLgt6dcIiwgXCLgt6hcIiwgXCLgt6lcIiwgXCLgt6pcIiwgXCLgt6tcIiwgXCLgt6xcIiwgXCLgt61cIiwgXCLgt65cIiwgXCLgt69cIl0sIFwic29yYVwiOiBbXCLwkYOwXCIsIFwi8JGDsVwiLCBcIvCRg7JcIiwgXCLwkYOzXCIsIFwi8JGDtFwiLCBcIvCRg7VcIiwgXCLwkYO2XCIsIFwi8JGDt1wiLCBcIvCRg7hcIiwgXCLwkYO5XCJdLCBcInN1bmRcIjogW1wi4a6wXCIsIFwi4a6xXCIsIFwi4a6yXCIsIFwi4a6zXCIsIFwi4a60XCIsIFwi4a61XCIsIFwi4a62XCIsIFwi4a63XCIsIFwi4a64XCIsIFwi4a65XCJdLCBcInRha3JcIjogW1wi8JGbgFwiLCBcIvCRm4FcIiwgXCLwkZuCXCIsIFwi8JGbg1wiLCBcIvCRm4RcIiwgXCLwkZuFXCIsIFwi8JGbhlwiLCBcIvCRm4dcIiwgXCLwkZuIXCIsIFwi8JGbiVwiXSwgXCJ0YWx1XCI6IFtcIuGnkFwiLCBcIuGnkVwiLCBcIuGnklwiLCBcIuGnk1wiLCBcIuGnlFwiLCBcIuGnlVwiLCBcIuGnllwiLCBcIuGnl1wiLCBcIuGnmFwiLCBcIuGnmVwiXSwgXCJ0YW1sZGVjXCI6IFtcIuCvplwiLCBcIuCvp1wiLCBcIuCvqFwiLCBcIuCvqVwiLCBcIuCvqlwiLCBcIuCvq1wiLCBcIuCvrFwiLCBcIuCvrVwiLCBcIuCvrlwiLCBcIuCvr1wiXSwgXCJ0ZWx1XCI6IFtcIuCxplwiLCBcIuCxp1wiLCBcIuCxqFwiLCBcIuCxqVwiLCBcIuCxqlwiLCBcIuCxq1wiLCBcIuCxrFwiLCBcIuCxrVwiLCBcIuCxrlwiLCBcIuCxr1wiXSwgXCJ0aGFpXCI6IFtcIuC5kFwiLCBcIuC5kVwiLCBcIuC5klwiLCBcIuC5k1wiLCBcIuC5lFwiLCBcIuC5lVwiLCBcIuC5llwiLCBcIuC5l1wiLCBcIuC5mFwiLCBcIuC5mVwiXSwgXCJ0aWJ0XCI6IFtcIuC8oFwiLCBcIuC8oVwiLCBcIuC8olwiLCBcIuC8o1wiLCBcIuC8pFwiLCBcIuC8pVwiLCBcIuC8plwiLCBcIuC8p1wiLCBcIuC8qFwiLCBcIuC8qVwiXSwgXCJ0aXJoXCI6IFtcIvCRk5BcIiwgXCLwkZORXCIsIFwi8JGTklwiLCBcIvCRk5NcIiwgXCLwkZOUXCIsIFwi8JGTlVwiLCBcIvCRk5ZcIiwgXCLwkZOXXCIsIFwi8JGTmFwiLCBcIvCRk5lcIl0sIFwidmFpaVwiOiBbXCLhmKBcIiwgXCLhmKFcIiwgXCLhmKJcIiwgXCLhmKNcIiwgXCLhmKRcIiwgXCLhmKVcIiwgXCLhmKZcIiwgXCLhmKdcIiwgXCLhmKhcIiwgXCLhmKlcIl0sIFwid2FyYVwiOiBbXCLwkaOgXCIsIFwi8JGjoVwiLCBcIvCRo6JcIiwgXCLwkaOjXCIsIFwi8JGjpFwiLCBcIvCRo6VcIiwgXCLwkaOmXCIsIFwi8JGjp1wiLCBcIvCRo6hcIiwgXCLwkaOpXCJdLCBcIndjaG9cIjogW1wi8J6LsFwiLCBcIvCei7FcIiwgXCLwnouyXCIsIFwi8J6Ls1wiLCBcIvCei7RcIiwgXCLwnou1XCIsIFwi8J6LtlwiLCBcIvCei7dcIiwgXCLwnou4XCIsIFwi8J6LuVwiXSB9O1xuIiwiaW1wb3J0IHsgVG9SYXdGaXhlZCB9IGZyb20gJy4vVG9SYXdGaXhlZCc7XG5pbXBvcnQgeyBkaWdpdE1hcHBpbmcgfSBmcm9tICcuL2RpZ2l0LW1hcHBpbmcuZ2VuZXJhdGVkJztcbmltcG9ydCB7IFNfVU5JQ09ERV9SRUdFWCB9IGZyb20gJy4uL3JlZ2V4LmdlbmVyYXRlZCc7XG4vLyBUaGlzIGlzIGZyb206IHVuaWNvZGUtMTIuMS4wL0dlbmVyYWxfQ2F0ZWdvcnkvU3ltYm9sL3JlZ2V4LmpzXG4vLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgdW5pY29kZSBmbGFnLCBvdGhlcndpc2UgdGhpcyBpcyBqdXN0IC9cXHB7U30vdS5cbi8vIC9eXFxwe1N9L3VcbnZhciBDQVJFVF9TX1VOSUNPREVfUkVHRVggPSBuZXcgUmVnRXhwKFwiXlwiICsgU19VTklDT0RFX1JFR0VYLnNvdXJjZSk7XG4vLyAvXFxwe1N9JC91XG52YXIgU19ET0xMQVJfVU5JQ09ERV9SRUdFWCA9IG5ldyBSZWdFeHAoU19VTklDT0RFX1JFR0VYLnNvdXJjZSArIFwiJFwiKTtcbnZhciBDTERSX05VTUJFUl9QQVRURVJOID0gL1sjMF0oPzpbXFwuLF1bIzBdKykqL2c7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRUb1BhcnRzKG51bWJlclJlc3VsdCwgZGF0YSwgcGwsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbiA9IG51bWJlclJlc3VsdC5zaWduLCBleHBvbmVudCA9IG51bWJlclJlc3VsdC5leHBvbmVudCwgbWFnbml0dWRlID0gbnVtYmVyUmVzdWx0Lm1hZ25pdHVkZTtcbiAgICB2YXIgbm90YXRpb24gPSBvcHRpb25zLm5vdGF0aW9uLCBzdHlsZSA9IG9wdGlvbnMuc3R5bGUsIG51bWJlcmluZ1N5c3RlbSA9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtO1xuICAgIHZhciBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gZGF0YS5udW1iZXJzLm51WzBdO1xuICAgIC8vICNyZWdpb24gUGFydCAxOiBwYXJ0aXRpb24gYW5kIGludGVycG9sYXRlIHRoZSBDTERSIG51bWJlciBwYXR0ZXJuLlxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgY29tcGFjdE51bWJlclBhdHRlcm4gPSBudWxsO1xuICAgIGlmIChub3RhdGlvbiA9PT0gJ2NvbXBhY3QnICYmIG1hZ25pdHVkZSkge1xuICAgICAgICBjb21wYWN0TnVtYmVyUGF0dGVybiA9IGdldENvbXBhY3REaXNwbGF5UGF0dGVybihudW1iZXJSZXN1bHQsIHBsLCBkYXRhLCBzdHlsZSwgb3B0aW9ucy5jb21wYWN0RGlzcGxheSwgb3B0aW9ucy5jdXJyZW5jeURpc3BsYXksIG51bWJlcmluZ1N5c3RlbSk7XG4gICAgfVxuICAgIC8vIFRoaXMgaXMgdXNlZCBtdWx0aXBsZSB0aW1lc1xuICAgIHZhciBub25OYW1lQ3VycmVuY3lQYXJ0O1xuICAgIGlmIChzdHlsZSA9PT0gJ2N1cnJlbmN5JyAmJiBvcHRpb25zLmN1cnJlbmN5RGlzcGxheSAhPT0gJ25hbWUnKSB7XG4gICAgICAgIHZhciBieUN1cnJlbmN5RGlzcGxheSA9IGRhdGEuY3VycmVuY2llc1tvcHRpb25zLmN1cnJlbmN5XTtcbiAgICAgICAgaWYgKGJ5Q3VycmVuY3lEaXNwbGF5KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG9wdGlvbnMuY3VycmVuY3lEaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29kZSc6XG4gICAgICAgICAgICAgICAgICAgIG5vbk5hbWVDdXJyZW5jeVBhcnQgPSBvcHRpb25zLmN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgICAgICAgICBub25OYW1lQ3VycmVuY3lQYXJ0ID0gYnlDdXJyZW5jeURpc3BsYXkuc3ltYm9sO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBub25OYW1lQ3VycmVuY3lQYXJ0ID0gYnlDdXJyZW5jeURpc3BsYXkubmFycm93O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIGZvciB1bmtub3duIGN1cnJlbmN5XG4gICAgICAgICAgICBub25OYW1lQ3VycmVuY3lQYXJ0ID0gb3B0aW9ucy5jdXJyZW5jeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgbnVtYmVyUGF0dGVybjtcbiAgICBpZiAoIWNvbXBhY3ROdW1iZXJQYXR0ZXJuKSB7XG4gICAgICAgIC8vIE5vdGU6IGlmIHRoZSBzdHlsZSBpcyB1bml0LCBvciBpcyBjdXJyZW5jeSBhbmQgdGhlIGN1cnJlbmN5IGRpc3BsYXkgaXMgbmFtZSxcbiAgICAgICAgLy8gaXRzIHVuaXQgcGFydHMgd2lsbCBiZSBpbnRlcnBvbGF0ZWQgaW4gcGFydCAyLiBTbyBoZXJlIHdlIGNhbiBmYWxsYmFjayB0byBkZWNpbWFsLlxuICAgICAgICBpZiAoc3R5bGUgPT09ICdkZWNpbWFsJyB8fFxuICAgICAgICAgICAgc3R5bGUgPT09ICd1bml0JyB8fFxuICAgICAgICAgICAgKHN0eWxlID09PSAnY3VycmVuY3knICYmIG9wdGlvbnMuY3VycmVuY3lEaXNwbGF5ID09PSAnbmFtZScpKSB7XG4gICAgICAgICAgICAvLyBTaG9ydGN1dCBmb3IgZGVjaW1hbFxuICAgICAgICAgICAgdmFyIGRlY2ltYWxEYXRhID0gZGF0YS5udW1iZXJzLmRlY2ltYWxbbnVtYmVyaW5nU3lzdGVtXSB8fFxuICAgICAgICAgICAgICAgIGRhdGEubnVtYmVycy5kZWNpbWFsW2RlZmF1bHROdW1iZXJpbmdTeXN0ZW1dO1xuICAgICAgICAgICAgbnVtYmVyUGF0dGVybiA9IGdldFBhdHRlcm5Gb3JTaWduKGRlY2ltYWxEYXRhLnN0YW5kYXJkLCBzaWduKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHlsZSA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbmN5RGF0YSA9IGRhdGEubnVtYmVycy5jdXJyZW5jeVtudW1iZXJpbmdTeXN0ZW1dIHx8XG4gICAgICAgICAgICAgICAgZGF0YS5udW1iZXJzLmN1cnJlbmN5W2RlZmF1bHROdW1iZXJpbmdTeXN0ZW1dO1xuICAgICAgICAgICAgLy8gV2UgcmVwbGFjZSBudW1iZXIgcGF0dGVybiBwYXJ0IHdpdGggYDBgIGZvciBlYXNpZXIgcG9zdHByb2Nlc3NpbmcuXG4gICAgICAgICAgICBudW1iZXJQYXR0ZXJuID0gZ2V0UGF0dGVybkZvclNpZ24oY3VycmVuY3lEYXRhW29wdGlvbnMuY3VycmVuY3lTaWduXSwgc2lnbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBwZXJjZW50XG4gICAgICAgICAgICB2YXIgcGVyY2VudFBhdHRlcm4gPSBkYXRhLm51bWJlcnMucGVyY2VudFtudW1iZXJpbmdTeXN0ZW1dIHx8XG4gICAgICAgICAgICAgICAgZGF0YS5udW1iZXJzLnBlcmNlbnRbZGVmYXVsdE51bWJlcmluZ1N5c3RlbV07XG4gICAgICAgICAgICBudW1iZXJQYXR0ZXJuID0gZ2V0UGF0dGVybkZvclNpZ24ocGVyY2VudFBhdHRlcm4sIHNpZ24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBudW1iZXJQYXR0ZXJuID0gY29tcGFjdE51bWJlclBhdHRlcm47XG4gICAgfVxuICAgIC8vIEV4dHJhY3QgdGhlIGRlY2ltYWwgbnVtYmVyIHBhdHRlcm4gc3RyaW5nLiBJdCBsb29rcyBsaWtlIFwiIywjIzAsMDBcIiwgd2hpY2ggd2lsbCBsYXRlciBiZVxuICAgIC8vIHVzZWQgdG8gaW5mZXIgZGVjaW1hbCBncm91cCBzaXplcy5cbiAgICB2YXIgZGVjaW1hbE51bWJlclBhdHRlcm4gPSBDTERSX05VTUJFUl9QQVRURVJOLmV4ZWMobnVtYmVyUGF0dGVybilbMF07XG4gICAgLy8gTm93IHdlIHN0YXJ0IHRvIHN1YnN0aXR1dGUgcGF0dGVybnNcbiAgICAvLyAxLiByZXBsYWNlIHN0cmluZ3MgbGlrZSBgMGAgYW5kIGAjLCMjMC4wMGAgd2l0aCBgezB9YFxuICAgIC8vIDIuIHVucXVvdGUgY2hhcmFjdGVycyAoaW52YXJpYW50OiB0aGUgcXVvdGVkIGNoYXJhY3RlcnMgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lhbCB0b2tlbnMpXG4gICAgbnVtYmVyUGF0dGVybiA9IG51bWJlclBhdHRlcm5cbiAgICAgICAgLnJlcGxhY2UoQ0xEUl9OVU1CRVJfUEFUVEVSTiwgJ3swfScpXG4gICAgICAgIC5yZXBsYWNlKC8nKC4pJy9nLCAnJDEnKTtcbiAgICAvLyBIYW5kbGUgY3VycmVuY3kgc3BhY2luZyAoYm90aCBjb21wYWN0IGFuZCBub24tY29tcGFjdCkuXG4gICAgaWYgKHN0eWxlID09PSAnY3VycmVuY3knICYmIG9wdGlvbnMuY3VycmVuY3lEaXNwbGF5ICE9PSAnbmFtZScpIHtcbiAgICAgICAgdmFyIGN1cnJlbmN5RGF0YSA9IGRhdGEubnVtYmVycy5jdXJyZW5jeVtudW1iZXJpbmdTeXN0ZW1dIHx8XG4gICAgICAgICAgICBkYXRhLm51bWJlcnMuY3VycmVuY3lbZGVmYXVsdE51bWJlcmluZ1N5c3RlbV07XG4gICAgICAgIC8vIFNlZSBgY3VycmVuY3lTcGFjaW5nYCBzdWJzdGl0dXRpb24gcnVsZSBpbiBUUi0zNS5cbiAgICAgICAgLy8gSGVyZSB3ZSBhbHdheXMgYXNzdW1lIHRoZSBjdXJyZW5jeU1hdGNoIGlzIFwiWzpeUzpdXCIgYW5kIHN1cnJvdW5kaW5nTWF0Y2ggaXMgXCJbOmRpZ2l0Ol1cIi5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gRXhhbXBsZSAxOiBmb3IgcGF0dGVybiBcIiMsIyMwLjAwwqRcIiB3aXRoIHN5bWJvbCBcIlVTJFwiLCB3ZSByZXBsYWNlIFwiwqRcIiB3aXRoIHRoZSBzeW1ib2wsXG4gICAgICAgIC8vIGJ1dCBpbnNlcnQgYW4gZXh0cmEgbm9uLWJyZWFrIHNwYWNlIGJlZm9yZSB0aGUgc3ltYm9sLCBiZWNhdXNlIFwiWzpeUzpdXCIgbWF0Y2hlcyBcIlVcIiBpblxuICAgICAgICAvLyBcIlVTJFwiIGFuZCBcIls6ZGlnaXQ6XVwiIG1hdGNoZXMgdGhlIGxhdG4gbnVtYmVyaW5nIHN5c3RlbSBkaWdpdHMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEV4YW1wbGUgMjogZm9yIHBhdHRlcm4gXCLCpCMsIyMwLjAwXCIgd2l0aCBzeW1ib2wgXCJVUyRcIiwgdGhlcmUgaXMgbm8gc3BhY2luZyBiZXR3ZWVuIHN5bWJvbFxuICAgICAgICAvLyBhbmQgbnVtYmVyLCBiZWNhdXNlIGAkYCBkb2VzIG5vdCBtYXRjaCBcIls6XlM6XVwiLlxuICAgICAgICAvL1xuICAgICAgICAvLyBJbXBsZW1lbnRhdGlvbiBub3RlOiBoZXJlIHdlIGRvIHRoZSBiZXN0IGVmZm9ydCB0byBpbmZlciB0aGUgaW5zZXJ0aW9uLlxuICAgICAgICAvLyBXZSBhbHNvIGFzc3VtZSB0aGF0IGBiZWZvcmVJbnNlcnRCZXR3ZWVuYCBhbmQgYGFmdGVySW5zZXJ0QmV0d2VlbmAgd2lsbCBuZXZlciBiZSBgO2AuXG4gICAgICAgIHZhciBhZnRlckN1cnJlbmN5ID0gY3VycmVuY3lEYXRhLmN1cnJlbmN5U3BhY2luZy5hZnRlckluc2VydEJldHdlZW47XG4gICAgICAgIGlmIChhZnRlckN1cnJlbmN5ICYmICFTX0RPTExBUl9VTklDT0RFX1JFR0VYLnRlc3Qobm9uTmFtZUN1cnJlbmN5UGFydCkpIHtcbiAgICAgICAgICAgIG51bWJlclBhdHRlcm4gPSBudW1iZXJQYXR0ZXJuLnJlcGxhY2UoJ8KkezB9JywgXCJcXHUwMEE0XCIgKyBhZnRlckN1cnJlbmN5ICsgXCJ7MH1cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJlZm9yZUN1cnJlbmN5ID0gY3VycmVuY3lEYXRhLmN1cnJlbmN5U3BhY2luZy5iZWZvcmVJbnNlcnRCZXR3ZWVuO1xuICAgICAgICBpZiAoYmVmb3JlQ3VycmVuY3kgJiYgIUNBUkVUX1NfVU5JQ09ERV9SRUdFWC50ZXN0KG5vbk5hbWVDdXJyZW5jeVBhcnQpKSB7XG4gICAgICAgICAgICBudW1iZXJQYXR0ZXJuID0gbnVtYmVyUGF0dGVybi5yZXBsYWNlKCd7MH3CpCcsIFwiezB9XCIgKyBiZWZvcmVDdXJyZW5jeSArIFwiXFx1MDBBNFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGUgZm9sbG93aW5nIHRva2VucyBhcmUgc3BlY2lhbDogYHswfWAsIGDCpGAsIGAlYCwgYC1gLCBgK2AsIGB7YzouLi59LlxuICAgIHZhciBudW1iZXJQYXR0ZXJuUGFydHMgPSBudW1iZXJQYXR0ZXJuLnNwbGl0KC8oe2M6W159XSt9fFxcezBcXH18W8KkJVxcLVxcK10pL2cpO1xuICAgIHZhciBudW1iZXJQYXJ0cyA9IFtdO1xuICAgIHZhciBzeW1ib2xzID0gZGF0YS5udW1iZXJzLnN5bWJvbHNbbnVtYmVyaW5nU3lzdGVtXSB8fFxuICAgICAgICBkYXRhLm51bWJlcnMuc3ltYm9sc1tkZWZhdWx0TnVtYmVyaW5nU3lzdGVtXTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIG51bWJlclBhdHRlcm5QYXJ0c18xID0gbnVtYmVyUGF0dGVyblBhcnRzOyBfaSA8IG51bWJlclBhdHRlcm5QYXJ0c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgcGFydCA9IG51bWJlclBhdHRlcm5QYXJ0c18xW19pXTtcbiAgICAgICAgaWYgKCFwYXJ0KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHBhcnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3swfSc6IHtcbiAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gaGFuZGxlIHNjaWVudGlmaWMgYW5kIGVuZ2luZWVyaW5nIG5vdGF0aW9uIGhlcmUuXG4gICAgICAgICAgICAgICAgbnVtYmVyUGFydHMucHVzaC5hcHBseShudW1iZXJQYXJ0cywgcGFyaXRpb25OdW1iZXJJbnRvUGFydHMoc3ltYm9scywgbnVtYmVyUmVzdWx0LCBub3RhdGlvbiwgZXhwb25lbnQsIG51bWJlcmluZ1N5c3RlbSwgXG4gICAgICAgICAgICAgICAgLy8gSWYgY29tcGFjdCBudW1iZXIgcGF0dGVybiBleGlzdHMsIGRvIG5vdCBpbnNlcnQgZ3JvdXAgc2VwYXJhdG9ycy5cbiAgICAgICAgICAgICAgICAhY29tcGFjdE51bWJlclBhdHRlcm4gJiYgb3B0aW9ucy51c2VHcm91cGluZywgZGVjaW1hbE51bWJlclBhdHRlcm4pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIG51bWJlclBhcnRzLnB1c2goeyB0eXBlOiAnbWludXNTaWduJywgdmFsdWU6IHN5bWJvbHMubWludXNTaWduIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgbnVtYmVyUGFydHMucHVzaCh7IHR5cGU6ICdwbHVzU2lnbicsIHZhbHVlOiBzeW1ib2xzLnBsdXNTaWduIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICAgICAgbnVtYmVyUGFydHMucHVzaCh7IHR5cGU6ICdwZXJjZW50U2lnbicsIHZhbHVlOiBzeW1ib2xzLnBlcmNlbnRTaWduIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnwqQnOlxuICAgICAgICAgICAgICAgIC8vIENvbXB1dGVkIGFib3ZlIHdoZW4gaGFuZGxpbmcgY3VycmVuY3kgc3BhY2luZy5cbiAgICAgICAgICAgICAgICBudW1iZXJQYXJ0cy5wdXNoKHsgdHlwZTogJ2N1cnJlbmN5JywgdmFsdWU6IG5vbk5hbWVDdXJyZW5jeVBhcnQgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmICgvXlxce2M6Ly50ZXN0KHBhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlclBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NvbXBhY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcnQuc3Vic3RyaW5nKDMsIHBhcnQubGVuZ3RoIC0gMSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGl0ZXJhbFxuICAgICAgICAgICAgICAgICAgICBudW1iZXJQYXJ0cy5wdXNoKHsgdHlwZTogJ2xpdGVyYWwnLCB2YWx1ZTogcGFydCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gI2VuZHJlZ2lvblxuICAgIC8vICNyZWdpb24gUGFydCAyOiBpbnRlcnBvbGF0ZSB1bml0IHBhdHRlcm4gaWYgbmVjZXNzYXJ5LlxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICAgIGNhc2UgJ2N1cnJlbmN5Jzoge1xuICAgICAgICAgICAgLy8gYGN1cnJlbmN5RGlzcGxheTogJ25hbWUnYCBoYXMgc2ltaWxhciBwYXR0ZXJuIGhhbmRsaW5nIGFzIHVuaXRzLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY3VycmVuY3lEaXNwbGF5ID09PSAnbmFtZScpIHtcbiAgICAgICAgICAgICAgICB2YXIgdW5pdFBhdHRlcm4gPSAoZGF0YS5udW1iZXJzLmN1cnJlbmN5W251bWJlcmluZ1N5c3RlbV0gfHxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5udW1iZXJzLmN1cnJlbmN5W2RlZmF1bHROdW1iZXJpbmdTeXN0ZW1dKS51bml0UGF0dGVybjtcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3QgcGx1cmFsXG4gICAgICAgICAgICAgICAgdmFyIHVuaXROYW1lID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW5jeU5hbWVEYXRhID0gZGF0YS5jdXJyZW5jaWVzW29wdGlvbnMuY3VycmVuY3ldO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW5jeU5hbWVEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXROYW1lID0gc2VsZWN0UGx1cmFsKHBsLCBudW1iZXJSZXN1bHQucm91bmRlZE51bWJlciAqIE1hdGgucG93KDEwLCBleHBvbmVudCksIGN1cnJlbmN5TmFtZURhdGEuZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgZm9yIHVua25vd24gY3VycmVuY3lcbiAgICAgICAgICAgICAgICAgICAgdW5pdE5hbWUgPSBvcHRpb25zLmN1cnJlbmN5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEbyB7MH0gYW5kIHsxfSBzdWJzdGl0dXRpb25cbiAgICAgICAgICAgICAgICB2YXIgdW5pdFBhdHRlcm5QYXJ0cyA9IHVuaXRQYXR0ZXJuLnNwbGl0KC8oXFx7WzAxXVxcfSkvZyk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwgdW5pdFBhdHRlcm5QYXJ0c18xID0gdW5pdFBhdHRlcm5QYXJ0czsgX2EgPCB1bml0UGF0dGVyblBhcnRzXzEubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gdW5pdFBhdHRlcm5QYXJ0c18xW19hXTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd7MH0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoLmFwcGx5KHJlc3VsdCwgbnVtYmVyUGFydHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnezF9JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IHR5cGU6ICdjdXJyZW5jeScsIHZhbHVlOiB1bml0TmFtZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiBwYXJ0IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlclBhcnRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3VuaXQnOiB7XG4gICAgICAgICAgICB2YXIgdW5pdCA9IG9wdGlvbnMudW5pdCwgdW5pdERpc3BsYXkgPSBvcHRpb25zLnVuaXREaXNwbGF5O1xuICAgICAgICAgICAgdmFyIHVuaXREYXRhID0gZGF0YS51bml0cy5zaW1wbGVbdW5pdF07XG4gICAgICAgICAgICB2YXIgdW5pdFBhdHRlcm4gPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodW5pdERhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBTaW1wbGUgdW5pdCBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgdW5pdFBhdHRlcm4gPSBzZWxlY3RQbHVyYWwocGwsIG51bWJlclJlc3VsdC5yb3VuZGVkTnVtYmVyICogTWF0aC5wb3coMTAsIGV4cG9uZW50KSwgZGF0YS51bml0cy5zaW1wbGVbdW5pdF1bdW5pdERpc3BsYXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cDovL3VuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWdlbmVyYWwuaHRtbCNwZXJVbml0UGF0dGVybnNcbiAgICAgICAgICAgICAgICAvLyBJZiBjYW5ub3QgZmluZCB1bml0IGluIHRoZSBzaW1wbGUgcGF0dGVybiwgaXQgbXVzdCBiZSBcInBlclwiIGNvbXBvdW5kIHBhdHRlcm4uXG4gICAgICAgICAgICAgICAgLy8gSW1wbGVtZW50YXRpb24gbm90ZTogd2UgYXJlIG5vdCBmb2xsb3dpbmcgVFItMzUgaGVyZSBiZWNhdXNlIHdlIG5lZWQgdG8gZm9ybWF0IHRvIHBhcnRzIVxuICAgICAgICAgICAgICAgIHZhciBfYiA9IHVuaXQuc3BsaXQoJy1wZXItJyksIG51bWVyYXRvclVuaXQgPSBfYlswXSwgZGVub21pbmF0b3JVbml0ID0gX2JbMV07XG4gICAgICAgICAgICAgICAgdW5pdERhdGEgPSBkYXRhLnVuaXRzLnNpbXBsZVtudW1lcmF0b3JVbml0XTtcbiAgICAgICAgICAgICAgICB2YXIgbnVtZXJhdG9yVW5pdFBhdHRlcm4gPSBzZWxlY3RQbHVyYWwocGwsIG51bWJlclJlc3VsdC5yb3VuZGVkTnVtYmVyICogTWF0aC5wb3coMTAsIGV4cG9uZW50KSwgZGF0YS51bml0cy5zaW1wbGVbbnVtZXJhdG9yVW5pdF1bdW5pdERpc3BsYXldKTtcbiAgICAgICAgICAgICAgICB2YXIgcGVyVW5pdFBhdHRlcm4gPSBkYXRhLnVuaXRzLnNpbXBsZVtkZW5vbWluYXRvclVuaXRdLnBlclVuaXRbdW5pdERpc3BsYXldO1xuICAgICAgICAgICAgICAgIGlmIChwZXJVbml0UGF0dGVybikge1xuICAgICAgICAgICAgICAgICAgICAvLyBwZXJVbml0UGF0dGVybiBleGlzdHMsIGNvbWJpbmUgaXQgd2l0aCBudW1lcmF0b3JVbml0UGF0dGVyblxuICAgICAgICAgICAgICAgICAgICB1bml0UGF0dGVybiA9IHBlclVuaXRQYXR0ZXJuLnJlcGxhY2UoJ3swfScsIG51bWVyYXRvclVuaXRQYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCBjb21wb3VuZFVuaXQgcGF0dGVybiAoZS5nLiBcInswfSBwZXIgezF9XCIpLCByZXBhbGNlIHswfSB3aXRoIG51bWVyYXRvciBwYXR0ZXJuIGFuZCB7MX0gd2l0aFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZGVub21pbmF0b3IgcGF0dGVybiBpbiBzaW5ndWxhciBmb3JtLlxuICAgICAgICAgICAgICAgICAgICB2YXIgcGVyUGF0dGVybiA9IGRhdGEudW5pdHMuY29tcG91bmQucGVyW3VuaXREaXNwbGF5XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbm9taW5hdG9yUGF0dGVybiA9IHNlbGVjdFBsdXJhbChwbCwgMSwgZGF0YS51bml0cy5zaW1wbGVbZGVub21pbmF0b3JVbml0XVt1bml0RGlzcGxheV0pO1xuICAgICAgICAgICAgICAgICAgICB1bml0UGF0dGVybiA9IHVuaXRQYXR0ZXJuID0gcGVyUGF0dGVyblxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3swfScsIG51bWVyYXRvclVuaXRQYXR0ZXJuKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3sxfScsIGRlbm9taW5hdG9yUGF0dGVybi5yZXBsYWNlKCd7MH0nLCAnJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgc3BhY2luZyBhcm91bmQgXCJ7MH1cIiBiZWNhdXNlIHRoZXkgYXJlIG5vdCB0cmVhdGVkIGFzIFwidW5pdFwiIHBhcnRzLCBidXQgXCJsaXRlcmFsXCIuXG4gICAgICAgICAgICBmb3IgKHZhciBfYyA9IDAsIF9kID0gdW5pdFBhdHRlcm4uc3BsaXQoLyhcXHMqXFx7MFxcfVxccyopLyk7IF9jIDwgX2QubGVuZ3RoOyBfYysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBfZFtfY107XG4gICAgICAgICAgICAgICAgdmFyIGludGVycG9sYXRlTWF0Y2ggPSAvXihcXHMqKVxcezBcXH0oXFxzKikkLy5leGVjKHBhcnQpO1xuICAgICAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNwYWNlIGJlZm9yZSBcInswfVwiXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0ZU1hdGNoWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6IGludGVycG9sYXRlTWF0Y2hbMV0gfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gXCJ7MH1cIiBpdHNlbGZcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2guYXBwbHkocmVzdWx0LCBudW1iZXJQYXJ0cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNwYWNlIGFmdGVyIFwiezB9XCJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludGVycG9sYXRlTWF0Y2hbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgdHlwZTogJ2xpdGVyYWwnLCB2YWx1ZTogaW50ZXJwb2xhdGVNYXRjaFsyXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgdHlwZTogJ3VuaXQnLCB2YWx1ZTogcGFydCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyUGFydHM7XG4gICAgfVxuICAgIC8vICNlbmRyZWdpb25cbn1cbi8vIEEgc3Vic2V0IG9mIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtcGFydGl0aW9ubm90YXRpb25zdWJwYXR0ZXJuXG4vLyBQbHVzIHRoZSBleHBvbmVudCBwYXJ0cyBoYW5kbGluZy5cbmZ1bmN0aW9uIHBhcml0aW9uTnVtYmVySW50b1BhcnRzKHN5bWJvbHMsIG51bWJlclJlc3VsdCwgbm90YXRpb24sIGV4cG9uZW50LCBudW1iZXJpbmdTeXN0ZW0sIHVzZUdyb3VwaW5nLCBcbi8qKlxuICogVGhpcyBpcyB0aGUgZGVjaW1hbCBudW1iZXIgcGF0dGVybiB3aXRob3V0IHNpZ25zIG9yIHN5bWJvbHMuXG4gKiBJdCBpcyB1c2VkIHRvIGluZmVyIHRoZSBncm91cCBzaXplIHdoZW4gYHVzZUdyb3VwaW5nYCBpcyB0cnVlLlxuICpcbiAqIEEgdHlwaWNhbCB2YWx1ZSBsb29rcyBsaWtlIFwiIywjIzAuMDBcIiAocHJpbWFyeSBncm91cCBzaXplIGlzIDMpLlxuICogU29tZSBsb2NhbGVzIGxpa2UgSGluZGkgaGFzIHNlY29uZGFyeSBncm91cCBzaXplIG9mIDIgKGUuZy4gXCIjLCMjLCMjMC4wMFwiKS5cbiAqL1xuZGVjaW1hbE51bWJlclBhdHRlcm4pIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuICAgIHZhciBuID0gbnVtYmVyUmVzdWx0LmZvcm1hdHRlZFN0cmluZywgeCA9IG51bWJlclJlc3VsdC5yb3VuZGVkTnVtYmVyO1xuICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICByZXR1cm4gW3sgdHlwZTogJ25hbicsIHZhbHVlOiBuIH1dO1xuICAgIH1cbiAgICBlbHNlIGlmICghaXNGaW5pdGUoeCkpIHtcbiAgICAgICAgcmV0dXJuIFt7IHR5cGU6ICdpbmZpbml0eScsIHZhbHVlOiBuIH1dO1xuICAgIH1cbiAgICB2YXIgZGlnaXRSZXBsYWNlbWVudFRhYmxlID0gZGlnaXRNYXBwaW5nW251bWJlcmluZ1N5c3RlbV07XG4gICAgaWYgKGRpZ2l0UmVwbGFjZW1lbnRUYWJsZSkge1xuICAgICAgICBuID0gbi5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKGRpZ2l0KSB7IHJldHVybiBkaWdpdFJlcGxhY2VtZW50VGFibGVbK2RpZ2l0XSB8fCBkaWdpdDsgfSk7XG4gICAgfVxuICAgIC8vIFRPRE86IEVsc2UgdXNlIGFuIGltcGxlbWVudGF0aW9uIGRlcGVuZGVudCBhbGdvcml0aG0gdG8gbWFwIG4gdG8gdGhlIGFwcHJvcHJpYXRlXG4gICAgLy8gcmVwcmVzZW50YXRpb24gb2YgbiBpbiB0aGUgZ2l2ZW4gbnVtYmVyaW5nIHN5c3RlbS5cbiAgICB2YXIgZGVjaW1hbFNlcEluZGV4ID0gbi5pbmRleE9mKCcuJyk7XG4gICAgdmFyIGludGVnZXI7XG4gICAgdmFyIGZyYWN0aW9uO1xuICAgIGlmIChkZWNpbWFsU2VwSW5kZXggPiAwKSB7XG4gICAgICAgIGludGVnZXIgPSBuLnNsaWNlKDAsIGRlY2ltYWxTZXBJbmRleCk7XG4gICAgICAgIGZyYWN0aW9uID0gbi5zbGljZShkZWNpbWFsU2VwSW5kZXggKyAxKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGludGVnZXIgPSBuO1xuICAgIH1cbiAgICAvLyAjcmVnaW9uIEdyb3VwaW5nIGludGVnZXIgZGlnaXRzXG4gICAgLy8gVGhlIHdlaXJkIGNvbXBhY3QgYW5kIHggPj0gMTAwMDAgY2hlY2sgaXMgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IHdpdGggTm9kZS5qcyBhbmQgQ2hyb21lLlxuICAgIC8vIE5vdGUgdGhhdCBgZGVgIGRvZXMgbm90IGhhdmUgY29tcGFjdCBmb3JtIGZvciB0aG91c2FuZHMsIGJ1dCBOb2RlLmpzIGRvZXMgbm90IGluc2VydCBncm91cGluZyBzZXBhcmF0b3JcbiAgICAvLyB1bmxlc3MgdGhlIHJvdW5kZWQgbnVtYmVyIGlzIGdyZWF0ZXIgdGhhbiAxMDAwMDpcbiAgICAvLyAgIE51bWJlckZvcm1hdCgnZGUnLCB7bm90YXRpb246ICdjb21wYWN0JywgY29tcGFjdERpc3BsYXk6ICdzaG9ydCd9KS5mb3JtYXQoMTIzNCkgLy89PiBcIjEyMzRcIlxuICAgIC8vICAgTnVtYmVyRm9ybWF0KCdkZScpLmZvcm1hdCgxMjM0KSAvLz0+IFwiMS4yMzRcIlxuICAgIGlmICh1c2VHcm91cGluZyAmJiAobm90YXRpb24gIT09ICdjb21wYWN0JyB8fCB4ID49IDEwMDAwKSkge1xuICAgICAgICB2YXIgZ3JvdXBTZXBTeW1ib2wgPSBzeW1ib2xzLmdyb3VwO1xuICAgICAgICB2YXIgZ3JvdXBzID0gW107XG4gICAgICAgIC8vID4gVGhlcmUgbWF5IGJlIHR3byBkaWZmZXJlbnQgZ3JvdXBpbmcgc2l6ZXM6IFRoZSBwcmltYXJ5IGdyb3VwaW5nIHNpemUgdXNlZCBmb3IgdGhlIGxlYXN0XG4gICAgICAgIC8vID4gc2lnbmlmaWNhbnQgaW50ZWdlciBncm91cCwgYW5kIHRoZSBzZWNvbmRhcnkgZ3JvdXBpbmcgc2l6ZSB1c2VkIGZvciBtb3JlIHNpZ25pZmljYW50IGdyb3Vwcy5cbiAgICAgICAgLy8gPiBJZiBhIHBhdHRlcm4gY29udGFpbnMgbXVsdGlwbGUgZ3JvdXBpbmcgc2VwYXJhdG9ycywgdGhlIGludGVydmFsIGJldHdlZW4gdGhlIGxhc3Qgb25lIGFuZCB0aGVcbiAgICAgICAgLy8gPiBlbmQgb2YgdGhlIGludGVnZXIgZGVmaW5lcyB0aGUgcHJpbWFyeSBncm91cGluZyBzaXplLCBhbmQgdGhlIGludGVydmFsIGJldHdlZW4gdGhlIGxhc3QgdHdvXG4gICAgICAgIC8vID4gZGVmaW5lcyB0aGUgc2Vjb25kYXJ5IGdyb3VwaW5nIHNpemUuIEFsbCBvdGhlcnMgYXJlIGlnbm9yZWQuXG4gICAgICAgIHZhciBpbnRlZ2VyTnVtYmVyUGF0dGVybiA9IGRlY2ltYWxOdW1iZXJQYXR0ZXJuLnNwbGl0KCcuJylbMF07XG4gICAgICAgIHZhciBwYXR0ZXJuR3JvdXBzID0gaW50ZWdlck51bWJlclBhdHRlcm4uc3BsaXQoJywnKTtcbiAgICAgICAgdmFyIHByaW1hcnlHcm91cGluZ1NpemUgPSAzO1xuICAgICAgICB2YXIgc2Vjb25kYXJ5R3JvdXBpbmdTaXplID0gMztcbiAgICAgICAgaWYgKHBhdHRlcm5Hcm91cHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcHJpbWFyeUdyb3VwaW5nU2l6ZSA9IHBhdHRlcm5Hcm91cHNbcGF0dGVybkdyb3Vwcy5sZW5ndGggLSAxXS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdHRlcm5Hcm91cHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgc2Vjb25kYXJ5R3JvdXBpbmdTaXplID0gcGF0dGVybkdyb3Vwc1twYXR0ZXJuR3JvdXBzLmxlbmd0aCAtIDJdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IGludGVnZXIubGVuZ3RoIC0gcHJpbWFyeUdyb3VwaW5nU2l6ZTtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAvLyBTbGljZSB0aGUgbGVhc3Qgc2lnbmlmaWNhbnQgaW50ZWdlciBncm91cFxuICAgICAgICAgICAgZ3JvdXBzLnB1c2goaW50ZWdlci5zbGljZShpLCBpICsgcHJpbWFyeUdyb3VwaW5nU2l6ZSkpO1xuICAgICAgICAgICAgLy8gVGhlbiBpdGVyYXRpdmVseSBwdXNoIHRoZSBtb3JlIHNpZ25pY2FudCBncm91cHNcbiAgICAgICAgICAgIC8vIFRPRE86IGhhbmRsZSBzdXJyb2dhdGUgcGFpcnMgaW4gc29tZSBudW1iZXJpbmcgc3lzdGVtIGRpZ2l0c1xuICAgICAgICAgICAgZm9yIChpIC09IHNlY29uZGFyeUdyb3VwaW5nU2l6ZTsgaSA+IDA7IGkgLT0gc2Vjb25kYXJ5R3JvdXBpbmdTaXplKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzLnB1c2goaW50ZWdlci5zbGljZShpLCBpICsgc2Vjb25kYXJ5R3JvdXBpbmdTaXplKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cHMucHVzaChpbnRlZ2VyLnNsaWNlKDAsIGkgKyBzZWNvbmRhcnlHcm91cGluZ1NpemUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKGludGVnZXIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChncm91cHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGludGVnZXJHcm91cCA9IGdyb3Vwcy5wb3AoKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgdHlwZTogJ2ludGVnZXInLCB2YWx1ZTogaW50ZWdlckdyb3VwIH0pO1xuICAgICAgICAgICAgaWYgKGdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyB0eXBlOiAnZ3JvdXAnLCB2YWx1ZTogZ3JvdXBTZXBTeW1ib2wgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHsgdHlwZTogJ2ludGVnZXInLCB2YWx1ZTogaW50ZWdlciB9KTtcbiAgICB9XG4gICAgLy8gI2VuZHJlZ2lvblxuICAgIGlmIChmcmFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHsgdHlwZTogJ2RlY2ltYWwnLCB2YWx1ZTogc3ltYm9scy5kZWNpbWFsIH0sIHsgdHlwZTogJ2ZyYWN0aW9uJywgdmFsdWU6IGZyYWN0aW9uIH0pO1xuICAgIH1cbiAgICBpZiAoKG5vdGF0aW9uID09PSAnc2NpZW50aWZpYycgfHwgbm90YXRpb24gPT09ICdlbmdpbmVlcmluZycpICYmXG4gICAgICAgIGlzRmluaXRlKHgpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHsgdHlwZTogJ2V4cG9uZW50U2VwYXJhdG9yJywgdmFsdWU6IHN5bWJvbHMuZXhwb25lbnRpYWwgfSk7XG4gICAgICAgIGlmIChleHBvbmVudCA8IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgdHlwZTogJ2V4cG9uZW50TWludXNTaWduJywgdmFsdWU6IHN5bWJvbHMubWludXNTaWduIH0pO1xuICAgICAgICAgICAgZXhwb25lbnQgPSAtZXhwb25lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV4cG9uZW50UmVzdWx0ID0gVG9SYXdGaXhlZChleHBvbmVudCwgMCwgMCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdleHBvbmVudEludGVnZXInLFxuICAgICAgICAgICAgdmFsdWU6IGV4cG9uZW50UmVzdWx0LmZvcm1hdHRlZFN0cmluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRQYXR0ZXJuRm9yU2lnbihwYXR0ZXJuLCBzaWduKSB7XG4gICAgaWYgKHBhdHRlcm4uaW5kZXhPZignOycpIDwgMCkge1xuICAgICAgICBwYXR0ZXJuID0gcGF0dGVybiArIFwiOy1cIiArIHBhdHRlcm47XG4gICAgfVxuICAgIHZhciBfYSA9IHBhdHRlcm4uc3BsaXQoJzsnKSwgemVyb1BhdHRlcm4gPSBfYVswXSwgbmVnYXRpdmVQYXR0ZXJuID0gX2FbMV07XG4gICAgc3dpdGNoIChzaWduKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB6ZXJvUGF0dGVybjtcbiAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICAgIHJldHVybiBuZWdhdGl2ZVBhdHRlcm47XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbmVnYXRpdmVQYXR0ZXJuLmluZGV4T2YoJy0nKSA+PSAwXG4gICAgICAgICAgICAgICAgPyBuZWdhdGl2ZVBhdHRlcm4ucmVwbGFjZSgvLS9nLCAnKycpXG4gICAgICAgICAgICAgICAgOiBcIitcIiArIHplcm9QYXR0ZXJuO1xuICAgIH1cbn1cbi8vIEZpbmQgdGhlIENMRFIgcGF0dGVybiBmb3IgY29tcGFjdCBub3RhdGlvbiBiYXNlZCBvbiB0aGUgbWFnbml0dWRlIG9mIGRhdGEgYW5kIHN0eWxlLlxuLy9cbi8vIEV4YW1wbGUgcmV0dXJuIHZhbHVlOiBcIsKkwqB7YzpsYWtpfTAwMDvCpHtjOmxha2l9wqAtMFwiIChgc3dgIGxvY2FsZSk6XG4vLyAtIE5vdGljZSB0aGUgYHtjOi4uLn1gIHRva2VuIHRoYXQgd3JhcHMgdGhlIGNvbXBhY3QgbGl0ZXJhbC5cbi8vIC0gVGhlIGNvbnNlY3V0aXZlIHplcm9zIGFyZSBub3JtYWxpemVkIHRvIHNpbmdsZSB6ZXJvIHRvIG1hdGNoIENMRFJfTlVNQkVSX1BBVFRFUk4uXG4vL1xuLy8gUmV0dXJuaW5nIG51bGwgbWVhbnMgdGhlIGNvbXBhY3QgZGlzcGxheSBwYXR0ZXJuIGNhbm5vdCBiZSBmb3VuZC5cbmZ1bmN0aW9uIGdldENvbXBhY3REaXNwbGF5UGF0dGVybihudW1iZXJSZXN1bHQsIHBsLCBkYXRhLCBzdHlsZSwgY29tcGFjdERpc3BsYXksIGN1cnJlbmN5RGlzcGxheSwgbnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciByb3VuZGVkTnVtYmVyID0gbnVtYmVyUmVzdWx0LnJvdW5kZWROdW1iZXIsIHNpZ24gPSBudW1iZXJSZXN1bHQuc2lnbiwgbWFnbml0dWRlID0gbnVtYmVyUmVzdWx0Lm1hZ25pdHVkZTtcbiAgICB2YXIgbWFnbml0dWRlS2V5ID0gU3RyaW5nKE1hdGgucG93KDEwLCBtYWduaXR1ZGUpKTtcbiAgICB2YXIgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IGRhdGEubnVtYmVycy5udVswXTtcbiAgICB2YXIgcGF0dGVybjtcbiAgICBpZiAoc3R5bGUgPT09ICdjdXJyZW5jeScgJiYgY3VycmVuY3lEaXNwbGF5ICE9PSAnbmFtZScpIHtcbiAgICAgICAgdmFyIGJ5TnVtYmVyaW5nU3lzdGVtID0gZGF0YS5udW1iZXJzLmN1cnJlbmN5O1xuICAgICAgICB2YXIgY3VycmVuY3lEYXRhID0gYnlOdW1iZXJpbmdTeXN0ZW1bbnVtYmVyaW5nU3lzdGVtXSB8fFxuICAgICAgICAgICAgYnlOdW1iZXJpbmdTeXN0ZW1bZGVmYXVsdE51bWJlcmluZ1N5c3RlbV07XG4gICAgICAgIC8vIE5PVEU6IGNvbXBhY3Qgbm90YXRpb24gaWdub3JlcyBjdXJyZW5jeVNpZ24hXG4gICAgICAgIHZhciBjb21wYWN0UGx1cmFsUnVsZXMgPSAoX2EgPSBjdXJyZW5jeURhdGEuc2hvcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVttYWduaXR1ZGVLZXldO1xuICAgICAgICBpZiAoIWNvbXBhY3RQbHVyYWxSdWxlcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcGF0dGVybiA9IHNlbGVjdFBsdXJhbChwbCwgcm91bmRlZE51bWJlciwgY29tcGFjdFBsdXJhbFJ1bGVzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBieU51bWJlcmluZ1N5c3RlbSA9IGRhdGEubnVtYmVycy5kZWNpbWFsO1xuICAgICAgICB2YXIgYnlDb21wYWN0RGlzcGxheSA9IGJ5TnVtYmVyaW5nU3lzdGVtW251bWJlcmluZ1N5c3RlbV0gfHxcbiAgICAgICAgICAgIGJ5TnVtYmVyaW5nU3lzdGVtW2RlZmF1bHROdW1iZXJpbmdTeXN0ZW1dO1xuICAgICAgICB2YXIgY29tcGFjdFBsYXJhbFJ1bGUgPSBieUNvbXBhY3REaXNwbGF5W2NvbXBhY3REaXNwbGF5XVttYWduaXR1ZGVLZXldO1xuICAgICAgICBpZiAoIWNvbXBhY3RQbGFyYWxSdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwYXR0ZXJuID0gc2VsZWN0UGx1cmFsKHBsLCByb3VuZGVkTnVtYmVyLCBjb21wYWN0UGxhcmFsUnVsZSk7XG4gICAgfVxuICAgIC8vIFNlZSBodHRwczovL3VuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LW51bWJlcnMuaHRtbCNDb21wYWN0X051bWJlcl9Gb3JtYXRzXG4gICAgLy8gPiBJZiB0aGUgdmFsdWUgaXMgcHJlY2lzZWx5IOKAnDDigJ0sIGVpdGhlciBleHBsaWNpdCBvciBkZWZhdWx0ZWQsIHRoZW4gdGhlIG5vcm1hbCBudW1iZXIgZm9ybWF0XG4gICAgLy8gPiBwYXR0ZXJuIGZvciB0aGF0IHNvcnQgb2Ygb2JqZWN0IGlzIHN1cHBsaWVkLlxuICAgIGlmIChwYXR0ZXJuID09PSAnMCcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHBhdHRlcm4gPSBnZXRQYXR0ZXJuRm9yU2lnbihwYXR0ZXJuLCBzaWduKVxuICAgICAgICAvLyBFeHRyYWN0IGNvbXBhY3QgbGl0ZXJhbCBmcm9tIHRoZSBwYXR0ZXJuXG4gICAgICAgIC5yZXBsYWNlKC8oW15cXHM7XFwtXFwrXFxkwqRdKykvZywgJ3tjOiQxfScpXG4gICAgICAgIC8vIFdlIHJlcGxhY2Ugb25lIG9yIG1vcmUgemVyb3Mgd2l0aCBhIHNpbmdsZSB6ZXJvIHNvIGl0IG1hdGNoZXMgYENMRFJfTlVNQkVSX1BBVFRFUk5gLlxuICAgICAgICAucmVwbGFjZSgvMCsvLCAnMCcpO1xuICAgIHJldHVybiBwYXR0ZXJuO1xufVxuZnVuY3Rpb24gc2VsZWN0UGx1cmFsKHBsLCB4LCBydWxlcykge1xuICAgIHJldHVybiBydWxlc1twbC5zZWxlY3QoeCldIHx8IHJ1bGVzLm90aGVyO1xufVxuIiwiaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAnLi91dGlscyc7XG4vKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtcGFydGl0aW9ucGF0dGVyblxuICogQHBhcmFtIHBhdHRlcm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBhcnRpdGlvblBhdHRlcm4ocGF0dGVybikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgYmVnaW5JbmRleCA9IHBhdHRlcm4uaW5kZXhPZigneycpO1xuICAgIHZhciBlbmRJbmRleCA9IDA7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IHBhdHRlcm4ubGVuZ3RoO1xuICAgIHdoaWxlIChiZWdpbkluZGV4IDwgcGF0dGVybi5sZW5ndGggJiYgYmVnaW5JbmRleCA+IC0xKSB7XG4gICAgICAgIGVuZEluZGV4ID0gcGF0dGVybi5pbmRleE9mKCd9JywgYmVnaW5JbmRleCk7XG4gICAgICAgIGludmFyaWFudChlbmRJbmRleCA+IGJlZ2luSW5kZXgsIFwiSW52YWxpZCBwYXR0ZXJuIFwiICsgcGF0dGVybik7XG4gICAgICAgIGlmIChiZWdpbkluZGV4ID4gbmV4dEluZGV4KSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpdGVyYWwnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXR0ZXJuLnN1YnN0cmluZyhuZXh0SW5kZXgsIGJlZ2luSW5kZXgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgdHlwZTogcGF0dGVybi5zdWJzdHJpbmcoYmVnaW5JbmRleCArIDEsIGVuZEluZGV4KSxcbiAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgICAgICBuZXh0SW5kZXggPSBlbmRJbmRleCArIDE7XG4gICAgICAgIGJlZ2luSW5kZXggPSBwYXR0ZXJuLmluZGV4T2YoJ3snLCBuZXh0SW5kZXgpO1xuICAgIH1cbiAgICBpZiAobmV4dEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaXRlcmFsJyxcbiAgICAgICAgICAgIHZhbHVlOiBwYXR0ZXJuLnN1YnN0cmluZyhuZXh0SW5kZXgsIGxlbmd0aCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHsgTG9va3VwTWF0Y2hlciB9IGZyb20gJy4vTG9va3VwTWF0Y2hlcic7XG5pbXBvcnQgeyBCZXN0Rml0TWF0Y2hlciB9IGZyb20gJy4vQmVzdEZpdE1hdGNoZXInO1xuaW1wb3J0IHsgaW52YXJpYW50IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBVbmljb2RlRXh0ZW5zaW9uVmFsdWUgfSBmcm9tICcuL1VuaWNvZGVFeHRlbnNpb25WYWx1ZSc7XG4vKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtcmVzb2x2ZWxvY2FsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gUmVzb2x2ZUxvY2FsZShhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzLCBvcHRpb25zLCByZWxldmFudEV4dGVuc2lvbktleXMsIGxvY2FsZURhdGEsIGdldERlZmF1bHRMb2NhbGUpIHtcbiAgICB2YXIgbWF0Y2hlciA9IG9wdGlvbnMubG9jYWxlTWF0Y2hlcjtcbiAgICB2YXIgcjtcbiAgICBpZiAobWF0Y2hlciA9PT0gJ2xvb2t1cCcpIHtcbiAgICAgICAgciA9IExvb2t1cE1hdGNoZXIoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcywgZ2V0RGVmYXVsdExvY2FsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByID0gQmVzdEZpdE1hdGNoZXIoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcywgZ2V0RGVmYXVsdExvY2FsZSk7XG4gICAgfVxuICAgIHZhciBmb3VuZExvY2FsZSA9IHIubG9jYWxlO1xuICAgIHZhciByZXN1bHQgPSB7IGxvY2FsZTogJycsIGRhdGFMb2NhbGU6IGZvdW5kTG9jYWxlIH07XG4gICAgdmFyIHN1cHBvcnRlZEV4dGVuc2lvbiA9ICctdSc7XG4gICAgZm9yICh2YXIgX2kgPSAwLCByZWxldmFudEV4dGVuc2lvbktleXNfMSA9IHJlbGV2YW50RXh0ZW5zaW9uS2V5czsgX2kgPCByZWxldmFudEV4dGVuc2lvbktleXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHJlbGV2YW50RXh0ZW5zaW9uS2V5c18xW19pXTtcbiAgICAgICAgaW52YXJpYW50KGZvdW5kTG9jYWxlIGluIGxvY2FsZURhdGEsIFwiTWlzc2luZyBsb2NhbGUgZGF0YSBmb3IgXCIgKyBmb3VuZExvY2FsZSk7XG4gICAgICAgIHZhciBmb3VuZExvY2FsZURhdGEgPSBsb2NhbGVEYXRhW2ZvdW5kTG9jYWxlXTtcbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiBmb3VuZExvY2FsZURhdGEgPT09ICdvYmplY3QnICYmIGZvdW5kTG9jYWxlRGF0YSAhPT0gbnVsbCwgXCJsb2NhbGUgZGF0YSBcIiArIGtleSArIFwiIG11c3QgYmUgYW4gb2JqZWN0XCIpO1xuICAgICAgICB2YXIga2V5TG9jYWxlRGF0YSA9IGZvdW5kTG9jYWxlRGF0YVtrZXldO1xuICAgICAgICBpbnZhcmlhbnQoQXJyYXkuaXNBcnJheShrZXlMb2NhbGVEYXRhKSwgXCJrZXlMb2NhbGVEYXRhIGZvciBcIiArIGtleSArIFwiIG11c3QgYmUgYW4gYXJyYXlcIik7XG4gICAgICAgIHZhciB2YWx1ZSA9IGtleUxvY2FsZURhdGFbMF07XG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHZhbHVlID09PSBudWxsLCBcInZhbHVlIG11c3QgYmUgc3RyaW5nIG9yIG51bGwgYnV0IGdvdCBcIiArIHR5cGVvZiB2YWx1ZSArIFwiIGluIGtleSBcIiArIGtleSk7XG4gICAgICAgIHZhciBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiA9ICcnO1xuICAgICAgICBpZiAoci5leHRlbnNpb24pIHtcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ZWRWYWx1ZSA9IFVuaWNvZGVFeHRlbnNpb25WYWx1ZShyLmV4dGVuc2lvbiwga2V5KTtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0ZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RlZFZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAofmtleUxvY2FsZURhdGEuaW5kZXhPZihyZXF1ZXN0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVxdWVzdGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiA9IFwiLVwiICsga2V5ICsgXCItXCIgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh+cmVxdWVzdGVkVmFsdWUuaW5kZXhPZigndHJ1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJ3RydWUnO1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWRFeHRlbnNpb25BZGRpdGlvbiA9IFwiLVwiICsga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zVmFsdWUgPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIG9wdGlvbnNWYWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9uc1ZhbHVlID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgICAgIG9wdGlvbnNWYWx1ZSA9PT0gbnVsbCwgJ29wdGlvbnNWYWx1ZSBtdXN0IGJlIFN0cmluZywgVW5kZWZpbmVkIG9yIE51bGwnKTtcbiAgICAgICAgICAgIGlmICh+a2V5TG9jYWxlRGF0YS5pbmRleE9mKG9wdGlvbnNWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbnNWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkRXh0ZW5zaW9uQWRkaXRpb24gPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgc3VwcG9ydGVkRXh0ZW5zaW9uICs9IHN1cHBvcnRlZEV4dGVuc2lvbkFkZGl0aW9uO1xuICAgIH1cbiAgICBpZiAoc3VwcG9ydGVkRXh0ZW5zaW9uLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdmFyIHByaXZhdGVJbmRleCA9IGZvdW5kTG9jYWxlLmluZGV4T2YoJy14LScpO1xuICAgICAgICBpZiAocHJpdmF0ZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgZm91bmRMb2NhbGUgPSBmb3VuZExvY2FsZSArIHN1cHBvcnRlZEV4dGVuc2lvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVFeHRlbnNpb24gPSBmb3VuZExvY2FsZS5zbGljZSgwLCBwcml2YXRlSW5kZXgpO1xuICAgICAgICAgICAgdmFyIHBvc3RFeHRlbnNpb24gPSBmb3VuZExvY2FsZS5zbGljZShwcml2YXRlSW5kZXgsIGZvdW5kTG9jYWxlLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3VuZExvY2FsZSA9IHByZUV4dGVuc2lvbiArIHN1cHBvcnRlZEV4dGVuc2lvbiArIHBvc3RFeHRlbnNpb247XG4gICAgICAgIH1cbiAgICAgICAgZm91bmRMb2NhbGUgPSBJbnRsLmdldENhbm9uaWNhbExvY2FsZXMoZm91bmRMb2NhbGUpWzBdO1xuICAgIH1cbiAgICByZXN1bHQubG9jYWxlID0gZm91bmRMb2NhbGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IFRvT2JqZWN0IH0gZnJvbSAnLi8yNjInO1xuaW1wb3J0IHsgR2V0T3B0aW9uIH0gZnJvbSAnLi9HZXRPcHRpb24nO1xuaW1wb3J0IHsgTG9va3VwU3VwcG9ydGVkTG9jYWxlcyB9IGZyb20gJy4vTG9va3VwU3VwcG9ydGVkTG9jYWxlcyc7XG4vKipcbiAqIGh0dHBzOi8vdGMzOS5lcy9lY21hNDAyLyNzZWMtc3VwcG9ydGVkbG9jYWxlc1xuICogQHBhcmFtIGF2YWlsYWJsZUxvY2FsZXNcbiAqIEBwYXJhbSByZXF1ZXN0ZWRMb2NhbGVzXG4gKiBAcGFyYW0gb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gU3VwcG9ydGVkTG9jYWxlcyhhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzLCBvcHRpb25zKSB7XG4gICAgdmFyIG1hdGNoZXIgPSAnYmVzdCBmaXQnO1xuICAgIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9ucyA9IFRvT2JqZWN0KG9wdGlvbnMpO1xuICAgICAgICBtYXRjaGVyID0gR2V0T3B0aW9uKG9wdGlvbnMsICdsb2NhbGVNYXRjaGVyJywgJ3N0cmluZycsIFsnbG9va3VwJywgJ2Jlc3QgZml0J10sICdiZXN0IGZpdCcpO1xuICAgIH1cbiAgICBpZiAobWF0Y2hlciA9PT0gJ2Jlc3QgZml0Jykge1xuICAgICAgICByZXR1cm4gTG9va3VwU3VwcG9ydGVkTG9jYWxlcyhhdmFpbGFibGVMb2NhbGVzLCByZXF1ZXN0ZWRMb2NhbGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIExvb2t1cFN1cHBvcnRlZExvY2FsZXMoYXZhaWxhYmxlTG9jYWxlcywgcmVxdWVzdGVkTG9jYWxlcyk7XG59XG4iLCJpbXBvcnQgeyBpbnZhcmlhbnQgfSBmcm9tICcuL3V0aWxzJztcbi8qKlxuICogaHR0cHM6Ly90YzM5LmVzL2VjbWE0MDIvI3NlYy11bmljb2RlZXh0ZW5zaW9udmFsdWVcbiAqIEBwYXJhbSBleHRlbnNpb25cbiAqIEBwYXJhbSBrZXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFVuaWNvZGVFeHRlbnNpb25WYWx1ZShleHRlbnNpb24sIGtleSkge1xuICAgIGludmFyaWFudChrZXkubGVuZ3RoID09PSAyLCAna2V5IG11c3QgaGF2ZSAyIGVsZW1lbnRzJyk7XG4gICAgdmFyIHNpemUgPSBleHRlbnNpb24ubGVuZ3RoO1xuICAgIHZhciBzZWFyY2hWYWx1ZSA9IFwiLVwiICsga2V5ICsgXCItXCI7XG4gICAgdmFyIHBvcyA9IGV4dGVuc2lvbi5pbmRleE9mKHNlYXJjaFZhbHVlKTtcbiAgICBpZiAocG9zICE9PSAtMSkge1xuICAgICAgICB2YXIgc3RhcnQgPSBwb3MgKyA0O1xuICAgICAgICB2YXIgZW5kID0gc3RhcnQ7XG4gICAgICAgIHZhciBrID0gc3RhcnQ7XG4gICAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICAgICAgdmFyIGUgPSBleHRlbnNpb24uaW5kZXhPZignLScsIGspO1xuICAgICAgICAgICAgdmFyIGxlbiA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChlID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGxlbiA9IHNpemUgLSBrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGVuID0gZSAtIGs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVuID09PSAyKSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IHNpemU7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBlO1xuICAgICAgICAgICAgICAgIGsgPSBlICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXh0ZW5zaW9uLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgICBzZWFyY2hWYWx1ZSA9IFwiLVwiICsga2V5O1xuICAgIHBvcyA9IGV4dGVuc2lvbi5pbmRleE9mKHNlYXJjaFZhbHVlKTtcbiAgICBpZiAocG9zICE9PSAtMSAmJiBwb3MgKyAzID09PSBzaXplKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiIsImltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xudmFyIE1pc3NpbmdMb2NhbGVEYXRhRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1pc3NpbmdMb2NhbGVEYXRhRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWlzc2luZ0xvY2FsZURhdGFFcnJvcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnR5cGUgPSAnTUlTU0lOR19MT0NBTEVfREFUQSc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIE1pc3NpbmdMb2NhbGVEYXRhRXJyb3I7XG59KEVycm9yKSk7XG5leHBvcnQgZnVuY3Rpb24gaXNNaXNzaW5nTG9jYWxlRGF0YUVycm9yKGUpIHtcbiAgICByZXR1cm4gZS50eXBlID09PSAnTUlTU0lOR19MT0NBTEVfREFUQSc7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL0Nhbm9uaWNhbGl6ZUxvY2FsZUxpc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9DYW5vbmljYWxpemVUaW1lWm9uZU5hbWUnO1xuZXhwb3J0ICogZnJvbSAnLi9Db2VyY2VPcHRpb25zVG9PYmplY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9HZXROdW1iZXJPcHRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9HZXRPcHRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9HZXRPcHRpb25zT2JqZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vSXNTYW5jdGlvbmVkU2ltcGxlVW5pdElkZW50aWZpZXInO1xuZXhwb3J0ICogZnJvbSAnLi9Jc1ZhbGlkVGltZVpvbmVOYW1lJztcbmV4cG9ydCAqIGZyb20gJy4vSXNXZWxsRm9ybWVkQ3VycmVuY3lDb2RlJztcbmV4cG9ydCAqIGZyb20gJy4vSXNXZWxsRm9ybWVkVW5pdElkZW50aWZpZXInO1xuZXhwb3J0ICogZnJvbSAnLi9OdW1iZXJGb3JtYXQvQ29tcHV0ZUV4cG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vTnVtYmVyRm9ybWF0L0NvbXB1dGVFeHBvbmVudEZvck1hZ25pdHVkZSc7XG5leHBvcnQgKiBmcm9tICcuL051bWJlckZvcm1hdC9DdXJyZW5jeURpZ2l0cyc7XG5leHBvcnQgKiBmcm9tICcuL051bWJlckZvcm1hdC9Gb3JtYXROdW1lcmljVG9QYXJ0cyc7XG5leHBvcnQgKiBmcm9tICcuL051bWJlckZvcm1hdC9Gb3JtYXROdW1lcmljVG9TdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9OdW1iZXJGb3JtYXQvSW5pdGlhbGl6ZU51bWJlckZvcm1hdCc7XG5leHBvcnQgKiBmcm9tICcuL051bWJlckZvcm1hdC9QYXJ0aXRpb25OdW1iZXJQYXR0ZXJuJztcbmV4cG9ydCAqIGZyb20gJy4vTnVtYmVyRm9ybWF0L1NldE51bWJlckZvcm1hdERpZ2l0T3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL051bWJlckZvcm1hdC9TZXROdW1iZXJGb3JtYXRVbml0T3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL051bWJlckZvcm1hdC9Ub1Jhd0ZpeGVkJztcbmV4cG9ydCAqIGZyb20gJy4vTnVtYmVyRm9ybWF0L1RvUmF3UHJlY2lzaW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgX2Zvcm1hdFRvUGFydHMgfSBmcm9tICcuL051bWJlckZvcm1hdC9mb3JtYXRfdG9fcGFydHMnO1xuZXhwb3J0ICogZnJvbSAnLi9QYXJ0aXRpb25QYXR0ZXJuJztcbmV4cG9ydCAqIGZyb20gJy4vUmVzb2x2ZUxvY2FsZSc7XG5leHBvcnQgKiBmcm9tICcuL1N1cHBvcnRlZExvY2FsZXMnO1xuZXhwb3J0IHsgZ2V0SW50ZXJuYWxTbG90LCBnZXRNdWx0aUludGVybmFsU2xvdHMsIGlzTGl0ZXJhbFBhcnQsIHNldEludGVybmFsU2xvdCwgc2V0TXVsdGlJbnRlcm5hbFNsb3RzLCBnZXRNYWduaXR1ZGUsIGRlZmluZVByb3BlcnR5LCB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHsgaXNNaXNzaW5nTG9jYWxlRGF0YUVycm9yIH0gZnJvbSAnLi9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMvcmVsYXRpdmUtdGltZSc7XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzL2RhdGUtdGltZSc7XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzL2xpc3QnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcy9wbHVyYWwtcnVsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcy9udW1iZXInO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcy9kaXNwbGF5bmFtZXMnO1xuZXhwb3J0IHsgaW52YXJpYW50IH0gZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuLzI2Mic7XG4iLCIvLyBAZ2VuZXJhdGVkIGZyb20gcmVnZXgtZ2VuLnRzXG5leHBvcnQgdmFyIFNfVU5JQ09ERV9SRUdFWCA9IC9bXFwkXFwrPC0+XFxeYFxcfH5cXHhBMi1cXHhBNlxceEE4XFx4QTlcXHhBQ1xceEFFLVxceEIxXFx4QjRcXHhCOFxceEQ3XFx4RjdcXHUwMkMyLVxcdTAyQzVcXHUwMkQyLVxcdTAyREZcXHUwMkU1LVxcdTAyRUJcXHUwMkVEXFx1MDJFRi1cXHUwMkZGXFx1MDM3NVxcdTAzODRcXHUwMzg1XFx1MDNGNlxcdTA0ODJcXHUwNThELVxcdTA1OEZcXHUwNjA2LVxcdTA2MDhcXHUwNjBCXFx1MDYwRVxcdTA2MEZcXHUwNkRFXFx1MDZFOVxcdTA2RkRcXHUwNkZFXFx1MDdGNlxcdTA3RkVcXHUwN0ZGXFx1MDlGMlxcdTA5RjNcXHUwOUZBXFx1MDlGQlxcdTBBRjFcXHUwQjcwXFx1MEJGMy1cXHUwQkZBXFx1MEM3RlxcdTBENEZcXHUwRDc5XFx1MEUzRlxcdTBGMDEtXFx1MEYwM1xcdTBGMTNcXHUwRjE1LVxcdTBGMTdcXHUwRjFBLVxcdTBGMUZcXHUwRjM0XFx1MEYzNlxcdTBGMzhcXHUwRkJFLVxcdTBGQzVcXHUwRkM3LVxcdTBGQ0NcXHUwRkNFXFx1MEZDRlxcdTBGRDUtXFx1MEZEOFxcdTEwOUVcXHUxMDlGXFx1MTM5MC1cXHUxMzk5XFx1MTY2RFxcdTE3REJcXHUxOTQwXFx1MTlERS1cXHUxOUZGXFx1MUI2MS1cXHUxQjZBXFx1MUI3NC1cXHUxQjdDXFx1MUZCRFxcdTFGQkYtXFx1MUZDMVxcdTFGQ0QtXFx1MUZDRlxcdTFGREQtXFx1MUZERlxcdTFGRUQtXFx1MUZFRlxcdTFGRkRcXHUxRkZFXFx1MjA0NFxcdTIwNTJcXHUyMDdBLVxcdTIwN0NcXHUyMDhBLVxcdTIwOENcXHUyMEEwLVxcdTIwQkZcXHUyMTAwXFx1MjEwMVxcdTIxMDMtXFx1MjEwNlxcdTIxMDhcXHUyMTA5XFx1MjExNFxcdTIxMTYtXFx1MjExOFxcdTIxMUUtXFx1MjEyM1xcdTIxMjVcXHUyMTI3XFx1MjEyOVxcdTIxMkVcXHUyMTNBXFx1MjEzQlxcdTIxNDAtXFx1MjE0NFxcdTIxNEEtXFx1MjE0RFxcdTIxNEZcXHUyMThBXFx1MjE4QlxcdTIxOTAtXFx1MjMwN1xcdTIzMEMtXFx1MjMyOFxcdTIzMkItXFx1MjQyNlxcdTI0NDAtXFx1MjQ0QVxcdTI0OUMtXFx1MjRFOVxcdTI1MDAtXFx1Mjc2N1xcdTI3OTQtXFx1MjdDNFxcdTI3QzctXFx1MjdFNVxcdTI3RjAtXFx1Mjk4MlxcdTI5OTktXFx1MjlEN1xcdTI5REMtXFx1MjlGQlxcdTI5RkUtXFx1MkI3M1xcdTJCNzYtXFx1MkI5NVxcdTJCOTctXFx1MkJGRlxcdTJDRTUtXFx1MkNFQVxcdTJFNTBcXHUyRTUxXFx1MkU4MC1cXHUyRTk5XFx1MkU5Qi1cXHUyRUYzXFx1MkYwMC1cXHUyRkQ1XFx1MkZGMC1cXHUyRkZCXFx1MzAwNFxcdTMwMTJcXHUzMDEzXFx1MzAyMFxcdTMwMzZcXHUzMDM3XFx1MzAzRVxcdTMwM0ZcXHUzMDlCXFx1MzA5Q1xcdTMxOTBcXHUzMTkxXFx1MzE5Ni1cXHUzMTlGXFx1MzFDMC1cXHUzMUUzXFx1MzIwMC1cXHUzMjFFXFx1MzIyQS1cXHUzMjQ3XFx1MzI1MFxcdTMyNjAtXFx1MzI3RlxcdTMyOEEtXFx1MzJCMFxcdTMyQzAtXFx1MzNGRlxcdTREQzAtXFx1NERGRlxcdUE0OTAtXFx1QTRDNlxcdUE3MDAtXFx1QTcxNlxcdUE3MjBcXHVBNzIxXFx1QTc4OVxcdUE3OEFcXHVBODI4LVxcdUE4MkJcXHVBODM2LVxcdUE4MzlcXHVBQTc3LVxcdUFBNzlcXHVBQjVCXFx1QUI2QVxcdUFCNkJcXHVGQjI5XFx1RkJCMi1cXHVGQkMxXFx1RkRGQ1xcdUZERkRcXHVGRTYyXFx1RkU2NC1cXHVGRTY2XFx1RkU2OVxcdUZGMDRcXHVGRjBCXFx1RkYxQy1cXHVGRjFFXFx1RkYzRVxcdUZGNDBcXHVGRjVDXFx1RkY1RVxcdUZGRTAtXFx1RkZFNlxcdUZGRTgtXFx1RkZFRVxcdUZGRkNcXHVGRkZEXXxcXHVEODAwW1xcdUREMzctXFx1REQzRlxcdURENzktXFx1REQ4OVxcdUREOEMtXFx1REQ4RVxcdUREOTAtXFx1REQ5Q1xcdUREQTBcXHVEREQwLVxcdURERkNdfFxcdUQ4MDJbXFx1REM3N1xcdURDNzhcXHVERUM4XXxcXHVEODA1XFx1REYzRnxcXHVEODA3W1xcdURGRDUtXFx1REZGMV18XFx1RDgxQVtcXHVERjNDLVxcdURGM0ZcXHVERjQ1XXxcXHVEODJGXFx1REM5Q3xcXHVEODM0W1xcdURDMDAtXFx1RENGNVxcdUREMDAtXFx1REQyNlxcdUREMjktXFx1REQ2NFxcdURENkEtXFx1REQ2Q1xcdUREODNcXHVERDg0XFx1REQ4Qy1cXHVEREE5XFx1RERBRS1cXHVEREU4XFx1REUwMC1cXHVERTQxXFx1REU0NVxcdURGMDAtXFx1REY1Nl18XFx1RDgzNVtcXHVERUMxXFx1REVEQlxcdURFRkJcXHVERjE1XFx1REYzNVxcdURGNEZcXHVERjZGXFx1REY4OVxcdURGQTlcXHVERkMzXXxcXHVEODM2W1xcdURDMDAtXFx1RERGRlxcdURFMzctXFx1REUzQVxcdURFNkQtXFx1REU3NFxcdURFNzYtXFx1REU4M1xcdURFODVcXHVERTg2XXxcXHVEODM4W1xcdURENEZcXHVERUZGXXxcXHVEODNCW1xcdURDQUNcXHVEQ0IwXFx1REQyRVxcdURFRjBcXHVERUYxXXxcXHVEODNDW1xcdURDMDAtXFx1REMyQlxcdURDMzAtXFx1REM5M1xcdURDQTAtXFx1RENBRVxcdURDQjEtXFx1RENCRlxcdURDQzEtXFx1RENDRlxcdURDRDEtXFx1RENGNVxcdUREMEQtXFx1RERBRFxcdURERTYtXFx1REUwMlxcdURFMTAtXFx1REUzQlxcdURFNDAtXFx1REU0OFxcdURFNTBcXHVERTUxXFx1REU2MC1cXHVERTY1XFx1REYwMC1cXHVERkZGXXxcXHVEODNEW1xcdURDMDAtXFx1REVEN1xcdURFRTAtXFx1REVFQ1xcdURFRjAtXFx1REVGQ1xcdURGMDAtXFx1REY3M1xcdURGODAtXFx1REZEOFxcdURGRTAtXFx1REZFQl18XFx1RDgzRVtcXHVEQzAwLVxcdURDMEJcXHVEQzEwLVxcdURDNDdcXHVEQzUwLVxcdURDNTlcXHVEQzYwLVxcdURDODdcXHVEQzkwLVxcdURDQURcXHVEQ0IwXFx1RENCMVxcdUREMDAtXFx1REQ3OFxcdUREN0EtXFx1RERDQlxcdUREQ0QtXFx1REU1M1xcdURFNjAtXFx1REU2RFxcdURFNzAtXFx1REU3NFxcdURFNzgtXFx1REU3QVxcdURFODAtXFx1REU4NlxcdURFOTAtXFx1REVBOFxcdURFQjAtXFx1REVCNlxcdURFQzAtXFx1REVDMlxcdURFRDAtXFx1REVENlxcdURGMDAtXFx1REY5MlxcdURGOTQtXFx1REZDQV0vO1xuIiwiZXhwb3J0IHZhciBSYW5nZVBhdHRlcm5UeXBlO1xuKGZ1bmN0aW9uIChSYW5nZVBhdHRlcm5UeXBlKSB7XG4gICAgUmFuZ2VQYXR0ZXJuVHlwZVtcInN0YXJ0UmFuZ2VcIl0gPSBcInN0YXJ0UmFuZ2VcIjtcbiAgICBSYW5nZVBhdHRlcm5UeXBlW1wic2hhcmVkXCJdID0gXCJzaGFyZWRcIjtcbiAgICBSYW5nZVBhdHRlcm5UeXBlW1wiZW5kUmFuZ2VcIl0gPSBcImVuZFJhbmdlXCI7XG59KShSYW5nZVBhdHRlcm5UeXBlIHx8IChSYW5nZVBhdHRlcm5UeXBlID0ge30pKTtcbiIsImV4cG9ydCB7fTtcbiIsImV4cG9ydCB7fTtcbiIsImV4cG9ydCB7fTtcbiIsImV4cG9ydCB7fTtcbiIsImV4cG9ydCB7fTtcbiIsIi8qKlxuICogQ2Fubm90IGRvIE1hdGgubG9nKHgpIC8gTWF0aC5sb2coMTApIGJjIGlmIElFRUUgZmxvYXRpbmcgcG9pbnQgaXNzdWVcbiAqIEBwYXJhbSB4IG51bWJlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFnbml0dWRlKHgpIHtcbiAgICAvLyBDYW5ub3QgY291bnQgc3RyaW5nIGxlbmd0aCB2aWEgTnVtYmVyLnRvU3RyaW5nIGJlY2F1c2UgaXQgbWF5IHVzZSBzY2llbnRpZmljIG5vdGF0aW9uXG4gICAgLy8gZm9yIHZlcnkgc21hbGwgb3IgdmVyeSBsYXJnZSBudW1iZXJzLlxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgubG9nKHgpICogTWF0aC5MT0cxMEUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdChzLCB0aW1lcykge1xuICAgIGlmICh0eXBlb2Ygcy5yZXBlYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwZWF0KHRpbWVzKTtcbiAgICB9XG4gICAgdmFyIGFyciA9IG5ldyBBcnJheSh0aW1lcyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyW2ldID0gcztcbiAgICB9XG4gICAgcmV0dXJuIGFyci5qb2luKCcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRJbnRlcm5hbFNsb3QobWFwLCBwbCwgZmllbGQsIHZhbHVlKSB7XG4gICAgaWYgKCFtYXAuZ2V0KHBsKSkge1xuICAgICAgICBtYXAuc2V0KHBsLCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAgICB9XG4gICAgdmFyIHNsb3RzID0gbWFwLmdldChwbCk7XG4gICAgc2xvdHNbZmllbGRdID0gdmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0TXVsdGlJbnRlcm5hbFNsb3RzKG1hcCwgcGwsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGsgPSBfYVtfaV07XG4gICAgICAgIHNldEludGVybmFsU2xvdChtYXAsIHBsLCBrLCBwcm9wc1trXSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEludGVybmFsU2xvdChtYXAsIHBsLCBmaWVsZCkge1xuICAgIHJldHVybiBnZXRNdWx0aUludGVybmFsU2xvdHMobWFwLCBwbCwgZmllbGQpW2ZpZWxkXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNdWx0aUludGVybmFsU2xvdHMobWFwLCBwbCkge1xuICAgIHZhciBmaWVsZHMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBmaWVsZHNbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBzbG90cyA9IG1hcC5nZXQocGwpO1xuICAgIGlmICghc2xvdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihwbCArIFwiIEludGVybmFsU2xvdCBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWRcIik7XG4gICAgfVxuICAgIHJldHVybiBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChhbGwsIGYpIHtcbiAgICAgICAgYWxsW2ZdID0gc2xvdHNbZl07XG4gICAgICAgIHJldHVybiBhbGw7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNMaXRlcmFsUGFydChwYXR0ZXJuUGFydCkge1xuICAgIHJldHVybiBwYXR0ZXJuUGFydC50eXBlID09PSAnbGl0ZXJhbCc7XG59XG4vKlxuICAxNyBFQ01BU2NyaXB0IFN0YW5kYXJkIEJ1aWx0LWluIE9iamVjdHM6XG4gICAgRXZlcnkgYnVpbHQtaW4gRnVuY3Rpb24gb2JqZWN0LCBpbmNsdWRpbmcgY29uc3RydWN0b3JzLCB0aGF0IGlzIG5vdFxuICAgIGlkZW50aWZpZWQgYXMgYW4gYW5vbnltb3VzIGZ1bmN0aW9uIGhhcyBhIG5hbWUgcHJvcGVydHkgd2hvc2UgdmFsdWVcbiAgICBpcyBhIFN0cmluZy5cblxuICAgIFVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLCB0aGUgbmFtZSBwcm9wZXJ0eSBvZiBhIGJ1aWx0LWluIEZ1bmN0aW9uXG4gICAgb2JqZWN0LCBpZiBpdCBleGlzdHMsIGhhcyB0aGUgYXR0cmlidXRlcyB7IFtbV3JpdGFibGVdXTogZmFsc2UsXG4gICAgW1tFbnVtZXJhYmxlXV06IGZhbHNlLCBbW0NvbmZpZ3VyYWJsZV1dOiB0cnVlIH0uXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgX2EpIHtcbiAgICB2YXIgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgfSk7XG59XG5leHBvcnQgdmFyIFVOSUNPREVfRVhURU5TSU9OX1NFUVVFTkNFX1JFR0VYID0gLy11KD86LVswLTlhLXpdezIsOH0pKy9naTtcbmV4cG9ydCBmdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlLCBFcnIpIHtcbiAgICBpZiAoRXJyID09PSB2b2lkIDApIHsgRXJyID0gRXJyb3I7IH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyKG1lc3NhZ2UpO1xuICAgIH1cbn1cbiIsIi8vXG4vLyBNYWluXG4vL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVtb2l6ZShmbiwgb3B0aW9ucykge1xuICAgIHZhciBjYWNoZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5jYWNoZSA/IG9wdGlvbnMuY2FjaGUgOiBjYWNoZURlZmF1bHQ7XG4gICAgdmFyIHNlcmlhbGl6ZXIgPSBvcHRpb25zICYmIG9wdGlvbnMuc2VyaWFsaXplciA/IG9wdGlvbnMuc2VyaWFsaXplciA6IHNlcmlhbGl6ZXJEZWZhdWx0O1xuICAgIHZhciBzdHJhdGVneSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zdHJhdGVneSA/IG9wdGlvbnMuc3RyYXRlZ3kgOiBzdHJhdGVneURlZmF1bHQ7XG4gICAgcmV0dXJuIHN0cmF0ZWd5KGZuLCB7XG4gICAgICAgIGNhY2hlOiBjYWNoZSxcbiAgICAgICAgc2VyaWFsaXplcjogc2VyaWFsaXplcixcbiAgICB9KTtcbn1cbi8vXG4vLyBTdHJhdGVneVxuLy9cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpOyAvLyB8fCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJ3Vuc2FmZScgcHJpbWl0aXZlIGZvciBvdXIgbmVlZHNcbn1cbmZ1bmN0aW9uIG1vbmFkaWMoZm4sIGNhY2hlLCBzZXJpYWxpemVyLCBhcmcpIHtcbiAgICB2YXIgY2FjaGVLZXkgPSBpc1ByaW1pdGl2ZShhcmcpID8gYXJnIDogc2VyaWFsaXplcihhcmcpO1xuICAgIHZhciBjb21wdXRlZFZhbHVlID0gY2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgICBpZiAodHlwZW9mIGNvbXB1dGVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbXB1dGVkVmFsdWUgPSBmbi5jYWxsKHRoaXMsIGFyZyk7XG4gICAgICAgIGNhY2hlLnNldChjYWNoZUtleSwgY29tcHV0ZWRWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wdXRlZFZhbHVlO1xufVxuZnVuY3Rpb24gdmFyaWFkaWMoZm4sIGNhY2hlLCBzZXJpYWxpemVyKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpO1xuICAgIHZhciBjYWNoZUtleSA9IHNlcmlhbGl6ZXIoYXJncyk7XG4gICAgdmFyIGNvbXB1dGVkVmFsdWUgPSBjYWNoZS5nZXQoY2FjaGVLZXkpO1xuICAgIGlmICh0eXBlb2YgY29tcHV0ZWRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29tcHV0ZWRWYWx1ZSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICBjYWNoZS5zZXQoY2FjaGVLZXksIGNvbXB1dGVkVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gY29tcHV0ZWRWYWx1ZTtcbn1cbmZ1bmN0aW9uIGFzc2VtYmxlKGZuLCBjb250ZXh0LCBzdHJhdGVneSwgY2FjaGUsIHNlcmlhbGl6ZSkge1xuICAgIHJldHVybiBzdHJhdGVneS5iaW5kKGNvbnRleHQsIGZuLCBjYWNoZSwgc2VyaWFsaXplKTtcbn1cbmZ1bmN0aW9uIHN0cmF0ZWd5RGVmYXVsdChmbiwgb3B0aW9ucykge1xuICAgIHZhciBzdHJhdGVneSA9IGZuLmxlbmd0aCA9PT0gMSA/IG1vbmFkaWMgOiB2YXJpYWRpYztcbiAgICByZXR1cm4gYXNzZW1ibGUoZm4sIHRoaXMsIHN0cmF0ZWd5LCBvcHRpb25zLmNhY2hlLmNyZWF0ZSgpLCBvcHRpb25zLnNlcmlhbGl6ZXIpO1xufVxuZnVuY3Rpb24gc3RyYXRlZ3lWYXJpYWRpYyhmbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBhc3NlbWJsZShmbiwgdGhpcywgdmFyaWFkaWMsIG9wdGlvbnMuY2FjaGUuY3JlYXRlKCksIG9wdGlvbnMuc2VyaWFsaXplcik7XG59XG5mdW5jdGlvbiBzdHJhdGVneU1vbmFkaWMoZm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gYXNzZW1ibGUoZm4sIHRoaXMsIG1vbmFkaWMsIG9wdGlvbnMuY2FjaGUuY3JlYXRlKCksIG9wdGlvbnMuc2VyaWFsaXplcik7XG59XG4vL1xuLy8gU2VyaWFsaXplclxuLy9cbnZhciBzZXJpYWxpemVyRGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJndW1lbnRzKTtcbn07XG4vL1xuLy8gQ2FjaGVcbi8vXG5mdW5jdGlvbiBPYmplY3RXaXRob3V0UHJvdG90eXBlQ2FjaGUoKSB7XG4gICAgdGhpcy5jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5PYmplY3RXaXRob3V0UHJvdG90eXBlQ2FjaGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIHRoaXMuY2FjaGU7XG59O1xuT2JqZWN0V2l0aG91dFByb3RvdHlwZUNhY2hlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbn07XG5PYmplY3RXaXRob3V0UHJvdG90eXBlQ2FjaGUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5jYWNoZVtrZXldID0gdmFsdWU7XG59O1xudmFyIGNhY2hlRGVmYXVsdCA9IHtcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gbmV3IE9iamVjdFdpdGhvdXRQcm90b3R5cGVDYWNoZSgpO1xuICAgIH0sXG59O1xuZXhwb3J0IHZhciBzdHJhdGVnaWVzID0ge1xuICAgIHZhcmlhZGljOiBzdHJhdGVneVZhcmlhZGljLFxuICAgIG1vbmFkaWM6IHN0cmF0ZWd5TW9uYWRpYyxcbn07XG4iLCJleHBvcnQgdmFyIEVycm9yS2luZDtcbihmdW5jdGlvbiAoRXJyb3JLaW5kKSB7XG4gICAgLyoqIEFyZ3VtZW50IGlzIHVuY2xvc2VkIChlLmcuIGB7MGApICovXG4gICAgRXJyb3JLaW5kW0Vycm9yS2luZFtcIkVYUEVDVF9BUkdVTUVOVF9DTE9TSU5HX0JSQUNFXCJdID0gMV0gPSBcIkVYUEVDVF9BUkdVTUVOVF9DTE9TSU5HX0JSQUNFXCI7XG4gICAgLyoqIEFyZ3VtZW50IGlzIGVtcHR5IChlLmcuIGB7fWApLiAqL1xuICAgIEVycm9yS2luZFtFcnJvcktpbmRbXCJFTVBUWV9BUkdVTUVOVFwiXSA9IDJdID0gXCJFTVBUWV9BUkdVTUVOVFwiO1xuICAgIC8qKiBBcmd1bWVudCBpcyBtYWxmb3JtZWQgKGUuZy4gYHtmb28hfWBgKSAqL1xuICAgIEVycm9yS2luZFtFcnJvcktpbmRbXCJNQUxGT1JNRURfQVJHVU1FTlRcIl0gPSAzXSA9IFwiTUFMRk9STUVEX0FSR1VNRU5UXCI7XG4gICAgLyoqIEV4cGVjdCBhbiBhcmd1bWVudCB0eXBlIChlLmcuIGB7Zm9vLH1gKSAqL1xuICAgIEVycm9yS2luZFtFcnJvcktpbmRbXCJFWFBFQ1RfQVJHVU1FTlRfVFlQRVwiXSA9IDRdID0gXCJFWFBFQ1RfQVJHVU1FTlRfVFlQRVwiO1xuICAgIC8qKiBVbnN1cHBvcnRlZCBhcmd1bWVudCB0eXBlIChlLmcuIGB7Zm9vLGZvb31gKSAqL1xuICAgIEVycm9yS2luZFtFcnJvcktpbmRbXCJJTlZBTElEX0FSR1VNRU5UX1RZUEVcIl0gPSA1XSA9IFwiSU5WQUxJRF9BUkdVTUVOVF9UWVBFXCI7XG4gICAgLyoqIEV4cGVjdCBhbiBhcmd1bWVudCBzdHlsZSAoZS5nLiBge2ZvbywgbnVtYmVyLCB9YCkgKi9cbiAgICBFcnJvcktpbmRbRXJyb3JLaW5kW1wiRVhQRUNUX0FSR1VNRU5UX1NUWUxFXCJdID0gNl0gPSBcIkVYUEVDVF9BUkdVTUVOVF9TVFlMRVwiO1xuICAgIC8qKiBUaGUgbnVtYmVyIHNrZWxldG9uIGlzIGludmFsaWQuICovXG4gICAgRXJyb3JLaW5kW0Vycm9yS2luZFtcIklOVkFMSURfTlVNQkVSX1NLRUxFVE9OXCJdID0gN10gPSBcIklOVkFMSURfTlVNQkVSX1NLRUxFVE9OXCI7XG4gICAgLyoqIFRoZSBkYXRlIHRpbWUgc2tlbGV0b24gaXMgaW52YWxpZC4gKi9cbiAgICBFcnJvcktpbmRbRXJyb3JLaW5kW1wiSU5WQUxJRF9EQVRFX1RJTUVfU0tFTEVUT05cIl0gPSA4XSA9IFwiSU5WQUxJRF9EQVRFX1RJTUVfU0tFTEVUT05cIjtcbiAgICAvKiogRXhlcGN0IGEgbnVtYmVyIHNrZWxldG9uIGZvbGxvd2luZyB0aGUgYDo6YCAoZS5nLiBge2ZvbywgbnVtYmVyLCA6On1gKSAqL1xuICAgIEVycm9yS2luZFtFcnJvcktpbmRbXCJFWFBFQ1RfTlVNQkVSX1NLRUxFVE9OXCJdID0gOV0gPSBcIkVYUEVDVF9OVU1CRVJfU0tFTEVUT05cIjtcbiAgICAvKiogRXhlcGN0IGEgZGF0ZSB0aW1lIHNrZWxldG9uIGZvbGxvd2luZyB0aGUgYDo6YCAoZS5nLiBge2ZvbywgZGF0ZSwgOjp9YCkgKi9cbiAgICBFcnJvcktpbmRbRXJyb3JLaW5kW1wiRVhQRUNUX0RBVEVfVElNRV9TS0VMRVRPTlwiXSA9IDEwXSA9IFwiRVhQRUNUX0RBVEVfVElNRV9TS0VMRVRPTlwiO1xuICAgIC8qKiBVbm1hdGNoZWQgYXBvc3Ryb3BoZXMgaW4gdGhlIGFyZ3VtZW50IHN0eWxlIChlLmcuIGB7Zm9vLCBudW1iZXIsICd0ZXN0YCkgKi9cbiAgICBFcnJvcktpbmRbRXJyb3JLaW5kW1wiVU5DTE9TRURfUVVPVEVfSU5fQVJHVU1FTlRfU1RZTEVcIl0gPSAxMV0gPSBcIlVOQ0xPU0VEX1FVT1RFX0lOX0FSR1VNRU5UX1NUWUxFXCI7XG4gICAgLyoqIE1pc3Npbmcgc2VsZWN0IGFyZ3VtZW50IG9wdGlvbnMgKGUuZy4gYHtmb28sIHNlbGVjdH1gKSAqL1xuICAgIEVycm9yS2luZFtFcnJvcktpbmRbXCJFWFBFQ1RfU0VMRUNUX0FSR1VNRU5UX09QVElPTlNcIl0gPSAxMl0gPSBcIkVYUEVDVF9TRUxFQ1RfQVJHVU1FTlRfT1BUSU9OU1wiO1xuICAgIC8qKiBFeHBlY3RpbmcgYW4gb2Zmc2V0IHZhbHVlIGluIGBwbHVyYWxgIG9yIGBzZWxlY3RvcmRpbmFsYCBhcmd1bWVudCAoZS5nIGB7Zm9vLCBwbHVyYWwsIG9mZnNldH1gKSAqL1xuICAgIEVycm9yS2luZFtFcnJvcktpbmRbXCJFWFBFQ1RfUExVUkFMX0FSR1VNRU5UX09GRlNFVF9WQUxVRVwiXSA9IDEzXSA9IFwiRVhQRUNUX1BMVVJBTF9BUkdVTUVOVF9PRkZTRVRfVkFMVUVcIjtcbiAgICAvKiogT2Zmc2V0IHZhbHVlIGluIGBwbHVyYWxgIG9yIGBzZWxlY3RvcmRpbmFsYCBpcyBpbnZhbGlkIChlLmcuIGB7Zm9vLCBwbHVyYWwsIG9mZnNldDogeH1gKSAqL1xuICAgIEVycm9yS2luZFtFcnJvcktpbmRbXCJJTlZBTElEX1BMVVJBTF9BUkdVTUVOVF9PRkZTRVRfVkFMVUVcIl0gPSAxNF0gPSBcIklOVkFMSURfUExVUkFMX0FSR1VNRU5UX09GRlNFVF9WQUxVRVwiO1xuICAgIC8qKiBFeHBlY3RpbmcgYSBzZWxlY3RvciBpbiBgc2VsZWN0YCBhcmd1bWVudCAoZS5nIGB7Zm9vLCBzZWxlY3R9YCkgKi9cbiAgICBFcnJvcktpbmRbRXJyb3JLaW5kW1wiRVhQRUNUX1NFTEVDVF9BUkdVTUVOVF9TRUxFQ1RPUlwiXSA9IDE1XSA9IFwiRVhQRUNUX1NFTEVDVF9BUkdVTUVOVF9TRUxFQ1RPUlwiO1xuICAgIC8qKiBFeHBlY3RpbmcgYSBzZWxlY3RvciBpbiBgcGx1cmFsYCBvciBgc2VsZWN0b3JkaW5hbGAgYXJndW1lbnQgKGUuZyBge2ZvbywgcGx1cmFsfWApICovXG4gICAgRXJyb3JLaW5kW0Vycm9yS2luZFtcIkVYUEVDVF9QTFVSQUxfQVJHVU1FTlRfU0VMRUNUT1JcIl0gPSAxNl0gPSBcIkVYUEVDVF9QTFVSQUxfQVJHVU1FTlRfU0VMRUNUT1JcIjtcbiAgICAvKiogRXhwZWN0aW5nIGEgbWVzc2FnZSBmcmFnbWVudCBhZnRlciB0aGUgYHNlbGVjdGAgc2VsZWN0b3IgKGUuZy4gYHtmb28sIHNlbGVjdCwgYXBwbGV9YCkgKi9cbiAgICBFcnJvcktpbmRbRXJyb3JLaW5kW1wiRVhQRUNUX1NFTEVDVF9BUkdVTUVOVF9TRUxFQ1RPUl9GUkFHTUVOVFwiXSA9IDE3XSA9IFwiRVhQRUNUX1NFTEVDVF9BUkdVTUVOVF9TRUxFQ1RPUl9GUkFHTUVOVFwiO1xuICAgIC8qKlxuICAgICAqIEV4cGVjdGluZyBhIG1lc3NhZ2UgZnJhZ21lbnQgYWZ0ZXIgdGhlIGBwbHVyYWxgIG9yIGBzZWxlY3RvcmRpbmFsYCBzZWxlY3RvclxuICAgICAqIChlLmcuIGB7Zm9vLCBwbHVyYWwsIG9uZX1gKVxuICAgICAqL1xuICAgIEVycm9yS2luZFtFcnJvcktpbmRbXCJFWFBFQ1RfUExVUkFMX0FSR1VNRU5UX1NFTEVDVE9SX0ZSQUdNRU5UXCJdID0gMThdID0gXCJFWFBFQ1RfUExVUkFMX0FSR1VNRU5UX1NFTEVDVE9SX0ZSQUdNRU5UXCI7XG4gICAgLyoqIFNlbGVjdG9yIGluIGBwbHVyYWxgIG9yIGBzZWxlY3RvcmRpbmFsYCBpcyBtYWxmb3JtZWQgKGUuZy4gYHtmb28sIHBsdXJhbCwgPXggeyN9fWApICovXG4gICAgRXJyb3JLaW5kW0Vycm9yS2luZFtcIklOVkFMSURfUExVUkFMX0FSR1VNRU5UX1NFTEVDVE9SXCJdID0gMTldID0gXCJJTlZBTElEX1BMVVJBTF9BUkdVTUVOVF9TRUxFQ1RPUlwiO1xuICAgIC8qKlxuICAgICAqIER1cGxpY2F0ZSBzZWxlY3RvcnMgaW4gYHBsdXJhbGAgb3IgYHNlbGVjdG9yZGluYWxgIGFyZ3VtZW50LlxuICAgICAqIChlLmcuIHtmb28sIHBsdXJhbCwgb25lIHsjfSBvbmUgeyN9fSlcbiAgICAgKi9cbiAgICBFcnJvcktpbmRbRXJyb3JLaW5kW1wiRFVQTElDQVRFX1BMVVJBTF9BUkdVTUVOVF9TRUxFQ1RPUlwiXSA9IDIwXSA9IFwiRFVQTElDQVRFX1BMVVJBTF9BUkdVTUVOVF9TRUxFQ1RPUlwiO1xuICAgIC8qKiBEdXBsaWNhdGUgc2VsZWN0b3JzIGluIGBzZWxlY3RgIGFyZ3VtZW50LlxuICAgICAqIChlLmcuIHtmb28sIHNlbGVjdCwgYXBwbGUge2FwcGxlfSBhcHBsZSB7YXBwbGV9fSlcbiAgICAgKi9cbiAgICBFcnJvcktpbmRbRXJyb3JLaW5kW1wiRFVQTElDQVRFX1NFTEVDVF9BUkdVTUVOVF9TRUxFQ1RPUlwiXSA9IDIxXSA9IFwiRFVQTElDQVRFX1NFTEVDVF9BUkdVTUVOVF9TRUxFQ1RPUlwiO1xuICAgIC8qKiBQbHVyYWwgb3Igc2VsZWN0IGFyZ3VtZW50IG9wdGlvbiBtdXN0IGhhdmUgYG90aGVyYCBjbGF1c2UuICovXG4gICAgRXJyb3JLaW5kW0Vycm9yS2luZFtcIk1JU1NJTkdfT1RIRVJfQ0xBVVNFXCJdID0gMjJdID0gXCJNSVNTSU5HX09USEVSX0NMQVVTRVwiO1xuICAgIC8qKiBUaGUgdGFnIGlzIG1hbGZvcm1lZC4gKGUuZy4gYDxib2xkIT5mb288L2JvbGQhPikgKi9cbiAgICBFcnJvcktpbmRbRXJyb3JLaW5kW1wiSU5WQUxJRF9UQUdcIl0gPSAyM10gPSBcIklOVkFMSURfVEFHXCI7XG4gICAgLyoqIFRoZSB0YWcgbmFtZSBpcyBpbnZhbGlkLiAoZS5nLiBgPDEyMz5mb288LzEyMz5gKSAqL1xuICAgIEVycm9yS2luZFtFcnJvcktpbmRbXCJJTlZBTElEX1RBR19OQU1FXCJdID0gMjVdID0gXCJJTlZBTElEX1RBR19OQU1FXCI7XG4gICAgLyoqIFRoZSBjbG9zaW5nIHRhZyBkb2VzIG5vdCBtYXRjaCB0aGUgb3BlbmluZyB0YWcuIChlLmcuIGA8Ym9sZD5mb288L2l0YWxpYz5gKSAqL1xuICAgIEVycm9yS2luZFtFcnJvcktpbmRbXCJVTk1BVENIRURfQ0xPU0lOR19UQUdcIl0gPSAyNl0gPSBcIlVOTUFUQ0hFRF9DTE9TSU5HX1RBR1wiO1xuICAgIC8qKiBUaGUgb3BlbmluZyB0YWcgaGFzIHVubWF0Y2hlZCBjbG9zaW5nIHRhZy4gKGUuZy4gYDxib2xkPmZvb2ApICovXG4gICAgRXJyb3JLaW5kW0Vycm9yS2luZFtcIlVOQ0xPU0VEX1RBR1wiXSA9IDI3XSA9IFwiVU5DTE9TRURfVEFHXCI7XG59KShFcnJvcktpbmQgfHwgKEVycm9yS2luZCA9IHt9KSk7XG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgRXJyb3JLaW5kIH0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBpc0RhdGVFbGVtZW50LCBpc0RhdGVUaW1lU2tlbGV0b24sIGlzTnVtYmVyRWxlbWVudCwgaXNOdW1iZXJTa2VsZXRvbiwgaXNQbHVyYWxFbGVtZW50LCBpc1NlbGVjdEVsZW1lbnQsIGlzVGFnRWxlbWVudCwgaXNUaW1lRWxlbWVudCwgfSBmcm9tICcuL3R5cGVzJztcbmZ1bmN0aW9uIHBydW5lTG9jYXRpb24oZWxzKSB7XG4gICAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGRlbGV0ZSBlbC5sb2NhdGlvbjtcbiAgICAgICAgaWYgKGlzU2VsZWN0RWxlbWVudChlbCkgfHwgaXNQbHVyYWxFbGVtZW50KGVsKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBlbC5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGVsLm9wdGlvbnNba10ubG9jYXRpb247XG4gICAgICAgICAgICAgICAgcHJ1bmVMb2NhdGlvbihlbC5vcHRpb25zW2tdLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc051bWJlckVsZW1lbnQoZWwpICYmIGlzTnVtYmVyU2tlbGV0b24oZWwuc3R5bGUpKSB7XG4gICAgICAgICAgICBkZWxldGUgZWwuc3R5bGUubG9jYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGlzRGF0ZUVsZW1lbnQoZWwpIHx8IGlzVGltZUVsZW1lbnQoZWwpKSAmJlxuICAgICAgICAgICAgaXNEYXRlVGltZVNrZWxldG9uKGVsLnN0eWxlKSkge1xuICAgICAgICAgICAgZGVsZXRlIGVsLnN0eWxlLmxvY2F0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVGFnRWxlbWVudChlbCkpIHtcbiAgICAgICAgICAgIHBydW5lTG9jYXRpb24oZWwuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2UobWVzc2FnZSwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgb3B0cyA9IF9fYXNzaWduKHsgc2hvdWxkUGFyc2VTa2VsZXRvbnM6IHRydWUsIHJlcXVpcmVzT3RoZXJDbGF1c2U6IHRydWUgfSwgb3B0cyk7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBQYXJzZXIobWVzc2FnZSwgb3B0cykucGFyc2UoKTtcbiAgICBpZiAocmVzdWx0LmVycikge1xuICAgICAgICB2YXIgZXJyb3IgPSBTeW50YXhFcnJvcihFcnJvcktpbmRbcmVzdWx0LmVyci5raW5kXSk7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgQXNzaWduIHRvIGVycm9yIG9iamVjdFxuICAgICAgICBlcnJvci5sb2NhdGlvbiA9IHJlc3VsdC5lcnIubG9jYXRpb247XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgQXNzaWduIHRvIGVycm9yIG9iamVjdFxuICAgICAgICBlcnJvci5vcmlnaW5hbE1lc3NhZ2UgPSByZXN1bHQuZXJyLm1lc3NhZ2U7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBpZiAoIShvcHRzID09PSBudWxsIHx8IG9wdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdHMuY2FwdHVyZUxvY2F0aW9uKSkge1xuICAgICAgICBwcnVuZUxvY2F0aW9uKHJlc3VsdC52YWwpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LnZhbDtcbn1cbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuIiwidmFyIF9hO1xuaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEVycm9yS2luZCB9IGZyb20gJy4vZXJyb3InO1xuaW1wb3J0IHsgU0tFTEVUT05fVFlQRSwgVFlQRSwgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFNQQUNFX1NFUEFSQVRPUl9SRUdFWCB9IGZyb20gJy4vcmVnZXguZ2VuZXJhdGVkJztcbmltcG9ydCB7IHBhcnNlTnVtYmVyU2tlbGV0b24sIHBhcnNlTnVtYmVyU2tlbGV0b25Gcm9tU3RyaW5nLCBwYXJzZURhdGVUaW1lU2tlbGV0b24sIH0gZnJvbSAnQGZvcm1hdGpzL2ljdS1za2VsZXRvbi1wYXJzZXInO1xudmFyIFNQQUNFX1NFUEFSQVRPUl9TVEFSVF9SRUdFWCA9IG5ldyBSZWdFeHAoXCJeXCIgKyBTUEFDRV9TRVBBUkFUT1JfUkVHRVguc291cmNlICsgXCIqXCIpO1xudmFyIFNQQUNFX1NFUEFSQVRPUl9FTkRfUkVHRVggPSBuZXcgUmVnRXhwKFNQQUNFX1NFUEFSQVRPUl9SRUdFWC5zb3VyY2UgKyBcIiokXCIpO1xuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiB7IHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQgfTtcbn1cbi8vICNyZWdpb24gUG9ueWZpbGxzXG4vLyBDb25zb2xpZGF0ZSB0aGVzZSB2YXJpYWJsZXMgdXAgdG9wIGZvciBlYXNpZXIgdG9nZ2xpbmcgZHVyaW5nIGRlYnVnZ2luZ1xudmFyIGhhc05hdGl2ZVN0YXJ0c1dpdGggPSAhIVN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aDtcbnZhciBoYXNOYXRpdmVGcm9tQ29kZVBvaW50ID0gISFTdHJpbmcuZnJvbUNvZGVQb2ludDtcbnZhciBoYXNOYXRpdmVGcm9tRW50cmllcyA9ICEhT2JqZWN0LmZyb21FbnRyaWVzO1xudmFyIGhhc05hdGl2ZUNvZGVQb2ludEF0ID0gISFTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0O1xudmFyIGhhc1RyaW1TdGFydCA9ICEhU3RyaW5nLnByb3RvdHlwZS50cmltU3RhcnQ7XG52YXIgaGFzVHJpbUVuZCA9ICEhU3RyaW5nLnByb3RvdHlwZS50cmltRW5kO1xudmFyIGhhc05hdGl2ZUlzU2FmZUludGVnZXIgPSAhIU51bWJlci5pc1NhZmVJbnRlZ2VyO1xudmFyIGlzU2FmZUludGVnZXIgPSBoYXNOYXRpdmVJc1NhZmVJbnRlZ2VyXG4gICAgPyBOdW1iZXIuaXNTYWZlSW50ZWdlclxuICAgIDogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgbiA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAgIGlzRmluaXRlKG4pICYmXG4gICAgICAgICAgICBNYXRoLmZsb29yKG4pID09PSBuICYmXG4gICAgICAgICAgICBNYXRoLmFicyhuKSA8PSAweDFmZmZmZmZmZmZmZmZmKTtcbiAgICB9O1xuLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHkgYW5kIHUuXG52YXIgUkVHRVhfU1VQUE9SVFNfVV9BTkRfWSA9IHRydWU7XG50cnkge1xuICAgIHZhciByZSA9IFJFKCcoW15cXFxccHtXaGl0ZV9TcGFjZX1cXFxccHtQYXR0ZXJuX1N5bnRheH1dKiknLCAneXUnKTtcbiAgICAvKipcbiAgICAgKiBsZWdhY3kgRWRnZSBvciBYYm94IE9uZSBicm93c2VyXG4gICAgICogVW5pY29kZSBmbGFnIHN1cHBvcnQ6IHN1cHBvcnRlZFxuICAgICAqIFBhdHRlcm5fU3ludGF4IHN1cHBvcnQ6IG5vdCBzdXBwb3J0ZWRcbiAgICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Zvcm1hdGpzL2Zvcm1hdGpzL2lzc3Vlcy8yODIyXG4gICAgICovXG4gICAgUkVHRVhfU1VQUE9SVFNfVV9BTkRfWSA9ICgoX2EgPSByZS5leGVjKCdhJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkgPT09ICdhJztcbn1cbmNhdGNoIChfKSB7XG4gICAgUkVHRVhfU1VQUE9SVFNfVV9BTkRfWSA9IGZhbHNlO1xufVxudmFyIHN0YXJ0c1dpdGggPSBoYXNOYXRpdmVTdGFydHNXaXRoXG4gICAgPyAvLyBOYXRpdmVcbiAgICAgICAgZnVuY3Rpb24gc3RhcnRzV2l0aChzLCBzZWFyY2gsIHBvc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5zdGFydHNXaXRoKHNlYXJjaCwgcG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgOiAvLyBGb3IgSUUxMVxuICAgICAgICBmdW5jdGlvbiBzdGFydHNXaXRoKHMsIHNlYXJjaCwgcG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBzLnNsaWNlKHBvc2l0aW9uLCBwb3NpdGlvbiArIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG4gICAgICAgIH07XG52YXIgZnJvbUNvZGVQb2ludCA9IGhhc05hdGl2ZUZyb21Db2RlUG9pbnRcbiAgICA/IFN0cmluZy5mcm9tQ29kZVBvaW50XG4gICAgOiAvLyBJRTExXG4gICAgICAgIGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoKSB7XG4gICAgICAgICAgICB2YXIgY29kZVBvaW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnRzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSAnJztcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBjb2RlUG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIHZhciBjb2RlO1xuICAgICAgICAgICAgd2hpbGUgKGxlbmd0aCA+IGkpIHtcbiAgICAgICAgICAgICAgICBjb2RlID0gY29kZVBvaW50c1tpKytdO1xuICAgICAgICAgICAgICAgIGlmIChjb2RlID4gMHgxMGZmZmYpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFJhbmdlRXJyb3IoY29kZSArICcgaXMgbm90IGEgdmFsaWQgY29kZSBwb2ludCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzICs9XG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPCAweDEwMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogU3RyaW5nLmZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCAoY29kZSAlIDB4NDAwKSArIDB4ZGMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICAgIH07XG52YXIgZnJvbUVudHJpZXMgPSBcbi8vIG5hdGl2ZVxuaGFzTmF0aXZlRnJvbUVudHJpZXNcbiAgICA/IE9iamVjdC5mcm9tRW50cmllc1xuICAgIDogLy8gUG9ueWZpbGxcbiAgICAgICAgZnVuY3Rpb24gZnJvbUVudHJpZXMoZW50cmllcykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBlbnRyaWVzXzEgPSBlbnRyaWVzOyBfaSA8IGVudHJpZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBlbnRyaWVzXzFbX2ldLCBrID0gX2FbMF0sIHYgPSBfYVsxXTtcbiAgICAgICAgICAgICAgICBvYmpba10gPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfTtcbnZhciBjb2RlUG9pbnRBdCA9IGhhc05hdGl2ZUNvZGVQb2ludEF0XG4gICAgPyAvLyBOYXRpdmVcbiAgICAgICAgZnVuY3Rpb24gY29kZVBvaW50QXQocywgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBzLmNvZGVQb2ludEF0KGluZGV4KTtcbiAgICAgICAgfVxuICAgIDogLy8gSUUgMTFcbiAgICAgICAgZnVuY3Rpb24gY29kZVBvaW50QXQocywgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBzaXplID0gcy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHNpemUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZpcnN0ID0gcy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgICAgICAgIHZhciBzZWNvbmQ7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3QgPCAweGQ4MDAgfHxcbiAgICAgICAgICAgICAgICBmaXJzdCA+IDB4ZGJmZiB8fFxuICAgICAgICAgICAgICAgIGluZGV4ICsgMSA9PT0gc2l6ZSB8fFxuICAgICAgICAgICAgICAgIChzZWNvbmQgPSBzLmNoYXJDb2RlQXQoaW5kZXggKyAxKSkgPCAweGRjMDAgfHxcbiAgICAgICAgICAgICAgICBzZWNvbmQgPiAweGRmZmZcbiAgICAgICAgICAgICAgICA/IGZpcnN0XG4gICAgICAgICAgICAgICAgOiAoKGZpcnN0IC0gMHhkODAwKSA8PCAxMCkgKyAoc2Vjb25kIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gICAgICAgIH07XG52YXIgdHJpbVN0YXJ0ID0gaGFzVHJpbVN0YXJ0XG4gICAgPyAvLyBOYXRpdmVcbiAgICAgICAgZnVuY3Rpb24gdHJpbVN0YXJ0KHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnRyaW1TdGFydCgpO1xuICAgICAgICB9XG4gICAgOiAvLyBQb255ZmlsbFxuICAgICAgICBmdW5jdGlvbiB0cmltU3RhcnQocykge1xuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZShTUEFDRV9TRVBBUkFUT1JfU1RBUlRfUkVHRVgsICcnKTtcbiAgICAgICAgfTtcbnZhciB0cmltRW5kID0gaGFzVHJpbUVuZFxuICAgID8gLy8gTmF0aXZlXG4gICAgICAgIGZ1bmN0aW9uIHRyaW1FbmQocykge1xuICAgICAgICAgICAgcmV0dXJuIHMudHJpbUVuZCgpO1xuICAgICAgICB9XG4gICAgOiAvLyBQb255ZmlsbFxuICAgICAgICBmdW5jdGlvbiB0cmltRW5kKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoU1BBQ0VfU0VQQVJBVE9SX0VORF9SRUdFWCwgJycpO1xuICAgICAgICB9O1xuLy8gUHJldmVudCBtaW5pZmllciB0byB0cmFuc2xhdGUgbmV3IFJlZ0V4cCB0byBsaXRlcmFsIGZvcm0gdGhhdCBtaWdodCBjYXVzZSBzeW50YXggZXJyb3Igb24gSUUxMS5cbmZ1bmN0aW9uIFJFKHMsIGZsYWcpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChzLCBmbGFnKTtcbn1cbi8vICNlbmRyZWdpb25cbnZhciBtYXRjaElkZW50aWZpZXJBdEluZGV4O1xuaWYgKFJFR0VYX1NVUFBPUlRTX1VfQU5EX1kpIHtcbiAgICAvLyBOYXRpdmVcbiAgICB2YXIgSURFTlRJRklFUl9QUkVGSVhfUkVfMSA9IFJFKCcoW15cXFxccHtXaGl0ZV9TcGFjZX1cXFxccHtQYXR0ZXJuX1N5bnRheH1dKiknLCAneXUnKTtcbiAgICBtYXRjaElkZW50aWZpZXJBdEluZGV4ID0gZnVuY3Rpb24gbWF0Y2hJZGVudGlmaWVyQXRJbmRleChzLCBpbmRleCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIElERU5USUZJRVJfUFJFRklYX1JFXzEubGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHZhciBtYXRjaCA9IElERU5USUZJRVJfUFJFRklYX1JFXzEuZXhlYyhzKTtcbiAgICAgICAgcmV0dXJuIChfYSA9IG1hdGNoWzFdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICB9O1xufVxuZWxzZSB7XG4gICAgLy8gSUUxMVxuICAgIG1hdGNoSWRlbnRpZmllckF0SW5kZXggPSBmdW5jdGlvbiBtYXRjaElkZW50aWZpZXJBdEluZGV4KHMsIGluZGV4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IFtdO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGMgPSBjb2RlUG9pbnRBdChzLCBpbmRleCk7XG4gICAgICAgICAgICBpZiAoYyA9PT0gdW5kZWZpbmVkIHx8IF9pc1doaXRlU3BhY2UoYykgfHwgX2lzUGF0dGVyblN5bnRheChjKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2gucHVzaChjKTtcbiAgICAgICAgICAgIGluZGV4ICs9IGMgPj0gMHgxMDAwMCA/IDIgOiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tQ29kZVBvaW50LmFwcGx5KHZvaWQgMCwgbWF0Y2gpO1xuICAgIH07XG59XG52YXIgUGFyc2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBhcnNlcihtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7IG9mZnNldDogMCwgbGluZTogMSwgY29sdW1uOiAxIH07XG4gICAgICAgIHRoaXMuaWdub3JlVGFnID0gISFvcHRpb25zLmlnbm9yZVRhZztcbiAgICAgICAgdGhpcy5yZXF1aXJlc090aGVyQ2xhdXNlID0gISFvcHRpb25zLnJlcXVpcmVzT3RoZXJDbGF1c2U7XG4gICAgICAgIHRoaXMuc2hvdWxkUGFyc2VTa2VsZXRvbnMgPSAhIW9wdGlvbnMuc2hvdWxkUGFyc2VTa2VsZXRvbnM7XG4gICAgfVxuICAgIFBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCgpICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyc2VyIGNhbiBvbmx5IGJlIHVzZWQgb25jZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlTWVzc2FnZSgwLCAnJywgZmFsc2UpO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZU1lc3NhZ2UgPSBmdW5jdGlvbiAobmVzdGluZ0xldmVsLCBwYXJlbnRBcmdUeXBlLCBleHBlY3RpbmdDbG9zZVRhZykge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzRU9GKCkpIHtcbiAgICAgICAgICAgIHZhciBjaGFyID0gdGhpcy5jaGFyKCk7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gMTIzIC8qIGB7YCAqLykge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnBhcnNlQXJndW1lbnQobmVzdGluZ0xldmVsLCBleHBlY3RpbmdDbG9zZVRhZyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChyZXN1bHQudmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09IDEyNSAvKiBgfWAgKi8gJiYgbmVzdGluZ0xldmVsID4gMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PT0gMzUgLyogYCNgICovICYmXG4gICAgICAgICAgICAgICAgKHBhcmVudEFyZ1R5cGUgPT09ICdwbHVyYWwnIHx8IHBhcmVudEFyZ1R5cGUgPT09ICdzZWxlY3RvcmRpbmFsJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLmNsb25lUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bXAoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogVFlQRS5wb3VuZCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uKHBvc2l0aW9uLCB0aGlzLmNsb25lUG9zaXRpb24oKSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSA2MCAvKiBgPGAgKi8gJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5pZ25vcmVUYWcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnBlZWsoKSA9PT0gNDcgLy8gY2hhciBjb2RlIGZvciAnLydcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmIChleHBlY3RpbmdDbG9zZVRhZykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKEVycm9yS2luZC5VTk1BVENIRURfQ0xPU0lOR19UQUcsIGNyZWF0ZUxvY2F0aW9uKHRoaXMuY2xvbmVQb3NpdGlvbigpLCB0aGlzLmNsb25lUG9zaXRpb24oKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09IDYwIC8qIGA8YCAqLyAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmlnbm9yZVRhZyAmJlxuICAgICAgICAgICAgICAgIF9pc0FscGhhKHRoaXMucGVlaygpIHx8IDApKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucGFyc2VUYWcobmVzdGluZ0xldmVsLCBwYXJlbnRBcmdUeXBlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKHJlc3VsdC52YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucGFyc2VMaXRlcmFsKG5lc3RpbmdMZXZlbCwgcGFyZW50QXJnVHlwZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChyZXN1bHQudmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWw6IGVsZW1lbnRzLCBlcnI6IG51bGwgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgdGFnIG5hbWUgbXVzdCBzdGFydCB3aXRoIGFuIEFTQ0lJIGxvd2VyL3VwcGVyIGNhc2UgbGV0dGVyLiBUaGUgZ3JhbW1hciBpcyBiYXNlZCBvbiB0aGVcbiAgICAgKiBbY3VzdG9tIGVsZW1lbnQgbmFtZV1bXSBleGNlcHQgdGhhdCBhIGRhc2ggaXMgTk9UIGFsd2F5cyBtYW5kYXRvcnkgYW5kIHVwcGVyY2FzZSBsZXR0ZXJzXG4gICAgICogYXJlIGFjY2VwdGVkOlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogdGFnIDo6PSBcIjxcIiB0YWdOYW1lICh3aGl0ZXNwYWNlKSogXCIvPlwiIHwgXCI8XCIgdGFnTmFtZSAod2hpdGVzcGFjZSkqIFwiPlwiIG1lc3NhZ2UgXCI8L1wiIHRhZ05hbWUgKHdoaXRlc3BhY2UpKiBcIj5cIlxuICAgICAqIHRhZ05hbWUgOjo9IFthLXpdIChQRU5DaGFyKSpcbiAgICAgKiBQRU5DaGFyIDo6PVxuICAgICAqICAgICBcIi1cIiB8IFwiLlwiIHwgWzAtOV0gfCBcIl9cIiB8IFthLXpdIHwgW0EtWl0gfCAjeEI3IHwgWyN4QzAtI3hENl0gfCBbI3hEOC0jeEY2XSB8IFsjeEY4LSN4MzdEXSB8XG4gICAgICogICAgIFsjeDM3Ri0jeDFGRkZdIHwgWyN4MjAwQy0jeDIwMERdIHwgWyN4MjAzRi0jeDIwNDBdIHwgWyN4MjA3MC0jeDIxOEZdIHwgWyN4MkMwMC0jeDJGRUZdIHxcbiAgICAgKiAgICAgWyN4MzAwMS0jeEQ3RkZdIHwgWyN4RjkwMC0jeEZEQ0ZdIHwgWyN4RkRGMC0jeEZGRkRdIHwgWyN4MTAwMDAtI3hFRkZGRl1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFtjdXN0b20gZWxlbWVudCBuYW1lXTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvY3VzdG9tLWVsZW1lbnRzLmh0bWwjdmFsaWQtY3VzdG9tLWVsZW1lbnQtbmFtZVxuICAgICAqIE5PVEU6IFdlJ3JlIGEgYml0IG1vcmUgbGF4IGhlcmUgc2luY2UgSFRNTCB0ZWNobmljYWxseSBkb2VzIG5vdCBhbGxvdyB1cHBlcmNhc2UgSFRNTCBlbGVtZW50IGJ1dCB3ZSBkb1xuICAgICAqIHNpbmNlIG90aGVyIHRhZy1iYXNlZCBlbmdpbmVzIGxpa2UgUmVhY3QgYWxsb3cgaXRcbiAgICAgKi9cbiAgICBQYXJzZXIucHJvdG90eXBlLnBhcnNlVGFnID0gZnVuY3Rpb24gKG5lc3RpbmdMZXZlbCwgcGFyZW50QXJnVHlwZSkge1xuICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IHRoaXMuY2xvbmVQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLmJ1bXAoKTsgLy8gYDxgXG4gICAgICAgIHZhciB0YWdOYW1lID0gdGhpcy5wYXJzZVRhZ05hbWUoKTtcbiAgICAgICAgdGhpcy5idW1wU3BhY2UoKTtcbiAgICAgICAgaWYgKHRoaXMuYnVtcElmKCcvPicpKSB7XG4gICAgICAgICAgICAvLyBTZWxmIGNsb3NpbmcgdGFnXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBUWVBFLmxpdGVyYWwsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjxcIiArIHRhZ05hbWUgKyBcIi8+XCIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBjcmVhdGVMb2NhdGlvbihzdGFydFBvc2l0aW9uLCB0aGlzLmNsb25lUG9zaXRpb24oKSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnI6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYnVtcElmKCc+JykpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlblJlc3VsdCA9IHRoaXMucGFyc2VNZXNzYWdlKG5lc3RpbmdMZXZlbCArIDEsIHBhcmVudEFyZ1R5cGUsIHRydWUpO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuUmVzdWx0LmVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlblJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGNoaWxkcmVuUmVzdWx0LnZhbDtcbiAgICAgICAgICAgIC8vIEV4cGVjdGluZyBhIGNsb3NlIHRhZ1xuICAgICAgICAgICAgdmFyIGVuZFRhZ1N0YXJ0UG9zaXRpb24gPSB0aGlzLmNsb25lUG9zaXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1bXBJZignPC8nKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRU9GKCkgfHwgIV9pc0FscGhhKHRoaXMuY2hhcigpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihFcnJvcktpbmQuSU5WQUxJRF9UQUcsIGNyZWF0ZUxvY2F0aW9uKGVuZFRhZ1N0YXJ0UG9zaXRpb24sIHRoaXMuY2xvbmVQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjbG9zaW5nVGFnTmFtZVN0YXJ0UG9zaXRpb24gPSB0aGlzLmNsb25lUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB2YXIgY2xvc2luZ1RhZ05hbWUgPSB0aGlzLnBhcnNlVGFnTmFtZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0YWdOYW1lICE9PSBjbG9zaW5nVGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihFcnJvcktpbmQuVU5NQVRDSEVEX0NMT1NJTkdfVEFHLCBjcmVhdGVMb2NhdGlvbihjbG9zaW5nVGFnTmFtZVN0YXJ0UG9zaXRpb24sIHRoaXMuY2xvbmVQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYnVtcFNwYWNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJ1bXBJZignPicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKEVycm9yS2luZC5JTlZBTElEX1RBRywgY3JlYXRlTG9jYXRpb24oZW5kVGFnU3RhcnRQb3NpdGlvbiwgdGhpcy5jbG9uZVBvc2l0aW9uKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUWVBFLnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YWdOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uKHN0YXJ0UG9zaXRpb24sIHRoaXMuY2xvbmVQb3NpdGlvbigpKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyOiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihFcnJvcktpbmQuVU5DTE9TRURfVEFHLCBjcmVhdGVMb2NhdGlvbihzdGFydFBvc2l0aW9uLCB0aGlzLmNsb25lUG9zaXRpb24oKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoRXJyb3JLaW5kLklOVkFMSURfVEFHLCBjcmVhdGVMb2NhdGlvbihzdGFydFBvc2l0aW9uLCB0aGlzLmNsb25lUG9zaXRpb24oKSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBhc3N1bWVzIHRoYXQgdGhlIGNhbGxlciBoYXMgcGVla2VkIGFoZWFkIGZvciB0aGUgZmlyc3QgdGFnIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICBQYXJzZXIucHJvdG90eXBlLnBhcnNlVGFnTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0T2Zmc2V0ID0gdGhpcy5vZmZzZXQoKTtcbiAgICAgICAgdGhpcy5idW1wKCk7IC8vIHRoZSBmaXJzdCB0YWcgbmFtZSBjaGFyYWN0ZXJcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzRU9GKCkgJiYgX2lzUG90ZW50aWFsRWxlbWVudE5hbWVDaGFyKHRoaXMuY2hhcigpKSkge1xuICAgICAgICAgICAgdGhpcy5idW1wKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZS5zbGljZShzdGFydE9mZnNldCwgdGhpcy5vZmZzZXQoKSk7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLnBhcnNlTGl0ZXJhbCA9IGZ1bmN0aW9uIChuZXN0aW5nTGV2ZWwsIHBhcmVudEFyZ1R5cGUpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5jbG9uZVBvc2l0aW9uKCk7XG4gICAgICAgIHZhciB2YWx1ZSA9ICcnO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIHBhcnNlUXVvdGVSZXN1bHQgPSB0aGlzLnRyeVBhcnNlUXVvdGUocGFyZW50QXJnVHlwZSk7XG4gICAgICAgICAgICBpZiAocGFyc2VRdW90ZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHZhbHVlICs9IHBhcnNlUXVvdGVSZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcGFyc2VVbnF1b3RlZFJlc3VsdCA9IHRoaXMudHJ5UGFyc2VVbnF1b3RlZChuZXN0aW5nTGV2ZWwsIHBhcmVudEFyZ1R5cGUpO1xuICAgICAgICAgICAgaWYgKHBhcnNlVW5xdW90ZWRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBwYXJzZVVucXVvdGVkUmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBhcnNlTGVmdEFuZ2xlUmVzdWx0ID0gdGhpcy50cnlQYXJzZUxlZnRBbmdsZUJyYWNrZXQoKTtcbiAgICAgICAgICAgIGlmIChwYXJzZUxlZnRBbmdsZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHZhbHVlICs9IHBhcnNlTGVmdEFuZ2xlUmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oc3RhcnQsIHRoaXMuY2xvbmVQb3NpdGlvbigpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbDogeyB0eXBlOiBUWVBFLmxpdGVyYWwsIHZhbHVlOiB2YWx1ZSwgbG9jYXRpb246IGxvY2F0aW9uIH0sXG4gICAgICAgICAgICBlcnI6IG51bGwsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLnRyeVBhcnNlTGVmdEFuZ2xlQnJhY2tldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRU9GKCkgJiZcbiAgICAgICAgICAgIHRoaXMuY2hhcigpID09PSA2MCAvKiBgPGAgKi8gJiZcbiAgICAgICAgICAgICh0aGlzLmlnbm9yZVRhZyB8fFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IHRoZSBvcGVuaW5nIHRhZyBvciBjbG9zaW5nIHRhZyBwb3NpdGlvbiwgYmFpbC5cbiAgICAgICAgICAgICAgICAhX2lzQWxwaGFPclNsYXNoKHRoaXMucGVlaygpIHx8IDApKSkge1xuICAgICAgICAgICAgdGhpcy5idW1wKCk7IC8vIGA8YFxuICAgICAgICAgICAgcmV0dXJuICc8JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0YXJ0aW5nIHdpdGggSUNVIDQuOCwgYW4gQVNDSUkgYXBvc3Ryb3BoZSBvbmx5IHN0YXJ0cyBxdW90ZWQgdGV4dCBpZiBpdCBpbW1lZGlhdGVseSBwcmVjZWRlc1xuICAgICAqIGEgY2hhcmFjdGVyIHRoYXQgcmVxdWlyZXMgcXVvdGluZyAodGhhdCBpcywgXCJvbmx5IHdoZXJlIG5lZWRlZFwiKSwgYW5kIHdvcmtzIHRoZSBzYW1lIGluXG4gICAgICogbmVzdGVkIG1lc3NhZ2VzIGFzIG9uIHRoZSB0b3AgbGV2ZWwgb2YgdGhlIHBhdHRlcm4uIFRoZSBuZXcgYmVoYXZpb3IgaXMgb3RoZXJ3aXNlIGNvbXBhdGlibGUuXG4gICAgICovXG4gICAgUGFyc2VyLnByb3RvdHlwZS50cnlQYXJzZVF1b3RlID0gZnVuY3Rpb24gKHBhcmVudEFyZ1R5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFT0YoKSB8fCB0aGlzLmNoYXIoKSAhPT0gMzkgLyogYCdgICovKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBQYXJzZSBlc2NhcGVkIGNoYXIgZm9sbG93aW5nIHRoZSBhcG9zdHJvcGhlLCBvciBlYXJseSByZXR1cm4gaWYgdGhlcmUgaXMgbm8gZXNjYXBlZCBjaGFyLlxuICAgICAgICAvLyBDaGVjayBpZiBpcyB2YWxpZCBlc2NhcGVkIGNoYXJhY3RlclxuICAgICAgICBzd2l0Y2ggKHRoaXMucGVlaygpKSB7XG4gICAgICAgICAgICBjYXNlIDM5IC8qIGAnYCAqLzpcbiAgICAgICAgICAgICAgICAvLyBkb3VibGUgcXVvdGUsIHNob3VsZCByZXR1cm4gYXMgYSBzaW5nbGUgcXVvdGUuXG4gICAgICAgICAgICAgICAgdGhpcy5idW1wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5idW1wKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgICAgICAgICAgLy8gJ3snLCAnPCcsICc+JywgJ30nXG4gICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM1OiAvLyAnIydcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50QXJnVHlwZSA9PT0gJ3BsdXJhbCcgfHwgcGFyZW50QXJnVHlwZSA9PT0gJ3NlbGVjdG9yZGluYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idW1wKCk7IC8vIGFwb3N0cm9waGVcbiAgICAgICAgdmFyIGNvZGVQb2ludHMgPSBbdGhpcy5jaGFyKCldOyAvLyBlc2NhcGVkIGNoYXJcbiAgICAgICAgdGhpcy5idW1wKCk7XG4gICAgICAgIC8vIHJlYWQgY2hhcnMgdW50aWwgdGhlIG9wdGlvbmFsIGNsb3NpbmcgYXBvc3Ryb3BoZSBpcyBmb3VuZFxuICAgICAgICB3aGlsZSAoIXRoaXMuaXNFT0YoKSkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5jaGFyKCk7XG4gICAgICAgICAgICBpZiAoY2ggPT09IDM5IC8qIGAnYCAqLykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gMzkgLyogYCdgICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGVQb2ludHMucHVzaCgzOSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1bXAgb25lIG1vcmUgdGltZSBiZWNhdXNlIHdlIG5lZWQgdG8gc2tpcCAyIGNoYXJhY3RlcnMuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVtcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWwgY2xvc2luZyBhcG9zdHJvcGhlLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50cy5wdXNoKGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYnVtcCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tQ29kZVBvaW50LmFwcGx5KHZvaWQgMCwgY29kZVBvaW50cyk7XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLnRyeVBhcnNlVW5xdW90ZWQgPSBmdW5jdGlvbiAobmVzdGluZ0xldmVsLCBwYXJlbnRBcmdUeXBlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRU9GKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjaCA9IHRoaXMuY2hhcigpO1xuICAgICAgICBpZiAoY2ggPT09IDYwIC8qIGA8YCAqLyB8fFxuICAgICAgICAgICAgY2ggPT09IDEyMyAvKiBge2AgKi8gfHxcbiAgICAgICAgICAgIChjaCA9PT0gMzUgLyogYCNgICovICYmXG4gICAgICAgICAgICAgICAgKHBhcmVudEFyZ1R5cGUgPT09ICdwbHVyYWwnIHx8IHBhcmVudEFyZ1R5cGUgPT09ICdzZWxlY3RvcmRpbmFsJykpIHx8XG4gICAgICAgICAgICAoY2ggPT09IDEyNSAvKiBgfWAgKi8gJiYgbmVzdGluZ0xldmVsID4gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idW1wKCk7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUNvZGVQb2ludChjaCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUucGFyc2VBcmd1bWVudCA9IGZ1bmN0aW9uIChuZXN0aW5nTGV2ZWwsIGV4cGVjdGluZ0Nsb3NlVGFnKSB7XG4gICAgICAgIHZhciBvcGVuaW5nQnJhY2VQb3NpdGlvbiA9IHRoaXMuY2xvbmVQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLmJ1bXAoKTsgLy8gYHtgXG4gICAgICAgIHRoaXMuYnVtcFNwYWNlKCk7XG4gICAgICAgIGlmICh0aGlzLmlzRU9GKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKEVycm9yS2luZC5FWFBFQ1RfQVJHVU1FTlRfQ0xPU0lOR19CUkFDRSwgY3JlYXRlTG9jYXRpb24ob3BlbmluZ0JyYWNlUG9zaXRpb24sIHRoaXMuY2xvbmVQb3NpdGlvbigpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hhcigpID09PSAxMjUgLyogYH1gICovKSB7XG4gICAgICAgICAgICB0aGlzLmJ1bXAoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKEVycm9yS2luZC5FTVBUWV9BUkdVTUVOVCwgY3JlYXRlTG9jYXRpb24ob3BlbmluZ0JyYWNlUG9zaXRpb24sIHRoaXMuY2xvbmVQb3NpdGlvbigpKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXJndW1lbnQgbmFtZVxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnBhcnNlSWRlbnRpZmllcklmUG9zc2libGUoKS52YWx1ZTtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoRXJyb3JLaW5kLk1BTEZPUk1FRF9BUkdVTUVOVCwgY3JlYXRlTG9jYXRpb24ob3BlbmluZ0JyYWNlUG9zaXRpb24sIHRoaXMuY2xvbmVQb3NpdGlvbigpKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idW1wU3BhY2UoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNFT0YoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoRXJyb3JLaW5kLkVYUEVDVF9BUkdVTUVOVF9DTE9TSU5HX0JSQUNFLCBjcmVhdGVMb2NhdGlvbihvcGVuaW5nQnJhY2VQb3NpdGlvbiwgdGhpcy5jbG9uZVBvc2l0aW9uKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMuY2hhcigpKSB7XG4gICAgICAgICAgICAvLyBTaW1wbGUgYXJndW1lbnQ6IGB7bmFtZX1gXG4gICAgICAgICAgICBjYXNlIDEyNSAvKiBgfWAgKi86IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bXAoKTsgLy8gYH1gXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUWVBFLmFyZ3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWUgZG9lcyBub3QgaW5jbHVkZSB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyBicmFjZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogY3JlYXRlTG9jYXRpb24ob3BlbmluZ0JyYWNlUG9zaXRpb24sIHRoaXMuY2xvbmVQb3NpdGlvbigpKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyOiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcmd1bWVudCB3aXRoIG9wdGlvbnM6IGB7bmFtZSwgZm9ybWF0LCAuLi59YFxuICAgICAgICAgICAgY2FzZSA0NCAvKiBgLGAgKi86IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bXAoKTsgLy8gYCxgXG4gICAgICAgICAgICAgICAgdGhpcy5idW1wU3BhY2UoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VPRigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKEVycm9yS2luZC5FWFBFQ1RfQVJHVU1FTlRfQ0xPU0lOR19CUkFDRSwgY3JlYXRlTG9jYXRpb24ob3BlbmluZ0JyYWNlUG9zaXRpb24sIHRoaXMuY2xvbmVQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlQXJndW1lbnRPcHRpb25zKG5lc3RpbmdMZXZlbCwgZXhwZWN0aW5nQ2xvc2VUYWcsIHZhbHVlLCBvcGVuaW5nQnJhY2VQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKEVycm9yS2luZC5NQUxGT1JNRURfQVJHVU1FTlQsIGNyZWF0ZUxvY2F0aW9uKG9wZW5pbmdCcmFjZVBvc2l0aW9uLCB0aGlzLmNsb25lUG9zaXRpb24oKSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZHZhbmNlIHRoZSBwYXJzZXIgdW50aWwgdGhlIGVuZCBvZiB0aGUgaWRlbnRpZmllciwgaWYgaXQgaXMgY3VycmVudGx5IG9uXG4gICAgICogYW4gaWRlbnRpZmllciBjaGFyYWN0ZXIuIFJldHVybiBhbiBlbXB0eSBzdHJpbmcgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIFBhcnNlci5wcm90b3R5cGUucGFyc2VJZGVudGlmaWVySWZQb3NzaWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0aW5nUG9zaXRpb24gPSB0aGlzLmNsb25lUG9zaXRpb24oKTtcbiAgICAgICAgdmFyIHN0YXJ0T2Zmc2V0ID0gdGhpcy5vZmZzZXQoKTtcbiAgICAgICAgdmFyIHZhbHVlID0gbWF0Y2hJZGVudGlmaWVyQXRJbmRleCh0aGlzLm1lc3NhZ2UsIHN0YXJ0T2Zmc2V0KTtcbiAgICAgICAgdmFyIGVuZE9mZnNldCA9IHN0YXJ0T2Zmc2V0ICsgdmFsdWUubGVuZ3RoO1xuICAgICAgICB0aGlzLmJ1bXBUbyhlbmRPZmZzZXQpO1xuICAgICAgICB2YXIgZW5kUG9zaXRpb24gPSB0aGlzLmNsb25lUG9zaXRpb24oKTtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oc3RhcnRpbmdQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGxvY2F0aW9uOiBsb2NhdGlvbiB9O1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZUFyZ3VtZW50T3B0aW9ucyA9IGZ1bmN0aW9uIChuZXN0aW5nTGV2ZWwsIGV4cGVjdGluZ0Nsb3NlVGFnLCB2YWx1ZSwgb3BlbmluZ0JyYWNlUG9zaXRpb24pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBQYXJzZSB0aGlzIHJhbmdlOlxuICAgICAgICAvLyB7bmFtZSwgdHlwZSwgc3R5bGV9XG4gICAgICAgIC8vICAgICAgICBeLS0tXlxuICAgICAgICB2YXIgdHlwZVN0YXJ0UG9zaXRpb24gPSB0aGlzLmNsb25lUG9zaXRpb24oKTtcbiAgICAgICAgdmFyIGFyZ1R5cGUgPSB0aGlzLnBhcnNlSWRlbnRpZmllcklmUG9zc2libGUoKS52YWx1ZTtcbiAgICAgICAgdmFyIHR5cGVFbmRQb3NpdGlvbiA9IHRoaXMuY2xvbmVQb3NpdGlvbigpO1xuICAgICAgICBzd2l0Y2ggKGFyZ1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJyc6XG4gICAgICAgICAgICAgICAgLy8gRXhwZWN0aW5nIGEgc3R5bGUgc3RyaW5nIG51bWJlciwgZGF0ZSwgdGltZSwgcGx1cmFsLCBzZWxlY3RvcmRpbmFsLCBvciBzZWxlY3QuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoRXJyb3JLaW5kLkVYUEVDVF9BUkdVTUVOVF9UWVBFLCBjcmVhdGVMb2NhdGlvbih0eXBlU3RhcnRQb3NpdGlvbiwgdHlwZUVuZFBvc2l0aW9uKSk7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICBjYXNlICd0aW1lJzoge1xuICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRoaXMgcmFuZ2U6XG4gICAgICAgICAgICAgICAgLy8ge25hbWUsIG51bWJlciwgc3R5bGV9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgIF4tLS0tLS0tXlxuICAgICAgICAgICAgICAgIHRoaXMuYnVtcFNwYWNlKCk7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlQW5kTG9jYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJ1bXBJZignLCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVtcFNwYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZVN0YXJ0UG9zaXRpb24gPSB0aGlzLmNsb25lUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucGFyc2VTaW1wbGVBcmdTdHlsZUlmUG9zc2libGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gdHJpbUVuZChyZXN1bHQudmFsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoRXJyb3JLaW5kLkVYUEVDVF9BUkdVTUVOVF9TVFlMRSwgY3JlYXRlTG9jYXRpb24odGhpcy5jbG9uZVBvc2l0aW9uKCksIHRoaXMuY2xvbmVQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlTG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihzdHlsZVN0YXJ0UG9zaXRpb24sIHRoaXMuY2xvbmVQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVBbmRMb2NhdGlvbiA9IHsgc3R5bGU6IHN0eWxlLCBzdHlsZUxvY2F0aW9uOiBzdHlsZUxvY2F0aW9uIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhcmdDbG9zZVJlc3VsdCA9IHRoaXMudHJ5UGFyc2VBcmd1bWVudENsb3NlKG9wZW5pbmdCcmFjZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJnQ2xvc2VSZXN1bHQuZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmdDbG9zZVJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uXzEgPSBjcmVhdGVMb2NhdGlvbihvcGVuaW5nQnJhY2VQb3NpdGlvbiwgdGhpcy5jbG9uZVBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3Qgc3R5bGUgb3Igc2tlbGV0b25cbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVBbmRMb2NhdGlvbiAmJiBzdGFydHNXaXRoKHN0eWxlQW5kTG9jYXRpb24gPT09IG51bGwgfHwgc3R5bGVBbmRMb2NhdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3R5bGVBbmRMb2NhdGlvbi5zdHlsZSwgJzo6JywgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tlbGV0b24gc3RhcnRzIHdpdGggYDo6YC5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNrZWxldG9uID0gdHJpbVN0YXJ0KHN0eWxlQW5kTG9jYXRpb24uc3R5bGUuc2xpY2UoMikpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnBhcnNlTnVtYmVyU2tlbGV0b25Gcm9tU3RyaW5nKHNrZWxldG9uLCBzdHlsZUFuZExvY2F0aW9uLnN0eWxlTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWw6IHsgdHlwZTogVFlQRS5udW1iZXIsIHZhbHVlOiB2YWx1ZSwgbG9jYXRpb246IGxvY2F0aW9uXzEsIHN0eWxlOiByZXN1bHQudmFsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChza2VsZXRvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihFcnJvcktpbmQuRVhQRUNUX0RBVEVfVElNRV9TS0VMRVRPTiwgbG9jYXRpb25fMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogU0tFTEVUT05fVFlQRS5kYXRlVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBza2VsZXRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogc3R5bGVBbmRMb2NhdGlvbi5zdHlsZUxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZE9wdGlvbnM6IHRoaXMuc2hvdWxkUGFyc2VTa2VsZXRvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXJzZURhdGVUaW1lU2tlbGV0b24oc2tlbGV0b24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBhcmdUeXBlID09PSAnZGF0ZScgPyBUWVBFLmRhdGUgOiBUWVBFLnRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbDogeyB0eXBlOiB0eXBlLCB2YWx1ZTogdmFsdWUsIGxvY2F0aW9uOiBsb2NhdGlvbl8xLCBzdHlsZTogc3R5bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlZ3VsYXIgc3R5bGUgb3Igbm8gc3R5bGUuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBhcmdUeXBlID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gVFlQRS5udW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFyZ1R5cGUgPT09ICdkYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFRZUEUuZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFRZUEUudGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbl8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IChfYSA9IHN0eWxlQW5kTG9jYXRpb24gPT09IG51bGwgfHwgc3R5bGVBbmRMb2NhdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3R5bGVBbmRMb2NhdGlvbi5zdHlsZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyOiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdwbHVyYWwnOlxuICAgICAgICAgICAgY2FzZSAnc2VsZWN0b3JkaW5hbCc6XG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOiB7XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgdGhpcyByYW5nZTpcbiAgICAgICAgICAgICAgICAvLyB7bmFtZSwgcGx1cmFsLCBvcHRpb25zfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICBeLS0tLS0tLS0tXlxuICAgICAgICAgICAgICAgIHZhciB0eXBlRW5kUG9zaXRpb25fMSA9IHRoaXMuY2xvbmVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVtcFNwYWNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJ1bXBJZignLCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKEVycm9yS2luZC5FWFBFQ1RfU0VMRUNUX0FSR1VNRU5UX09QVElPTlMsIGNyZWF0ZUxvY2F0aW9uKHR5cGVFbmRQb3NpdGlvbl8xLCBfX2Fzc2lnbih7fSwgdHlwZUVuZFBvc2l0aW9uXzEpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYnVtcFNwYWNlKCk7XG4gICAgICAgICAgICAgICAgLy8gUGFyc2Ugb2Zmc2V0OlxuICAgICAgICAgICAgICAgIC8vIHtuYW1lLCBwbHVyYWwsIG9mZnNldDoxLCBvcHRpb25zfVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIF4tLS0tLV5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIG9yIHRoZSBmaXJzdCBvcHRpb246XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyB7bmFtZSwgcGx1cmFsLCBvbmUgey4uLn0gb3RoZXIgey4uLn19XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgXi0tXlxuICAgICAgICAgICAgICAgIHZhciBpZGVudGlmaWVyQW5kTG9jYXRpb24gPSB0aGlzLnBhcnNlSWRlbnRpZmllcklmUG9zc2libGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgcGx1cmFsT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoYXJnVHlwZSAhPT0gJ3NlbGVjdCcgJiYgaWRlbnRpZmllckFuZExvY2F0aW9uLnZhbHVlID09PSAnb2Zmc2V0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYnVtcElmKCc6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yKEVycm9yS2luZC5FWFBFQ1RfUExVUkFMX0FSR1VNRU5UX09GRlNFVF9WQUxVRSwgY3JlYXRlTG9jYXRpb24odGhpcy5jbG9uZVBvc2l0aW9uKCksIHRoaXMuY2xvbmVQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idW1wU3BhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudHJ5UGFyc2VEZWNpbWFsSW50ZWdlcihFcnJvcktpbmQuRVhQRUNUX1BMVVJBTF9BUkdVTUVOVF9PRkZTRVRfVkFMVUUsIEVycm9yS2luZC5JTlZBTElEX1BMVVJBTF9BUkdVTUVOVF9PRkZTRVRfVkFMVUUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZSBhbm90aGVyIGlkZW50aWZpZXIgZm9yIG9wdGlvbiBwYXJzaW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVtcFNwYWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXJBbmRMb2NhdGlvbiA9IHRoaXMucGFyc2VJZGVudGlmaWVySWZQb3NzaWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICBwbHVyYWxPZmZzZXQgPSByZXN1bHQudmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uc1Jlc3VsdCA9IHRoaXMudHJ5UGFyc2VQbHVyYWxPclNlbGVjdE9wdGlvbnMobmVzdGluZ0xldmVsLCBhcmdUeXBlLCBleHBlY3RpbmdDbG9zZVRhZywgaWRlbnRpZmllckFuZExvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uc1Jlc3VsdC5lcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNSZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhcmdDbG9zZVJlc3VsdCA9IHRoaXMudHJ5UGFyc2VBcmd1bWVudENsb3NlKG9wZW5pbmdCcmFjZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJnQ2xvc2VSZXN1bHQuZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmdDbG9zZVJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uXzIgPSBjcmVhdGVMb2NhdGlvbihvcGVuaW5nQnJhY2VQb3NpdGlvbiwgdGhpcy5jbG9uZVBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgIGlmIChhcmdUeXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVFlQRS5zZWxlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZyb21FbnRyaWVzKG9wdGlvbnNSZXN1bHQudmFsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25fMixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVFlQRS5wbHVyYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZyb21FbnRyaWVzKG9wdGlvbnNSZXN1bHQudmFsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHBsdXJhbE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVyYWxUeXBlOiBhcmdUeXBlID09PSAncGx1cmFsJyA/ICdjYXJkaW5hbCcgOiAnb3JkaW5hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXzIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoRXJyb3JLaW5kLklOVkFMSURfQVJHVU1FTlRfVFlQRSwgY3JlYXRlTG9jYXRpb24odHlwZVN0YXJ0UG9zaXRpb24sIHR5cGVFbmRQb3NpdGlvbikpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQYXJzZXIucHJvdG90eXBlLnRyeVBhcnNlQXJndW1lbnRDbG9zZSA9IGZ1bmN0aW9uIChvcGVuaW5nQnJhY2VQb3NpdGlvbikge1xuICAgICAgICAvLyBQYXJzZToge3ZhbHVlLCBudW1iZXIsIDo6Y3VycmVuY3kvR0JQIH1cbiAgICAgICAgLy9cbiAgICAgICAgaWYgKHRoaXMuaXNFT0YoKSB8fCB0aGlzLmNoYXIoKSAhPT0gMTI1IC8qIGB9YCAqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoRXJyb3JLaW5kLkVYUEVDVF9BUkdVTUVOVF9DTE9TSU5HX0JSQUNFLCBjcmVhdGVMb2NhdGlvbihvcGVuaW5nQnJhY2VQb3NpdGlvbiwgdGhpcy5jbG9uZVBvc2l0aW9uKCkpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1bXAoKTsgLy8gYH1gXG4gICAgICAgIHJldHVybiB7IHZhbDogdHJ1ZSwgZXJyOiBudWxsIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS91bmljb2RlLW9yZy9pY3UvYmxvYi9hZjdlZDFmNmQyMjk4MDEzZGMzMDM2Mjg0MzhlYzRhYmUxZjE2NDc5L2ljdTRjL3NvdXJjZS9jb21tb24vbWVzc2FnZXBhdHRlcm4uY3BwI0w2NTlcbiAgICAgKi9cbiAgICBQYXJzZXIucHJvdG90eXBlLnBhcnNlU2ltcGxlQXJnU3R5bGVJZlBvc3NpYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmVzdGVkQnJhY2VzID0gMDtcbiAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSB0aGlzLmNsb25lUG9zaXRpb24oKTtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzRU9GKCkpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMuY2hhcigpO1xuICAgICAgICAgICAgc3dpdGNoIChjaCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzkgLyogYCdgICovOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyZWF0IGFwb3N0cm9waGUgYXMgcXVvdGluZyBidXQgaW5jbHVkZSBpdCBpbiB0aGUgc3R5bGUgcGFydC5cbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgZW5kIG9mIHRoZSBxdW90ZWQgbGl0ZXJhbCB0ZXh0LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bXAoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwb3N0cm9waGVQb3NpdGlvbiA9IHRoaXMuY2xvbmVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYnVtcFVudGlsKFwiJ1wiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoRXJyb3JLaW5kLlVOQ0xPU0VEX1FVT1RFX0lOX0FSR1VNRU5UX1NUWUxFLCBjcmVhdGVMb2NhdGlvbihhcG9zdHJvcGhlUG9zaXRpb24sIHRoaXMuY2xvbmVQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idW1wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIDEyMyAvKiBge2AgKi86IHtcbiAgICAgICAgICAgICAgICAgICAgbmVzdGVkQnJhY2VzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVtcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAxMjUgLyogYH1gICovOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXN0ZWRCcmFjZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXN0ZWRCcmFjZXMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiB0aGlzLm1lc3NhZ2Uuc2xpY2Uoc3RhcnRQb3NpdGlvbi5vZmZzZXQsIHRoaXMub2Zmc2V0KCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVtcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsOiB0aGlzLm1lc3NhZ2Uuc2xpY2Uoc3RhcnRQb3NpdGlvbi5vZmZzZXQsIHRoaXMub2Zmc2V0KCkpLFxuICAgICAgICAgICAgZXJyOiBudWxsLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZU51bWJlclNrZWxldG9uRnJvbVN0cmluZyA9IGZ1bmN0aW9uIChza2VsZXRvbiwgbG9jYXRpb24pIHtcbiAgICAgICAgdmFyIHRva2VucyA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdG9rZW5zID0gcGFyc2VOdW1iZXJTa2VsZXRvbkZyb21TdHJpbmcoc2tlbGV0b24pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihFcnJvcktpbmQuSU5WQUxJRF9OVU1CRVJfU0tFTEVUT04sIGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU0tFTEVUT05fVFlQRS5udW1iZXIsXG4gICAgICAgICAgICAgICAgdG9rZW5zOiB0b2tlbnMsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIHBhcnNlZE9wdGlvbnM6IHRoaXMuc2hvdWxkUGFyc2VTa2VsZXRvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBwYXJzZU51bWJlclNrZWxldG9uKHRva2VucylcbiAgICAgICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnI6IG51bGwsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmVzdGluZ19sZXZlbCBUaGUgY3VycmVudCBuZXN0aW5nIGxldmVsIG9mIG1lc3NhZ2VzLlxuICAgICAqICAgICBUaGlzIGNhbiBiZSBwb3NpdGl2ZSB3aGVuIHBhcnNpbmcgbWVzc2FnZSBmcmFnbWVudCBpbiBzZWxlY3Qgb3IgcGx1cmFsIGFyZ3VtZW50IG9wdGlvbnMuXG4gICAgICogQHBhcmFtIHBhcmVudF9hcmdfdHlwZSBUaGUgcGFyZW50IGFyZ3VtZW50J3MgdHlwZS5cbiAgICAgKiBAcGFyYW0gcGFyc2VkX2ZpcnN0X2lkZW50aWZpZXIgSWYgcHJvdmlkZWQsIHRoaXMgaXMgdGhlIGZpcnN0IGlkZW50aWZpZXItbGlrZSBzZWxlY3RvciBvZlxuICAgICAqICAgICB0aGUgYXJndW1lbnQuIEl0IGlzIGEgYnktcHJvZHVjdCBvZiBhIHByZXZpb3VzIHBhcnNpbmcgYXR0ZW1wdC5cbiAgICAgKiBAcGFyYW0gZXhwZWN0aW5nX2Nsb3NlX3RhZyBJZiB0cnVlLCB0aGlzIG1lc3NhZ2UgaXMgZGlyZWN0bHkgb3IgaW5kaXJlY3RseSBuZXN0ZWQgaW5zaWRlXG4gICAgICogICAgIGJldHdlZW4gYSBwYWlyIG9mIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncy4gVGhlIG5lc3RlZCBtZXNzYWdlIHdpbGwgbm90IHBhcnNlIGJleW9uZFxuICAgICAqICAgICB0aGUgY2xvc2luZyB0YWcgYm91bmRhcnkuXG4gICAgICovXG4gICAgUGFyc2VyLnByb3RvdHlwZS50cnlQYXJzZVBsdXJhbE9yU2VsZWN0T3B0aW9ucyA9IGZ1bmN0aW9uIChuZXN0aW5nTGV2ZWwsIHBhcmVudEFyZ1R5cGUsIGV4cGVjdENsb3NlVGFnLCBwYXJzZWRGaXJzdElkZW50aWZpZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgaGFzT3RoZXJDbGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIHBhcnNlZFNlbGVjdG9ycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gcGFyc2VkRmlyc3RJZGVudGlmaWVyLnZhbHVlLCBzZWxlY3RvckxvY2F0aW9uID0gcGFyc2VkRmlyc3RJZGVudGlmaWVyLmxvY2F0aW9uO1xuICAgICAgICAvLyBQYXJzZTpcbiAgICAgICAgLy8gb25lIHtvbmUgYXBwbGV9XG4gICAgICAgIC8vIF4tLV5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rvci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IHRoaXMuY2xvbmVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRBcmdUeXBlICE9PSAnc2VsZWN0JyAmJiB0aGlzLmJ1bXBJZignPScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyeSBwYXJzZSBgPXtudW1iZXJ9YCBzZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50cnlQYXJzZURlY2ltYWxJbnRlZ2VyKEVycm9yS2luZC5FWFBFQ1RfUExVUkFMX0FSR1VNRU5UX1NFTEVDVE9SLCBFcnJvcktpbmQuSU5WQUxJRF9QTFVSQUxfQVJHVU1FTlRfU0VMRUNUT1IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvckxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oc3RhcnRQb3NpdGlvbiwgdGhpcy5jbG9uZVBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHRoaXMubWVzc2FnZS5zbGljZShzdGFydFBvc2l0aW9uLm9mZnNldCwgdGhpcy5vZmZzZXQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEdXBsaWNhdGUgc2VsZWN0b3IgY2xhdXNlc1xuICAgICAgICAgICAgaWYgKHBhcnNlZFNlbGVjdG9ycy5oYXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IocGFyZW50QXJnVHlwZSA9PT0gJ3NlbGVjdCdcbiAgICAgICAgICAgICAgICAgICAgPyBFcnJvcktpbmQuRFVQTElDQVRFX1NFTEVDVF9BUkdVTUVOVF9TRUxFQ1RPUlxuICAgICAgICAgICAgICAgICAgICA6IEVycm9yS2luZC5EVVBMSUNBVEVfUExVUkFMX0FSR1VNRU5UX1NFTEVDVE9SLCBzZWxlY3RvckxvY2F0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxlY3RvciA9PT0gJ290aGVyJykge1xuICAgICAgICAgICAgICAgIGhhc090aGVyQ2xhdXNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFBhcnNlOlxuICAgICAgICAgICAgLy8gb25lIHtvbmUgYXBwbGV9XG4gICAgICAgICAgICAvLyAgICAgXi0tLS0tLS0tLS1eXG4gICAgICAgICAgICB0aGlzLmJ1bXBTcGFjZSgpO1xuICAgICAgICAgICAgdmFyIG9wZW5pbmdCcmFjZVBvc2l0aW9uID0gdGhpcy5jbG9uZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYnVtcElmKCd7JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihwYXJlbnRBcmdUeXBlID09PSAnc2VsZWN0J1xuICAgICAgICAgICAgICAgICAgICA/IEVycm9yS2luZC5FWFBFQ1RfU0VMRUNUX0FSR1VNRU5UX1NFTEVDVE9SX0ZSQUdNRU5UXG4gICAgICAgICAgICAgICAgICAgIDogRXJyb3JLaW5kLkVYUEVDVF9QTFVSQUxfQVJHVU1FTlRfU0VMRUNUT1JfRlJBR01FTlQsIGNyZWF0ZUxvY2F0aW9uKHRoaXMuY2xvbmVQb3NpdGlvbigpLCB0aGlzLmNsb25lUG9zaXRpb24oKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZyYWdtZW50UmVzdWx0ID0gdGhpcy5wYXJzZU1lc3NhZ2UobmVzdGluZ0xldmVsICsgMSwgcGFyZW50QXJnVHlwZSwgZXhwZWN0Q2xvc2VUYWcpO1xuICAgICAgICAgICAgaWYgKGZyYWdtZW50UmVzdWx0LmVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcmFnbWVudFJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhcmdDbG9zZVJlc3VsdCA9IHRoaXMudHJ5UGFyc2VBcmd1bWVudENsb3NlKG9wZW5pbmdCcmFjZVBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChhcmdDbG9zZVJlc3VsdC5lcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnQ2xvc2VSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goW1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZyYWdtZW50UmVzdWx0LnZhbCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uKG9wZW5pbmdCcmFjZVBvc2l0aW9uLCB0aGlzLmNsb25lUG9zaXRpb24oKSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgZXhpc3Rpbmcgc2VsZWN0b3JzXG4gICAgICAgICAgICBwYXJzZWRTZWxlY3RvcnMuYWRkKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIC8vIFByZXAgbmV4dCBzZWxlY3RvciBjbGF1c2UuXG4gICAgICAgICAgICB0aGlzLmJ1bXBTcGFjZSgpO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5wYXJzZUlkZW50aWZpZXJJZlBvc3NpYmxlKCksIHNlbGVjdG9yID0gX2EudmFsdWUsIHNlbGVjdG9yTG9jYXRpb24gPSBfYS5sb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihwYXJlbnRBcmdUeXBlID09PSAnc2VsZWN0J1xuICAgICAgICAgICAgICAgID8gRXJyb3JLaW5kLkVYUEVDVF9TRUxFQ1RfQVJHVU1FTlRfU0VMRUNUT1JcbiAgICAgICAgICAgICAgICA6IEVycm9yS2luZC5FWFBFQ1RfUExVUkFMX0FSR1VNRU5UX1NFTEVDVE9SLCBjcmVhdGVMb2NhdGlvbih0aGlzLmNsb25lUG9zaXRpb24oKSwgdGhpcy5jbG9uZVBvc2l0aW9uKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlc090aGVyQ2xhdXNlICYmICFoYXNPdGhlckNsYXVzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoRXJyb3JLaW5kLk1JU1NJTkdfT1RIRVJfQ0xBVVNFLCBjcmVhdGVMb2NhdGlvbih0aGlzLmNsb25lUG9zaXRpb24oKSwgdGhpcy5jbG9uZVBvc2l0aW9uKCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWw6IG9wdGlvbnMsIGVycjogbnVsbCB9O1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS50cnlQYXJzZURlY2ltYWxJbnRlZ2VyID0gZnVuY3Rpb24gKGV4cGVjdE51bWJlckVycm9yLCBpbnZhbGlkTnVtYmVyRXJyb3IpIHtcbiAgICAgICAgdmFyIHNpZ24gPSAxO1xuICAgICAgICB2YXIgc3RhcnRpbmdQb3NpdGlvbiA9IHRoaXMuY2xvbmVQb3NpdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5idW1wSWYoJysnKSkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYnVtcElmKCctJykpIHtcbiAgICAgICAgICAgIHNpZ24gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzRGlnaXRzID0gZmFsc2U7XG4gICAgICAgIHZhciBkZWNpbWFsID0gMDtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzRU9GKCkpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMuY2hhcigpO1xuICAgICAgICAgICAgaWYgKGNoID49IDQ4IC8qIGAwYCAqLyAmJiBjaCA8PSA1NyAvKiBgOWAgKi8pIHtcbiAgICAgICAgICAgICAgICBoYXNEaWdpdHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRlY2ltYWwgPSBkZWNpbWFsICogMTAgKyAoY2ggLSA0OCk7XG4gICAgICAgICAgICAgICAgdGhpcy5idW1wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihzdGFydGluZ1Bvc2l0aW9uLCB0aGlzLmNsb25lUG9zaXRpb24oKSk7XG4gICAgICAgIGlmICghaGFzRGlnaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihleHBlY3ROdW1iZXJFcnJvciwgbG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGRlY2ltYWwgKj0gc2lnbjtcbiAgICAgICAgaWYgKCFpc1NhZmVJbnRlZ2VyKGRlY2ltYWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihpbnZhbGlkTnVtYmVyRXJyb3IsIGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB2YWw6IGRlY2ltYWwsIGVycjogbnVsbCB9O1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLm9mZnNldDtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUuaXNFT0YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldCgpID09PSB0aGlzLm1lc3NhZ2UubGVuZ3RoO1xuICAgIH07XG4gICAgUGFyc2VyLnByb3RvdHlwZS5jbG9uZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUaGlzIGlzIG11Y2ggZmFzdGVyIHRoYW4gYE9iamVjdC5hc3NpZ25gIG9yIHNwcmVhZC5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5wb3NpdGlvbi5vZmZzZXQsXG4gICAgICAgICAgICBsaW5lOiB0aGlzLnBvc2l0aW9uLmxpbmUsXG4gICAgICAgICAgICBjb2x1bW46IHRoaXMucG9zaXRpb24uY29sdW1uLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBjb2RlIHBvaW50IGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBwYXJzZXIuXG4gICAgICogVGhyb3dzIGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmQuXG4gICAgICovXG4gICAgUGFyc2VyLnByb3RvdHlwZS5jaGFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5wb3NpdGlvbi5vZmZzZXQ7XG4gICAgICAgIGlmIChvZmZzZXQgPj0gdGhpcy5tZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ291dCBvZiBib3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb2RlID0gY29kZVBvaW50QXQodGhpcy5tZXNzYWdlLCBvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIk9mZnNldCBcIiArIG9mZnNldCArIFwiIGlzIGF0IGludmFsaWQgVVRGLTE2IGNvZGUgdW5pdCBib3VuZGFyeVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29kZTtcbiAgICB9O1xuICAgIFBhcnNlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoa2luZCwgbG9jYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbDogbnVsbCxcbiAgICAgICAgICAgIGVycjoge1xuICAgICAgICAgICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKiogQnVtcCB0aGUgcGFyc2VyIHRvIHRoZSBuZXh0IFVURi0xNiBjb2RlIHVuaXQuICovXG4gICAgUGFyc2VyLnByb3RvdHlwZS5idW1wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0VPRigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvZGUgPSB0aGlzLmNoYXIoKTtcbiAgICAgICAgaWYgKGNvZGUgPT09IDEwIC8qICdcXG4nICovKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmxpbmUgKz0gMTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uY29sdW1uID0gMTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ub2Zmc2V0ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmNvbHVtbiArPSAxO1xuICAgICAgICAgICAgLy8gMCB+IDB4MTAwMDAgLT4gdW5pY29kZSBCTVAsIG90aGVyd2lzZSBza2lwIHRoZSBzdXJyb2dhdGUgcGFpci5cbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ub2Zmc2V0ICs9IGNvZGUgPCAweDEwMDAwID8gMSA6IDI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBzdWJzdHJpbmcgc3RhcnRpbmcgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIHBhcnNlciBoYXNcbiAgICAgKiB0aGUgZ2l2ZW4gcHJlZml4LCB0aGVuIGJ1bXAgdGhlIHBhcnNlciB0byB0aGUgY2hhcmFjdGVyIGltbWVkaWF0ZWx5XG4gICAgICogZm9sbG93aW5nIHRoZSBwcmVmaXggYW5kIHJldHVybiB0cnVlLiBPdGhlcndpc2UsIGRvbid0IGJ1bXAgdGhlIHBhcnNlclxuICAgICAqIGFuZCByZXR1cm4gZmFsc2UuXG4gICAgICovXG4gICAgUGFyc2VyLnByb3RvdHlwZS5idW1wSWYgPSBmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgIGlmIChzdGFydHNXaXRoKHRoaXMubWVzc2FnZSwgcHJlZml4LCB0aGlzLm9mZnNldCgpKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEJ1bXAgdGhlIHBhcnNlciB1bnRpbCB0aGUgcGF0dGVybiBjaGFyYWN0ZXIgaXMgZm91bmQgYW5kIHJldHVybiBgdHJ1ZWAuXG4gICAgICogT3RoZXJ3aXNlIGJ1bXAgdG8gdGhlIGVuZCBvZiB0aGUgZmlsZSBhbmQgcmV0dXJuIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGFyc2VyLnByb3RvdHlwZS5idW1wVW50aWwgPSBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICB2YXIgY3VycmVudE9mZnNldCA9IHRoaXMub2Zmc2V0KCk7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubWVzc2FnZS5pbmRleE9mKHBhdHRlcm4sIGN1cnJlbnRPZmZzZXQpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5idW1wVG8oaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ1bXBUbyh0aGlzLm1lc3NhZ2UubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQnVtcCB0aGUgcGFyc2VyIHRvIHRoZSB0YXJnZXQgb2Zmc2V0LlxuICAgICAqIElmIHRhcmdldCBvZmZzZXQgaXMgYmV5b25kIHRoZSBlbmQgb2YgdGhlIGlucHV0LCBidW1wIHRoZSBwYXJzZXIgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgUGFyc2VyLnByb3RvdHlwZS5idW1wVG8gPSBmdW5jdGlvbiAodGFyZ2V0T2Zmc2V0KSB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCgpID4gdGFyZ2V0T2Zmc2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcInRhcmdldE9mZnNldCBcIiArIHRhcmdldE9mZnNldCArIFwiIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBjdXJyZW50IG9mZnNldCBcIiArIHRoaXMub2Zmc2V0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldE9mZnNldCA9IE1hdGgubWluKHRhcmdldE9mZnNldCwgdGhpcy5tZXNzYWdlLmxlbmd0aCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQoKTtcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPT09IHRhcmdldE9mZnNldCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IHRhcmdldE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwidGFyZ2V0T2Zmc2V0IFwiICsgdGFyZ2V0T2Zmc2V0ICsgXCIgaXMgYXQgaW52YWxpZCBVVEYtMTYgY29kZSB1bml0IGJvdW5kYXJ5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5idW1wKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VPRigpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBhZHZhbmNlIHRoZSBwYXJzZXIgdGhyb3VnaCBhbGwgd2hpdGVzcGFjZSB0byB0aGUgbmV4dCBub24td2hpdGVzcGFjZSBjb2RlIHVuaXQuICovXG4gICAgUGFyc2VyLnByb3RvdHlwZS5idW1wU3BhY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlICghdGhpcy5pc0VPRigpICYmIF9pc1doaXRlU3BhY2UodGhpcy5jaGFyKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmJ1bXAoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUGVlayBhdCB0aGUgKm5leHQqIFVuaWNvZGUgY29kZXBvaW50IGluIHRoZSBpbnB1dCB3aXRob3V0IGFkdmFuY2luZyB0aGUgcGFyc2VyLlxuICAgICAqIElmIHRoZSBpbnB1dCBoYXMgYmVlbiBleGhhdXN0ZWQsIHRoZW4gdGhpcyByZXR1cm5zIG51bGwuXG4gICAgICovXG4gICAgUGFyc2VyLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0VPRigpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29kZSA9IHRoaXMuY2hhcigpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQoKTtcbiAgICAgICAgdmFyIG5leHRDb2RlID0gdGhpcy5tZXNzYWdlLmNoYXJDb2RlQXQob2Zmc2V0ICsgKGNvZGUgPj0gMHgxMDAwMCA/IDIgOiAxKSk7XG4gICAgICAgIHJldHVybiBuZXh0Q29kZSAhPT0gbnVsbCAmJiBuZXh0Q29kZSAhPT0gdm9pZCAwID8gbmV4dENvZGUgOiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIFBhcnNlcjtcbn0oKSk7XG5leHBvcnQgeyBQYXJzZXIgfTtcbi8qKlxuICogVGhpcyBjaGVjayBpZiBjb2RlcG9pbnQgaXMgYWxwaGFiZXQgKGxvd2VyICYgdXBwZXJjYXNlKVxuICogQHBhcmFtIGNvZGVwb2ludFxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gX2lzQWxwaGEoY29kZXBvaW50KSB7XG4gICAgcmV0dXJuICgoY29kZXBvaW50ID49IDk3ICYmIGNvZGVwb2ludCA8PSAxMjIpIHx8XG4gICAgICAgIChjb2RlcG9pbnQgPj0gNjUgJiYgY29kZXBvaW50IDw9IDkwKSk7XG59XG5mdW5jdGlvbiBfaXNBbHBoYU9yU2xhc2goY29kZXBvaW50KSB7XG4gICAgcmV0dXJuIF9pc0FscGhhKGNvZGVwb2ludCkgfHwgY29kZXBvaW50ID09PSA0NzsgLyogJy8nICovXG59XG4vKiogU2VlIGBwYXJzZVRhZ2AgZnVuY3Rpb24gZG9jcy4gKi9cbmZ1bmN0aW9uIF9pc1BvdGVudGlhbEVsZW1lbnROYW1lQ2hhcihjKSB7XG4gICAgcmV0dXJuIChjID09PSA0NSAvKiAnLScgKi8gfHxcbiAgICAgICAgYyA9PT0gNDYgLyogJy4nICovIHx8XG4gICAgICAgIChjID49IDQ4ICYmIGMgPD0gNTcpIC8qIDAuLjkgKi8gfHxcbiAgICAgICAgYyA9PT0gOTUgLyogJ18nICovIHx8XG4gICAgICAgIChjID49IDk3ICYmIGMgPD0gMTIyKSAvKiogYS4ueiAqLyB8fFxuICAgICAgICAoYyA+PSA2NSAmJiBjIDw9IDkwKSAvKiBBLi5aICovIHx8XG4gICAgICAgIGMgPT0gMHhiNyB8fFxuICAgICAgICAoYyA+PSAweGMwICYmIGMgPD0gMHhkNikgfHxcbiAgICAgICAgKGMgPj0gMHhkOCAmJiBjIDw9IDB4ZjYpIHx8XG4gICAgICAgIChjID49IDB4ZjggJiYgYyA8PSAweDM3ZCkgfHxcbiAgICAgICAgKGMgPj0gMHgzN2YgJiYgYyA8PSAweDFmZmYpIHx8XG4gICAgICAgIChjID49IDB4MjAwYyAmJiBjIDw9IDB4MjAwZCkgfHxcbiAgICAgICAgKGMgPj0gMHgyMDNmICYmIGMgPD0gMHgyMDQwKSB8fFxuICAgICAgICAoYyA+PSAweDIwNzAgJiYgYyA8PSAweDIxOGYpIHx8XG4gICAgICAgIChjID49IDB4MmMwMCAmJiBjIDw9IDB4MmZlZikgfHxcbiAgICAgICAgKGMgPj0gMHgzMDAxICYmIGMgPD0gMHhkN2ZmKSB8fFxuICAgICAgICAoYyA+PSAweGY5MDAgJiYgYyA8PSAweGZkY2YpIHx8XG4gICAgICAgIChjID49IDB4ZmRmMCAmJiBjIDw9IDB4ZmZmZCkgfHxcbiAgICAgICAgKGMgPj0gMHgxMDAwMCAmJiBjIDw9IDB4ZWZmZmYpKTtcbn1cbi8qKlxuICogQ29kZSBwb2ludCBlcXVpdmFsZW50IG9mIHJlZ2V4IGBcXHB7V2hpdGVfU3BhY2V9YC5cbiAqIEZyb206IGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9Qcm9wTGlzdC50eHRcbiAqL1xuZnVuY3Rpb24gX2lzV2hpdGVTcGFjZShjKSB7XG4gICAgcmV0dXJuICgoYyA+PSAweDAwMDkgJiYgYyA8PSAweDAwMGQpIHx8XG4gICAgICAgIGMgPT09IDB4MDAyMCB8fFxuICAgICAgICBjID09PSAweDAwODUgfHxcbiAgICAgICAgKGMgPj0gMHgyMDBlICYmIGMgPD0gMHgyMDBmKSB8fFxuICAgICAgICBjID09PSAweDIwMjggfHxcbiAgICAgICAgYyA9PT0gMHgyMDI5KTtcbn1cbi8qKlxuICogQ29kZSBwb2ludCBlcXVpdmFsZW50IG9mIHJlZ2V4IGBcXHB7UGF0dGVybl9TeW50YXh9YC5cbiAqIFNlZSBodHRwczovL3d3dy51bmljb2RlLm9yZy9QdWJsaWMvVUNEL2xhdGVzdC91Y2QvUHJvcExpc3QudHh0XG4gKi9cbmZ1bmN0aW9uIF9pc1BhdHRlcm5TeW50YXgoYykge1xuICAgIHJldHVybiAoKGMgPj0gMHgwMDIxICYmIGMgPD0gMHgwMDIzKSB8fFxuICAgICAgICBjID09PSAweDAwMjQgfHxcbiAgICAgICAgKGMgPj0gMHgwMDI1ICYmIGMgPD0gMHgwMDI3KSB8fFxuICAgICAgICBjID09PSAweDAwMjggfHxcbiAgICAgICAgYyA9PT0gMHgwMDI5IHx8XG4gICAgICAgIGMgPT09IDB4MDAyYSB8fFxuICAgICAgICBjID09PSAweDAwMmIgfHxcbiAgICAgICAgYyA9PT0gMHgwMDJjIHx8XG4gICAgICAgIGMgPT09IDB4MDAyZCB8fFxuICAgICAgICAoYyA+PSAweDAwMmUgJiYgYyA8PSAweDAwMmYpIHx8XG4gICAgICAgIChjID49IDB4MDAzYSAmJiBjIDw9IDB4MDAzYikgfHxcbiAgICAgICAgKGMgPj0gMHgwMDNjICYmIGMgPD0gMHgwMDNlKSB8fFxuICAgICAgICAoYyA+PSAweDAwM2YgJiYgYyA8PSAweDAwNDApIHx8XG4gICAgICAgIGMgPT09IDB4MDA1YiB8fFxuICAgICAgICBjID09PSAweDAwNWMgfHxcbiAgICAgICAgYyA9PT0gMHgwMDVkIHx8XG4gICAgICAgIGMgPT09IDB4MDA1ZSB8fFxuICAgICAgICBjID09PSAweDAwNjAgfHxcbiAgICAgICAgYyA9PT0gMHgwMDdiIHx8XG4gICAgICAgIGMgPT09IDB4MDA3YyB8fFxuICAgICAgICBjID09PSAweDAwN2QgfHxcbiAgICAgICAgYyA9PT0gMHgwMDdlIHx8XG4gICAgICAgIGMgPT09IDB4MDBhMSB8fFxuICAgICAgICAoYyA+PSAweDAwYTIgJiYgYyA8PSAweDAwYTUpIHx8XG4gICAgICAgIGMgPT09IDB4MDBhNiB8fFxuICAgICAgICBjID09PSAweDAwYTcgfHxcbiAgICAgICAgYyA9PT0gMHgwMGE5IHx8XG4gICAgICAgIGMgPT09IDB4MDBhYiB8fFxuICAgICAgICBjID09PSAweDAwYWMgfHxcbiAgICAgICAgYyA9PT0gMHgwMGFlIHx8XG4gICAgICAgIGMgPT09IDB4MDBiMCB8fFxuICAgICAgICBjID09PSAweDAwYjEgfHxcbiAgICAgICAgYyA9PT0gMHgwMGI2IHx8XG4gICAgICAgIGMgPT09IDB4MDBiYiB8fFxuICAgICAgICBjID09PSAweDAwYmYgfHxcbiAgICAgICAgYyA9PT0gMHgwMGQ3IHx8XG4gICAgICAgIGMgPT09IDB4MDBmNyB8fFxuICAgICAgICAoYyA+PSAweDIwMTAgJiYgYyA8PSAweDIwMTUpIHx8XG4gICAgICAgIChjID49IDB4MjAxNiAmJiBjIDw9IDB4MjAxNykgfHxcbiAgICAgICAgYyA9PT0gMHgyMDE4IHx8XG4gICAgICAgIGMgPT09IDB4MjAxOSB8fFxuICAgICAgICBjID09PSAweDIwMWEgfHxcbiAgICAgICAgKGMgPj0gMHgyMDFiICYmIGMgPD0gMHgyMDFjKSB8fFxuICAgICAgICBjID09PSAweDIwMWQgfHxcbiAgICAgICAgYyA9PT0gMHgyMDFlIHx8XG4gICAgICAgIGMgPT09IDB4MjAxZiB8fFxuICAgICAgICAoYyA+PSAweDIwMjAgJiYgYyA8PSAweDIwMjcpIHx8XG4gICAgICAgIChjID49IDB4MjAzMCAmJiBjIDw9IDB4MjAzOCkgfHxcbiAgICAgICAgYyA9PT0gMHgyMDM5IHx8XG4gICAgICAgIGMgPT09IDB4MjAzYSB8fFxuICAgICAgICAoYyA+PSAweDIwM2IgJiYgYyA8PSAweDIwM2UpIHx8XG4gICAgICAgIChjID49IDB4MjA0MSAmJiBjIDw9IDB4MjA0MykgfHxcbiAgICAgICAgYyA9PT0gMHgyMDQ0IHx8XG4gICAgICAgIGMgPT09IDB4MjA0NSB8fFxuICAgICAgICBjID09PSAweDIwNDYgfHxcbiAgICAgICAgKGMgPj0gMHgyMDQ3ICYmIGMgPD0gMHgyMDUxKSB8fFxuICAgICAgICBjID09PSAweDIwNTIgfHxcbiAgICAgICAgYyA9PT0gMHgyMDUzIHx8XG4gICAgICAgIChjID49IDB4MjA1NSAmJiBjIDw9IDB4MjA1ZSkgfHxcbiAgICAgICAgKGMgPj0gMHgyMTkwICYmIGMgPD0gMHgyMTk0KSB8fFxuICAgICAgICAoYyA+PSAweDIxOTUgJiYgYyA8PSAweDIxOTkpIHx8XG4gICAgICAgIChjID49IDB4MjE5YSAmJiBjIDw9IDB4MjE5YikgfHxcbiAgICAgICAgKGMgPj0gMHgyMTljICYmIGMgPD0gMHgyMTlmKSB8fFxuICAgICAgICBjID09PSAweDIxYTAgfHxcbiAgICAgICAgKGMgPj0gMHgyMWExICYmIGMgPD0gMHgyMWEyKSB8fFxuICAgICAgICBjID09PSAweDIxYTMgfHxcbiAgICAgICAgKGMgPj0gMHgyMWE0ICYmIGMgPD0gMHgyMWE1KSB8fFxuICAgICAgICBjID09PSAweDIxYTYgfHxcbiAgICAgICAgKGMgPj0gMHgyMWE3ICYmIGMgPD0gMHgyMWFkKSB8fFxuICAgICAgICBjID09PSAweDIxYWUgfHxcbiAgICAgICAgKGMgPj0gMHgyMWFmICYmIGMgPD0gMHgyMWNkKSB8fFxuICAgICAgICAoYyA+PSAweDIxY2UgJiYgYyA8PSAweDIxY2YpIHx8XG4gICAgICAgIChjID49IDB4MjFkMCAmJiBjIDw9IDB4MjFkMSkgfHxcbiAgICAgICAgYyA9PT0gMHgyMWQyIHx8XG4gICAgICAgIGMgPT09IDB4MjFkMyB8fFxuICAgICAgICBjID09PSAweDIxZDQgfHxcbiAgICAgICAgKGMgPj0gMHgyMWQ1ICYmIGMgPD0gMHgyMWYzKSB8fFxuICAgICAgICAoYyA+PSAweDIxZjQgJiYgYyA8PSAweDIyZmYpIHx8XG4gICAgICAgIChjID49IDB4MjMwMCAmJiBjIDw9IDB4MjMwNykgfHxcbiAgICAgICAgYyA9PT0gMHgyMzA4IHx8XG4gICAgICAgIGMgPT09IDB4MjMwOSB8fFxuICAgICAgICBjID09PSAweDIzMGEgfHxcbiAgICAgICAgYyA9PT0gMHgyMzBiIHx8XG4gICAgICAgIChjID49IDB4MjMwYyAmJiBjIDw9IDB4MjMxZikgfHxcbiAgICAgICAgKGMgPj0gMHgyMzIwICYmIGMgPD0gMHgyMzIxKSB8fFxuICAgICAgICAoYyA+PSAweDIzMjIgJiYgYyA8PSAweDIzMjgpIHx8XG4gICAgICAgIGMgPT09IDB4MjMyOSB8fFxuICAgICAgICBjID09PSAweDIzMmEgfHxcbiAgICAgICAgKGMgPj0gMHgyMzJiICYmIGMgPD0gMHgyMzdiKSB8fFxuICAgICAgICBjID09PSAweDIzN2MgfHxcbiAgICAgICAgKGMgPj0gMHgyMzdkICYmIGMgPD0gMHgyMzlhKSB8fFxuICAgICAgICAoYyA+PSAweDIzOWIgJiYgYyA8PSAweDIzYjMpIHx8XG4gICAgICAgIChjID49IDB4MjNiNCAmJiBjIDw9IDB4MjNkYikgfHxcbiAgICAgICAgKGMgPj0gMHgyM2RjICYmIGMgPD0gMHgyM2UxKSB8fFxuICAgICAgICAoYyA+PSAweDIzZTIgJiYgYyA8PSAweDI0MjYpIHx8XG4gICAgICAgIChjID49IDB4MjQyNyAmJiBjIDw9IDB4MjQzZikgfHxcbiAgICAgICAgKGMgPj0gMHgyNDQwICYmIGMgPD0gMHgyNDRhKSB8fFxuICAgICAgICAoYyA+PSAweDI0NGIgJiYgYyA8PSAweDI0NWYpIHx8XG4gICAgICAgIChjID49IDB4MjUwMCAmJiBjIDw9IDB4MjViNikgfHxcbiAgICAgICAgYyA9PT0gMHgyNWI3IHx8XG4gICAgICAgIChjID49IDB4MjViOCAmJiBjIDw9IDB4MjVjMCkgfHxcbiAgICAgICAgYyA9PT0gMHgyNWMxIHx8XG4gICAgICAgIChjID49IDB4MjVjMiAmJiBjIDw9IDB4MjVmNykgfHxcbiAgICAgICAgKGMgPj0gMHgyNWY4ICYmIGMgPD0gMHgyNWZmKSB8fFxuICAgICAgICAoYyA+PSAweDI2MDAgJiYgYyA8PSAweDI2NmUpIHx8XG4gICAgICAgIGMgPT09IDB4MjY2ZiB8fFxuICAgICAgICAoYyA+PSAweDI2NzAgJiYgYyA8PSAweDI3NjcpIHx8XG4gICAgICAgIGMgPT09IDB4Mjc2OCB8fFxuICAgICAgICBjID09PSAweDI3NjkgfHxcbiAgICAgICAgYyA9PT0gMHgyNzZhIHx8XG4gICAgICAgIGMgPT09IDB4Mjc2YiB8fFxuICAgICAgICBjID09PSAweDI3NmMgfHxcbiAgICAgICAgYyA9PT0gMHgyNzZkIHx8XG4gICAgICAgIGMgPT09IDB4Mjc2ZSB8fFxuICAgICAgICBjID09PSAweDI3NmYgfHxcbiAgICAgICAgYyA9PT0gMHgyNzcwIHx8XG4gICAgICAgIGMgPT09IDB4Mjc3MSB8fFxuICAgICAgICBjID09PSAweDI3NzIgfHxcbiAgICAgICAgYyA9PT0gMHgyNzczIHx8XG4gICAgICAgIGMgPT09IDB4Mjc3NCB8fFxuICAgICAgICBjID09PSAweDI3NzUgfHxcbiAgICAgICAgKGMgPj0gMHgyNzk0ICYmIGMgPD0gMHgyN2JmKSB8fFxuICAgICAgICAoYyA+PSAweDI3YzAgJiYgYyA8PSAweDI3YzQpIHx8XG4gICAgICAgIGMgPT09IDB4MjdjNSB8fFxuICAgICAgICBjID09PSAweDI3YzYgfHxcbiAgICAgICAgKGMgPj0gMHgyN2M3ICYmIGMgPD0gMHgyN2U1KSB8fFxuICAgICAgICBjID09PSAweDI3ZTYgfHxcbiAgICAgICAgYyA9PT0gMHgyN2U3IHx8XG4gICAgICAgIGMgPT09IDB4MjdlOCB8fFxuICAgICAgICBjID09PSAweDI3ZTkgfHxcbiAgICAgICAgYyA9PT0gMHgyN2VhIHx8XG4gICAgICAgIGMgPT09IDB4MjdlYiB8fFxuICAgICAgICBjID09PSAweDI3ZWMgfHxcbiAgICAgICAgYyA9PT0gMHgyN2VkIHx8XG4gICAgICAgIGMgPT09IDB4MjdlZSB8fFxuICAgICAgICBjID09PSAweDI3ZWYgfHxcbiAgICAgICAgKGMgPj0gMHgyN2YwICYmIGMgPD0gMHgyN2ZmKSB8fFxuICAgICAgICAoYyA+PSAweDI4MDAgJiYgYyA8PSAweDI4ZmYpIHx8XG4gICAgICAgIChjID49IDB4MjkwMCAmJiBjIDw9IDB4Mjk4MikgfHxcbiAgICAgICAgYyA9PT0gMHgyOTgzIHx8XG4gICAgICAgIGMgPT09IDB4Mjk4NCB8fFxuICAgICAgICBjID09PSAweDI5ODUgfHxcbiAgICAgICAgYyA9PT0gMHgyOTg2IHx8XG4gICAgICAgIGMgPT09IDB4Mjk4NyB8fFxuICAgICAgICBjID09PSAweDI5ODggfHxcbiAgICAgICAgYyA9PT0gMHgyOTg5IHx8XG4gICAgICAgIGMgPT09IDB4Mjk4YSB8fFxuICAgICAgICBjID09PSAweDI5OGIgfHxcbiAgICAgICAgYyA9PT0gMHgyOThjIHx8XG4gICAgICAgIGMgPT09IDB4Mjk4ZCB8fFxuICAgICAgICBjID09PSAweDI5OGUgfHxcbiAgICAgICAgYyA9PT0gMHgyOThmIHx8XG4gICAgICAgIGMgPT09IDB4Mjk5MCB8fFxuICAgICAgICBjID09PSAweDI5OTEgfHxcbiAgICAgICAgYyA9PT0gMHgyOTkyIHx8XG4gICAgICAgIGMgPT09IDB4Mjk5MyB8fFxuICAgICAgICBjID09PSAweDI5OTQgfHxcbiAgICAgICAgYyA9PT0gMHgyOTk1IHx8XG4gICAgICAgIGMgPT09IDB4Mjk5NiB8fFxuICAgICAgICBjID09PSAweDI5OTcgfHxcbiAgICAgICAgYyA9PT0gMHgyOTk4IHx8XG4gICAgICAgIChjID49IDB4Mjk5OSAmJiBjIDw9IDB4MjlkNykgfHxcbiAgICAgICAgYyA9PT0gMHgyOWQ4IHx8XG4gICAgICAgIGMgPT09IDB4MjlkOSB8fFxuICAgICAgICBjID09PSAweDI5ZGEgfHxcbiAgICAgICAgYyA9PT0gMHgyOWRiIHx8XG4gICAgICAgIChjID49IDB4MjlkYyAmJiBjIDw9IDB4MjlmYikgfHxcbiAgICAgICAgYyA9PT0gMHgyOWZjIHx8XG4gICAgICAgIGMgPT09IDB4MjlmZCB8fFxuICAgICAgICAoYyA+PSAweDI5ZmUgJiYgYyA8PSAweDJhZmYpIHx8XG4gICAgICAgIChjID49IDB4MmIwMCAmJiBjIDw9IDB4MmIyZikgfHxcbiAgICAgICAgKGMgPj0gMHgyYjMwICYmIGMgPD0gMHgyYjQ0KSB8fFxuICAgICAgICAoYyA+PSAweDJiNDUgJiYgYyA8PSAweDJiNDYpIHx8XG4gICAgICAgIChjID49IDB4MmI0NyAmJiBjIDw9IDB4MmI0YykgfHxcbiAgICAgICAgKGMgPj0gMHgyYjRkICYmIGMgPD0gMHgyYjczKSB8fFxuICAgICAgICAoYyA+PSAweDJiNzQgJiYgYyA8PSAweDJiNzUpIHx8XG4gICAgICAgIChjID49IDB4MmI3NiAmJiBjIDw9IDB4MmI5NSkgfHxcbiAgICAgICAgYyA9PT0gMHgyYjk2IHx8XG4gICAgICAgIChjID49IDB4MmI5NyAmJiBjIDw9IDB4MmJmZikgfHxcbiAgICAgICAgKGMgPj0gMHgyZTAwICYmIGMgPD0gMHgyZTAxKSB8fFxuICAgICAgICBjID09PSAweDJlMDIgfHxcbiAgICAgICAgYyA9PT0gMHgyZTAzIHx8XG4gICAgICAgIGMgPT09IDB4MmUwNCB8fFxuICAgICAgICBjID09PSAweDJlMDUgfHxcbiAgICAgICAgKGMgPj0gMHgyZTA2ICYmIGMgPD0gMHgyZTA4KSB8fFxuICAgICAgICBjID09PSAweDJlMDkgfHxcbiAgICAgICAgYyA9PT0gMHgyZTBhIHx8XG4gICAgICAgIGMgPT09IDB4MmUwYiB8fFxuICAgICAgICBjID09PSAweDJlMGMgfHxcbiAgICAgICAgYyA9PT0gMHgyZTBkIHx8XG4gICAgICAgIChjID49IDB4MmUwZSAmJiBjIDw9IDB4MmUxNikgfHxcbiAgICAgICAgYyA9PT0gMHgyZTE3IHx8XG4gICAgICAgIChjID49IDB4MmUxOCAmJiBjIDw9IDB4MmUxOSkgfHxcbiAgICAgICAgYyA9PT0gMHgyZTFhIHx8XG4gICAgICAgIGMgPT09IDB4MmUxYiB8fFxuICAgICAgICBjID09PSAweDJlMWMgfHxcbiAgICAgICAgYyA9PT0gMHgyZTFkIHx8XG4gICAgICAgIChjID49IDB4MmUxZSAmJiBjIDw9IDB4MmUxZikgfHxcbiAgICAgICAgYyA9PT0gMHgyZTIwIHx8XG4gICAgICAgIGMgPT09IDB4MmUyMSB8fFxuICAgICAgICBjID09PSAweDJlMjIgfHxcbiAgICAgICAgYyA9PT0gMHgyZTIzIHx8XG4gICAgICAgIGMgPT09IDB4MmUyNCB8fFxuICAgICAgICBjID09PSAweDJlMjUgfHxcbiAgICAgICAgYyA9PT0gMHgyZTI2IHx8XG4gICAgICAgIGMgPT09IDB4MmUyNyB8fFxuICAgICAgICBjID09PSAweDJlMjggfHxcbiAgICAgICAgYyA9PT0gMHgyZTI5IHx8XG4gICAgICAgIChjID49IDB4MmUyYSAmJiBjIDw9IDB4MmUyZSkgfHxcbiAgICAgICAgYyA9PT0gMHgyZTJmIHx8XG4gICAgICAgIChjID49IDB4MmUzMCAmJiBjIDw9IDB4MmUzOSkgfHxcbiAgICAgICAgKGMgPj0gMHgyZTNhICYmIGMgPD0gMHgyZTNiKSB8fFxuICAgICAgICAoYyA+PSAweDJlM2MgJiYgYyA8PSAweDJlM2YpIHx8XG4gICAgICAgIGMgPT09IDB4MmU0MCB8fFxuICAgICAgICBjID09PSAweDJlNDEgfHxcbiAgICAgICAgYyA9PT0gMHgyZTQyIHx8XG4gICAgICAgIChjID49IDB4MmU0MyAmJiBjIDw9IDB4MmU0ZikgfHxcbiAgICAgICAgKGMgPj0gMHgyZTUwICYmIGMgPD0gMHgyZTUxKSB8fFxuICAgICAgICBjID09PSAweDJlNTIgfHxcbiAgICAgICAgKGMgPj0gMHgyZTUzICYmIGMgPD0gMHgyZTdmKSB8fFxuICAgICAgICAoYyA+PSAweDMwMDEgJiYgYyA8PSAweDMwMDMpIHx8XG4gICAgICAgIGMgPT09IDB4MzAwOCB8fFxuICAgICAgICBjID09PSAweDMwMDkgfHxcbiAgICAgICAgYyA9PT0gMHgzMDBhIHx8XG4gICAgICAgIGMgPT09IDB4MzAwYiB8fFxuICAgICAgICBjID09PSAweDMwMGMgfHxcbiAgICAgICAgYyA9PT0gMHgzMDBkIHx8XG4gICAgICAgIGMgPT09IDB4MzAwZSB8fFxuICAgICAgICBjID09PSAweDMwMGYgfHxcbiAgICAgICAgYyA9PT0gMHgzMDEwIHx8XG4gICAgICAgIGMgPT09IDB4MzAxMSB8fFxuICAgICAgICAoYyA+PSAweDMwMTIgJiYgYyA8PSAweDMwMTMpIHx8XG4gICAgICAgIGMgPT09IDB4MzAxNCB8fFxuICAgICAgICBjID09PSAweDMwMTUgfHxcbiAgICAgICAgYyA9PT0gMHgzMDE2IHx8XG4gICAgICAgIGMgPT09IDB4MzAxNyB8fFxuICAgICAgICBjID09PSAweDMwMTggfHxcbiAgICAgICAgYyA9PT0gMHgzMDE5IHx8XG4gICAgICAgIGMgPT09IDB4MzAxYSB8fFxuICAgICAgICBjID09PSAweDMwMWIgfHxcbiAgICAgICAgYyA9PT0gMHgzMDFjIHx8XG4gICAgICAgIGMgPT09IDB4MzAxZCB8fFxuICAgICAgICAoYyA+PSAweDMwMWUgJiYgYyA8PSAweDMwMWYpIHx8XG4gICAgICAgIGMgPT09IDB4MzAyMCB8fFxuICAgICAgICBjID09PSAweDMwMzAgfHxcbiAgICAgICAgYyA9PT0gMHhmZDNlIHx8XG4gICAgICAgIGMgPT09IDB4ZmQzZiB8fFxuICAgICAgICAoYyA+PSAweGZlNDUgJiYgYyA8PSAweGZlNDYpKTtcbn1cbiIsIi8vIEBnZW5lcmF0ZWQgZnJvbSByZWdleC1nZW4udHNcbmV4cG9ydCB2YXIgU1BBQ0VfU0VQQVJBVE9SX1JFR0VYID0gL1sgXFx4QTBcXHUxNjgwXFx1MjAwMC1cXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXS87XG5leHBvcnQgdmFyIFdISVRFX1NQQUNFX1JFR0VYID0gL1tcXHQtXFxyIFxceDg1XFx1MjAwRVxcdTIwMEZcXHUyMDI4XFx1MjAyOV0vO1xuIiwiZXhwb3J0IHZhciBUWVBFO1xuKGZ1bmN0aW9uIChUWVBFKSB7XG4gICAgLyoqXG4gICAgICogUmF3IHRleHRcbiAgICAgKi9cbiAgICBUWVBFW1RZUEVbXCJsaXRlcmFsXCJdID0gMF0gPSBcImxpdGVyYWxcIjtcbiAgICAvKipcbiAgICAgKiBWYXJpYWJsZSB3L28gYW55IGZvcm1hdCwgZS5nIGB2YXJgIGluIGB0aGlzIGlzIGEge3Zhcn1gXG4gICAgICovXG4gICAgVFlQRVtUWVBFW1wiYXJndW1lbnRcIl0gPSAxXSA9IFwiYXJndW1lbnRcIjtcbiAgICAvKipcbiAgICAgKiBWYXJpYWJsZSB3LyBudW1iZXIgZm9ybWF0XG4gICAgICovXG4gICAgVFlQRVtUWVBFW1wibnVtYmVyXCJdID0gMl0gPSBcIm51bWJlclwiO1xuICAgIC8qKlxuICAgICAqIFZhcmlhYmxlIHcvIGRhdGUgZm9ybWF0XG4gICAgICovXG4gICAgVFlQRVtUWVBFW1wiZGF0ZVwiXSA9IDNdID0gXCJkYXRlXCI7XG4gICAgLyoqXG4gICAgICogVmFyaWFibGUgdy8gdGltZSBmb3JtYXRcbiAgICAgKi9cbiAgICBUWVBFW1RZUEVbXCJ0aW1lXCJdID0gNF0gPSBcInRpbWVcIjtcbiAgICAvKipcbiAgICAgKiBWYXJpYWJsZSB3LyBzZWxlY3QgZm9ybWF0XG4gICAgICovXG4gICAgVFlQRVtUWVBFW1wic2VsZWN0XCJdID0gNV0gPSBcInNlbGVjdFwiO1xuICAgIC8qKlxuICAgICAqIFZhcmlhYmxlIHcvIHBsdXJhbCBmb3JtYXRcbiAgICAgKi9cbiAgICBUWVBFW1RZUEVbXCJwbHVyYWxcIl0gPSA2XSA9IFwicGx1cmFsXCI7XG4gICAgLyoqXG4gICAgICogT25seSBwb3NzaWJsZSB3aXRoaW4gcGx1cmFsIGFyZ3VtZW50LlxuICAgICAqIFRoaXMgaXMgdGhlIGAjYCBzeW1ib2wgdGhhdCB3aWxsIGJlIHN1YnN0aXR1dGVkIHdpdGggdGhlIGNvdW50LlxuICAgICAqL1xuICAgIFRZUEVbVFlQRVtcInBvdW5kXCJdID0gN10gPSBcInBvdW5kXCI7XG4gICAgLyoqXG4gICAgICogWE1MLWxpa2UgdGFnXG4gICAgICovXG4gICAgVFlQRVtUWVBFW1widGFnXCJdID0gOF0gPSBcInRhZ1wiO1xufSkoVFlQRSB8fCAoVFlQRSA9IHt9KSk7XG5leHBvcnQgdmFyIFNLRUxFVE9OX1RZUEU7XG4oZnVuY3Rpb24gKFNLRUxFVE9OX1RZUEUpIHtcbiAgICBTS0VMRVRPTl9UWVBFW1NLRUxFVE9OX1RZUEVbXCJudW1iZXJcIl0gPSAwXSA9IFwibnVtYmVyXCI7XG4gICAgU0tFTEVUT05fVFlQRVtTS0VMRVRPTl9UWVBFW1wiZGF0ZVRpbWVcIl0gPSAxXSA9IFwiZGF0ZVRpbWVcIjtcbn0pKFNLRUxFVE9OX1RZUEUgfHwgKFNLRUxFVE9OX1RZUEUgPSB7fSkpO1xuLyoqXG4gKiBUeXBlIEd1YXJkc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMaXRlcmFsRWxlbWVudChlbCkge1xuICAgIHJldHVybiBlbC50eXBlID09PSBUWVBFLmxpdGVyYWw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcmd1bWVudEVsZW1lbnQoZWwpIHtcbiAgICByZXR1cm4gZWwudHlwZSA9PT0gVFlQRS5hcmd1bWVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlckVsZW1lbnQoZWwpIHtcbiAgICByZXR1cm4gZWwudHlwZSA9PT0gVFlQRS5udW1iZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlRWxlbWVudChlbCkge1xuICAgIHJldHVybiBlbC50eXBlID09PSBUWVBFLmRhdGU7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lRWxlbWVudChlbCkge1xuICAgIHJldHVybiBlbC50eXBlID09PSBUWVBFLnRpbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTZWxlY3RFbGVtZW50KGVsKSB7XG4gICAgcmV0dXJuIGVsLnR5cGUgPT09IFRZUEUuc2VsZWN0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUGx1cmFsRWxlbWVudChlbCkge1xuICAgIHJldHVybiBlbC50eXBlID09PSBUWVBFLnBsdXJhbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1BvdW5kRWxlbWVudChlbCkge1xuICAgIHJldHVybiBlbC50eXBlID09PSBUWVBFLnBvdW5kO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVGFnRWxlbWVudChlbCkge1xuICAgIHJldHVybiBlbC50eXBlID09PSBUWVBFLnRhZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlclNrZWxldG9uKGVsKSB7XG4gICAgcmV0dXJuICEhKGVsICYmIHR5cGVvZiBlbCA9PT0gJ29iamVjdCcgJiYgZWwudHlwZSA9PT0gU0tFTEVUT05fVFlQRS5udW1iZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZVRpbWVTa2VsZXRvbihlbCkge1xuICAgIHJldHVybiAhIShlbCAmJiB0eXBlb2YgZWwgPT09ICdvYmplY3QnICYmIGVsLnR5cGUgPT09IFNLRUxFVE9OX1RZUEUuZGF0ZVRpbWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpdGVyYWxFbGVtZW50KHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVFlQRS5saXRlcmFsLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOdW1iZXJFbGVtZW50KHZhbHVlLCBzdHlsZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRZUEUubnVtYmVyLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICB9O1xufVxuIiwiLyoqXG4gKiBodHRwczovL3VuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIENyZWRpdDogaHR0cHM6Ly9naXRodWIuY29tL2NhcmlkeS9pbnRsLWRhdGV0aW1lZm9ybWF0LXBhdHRlcm4vYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAqIHdpdGggc29tZSB0d2Vha3NcbiAqL1xudmFyIERBVEVfVElNRV9SRUdFWCA9IC8oPzpbRWVjXXsxLDZ9fEd7MSw1fXxbUXFdezEsNX18KD86W3lZdXJdK3xVezEsNX0pfFtNTF17MSw1fXxkezEsMn18RHsxLDN9fEZ7MX18W2FiQl17MSw1fXxbaGtIS117MSwyfXx3ezEsMn18V3sxfXxtezEsMn18c3sxLDJ9fFt6Wk92VnhYXXsxLDR9KSg/PShbXiddKidbXiddKicpKlteJ10qJCkvZztcbi8qKlxuICogUGFyc2UgRGF0ZSB0aW1lIHNrZWxldG9uIGludG8gSW50bC5EYXRlVGltZUZvcm1hdE9wdGlvbnNcbiAqIFJlZjogaHR0cHM6Ly91bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gc2tlbGV0b24gc2tlbGV0b24gc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGVUaW1lU2tlbGV0b24oc2tlbGV0b24pIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgc2tlbGV0b24ucmVwbGFjZShEQVRFX1RJTUVfUkVHRVgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICB2YXIgbGVuID0gbWF0Y2gubGVuZ3RoO1xuICAgICAgICBzd2l0Y2ggKG1hdGNoWzBdKSB7XG4gICAgICAgICAgICAvLyBFcmFcbiAgICAgICAgICAgIGNhc2UgJ0cnOlxuICAgICAgICAgICAgICAgIHJlc3VsdC5lcmEgPSBsZW4gPT09IDQgPyAnbG9uZycgOiBsZW4gPT09IDUgPyAnbmFycm93JyA6ICdzaG9ydCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBZZWFyXG4gICAgICAgICAgICBjYXNlICd5JzpcbiAgICAgICAgICAgICAgICByZXN1bHQueWVhciA9IGxlbiA9PT0gMiA/ICcyLWRpZ2l0JyA6ICdudW1lcmljJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1knOlxuICAgICAgICAgICAgY2FzZSAndSc6XG4gICAgICAgICAgICBjYXNlICdVJzpcbiAgICAgICAgICAgIGNhc2UgJ3InOlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdgWS91L1UvcmAgKHllYXIpIHBhdHRlcm5zIGFyZSBub3Qgc3VwcG9ydGVkLCB1c2UgYHlgIGluc3RlYWQnKTtcbiAgICAgICAgICAgIC8vIFF1YXJ0ZXJcbiAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2BxL1FgIChxdWFydGVyKSBwYXR0ZXJucyBhcmUgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgLy8gTW9udGhcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1vbnRoID0gWydudW1lcmljJywgJzItZGlnaXQnLCAnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnXVtsZW4gLSAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIFdlZWtcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgY2FzZSAnVyc6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2B3L1dgICh3ZWVrKSBwYXR0ZXJucyBhcmUgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0LmRheSA9IFsnbnVtZXJpYycsICcyLWRpZ2l0J11bbGVuIC0gMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICAgIGNhc2UgJ0YnOlxuICAgICAgICAgICAgY2FzZSAnZyc6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2BEL0YvZ2AgKGRheSkgcGF0dGVybnMgYXJlIG5vdCBzdXBwb3J0ZWQsIHVzZSBgZGAgaW5zdGVhZCcpO1xuICAgICAgICAgICAgLy8gV2Vla2RheVxuICAgICAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0LndlZWtkYXkgPSBsZW4gPT09IDQgPyAnc2hvcnQnIDogbGVuID09PSA1ID8gJ25hcnJvdycgOiAnc2hvcnQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZSc6XG4gICAgICAgICAgICAgICAgaWYgKGxlbiA8IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2BlLi5lZWVgICh3ZWVrZGF5KSBwYXR0ZXJucyBhcmUgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQud2Vla2RheSA9IFsnc2hvcnQnLCAnbG9uZycsICduYXJyb3cnLCAnc2hvcnQnXVtsZW4gLSA0XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIGlmIChsZW4gPCA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdgYy4uY2NjYCAod2Vla2RheSkgcGF0dGVybnMgYXJlIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LndlZWtkYXkgPSBbJ3Nob3J0JywgJ2xvbmcnLCAnbmFycm93JywgJ3Nob3J0J11bbGVuIC0gNF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBQZXJpb2RcbiAgICAgICAgICAgIGNhc2UgJ2EnOiAvLyBBTSwgUE1cbiAgICAgICAgICAgICAgICByZXN1bHQuaG91cjEyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2InOiAvLyBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0XG4gICAgICAgICAgICBjYXNlICdCJzogLy8gZmxleGlibGUgZGF5IHBlcmlvZHNcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYGIvQmAgKHBlcmlvZCkgcGF0dGVybnMgYXJlIG5vdCBzdXBwb3J0ZWQsIHVzZSBgYWAgaW5zdGVhZCcpO1xuICAgICAgICAgICAgLy8gSG91clxuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0LmhvdXJDeWNsZSA9ICdoMTInO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ob3VyID0gWydudW1lcmljJywgJzItZGlnaXQnXVtsZW4gLSAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgICAgIHJlc3VsdC5ob3VyQ3ljbGUgPSAnaDIzJztcbiAgICAgICAgICAgICAgICByZXN1bHQuaG91ciA9IFsnbnVtZXJpYycsICcyLWRpZ2l0J11bbGVuIC0gMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdLJzpcbiAgICAgICAgICAgICAgICByZXN1bHQuaG91ckN5Y2xlID0gJ2gxMSc7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmhvdXIgPSBbJ251bWVyaWMnLCAnMi1kaWdpdCddW2xlbiAtIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnayc6XG4gICAgICAgICAgICAgICAgcmVzdWx0LmhvdXJDeWNsZSA9ICdoMjQnO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ob3VyID0gWydudW1lcmljJywgJzItZGlnaXQnXVtsZW4gLSAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2onOlxuICAgICAgICAgICAgY2FzZSAnSic6XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYGovSi9DYCAoaG91cikgcGF0dGVybnMgYXJlIG5vdCBzdXBwb3J0ZWQsIHVzZSBgaC9IL0sva2AgaW5zdGVhZCcpO1xuICAgICAgICAgICAgLy8gTWludXRlXG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICByZXN1bHQubWludXRlID0gWydudW1lcmljJywgJzItZGlnaXQnXVtsZW4gLSAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIFNlY29uZFxuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0LnNlY29uZCA9IFsnbnVtZXJpYycsICcyLWRpZ2l0J11bbGVuIC0gMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdgUy9BYCAoc2Vjb25kKSBwYXR0ZXJucyBhcmUgbm90IHN1cHBvcnRlZCwgdXNlIGBzYCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICAvLyBab25lXG4gICAgICAgICAgICBjYXNlICd6JzogLy8gMS4uMywgNDogc3BlY2lmaWMgbm9uLWxvY2F0aW9uIGZvcm1hdFxuICAgICAgICAgICAgICAgIHJlc3VsdC50aW1lWm9uZU5hbWUgPSBsZW4gPCA0ID8gJ3Nob3J0JyA6ICdsb25nJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1onOiAvLyAxLi4zLCA0LCA1OiBUaGUgSVNPODYwMSB2YXJpb3MgZm9ybWF0c1xuICAgICAgICAgICAgY2FzZSAnTyc6IC8vIDEsIDQ6IG1pbGlzZWNvbmRzIGluIGRheSBzaG9ydCwgbG9uZ1xuICAgICAgICAgICAgY2FzZSAndic6IC8vIDEsIDQ6IGdlbmVyaWMgbm9uLWxvY2F0aW9uIGZvcm1hdFxuICAgICAgICAgICAgY2FzZSAnVic6IC8vIDEsIDIsIDMsIDQ6IHRpbWUgem9uZSBJRCBvciBjaXR5XG4gICAgICAgICAgICBjYXNlICdYJzogLy8gMSwgMiwgMywgNDogVGhlIElTTzg2MDEgdmFyaW9zIGZvcm1hdHNcbiAgICAgICAgICAgIGNhc2UgJ3gnOiAvLyAxLCAyLCAzLCA0OiBUaGUgSVNPODYwMSB2YXJpb3MgZm9ybWF0c1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdgWi9PL3YvVi9YL3hgICh0aW1lWm9uZSkgcGF0dGVybnMgYXJlIG5vdCBzdXBwb3J0ZWQsIHVzZSBgemAgaW5zdGVhZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9kYXRlLXRpbWUnO1xuZXhwb3J0ICogZnJvbSAnLi9udW1iZXInO1xuIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFdISVRFX1NQQUNFX1JFR0VYIH0gZnJvbSAnLi9yZWdleC5nZW5lcmF0ZWQnO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTnVtYmVyU2tlbGV0b25Gcm9tU3RyaW5nKHNrZWxldG9uKSB7XG4gICAgaWYgKHNrZWxldG9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ051bWJlciBza2VsZXRvbiBjYW5ub3QgYmUgZW1wdHknKTtcbiAgICB9XG4gICAgLy8gUGFyc2UgdGhlIHNrZWxldG9uXG4gICAgdmFyIHN0cmluZ1Rva2VucyA9IHNrZWxldG9uXG4gICAgICAgIC5zcGxpdChXSElURV9TUEFDRV9SRUdFWClcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5sZW5ndGggPiAwOyB9KTtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwLCBzdHJpbmdUb2tlbnNfMSA9IHN0cmluZ1Rva2VuczsgX2kgPCBzdHJpbmdUb2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHN0cmluZ1Rva2VuID0gc3RyaW5nVG9rZW5zXzFbX2ldO1xuICAgICAgICB2YXIgc3RlbUFuZE9wdGlvbnMgPSBzdHJpbmdUb2tlbi5zcGxpdCgnLycpO1xuICAgICAgICBpZiAoc3RlbUFuZE9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbnVtYmVyIHNrZWxldG9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0ZW0gPSBzdGVtQW5kT3B0aW9uc1swXSwgb3B0aW9ucyA9IHN0ZW1BbmRPcHRpb25zLnNsaWNlKDEpO1xuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIG9wdGlvbnNfMSA9IG9wdGlvbnM7IF9hIDwgb3B0aW9uc18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNfMVtfYV07XG4gICAgICAgICAgICBpZiAob3B0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBudW1iZXIgc2tlbGV0b24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHN0ZW06IHN0ZW0sIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbnM7XG59XG5mdW5jdGlvbiBpY3VVbml0VG9FY21hKHVuaXQpIHtcbiAgICByZXR1cm4gdW5pdC5yZXBsYWNlKC9eKC4qPyktLywgJycpO1xufVxudmFyIEZSQUNUSU9OX1BSRUNJU0lPTl9SRUdFWCA9IC9eXFwuKD86KDArKShcXCopP3woIyspfCgwKykoIyspKSQvZztcbnZhciBTSUdOSUZJQ0FOVF9QUkVDSVNJT05fUkVHRVggPSAvXihAKyk/KFxcK3wjKyk/JC9nO1xudmFyIElOVEVHRVJfV0lEVEhfUkVHRVggPSAvKFxcKikoMCspfCgjKykoMCspfCgwKykvZztcbnZhciBDT05DSVNFX0lOVEVHRVJfV0lEVEhfUkVHRVggPSAvXigwKykkLztcbmZ1bmN0aW9uIHBhcnNlU2lnbmlmaWNhbnRQcmVjaXNpb24oc3RyKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHN0ci5yZXBsYWNlKFNJR05JRklDQU5UX1BSRUNJU0lPTl9SRUdFWCwgZnVuY3Rpb24gKF8sIGcxLCBnMikge1xuICAgICAgICAvLyBAQEAgY2FzZVxuICAgICAgICBpZiAodHlwZW9mIGcyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmVzdWx0Lm1pbmltdW1TaWduaWZpY2FudERpZ2l0cyA9IGcxLmxlbmd0aDtcbiAgICAgICAgICAgIHJlc3VsdC5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPSBnMS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQEBAKyBjYXNlXG4gICAgICAgIGVsc2UgaWYgKGcyID09PSAnKycpIHtcbiAgICAgICAgICAgIHJlc3VsdC5taW5pbXVtU2lnbmlmaWNhbnREaWdpdHMgPSBnMS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLiMjIyBjYXNlXG4gICAgICAgIGVsc2UgaWYgKGcxWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgIHJlc3VsdC5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPSBnMS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLkBAIyMgb3IgLkBAQCBjYXNlXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0Lm1pbmltdW1TaWduaWZpY2FudERpZ2l0cyA9IGcxLmxlbmd0aDtcbiAgICAgICAgICAgIHJlc3VsdC5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPVxuICAgICAgICAgICAgICAgIGcxLmxlbmd0aCArICh0eXBlb2YgZzIgPT09ICdzdHJpbmcnID8gZzIubGVuZ3RoIDogMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBwYXJzZVNpZ24oc3RyKSB7XG4gICAgc3dpdGNoIChzdHIpIHtcbiAgICAgICAgY2FzZSAnc2lnbi1hdXRvJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2lnbkRpc3BsYXk6ICdhdXRvJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ3NpZ24tYWNjb3VudGluZyc6XG4gICAgICAgIGNhc2UgJygpJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVuY3lTaWduOiAnYWNjb3VudGluZycsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdzaWduLWFsd2F5cyc6XG4gICAgICAgIGNhc2UgJyshJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2lnbkRpc3BsYXk6ICdhbHdheXMnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnc2lnbi1hY2NvdW50aW5nLWFsd2F5cyc6XG4gICAgICAgIGNhc2UgJygpISc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNpZ25EaXNwbGF5OiAnYWx3YXlzJyxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeVNpZ246ICdhY2NvdW50aW5nJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ3NpZ24tZXhjZXB0LXplcm8nOlxuICAgICAgICBjYXNlICcrPyc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNpZ25EaXNwbGF5OiAnZXhjZXB0WmVybycsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdzaWduLWFjY291bnRpbmctZXhjZXB0LXplcm8nOlxuICAgICAgICBjYXNlICcoKT8nOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaWduRGlzcGxheTogJ2V4Y2VwdFplcm8nLFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5U2lnbjogJ2FjY291bnRpbmcnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnc2lnbi1uZXZlcic6XG4gICAgICAgIGNhc2UgJytfJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2lnbkRpc3BsYXk6ICduZXZlcicsXG4gICAgICAgICAgICB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhcnNlQ29uY2lzZVNjaWVudGlmaWNBbmRFbmdpbmVlcmluZ1N0ZW0oc3RlbSkge1xuICAgIC8vIEVuZ2luZWVyaW5nXG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoc3RlbVswXSA9PT0gJ0UnICYmIHN0ZW1bMV0gPT09ICdFJykge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICBub3RhdGlvbjogJ2VuZ2luZWVyaW5nJyxcbiAgICAgICAgfTtcbiAgICAgICAgc3RlbSA9IHN0ZW0uc2xpY2UoMik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0ZW1bMF0gPT09ICdFJykge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICBub3RhdGlvbjogJ3NjaWVudGlmaWMnLFxuICAgICAgICB9O1xuICAgICAgICBzdGVtID0gc3RlbS5zbGljZSgxKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgc2lnbkRpc3BsYXkgPSBzdGVtLnNsaWNlKDAsIDIpO1xuICAgICAgICBpZiAoc2lnbkRpc3BsYXkgPT09ICcrIScpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zaWduRGlzcGxheSA9ICdhbHdheXMnO1xuICAgICAgICAgICAgc3RlbSA9IHN0ZW0uc2xpY2UoMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2lnbkRpc3BsYXkgPT09ICcrPycpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zaWduRGlzcGxheSA9ICdleGNlcHRaZXJvJztcbiAgICAgICAgICAgIHN0ZW0gPSBzdGVtLnNsaWNlKDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQ09OQ0lTRV9JTlRFR0VSX1dJRFRIX1JFR0VYLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIGNvbmNpc2UgZW5nL3NjaWVudGlmaWMgbm90YXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubWluaW11bUludGVnZXJEaWdpdHMgPSBzdGVtLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHBhcnNlTm90YXRpb25PcHRpb25zKG9wdCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgc2lnbk9wdHMgPSBwYXJzZVNpZ24ob3B0KTtcbiAgICBpZiAoc2lnbk9wdHMpIHtcbiAgICAgICAgcmV0dXJuIHNpZ25PcHRzO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdW5pY29kZS1vcmcvaWN1L2Jsb2IvbWFzdGVyL2RvY3MvdXNlcmd1aWRlL2Zvcm1hdF9wYXJzZS9udW1iZXJzL3NrZWxldG9ucy5tZCNza2VsZXRvbi1zdGVtcy1hbmQtb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1iZXJTa2VsZXRvbih0b2tlbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBzd2l0Y2ggKHRva2VuLnN0ZW0pIHtcbiAgICAgICAgICAgIGNhc2UgJ3BlcmNlbnQnOlxuICAgICAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0eWxlID0gJ3BlcmNlbnQnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgY2FzZSAnJXgxMDAnOlxuICAgICAgICAgICAgICAgIHJlc3VsdC5zdHlsZSA9ICdwZXJjZW50JztcbiAgICAgICAgICAgICAgICByZXN1bHQuc2NhbGUgPSAxMDA7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0eWxlID0gJ2N1cnJlbmN5JztcbiAgICAgICAgICAgICAgICByZXN1bHQuY3VycmVuY3kgPSB0b2tlbi5vcHRpb25zWzBdO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgY2FzZSAnZ3JvdXAtb2ZmJzpcbiAgICAgICAgICAgIGNhc2UgJyxfJzpcbiAgICAgICAgICAgICAgICByZXN1bHQudXNlR3JvdXBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGNhc2UgJ3ByZWNpc2lvbi1pbnRlZ2VyJzpcbiAgICAgICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgICAgICAgIHJlc3VsdC5tYXhpbXVtRnJhY3Rpb25EaWdpdHMgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgY2FzZSAnbWVhc3VyZS11bml0JzpcbiAgICAgICAgICAgIGNhc2UgJ3VuaXQnOlxuICAgICAgICAgICAgICAgIHJlc3VsdC5zdHlsZSA9ICd1bml0JztcbiAgICAgICAgICAgICAgICByZXN1bHQudW5pdCA9IGljdVVuaXRUb0VjbWEodG9rZW4ub3B0aW9uc1swXSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjYXNlICdjb21wYWN0LXNob3J0JzpcbiAgICAgICAgICAgIGNhc2UgJ0snOlxuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3RhdGlvbiA9ICdjb21wYWN0JztcbiAgICAgICAgICAgICAgICByZXN1bHQuY29tcGFjdERpc3BsYXkgPSAnc2hvcnQnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgY2FzZSAnY29tcGFjdC1sb25nJzpcbiAgICAgICAgICAgIGNhc2UgJ0tLJzpcbiAgICAgICAgICAgICAgICByZXN1bHQubm90YXRpb24gPSAnY29tcGFjdCc7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbXBhY3REaXNwbGF5ID0gJ2xvbmcnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgY2FzZSAnc2NpZW50aWZpYyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3VsdCksIHsgbm90YXRpb246ICdzY2llbnRpZmljJyB9KSwgdG9rZW4ub3B0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFsbCwgb3B0KSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIGFsbCksIHBhcnNlTm90YXRpb25PcHRpb25zKG9wdCkpKTsgfSwge30pKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGNhc2UgJ2VuZ2luZWVyaW5nJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzdWx0KSwgeyBub3RhdGlvbjogJ2VuZ2luZWVyaW5nJyB9KSwgdG9rZW4ub3B0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFsbCwgb3B0KSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIGFsbCksIHBhcnNlTm90YXRpb25PcHRpb25zKG9wdCkpKTsgfSwge30pKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGNhc2UgJ25vdGF0aW9uLXNpbXBsZSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm5vdGF0aW9uID0gJ3N0YW5kYXJkJztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bmljb2RlLW9yZy9pY3UvYmxvYi9tYXN0ZXIvaWN1NGMvc291cmNlL2kxOG4vdW5pY29kZS91bnVtYmVyZm9ybWF0dGVyLmhcbiAgICAgICAgICAgIGNhc2UgJ3VuaXQtd2lkdGgtbmFycm93JzpcbiAgICAgICAgICAgICAgICByZXN1bHQuY3VycmVuY3lEaXNwbGF5ID0gJ25hcnJvd1N5bWJvbCc7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnVuaXREaXNwbGF5ID0gJ25hcnJvdyc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjYXNlICd1bml0LXdpZHRoLXNob3J0JzpcbiAgICAgICAgICAgICAgICByZXN1bHQuY3VycmVuY3lEaXNwbGF5ID0gJ2NvZGUnO1xuICAgICAgICAgICAgICAgIHJlc3VsdC51bml0RGlzcGxheSA9ICdzaG9ydCc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjYXNlICd1bml0LXdpZHRoLWZ1bGwtbmFtZSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0LmN1cnJlbmN5RGlzcGxheSA9ICduYW1lJztcbiAgICAgICAgICAgICAgICByZXN1bHQudW5pdERpc3BsYXkgPSAnbG9uZyc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjYXNlICd1bml0LXdpZHRoLWlzby1jb2RlJzpcbiAgICAgICAgICAgICAgICByZXN1bHQuY3VycmVuY3lEaXNwbGF5ID0gJ3N5bWJvbCc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjYXNlICdzY2FsZSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0LnNjYWxlID0gcGFyc2VGbG9hdCh0b2tlbi5vcHRpb25zWzBdKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vdW5pY29kZS1vcmcuZ2l0aHViLmlvL2ljdS91c2VyZ3VpZGUvZm9ybWF0X3BhcnNlL251bWJlcnMvc2tlbGV0b25zLmh0bWwjaW50ZWdlci13aWR0aFxuICAgICAgICAgICAgY2FzZSAnaW50ZWdlci13aWR0aCc6XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLm9wdGlvbnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignaW50ZWdlci13aWR0aCBzdGVtcyBvbmx5IGFjY2VwdCBhIHNpbmdsZSBvcHRpb25hbCBvcHRpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG9rZW4ub3B0aW9uc1swXS5yZXBsYWNlKElOVEVHRVJfV0lEVEhfUkVHRVgsIGZ1bmN0aW9uIChfLCBnMSwgZzIsIGczLCBnNCwgZzUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGcxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubWluaW11bUludGVnZXJEaWdpdHMgPSBnMi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZzMgJiYgZzQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV2UgY3VycmVudGx5IGRvIG5vdCBzdXBwb3J0IG1heGltdW0gaW50ZWdlciBkaWdpdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChnNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZSBjdXJyZW50bHkgZG8gbm90IHN1cHBvcnQgZXhhY3QgaW50ZWdlciBkaWdpdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaHR0cHM6Ly91bmljb2RlLW9yZy5naXRodWIuaW8vaWN1L3VzZXJndWlkZS9mb3JtYXRfcGFyc2UvbnVtYmVycy9za2VsZXRvbnMuaHRtbCNpbnRlZ2VyLXdpZHRoXG4gICAgICAgIGlmIChDT05DSVNFX0lOVEVHRVJfV0lEVEhfUkVHRVgudGVzdCh0b2tlbi5zdGVtKSkge1xuICAgICAgICAgICAgcmVzdWx0Lm1pbmltdW1JbnRlZ2VyRGlnaXRzID0gdG9rZW4uc3RlbS5sZW5ndGg7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoRlJBQ1RJT05fUFJFQ0lTSU9OX1JFR0VYLnRlc3QodG9rZW4uc3RlbSkpIHtcbiAgICAgICAgICAgIC8vIFByZWNpc2lvblxuICAgICAgICAgICAgLy8gaHR0cHM6Ly91bmljb2RlLW9yZy5naXRodWIuaW8vaWN1L3VzZXJndWlkZS9mb3JtYXRfcGFyc2UvbnVtYmVycy9za2VsZXRvbnMuaHRtbCNmcmFjdGlvbi1wcmVjaXNpb25cbiAgICAgICAgICAgIC8vIHByZWNpc2lvbi1pbnRlZ2VyIGNhc2VcbiAgICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRnJhY3Rpb24tcHJlY2lzaW9uIHN0ZW1zIG9ubHkgYWNjZXB0IGEgc2luZ2xlIG9wdGlvbmFsIG9wdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9rZW4uc3RlbS5yZXBsYWNlKEZSQUNUSU9OX1BSRUNJU0lPTl9SRUdFWCwgZnVuY3Rpb24gKF8sIGcxLCBnMiwgZzMsIGc0LCBnNSkge1xuICAgICAgICAgICAgICAgIC8vIC4wMDAqIGNhc2UgKGJlZm9yZSBJQ1U2NyBpdCB3YXMgLjAwMCspXG4gICAgICAgICAgICAgICAgaWYgKGcyID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IGcxLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gLiMjIyBjYXNlXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZzMgJiYgZzNbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQubWF4aW11bUZyYWN0aW9uRGlnaXRzID0gZzMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAuMDAjIyBjYXNlXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZzQgJiYgZzUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IGc0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1heGltdW1GcmFjdGlvbkRpZ2l0cyA9IGc0Lmxlbmd0aCArIGc1Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPSBnMS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tYXhpbXVtRnJhY3Rpb25EaWdpdHMgPSBnMS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRva2VuLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3VsdCksIHBhcnNlU2lnbmlmaWNhbnRQcmVjaXNpb24odG9rZW4ub3B0aW9uc1swXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaHR0cHM6Ly91bmljb2RlLW9yZy5naXRodWIuaW8vaWN1L3VzZXJndWlkZS9mb3JtYXRfcGFyc2UvbnVtYmVycy9za2VsZXRvbnMuaHRtbCNzaWduaWZpY2FudC1kaWdpdHMtcHJlY2lzaW9uXG4gICAgICAgIGlmIChTSUdOSUZJQ0FOVF9QUkVDSVNJT05fUkVHRVgudGVzdCh0b2tlbi5zdGVtKSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3VsdCksIHBhcnNlU2lnbmlmaWNhbnRQcmVjaXNpb24odG9rZW4uc3RlbSkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNpZ25PcHRzID0gcGFyc2VTaWduKHRva2VuLnN0ZW0pO1xuICAgICAgICBpZiAoc2lnbk9wdHMpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXN1bHQpLCBzaWduT3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbmNpc2VTY2llbnRpZmljQW5kRW5naW5lZXJpbmdPcHRzID0gcGFyc2VDb25jaXNlU2NpZW50aWZpY0FuZEVuZ2luZWVyaW5nU3RlbSh0b2tlbi5zdGVtKTtcbiAgICAgICAgaWYgKGNvbmNpc2VTY2llbnRpZmljQW5kRW5naW5lZXJpbmdPcHRzKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzdWx0KSwgY29uY2lzZVNjaWVudGlmaWNBbmRFbmdpbmVlcmluZ09wdHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCIvLyBAZ2VuZXJhdGVkIGZyb20gcmVnZXgtZ2VuLnRzXG5leHBvcnQgdmFyIFdISVRFX1NQQUNFX1JFR0VYID0gL1tcXHQtXFxyIFxceDg1XFx1MjAwRVxcdTIwMEZcXHUyMDI4XFx1MjAyOV0vaTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc3JjL3R5cGVzJztcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVNZXNzYWdlcyhtc2dzKSB7XG4gICAgcmV0dXJuIG1zZ3M7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lTWVzc2FnZShtc2cpIHtcbiAgICByZXR1cm4gbXNnO1xufVxuZXhwb3J0IHsgY3JlYXRlSW50bENhY2hlLCBmaWx0ZXJQcm9wcywgREVGQVVMVF9JTlRMX0NPTkZJRywgY3JlYXRlRm9ybWF0dGVycywgZ2V0TmFtZWRGb3JtYXQsIH0gZnJvbSAnLi9zcmMvdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZXJyb3InO1xuZXhwb3J0IHsgZm9ybWF0TWVzc2FnZSB9IGZyb20gJy4vc3JjL21lc3NhZ2UnO1xuZXhwb3J0IHsgZm9ybWF0RGF0ZSwgZm9ybWF0RGF0ZVRvUGFydHMsIGZvcm1hdFRpbWUsIGZvcm1hdFRpbWVUb1BhcnRzLCB9IGZyb20gJy4vc3JjL2RhdGVUaW1lJztcbmV4cG9ydCB7IGZvcm1hdERpc3BsYXlOYW1lIH0gZnJvbSAnLi9zcmMvZGlzcGxheU5hbWUnO1xuZXhwb3J0IHsgZm9ybWF0TGlzdCB9IGZyb20gJy4vc3JjL2xpc3QnO1xuZXhwb3J0IHsgZm9ybWF0UGx1cmFsIH0gZnJvbSAnLi9zcmMvcGx1cmFsJztcbmV4cG9ydCB7IGZvcm1hdFJlbGF0aXZlVGltZSB9IGZyb20gJy4vc3JjL3JlbGF0aXZlVGltZSc7XG5leHBvcnQgeyBmb3JtYXROdW1iZXIsIGZvcm1hdE51bWJlclRvUGFydHMgfSBmcm9tICcuL3NyYy9udW1iZXInO1xuZXhwb3J0IHsgY3JlYXRlSW50bCB9IGZyb20gJy4vc3JjL2NyZWF0ZS1pbnRsJztcbiIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBjcmVhdGVGb3JtYXR0ZXJzLCBERUZBVUxUX0lOVExfQ09ORklHIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBJbnZhbGlkQ29uZmlnRXJyb3IsIE1pc3NpbmdEYXRhRXJyb3IgfSBmcm9tICcuL2Vycm9yJztcbmltcG9ydCB7IGZvcm1hdE51bWJlciwgZm9ybWF0TnVtYmVyVG9QYXJ0cyB9IGZyb20gJy4vbnVtYmVyJztcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlVGltZSB9IGZyb20gJy4vcmVsYXRpdmVUaW1lJztcbmltcG9ydCB7IGZvcm1hdERhdGUsIGZvcm1hdERhdGVUb1BhcnRzLCBmb3JtYXRUaW1lLCBmb3JtYXRUaW1lVG9QYXJ0cywgZm9ybWF0RGF0ZVRpbWVSYW5nZSwgfSBmcm9tICcuL2RhdGVUaW1lJztcbmltcG9ydCB7IGZvcm1hdFBsdXJhbCB9IGZyb20gJy4vcGx1cmFsJztcbmltcG9ydCB7IGZvcm1hdE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgZm9ybWF0TGlzdCwgZm9ybWF0TGlzdFRvUGFydHMgfSBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IHsgZm9ybWF0RGlzcGxheU5hbWUgfSBmcm9tICcuL2Rpc3BsYXlOYW1lJztcbmZ1bmN0aW9uIG1lc3NhZ2VzQ29udGFpblN0cmluZyhtZXNzYWdlcykge1xuICAgIHZhciBmaXJzdE1lc3NhZ2UgPSBtZXNzYWdlcyA/IG1lc3NhZ2VzW09iamVjdC5rZXlzKG1lc3NhZ2VzKVswXV0gOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHR5cGVvZiBmaXJzdE1lc3NhZ2UgPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gdmVyaWZ5Q29uZmlnTWVzc2FnZXMoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0UmljaFRleHRFbGVtZW50cyAmJlxuICAgICAgICBtZXNzYWdlc0NvbnRhaW5TdHJpbmcoY29uZmlnLm1lc3NhZ2VzIHx8IHt9KSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbQGZvcm1hdGpzL2ludGxdIFxcXCJkZWZhdWx0UmljaFRleHRFbGVtZW50c1xcXCIgd2FzIHNwZWNpZmllZCBidXQgXFxcIm1lc3NhZ2VcXFwiIHdhcyBub3QgcHJlLWNvbXBpbGVkLiBcXG5QbGVhc2UgY29uc2lkZXIgdXNpbmcgXFxcIkBmb3JtYXRqcy9jbGlcXFwiIHRvIHByZS1jb21waWxlIHlvdXIgbWVzc2FnZXMgZm9yIHBlcmZvcm1hbmNlLlxcbkZvciBtb3JlIGRldGFpbHMgc2VlIGh0dHBzOi8vZm9ybWF0anMuaW8vZG9jcy9nZXR0aW5nLXN0YXJ0ZWQvbWVzc2FnZS1kaXN0cmlidXRpb25cIik7XG4gICAgfVxufVxuLyoqXG4gKiBDcmVhdGUgaW50bCBvYmplY3RcbiAqIEBwYXJhbSBjb25maWcgaW50bCBjb25maWdcbiAqIEBwYXJhbSBjYWNoZSBjYWNoZSBmb3IgZm9ybWF0dGVyIGluc3RhbmNlcyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnRsKGNvbmZpZywgY2FjaGUpIHtcbiAgICB2YXIgZm9ybWF0dGVycyA9IGNyZWF0ZUZvcm1hdHRlcnMoY2FjaGUpO1xuICAgIHZhciByZXNvbHZlZENvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBERUZBVUxUX0lOVExfQ09ORklHKSwgY29uZmlnKTtcbiAgICB2YXIgbG9jYWxlID0gcmVzb2x2ZWRDb25maWcubG9jYWxlLCBkZWZhdWx0TG9jYWxlID0gcmVzb2x2ZWRDb25maWcuZGVmYXVsdExvY2FsZSwgb25FcnJvciA9IHJlc29sdmVkQ29uZmlnLm9uRXJyb3I7XG4gICAgaWYgKCFsb2NhbGUpIHtcbiAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgIG9uRXJyb3IobmV3IEludmFsaWRDb25maWdFcnJvcihcIlxcXCJsb2NhbGVcXFwiIHdhcyBub3QgY29uZmlndXJlZCwgdXNpbmcgXFxcIlwiICsgZGVmYXVsdExvY2FsZSArIFwiXFxcIiBhcyBmYWxsYmFjay4gU2VlIGh0dHBzOi8vZm9ybWF0anMuaW8vZG9jcy9yZWFjdC1pbnRsL2FwaSNpbnRsc2hhcGUgZm9yIG1vcmUgZGV0YWlsc1wiKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2luY2UgdGhlcmUncyBubyByZWdpc3RlcmVkIGxvY2FsZSBkYXRhIGZvciBgbG9jYWxlYCwgdGhpcyB3aWxsXG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIHRoZSBgZGVmYXVsdExvY2FsZWAgdG8gbWFrZSBzdXJlIHRoaW5ncyBjYW4gcmVuZGVyLlxuICAgICAgICAvLyBUaGUgYG1lc3NhZ2VzYCBhcmUgb3ZlcnJpZGRlbiB0byB0aGUgYGRlZmF1bHRQcm9wc2AgZW1wdHkgb2JqZWN0XG4gICAgICAgIC8vIHRvIG1haW50YWluIHJlZmVyZW50aWFsIGVxdWFsaXR5IGFjcm9zcyByZS1yZW5kZXJzLiBJdCdzIGFzc3VtZWRcbiAgICAgICAgLy8gZWFjaCA8Rm9ybWF0dGVkTWVzc2FnZT4gY29udGFpbnMgYSBgZGVmYXVsdE1lc3NhZ2VgIHByb3AuXG4gICAgICAgIHJlc29sdmVkQ29uZmlnLmxvY2FsZSA9IHJlc29sdmVkQ29uZmlnLmRlZmF1bHRMb2NhbGUgfHwgJ2VuJztcbiAgICB9XG4gICAgZWxzZSBpZiAoIUludGwuTnVtYmVyRm9ybWF0LnN1cHBvcnRlZExvY2FsZXNPZihsb2NhbGUpLmxlbmd0aCAmJiBvbkVycm9yKSB7XG4gICAgICAgIG9uRXJyb3IobmV3IE1pc3NpbmdEYXRhRXJyb3IoXCJNaXNzaW5nIGxvY2FsZSBkYXRhIGZvciBsb2NhbGU6IFxcXCJcIiArIGxvY2FsZSArIFwiXFxcIiBpbiBJbnRsLk51bWJlckZvcm1hdC4gVXNpbmcgZGVmYXVsdCBsb2NhbGU6IFxcXCJcIiArIGRlZmF1bHRMb2NhbGUgKyBcIlxcXCIgYXMgZmFsbGJhY2suIFNlZSBodHRwczovL2Zvcm1hdGpzLmlvL2RvY3MvcmVhY3QtaW50bCNydW50aW1lLXJlcXVpcmVtZW50cyBmb3IgbW9yZSBkZXRhaWxzXCIpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIUludGwuRGF0ZVRpbWVGb3JtYXQuc3VwcG9ydGVkTG9jYWxlc09mKGxvY2FsZSkubGVuZ3RoICYmXG4gICAgICAgIG9uRXJyb3IpIHtcbiAgICAgICAgb25FcnJvcihuZXcgTWlzc2luZ0RhdGFFcnJvcihcIk1pc3NpbmcgbG9jYWxlIGRhdGEgZm9yIGxvY2FsZTogXFxcIlwiICsgbG9jYWxlICsgXCJcXFwiIGluIEludGwuRGF0ZVRpbWVGb3JtYXQuIFVzaW5nIGRlZmF1bHQgbG9jYWxlOiBcXFwiXCIgKyBkZWZhdWx0TG9jYWxlICsgXCJcXFwiIGFzIGZhbGxiYWNrLiBTZWUgaHR0cHM6Ly9mb3JtYXRqcy5pby9kb2NzL3JlYWN0LWludGwjcnVudGltZS1yZXF1aXJlbWVudHMgZm9yIG1vcmUgZGV0YWlsc1wiKSk7XG4gICAgfVxuICAgIHZlcmlmeUNvbmZpZ01lc3NhZ2VzKHJlc29sdmVkQ29uZmlnKTtcbiAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc29sdmVkQ29uZmlnKSwgeyBmb3JtYXR0ZXJzOiBmb3JtYXR0ZXJzLCBmb3JtYXROdW1iZXI6IGZvcm1hdE51bWJlci5iaW5kKG51bGwsIHJlc29sdmVkQ29uZmlnLCBmb3JtYXR0ZXJzLmdldE51bWJlckZvcm1hdCksIGZvcm1hdE51bWJlclRvUGFydHM6IGZvcm1hdE51bWJlclRvUGFydHMuYmluZChudWxsLCByZXNvbHZlZENvbmZpZywgZm9ybWF0dGVycy5nZXROdW1iZXJGb3JtYXQpLCBmb3JtYXRSZWxhdGl2ZVRpbWU6IGZvcm1hdFJlbGF0aXZlVGltZS5iaW5kKG51bGwsIHJlc29sdmVkQ29uZmlnLCBmb3JtYXR0ZXJzLmdldFJlbGF0aXZlVGltZUZvcm1hdCksIGZvcm1hdERhdGU6IGZvcm1hdERhdGUuYmluZChudWxsLCByZXNvbHZlZENvbmZpZywgZm9ybWF0dGVycy5nZXREYXRlVGltZUZvcm1hdCksIGZvcm1hdERhdGVUb1BhcnRzOiBmb3JtYXREYXRlVG9QYXJ0cy5iaW5kKG51bGwsIHJlc29sdmVkQ29uZmlnLCBmb3JtYXR0ZXJzLmdldERhdGVUaW1lRm9ybWF0KSwgZm9ybWF0VGltZTogZm9ybWF0VGltZS5iaW5kKG51bGwsIHJlc29sdmVkQ29uZmlnLCBmb3JtYXR0ZXJzLmdldERhdGVUaW1lRm9ybWF0KSwgZm9ybWF0RGF0ZVRpbWVSYW5nZTogZm9ybWF0RGF0ZVRpbWVSYW5nZS5iaW5kKG51bGwsIHJlc29sdmVkQ29uZmlnLCBmb3JtYXR0ZXJzLmdldERhdGVUaW1lRm9ybWF0KSwgZm9ybWF0VGltZVRvUGFydHM6IGZvcm1hdFRpbWVUb1BhcnRzLmJpbmQobnVsbCwgcmVzb2x2ZWRDb25maWcsIGZvcm1hdHRlcnMuZ2V0RGF0ZVRpbWVGb3JtYXQpLCBmb3JtYXRQbHVyYWw6IGZvcm1hdFBsdXJhbC5iaW5kKG51bGwsIHJlc29sdmVkQ29uZmlnLCBmb3JtYXR0ZXJzLmdldFBsdXJhbFJ1bGVzKSwgZm9ybWF0TWVzc2FnZTogZm9ybWF0TWVzc2FnZS5iaW5kKG51bGwsIHJlc29sdmVkQ29uZmlnLCBmb3JtYXR0ZXJzKSwgZm9ybWF0TGlzdDogZm9ybWF0TGlzdC5iaW5kKG51bGwsIHJlc29sdmVkQ29uZmlnLCBmb3JtYXR0ZXJzLmdldExpc3RGb3JtYXQpLCBmb3JtYXRMaXN0VG9QYXJ0czogZm9ybWF0TGlzdFRvUGFydHMuYmluZChudWxsLCByZXNvbHZlZENvbmZpZywgZm9ybWF0dGVycy5nZXRMaXN0Rm9ybWF0KSwgZm9ybWF0RGlzcGxheU5hbWU6IGZvcm1hdERpc3BsYXlOYW1lLmJpbmQobnVsbCwgcmVzb2x2ZWRDb25maWcsIGZvcm1hdHRlcnMuZ2V0RGlzcGxheU5hbWVzKSB9KTtcbn1cbiIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBmaWx0ZXJQcm9wcywgZ2V0TmFtZWRGb3JtYXQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEludGxFcnJvciwgSW50bEVycm9yQ29kZSB9IGZyb20gJy4vZXJyb3InO1xudmFyIERBVEVfVElNRV9GT1JNQVRfT1BUSU9OUyA9IFtcbiAgICAnbG9jYWxlTWF0Y2hlcicsXG4gICAgJ2Zvcm1hdE1hdGNoZXInLFxuICAgICd0aW1lWm9uZScsXG4gICAgJ2hvdXIxMicsXG4gICAgJ3dlZWtkYXknLFxuICAgICdlcmEnLFxuICAgICd5ZWFyJyxcbiAgICAnbW9udGgnLFxuICAgICdkYXknLFxuICAgICdob3VyJyxcbiAgICAnbWludXRlJyxcbiAgICAnc2Vjb25kJyxcbiAgICAndGltZVpvbmVOYW1lJyxcbiAgICAnaG91ckN5Y2xlJyxcbiAgICAnZGF0ZVN0eWxlJyxcbiAgICAndGltZVN0eWxlJyxcbiAgICAnY2FsZW5kYXInLFxuICAgIC8vICdkYXlQZXJpb2QnLFxuICAgICdudW1iZXJpbmdTeXN0ZW0nLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYXR0ZXIoX2EsIHR5cGUsIGdldERhdGVUaW1lRm9ybWF0LCBvcHRpb25zKSB7XG4gICAgdmFyIGxvY2FsZSA9IF9hLmxvY2FsZSwgZm9ybWF0cyA9IF9hLmZvcm1hdHMsIG9uRXJyb3IgPSBfYS5vbkVycm9yLCB0aW1lWm9uZSA9IF9hLnRpbWVab25lO1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0O1xuICAgIHZhciBkZWZhdWx0cyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCAodGltZVpvbmUgJiYgeyB0aW1lWm9uZTogdGltZVpvbmUgfSkpLCAoZm9ybWF0ICYmIGdldE5hbWVkRm9ybWF0KGZvcm1hdHMsIHR5cGUsIGZvcm1hdCwgb25FcnJvcikpKTtcbiAgICB2YXIgZmlsdGVyZWRPcHRpb25zID0gZmlsdGVyUHJvcHMob3B0aW9ucywgREFURV9USU1FX0ZPUk1BVF9PUFRJT05TLCBcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGVzMjAyMCBoYXMgYSBsb3Qgc3R1ZmYgZnJvbSBlczIwMjEgYmxlZWQgaW5cbiAgICBkZWZhdWx0cyk7XG4gICAgaWYgKHR5cGUgPT09ICd0aW1lJyAmJlxuICAgICAgICAhZmlsdGVyZWRPcHRpb25zLmhvdXIgJiZcbiAgICAgICAgIWZpbHRlcmVkT3B0aW9ucy5taW51dGUgJiZcbiAgICAgICAgIWZpbHRlcmVkT3B0aW9ucy5zZWNvbmQgJiZcbiAgICAgICAgIWZpbHRlcmVkT3B0aW9ucy50aW1lU3R5bGUgJiZcbiAgICAgICAgIWZpbHRlcmVkT3B0aW9ucy5kYXRlU3R5bGUpIHtcbiAgICAgICAgLy8gQWRkIGRlZmF1bHQgZm9ybWF0dGluZyBvcHRpb25zIGlmIGhvdXIsIG1pbnV0ZSwgb3Igc2Vjb25kIGlzbid0IGRlZmluZWQuXG4gICAgICAgIGZpbHRlcmVkT3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBmaWx0ZXJlZE9wdGlvbnMpLCB7IGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYycgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXREYXRlVGltZUZvcm1hdChsb2NhbGUsIGZpbHRlcmVkT3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShjb25maWcsIGdldERhdGVUaW1lRm9ybWF0KSB7XG4gICAgdmFyIF9hID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgX2FbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IF9hWzBdLCBfYiA9IF9hWzFdLCBvcHRpb25zID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2I7XG4gICAgdmFyIGRhdGUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gbmV3IERhdGUodmFsdWUgfHwgMCkgOiB2YWx1ZTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZ2V0Rm9ybWF0dGVyKGNvbmZpZywgJ2RhdGUnLCBnZXREYXRlVGltZUZvcm1hdCwgb3B0aW9ucykuZm9ybWF0KGRhdGUpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25maWcub25FcnJvcihuZXcgSW50bEVycm9yKEludGxFcnJvckNvZGUuRk9STUFUX0VSUk9SLCAnRXJyb3IgZm9ybWF0dGluZyBkYXRlLicsIGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhkYXRlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lKGNvbmZpZywgZ2V0RGF0ZVRpbWVGb3JtYXQpIHtcbiAgICB2YXIgX2EgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBfYVtfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIHZhbHVlID0gX2FbMF0sIF9iID0gX2FbMV0sIG9wdGlvbnMgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYjtcbiAgICB2YXIgZGF0ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBuZXcgRGF0ZSh2YWx1ZSB8fCAwKSA6IHZhbHVlO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBnZXRGb3JtYXR0ZXIoY29uZmlnLCAndGltZScsIGdldERhdGVUaW1lRm9ybWF0LCBvcHRpb25zKS5mb3JtYXQoZGF0ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbmZpZy5vbkVycm9yKG5ldyBJbnRsRXJyb3IoSW50bEVycm9yQ29kZS5GT1JNQVRfRVJST1IsICdFcnJvciBmb3JtYXR0aW5nIHRpbWUuJywgZSkpO1xuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKGRhdGUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lUmFuZ2UoY29uZmlnLCBnZXREYXRlVGltZUZvcm1hdCkge1xuICAgIHZhciBfYSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIF9hW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgZnJvbSA9IF9hWzBdLCB0byA9IF9hWzFdLCBfYiA9IF9hWzJdLCBvcHRpb25zID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2I7XG4gICAgdmFyIHRpbWVab25lID0gY29uZmlnLnRpbWVab25lLCBsb2NhbGUgPSBjb25maWcubG9jYWxlLCBvbkVycm9yID0gY29uZmlnLm9uRXJyb3I7XG4gICAgdmFyIGZpbHRlcmVkT3B0aW9ucyA9IGZpbHRlclByb3BzKG9wdGlvbnMsIERBVEVfVElNRV9GT1JNQVRfT1BUSU9OUywgdGltZVpvbmUgPyB7IHRpbWVab25lOiB0aW1lWm9uZSB9IDoge30pO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBnZXREYXRlVGltZUZvcm1hdChsb2NhbGUsIGZpbHRlcmVkT3B0aW9ucykuZm9ybWF0UmFuZ2UoZnJvbSwgdG8pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBvbkVycm9yKG5ldyBJbnRsRXJyb3IoSW50bEVycm9yQ29kZS5GT1JNQVRfRVJST1IsICdFcnJvciBmb3JtYXR0aW5nIGRhdGUgdGltZSByYW5nZS4nLCBlKSk7XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcoZnJvbSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVRvUGFydHMoY29uZmlnLCBnZXREYXRlVGltZUZvcm1hdCkge1xuICAgIHZhciBfYSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIF9hW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgdmFsdWUgPSBfYVswXSwgX2IgPSBfYVsxXSwgb3B0aW9ucyA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iO1xuICAgIHZhciBkYXRlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IG5ldyBEYXRlKHZhbHVlIHx8IDApIDogdmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGdldEZvcm1hdHRlcihjb25maWcsICdkYXRlJywgZ2V0RGF0ZVRpbWVGb3JtYXQsIG9wdGlvbnMpLmZvcm1hdFRvUGFydHMoZGF0ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbmZpZy5vbkVycm9yKG5ldyBJbnRsRXJyb3IoSW50bEVycm9yQ29kZS5GT1JNQVRfRVJST1IsICdFcnJvciBmb3JtYXR0aW5nIGRhdGUuJywgZSkpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZVRvUGFydHMoY29uZmlnLCBnZXREYXRlVGltZUZvcm1hdCkge1xuICAgIHZhciBfYSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIF9hW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgdmFsdWUgPSBfYVswXSwgX2IgPSBfYVsxXSwgb3B0aW9ucyA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iO1xuICAgIHZhciBkYXRlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IG5ldyBEYXRlKHZhbHVlIHx8IDApIDogdmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGdldEZvcm1hdHRlcihjb25maWcsICd0aW1lJywgZ2V0RGF0ZVRpbWVGb3JtYXQsIG9wdGlvbnMpLmZvcm1hdFRvUGFydHMoZGF0ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbmZpZy5vbkVycm9yKG5ldyBJbnRsRXJyb3IoSW50bEVycm9yQ29kZS5GT1JNQVRfRVJST1IsICdFcnJvciBmb3JtYXR0aW5nIHRpbWUuJywgZSkpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59XG4iLCJpbXBvcnQgeyBmaWx0ZXJQcm9wcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgRm9ybWF0RXJyb3IsIEVycm9yQ29kZSB9IGZyb20gJ2ludGwtbWVzc2FnZWZvcm1hdCc7XG5pbXBvcnQgeyBJbnRsRXJyb3JDb2RlLCBJbnRsRXJyb3IgfSBmcm9tICcuL2Vycm9yJztcbnZhciBESVNQTEFZX05BTUVTX09QVE9OUyA9IFtcbiAgICAnbG9jYWxlTWF0Y2hlcicsXG4gICAgJ3N0eWxlJyxcbiAgICAndHlwZScsXG4gICAgJ2ZhbGxiYWNrJyxcbl07XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGlzcGxheU5hbWUoX2EsIGdldERpc3BsYXlOYW1lcywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgbG9jYWxlID0gX2EubG9jYWxlLCBvbkVycm9yID0gX2Eub25FcnJvcjtcbiAgICB2YXIgRGlzcGxheU5hbWVzID0gSW50bC5EaXNwbGF5TmFtZXM7XG4gICAgaWYgKCFEaXNwbGF5TmFtZXMpIHtcbiAgICAgICAgb25FcnJvcihuZXcgRm9ybWF0RXJyb3IoXCJJbnRsLkRpc3BsYXlOYW1lcyBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQuXFxuVHJ5IHBvbHlmaWxsaW5nIGl0IHVzaW5nIFxcXCJAZm9ybWF0anMvaW50bC1kaXNwbGF5bmFtZXNcXFwiXFxuXCIsIEVycm9yQ29kZS5NSVNTSU5HX0lOVExfQVBJKSk7XG4gICAgfVxuICAgIHZhciBmaWx0ZXJlZE9wdGlvbnMgPSBmaWx0ZXJQcm9wcyhvcHRpb25zLCBESVNQTEFZX05BTUVTX09QVE9OUyk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGdldERpc3BsYXlOYW1lcyhsb2NhbGUsIGZpbHRlcmVkT3B0aW9ucykub2YodmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBvbkVycm9yKG5ldyBJbnRsRXJyb3IoSW50bEVycm9yQ29kZS5GT1JNQVRfRVJST1IsICdFcnJvciBmb3JtYXR0aW5nIGRpc3BsYXkgbmFtZS4nLCBlKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5leHBvcnQgdmFyIEludGxFcnJvckNvZGU7XG4oZnVuY3Rpb24gKEludGxFcnJvckNvZGUpIHtcbiAgICBJbnRsRXJyb3JDb2RlW1wiRk9STUFUX0VSUk9SXCJdID0gXCJGT1JNQVRfRVJST1JcIjtcbiAgICBJbnRsRXJyb3JDb2RlW1wiVU5TVVBQT1JURURfRk9STUFUVEVSXCJdID0gXCJVTlNVUFBPUlRFRF9GT1JNQVRURVJcIjtcbiAgICBJbnRsRXJyb3JDb2RlW1wiSU5WQUxJRF9DT05GSUdcIl0gPSBcIklOVkFMSURfQ09ORklHXCI7XG4gICAgSW50bEVycm9yQ29kZVtcIk1JU1NJTkdfREFUQVwiXSA9IFwiTUlTU0lOR19EQVRBXCI7XG4gICAgSW50bEVycm9yQ29kZVtcIk1JU1NJTkdfVFJBTlNMQVRJT05cIl0gPSBcIk1JU1NJTkdfVFJBTlNMQVRJT05cIjtcbn0pKEludGxFcnJvckNvZGUgfHwgKEludGxFcnJvckNvZGUgPSB7fSkpO1xudmFyIEludGxFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50bEVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludGxFcnJvcihjb2RlLCBtZXNzYWdlLCBleGNlcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgXCJbQGZvcm1hdGpzL2ludGwgRXJyb3IgXCIgKyBjb2RlICsgXCJdIFwiICsgbWVzc2FnZSArIFwiIFxcblwiICsgKGV4Y2VwdGlvbiA/IFwiXFxuXCIgKyBleGNlcHRpb24ubWVzc2FnZSArIFwiXFxuXCIgKyBleGNlcHRpb24uc3RhY2sgOiAnJykpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfdGhpcywgSW50bEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBJbnRsRXJyb3I7XG59KEVycm9yKSk7XG5leHBvcnQgeyBJbnRsRXJyb3IgfTtcbnZhciBVbnN1cHBvcnRlZEZvcm1hdHRlckVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhVbnN1cHBvcnRlZEZvcm1hdHRlckVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFVuc3VwcG9ydGVkRm9ybWF0dGVyRXJyb3IobWVzc2FnZSwgZXhjZXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBJbnRsRXJyb3JDb2RlLlVOU1VQUE9SVEVEX0ZPUk1BVFRFUiwgbWVzc2FnZSwgZXhjZXB0aW9uKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gVW5zdXBwb3J0ZWRGb3JtYXR0ZXJFcnJvcjtcbn0oSW50bEVycm9yKSk7XG5leHBvcnQgeyBVbnN1cHBvcnRlZEZvcm1hdHRlckVycm9yIH07XG52YXIgSW52YWxpZENvbmZpZ0Vycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnZhbGlkQ29uZmlnRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW52YWxpZENvbmZpZ0Vycm9yKG1lc3NhZ2UsIGV4Y2VwdGlvbikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgSW50bEVycm9yQ29kZS5JTlZBTElEX0NPTkZJRywgbWVzc2FnZSwgZXhjZXB0aW9uKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSW52YWxpZENvbmZpZ0Vycm9yO1xufShJbnRsRXJyb3IpKTtcbmV4cG9ydCB7IEludmFsaWRDb25maWdFcnJvciB9O1xudmFyIE1pc3NpbmdEYXRhRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1pc3NpbmdEYXRhRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWlzc2luZ0RhdGFFcnJvcihtZXNzYWdlLCBleGNlcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIEludGxFcnJvckNvZGUuTUlTU0lOR19EQVRBLCBtZXNzYWdlLCBleGNlcHRpb24pIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBNaXNzaW5nRGF0YUVycm9yO1xufShJbnRsRXJyb3IpKTtcbmV4cG9ydCB7IE1pc3NpbmdEYXRhRXJyb3IgfTtcbnZhciBNZXNzYWdlRm9ybWF0RXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1lc3NhZ2VGb3JtYXRFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNZXNzYWdlRm9ybWF0RXJyb3IobWVzc2FnZSwgbG9jYWxlLCBkZXNjcmlwdG9yLCBleGNlcHRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgSW50bEVycm9yQ29kZS5GT1JNQVRfRVJST1IsIG1lc3NhZ2UgKyBcIiBcXG5Mb2NhbGU6IFwiICsgbG9jYWxlICsgXCJcXG5NZXNzYWdlSUQ6IFwiICsgKGRlc2NyaXB0b3IgPT09IG51bGwgfHwgZGVzY3JpcHRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVzY3JpcHRvci5pZCkgKyBcIlxcbkRlZmF1bHQgTWVzc2FnZTogXCIgKyAoZGVzY3JpcHRvciA9PT0gbnVsbCB8fCBkZXNjcmlwdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZXNjcmlwdG9yLmRlZmF1bHRNZXNzYWdlKSArIFwiXFxuRGVzY3JpcHRpb246IFwiICsgKGRlc2NyaXB0b3IgPT09IG51bGwgfHwgZGVzY3JpcHRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVzY3JpcHRvci5kZXNjcmlwdGlvbikgKyBcIiBcXG5cIiwgZXhjZXB0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kZXNjcmlwdG9yID0gZGVzY3JpcHRvcjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gTWVzc2FnZUZvcm1hdEVycm9yO1xufShJbnRsRXJyb3IpKTtcbmV4cG9ydCB7IE1lc3NhZ2VGb3JtYXRFcnJvciB9O1xudmFyIE1pc3NpbmdUcmFuc2xhdGlvbkVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNaXNzaW5nVHJhbnNsYXRpb25FcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNaXNzaW5nVHJhbnNsYXRpb25FcnJvcihkZXNjcmlwdG9yLCBsb2NhbGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgSW50bEVycm9yQ29kZS5NSVNTSU5HX1RSQU5TTEFUSU9OLCBcIk1pc3NpbmcgbWVzc2FnZTogXFxcIlwiICsgZGVzY3JpcHRvci5pZCArIFwiXFxcIiBmb3IgbG9jYWxlIFxcXCJcIiArIGxvY2FsZSArIFwiXFxcIiwgdXNpbmcgXCIgKyAoZGVzY3JpcHRvci5kZWZhdWx0TWVzc2FnZSA/ICdkZWZhdWx0IG1lc3NhZ2UnIDogJ2lkJykgKyBcIiBhcyBmYWxsYmFjay5cIikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGVzY3JpcHRvciA9IGRlc2NyaXB0b3I7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIE1pc3NpbmdUcmFuc2xhdGlvbkVycm9yO1xufShJbnRsRXJyb3IpKTtcbmV4cG9ydCB7IE1pc3NpbmdUcmFuc2xhdGlvbkVycm9yIH07XG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZmlsdGVyUHJvcHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEZvcm1hdEVycm9yLCBFcnJvckNvZGUgfSBmcm9tICdpbnRsLW1lc3NhZ2Vmb3JtYXQnO1xuaW1wb3J0IHsgSW50bEVycm9yLCBJbnRsRXJyb3JDb2RlIH0gZnJvbSAnLi9lcnJvcic7XG52YXIgTElTVF9GT1JNQVRfT1BUSU9OUyA9IFtcbiAgICAnbG9jYWxlTWF0Y2hlcicsXG4gICAgJ3R5cGUnLFxuICAgICdzdHlsZScsXG5dO1xudmFyIG5vdyA9IERhdGUubm93KCk7XG5mdW5jdGlvbiBnZW5lcmF0ZVRva2VuKGkpIHtcbiAgICByZXR1cm4gbm93ICsgXCJfXCIgKyBpICsgXCJfXCIgKyBub3c7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TGlzdChvcHRzLCBnZXRMaXN0Rm9ybWF0LCB2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZXN1bHRzID0gZm9ybWF0TGlzdFRvUGFydHMob3B0cywgZ2V0TGlzdEZvcm1hdCwgdmFsdWVzLCBvcHRpb25zKS5yZWR1Y2UoZnVuY3Rpb24gKGFsbCwgZWwpIHtcbiAgICAgICAgdmFyIHZhbCA9IGVsLnZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGFsbC5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFsbFthbGwubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBhbGxbYWxsLmxlbmd0aCAtIDFdICs9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFsbC5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoID09PSAxID8gcmVzdWx0c1swXSA6IHJlc3VsdHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TGlzdFRvUGFydHMoX2EsIGdldExpc3RGb3JtYXQsIHZhbHVlcywgb3B0aW9ucykge1xuICAgIHZhciBsb2NhbGUgPSBfYS5sb2NhbGUsIG9uRXJyb3IgPSBfYS5vbkVycm9yO1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIExpc3RGb3JtYXQgPSBJbnRsLkxpc3RGb3JtYXQ7XG4gICAgaWYgKCFMaXN0Rm9ybWF0KSB7XG4gICAgICAgIG9uRXJyb3IobmV3IEZvcm1hdEVycm9yKFwiSW50bC5MaXN0Rm9ybWF0IGlzIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudC5cXG5UcnkgcG9seWZpbGxpbmcgaXQgdXNpbmcgXFxcIkBmb3JtYXRqcy9pbnRsLWxpc3Rmb3JtYXRcXFwiXFxuXCIsIEVycm9yQ29kZS5NSVNTSU5HX0lOVExfQVBJKSk7XG4gICAgfVxuICAgIHZhciBmaWx0ZXJlZE9wdGlvbnMgPSBmaWx0ZXJQcm9wcyhvcHRpb25zLCBMSVNUX0ZPUk1BVF9PUFRJT05TKTtcbiAgICB0cnkge1xuICAgICAgICB2YXIgcmljaFZhbHVlc18xID0ge307XG4gICAgICAgIHZhciBzZXJpYWxpemVkVmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGdlbmVyYXRlVG9rZW4oaSk7XG4gICAgICAgICAgICAgICAgcmljaFZhbHVlc18xW2lkXSA9IHY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBnZXRMaXN0Rm9ybWF0KGxvY2FsZSwgZmlsdGVyZWRPcHRpb25zKVxuICAgICAgICAgICAgLmZvcm1hdFRvUGFydHMoc2VyaWFsaXplZFZhbHVlcylcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJ0LnR5cGUgPT09ICdsaXRlcmFsJ1xuICAgICAgICAgICAgICAgID8gcGFydFxuICAgICAgICAgICAgICAgIDogX19hc3NpZ24oX19hc3NpZ24oe30sIHBhcnQpLCB7IHZhbHVlOiByaWNoVmFsdWVzXzFbcGFydC52YWx1ZV0gfHwgcGFydC52YWx1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIG9uRXJyb3IobmV3IEludGxFcnJvcihJbnRsRXJyb3JDb2RlLkZPUk1BVF9FUlJPUiwgJ0Vycm9yIGZvcm1hdHRpbmcgbGlzdC4nLCBlKSk7XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gdmFsdWVzO1xufVxuIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGludmFyaWFudCB9IGZyb20gJ0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0JztcbmltcG9ydCB7IEludGxNZXNzYWdlRm9ybWF0LCB9IGZyb20gJ2ludGwtbWVzc2FnZWZvcm1hdCc7XG5pbXBvcnQgeyBNaXNzaW5nVHJhbnNsYXRpb25FcnJvciwgTWVzc2FnZUZvcm1hdEVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBUWVBFIH0gZnJvbSAnQGZvcm1hdGpzL2ljdS1tZXNzYWdlZm9ybWF0LXBhcnNlcic7XG5mdW5jdGlvbiBzZXRUaW1lWm9uZUluT3B0aW9ucyhvcHRzLCB0aW1lWm9uZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvcHRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFsbCwgaykge1xuICAgICAgICBhbGxba10gPSBfX2Fzc2lnbih7IHRpbWVab25lOiB0aW1lWm9uZSB9LCBvcHRzW2tdKTtcbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICB9LCB7fSk7XG59XG5mdW5jdGlvbiBkZWVwTWVyZ2VPcHRpb25zKG9wdHMxLCBvcHRzMikge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdHMxKSwgb3B0czIpKTtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGFsbCwgaykge1xuICAgICAgICBhbGxba10gPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgKG9wdHMxW2tdIHx8IHt9KSksIChvcHRzMltrXSB8fCB7fSkpO1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIGRlZXBNZXJnZUZvcm1hdHNBbmRTZXRUaW1lWm9uZShmMSwgdGltZVpvbmUpIHtcbiAgICBpZiAoIXRpbWVab25lKSB7XG4gICAgICAgIHJldHVybiBmMTtcbiAgICB9XG4gICAgdmFyIG1mRm9ybWF0cyA9IEludGxNZXNzYWdlRm9ybWF0LmZvcm1hdHM7XG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBtZkZvcm1hdHMpLCBmMSksIHsgZGF0ZTogZGVlcE1lcmdlT3B0aW9ucyhzZXRUaW1lWm9uZUluT3B0aW9ucyhtZkZvcm1hdHMuZGF0ZSwgdGltZVpvbmUpLCBzZXRUaW1lWm9uZUluT3B0aW9ucyhmMS5kYXRlIHx8IHt9LCB0aW1lWm9uZSkpLCB0aW1lOiBkZWVwTWVyZ2VPcHRpb25zKHNldFRpbWVab25lSW5PcHRpb25zKG1mRm9ybWF0cy50aW1lLCB0aW1lWm9uZSksIHNldFRpbWVab25lSW5PcHRpb25zKGYxLnRpbWUgfHwge30sIHRpbWVab25lKSkgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShfYSwgc3RhdGUsIG1lc3NhZ2VEZXNjcmlwdG9yLCB2YWx1ZXMsIG9wdHMpIHtcbiAgICB2YXIgbG9jYWxlID0gX2EubG9jYWxlLCBmb3JtYXRzID0gX2EuZm9ybWF0cywgbWVzc2FnZXMgPSBfYS5tZXNzYWdlcywgZGVmYXVsdExvY2FsZSA9IF9hLmRlZmF1bHRMb2NhbGUsIGRlZmF1bHRGb3JtYXRzID0gX2EuZGVmYXVsdEZvcm1hdHMsIG9uRXJyb3IgPSBfYS5vbkVycm9yLCB0aW1lWm9uZSA9IF9hLnRpbWVab25lLCBkZWZhdWx0UmljaFRleHRFbGVtZW50cyA9IF9hLmRlZmF1bHRSaWNoVGV4dEVsZW1lbnRzO1xuICAgIGlmIChtZXNzYWdlRGVzY3JpcHRvciA9PT0gdm9pZCAwKSB7IG1lc3NhZ2VEZXNjcmlwdG9yID0geyBpZDogJycgfTsgfVxuICAgIHZhciBtc2dJZCA9IG1lc3NhZ2VEZXNjcmlwdG9yLmlkLCBkZWZhdWx0TWVzc2FnZSA9IG1lc3NhZ2VEZXNjcmlwdG9yLmRlZmF1bHRNZXNzYWdlO1xuICAgIC8vIGBpZGAgaXMgYSByZXF1aXJlZCBmaWVsZCBvZiBhIE1lc3NhZ2UgRGVzY3JpcHRvci5cbiAgICBpbnZhcmlhbnQoISFtc2dJZCwgXCJbQGZvcm1hdGpzL2ludGxdIEFuIGBpZGAgbXVzdCBiZSBwcm92aWRlZCB0byBmb3JtYXQgYSBtZXNzYWdlLiBZb3UgY2FuIGVpdGhlcjpcXG4xLiBDb25maWd1cmUgeW91ciBidWlsZCB0b29sY2hhaW4gd2l0aCBbYmFiZWwtcGx1Z2luLWZvcm1hdGpzXShodHRwczovL2Zvcm1hdGpzLmlvL2RvY3MvdG9vbGluZy9iYWJlbC1wbHVnaW4pXFxub3IgW0Bmb3JtYXRqcy90cy10cmFuc2Zvcm1lcl0oaHR0cHM6Ly9mb3JtYXRqcy5pby9kb2NzL3Rvb2xpbmcvdHMtdHJhbnNmb3JtZXIpIE9SXFxuMi4gQ29uZmlndXJlIHlvdXIgYGVzbGludGAgY29uZmlnIHRvIGluY2x1ZGUgW2VzbGludC1wbHVnaW4tZm9ybWF0anNdKGh0dHBzOi8vZm9ybWF0anMuaW8vZG9jcy90b29saW5nL2xpbnRlciNlbmZvcmNlLWlkKVxcbnRvIGF1dG9maXggdGhpcyBpc3N1ZVwiKTtcbiAgICB2YXIgaWQgPSBTdHJpbmcobXNnSWQpO1xuICAgIHZhciBtZXNzYWdlID0gXG4gICAgLy8gSW4gY2FzZSBtZXNzYWdlcyBpcyBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgLy8gZS5nIGltcG9ydCgnZm9vLmpzb24nKSBmcm9tIHdlYnBhY2spXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JtYXRqcy9mb3JtYXRqcy9pc3N1ZXMvMTkxNFxuICAgIG1lc3NhZ2VzICYmXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgaWQpICYmXG4gICAgICAgIG1lc3NhZ2VzW2lkXTtcbiAgICAvLyBJTVBPUlRBTlQ6IEhvdCBwYXRoIGlmIGBtZXNzYWdlYCBpcyBBU1Qgd2l0aCBhIHNpbmdsZSBsaXRlcmFsIG5vZGVcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtZXNzYWdlKSAmJlxuICAgICAgICBtZXNzYWdlLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICBtZXNzYWdlWzBdLnR5cGUgPT09IFRZUEUubGl0ZXJhbCkge1xuICAgICAgICByZXR1cm4gbWVzc2FnZVswXS52YWx1ZTtcbiAgICB9XG4gICAgLy8gSU1QT1JUQU5UOiBIb3QgcGF0aCBzdHJhaWdodCBsb29rdXAgZm9yIHBlcmZvcm1hbmNlXG4gICAgaWYgKCF2YWx1ZXMgJiZcbiAgICAgICAgbWVzc2FnZSAmJlxuICAgICAgICB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgIWRlZmF1bHRSaWNoVGV4dEVsZW1lbnRzKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoLydcXHsoLio/KVxcfScvZ2ksIFwieyQxfVwiKTtcbiAgICB9XG4gICAgdmFsdWVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRSaWNoVGV4dEVsZW1lbnRzKSwgKHZhbHVlcyB8fCB7fSkpO1xuICAgIGZvcm1hdHMgPSBkZWVwTWVyZ2VGb3JtYXRzQW5kU2V0VGltZVpvbmUoZm9ybWF0cywgdGltZVpvbmUpO1xuICAgIGRlZmF1bHRGb3JtYXRzID0gZGVlcE1lcmdlRm9ybWF0c0FuZFNldFRpbWVab25lKGRlZmF1bHRGb3JtYXRzLCB0aW1lWm9uZSk7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIGlmICghZGVmYXVsdE1lc3NhZ2UgfHxcbiAgICAgICAgICAgIChsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCkgIT09IGRlZmF1bHRMb2NhbGUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgcHJldmVudHMgd2FybmluZ3MgZnJvbSBsaXR0ZXJpbmcgdGhlIGNvbnNvbGUgaW4gZGV2ZWxvcG1lbnRcbiAgICAgICAgICAgIC8vIHdoZW4gbm8gYG1lc3NhZ2VzYCBhcmUgcGFzc2VkIGludG8gdGhlIDxJbnRsUHJvdmlkZXI+IGZvciB0aGVcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgbG9jYWxlLlxuICAgICAgICAgICAgb25FcnJvcihuZXcgTWlzc2luZ1RyYW5zbGF0aW9uRXJyb3IobWVzc2FnZURlc2NyaXB0b3IsIGxvY2FsZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWZhdWx0TWVzc2FnZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gc3RhdGUuZ2V0TWVzc2FnZUZvcm1hdChkZWZhdWx0TWVzc2FnZSwgZGVmYXVsdExvY2FsZSwgZGVmYXVsdEZvcm1hdHMsIG9wdHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KHZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIG9uRXJyb3IobmV3IE1lc3NhZ2VGb3JtYXRFcnJvcihcIkVycm9yIGZvcm1hdHRpbmcgZGVmYXVsdCBtZXNzYWdlIGZvcjogXFxcIlwiICsgaWQgKyBcIlxcXCIsIHJlbmRlcmluZyBkZWZhdWx0IG1lc3NhZ2UgdmVyYmF0aW1cIiwgbG9jYWxlLCBtZXNzYWdlRGVzY3JpcHRvciwgZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZGVmYXVsdE1lc3NhZ2UgPT09ICdzdHJpbmcnID8gZGVmYXVsdE1lc3NhZ2UgOiBpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIC8vIFdlIGhhdmUgdGhlIHRyYW5zbGF0ZWQgbWVzc2FnZVxuICAgIHRyeSB7XG4gICAgICAgIHZhciBmb3JtYXR0ZXIgPSBzdGF0ZS5nZXRNZXNzYWdlRm9ybWF0KG1lc3NhZ2UsIGxvY2FsZSwgZm9ybWF0cywgX19hc3NpZ24oeyBmb3JtYXR0ZXJzOiBzdGF0ZSB9LCAob3B0cyB8fCB7fSkpKTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQodmFsdWVzKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgb25FcnJvcihuZXcgTWVzc2FnZUZvcm1hdEVycm9yKFwiRXJyb3IgZm9ybWF0dGluZyBtZXNzYWdlOiBcXFwiXCIgKyBpZCArIFwiXFxcIiwgdXNpbmcgXCIgKyAoZGVmYXVsdE1lc3NhZ2UgPyAnZGVmYXVsdCBtZXNzYWdlJyA6ICdpZCcpICsgXCIgYXMgZmFsbGJhY2suXCIsIGxvY2FsZSwgbWVzc2FnZURlc2NyaXB0b3IsIGUpKTtcbiAgICB9XG4gICAgaWYgKGRlZmF1bHRNZXNzYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gc3RhdGUuZ2V0TWVzc2FnZUZvcm1hdChkZWZhdWx0TWVzc2FnZSwgZGVmYXVsdExvY2FsZSwgZGVmYXVsdEZvcm1hdHMsIG9wdHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQodmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgb25FcnJvcihuZXcgTWVzc2FnZUZvcm1hdEVycm9yKFwiRXJyb3IgZm9ybWF0dGluZyB0aGUgZGVmYXVsdCBtZXNzYWdlIGZvcjogXFxcIlwiICsgaWQgKyBcIlxcXCIsIHJlbmRlcmluZyBtZXNzYWdlIHZlcmJhdGltXCIsIGxvY2FsZSwgbWVzc2FnZURlc2NyaXB0b3IsIGUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRlZmF1bHRNZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdE1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiBpZDtcbn1cbiIsImltcG9ydCB7IGdldE5hbWVkRm9ybWF0LCBmaWx0ZXJQcm9wcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgSW50bEVycm9yLCBJbnRsRXJyb3JDb2RlIH0gZnJvbSAnLi9lcnJvcic7XG52YXIgTlVNQkVSX0ZPUk1BVF9PUFRJT05TID0gW1xuICAgICdsb2NhbGVNYXRjaGVyJyxcbiAgICAnc3R5bGUnLFxuICAgICdjdXJyZW5jeScsXG4gICAgJ2N1cnJlbmN5RGlzcGxheScsXG4gICAgJ3VuaXQnLFxuICAgICd1bml0RGlzcGxheScsXG4gICAgJ3VzZUdyb3VwaW5nJyxcbiAgICAnbWluaW11bUludGVnZXJEaWdpdHMnLFxuICAgICdtaW5pbXVtRnJhY3Rpb25EaWdpdHMnLFxuICAgICdtYXhpbXVtRnJhY3Rpb25EaWdpdHMnLFxuICAgICdtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHMnLFxuICAgICdtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMnLFxuICAgIC8vIEVTMjAyMCBOdW1iZXJGb3JtYXRcbiAgICAnY29tcGFjdERpc3BsYXknLFxuICAgICdjdXJyZW5jeURpc3BsYXknLFxuICAgICdjdXJyZW5jeVNpZ24nLFxuICAgICdub3RhdGlvbicsXG4gICAgJ3NpZ25EaXNwbGF5JyxcbiAgICAndW5pdCcsXG4gICAgJ3VuaXREaXNwbGF5JyxcbiAgICAnbnVtYmVyaW5nU3lzdGVtJyxcbl07XG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVyKF9hLCBnZXROdW1iZXJGb3JtYXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgbG9jYWxlID0gX2EubG9jYWxlLCBmb3JtYXRzID0gX2EuZm9ybWF0cywgb25FcnJvciA9IF9hLm9uRXJyb3I7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQ7XG4gICAgdmFyIGRlZmF1bHRzID0gKChmb3JtYXQgJiZcbiAgICAgICAgZ2V0TmFtZWRGb3JtYXQoZm9ybWF0cywgJ251bWJlcicsIGZvcm1hdCwgb25FcnJvcikpIHx8XG4gICAgICAgIHt9KTtcbiAgICB2YXIgZmlsdGVyZWRPcHRpb25zID0gZmlsdGVyUHJvcHMob3B0aW9ucywgTlVNQkVSX0ZPUk1BVF9PUFRJT05TLCBkZWZhdWx0cyk7XG4gICAgcmV0dXJuIGdldE51bWJlckZvcm1hdChsb2NhbGUsIGZpbHRlcmVkT3B0aW9ucyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyKGNvbmZpZywgZ2V0TnVtYmVyRm9ybWF0LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGdldEZvcm1hdHRlcihjb25maWcsIGdldE51bWJlckZvcm1hdCwgb3B0aW9ucykuZm9ybWF0KHZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uZmlnLm9uRXJyb3IobmV3IEludGxFcnJvcihJbnRsRXJyb3JDb2RlLkZPUk1BVF9FUlJPUiwgJ0Vycm9yIGZvcm1hdHRpbmcgbnVtYmVyLicsIGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyVG9QYXJ0cyhjb25maWcsIGdldE51bWJlckZvcm1hdCwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBnZXRGb3JtYXR0ZXIoY29uZmlnLCBnZXROdW1iZXJGb3JtYXQsIG9wdGlvbnMpLmZvcm1hdFRvUGFydHModmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25maWcub25FcnJvcihuZXcgSW50bEVycm9yKEludGxFcnJvckNvZGUuRk9STUFUX0VSUk9SLCAnRXJyb3IgZm9ybWF0dGluZyBudW1iZXIuJywgZSkpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59XG4iLCJpbXBvcnQgeyBmaWx0ZXJQcm9wcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2FnZUZvcm1hdEVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBFcnJvckNvZGUsIEZvcm1hdEVycm9yIH0gZnJvbSAnaW50bC1tZXNzYWdlZm9ybWF0JztcbnZhciBQTFVSQUxfRk9STUFUX09QVElPTlMgPSBbXG4gICAgJ2xvY2FsZU1hdGNoZXInLFxuICAgICd0eXBlJyxcbl07XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGx1cmFsKF9hLCBnZXRQbHVyYWxSdWxlcywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgbG9jYWxlID0gX2EubG9jYWxlLCBvbkVycm9yID0gX2Eub25FcnJvcjtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghSW50bC5QbHVyYWxSdWxlcykge1xuICAgICAgICBvbkVycm9yKG5ldyBGb3JtYXRFcnJvcihcIkludGwuUGx1cmFsUnVsZXMgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50LlxcblRyeSBwb2x5ZmlsbGluZyBpdCB1c2luZyBcXFwiQGZvcm1hdGpzL2ludGwtcGx1cmFscnVsZXNcXFwiXFxuXCIsIEVycm9yQ29kZS5NSVNTSU5HX0lOVExfQVBJKSk7XG4gICAgfVxuICAgIHZhciBmaWx0ZXJlZE9wdGlvbnMgPSBmaWx0ZXJQcm9wcyhvcHRpb25zLCBQTFVSQUxfRk9STUFUX09QVElPTlMpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBnZXRQbHVyYWxSdWxlcyhsb2NhbGUsIGZpbHRlcmVkT3B0aW9ucykuc2VsZWN0KHZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgb25FcnJvcihuZXcgTWVzc2FnZUZvcm1hdEVycm9yKCdFcnJvciBmb3JtYXR0aW5nIHBsdXJhbC4nLCBlKSk7XG4gICAgfVxuICAgIHJldHVybiAnb3RoZXInO1xufVxuIiwiaW1wb3J0IHsgZ2V0TmFtZWRGb3JtYXQsIGZpbHRlclByb3BzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBGb3JtYXRFcnJvciwgRXJyb3JDb2RlIH0gZnJvbSAnaW50bC1tZXNzYWdlZm9ybWF0JztcbmltcG9ydCB7IE1lc3NhZ2VGb3JtYXRFcnJvciB9IGZyb20gJy4vZXJyb3InO1xudmFyIFJFTEFUSVZFX1RJTUVfRk9STUFUX09QVElPTlMgPSBbJ251bWVyaWMnLCAnc3R5bGUnXTtcbmZ1bmN0aW9uIGdldEZvcm1hdHRlcihfYSwgZ2V0UmVsYXRpdmVUaW1lRm9ybWF0LCBvcHRpb25zKSB7XG4gICAgdmFyIGxvY2FsZSA9IF9hLmxvY2FsZSwgZm9ybWF0cyA9IF9hLmZvcm1hdHMsIG9uRXJyb3IgPSBfYS5vbkVycm9yO1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0O1xuICAgIHZhciBkZWZhdWx0cyA9ICghIWZvcm1hdCAmJiBnZXROYW1lZEZvcm1hdChmb3JtYXRzLCAncmVsYXRpdmUnLCBmb3JtYXQsIG9uRXJyb3IpKSB8fCB7fTtcbiAgICB2YXIgZmlsdGVyZWRPcHRpb25zID0gZmlsdGVyUHJvcHMob3B0aW9ucywgUkVMQVRJVkVfVElNRV9GT1JNQVRfT1BUSU9OUywgZGVmYXVsdHMpO1xuICAgIHJldHVybiBnZXRSZWxhdGl2ZVRpbWVGb3JtYXQobG9jYWxlLCBmaWx0ZXJlZE9wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlVGltZShjb25maWcsIGdldFJlbGF0aXZlVGltZUZvcm1hdCwgdmFsdWUsIHVuaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIGlmICghdW5pdCkge1xuICAgICAgICB1bml0ID0gJ3NlY29uZCc7XG4gICAgfVxuICAgIHZhciBSZWxhdGl2ZVRpbWVGb3JtYXQgPSBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdDtcbiAgICBpZiAoIVJlbGF0aXZlVGltZUZvcm1hdCkge1xuICAgICAgICBjb25maWcub25FcnJvcihuZXcgRm9ybWF0RXJyb3IoXCJJbnRsLlJlbGF0aXZlVGltZUZvcm1hdCBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQuXFxuVHJ5IHBvbHlmaWxsaW5nIGl0IHVzaW5nIFxcXCJAZm9ybWF0anMvaW50bC1yZWxhdGl2ZXRpbWVmb3JtYXRcXFwiXFxuXCIsIEVycm9yQ29kZS5NSVNTSU5HX0lOVExfQVBJKSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBnZXRGb3JtYXR0ZXIoY29uZmlnLCBnZXRSZWxhdGl2ZVRpbWVGb3JtYXQsIG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSwgdW5pdCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbmZpZy5vbkVycm9yKG5ldyBNZXNzYWdlRm9ybWF0RXJyb3IoJ0Vycm9yIGZvcm1hdHRpbmcgcmVsYXRpdmUgdGltZS4nLCBlKSk7XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xufVxuIiwiZXhwb3J0IHt9O1xuIiwiaW1wb3J0IHsgX19hc3NpZ24sIF9fc3ByZWFkQXJyYXkgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEludGxNZXNzYWdlRm9ybWF0IH0gZnJvbSAnaW50bC1tZXNzYWdlZm9ybWF0JztcbmltcG9ydCBtZW1vaXplLCB7IHN0cmF0ZWdpZXMgfSBmcm9tICdAZm9ybWF0anMvZmFzdC1tZW1vaXplJztcbmltcG9ydCB7IFVuc3VwcG9ydGVkRm9ybWF0dGVyRXJyb3IgfSBmcm9tICcuL2Vycm9yJztcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJQcm9wcyhwcm9wcywgd2hpdGVsaXN0LCBkZWZhdWx0cykge1xuICAgIGlmIChkZWZhdWx0cyA9PT0gdm9pZCAwKSB7IGRlZmF1bHRzID0ge307IH1cbiAgICByZXR1cm4gd2hpdGVsaXN0LnJlZHVjZShmdW5jdGlvbiAoZmlsdGVyZWQsIG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkW25hbWVdID0gcHJvcHNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgZmlsdGVyZWRbbmFtZV0gPSBkZWZhdWx0c1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgfSwge30pO1xufVxudmFyIGRlZmF1bHRFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59O1xuZXhwb3J0IHZhciBERUZBVUxUX0lOVExfQ09ORklHID0ge1xuICAgIGZvcm1hdHM6IHt9LFxuICAgIG1lc3NhZ2VzOiB7fSxcbiAgICB0aW1lWm9uZTogdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRMb2NhbGU6ICdlbicsXG4gICAgZGVmYXVsdEZvcm1hdHM6IHt9LFxuICAgIG9uRXJyb3I6IGRlZmF1bHRFcnJvckhhbmRsZXIsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludGxDYWNoZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRlVGltZToge30sXG4gICAgICAgIG51bWJlcjoge30sXG4gICAgICAgIG1lc3NhZ2U6IHt9LFxuICAgICAgICByZWxhdGl2ZVRpbWU6IHt9LFxuICAgICAgICBwbHVyYWxSdWxlczoge30sXG4gICAgICAgIGxpc3Q6IHt9LFxuICAgICAgICBkaXNwbGF5TmFtZXM6IHt9LFxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVGYXN0TWVtb2l6ZUNhY2hlKHN0b3JlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhczogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5IGluIHN0b3JlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZVtrZXldO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGludGwgZm9ybWF0dGVycyBhbmQgcG9wdWxhdGUgY2FjaGVcbiAqIEBwYXJhbSBjYWNoZSBleHBsaWNpdCBjYWNoZSB0byBwcmV2ZW50IGxlYWtpbmcgbWVtb3J5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtYXR0ZXJzKGNhY2hlKSB7XG4gICAgaWYgKGNhY2hlID09PSB2b2lkIDApIHsgY2FjaGUgPSBjcmVhdGVJbnRsQ2FjaGUoKTsgfVxuICAgIHZhciBSZWxhdGl2ZVRpbWVGb3JtYXQgPSBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdDtcbiAgICB2YXIgTGlzdEZvcm1hdCA9IEludGwuTGlzdEZvcm1hdDtcbiAgICB2YXIgRGlzcGxheU5hbWVzID0gSW50bC5EaXNwbGF5TmFtZXM7XG4gICAgdmFyIGdldERhdGVUaW1lRm9ybWF0ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3ICgoX2EgPSBJbnRsLkRhdGVUaW1lRm9ybWF0KS5iaW5kLmFwcGx5KF9hLCBfX3NwcmVhZEFycmF5KFt2b2lkIDBdLCBhcmdzKSkpKCk7XG4gICAgfSwge1xuICAgICAgICBjYWNoZTogY3JlYXRlRmFzdE1lbW9pemVDYWNoZShjYWNoZS5kYXRlVGltZSksXG4gICAgICAgIHN0cmF0ZWd5OiBzdHJhdGVnaWVzLnZhcmlhZGljLFxuICAgIH0pO1xuICAgIHZhciBnZXROdW1iZXJGb3JtYXQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgKChfYSA9IEludGwuTnVtYmVyRm9ybWF0KS5iaW5kLmFwcGx5KF9hLCBfX3NwcmVhZEFycmF5KFt2b2lkIDBdLCBhcmdzKSkpKCk7XG4gICAgfSwge1xuICAgICAgICBjYWNoZTogY3JlYXRlRmFzdE1lbW9pemVDYWNoZShjYWNoZS5udW1iZXIpLFxuICAgICAgICBzdHJhdGVneTogc3RyYXRlZ2llcy52YXJpYWRpYyxcbiAgICB9KTtcbiAgICB2YXIgZ2V0UGx1cmFsUnVsZXMgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgKChfYSA9IEludGwuUGx1cmFsUnVsZXMpLmJpbmQuYXBwbHkoX2EsIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyZ3MpKSkoKTtcbiAgICB9LCB7XG4gICAgICAgIGNhY2hlOiBjcmVhdGVGYXN0TWVtb2l6ZUNhY2hlKGNhY2hlLnBsdXJhbFJ1bGVzKSxcbiAgICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWdpZXMudmFyaWFkaWMsXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0RGF0ZVRpbWVGb3JtYXQ6IGdldERhdGVUaW1lRm9ybWF0LFxuICAgICAgICBnZXROdW1iZXJGb3JtYXQ6IGdldE51bWJlckZvcm1hdCxcbiAgICAgICAgZ2V0TWVzc2FnZUZvcm1hdDogbWVtb2l6ZShmdW5jdGlvbiAobWVzc2FnZSwgbG9jYWxlcywgb3ZlcnJpZGVGb3JtYXRzLCBvcHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludGxNZXNzYWdlRm9ybWF0KG1lc3NhZ2UsIGxvY2FsZXMsIG92ZXJyaWRlRm9ybWF0cywgX19hc3NpZ24oeyBmb3JtYXR0ZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGdldE51bWJlckZvcm1hdDogZ2V0TnVtYmVyRm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICBnZXREYXRlVGltZUZvcm1hdDogZ2V0RGF0ZVRpbWVGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIGdldFBsdXJhbFJ1bGVzOiBnZXRQbHVyYWxSdWxlcyxcbiAgICAgICAgICAgICAgICB9IH0sIChvcHRzIHx8IHt9KSkpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjYWNoZTogY3JlYXRlRmFzdE1lbW9pemVDYWNoZShjYWNoZS5tZXNzYWdlKSxcbiAgICAgICAgICAgIHN0cmF0ZWd5OiBzdHJhdGVnaWVzLnZhcmlhZGljLFxuICAgICAgICB9KSxcbiAgICAgICAgZ2V0UmVsYXRpdmVUaW1lRm9ybWF0OiBtZW1vaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgKFJlbGF0aXZlVGltZUZvcm1hdC5iaW5kLmFwcGx5KFJlbGF0aXZlVGltZUZvcm1hdCwgX19zcHJlYWRBcnJheShbdm9pZCAwXSwgYXJncykpKSgpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjYWNoZTogY3JlYXRlRmFzdE1lbW9pemVDYWNoZShjYWNoZS5yZWxhdGl2ZVRpbWUpLFxuICAgICAgICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWdpZXMudmFyaWFkaWMsXG4gICAgICAgIH0pLFxuICAgICAgICBnZXRQbHVyYWxSdWxlczogZ2V0UGx1cmFsUnVsZXMsXG4gICAgICAgIGdldExpc3RGb3JtYXQ6IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyAoTGlzdEZvcm1hdC5iaW5kLmFwcGx5KExpc3RGb3JtYXQsIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyZ3MpKSkoKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY2FjaGU6IGNyZWF0ZUZhc3RNZW1vaXplQ2FjaGUoY2FjaGUubGlzdCksXG4gICAgICAgICAgICBzdHJhdGVneTogc3RyYXRlZ2llcy52YXJpYWRpYyxcbiAgICAgICAgfSksXG4gICAgICAgIGdldERpc3BsYXlOYW1lczogbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IChEaXNwbGF5TmFtZXMuYmluZC5hcHBseShEaXNwbGF5TmFtZXMsIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyZ3MpKSkoKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY2FjaGU6IGNyZWF0ZUZhc3RNZW1vaXplQ2FjaGUoY2FjaGUuZGlzcGxheU5hbWVzKSxcbiAgICAgICAgICAgIHN0cmF0ZWd5OiBzdHJhdGVnaWVzLnZhcmlhZGljLFxuICAgICAgICB9KSxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVkRm9ybWF0KGZvcm1hdHMsIHR5cGUsIG5hbWUsIG9uRXJyb3IpIHtcbiAgICB2YXIgZm9ybWF0VHlwZSA9IGZvcm1hdHMgJiYgZm9ybWF0c1t0eXBlXTtcbiAgICB2YXIgZm9ybWF0O1xuICAgIGlmIChmb3JtYXRUeXBlKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdFR5cGVbbmFtZV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG4gICAgb25FcnJvcihuZXcgVW5zdXBwb3J0ZWRGb3JtYXR0ZXJFcnJvcihcIk5vIFwiICsgdHlwZSArIFwiIGZvcm1hdCBuYW1lZDogXCIgKyBuYW1lKSk7XG59XG4iLCJpbXBvcnQgeyBJbnRsUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtaW50bFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vLyBpbXBvcnQgYWxsIGxvY2FsZXMgdGhyb3VnaCBiYXJyZWwgZmlsZVxuLy8gaW1wb3J0ICogYXMgbG9jYWxlcyAgZnJvbSBcIi4uL2NvbnRlbnQvbG9jYWxlXCI7XG5pbXBvcnQgeyBlbiwgaHUgfSBmcm9tIFwiLi4vY29udGVudC9sb2NhbGVcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBsb2NhbGUsIGRlZmF1bHRMb2NhbGUsIHBhdGhuYW1lIH0gPSByb3V0ZXI7XG5cbiAgY29uc3QgbWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB9ID0ge1xuICAgIGVuOiB7XG4gICAgICBCQVNJQzogXCJCYXNpYyBzZW50ZW5jZVwiLFxuICAgICAgR1JFRVRJTkc6IFwiSGVsbG8ge25hbWV9ICA8c3Ryb25nPiBzdHJvbmc8L3N0cm9uZz5cIixcbiAgICAgIFBMVVJBTDpcbiAgICAgICAgXCJUaGlzIHdpbGwgYmUgcGx1cmFsIDp7YW1vdW50LCBwbHVyYWwsID0wIHtubyBsYW5ndWFnZXN9IG9uZSB7IyBvbmUgbGFuZ3VhZ2V9ICBvdGhlciB7IyBsYW5ndWFnZXN9fVwiLFxuICAgICAgRlVOQzogXCJmw7xnZ3bDqW55IDxiPiB0YWctZWxcIixcbiAgICAgIFNXSVRDSDpcbiAgICAgICAgXCJTd2l0Yzoge2dlbmRlciwgc2VsZWN0LG1hbGUge0hlfSBmZW1hbGUge1NoZX0gb3RoZXIge1RoZXl9IH0gd2lsbCByZXNwb25kIHNob3J0bHkuXCIsXG4gICAgfSxcbiAgICBodToge1xuICAgICAgQkFTSUM6IFwiQWxhcCBtb25kYXRcIixcbiAgICAgIEdSRUVUSU5HOiBcIlN6aWEge25hbWV9IDxzdHJvbmc+IGtpZW1lbHQ8L3N0cm9uZz5cIixcbiAgICAgIFBMVVJBTDpcbiAgICAgICAgXCJFeiBwbHVyYWwgbGVzeiB7YW1vdW50LCBwbHVyYWwsID0wIHtubyBsYW5ndWFnZXN9IG9uZSB7IyBlZ3kgbnllbHZ9IG90aGVyIHsjIG55ZWx2ZWt9fVwiLFxuICAgICAgRlVOQzogXCJGdW5jdGlvbiB3aXRoIDxiPiB0YWdcIixcbiAgICAgIFNXSVRDSDpcbiAgICAgICAgXCJTd2l0Yzoge2dlbmRlciwgc2VsZWN0LG1hbGUge8WQfSBmZW1hbGUge8WQfSBvdGhlciB7xZB9fSBoYW1hcm9zYW4gdsOhbGFzem9sLlwiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgbG9jYWwgPSBsb2NhbGUgPyBsb2NhbGUgOiBcImh1XCI7XG5cbiAgY29uc3QgbWVzcyA9IG1lc3NhZ2VzW2xvY2FsLnRvU3RyaW5nKCldO1xuICByZXR1cm4gKFxuICAgIDxJbnRsUHJvdmlkZXIgbG9jYWxlPXtsb2NhbH0gZGVmYXVsdExvY2FsZT17XCJlblwifSBtZXNzYWdlcz17bWVzc30+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9JbnRsUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiovXG5pbXBvcnQgeyBJbnRsTWVzc2FnZUZvcm1hdCB9IGZyb20gJy4vc3JjL2NvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZm9ybWF0dGVycyc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9jb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2Vycm9yJztcbmV4cG9ydCBkZWZhdWx0IEludGxNZXNzYWdlRm9ybWF0O1xuIiwiLypcbkNvcHlyaWdodCAoYykgMjAxNCwgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkNvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS5cblNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4qL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fc3ByZWFkQXJyYXkgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnQGZvcm1hdGpzL2ljdS1tZXNzYWdlZm9ybWF0LXBhcnNlcic7XG5pbXBvcnQgbWVtb2l6ZSwgeyBzdHJhdGVnaWVzIH0gZnJvbSAnQGZvcm1hdGpzL2Zhc3QtbWVtb2l6ZSc7XG5pbXBvcnQgeyBmb3JtYXRUb1BhcnRzLCBQQVJUX1RZUEUsIH0gZnJvbSAnLi9mb3JtYXR0ZXJzJztcbi8vIC0tIE1lc3NhZ2VGb3JtYXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIG1lcmdlQ29uZmlnKGMxLCBjMikge1xuICAgIGlmICghYzIpIHtcbiAgICAgICAgcmV0dXJuIGMxO1xuICAgIH1cbiAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIChjMSB8fCB7fSkpLCAoYzIgfHwge30pKSwgT2JqZWN0LmtleXMoYzEpLnJlZHVjZShmdW5jdGlvbiAoYWxsLCBrKSB7XG4gICAgICAgIGFsbFtrXSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjMVtrXSksIChjMltrXSB8fCB7fSkpO1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgIH0sIHt9KSk7XG59XG5mdW5jdGlvbiBtZXJnZUNvbmZpZ3MoZGVmYXVsdENvbmZpZywgY29uZmlncykge1xuICAgIGlmICghY29uZmlncykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZmF1bHRDb25maWcpLnJlZHVjZShmdW5jdGlvbiAoYWxsLCBrKSB7XG4gICAgICAgIGFsbFtrXSA9IG1lcmdlQ29uZmlnKGRlZmF1bHRDb25maWdba10sIGNvbmZpZ3Nba10pO1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgIH0sIF9fYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVGYXN0TWVtb2l6ZUNhY2hlKHN0b3JlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhczogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5IGluIHN0b3JlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZVtrZXldO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRGb3JtYXR0ZXJzKGNhY2hlKSB7XG4gICAgaWYgKGNhY2hlID09PSB2b2lkIDApIHsgY2FjaGUgPSB7XG4gICAgICAgIG51bWJlcjoge30sXG4gICAgICAgIGRhdGVUaW1lOiB7fSxcbiAgICAgICAgcGx1cmFsUnVsZXM6IHt9LFxuICAgIH07IH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROdW1iZXJGb3JtYXQ6IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyAoKF9hID0gSW50bC5OdW1iZXJGb3JtYXQpLmJpbmQuYXBwbHkoX2EsIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyZ3MpKSkoKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY2FjaGU6IGNyZWF0ZUZhc3RNZW1vaXplQ2FjaGUoY2FjaGUubnVtYmVyKSxcbiAgICAgICAgICAgIHN0cmF0ZWd5OiBzdHJhdGVnaWVzLnZhcmlhZGljLFxuICAgICAgICB9KSxcbiAgICAgICAgZ2V0RGF0ZVRpbWVGb3JtYXQ6IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyAoKF9hID0gSW50bC5EYXRlVGltZUZvcm1hdCkuYmluZC5hcHBseShfYSwgX19zcHJlYWRBcnJheShbdm9pZCAwXSwgYXJncykpKSgpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjYWNoZTogY3JlYXRlRmFzdE1lbW9pemVDYWNoZShjYWNoZS5kYXRlVGltZSksXG4gICAgICAgICAgICBzdHJhdGVneTogc3RyYXRlZ2llcy52YXJpYWRpYyxcbiAgICAgICAgfSksXG4gICAgICAgIGdldFBsdXJhbFJ1bGVzOiBtZW1vaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgKChfYSA9IEludGwuUGx1cmFsUnVsZXMpLmJpbmQuYXBwbHkoX2EsIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyZ3MpKSkoKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY2FjaGU6IGNyZWF0ZUZhc3RNZW1vaXplQ2FjaGUoY2FjaGUucGx1cmFsUnVsZXMpLFxuICAgICAgICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWdpZXMudmFyaWFkaWMsXG4gICAgICAgIH0pLFxuICAgIH07XG59XG52YXIgSW50bE1lc3NhZ2VGb3JtYXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW50bE1lc3NhZ2VGb3JtYXQobWVzc2FnZSwgbG9jYWxlcywgb3ZlcnJpZGVGb3JtYXRzLCBvcHRzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChsb2NhbGVzID09PSB2b2lkIDApIHsgbG9jYWxlcyA9IEludGxNZXNzYWdlRm9ybWF0LmRlZmF1bHRMb2NhbGU7IH1cbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJDYWNoZSA9IHtcbiAgICAgICAgICAgIG51bWJlcjoge30sXG4gICAgICAgICAgICBkYXRlVGltZToge30sXG4gICAgICAgICAgICBwbHVyYWxSdWxlczoge30sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gX3RoaXMuZm9ybWF0VG9QYXJ0cyh2YWx1ZXMpO1xuICAgICAgICAgICAgLy8gSG90IHBhdGggZm9yIHN0cmFpZ2h0IHNpbXBsZSBtc2cgdHJhbnNsYXRpb25zXG4gICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnRzWzBdLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnRzLnJlZHVjZShmdW5jdGlvbiAoYWxsLCBwYXJ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhbGwubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgICAgIHBhcnQudHlwZSAhPT0gUEFSVF9UWVBFLmxpdGVyYWwgfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGFsbFthbGwubGVuZ3RoIC0gMV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbC5wdXNoKHBhcnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsW2FsbC5sZW5ndGggLSAxXSArPSBwYXJ0LnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRbMF0gfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZvcm1hdFRvUGFydHMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0VG9QYXJ0cyhfdGhpcy5hc3QsIF90aGlzLmxvY2FsZXMsIF90aGlzLmZvcm1hdHRlcnMsIF90aGlzLmZvcm1hdHMsIHZhbHVlcywgdW5kZWZpbmVkLCBfdGhpcy5tZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZXNvbHZlZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgbG9jYWxlOiBJbnRsLk51bWJlckZvcm1hdC5zdXBwb3J0ZWRMb2NhbGVzT2YoX3RoaXMubG9jYWxlcylbMF0sXG4gICAgICAgIH0pOyB9O1xuICAgICAgICB0aGlzLmdldEFzdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFzdDsgfTtcbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgICAgIGlmICghSW50bE1lc3NhZ2VGb3JtYXQuX19wYXJzZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludGxNZXNzYWdlRm9ybWF0Ll9fcGFyc2UgbXVzdCBiZSBzZXQgdG8gcHJvY2VzcyBgbWVzc2FnZWAgb2YgdHlwZSBgc3RyaW5nYCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUGFyc2Ugc3RyaW5nIG1lc3NhZ2VzIGludG8gYW4gQVNULlxuICAgICAgICAgICAgdGhpcy5hc3QgPSBJbnRsTWVzc2FnZUZvcm1hdC5fX3BhcnNlKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICBpZ25vcmVUYWc6IG9wdHMgPT09IG51bGwgfHwgb3B0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0cy5pZ25vcmVUYWcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXN0ID0gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5hc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG1lc3NhZ2UgbXVzdCBiZSBwcm92aWRlZCBhcyBhIFN0cmluZyBvciBBU1QuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGBmb3JtYXRzYCBtZXJnZWQgd2l0aCB0aGUgZGVmYXVsdFxuICAgICAgICAvLyBmb3JtYXRzLlxuICAgICAgICB0aGlzLmZvcm1hdHMgPSBtZXJnZUNvbmZpZ3MoSW50bE1lc3NhZ2VGb3JtYXQuZm9ybWF0cywgb3ZlcnJpZGVGb3JtYXRzKTtcbiAgICAgICAgLy8gRGVmaW5lZCBmaXJzdCBiZWNhdXNlIGl0J3MgdXNlZCB0byBidWlsZCB0aGUgZm9ybWF0IHBhdHRlcm4uXG4gICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgIHRoaXMuZm9ybWF0dGVycyA9XG4gICAgICAgICAgICAob3B0cyAmJiBvcHRzLmZvcm1hdHRlcnMpIHx8IGNyZWF0ZURlZmF1bHRGb3JtYXR0ZXJzKHRoaXMuZm9ybWF0dGVyQ2FjaGUpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW50bE1lc3NhZ2VGb3JtYXQsIFwiZGVmYXVsdExvY2FsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFJbnRsTWVzc2FnZUZvcm1hdC5tZW1vaXplZERlZmF1bHRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICBJbnRsTWVzc2FnZUZvcm1hdC5tZW1vaXplZERlZmF1bHRMb2NhbGUgPVxuICAgICAgICAgICAgICAgICAgICBuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gSW50bE1lc3NhZ2VGb3JtYXQubWVtb2l6ZWREZWZhdWx0TG9jYWxlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgSW50bE1lc3NhZ2VGb3JtYXQubWVtb2l6ZWREZWZhdWx0TG9jYWxlID0gbnVsbDtcbiAgICBJbnRsTWVzc2FnZUZvcm1hdC5fX3BhcnNlID0gcGFyc2U7XG4gICAgLy8gRGVmYXVsdCBmb3JtYXQgb3B0aW9ucyB1c2VkIGFzIHRoZSBwcm90b3R5cGUgb2YgdGhlIGBmb3JtYXRzYCBwcm92aWRlZCB0byB0aGVcbiAgICAvLyBjb25zdHJ1Y3Rvci4gVGhlc2UgYXJlIHVzZWQgd2hlbiBjb25zdHJ1Y3RpbmcgdGhlIGludGVybmFsIEludGwuTnVtYmVyRm9ybWF0XG4gICAgLy8gYW5kIEludGwuRGF0ZVRpbWVGb3JtYXQgaW5zdGFuY2VzLlxuICAgIEludGxNZXNzYWdlRm9ybWF0LmZvcm1hdHMgPSB7XG4gICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgaW50ZWdlcjoge1xuICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBlcmNlbnQ6IHtcbiAgICAgICAgICAgICAgICBzdHlsZTogJ3BlcmNlbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgc2hvcnQ6IHtcbiAgICAgICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIHllYXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZWRpdW06IHtcbiAgICAgICAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9uZzoge1xuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bGw6IHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICBzaG9ydDoge1xuICAgICAgICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZWRpdW06IHtcbiAgICAgICAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgc2Vjb25kOiAnbnVtZXJpYycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9uZzoge1xuICAgICAgICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVsbDoge1xuICAgICAgICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIEludGxNZXNzYWdlRm9ybWF0O1xufSgpKTtcbmV4cG9ydCB7IEludGxNZXNzYWdlRm9ybWF0IH07XG4iLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmV4cG9ydCB2YXIgRXJyb3JDb2RlO1xuKGZ1bmN0aW9uIChFcnJvckNvZGUpIHtcbiAgICAvLyBXaGVuIHdlIGhhdmUgYSBwbGFjZWhvbGRlciBidXQgbm8gdmFsdWUgdG8gZm9ybWF0XG4gICAgRXJyb3JDb2RlW1wiTUlTU0lOR19WQUxVRVwiXSA9IFwiTUlTU0lOR19WQUxVRVwiO1xuICAgIC8vIFdoZW4gdmFsdWUgc3VwcGxpZWQgaXMgaW52YWxpZFxuICAgIEVycm9yQ29kZVtcIklOVkFMSURfVkFMVUVcIl0gPSBcIklOVkFMSURfVkFMVUVcIjtcbiAgICAvLyBXaGVuIHdlIG5lZWQgc3BlY2lmaWMgSW50bCBBUEkgYnV0IGl0J3Mgbm90IGF2YWlsYWJsZVxuICAgIEVycm9yQ29kZVtcIk1JU1NJTkdfSU5UTF9BUElcIl0gPSBcIk1JU1NJTkdfSU5UTF9BUElcIjtcbn0pKEVycm9yQ29kZSB8fCAoRXJyb3JDb2RlID0ge30pKTtcbnZhciBGb3JtYXRFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRm9ybWF0RXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9ybWF0RXJyb3IobXNnLCBjb2RlLCBvcmlnaW5hbE1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbXNnKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgX3RoaXMub3JpZ2luYWxNZXNzYWdlID0gb3JpZ2luYWxNZXNzYWdlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEZvcm1hdEVycm9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiW2Zvcm1hdGpzIEVycm9yOiBcIiArIHRoaXMuY29kZSArIFwiXSBcIiArIHRoaXMubWVzc2FnZTtcbiAgICB9O1xuICAgIHJldHVybiBGb3JtYXRFcnJvcjtcbn0oRXJyb3IpKTtcbmV4cG9ydCB7IEZvcm1hdEVycm9yIH07XG52YXIgSW52YWxpZFZhbHVlRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEludmFsaWRWYWx1ZUVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludmFsaWRWYWx1ZUVycm9yKHZhcmlhYmxlSWQsIHZhbHVlLCBvcHRpb25zLCBvcmlnaW5hbE1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIFwiSW52YWxpZCB2YWx1ZXMgZm9yIFxcXCJcIiArIHZhcmlhYmxlSWQgKyBcIlxcXCI6IFxcXCJcIiArIHZhbHVlICsgXCJcXFwiLiBPcHRpb25zIGFyZSBcXFwiXCIgKyBPYmplY3Qua2V5cyhvcHRpb25zKS5qb2luKCdcIiwgXCInKSArIFwiXFxcIlwiLCBFcnJvckNvZGUuSU5WQUxJRF9WQUxVRSwgb3JpZ2luYWxNZXNzYWdlKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSW52YWxpZFZhbHVlRXJyb3I7XG59KEZvcm1hdEVycm9yKSk7XG5leHBvcnQgeyBJbnZhbGlkVmFsdWVFcnJvciB9O1xudmFyIEludmFsaWRWYWx1ZVR5cGVFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW52YWxpZFZhbHVlVHlwZUVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludmFsaWRWYWx1ZVR5cGVFcnJvcih2YWx1ZSwgdHlwZSwgb3JpZ2luYWxNZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBcIlZhbHVlIGZvciBcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIiBtdXN0IGJlIG9mIHR5cGUgXCIgKyB0eXBlLCBFcnJvckNvZGUuSU5WQUxJRF9WQUxVRSwgb3JpZ2luYWxNZXNzYWdlKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSW52YWxpZFZhbHVlVHlwZUVycm9yO1xufShGb3JtYXRFcnJvcikpO1xuZXhwb3J0IHsgSW52YWxpZFZhbHVlVHlwZUVycm9yIH07XG52YXIgTWlzc2luZ1ZhbHVlRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1pc3NpbmdWYWx1ZUVycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1pc3NpbmdWYWx1ZUVycm9yKHZhcmlhYmxlSWQsIG9yaWdpbmFsTWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgXCJUaGUgaW50bCBzdHJpbmcgY29udGV4dCB2YXJpYWJsZSBcXFwiXCIgKyB2YXJpYWJsZUlkICsgXCJcXFwiIHdhcyBub3QgcHJvdmlkZWQgdG8gdGhlIHN0cmluZyBcXFwiXCIgKyBvcmlnaW5hbE1lc3NhZ2UgKyBcIlxcXCJcIiwgRXJyb3JDb2RlLk1JU1NJTkdfVkFMVUUsIG9yaWdpbmFsTWVzc2FnZSkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIE1pc3NpbmdWYWx1ZUVycm9yO1xufShGb3JtYXRFcnJvcikpO1xuZXhwb3J0IHsgTWlzc2luZ1ZhbHVlRXJyb3IgfTtcbiIsImltcG9ydCB7IGlzQXJndW1lbnRFbGVtZW50LCBpc0RhdGVFbGVtZW50LCBpc0RhdGVUaW1lU2tlbGV0b24sIGlzTGl0ZXJhbEVsZW1lbnQsIGlzTnVtYmVyRWxlbWVudCwgaXNOdW1iZXJTa2VsZXRvbiwgaXNQbHVyYWxFbGVtZW50LCBpc1BvdW5kRWxlbWVudCwgaXNTZWxlY3RFbGVtZW50LCBpc1RpbWVFbGVtZW50LCBpc1RhZ0VsZW1lbnQsIH0gZnJvbSAnQGZvcm1hdGpzL2ljdS1tZXNzYWdlZm9ybWF0LXBhcnNlcic7XG5pbXBvcnQgeyBNaXNzaW5nVmFsdWVFcnJvciwgSW52YWxpZFZhbHVlRXJyb3IsIEVycm9yQ29kZSwgRm9ybWF0RXJyb3IsIEludmFsaWRWYWx1ZVR5cGVFcnJvciwgfSBmcm9tICcuL2Vycm9yJztcbmV4cG9ydCB2YXIgUEFSVF9UWVBFO1xuKGZ1bmN0aW9uIChQQVJUX1RZUEUpIHtcbiAgICBQQVJUX1RZUEVbUEFSVF9UWVBFW1wibGl0ZXJhbFwiXSA9IDBdID0gXCJsaXRlcmFsXCI7XG4gICAgUEFSVF9UWVBFW1BBUlRfVFlQRVtcIm9iamVjdFwiXSA9IDFdID0gXCJvYmplY3RcIjtcbn0pKFBBUlRfVFlQRSB8fCAoUEFSVF9UWVBFID0ge30pKTtcbmZ1bmN0aW9uIG1lcmdlTGl0ZXJhbChwYXJ0cykge1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBwYXJ0cztcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzLnJlZHVjZShmdW5jdGlvbiAoYWxsLCBwYXJ0KSB7XG4gICAgICAgIHZhciBsYXN0UGFydCA9IGFsbFthbGwubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICghbGFzdFBhcnQgfHxcbiAgICAgICAgICAgIGxhc3RQYXJ0LnR5cGUgIT09IFBBUlRfVFlQRS5saXRlcmFsIHx8XG4gICAgICAgICAgICBwYXJ0LnR5cGUgIT09IFBBUlRfVFlQRS5saXRlcmFsKSB7XG4gICAgICAgICAgICBhbGwucHVzaChwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RQYXJ0LnZhbHVlICs9IHBhcnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbDtcbiAgICB9LCBbXSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNGb3JtYXRYTUxFbGVtZW50Rm4oZWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIGVsID09PSAnZnVuY3Rpb24nO1xufVxuLy8gVE9ETyhza2VsZXRvbik6IGFkZCBza2VsZXRvbiBzdXBwb3J0XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VG9QYXJ0cyhlbHMsIGxvY2FsZXMsIGZvcm1hdHRlcnMsIGZvcm1hdHMsIHZhbHVlcywgY3VycmVudFBsdXJhbFZhbHVlLCBcbi8vIEZvciBkZWJ1Z2dpbmdcbm9yaWdpbmFsTWVzc2FnZSkge1xuICAgIC8vIEhvdCBwYXRoIGZvciBzdHJhaWdodCBzaW1wbGUgbXNnIHRyYW5zbGF0aW9uc1xuICAgIGlmIChlbHMubGVuZ3RoID09PSAxICYmIGlzTGl0ZXJhbEVsZW1lbnQoZWxzWzBdKSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFBBUlRfVFlQRS5saXRlcmFsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBlbHNbMF0udmFsdWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwLCBlbHNfMSA9IGVsczsgX2kgPCBlbHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGVsID0gZWxzXzFbX2ldO1xuICAgICAgICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmcgcGFydHMuXG4gICAgICAgIGlmIChpc0xpdGVyYWxFbGVtZW50KGVsKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFBBUlRfVFlQRS5saXRlcmFsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBlbC52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgcGFydCBiZSBsaXRlcmFsIHR5cGU/XG4gICAgICAgIC8vIFJlcGxhY2UgYCNgIGluIHBsdXJhbCBydWxlcyB3aXRoIHRoZSBhY3R1YWwgbnVtZXJpYyB2YWx1ZS5cbiAgICAgICAgaWYgKGlzUG91bmRFbGVtZW50KGVsKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50UGx1cmFsVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBQQVJUX1RZUEUubGl0ZXJhbCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdHRlcnMuZ2V0TnVtYmVyRm9ybWF0KGxvY2FsZXMpLmZvcm1hdChjdXJyZW50UGx1cmFsVmFsdWUpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhck5hbWUgPSBlbC52YWx1ZTtcbiAgICAgICAgLy8gRW5mb3JjZSB0aGF0IGFsbCByZXF1aXJlZCB2YWx1ZXMgYXJlIHByb3ZpZGVkIGJ5IHRoZSBjYWxsZXIuXG4gICAgICAgIGlmICghKHZhbHVlcyAmJiB2YXJOYW1lIGluIHZhbHVlcykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNaXNzaW5nVmFsdWVFcnJvcih2YXJOYW1lLCBvcmlnaW5hbE1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1t2YXJOYW1lXTtcbiAgICAgICAgaWYgKGlzQXJndW1lbnRFbGVtZW50KGVsKSkge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBTdHJpbmcodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBQQVJUX1RZUEUubGl0ZXJhbCA6IFBBUlRfVFlQRS5vYmplY3QsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWN1cnNpdmVseSBmb3JtYXQgcGx1cmFsIGFuZCBzZWxlY3QgcGFydHMnIG9wdGlvbiDigJQgd2hpY2ggY2FuIGJlIGFcbiAgICAgICAgLy8gbmVzdGVkIHBhdHRlcm4gc3RydWN0dXJlLiBUaGUgY2hvb3Npbmcgb2YgdGhlIG9wdGlvbiB0byB1c2UgaXNcbiAgICAgICAgLy8gYWJzdHJhY3RlZC1ieSBhbmQgZGVsZWdhdGVkLXRvIHRoZSBwYXJ0IGhlbHBlciBvYmplY3QuXG4gICAgICAgIGlmIChpc0RhdGVFbGVtZW50KGVsKSkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gdHlwZW9mIGVsLnN0eWxlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gZm9ybWF0cy5kYXRlW2VsLnN0eWxlXVxuICAgICAgICAgICAgICAgIDogaXNEYXRlVGltZVNrZWxldG9uKGVsLnN0eWxlKVxuICAgICAgICAgICAgICAgICAgICA/IGVsLnN0eWxlLnBhcnNlZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogUEFSVF9UWVBFLmxpdGVyYWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdHRlcnNcbiAgICAgICAgICAgICAgICAgICAgLmdldERhdGVUaW1lRm9ybWF0KGxvY2FsZXMsIHN0eWxlKVxuICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KHZhbHVlKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVGltZUVsZW1lbnQoZWwpKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB0eXBlb2YgZWwuc3R5bGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBmb3JtYXRzLnRpbWVbZWwuc3R5bGVdXG4gICAgICAgICAgICAgICAgOiBpc0RhdGVUaW1lU2tlbGV0b24oZWwuc3R5bGUpXG4gICAgICAgICAgICAgICAgICAgID8gZWwuc3R5bGUucGFyc2VkT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBQQVJUX1RZUEUubGl0ZXJhbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0dGVyc1xuICAgICAgICAgICAgICAgICAgICAuZ2V0RGF0ZVRpbWVGb3JtYXQobG9jYWxlcywgc3R5bGUpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtYXQodmFsdWUpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1iZXJFbGVtZW50KGVsKSkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gdHlwZW9mIGVsLnN0eWxlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gZm9ybWF0cy5udW1iZXJbZWwuc3R5bGVdXG4gICAgICAgICAgICAgICAgOiBpc051bWJlclNrZWxldG9uKGVsLnN0eWxlKVxuICAgICAgICAgICAgICAgICAgICA/IGVsLnN0eWxlLnBhcnNlZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoc3R5bGUgJiYgc3R5bGUuc2NhbGUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICpcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdHlsZS5zY2FsZSB8fCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBQQVJUX1RZUEUubGl0ZXJhbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0dGVyc1xuICAgICAgICAgICAgICAgICAgICAuZ2V0TnVtYmVyRm9ybWF0KGxvY2FsZXMsIHN0eWxlKVxuICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KHZhbHVlKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVGFnRWxlbWVudChlbCkpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuLCB2YWx1ZV8xID0gZWwudmFsdWU7XG4gICAgICAgICAgICB2YXIgZm9ybWF0Rm4gPSB2YWx1ZXNbdmFsdWVfMV07XG4gICAgICAgICAgICBpZiAoIWlzRm9ybWF0WE1MRWxlbWVudEZuKGZvcm1hdEZuKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkVmFsdWVUeXBlRXJyb3IodmFsdWVfMSwgJ2Z1bmN0aW9uJywgb3JpZ2luYWxNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGZvcm1hdFRvUGFydHMoY2hpbGRyZW4sIGxvY2FsZXMsIGZvcm1hdHRlcnMsIGZvcm1hdHMsIHZhbHVlcywgY3VycmVudFBsdXJhbFZhbHVlKTtcbiAgICAgICAgICAgIHZhciBjaHVua3MgPSBmb3JtYXRGbihwYXJ0cy5tYXAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHAudmFsdWU7IH0pKTtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjaHVua3MpKSB7XG4gICAgICAgICAgICAgICAgY2h1bmtzID0gW2NodW5rc107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaC5hcHBseShyZXN1bHQsIGNodW5rcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgPyBQQVJUX1RZUEUubGl0ZXJhbCA6IFBBUlRfVFlQRS5vYmplY3QsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU2VsZWN0RWxlbWVudChlbCkpIHtcbiAgICAgICAgICAgIHZhciBvcHQgPSBlbC5vcHRpb25zW3ZhbHVlXSB8fCBlbC5vcHRpb25zLm90aGVyO1xuICAgICAgICAgICAgaWYgKCFvcHQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZFZhbHVlRXJyb3IoZWwudmFsdWUsIHZhbHVlLCBPYmplY3Qua2V5cyhlbC5vcHRpb25zKSwgb3JpZ2luYWxNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoLmFwcGx5KHJlc3VsdCwgZm9ybWF0VG9QYXJ0cyhvcHQudmFsdWUsIGxvY2FsZXMsIGZvcm1hdHRlcnMsIGZvcm1hdHMsIHZhbHVlcykpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUGx1cmFsRWxlbWVudChlbCkpIHtcbiAgICAgICAgICAgIHZhciBvcHQgPSBlbC5vcHRpb25zW1wiPVwiICsgdmFsdWVdO1xuICAgICAgICAgICAgaWYgKCFvcHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUludGwuUGx1cmFsUnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEZvcm1hdEVycm9yKFwiSW50bC5QbHVyYWxSdWxlcyBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQuXFxuVHJ5IHBvbHlmaWxsaW5nIGl0IHVzaW5nIFxcXCJAZm9ybWF0anMvaW50bC1wbHVyYWxydWxlc1xcXCJcXG5cIiwgRXJyb3JDb2RlLk1JU1NJTkdfSU5UTF9BUEksIG9yaWdpbmFsTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBydWxlID0gZm9ybWF0dGVyc1xuICAgICAgICAgICAgICAgICAgICAuZ2V0UGx1cmFsUnVsZXMobG9jYWxlcywgeyB0eXBlOiBlbC5wbHVyYWxUeXBlIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3QodmFsdWUgLSAoZWwub2Zmc2V0IHx8IDApKTtcbiAgICAgICAgICAgICAgICBvcHQgPSBlbC5vcHRpb25zW3J1bGVdIHx8IGVsLm9wdGlvbnMub3RoZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW9wdCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkVmFsdWVFcnJvcihlbC52YWx1ZSwgdmFsdWUsIE9iamVjdC5rZXlzKGVsLm9wdGlvbnMpLCBvcmlnaW5hbE1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2guYXBwbHkocmVzdWx0LCBmb3JtYXRUb1BhcnRzKG9wdC52YWx1ZSwgbG9jYWxlcywgZm9ybWF0dGVycywgZm9ybWF0cywgdmFsdWVzLCB2YWx1ZSAtIChlbC5vZmZzZXQgfHwgMCkpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXJnZUxpdGVyYWwocmVzdWx0KTtcbn1cbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwLnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2dsb2JhbHMuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9nbG9iYWxzLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFVBQVU7RUFDVixTQUFTO0VBQ1Q7d0VBQ3NFO0FBQ3hFOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgeyBjcmVhdGVGb3JtYXR0ZWRDb21wb25lbnQsIGNyZWF0ZUZvcm1hdHRlZERhdGVUaW1lUGFydHNDb21wb25lbnQsIH0gZnJvbSAnLi9zcmMvY29tcG9uZW50cy9jcmVhdGVGb3JtYXR0ZWRDb21wb25lbnQnO1xuZXhwb3J0IHsgY3JlYXRlSW50bENhY2hlLCBVbnN1cHBvcnRlZEZvcm1hdHRlckVycm9yLCBJbnZhbGlkQ29uZmlnRXJyb3IsIE1pc3NpbmdEYXRhRXJyb3IsIE1lc3NhZ2VGb3JtYXRFcnJvciwgTWlzc2luZ1RyYW5zbGF0aW9uRXJyb3IsIEludGxFcnJvckNvZGUgYXMgUmVhY3RJbnRsRXJyb3JDb2RlLCBJbnRsRXJyb3IgYXMgUmVhY3RJbnRsRXJyb3IsIH0gZnJvbSAnQGZvcm1hdGpzL2ludGwnO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZU1lc3NhZ2VzKG1zZ3MpIHtcbiAgICByZXR1cm4gbXNncztcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVNZXNzYWdlKG1zZykge1xuICAgIHJldHVybiBtc2c7XG59XG5leHBvcnQgeyBkZWZhdWx0IGFzIGluamVjdEludGwsIFByb3ZpZGVyIGFzIFJhd0ludGxQcm92aWRlciwgQ29udGV4dCBhcyBJbnRsQ29udGV4dCwgfSBmcm9tICcuL3NyYy9jb21wb25lbnRzL2luamVjdEludGwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VJbnRsIH0gZnJvbSAnLi9zcmMvY29tcG9uZW50cy91c2VJbnRsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW50bFByb3ZpZGVyLCBjcmVhdGVJbnRsIH0gZnJvbSAnLi9zcmMvY29tcG9uZW50cy9wcm92aWRlcic7XG4vLyBJTVBPUlRBTlQ6IEV4cGxpY2l0IGhlcmUgdG8gcHJldmVudCBhcGktZXh0cmFjdG9yIGZyb20gb3V0cHV0aW5nIGBpbXBvcnQoJy4vc3JjL3R5cGVzJykuQ3VzdG9tRm9ybWF0Q29uZmlnYFxuZXhwb3J0IHZhciBGb3JtYXR0ZWREYXRlID0gY3JlYXRlRm9ybWF0dGVkQ29tcG9uZW50KCdmb3JtYXREYXRlJyk7XG5leHBvcnQgdmFyIEZvcm1hdHRlZFRpbWUgPSBjcmVhdGVGb3JtYXR0ZWRDb21wb25lbnQoJ2Zvcm1hdFRpbWUnKTtcbmV4cG9ydCB2YXIgRm9ybWF0dGVkTnVtYmVyID0gY3JlYXRlRm9ybWF0dGVkQ29tcG9uZW50KCdmb3JtYXROdW1iZXInKTtcbmV4cG9ydCB2YXIgRm9ybWF0dGVkTGlzdCA9IGNyZWF0ZUZvcm1hdHRlZENvbXBvbmVudCgnZm9ybWF0TGlzdCcpO1xuZXhwb3J0IHZhciBGb3JtYXR0ZWREaXNwbGF5TmFtZSA9IGNyZWF0ZUZvcm1hdHRlZENvbXBvbmVudCgnZm9ybWF0RGlzcGxheU5hbWUnKTtcbmV4cG9ydCB2YXIgRm9ybWF0dGVkRGF0ZVBhcnRzID0gY3JlYXRlRm9ybWF0dGVkRGF0ZVRpbWVQYXJ0c0NvbXBvbmVudCgnZm9ybWF0RGF0ZScpO1xuZXhwb3J0IHZhciBGb3JtYXR0ZWRUaW1lUGFydHMgPSBjcmVhdGVGb3JtYXR0ZWREYXRlVGltZVBhcnRzQ29tcG9uZW50KCdmb3JtYXRUaW1lJyk7XG5leHBvcnQgeyBGb3JtYXR0ZWROdW1iZXJQYXJ0cywgRm9ybWF0dGVkTGlzdFBhcnRzLCB9IGZyb20gJy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlRm9ybWF0dGVkQ29tcG9uZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9ybWF0dGVkUmVsYXRpdmVUaW1lIH0gZnJvbSAnLi9zcmMvY29tcG9uZW50cy9yZWxhdGl2ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvcm1hdHRlZFBsdXJhbCB9IGZyb20gJy4vc3JjL2NvbXBvbmVudHMvcGx1cmFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJy4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvcm1hdHRlZERhdGVUaW1lUmFuZ2UgfSBmcm9tICcuL3NyYy9jb21wb25lbnRzL2RhdGVUaW1lUmFuZ2UnO1xuIiwiaW1wb3J0IHsgX19yZXN0IH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSW50bCBmcm9tICcuL3VzZUludGwnO1xudmFyIERpc3BsYXlOYW1lO1xuKGZ1bmN0aW9uIChEaXNwbGF5TmFtZSkge1xuICAgIERpc3BsYXlOYW1lW1wiZm9ybWF0RGF0ZVwiXSA9IFwiRm9ybWF0dGVkRGF0ZVwiO1xuICAgIERpc3BsYXlOYW1lW1wiZm9ybWF0VGltZVwiXSA9IFwiRm9ybWF0dGVkVGltZVwiO1xuICAgIERpc3BsYXlOYW1lW1wiZm9ybWF0TnVtYmVyXCJdID0gXCJGb3JtYXR0ZWROdW1iZXJcIjtcbiAgICBEaXNwbGF5TmFtZVtcImZvcm1hdExpc3RcIl0gPSBcIkZvcm1hdHRlZExpc3RcIjtcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBEaXNwbGF5TmFtZSBpcyB0aGUgbG9jYWxlIGRpc3BsYXkgbmFtZSwgbm90IHRvIGJlIGNvbmZ1c2VkIHdpdGhcbiAgICAvLyB0aGUgbmFtZSBvZiB0aGUgZW51bSwgd2hpY2ggaXMgZm9yIFJlYWN0IGNvbXBvbmVudCBkaXNwbGF5IG5hbWUgaW4gZGV2IHRvb2xzLlxuICAgIERpc3BsYXlOYW1lW1wiZm9ybWF0RGlzcGxheU5hbWVcIl0gPSBcIkZvcm1hdHRlZERpc3BsYXlOYW1lXCI7XG59KShEaXNwbGF5TmFtZSB8fCAoRGlzcGxheU5hbWUgPSB7fSkpO1xudmFyIERpc3BsYXlOYW1lUGFydHM7XG4oZnVuY3Rpb24gKERpc3BsYXlOYW1lUGFydHMpIHtcbiAgICBEaXNwbGF5TmFtZVBhcnRzW1wiZm9ybWF0RGF0ZVwiXSA9IFwiRm9ybWF0dGVkRGF0ZVBhcnRzXCI7XG4gICAgRGlzcGxheU5hbWVQYXJ0c1tcImZvcm1hdFRpbWVcIl0gPSBcIkZvcm1hdHRlZFRpbWVQYXJ0c1wiO1xuICAgIERpc3BsYXlOYW1lUGFydHNbXCJmb3JtYXROdW1iZXJcIl0gPSBcIkZvcm1hdHRlZE51bWJlclBhcnRzXCI7XG4gICAgRGlzcGxheU5hbWVQYXJ0c1tcImZvcm1hdExpc3RcIl0gPSBcIkZvcm1hdHRlZExpc3RQYXJ0c1wiO1xufSkoRGlzcGxheU5hbWVQYXJ0cyB8fCAoRGlzcGxheU5hbWVQYXJ0cyA9IHt9KSk7XG5leHBvcnQgdmFyIEZvcm1hdHRlZE51bWJlclBhcnRzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGludGwgPSB1c2VJbnRsKCk7XG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWUsIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIGZvcm1hdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJ2YWx1ZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgICByZXR1cm4gY2hpbGRyZW4oaW50bC5mb3JtYXROdW1iZXJUb1BhcnRzKHZhbHVlLCBmb3JtYXRQcm9wcykpO1xufTtcbkZvcm1hdHRlZE51bWJlclBhcnRzLmRpc3BsYXlOYW1lID0gJ0Zvcm1hdHRlZE51bWJlclBhcnRzJztcbmV4cG9ydCB2YXIgRm9ybWF0dGVkTGlzdFBhcnRzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGludGwgPSB1c2VJbnRsKCk7XG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWUsIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIGZvcm1hdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJ2YWx1ZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgICByZXR1cm4gY2hpbGRyZW4oaW50bC5mb3JtYXRMaXN0VG9QYXJ0cyh2YWx1ZSwgZm9ybWF0UHJvcHMpKTtcbn07XG5Gb3JtYXR0ZWROdW1iZXJQYXJ0cy5kaXNwbGF5TmFtZSA9ICdGb3JtYXR0ZWROdW1iZXJQYXJ0cyc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9ybWF0dGVkRGF0ZVRpbWVQYXJ0c0NvbXBvbmVudChuYW1lKSB7XG4gICAgdmFyIENvbXBvbmVudFBhcnRzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHZhciBpbnRsID0gdXNlSW50bCgpO1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZSwgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbiwgZm9ybWF0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcInZhbHVlXCIsIFwiY2hpbGRyZW5cIl0pO1xuICAgICAgICB2YXIgZGF0ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBuZXcgRGF0ZSh2YWx1ZSB8fCAwKSA6IHZhbHVlO1xuICAgICAgICB2YXIgZm9ybWF0dGVkUGFydHMgPSBuYW1lID09PSAnZm9ybWF0RGF0ZSdcbiAgICAgICAgICAgID8gaW50bC5mb3JtYXREYXRlVG9QYXJ0cyhkYXRlLCBmb3JtYXRQcm9wcylcbiAgICAgICAgICAgIDogaW50bC5mb3JtYXRUaW1lVG9QYXJ0cyhkYXRlLCBmb3JtYXRQcm9wcyk7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbihmb3JtYXR0ZWRQYXJ0cyk7XG4gICAgfTtcbiAgICBDb21wb25lbnRQYXJ0cy5kaXNwbGF5TmFtZSA9IERpc3BsYXlOYW1lUGFydHNbbmFtZV07XG4gICAgcmV0dXJuIENvbXBvbmVudFBhcnRzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm1hdHRlZENvbXBvbmVudChuYW1lKSB7XG4gICAgdmFyIENvbXBvbmVudCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB2YXIgaW50bCA9IHVzZUludGwoKTtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWUsIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIGZvcm1hdFByb3BzID0gX19yZXN0KHByb3BzXG4gICAgICAgIC8vIFRPRE86IGZpeCBUUyB0eXBlIGRlZmluaXRpb24gZm9yIGxvY2FsZU1hdGNoZXIgdXBzdHJlYW1cbiAgICAgICAgLCBbXCJ2YWx1ZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgLy8gVE9ETzogZml4IFRTIHR5cGUgZGVmaW5pdGlvbiBmb3IgbG9jYWxlTWF0Y2hlciB1cHN0cmVhbVxuICAgICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBpbnRsW25hbWVdKHZhbHVlLCBmb3JtYXRQcm9wcyk7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbihmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFRleHQgPSBpbnRsLnRleHRDb21wb25lbnQgfHwgUmVhY3QuRnJhZ21lbnQ7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIGZvcm1hdHRlZFZhbHVlKTtcbiAgICB9O1xuICAgIENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IERpc3BsYXlOYW1lW25hbWVdO1xuICAgIHJldHVybiBDb21wb25lbnQ7XG59XG4iLCJpbXBvcnQgeyBfX3Jlc3QgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJbnRsIGZyb20gJy4vdXNlSW50bCc7XG52YXIgRm9ybWF0dGVkRGF0ZVRpbWVSYW5nZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBpbnRsID0gdXNlSW50bCgpO1xuICAgIHZhciBmcm9tID0gcHJvcHMuZnJvbSwgdG8gPSBwcm9wcy50bywgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbiwgZm9ybWF0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImZyb21cIiwgXCJ0b1wiLCBcImNoaWxkcmVuXCJdKTtcbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBpbnRsLmZvcm1hdERhdGVUaW1lUmFuZ2UoZnJvbSwgdG8sIGZvcm1hdFByb3BzKTtcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbihmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfVxuICAgIHZhciBUZXh0ID0gaW50bC50ZXh0Q29tcG9uZW50IHx8IFJlYWN0LkZyYWdtZW50O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIGZvcm1hdHRlZFZhbHVlKTtcbn07XG5Gb3JtYXR0ZWREYXRlVGltZVJhbmdlLmRpc3BsYXlOYW1lID0gJ0Zvcm1hdHRlZERhdGVUaW1lUmFuZ2UnO1xuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkRGF0ZVRpbWVSYW5nZTtcbiIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHsgaW52YXJpYW50SW50bENvbnRleHQgfSBmcm9tICcuLi91dGlscyc7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxuLy8gVE9ETzogV2Ugc2hvdWxkIHByb3ZpZGUgaW5pdGlhbCB2YWx1ZSBoZXJlXG52YXIgSW50bENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xudmFyIEludGxDb25zdW1lciA9IEludGxDb250ZXh0LkNvbnN1bWVyLCBJbnRsUHJvdmlkZXIgPSBJbnRsQ29udGV4dC5Qcm92aWRlcjtcbmV4cG9ydCB2YXIgUHJvdmlkZXIgPSBJbnRsUHJvdmlkZXI7XG5leHBvcnQgdmFyIENvbnRleHQgPSBJbnRsQ29udGV4dDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluamVjdEludGwoV3JhcHBlZENvbXBvbmVudCwgb3B0aW9ucykge1xuICAgIHZhciBfYSA9IG9wdGlvbnMgfHwge30sIF9iID0gX2EuaW50bFByb3BOYW1lLCBpbnRsUHJvcE5hbWUgPSBfYiA9PT0gdm9pZCAwID8gJ2ludGwnIDogX2IsIF9jID0gX2EuZm9yd2FyZFJlZiwgZm9yd2FyZFJlZiA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCBfZCA9IF9hLmVuZm9yY2VDb250ZXh0LCBlbmZvcmNlQ29udGV4dCA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2Q7XG4gICAgdmFyIFdpdGhJbnRsID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChJbnRsQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChpbnRsKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGVuZm9yY2VDb250ZXh0KSB7XG4gICAgICAgICAgICBpbnZhcmlhbnRJbnRsQ29udGV4dChpbnRsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW50bFByb3AgPSAoX2EgPSB7fSwgX2FbaW50bFByb3BOYW1lXSA9IGludGwsIF9hKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF9fYXNzaWduKHt9LCBwcm9wcywgaW50bFByb3AsIHsgcmVmOiBmb3J3YXJkUmVmID8gcHJvcHMuZm9yd2FyZGVkUmVmIDogbnVsbCB9KSkpO1xuICAgIH0pKTsgfTtcbiAgICBXaXRoSW50bC5kaXNwbGF5TmFtZSA9IFwiaW5qZWN0SW50bChcIiArIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpICsgXCIpXCI7XG4gICAgV2l0aEludGwuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgICAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdpdGhJbnRsLCBfX2Fzc2lnbih7fSwgcHJvcHMsIHsgZm9yd2FyZGVkUmVmOiByZWYgfSkpKTsgfSksIFdyYXBwZWRDb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gaG9pc3ROb25SZWFjdFN0YXRpY3MoV2l0aEludGwsIFdyYXBwZWRDb21wb25lbnQpO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuXG4gKiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG5pbXBvcnQgeyBfX3Jlc3QgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJbnRsIGZyb20gJy4vdXNlSW50bCc7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWwgfSBmcm9tICcuLi91dGlscyc7XG5mdW5jdGlvbiBhcmVFcXVhbChwcmV2UHJvcHMsIG5leHRQcm9wcykge1xuICAgIHZhciB2YWx1ZXMgPSBwcmV2UHJvcHMudmFsdWVzLCBvdGhlclByb3BzID0gX19yZXN0KHByZXZQcm9wcywgW1widmFsdWVzXCJdKTtcbiAgICB2YXIgbmV4dFZhbHVlcyA9IG5leHRQcm9wcy52YWx1ZXMsIG5leHRPdGhlclByb3BzID0gX19yZXN0KG5leHRQcm9wcywgW1widmFsdWVzXCJdKTtcbiAgICByZXR1cm4gKHNoYWxsb3dFcXVhbChuZXh0VmFsdWVzLCB2YWx1ZXMpICYmXG4gICAgICAgIHNoYWxsb3dFcXVhbChvdGhlclByb3BzLCBuZXh0T3RoZXJQcm9wcykpO1xufVxuZnVuY3Rpb24gRm9ybWF0dGVkTWVzc2FnZShwcm9wcykge1xuICAgIHZhciBpbnRsID0gdXNlSW50bCgpO1xuICAgIHZhciBmb3JtYXRNZXNzYWdlID0gaW50bC5mb3JtYXRNZXNzYWdlLCBfYSA9IGludGwudGV4dENvbXBvbmVudCwgVGV4dCA9IF9hID09PSB2b2lkIDAgPyBSZWFjdC5GcmFnbWVudCA6IF9hO1xuICAgIHZhciBpZCA9IHByb3BzLmlkLCBkZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uLCBkZWZhdWx0TWVzc2FnZSA9IHByb3BzLmRlZmF1bHRNZXNzYWdlLCB2YWx1ZXMgPSBwcm9wcy52YWx1ZXMsIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIF9iID0gcHJvcHMudGFnTmFtZSwgQ29tcG9uZW50ID0gX2IgPT09IHZvaWQgMCA/IFRleHQgOiBfYiwgaWdub3JlVGFnID0gcHJvcHMuaWdub3JlVGFnO1xuICAgIHZhciBkZXNjcmlwdG9yID0geyBpZDogaWQsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlIH07XG4gICAgdmFyIG5vZGVzID0gZm9ybWF0TWVzc2FnZShkZXNjcmlwdG9yLCB2YWx1ZXMsIHtcbiAgICAgICAgaWdub3JlVGFnOiBpZ25vcmVUYWcsXG4gICAgfSk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5vZGVzKSkge1xuICAgICAgICBub2RlcyA9IFtub2Rlc107XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuKG5vZGVzKTtcbiAgICB9XG4gICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIG51bGwsIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkobm9kZXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIG5vZGVzKTtcbn1cbkZvcm1hdHRlZE1lc3NhZ2UuZGlzcGxheU5hbWUgPSAnRm9ybWF0dGVkTWVzc2FnZSc7XG52YXIgTWVtb2l6ZWRGb3JtYXR0ZWRNZXNzYWdlID0gUmVhY3QubWVtbyhGb3JtYXR0ZWRNZXNzYWdlLCBhcmVFcXVhbCk7XG5NZW1vaXplZEZvcm1hdHRlZE1lc3NhZ2UuZGlzcGxheU5hbWUgPSAnTWVtb2l6ZWRGb3JtYXR0ZWRNZXNzYWdlJztcbmV4cG9ydCBkZWZhdWx0IE1lbW9pemVkRm9ybWF0dGVkTWVzc2FnZTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28gSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuICogU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUludGwgZnJvbSAnLi91c2VJbnRsJztcbnZhciBGb3JtYXR0ZWRQbHVyYWwgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2EgPSB1c2VJbnRsKCksIGZvcm1hdFBsdXJhbCA9IF9hLmZvcm1hdFBsdXJhbCwgVGV4dCA9IF9hLnRleHRDb21wb25lbnQ7XG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWUsIG90aGVyID0gcHJvcHMub3RoZXIsIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIHBsdXJhbENhdGVnb3J5ID0gZm9ybWF0UGx1cmFsKHZhbHVlLCBwcm9wcyk7XG4gICAgdmFyIGZvcm1hdHRlZFBsdXJhbCA9IHByb3BzW3BsdXJhbENhdGVnb3J5XSB8fCBvdGhlcjtcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbihmb3JtYXR0ZWRQbHVyYWwpO1xuICAgIH1cbiAgICBpZiAoVGV4dCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLCBmb3JtYXR0ZWRQbHVyYWwpO1xuICAgIH1cbiAgICAvLyBXb3JrIGFyb3VuZCBAdHlwZXMvcmVhY3Qgd2hlcmUgUmVhY3QuRkMgY2Fubm90IHJldHVybiBzdHJpbmdcbiAgICByZXR1cm4gZm9ybWF0dGVkUGx1cmFsO1xufTtcbkZvcm1hdHRlZFBsdXJhbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ2NhcmRpbmFsJyxcbn07XG5Gb3JtYXR0ZWRQbHVyYWwuZGlzcGxheU5hbWUgPSAnRm9ybWF0dGVkUGx1cmFsJztcbmV4cG9ydCBkZWZhdWx0IEZvcm1hdHRlZFBsdXJhbDtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28gSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuICogU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcywgX19yZXN0LCBfX3NwcmVhZEFycmF5IH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJy4vaW5qZWN0SW50bCc7XG5pbXBvcnQgeyBERUZBVUxUX0lOVExfQ09ORklHLCBpbnZhcmlhbnRJbnRsQ29udGV4dCwgYXNzaWduVW5pcXVlS2V5c1RvUGFydHMsIHNoYWxsb3dFcXVhbCwgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBmb3JtYXRNZXNzYWdlIGFzIGNvcmVGb3JtYXRNZXNzYWdlLCBjcmVhdGVJbnRsIGFzIGNvcmVDcmVhdGVJbnRsLCBjcmVhdGVJbnRsQ2FjaGUsIH0gZnJvbSAnQGZvcm1hdGpzL2ludGwnO1xuaW1wb3J0IHsgaXNGb3JtYXRYTUxFbGVtZW50Rm4sIH0gZnJvbSAnaW50bC1tZXNzYWdlZm9ybWF0JztcbmZ1bmN0aW9uIHByb2Nlc3NJbnRsQ29uZmlnKGNvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZSxcbiAgICAgICAgdGltZVpvbmU6IGNvbmZpZy50aW1lWm9uZSxcbiAgICAgICAgZm9ybWF0czogY29uZmlnLmZvcm1hdHMsXG4gICAgICAgIHRleHRDb21wb25lbnQ6IGNvbmZpZy50ZXh0Q29tcG9uZW50LFxuICAgICAgICBtZXNzYWdlczogY29uZmlnLm1lc3NhZ2VzLFxuICAgICAgICBkZWZhdWx0TG9jYWxlOiBjb25maWcuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgZGVmYXVsdEZvcm1hdHM6IGNvbmZpZy5kZWZhdWx0Rm9ybWF0cyxcbiAgICAgICAgb25FcnJvcjogY29uZmlnLm9uRXJyb3IsXG4gICAgICAgIHdyYXBSaWNoVGV4dENodW5rc0luRnJhZ21lbnQ6IGNvbmZpZy53cmFwUmljaFRleHRDaHVua3NJbkZyYWdtZW50LFxuICAgICAgICBkZWZhdWx0UmljaFRleHRFbGVtZW50czogY29uZmlnLmRlZmF1bHRSaWNoVGV4dEVsZW1lbnRzLFxuICAgIH07XG59XG5mdW5jdGlvbiBhc3NpZ25VbmlxdWVLZXlzVG9Gb3JtYXRYTUxFbGVtZW50Rm5Bcmd1bWVudCh2YWx1ZXMpIHtcbiAgICBpZiAoIXZhbHVlcykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaykge1xuICAgICAgICB2YXIgdiA9IHZhbHVlc1trXTtcbiAgICAgICAgYWNjW2tdID0gaXNGb3JtYXRYTUxFbGVtZW50Rm4odilcbiAgICAgICAgICAgID8gYXNzaWduVW5pcXVlS2V5c1RvUGFydHModilcbiAgICAgICAgICAgIDogdjtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59XG52YXIgZm9ybWF0TWVzc2FnZSA9IGZ1bmN0aW9uIChjb25maWcsIGZvcm1hdHRlcnMsIGRlc2NyaXB0b3IsIHJhd1ZhbHVlcykge1xuICAgIHZhciByZXN0ID0gW107XG4gICAgZm9yICh2YXIgX2kgPSA0OyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgcmVzdFtfaSAtIDRdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIHZhbHVlcyA9IGFzc2lnblVuaXF1ZUtleXNUb0Zvcm1hdFhNTEVsZW1lbnRGbkFyZ3VtZW50KHJhd1ZhbHVlcyk7XG4gICAgdmFyIGNodW5rcyA9IGNvcmVGb3JtYXRNZXNzYWdlLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheShbY29uZmlnLFxuICAgICAgICBmb3JtYXR0ZXJzLFxuICAgICAgICBkZXNjcmlwdG9yLCB2YWx1ZXNdLCByZXN0KSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2h1bmtzKSkge1xuICAgICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaHVua3MpO1xuICAgIH1cbiAgICByZXR1cm4gY2h1bmtzO1xufTtcbi8qKlxuICogQ3JlYXRlIGludGwgb2JqZWN0XG4gKiBAcGFyYW0gY29uZmlnIGludGwgY29uZmlnXG4gKiBAcGFyYW0gY2FjaGUgY2FjaGUgZm9yIGZvcm1hdHRlciBpbnN0YW5jZXMgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICovXG5leHBvcnQgdmFyIGNyZWF0ZUludGwgPSBmdW5jdGlvbiAoX2EsIGNhY2hlKSB7XG4gICAgdmFyIHJhd0RlZmF1bHRSaWNoVGV4dEVsZW1lbnRzID0gX2EuZGVmYXVsdFJpY2hUZXh0RWxlbWVudHMsIGNvbmZpZyA9IF9fcmVzdChfYSwgW1wiZGVmYXVsdFJpY2hUZXh0RWxlbWVudHNcIl0pO1xuICAgIHZhciBkZWZhdWx0UmljaFRleHRFbGVtZW50cyA9IGFzc2lnblVuaXF1ZUtleXNUb0Zvcm1hdFhNTEVsZW1lbnRGbkFyZ3VtZW50KHJhd0RlZmF1bHRSaWNoVGV4dEVsZW1lbnRzKTtcbiAgICB2YXIgY29yZUludGwgPSBjb3JlQ3JlYXRlSW50bChfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9JTlRMX0NPTkZJRyksIGNvbmZpZyksIHsgZGVmYXVsdFJpY2hUZXh0RWxlbWVudHM6IGRlZmF1bHRSaWNoVGV4dEVsZW1lbnRzIH0pLCBjYWNoZSk7XG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb3JlSW50bCksIHsgZm9ybWF0TWVzc2FnZTogZm9ybWF0TWVzc2FnZS5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIGxvY2FsZTogY29yZUludGwubG9jYWxlLFxuICAgICAgICAgICAgdGltZVpvbmU6IGNvcmVJbnRsLnRpbWVab25lLFxuICAgICAgICAgICAgZm9ybWF0czogY29yZUludGwuZm9ybWF0cyxcbiAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IGNvcmVJbnRsLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICBkZWZhdWx0Rm9ybWF0czogY29yZUludGwuZGVmYXVsdEZvcm1hdHMsXG4gICAgICAgICAgICBtZXNzYWdlczogY29yZUludGwubWVzc2FnZXMsXG4gICAgICAgICAgICBvbkVycm9yOiBjb3JlSW50bC5vbkVycm9yLFxuICAgICAgICAgICAgZGVmYXVsdFJpY2hUZXh0RWxlbWVudHM6IGRlZmF1bHRSaWNoVGV4dEVsZW1lbnRzLFxuICAgICAgICB9LCBjb3JlSW50bC5mb3JtYXR0ZXJzKSB9KTtcbn07XG52YXIgSW50bFByb3ZpZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnRsUHJvdmlkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW50bFByb3ZpZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY2FjaGUgPSBjcmVhdGVJbnRsQ2FjaGUoKTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjYWNoZTogX3RoaXMuY2FjaGUsXG4gICAgICAgICAgICBpbnRsOiBjcmVhdGVJbnRsKHByb2Nlc3NJbnRsQ29uZmlnKF90aGlzLnByb3BzKSwgX3RoaXMuY2FjaGUpLFxuICAgICAgICAgICAgcHJldkNvbmZpZzogcHJvY2Vzc0ludGxDb25maWcoX3RoaXMucHJvcHMpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEludGxQcm92aWRlci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMsIF9hKSB7XG4gICAgICAgIHZhciBwcmV2Q29uZmlnID0gX2EucHJldkNvbmZpZywgY2FjaGUgPSBfYS5jYWNoZTtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHByb2Nlc3NJbnRsQ29uZmlnKHByb3BzKTtcbiAgICAgICAgaWYgKCFzaGFsbG93RXF1YWwocHJldkNvbmZpZywgY29uZmlnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbnRsOiBjcmVhdGVJbnRsKGNvbmZpZywgY2FjaGUpLFxuICAgICAgICAgICAgICAgIHByZXZDb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBJbnRsUHJvdmlkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW52YXJpYW50SW50bENvbnRleHQodGhpcy5zdGF0ZS5pbnRsKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJvdmlkZXIsIHsgdmFsdWU6IHRoaXMuc3RhdGUuaW50bCB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9O1xuICAgIEludGxQcm92aWRlci5kaXNwbGF5TmFtZSA9ICdJbnRsUHJvdmlkZXInO1xuICAgIEludGxQcm92aWRlci5kZWZhdWx0UHJvcHMgPSBERUZBVUxUX0lOVExfQ09ORklHO1xuICAgIHJldHVybiBJbnRsUHJvdmlkZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydCBkZWZhdWx0IEludGxQcm92aWRlcjtcbiIsImltcG9ydCB7IF9fYXNzaWduLCBfX3Jlc3QgfSBmcm9tIFwidHNsaWJcIjtcbi8qXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28gSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuICogU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW52YXJpYW50LCB9IGZyb20gJ0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0JztcbmltcG9ydCB1c2VJbnRsIGZyb20gJy4vdXNlSW50bCc7XG52YXIgTUlOVVRFID0gNjA7XG52YXIgSE9VUiA9IDYwICogNjA7XG52YXIgREFZID0gNjAgKiA2MCAqIDI0O1xuZnVuY3Rpb24gc2VsZWN0VW5pdChzZWNvbmRzKSB7XG4gICAgdmFyIGFic1ZhbHVlID0gTWF0aC5hYnMoc2Vjb25kcyk7XG4gICAgaWYgKGFic1ZhbHVlIDwgTUlOVVRFKSB7XG4gICAgICAgIHJldHVybiAnc2Vjb25kJztcbiAgICB9XG4gICAgaWYgKGFic1ZhbHVlIDwgSE9VUikge1xuICAgICAgICByZXR1cm4gJ21pbnV0ZSc7XG4gICAgfVxuICAgIGlmIChhYnNWYWx1ZSA8IERBWSkge1xuICAgICAgICByZXR1cm4gJ2hvdXInO1xuICAgIH1cbiAgICByZXR1cm4gJ2RheSc7XG59XG5mdW5jdGlvbiBnZXREdXJhdGlvbkluU2Vjb25kcyh1bml0KSB7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgIHJldHVybiBNSU5VVEU7XG4gICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgcmV0dXJuIEhPVVI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gREFZO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbHVlVG9TZWNvbmRzKHZhbHVlLCB1bml0KSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKiBNSU5VVEU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKiBIT1VSO1xuICAgIH1cbn1cbnZhciBJTkNSRU1FTlRBQkxFX1VOSVRTID0gW1xuICAgICdzZWNvbmQnLFxuICAgICdtaW51dGUnLFxuICAgICdob3VyJyxcbl07XG5mdW5jdGlvbiBjYW5JbmNyZW1lbnQodW5pdCkge1xuICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmQnOyB9XG4gICAgcmV0dXJuIElOQ1JFTUVOVEFCTEVfVU5JVFMuaW5jbHVkZXModW5pdCk7XG59XG52YXIgU2ltcGxlRm9ybWF0dGVkUmVsYXRpdmVUaW1lID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIF9hID0gdXNlSW50bCgpLCBmb3JtYXRSZWxhdGl2ZVRpbWUgPSBfYS5mb3JtYXRSZWxhdGl2ZVRpbWUsIFRleHQgPSBfYS50ZXh0Q29tcG9uZW50O1xuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLCB2YWx1ZSA9IHByb3BzLnZhbHVlLCB1bml0ID0gcHJvcHMudW5pdCwgb3RoZXJQcm9wcyA9IF9fcmVzdChwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJ2YWx1ZVwiLCBcInVuaXRcIl0pO1xuICAgIHZhciBmb3JtYXR0ZWRSZWxhdGl2ZVRpbWUgPSBmb3JtYXRSZWxhdGl2ZVRpbWUodmFsdWUgfHwgMCwgdW5pdCwgb3RoZXJQcm9wcyk7XG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW4oZm9ybWF0dGVkUmVsYXRpdmVUaW1lKTtcbiAgICB9XG4gICAgaWYgKFRleHQpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgZm9ybWF0dGVkUmVsYXRpdmVUaW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGZvcm1hdHRlZFJlbGF0aXZlVGltZSk7XG59O1xudmFyIEZvcm1hdHRlZFJlbGF0aXZlVGltZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB2YWx1ZSA9IF9hLnZhbHVlLCB1bml0ID0gX2EudW5pdCwgdXBkYXRlSW50ZXJ2YWxJblNlY29uZHMgPSBfYS51cGRhdGVJbnRlcnZhbEluU2Vjb25kcywgb3RoZXJQcm9wcyA9IF9fcmVzdChfYSwgW1widmFsdWVcIiwgXCJ1bml0XCIsIFwidXBkYXRlSW50ZXJ2YWxJblNlY29uZHNcIl0pO1xuICAgIGludmFyaWFudCghdXBkYXRlSW50ZXJ2YWxJblNlY29uZHMgfHxcbiAgICAgICAgISEodXBkYXRlSW50ZXJ2YWxJblNlY29uZHMgJiYgY2FuSW5jcmVtZW50KHVuaXQpKSwgJ0Nhbm5vdCBzY2hlZHVsZSB1cGRhdGUgd2l0aCB1bml0IGxvbmdlciB0aGFuIGhvdXInKTtcbiAgICB2YXIgX2IgPSBSZWFjdC51c2VTdGF0ZSgpLCBwcmV2VW5pdCA9IF9iWzBdLCBzZXRQcmV2VW5pdCA9IF9iWzFdO1xuICAgIHZhciBfYyA9IFJlYWN0LnVzZVN0YXRlKDApLCBwcmV2VmFsdWUgPSBfY1swXSwgc2V0UHJldlZhbHVlID0gX2NbMV07XG4gICAgdmFyIF9kID0gUmVhY3QudXNlU3RhdGUoMCksIGN1cnJlbnRWYWx1ZUluU2Vjb25kcyA9IF9kWzBdLCBzZXRDdXJyZW50VmFsdWVJblNlY29uZHMgPSBfZFsxXTtcbiAgICB2YXIgdXBkYXRlVGltZXI7XG4gICAgaWYgKHVuaXQgIT09IHByZXZVbml0IHx8IHZhbHVlICE9PSBwcmV2VmFsdWUpIHtcbiAgICAgICAgc2V0UHJldlZhbHVlKHZhbHVlIHx8IDApO1xuICAgICAgICBzZXRQcmV2VW5pdCh1bml0KTtcbiAgICAgICAgc2V0Q3VycmVudFZhbHVlSW5TZWNvbmRzKGNhbkluY3JlbWVudCh1bml0KSA/IHZhbHVlVG9TZWNvbmRzKHZhbHVlLCB1bml0KSA6IDApO1xuICAgIH1cbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBjbGVhclVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHVwZGF0ZVRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclVwZGF0ZVRpbWVyKCk7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gaW50ZXJ2YWwgYW5kIHdlIGNhbm5vdCBpbmNyZW1lbnQgdGhpcyB1bml0LCBkbyBub3RoaW5nXG4gICAgICAgIGlmICghdXBkYXRlSW50ZXJ2YWxJblNlY29uZHMgfHwgIWNhbkluY3JlbWVudCh1bml0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGNsZWFyVXBkYXRlVGltZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlndXJlIG91dCB0aGUgbmV4dCBpbnRlcmVzdGluZyB0aW1lXG4gICAgICAgIHZhciBuZXh0VmFsdWVJblNlY29uZHMgPSBjdXJyZW50VmFsdWVJblNlY29uZHMgLSB1cGRhdGVJbnRlcnZhbEluU2Vjb25kcztcbiAgICAgICAgdmFyIG5leHRVbml0ID0gc2VsZWN0VW5pdChuZXh0VmFsdWVJblNlY29uZHMpO1xuICAgICAgICAvLyBXZSd2ZSByZWFjaGVkIHRoZSBtYXggYXV0byBpbmNyZW1lbnRhYmxlIHVuaXQsIGRvbid0IHNjaGVkdWxlIGFub3RoZXIgdXBkYXRlXG4gICAgICAgIGlmIChuZXh0VW5pdCA9PT0gJ2RheScpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGVhclVwZGF0ZVRpbWVyO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1bml0RHVyYXRpb24gPSBnZXREdXJhdGlvbkluU2Vjb25kcyhuZXh0VW5pdCk7XG4gICAgICAgIHZhciByZW1haW5kZXIgPSBuZXh0VmFsdWVJblNlY29uZHMgJSB1bml0RHVyYXRpb247XG4gICAgICAgIHZhciBwcmV2SW50ZXJlc3RpbmdWYWx1ZUluU2Vjb25kcyA9IG5leHRWYWx1ZUluU2Vjb25kcyAtIHJlbWFpbmRlcjtcbiAgICAgICAgdmFyIG5leHRJbnRlcmVzdGluZ1ZhbHVlSW5TZWNvbmRzID0gcHJldkludGVyZXN0aW5nVmFsdWVJblNlY29uZHMgPj0gY3VycmVudFZhbHVlSW5TZWNvbmRzXG4gICAgICAgICAgICA/IHByZXZJbnRlcmVzdGluZ1ZhbHVlSW5TZWNvbmRzIC0gdW5pdER1cmF0aW9uXG4gICAgICAgICAgICA6IHByZXZJbnRlcmVzdGluZ1ZhbHVlSW5TZWNvbmRzO1xuICAgICAgICB2YXIgZGVsYXlJblNlY29uZHMgPSBNYXRoLmFicyhuZXh0SW50ZXJlc3RpbmdWYWx1ZUluU2Vjb25kcyAtIGN1cnJlbnRWYWx1ZUluU2Vjb25kcyk7XG4gICAgICAgIGlmIChjdXJyZW50VmFsdWVJblNlY29uZHMgIT09IG5leHRJbnRlcmVzdGluZ1ZhbHVlSW5TZWNvbmRzKSB7XG4gICAgICAgICAgICB1cGRhdGVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0Q3VycmVudFZhbHVlSW5TZWNvbmRzKG5leHRJbnRlcmVzdGluZ1ZhbHVlSW5TZWNvbmRzKTsgfSwgZGVsYXlJblNlY29uZHMgKiAxZTMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhclVwZGF0ZVRpbWVyO1xuICAgIH0sIFtjdXJyZW50VmFsdWVJblNlY29uZHMsIHVwZGF0ZUludGVydmFsSW5TZWNvbmRzLCB1bml0XSk7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHZhbHVlIHx8IDA7XG4gICAgdmFyIGN1cnJlbnRVbml0ID0gdW5pdDtcbiAgICBpZiAoY2FuSW5jcmVtZW50KHVuaXQpICYmXG4gICAgICAgIHR5cGVvZiBjdXJyZW50VmFsdWVJblNlY29uZHMgPT09ICdudW1iZXInICYmXG4gICAgICAgIHVwZGF0ZUludGVydmFsSW5TZWNvbmRzKSB7XG4gICAgICAgIGN1cnJlbnRVbml0ID0gc2VsZWN0VW5pdChjdXJyZW50VmFsdWVJblNlY29uZHMpO1xuICAgICAgICB2YXIgdW5pdER1cmF0aW9uID0gZ2V0RHVyYXRpb25JblNlY29uZHMoY3VycmVudFVuaXQpO1xuICAgICAgICBjdXJyZW50VmFsdWUgPSBNYXRoLnJvdW5kKGN1cnJlbnRWYWx1ZUluU2Vjb25kcyAvIHVuaXREdXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaW1wbGVGb3JtYXR0ZWRSZWxhdGl2ZVRpbWUsIF9fYXNzaWduKHsgdmFsdWU6IGN1cnJlbnRWYWx1ZSwgdW5pdDogY3VycmVudFVuaXQgfSwgb3RoZXJQcm9wcykpKTtcbn07XG5Gb3JtYXR0ZWRSZWxhdGl2ZVRpbWUuZGlzcGxheU5hbWUgPSAnRm9ybWF0dGVkUmVsYXRpdmVUaW1lJztcbkZvcm1hdHRlZFJlbGF0aXZlVGltZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6IDAsXG4gICAgdW5pdDogJ3NlY29uZCcsXG59O1xuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGVkUmVsYXRpdmVUaW1lO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vaW5qZWN0SW50bCc7XG5pbXBvcnQgeyBpbnZhcmlhbnRJbnRsQ29udGV4dCB9IGZyb20gJy4uL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUludGwoKSB7XG4gICAgdmFyIGludGwgPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpO1xuICAgIGludmFyaWFudEludGxDb250ZXh0KGludGwpO1xuICAgIHJldHVybiBpbnRsO1xufVxuIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGludmFyaWFudCB9IGZyb20gJ0Bmb3JtYXRqcy9lY21hNDAyLWFic3RyYWN0JztcbmltcG9ydCB7IERFRkFVTFRfSU5UTF9DT05GSUcgYXMgQ09SRV9ERUZBVUxUX0lOVExfQ09ORklHIH0gZnJvbSAnQGZvcm1hdGpzL2ludGwnO1xuZXhwb3J0IGZ1bmN0aW9uIGludmFyaWFudEludGxDb250ZXh0KGludGwpIHtcbiAgICBpbnZhcmlhbnQoaW50bCwgJ1tSZWFjdCBJbnRsXSBDb3VsZCBub3QgZmluZCByZXF1aXJlZCBgaW50bGAgb2JqZWN0LiAnICtcbiAgICAgICAgJzxJbnRsUHJvdmlkZXI+IG5lZWRzIHRvIGV4aXN0IGluIHRoZSBjb21wb25lbnQgYW5jZXN0cnkuJyk7XG59XG5leHBvcnQgdmFyIERFRkFVTFRfSU5UTF9DT05GSUcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgQ09SRV9ERUZBVUxUX0lOVExfQ09ORklHKSwgeyB0ZXh0Q29tcG9uZW50OiBSZWFjdC5GcmFnbWVudCB9KTtcbi8qKlxuICogVGFrZXMgYSBgZm9ybWF0WE1MRWxlbWVudEZuYCwgYW5kIGNvbXBvc2VzIGl0IGluIGZ1bmN0aW9uLCB3aGljaCBwYXNzZXNcbiAqIGFyZ3VtZW50IGBwYXJ0c2AgdGhyb3VnaCwgYXNzaWduaW5nIHVuaXF1ZSBrZXkgdG8gZWFjaCBwYXJ0LCB0byBwcmV2ZW50XG4gKiBcIkVhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCJcIiBSZWFjdCBlcnJvci5cbiAqIEBwYXJhbSBmb3JtYXRYTUxFbGVtZW50Rm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblVuaXF1ZUtleXNUb1BhcnRzKGZvcm1hdFhNTEVsZW1lbnRGbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAocGFydHMpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICByZXR1cm4gZm9ybWF0WE1MRWxlbWVudEZuKFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkocGFydHMpKTtcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gICAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghb2JqQSB8fCAhb2JqQikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKG9iakEpO1xuICAgIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKG9iakIpO1xuICAgIHZhciBsZW4gPSBhS2V5cy5sZW5ndGg7XG4gICAgaWYgKGJLZXlzLmxlbmd0aCAhPT0gbGVuKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gYUtleXNbaV07XG4gICAgICAgIGlmIChvYmpBW2tleV0gIT09IG9iakJba2V5XSB8fFxuICAgICAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgZnJvbSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9