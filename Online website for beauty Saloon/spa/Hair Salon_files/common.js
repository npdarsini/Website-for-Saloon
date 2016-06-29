addEvent(window, "load", loadPage);

function loadPage() {
	var arrLinks = document.getElementsByTagName('a');
	for (var i=0; i < arrLinks.length; i++) {
		if (arrLinks[i].name.beginsWith("xlnkS_") || arrLinks[i].name.beginsWith("xlnkA_")) {
			addEvent(arrLinks[i], 'click', onClickxlnk);
		}
	}
	if (typeof loadPage2 == "function") loadPage2();
}

function addEvent(elm, evType, fn, argUseCapture) {
	if (elm == null) return;
	if (typeof argUseCapture == "undefined") argUseCapture = false;
	if (elm.addEventListener) {elm.addEventListener(evType, fn, argUseCapture); return true; }
	else if (elm.attachEvent) {var r = elm.attachEvent('on' + evType, fn); return r; } 
	else {elm['on' + evType] = fn;}
}

function findTarget(e) {
	if (window.event) return window.event.srcElement;
	return e.target;
}

function preventDefault(e) {
	if (window.event) {
		window.event.returnValue = false;
	} else {
		e.preventDefault();
	}
}

function loadXMLDoc(url, ispost, poststring, callbackfunction) {
	var req = false;
	var method = "POST";
	if (!ispost) {
		method = "GET";
		poststring = "";
	}
	if(window.XMLHttpRequest) {
		try {
			req = new XMLHttpRequest();
		} catch(e) {
			req = false;
		}
	} else if(window.ActiveXObject) {
		try {
			req = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				req = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				req = false;
			}
		}
	}
	if (req) {
		req.open(method, url, callbackfunction?true:false);
		if (ispost) {
			req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
		}
		req.send(poststring);
		if (callbackfunction) {
			req.onreadystatechange = createCallbackFunction(callbackfunction, req);
			return null;
		} else {
			if (req.status == 200) {
				return req.responseXML;
			} else {
				alert("There was a problem retrieving the XML data:\n" + req.statusText);
			}
		}
	} else {
		return null;
	}
}

function createCallbackFunction(callbackfunction, objRequest) {
		return function() {
			callbackfunction(objRequest);
			if (objRequest.readyState == 4) {
				objRequest = null; //mem leak
				callbackfunction = null;
			}
		}
}

String.prototype.beginsWith = function(strBegin) {
	return (this.substr(0, strBegin.length) == strBegin);
};

function onClickxlnk(e) {
	var target = findTarget(e);
	while (target != null && !(target.name.beginsWith("xlnkA_") || target.name.beginsWith("xlnkS_"))) {
		target = target.parentNode;
	}
	if (target != null) {
		var is_async = target.name.beginsWith("xlnkA_");
		var strEName = target.name.substring(0, target.name.lastIndexOf("_")).substring(6);
		loadXMLDoc("/event/log/" + strEName, true, "", is_async?function(req) {}:null);
	}
	return true;
}