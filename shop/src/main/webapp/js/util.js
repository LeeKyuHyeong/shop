var $util = {
    name: function() {
        return "name";
    },
    //쿠키생성
	setCookie : function(key, value, day) {
		//let date = new Date(); //현재 날짜 지정.
		//date.setDate(date.getDate() + day);
	
		//let mycookie = '';
		//mycookie += key + '=' + value + ';';
		//mycookie += 'Expires=' + date.toUTCString();
	
		//$.cookie(mycookie);
		$.cookie(key, value, day);
	},
	
	//쿠키생성
	getCookie: function(key) {
		return $.cookie(key);
	},
    getRandomVal: function() {
        return Math.floor(Math.random() * 10000000) + 1;
    },
    trim: function(pVal) {
        pVal = "" + pVal;
        if ($util.isNull(pVal)) {
            return "";
        }
        return pVal.replace(/^ +/g, "").replace(/ +$/g, "");
    },
    nvl: function(pVal, pInit) {
        if (pVal == null || pVal == undefined || pVal == "null" || pVal == "undefined" ||
            (typeof(pVal) == "string" && pVal.length <= 0)) {
            if (typeof pInit == 'undefined') {
                return "";
            } else {
                return pInit;
            }
        }
        return pVal;
    },
    isNull: function(pVal, pIsEmpty) {
        if (pVal == null || pVal == undefined || pVal == "null" || pVal == "undefined" ||
            (typeof(pVal) == "string" && pVal.length <= 0)) {
            return true;
        }
        if (pIsEmpty != null && pIsEmpty == true && pVal.replace(/ /g, "") == "") {
            return true;
        }
        return false;
    },
    numeric: function(pVal, pStyle) {

        pVal = (pVal != null) ? pVal.toString() : "0";
        pVal = $util.trim(pVal).replace(/,/g, "");
        pVal = (pVal == "") ? "0" : pVal;

        var _NPS = 100000000;

        if (isNaN(pVal)) {
            pVal = "0";
        }

        if (pStyle == null) {
            if (pVal.search(".") < 0) {
                return parseInt(pVal, 10);
            } else {
                return parseFloat(pVal);
            }
        } else {
            // 부호
            var sign = ($util.numeric(pVal) >= 0) ? 1 : -1;
            // 절대값
            var pValAbs = Math.abs($util.numeric(pVal));

            if (pStyle.search("L") >= 0) {
                // 버림
                var p = parseInt(pStyle.replace("L", ""), 10);
                var n = Math.pow(0.1, Math.abs(p));
                var m = Math.pow(10, Math.abs(p));

                if (p >= 0) {
                    return sign * Math.floor(pValAbs / m) * m;
                } else {
                    return sign * parseInt(Math.floor(pValAbs / n) * n * _NPS) / _NPS;
                }
            } else if (pStyle.search("R") >= 0) {
                // 반올림
                var p = parseInt(pStyle.replace("L", ""), 10);
                var n = Math.pow(0.1, Math.abs(p));
                //var n = Math.pow(0.1, Math.abs(p)).toFixed(Math.abs(p));
                var m = Math.pow(10, Math.abs(p));

                if (p >= 0) {
                    return sign * Math.round(pValAbs / m) * m;
                } else {
                    return sign * parseInt(Math.round(pValAbs / n) * n * _NPS) / _NPS;
                }
            } else if (pStyle.search("U") >= 0) {
                // 올림
                var p = parseInt(pStyle.replace("U", ""), 10);
                var n = Math.pow(0.1, Math.abs(p));
                //var n = Math.pow(0.1, Math.abs(p)).toFixed(Math.abs(p));
                var m = Math.pow(10, Math.abs(p));

                if (p >= 0) {
                    return sign * Math.ceil(pValAbs / m) * m;
                } else {
                    return sign * parseInt(Math.ceil(pValAbs / n) * n * _NPS) / _NPS;
                }
            }
        }
    },
	//콤마들어간 String 콤마제거후 Number로
	get_number: function(str){
		let num = str.replace(/,/g, "");
		return num;
	},

	// 천단위 콤마	
	get_commas: function(num){
		if (typeof num === 'number'){
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		} else {
			return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	},
	//카트고유넘버 부여
	get_uuid: function() {
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	    return v.toString(16);
	  });
	},

    /* 한글 금액 - value:금액, point:소수점 자릿수, round_type:반올림 타입(r:반올림, c:올림, f:버림), unit:원/PV */
    kor_currency: function(value, point, round_type, unit) {
    	var ret = 0;
    	var per = 10000;
		if (value >= 10000) {
			unit = "만"+unit;
			per = 10000;
		} else if (value >= 1000) {
			unit = "천"+unit;
			per = 1000;
		} else {
			unit = unit;
			per = 1;
		}

		if (round_type == "r" || round_type == "R")
			ret = Math.round(value / per * Math.pow(10,point)) / Math.pow(10,point);
		else if (round_type == "c" || round_type == "C")
			ret = Math.ceil(value / per * Math.pow(10,point)) / Math.pow(10,point);
		else
			ret = Math.floor(value / per * Math.pow(10,point)) / Math.pow(10,point);

		return "" + ret + unit;
    },
    byteLength: function(s, bi, i, c) {
        var b;
        for (b = i = 0; c = s.charCodeAt(i++); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
        return b;
    },
    readOnly: function($obj, flag) {
        if (flag) {
            $obj.removeAttr("readonly");
            $obj.removeClass("input-disabled");
        } else {
            $obj.attr("readonly", "readonly");
            $obj.addClass("input-disabled");
        }
    },
    isNullSp: function(pVal) {
        if (pVal == null || pVal == undefined || pVal == "") {
            return true;
        }
        return false;
    },
    cutStr: function(str, limit) {
        var tmpStr = str;
        var byte_count = 0;
        var len = str.length;
        var dot = "";

        for (i = 0; i < len; i++) {
            byte_count += this.chr_byte(str.charAt(i));
            if (byte_count == limit - 1) {
                if (this.chr_byte(str.charAt(i + 1)) == 2) {
                    tmpStr = str.substring(0, i + 1);
                    dot = "...";
                } else {
                    if (i + 2 != len) dot = "...";
                    tmpStr = str.substring(0, i + 2);
                }
                break;
            } else if (byte_count == limit) {
                if (i + 1 != len) dot = "...";
                tmpStr = str.substring(0, i + 1);
                break;
            }
        }
        return tmpStr + dot;
    },
    chr_byte: function(chr) {
        if (escape(chr).length > 4)
            return 2;
        else
            return 1;
    },
    isJson: function(str) {
        try {
            jQuery.parseJSON(str);
        } catch (e) {
            return false;
        }
        return true;
    },
    ajaxErrHandler: function(xhr, textStatus, thrownError, pShowErrYn) {
        var vCode = "0";
        var vMsg = "";
        var oExtInfo = null;
        var oEx = null;
        var oRt = null;
        var vSendErrMsg = null;
        if (xhr.status == "500") {
            vCode = "-1";
            if ($util.isJson(xhr.responseText)) {
                oRt = jQuery.parseJSON(xhr.responseText);
                if (!$util.isNullSp(oRt)) {
                    oEx = oRt.exception;
                    oExtInfo = oRt.extInfo;
                }
            }
            if (!$util.isNullSp(oEx)) {
                vMsg = oEx.returnMessage;
            } else {
                vMsg = xhr.status + " : " + xhr.statusText;
            }
        } else {
            if (xhr.status == "200") {
                // success
                vCode = "0";
            } else {
                // other error
                vCode = "-1";
            }

            if ($util.isJson(xhr.responseText)) {
                oRt = jQuery.parseJSON(xhr.responseText);
                if (!$util.isNullSp(oRt)) {
                    oEx = oRt.exception;
                    oExtInfo = oRt.extInfo;
                }
            } else {
                oRt = jQuery(xhr.responseText);
                if (!$util.isNullSp(oRt)) {
                    vSendErrMsg = oRt.filter("p:eq(1)").find("u").text();
                }
            }
            if (!$util.isNullSp(vSendErrMsg)) {
                vMsg = xhr.status + " : " + vSendErrMsg;
            } else {
                if (xhr.status == 511) {
                    vMsg = xhr.status + " : " + "SESSION_TIMEOUT";
                } else if (xhr.status == 999) {
                    vMsg = xhr.status + " : " + msg.notAbleAccessPath;
                } else {
                    vMsg = xhr.status + " : " + xhr.statusText;
                }
            }
        }

        var isShowErr = true;

        if (pShowErrYn == "N") {
            isShowErr = false;
        }

        if (vCode != "0" && vMsg != "" && isShowErr == true) {
            alert(vMsg);
        }
        var oData = {};
        oData.returnCode = vCode;
        oData.returnMessage = vMsg;
        oData.extInfo = oExtInfo;

        return oData;
    },
    paramToObject: function(pVal, delim1, delim2) {
        if ($util.isNull(pVal)) {
            return {};
        }
        delim1 = delim1 ? delim1 : "=";
        delim2 = delim2 ? delim2 : ",";
        var oArr = pVal.split(delim2);
        var retObj = {};
        for (var ii = 0; ii < oArr.length; ii++) {
            retObj[oArr[ii].split(delim1)[0]] = oArr[ii].split(delim1)[1];
        }
        return retObj;
    },
    objectToParam: function(pObj, delim1, delim2) {
        if (pObj == null || (typeof pObj) != "object") {
            return "";
        }

        delim1 = delim1 ? delim1 : "=";
        delim2 = delim2 ? delim2 : ",";
        var val = "";
        var flag = false;
        for (var key in pObj) {
            //console.log(key + " : " + pObj[key]);
            val += key + delim1 + pObj[key] + delim2;
            flag = true;
        }

        if (flag) {
            val = val.slice(0, val.length - 1);
        }
        return val;
    },
    deepCopy: function(object1) {
        var object = $.extend({}, object1);
        return object;
    },
    addComma: function(value) {
        value = String(value);
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return value;
    },
    phoneNumber: function(value) {
		var value1 = value.replaceAll("-","");
		var phone_format = "";
		if (value1.length <= 2)
			phone_format = value1;
		else if (value1.length > 2 && value1.length < 7 && value1.substr(0,2) == "02")
			phone_format = "02-" + value1.substr(2, 4);
		else if (value1.length > 2 && value1.length < 12 && value1.substr(0,2) == "02")
			phone_format = "02-" +  + value1.substr(2, 4) + "-" + value1.substr(6);
		else if (value1.length == 3)
			phone_format = value1;
		else if (value1.length >= 3 && value1.length < 8)
			phone_format = value1.substr(0,3) + "-" + value1.substr(3, 4);
		else if (value1.length >= 3 && value1.length < 12)
			phone_format =value1.substr(0,3) + "-" + value1.substr(3, 4) + "-" + value1.substr(7);
		else
			phone_format = value1.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
        return phone_format;
	},


    confirm(message) {
		﻿$.confirm(message,{
		    em:'Billible',
		    title:'더이앤 오피스',
		    callEvent:function(){},
		    cancelEvent:function(){},
		    confirmButton:'확인',
		    cancelButton:'취소'
		})
	},

    /**
     *
     * 팝업을 띄운다.
     *
     * @param url - 팝업주소
     * @param popId - 팝업이름
     * @param opt - 팝업옵션 object or 'key=val' 형태의 string value
     * @param postParam
     */
    commonPopup: function(url, popId, opt, postParam) {

        var sw = screen.availWidth;
        var sh = screen.availHeight;

        if ((typeof opt) === "string") {
            opt = $util.paramToObject(opt);
        }

        opt = opt || {};
        //opt.fullscreen = opt.fullscreen || "no";
        //opt.location = opt.location || "yes";
        //opt.menubar = opt.menubar || "yes";
        //opt.resizable = opt.resizable || "yes";
        //opt.scrollbars = opt.scrollbars || "yes";
        //opt.titlebar = opt.titlebar || "yes";
        //opt.toolbar = opt.toolbar || "yes";
        opt.width = opt.width || "600";
        opt.height = opt.height || "500";
        opt.left = (sw - opt.width) / 2;
        opt.top = (sh - opt.height) / 2;

        var callback = null;

        if (!$util.isNullSp(postParam) && !$util.isNullSp(postParam.callback)) {
            callback = postParam.callback;
            url += "&callback=callback";
            delete postParam.callback;
        }

        opt = $util.objectToParam(opt);

        url += "&" + $util.objectToParam(postParam, "=", "&");


        var popup = window.open(url, popId, opt);

        if (popup != null && !popup.closed) {
            popup.focus();
        } else {
            //alert("Please all	ow pop-ups all the time.");
            return false;
        }

        if (callback) {
            jQuery(popup.document).ready(function() {
                var setPopupPropertiesInterval = setInterval(
                    function setPopupProperties() {
                        try {
                            popup.RunCallbackFunction = function(data) {
                                popup.close();
                                if (data != "NOTHING") {
                                    callback(data);
                                }
                            };
                        } catch (e) {}
                        if (popup.closed) {
                            clearInterval(setPopupPropertiesInterval);
                        }
                    }, 100);
            });
        }

        return popup;

    },
    getRequest: function(name) {
        if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
            return decodeURIComponent(name[1]);
    },
    getRequests: function() {
        var s1 = location.search.substring(1, location.search.length).split('&'),
            r = {},
            s2, i;
        for (i = 0; i < s1.length; i += 1) {
            s2 = s1[i].split('=');
            r[decodeURIComponent(s2[0])] = decodeURIComponent(s2[1]);
        }
        return r;
    },
    makeEditorPop: function(id, callback) {

        var defaults = { width: '720px', height: '250px' };

        return $util.makeEditor(id, callback, defaults);
    },
    makeEditor: function(id, callback, options) {

        var defaults = { basePath: '/styles/js/tagfree/', width: '784px', height: '300px' };
        var settings = $.extend({}, defaults, options);

        if (typeof XFE == 'undefined') {
            throw 'Add a file to jsp files [/styles/js/tagfree/js/xfe_main.js]';
        }

        var xfe = new XFE({
            basePath: settings.basePath,
            width: settings.width,
            height: settings.height,
            onLoad: callback
        });

        /*
         * 에디터를 redering 합니다.
         * 에디터를 생성할 HTML 객체의 id 값을 parameter 값으로 넘겨줘야 합니다. (필수)
         */
        xfe.render(id);

        return xfe;
    },
    gridCheckBoxAll: function(obj, e) {

        //obj.checked = obj.checked;
        //console.log("obj.checked="+ obj.checked);
        //console.log((obj.checked ? "checked": ""));
        $('.check').prop('checked', (obj.checked ? "checked" : ""));
        //$('.check').attr('checked', obj.checked);
        e = e || event;
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
    },
    shortUserDesc: function(str) {
        var ret = "";
        var arr = str.split("/");
        if (arr.length > 2) {
            ret = arr[1] + "/" + arr[2];
        }
        return ret;
    },
    phoneFomatter: function(num,type) {
    var formatNum = '';
        if(num.length==11){
            if(type==0){
                formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');
            }else{
                formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
            }
        }else if(num.length==8){
            formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
        }else{
            if(num.indexOf('02')==0){
                if(type==0){
                    formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');
                }else{
                    formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
                }
            }else{
                if(type==0){
                    formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');
                }else{
                    formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
                }
            }
        }

        return formatNum;
    }

};


var JSON = JSON || {};
// implement JSON.stringify serialization
JSON.stringify = JSON.stringify || function(obj) {
    var t = typeof(obj);
    if (t != "object" || obj === null) {

        // simple data type
        //if (t == "string") obj = '"'+encodeURIComponent( encodeURIComponent(obj))+'"';
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);

    } else {

        // recurse array or object
        var n, v, s, json = [],
            arr = (obj && obj.constructor == Array);

        for (n in obj) {
            v = obj[n];
            t = typeof(v); //alert(v);

            if (t == "string") {
                v = '"' + v.replace(/\"/g, "") + '"';
            } else if (t == "object" && v !== null) {
                v = JSON.stringify(v);
            }

            json.push((arr ? "" : '"' + n + '":') + String(v));
        }

        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};


JSON.stringifyFormat = JSON.stringifyFormat || function(obj) {
    var t = typeof(obj);
    if (t != "object" || obj === null) {

        // simple data type
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);

    } else {

        // recurse array or object
        var n, v, s, json = [],
            arr = (obj && obj.constructor == Array);

        for (n in obj) {
            v = obj[n];
            t = typeof(v); //alert(v);

            if (t == "string") {
                v = v.replace(/\"/g, "");
            } else if (t == "object" && v !== null) {
                v = JSON.stringifyFormat(v);
            }

            var tab = "\t  " + n,
                len = $util.byteLength(n);

            for (var i = len; i < 20; i++) { tab += " "; }
            tab += "|    ";
            json.push((arr ? "" : tab) + String(v));
        }
        return json.join("\n");
    }
};

// implement JSON.parse de-serialization
JSON.parse = JSON.parse || function(str) {
    if (str === "") str = '""';
    eval("var p=" + str + ";");
    return p;
};


(function() {
    var f = function() {};
    if (!window.console) {
        window.console = {
            log: f,
            info: f,
            warn: f,
            debug: f,
            error: f
        };
    }
}());

//jQuery customize
(function($) {

    jQuery.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();

        $('input[type=radio]:checked').each(function() {
            a[this.name] = this.value;
        });
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };


    jQuery.fn.formObjectBind = function(data) {

        var $form = $(this);

        $.each(data, function(key, value) {
            var $input = $form.find("input[name=" + key + "]");
            if ($input.size() == 0) {
                $input = $form.find("select[name=" + key + "]");
            }
            if ($input.size() == 0) {
                $input = $form.find("textbox[name=" + key + "]");
            }
            if ($input.size() == 0) {
                $input = $form.find("span[name=" + key + "]");
            }

            if ($input.size() == 0) {
                return;
            }

            var name = key; //$input.attr("name");
            var type = $input[0].type || $input[0].tagName.toLowerCase();


            if (type == "span") {
                $input.html(data[key]);
            } else if (type == "radio") {
                $('input:radio[name=' + key + ']:input[value=' + data[key] + ']').attr("checked", true);
            } else {
                $input.val(data[key]);
            }
        });

        /*
	    	this.find("input,select,textbox").each(function(){
            	$input = $(this);
            	var name = $input.attr("name");
            	var type = this.type || this.tagName.toLowerCase();



            	if (typeof data[name] != 'undefined'){

            		if (type == "radio"){
            			console.log("type="+ type + ",name="+ name + "="+ data[name]);

                		//$('input[value='+data[name]+']', $input).attr("checked", true);
                		$('input:radio[name='+ name + ']:input[value='+data[name]+']').attr("checked", true);
                	} else {
                		//console.log(name + "="+ data[name]);
                		$input.val(data[name]);
                	}
            	}

            });

	    	this.find("span").each(function(){
            	$input = $(this);
            	var id = $input.attr("id");
            	if (typeof data[id] != 'undefined'){
            		$input.html(data[id]);
            	}
            });
            */
    };
})(jQuery);



// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {

        var k;

        // 1. Let O be the result of calling ToObject passing
        //    the this value as the argument.
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }

        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get
        //    internal method of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If len is 0, return -1.
        if (len === 0) {
            return -1;
        }

        // 5. If argument fromIndex was passed let n be
        //    ToInteger(fromIndex); else let n be 0.
        var n = +fromIndex || 0;

        if (Math.abs(n) === Infinity) {
            n = 0;
        }

        // 6. If n >= len, return -1.
        if (n >= len) {
            return -1;
        }

        // 7. If n >= 0, then Let k be n.
        // 8. Else, n<0, Let k be len - abs(n).
        //    If k is less than 0, then let k be 0.
        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        // 9. Repeat, while k < len
        while (k < len) {
            // a. Let Pk be ToString(k).
            //   This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the
            //    HasProperty internal method of O with argument Pk.
            //   This step can be combined with c
            // c. If kPresent is true, then
            //    i.  Let elementK be the result of calling the Get
            //        internal method of O with the argument ToString(k).
            //   ii.  Let same be the result of applying the
            //        Strict Equality Comparison Algorithm to
            //        searchElement and elementK.
            //  iii.  If same is true, return k.
            if (k in O && O[k] === searchElement) {
                return k;
            }
            k++;
        }
        return -1;
    };
}


