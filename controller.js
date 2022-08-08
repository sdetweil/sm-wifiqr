_wp = require("path");

__wpath = document.currentScript.src.substring(
	7,
	document.currentScript.src.lastIndexOf(_wp.sep)
);

angular
	.module("SmartMirror")
	.controller("wifiqr", function (
		$scope
	) {
		var  QRCode  =  require(__wpath+"/node_modules/qrcode")
		function MakeQr(){
			if(config.wifiqr !== undefined){
				let canvas = document.getElementById("wifiqrcode")
				let qrstring="WIFI:T:WPA;S:"+config.wifiqr.ssid+";P:"+config.wifiqr.pw+";;"
				QRCode.toCanvas(canvas,  qrstring, function (error) {
		          if (error) console.error(error);
		          if (config.wifiqr.debug) console.log("success!");
		        });
			}
		}
		MakeQr()
	}
	)