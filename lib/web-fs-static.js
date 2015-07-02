"use strict";



var files = {
  // we have to be explicit here, to let brfs pick up the files.
  app: "import \"metric\";\nimport \"imperial\";\n\nimport \"design\";\nimport \"science\";\n\nimport \"computerscience\"\n\n",
  fundamental: "// Keep all dimensions to a minimal set.\n// Put other units in other files with other unit schemes.\n// Length.\nunit m metre metres meter meters (SI) : Length;\n\n\n// Time\nunit s second seconds : Time;\n// TODO in order to be included with all unit schemes,\n // but we'd like to filter these in some of them\nunit min minute minutes : 60 s;\nunit h hour hours : 60 min;\nunit day day days : 24 h;\nunit wk week weeks : 7 day;\nunit yr year years : 365 day;\n\n// TODO Pressure, Force,\n\n// Mass\nunit kg kilogram kilograms (SI) : Mass;\n\n// Angle\nunit deg degree degrees : Angle;\n// unit 2 * pi radians (SI) : 360 deg;\nunit 0.017453292519943295769236907684886127134428718885417254560971 rad radian radians (SI) : Angle, deg;\n\n// Constants\nconst pi = 3.141592653589793238462643383279502884197169399375105820974944;\nconst e = 2.7182818284590452353602874713526624977572470936999595;\n\nconst true = (1 == 1);\nconst false = !true;",
  metric: "import \"fundamental\";\n\nunit m (Metric);\n\nunit km (Metric) : 1000 m;\n\nunit 100 cm (Metric) : m;\nunit 10 mm : cm;\n\nunit kg kilogram kilograms (Metric);\nunit 1000 g (Metric) : kg;\nunit tonne (Metric) : 1000 kg;\nunit 1000 mg : g;\n\nunit kph : Speed, 1 km/h;\n\nunit l litre litres liter liters : Volume, 1000 cm^3;\nunit 1000 ml : litre;\n\nunit ha hectare hectares (Metric) : Area, 10000 m^2;",
  imperial: "import \"fundamental\";\n\n// Length\nunit yd yard yards (Imperial) : 0.9144 m;\nunit 3 ft foot feet : yd;\nunit 12 inch inches : ft;\nunit mile miles : 5280 ft;\n\n// Mass\nunit lb (Imperial) : 0.45359237 kg;\nunit st stone : 14 lb;\nunit hdwt hundredweight : 112 lb;\nunit ton : 2240 lb;\nunit 16 oz ounce : lb;\n\n// Area\nunit acre (Imperial) : Area, 43560 ft^2;\n\n// Volume\nunit gallon (Imperial) : Volume, 0.00454609 m^3;\nunit 8 pint pints : gallon;\nunit 20 fl_oz floz : pint;\n\n// Speed\nunit mph (Imperial) : Speed, 1 mile/h;\n\n// Imperial Science\nimport \"science\";\n\n// Energy, dimension taken from J.\nunit cal (Imperial) : 4.184 J;\nunit kcal : 1000 cal;\n\n// Pressure, dimension taken from Pa.\nunit mmHg (Imperial) : 133.322387415 Pa;\nunit atm (Imperial) : 1.01325e5 Pa;\nunit psi (Imperial) : 6.8948e3 Pa;",
  design: "// design.turo\n\nimport \"imperial\";\n\n// it would be great if we tag operators and variables:\n// http://bjango.com/articles/soulver/\n\n\n// from http://static.zealous-studios.co.uk/projects/web_tests/PPI%20tests.html\nunit 72 pt (Design) : inch;\nunit picas pc : 12pt;\n\n// This is not the dimension of a physical pixel.\nunit px (Design) : 0.75 pt;\n\nconst phi = (1 + sqrt 5) / 2;",
  science: "import \"fundamental\";\n\n// Force\nunit N newton newtons (Science) : Force, 1 kg m/s^2;\n\n// Pressure\nunit Pa pascal pascals (Science) : Pressure, 1 N/m^2;\nunit bar : 1e5 Pa;\nunit 1000 mbar millibar millibars : bar;\n\n// Energy\nunit J joule joules (Science) : Energy, 1 N m;\n\n// Power\nunit W Watt (Science) : Power, 1 J/s;\nunit MW megawatt : 1e6 W;\nunit kW kilowatt : 1e3 W;\n\n// Current\nunit A amp amps (Science) : Current;\nunit 1000 mA milliamp milliamps : A;\n\n// Charge\nunit C coloumb (Science) : Charge, 1 A s;\n\n// Potential Difference\nunit V volt volts (Science) : Potential, 1 W/A;\nunit 1000 kV kilovolt kilovolts: V;\n\n// Resistance\nunit ohm (Science) : Resistance, 1 V/A;\n\n// Constants\n\n// Speed of light in a vacuum.\nconst c = 299792458 m/s;\n\n// Earth's gravity\nconst g = 9.80665 m/s^2;",
  computerscience: "// definition based on http://de.wikipedia.org/wiki/Byte\n// you can do thinks like: 1GB / 3000 KB/s in min\n\nunit B byte Byte : Information\nunit 8 bit : Byte\n\nunit kB KB Kilobyte : 1e3 Byte\nunit MB Megabyte : 1e6 Byte\nunit GB Gigabyte : 1e9 Byte\nunit TB Terabyte : 1e12 Byte\nunit PB Petabyte : 1e15 Byte\n\nunit Kibibyte KiB : 2e10 Byte\nunit Mibibyte MiB : 1024 KiB\nunit Gibibyte GiB : 1024 MiB\nunit Tebibyte TiB : 1024 GiB\n\n",
};

module.exports = {
  resolve: function (filename) {
    return files[filename] ? filename : null;
  },

  loadSource: function (filename, callback) {
    callback(null, files[filename]);
  }
};