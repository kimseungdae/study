#그것은 우연히 시작되었다.

console.log를 변수에 담아보자는 생각으로
정의된 변수에 console.log를 담아서 출력했더니
console.log를 가지고 있는 window 객체 덩어리가 나와버렸다
난 여기서 궁금했다.
여기에 있는 모든 함수중 내가 몇개나 알고 있을까?
모른다면 알수는 없을까?

그렇게 시작된 함수의 여정~~~
이제곧 시작합니다.0

↓↓↓↓↓↓실제 출력된 내장객체와 풀이↓↓↓↓↓↓

#1. alert: f alert()
- 메서드는 확인 버튼을 가지며 메시지를 지정할 수 있는 경고 대화 상자를 띄웁니다.
```js
window.alert([message]);
```

#2 atob: f atob()
- base64로 된 데이터를 디코드 하는 함수
```js
console.log( window.atob("SGVsbG8gV29ybGQh") ); // Hello World!
```

#3 blur: f blur()
- focus되어있는 상태에 이벤트 핸들러가 해당 focus를 잃게되면 발생

```js
var form = document.getElementById("form");
form.addEventListener("focus", function( event ) {
  event.target.style.background = "pink";
}, true);
form.addEventListener("blur", function( event ) {
  event.target.style.background = "";
}, true);
```


#4 btoa: f btoa()
- base64로 된 데이터를 인코딩 하는 함수
```js
console.log( window.btoa("Hello World!") ); // SGVsbG8gV29ybGQh
```


#5 caches: CacheStorage {}
- Cache 개체의 저장소를 나타냅니다.
- ServiceWorker가 액세스 할 수있는 모든 명명 된 캐시의 마스터 디렉터리를 제공하고
해당 캐시 개체에 대한 문자열 이름 매핑을 유지합니다


#6 cancelAnimationFrame: f cancelAnimationFrame()
- 메소드는 이전에 window.requestAnimationFrame() 을 호출하여 스케줄된 애니메이션 프레임 요청을 취소합니다.
- setTimeout 및 setInterval을 사용하여 그린 애니메이션은, 과도하게 그려지고 시스템의 자원을 낭비할 여자기 있었음
- 과도한 그리기는 순산 순간 프레임이 손실되기 때문에 애니메이션이 끊어지고


###예시
```js
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var start = window.mozAnimationStartTime;  // Firefox 에서만 지원됨. 다른 브라우저에서는 Date.now() 같은 것을 사용할 수 있음.

var myReq;

function step(timestamp) {
  var progress = timestamp - start;
  d.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);

cancelAnimationFrame(myReq);
```

#7 cancelIdleCallback: f cancelIdleCallback()

#8 captureEvents: f captureEvents()

#9 chrome: {loadTimes: ƒ, csi: ƒ}

#10 clearInterval: f clearInterval()

#11 clearTimeout: f clearTimeout()

#12 clientInformation: Navigator {vendorSub: "", productSub: "20030107", vendor: "Google Inc.", maxTouchPoints: 0, hardwareConcurrency: 8, …}

#13 close: f close()

#14 closed: false

#15 confirm: f confirm()

#16 createImageBitmap: f createImageBitmap()

#17 crypto: Crypto {subtle: SubtleCrypto}

#18 customElements: CustomElementRegistry {}

#19 defaultStatus: ""

#defaultstatus: ""

#devicePixelRatio: 1.25

#document: document
#external: External {}
#fetch: f fetch()
#find: f find()
#focus: f focus()
#frameElement: null
#frames: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
#getComputedStyle: f getComputedStyle()
#getSelection: f getSelection()
#history: History {length: 3, scrollRestoration: "auto", state: null}
#indexedDB: IDBFactory {}
#innerHeight: 732
#innerWidth: 491
#isSecureContext: true
#length: 0
#localStorage: Storage {tiles: "", _BS_Flag: "Y", skilltree: "{"btn0":{"level":0,"maxlevel":10,"name":"Growth sp…":10,"name":"More XP IV","type":"xp","gives":15}}", REALUCODE: "MTE1Ljk0LjI0NC4xNDl8MTU0OTUxMzMxOXw5MTEw", font_css_cache: "@font-face {
↵    font-family: "NotoSans";
↵    fo…uA17ZoaGLXgfwHv552OAA==")
↵    format("woff");
↵}", …}
#location: Location {href: "http://localhost:8080/demo.html", ancestorOrigins: DOMStringList, origin: "http://localhost:8080", protocol: "http:", host: "localhost:8080", …}
#locationbar: BarProp {visible: true}
#matchMedia: f matchMedia()
#menubar: BarProp {visible: true}
#moveBy: f moveBy()
#moveTo: f moveTo()
#name: ""
#navigator: Navigator {vendorSub: "", productSub: "20030107", vendor: "Google Inc.", maxTouchPoints: 0, hardwareConcurrency: 8, …}
#onabort: null
#onafterprint: null
#onanimationend: null
#onanimationiteration: null
#onanimationstart: null
#onappinstalled: null
#onauxclick: null
#onbeforeinstallprompt: null
#onbeforeprint: null
#onbeforeunload: null
#onblur: null
#oncancel: null
#oncanplay: null
#oncanplaythrough: null
#onchange: null
#onclick: null
#onclose: null
#oncontextmenu: null
#oncuechange: null
#ondblclick: null
#ondevicemotion: null
#ondeviceorientation: null
#ondeviceorientationabsolute: null
#ondrag: null
#ondragend: null
#ondragenter: null
#ondragleave: null
#ondragover: null
#ondragstart: null
#ondrop: null
#ondurationchange: null
#onemptied: null
#onended: null
#onerror: null
#onfocus: null
#onformdata: null
#ongotpointercapture: null
#onhashchange: null
#oninput: null
#oninvalid: null
#onkeydown: null
#onkeypress: null
#onkeyup: null
#onlanguagechange: null
#onload: null
#onloadeddata: null
#onloadedmetadata: null
#onloadstart: null
#onlostpointercapture: null
#onmessage: null
#onmessageerror: null
#onmousedown: null
#onmouseenter: null
#onmouseleave: null
#onmousemove: null
#onmouseout: null
#onmouseover: null
#onmouseup: null
#onmousewheel: null
#onoffline: null
#ononline: null
#onpagehide: null
#onpageshow: null
#onpause: null
##onplay: null
#onplaying: null
#onpointercancel: null
#onpointerdown: null
#onpointerenter: null
#onpointerleave: null
#onpointermove: null
#onpointerout: null
#onpointerover: null
#onpointerrawupdate: null
#onpointerup: null
#onpopstate: null
#onprogress: null
#onratechange: null
#onrejectionhandled: null
#onreset: null
#onresize: null
#onscroll: null
#onsearch: null
#onseeked: null
#onseeking: null
#onselect: null
#onselectionchange: null
#onselectstart: null
#onstalled: null
#onstorage: null
#onsubmit: null
#onsuspend: null
#ontimeupdate: null
#ontoggle: null
#ontransitionend: null
#onunhandledrejection: null
#onunload: null
#onvolumechange: null
#onwaiting: null
#onwebkitanimationend: null
#onwebkitanimationiteration: null
#onwebkitanimationstart: null
#onwebkittransitionend: null
#onwheel: null
#open: f open()
#openDatabase: f ()
#opener: null
#origin: "http://localhost:8080"
#outerHeight: 851
#outerWidth: 1550
#pageXOffset: 0
#pageYOffset: 0
#param: "global param"
#parent: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
#performance: Performance {timeOrigin: 1599713519611.4, onresourcetimingbufferfull: null, memory: MemoryInfo, navigation: PerformanceNavigation, timing: PerformanceTiming, …}
#personalbar: BarProp {visible: true}
#postMessage: f postMessage()
#print: f print()
#printParam: f printParam()
#prompt: f prompt()
#queueMicrotask: f queueMicrotask()
#releaseEvents: f releaseEvents()
#requestAnimationFrame: f requestAnimationFrame()
#requestIdleCallback: f requestIdleCallback()
#resizeBy: f resizeBy()
#resizeTo: f resizeTo()
#screen: Screen {availWidth: 3072, availHeight: 1688, width: 3072, height: 1728, colorDepth: 24, …}
#screenLeft: 1529
#screenTop: 844
#screenX: 1529
#screenY: 844
#scroll: f scroll()
#scrollBy: f scrollBy()
#scrollTo: f scrollTo()
#scrollX: 0
#scrollY: 0
#scrollbars: BarProp {visible: true}
#self: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
#sessionStorage: Storage {length: 0}
#setInterval: f setInterval()
#setTimeout: f setTimeout()
#speechSynthesis: SpeechSynthesis {pending: false, speaking: false, paused: false, onvoiceschanged: null}
#status: ""
#statusbar: BarProp {visible: true}
#stop: f stop()
#styleMedia: StyleMedia {type: "screen"}
#toolbar: BarProp {visible: true}
#top: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
#trustedTypes: TrustedTypePolicyFactory {defaultPolicy: null, emptyHTML: TrustedHTML, emptyScript: TrustedScript}
#visualViewport: VisualViewport {offsetLeft: 0, offsetTop: 0, pageLeft: 0, pageTop: 0, width: 491.20001220703125, …}
#webkitCancelAnimationFrame: f webkitCancelAnimationFrame()
#webkitRequestAnimationFrame: f webkitRequestAnimationFrame()
#webkitRequestFileSystem: f ()
#webkitResolveLocalFileSystemURL: f ()
#webkitStorageInfo: DeprecatedStorageInfo {}
#window: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
#Infinity: Infinity
#AbortController: f AbortController()
#AbortSignal: f AbortSignal()
#AbsoluteOrientationSensor: f AbsoluteOrientationSensor()
#Accelerometer: f Accelerometer()
#AggregateError: f AggregateError()
#AnalyserNode: f AnalyserNode()
#Animation: f Animation()
#AnimationEffect: f AnimationEffect()
#AnimationEvent: f AnimationEvent()
#AnimationPlaybackEvent: f AnimationPlaybackEvent()
#AnimationTimeline: f AnimationTimeline()
#Array: f Array()
#ArrayBuffer: f ArrayBuffer()
#Atomics: Atomics {load: ƒ, store: ƒ, add: ƒ, sub: ƒ, and: ƒ, …}
#Attr: f Attr()
#Audio: f Audio()
#AudioBuffer: f AudioBuffer()
#AudioBufferSourceNode: f AudioBufferSourceNode()
#AudioContext: f AudioContext()
#AudioDestinationNode: f AudioDestinationNode()
#AudioListener: f AudioListener()
#AudioNode: f AudioNode()
#AudioParam: f AudioParam()
#AudioParamMap: f AudioParamMap()
#AudioProcessingEvent: f AudioProcessingEvent()
#AudioScheduledSourceNode: f AudioScheduledSourceNode()
#AudioWorklet: f AudioWorklet()
#AudioWorkletNode: f AudioWorkletNode()
#AuthenticatorAssertionResponse: f AuthenticatorAssertionResponse()
#AuthenticatorAttestationResponse: f AuthenticatorAttestationResponse()
#AuthenticatorResponse: f AuthenticatorResponse()
#BackgroundFetchManager: f BackgroundFetchManager()
#BackgroundFetchRecord: f BackgroundFetchRecord()
#BackgroundFetchRegistration: f BackgroundFetchRegistration()
#BarProp: f BarProp()
#BarcodeDetector: f BarcodeDetector()
#BaseAudioContext: f BaseAudioContext()
#BatteryManager: f BatteryManager()
#BeforeInstallPromptEvent: f BeforeInstallPromptEvent()
#BeforeUnloadEvent: f BeforeUnloadEvent()
#BigInt: f BigInt()
#BigInt64Array: f BigInt64Array()
#BigUint64Array: f BigUint64Array()
#BiquadFilterNode: f BiquadFilterNode()
#Blob: f Blob()
#BlobEvent: f BlobEvent()
#Bluetooth: f Bluetooth()
#BluetoothCharacteristicProperties: f BluetoothCharacteristicProperties()
#BluetoothDevice: f BluetoothDevice()
#BluetoothRemoteGATTCharacteristic: f BluetoothRemoteGATTCharacteristic()
#BluetoothRemoteGATTDescriptor: f BluetoothRemoteGATTDescriptor()
#BluetoothRemoteGATTServer: f BluetoothRemoteGATTServer()
#BluetoothRemoteGATTService: f BluetoothRemoteGATTService()
#BluetoothUUID: f BluetoothUUID()
#Boolean: f Boolean()
#BroadcastChannel: f BroadcastChannel()
#ByteLengthQueuingStrategy: f ByteLengthQueuingStrategy()
#CDATASection: f CDATASection()
#CSS: f CSS()
#CSSAnimation: f CSSAnimation()
#CSSConditionRule: f CSSConditionRule()
#CSSFontFaceRule: f CSSFontFaceRule()
#CSSGroupingRule: f CSSGroupingRule()
#CSSImageValue: f CSSImageValue()
#CSSImportRule: f CSSImportRule()
#CSSKeyframeRule: f CSSKeyframeRule()
#CSSKeyframesRule: f CSSKeyframesRule()
#CSSKeywordValue: f CSSKeywordValue()
#CSSMathInvert: f CSSMathInvert()
#CSSMathMax: f CSSMathMax()
#CSSMathMin: f CSSMathMin()
#CSSMathNegate: f CSSMathNegate()
#CSSMathProduct: f CSSMathProduct()
#CSSMathSum: f CSSMathSum()
#CSSMathValue: f CSSMathValue()
#CSSMatrixComponent: f CSSMatrixComponent()
#CSSMediaRule: f CSSMediaRule()
#CSSNamespaceRule: f CSSNamespaceRule()
#CSSNumericArray: f CSSNumericArray()
#CSSNumericValue: f CSSNumericValue()
#CSSPageRule: f CSSPageRule()
#CSSPerspective: f CSSPerspective()
#CSSPositionValue: f CSSPositionValue()
#CSSPropertyRule: f CSSPropertyRule()
#CSSRotate: f CSSRotate()
#CSSRule: f CSSRule()
#CSSRuleList: f CSSRuleList()
#CSSScale: f CSSScale()
#CSSSkew: f CSSSkew()
#CSSSkewX: f CSSSkewX()
#CSSSkewY: f CSSSkewY()
#CSSStyleDeclaration: f CSSStyleDeclaration()
#CSSStyleRule: f CSSStyleRule()
#CSSStyleSheet: f CSSStyleSheet()
#CSSStyleValue: f CSSStyleValue()
#CSSSupportsRule: f CSSSupportsRule()
#CSSTransformComponent: f CSSTransformComponent()
#CSSTransformValue: f CSSTransformValue()
#CSSTransition: f CSSTransition()
#CSSTranslate: f CSSTranslate()
#CSSUnitValue: f CSSUnitValue()
#CSSUnparsedValue: f CSSUnparsedValue()
#CSSVariableReferenceValue: f CSSVariableReferenceValue()
#Cache: f Cache()
#CacheStorage: f CacheStorage()
#CanvasCaptureMediaStreamTrack: f CanvasCaptureMediaStreamTrack()
#CanvasGradient: f CanvasGradient()
#CanvasPattern: f CanvasPattern()
#CanvasRenderingContext2D: f CanvasRenderingContext2D()
#ChannelMergerNode: f ChannelMergerNode()
#ChannelSplitterNode: f ChannelSplitterNode()
#CharacterData: f CharacterData()
#Clipboard: f Clipboard()
#ClipboardEvent: f ClipboardEvent()
#ClipboardItem: f ClipboardItem()
#CloseEvent: f CloseEvent()
#Comment: f Comment()
#CompositionEvent: f CompositionEvent()
#CompressionStream: f CompressionStream()
#ConstantSourceNode: f ConstantSourceNode()
#ConvolverNode: f ConvolverNode()
#CountQueuingStrategy: f CountQueuingStrategy()
#Credential: f Credential()
#CredentialsContainer: f CredentialsContainer()
#Crypto: f Crypto()
#CryptoKey: f CryptoKey()
#CustomElementRegistry: f CustomElementRegistry()
#CustomEvent: f CustomEvent()
#DOMError: f DOMError()
#DOMException: f DOMException()
#DOMImplementation: f DOMImplementation()
#DOMMatrix: f DOMMatrix()
#DOMMatrixReadOnly: f DOMMatrixReadOnly()
#DOMParser: f DOMParser()
#DOMPoint: f DOMPoint()
#DOMPointReadOnly: f DOMPointReadOnly()
#DOMQuad: f DOMQuad()
#DOMRect: f DOMRect()
#DOMRectList: f DOMRectList()
#DOMRectReadOnly: f DOMRectReadOnly()
#DOMStringList: f DOMStringList()
#DOMStringMap: f DOMStringMap()
#DOMTokenList: f DOMTokenList()
#DataTransfer: f DataTransfer()
#DataTransferItem: f DataTransferItem()
#DataTransferItemList: f DataTransferItemList()
#DataView: f DataView()
#Date: f Date()
#DecompressionStream: f DecompressionStream()
#DelayNode: f DelayNode()
#DeviceMotionEvent: f DeviceMotionEvent()
#DeviceMotionEventAcceleration: f DeviceMotionEventAcceleration()
#DeviceMotionEventRotationRate: f DeviceMotionEventRotationRate()
#DeviceOrientationEvent: f DeviceOrientationEvent()
#Document: f Document()
#DocumentFragment: f DocumentFragment()
#DocumentTimeline: f DocumentTimeline()
#DocumentType: f DocumentType()
#DragEvent: f DragEvent()
#DynamicsCompressorNode: f DynamicsCompressorNode()
#Element: f Element()
#ElementInternals: f ElementInternals()
#Error: f Error()
#ErrorEvent: f ErrorEvent()
#EvalError: f EvalError()
#Event: f Event()
#EventCounts: f EventCounts()
#EventSource: f EventSource()
#EventTarget: f EventTarget()
#External: f External()
#FeaturePolicy: f FeaturePolicy()
#FederatedCredential: f FederatedCredential()
#File: f File()
#FileList: f FileList()
#FileReader: f FileReader()
#FinalizationRegistry: f FinalizationRegistry()
#Float32Array: f Float32Array()
#Float64Array: f Float64Array()
#FocusEvent: f FocusEvent()
#FontFace: f FontFace()
#FontFaceSetLoadEvent: f FontFaceSetLoadEvent()
#FormData: f FormData()
#FormDataEvent: f FormDataEvent()
#FragmentDirective: f FragmentDirective()
#Function: f Function()
#GainNode: f GainNode()
#Gamepad: f Gamepad()
#GamepadButton: f GamepadButton()
#GamepadEvent: f GamepadEvent()
#GamepadHapticActuator: f GamepadHapticActuator()
#Geolocation: f Geolocation()
#GeolocationCoordinates: f GeolocationCoordinates()
#GeolocationPosition: f GeolocationPosition()
#GeolocationPositionError: f GeolocationPositionError()
#Gyroscope: f Gyroscope()
#HTMLAllCollection: f HTMLAllCollection()
#HTMLAnchorElement: f HTMLAnchorElement()
#HTMLAreaElement: f HTMLAreaElement()
#HTMLAudioElement: f HTMLAudioElement()
#HTMLBRElement: f HTMLBRElement()
#HTMLBaseElement: f HTMLBaseElement()
#HTMLBodyElement: f HTMLBodyElement()
#HTMLButtonElement: f HTMLButtonElement()
#HTMLCanvasElement: f HTMLCanvasElement()
#HTMLCollection: f HTMLCollection()
#HTMLContentElement: f HTMLContentElement()
#HTMLDListElement: f HTMLDListElement()
#HTMLDataElement: f HTMLDataElement()
#HTMLDataListElement: f HTMLDataListElement()
#HTMLDetailsElement: f HTMLDetailsElement()
#HTMLDialogElement: f HTMLDialogElement()
#HTMLDirectoryElement: f HTMLDirectoryElement()
#HTMLDivElement: f HTMLDivElement()
#HTMLDocument: f HTMLDocument()
#HTMLElement: f HTMLElement()
#HTMLEmbedElement: f HTMLEmbedElement()
#HTMLFieldSetElement: f HTMLFieldSetElement()
#HTMLFontElement: f HTMLFontElement()
#HTMLFormControlsCollection: f HTMLFormControlsCollection()
#HTMLFormElement: f HTMLFormElement()
#HTMLFrameElement: f HTMLFrameElement()
#HTMLFrameSetElement: f HTMLFrameSetElement()
#HTMLHRElement: f HTMLHRElement()
#HTMLHeadElement: f HTMLHeadElement()
#HTMLHeadingElement: f HTMLHeadingElement()
#HTMLHtmlElement: f HTMLHtmlElement()
#HTMLIFrameElement: f HTMLIFrameElement()
#HTMLImageElement: f HTMLImageElement()
#HTMLInputElement: f HTMLInputElement()
#HTMLLIElement: f HTMLLIElement()
#HTMLLabelElement: f HTMLLabelElement()
#HTMLLegendElement: f HTMLLegendElement()
#HTMLLinkElement: f HTMLLinkElement()
#HTMLMapElement: f HTMLMapElement()
#HTMLMarqueeElement: f HTMLMarqueeElement()
#HTMLMediaElement: f HTMLMediaElement()
#HTMLMenuElement: f HTMLMenuElement()
#HTMLMetaElement: f HTMLMetaElement()
#HTMLMeterElement: f HTMLMeterElement()
#HTMLModElement: f HTMLModElement()
#HTMLOListElement: f HTMLOListElement()
#HTMLObjectElement: f HTMLObjectElement()
#HTMLOptGroupElement: f HTMLOptGroupElement()
#HTMLOptionElement: f HTMLOptionElement()
#HTMLOptionsCollection: f HTMLOptionsCollection()
#HTMLOutputElement: f HTMLOutputElement()
#HTMLParagraphElement: f HTMLParagraphElement()
#HTMLParamElement: f HTMLParamElement()
#HTMLPictureElement: f HTMLPictureElement()
#HTMLPreElement: f HTMLPreElement()
#HTMLProgressElement: f HTMLProgressElement()
#HTMLQuoteElement: f HTMLQuoteElement()
#HTMLScriptElement: f HTMLScriptElement()
#HTMLSelectElement: f HTMLSelectElement()
#HTMLShadowElement: f HTMLShadowElement()
#HTMLSlotElement: f HTMLSlotElement()
#HTMLSourceElement: f HTMLSourceElement()
#HTMLSpanElement: f HTMLSpanElement()
#HTMLStyleElement: f HTMLStyleElement()
#HTMLTableCaptionElement: f HTMLTableCaptionElement()
#HTMLTableCellElement: f HTMLTableCellElement()
#HTMLTableColElement: f HTMLTableColElement()
#HTMLTableElement: f HTMLTableElement()
#HTMLTableRowElement: f HTMLTableRowElement()
#HTMLTableSectionElement: f HTMLTableSectionElement()
#HTMLTemplateElement: f HTMLTemplateElement()
#HTMLTextAreaElement: f HTMLTextAreaElement()
#HTMLTimeElement: f HTMLTimeElement()
#HTMLTitleElement: f HTMLTitleElement()
#HTMLTrackElement: f HTMLTrackElement()
#HTMLUListElement: f HTMLUListElement()
#HTMLUnknownElement: f HTMLUnknownElement()
#HTMLVideoElement: f HTMLVideoElement()
#HashChangeEvent: f HashChangeEvent()
#Headers: f Headers()
#History: f History()
#IDBCursor: f IDBCursor()
#IDBCursorWithValue: f IDBCursorWithValue()
#IDBDatabase: f IDBDatabase()
#IDBFactory: f IDBFactory()
#IDBIndex: f IDBIndex()
#IDBKeyRange: f IDBKeyRange()
#IDBObjectStore: f IDBObjectStore()
#IDBOpenDBRequest: f IDBOpenDBRequest()
#IDBRequest: f IDBRequest()
#IDBTransaction: f IDBTransaction()
#IDBVersionChangeEvent: f IDBVersionChangeEvent()
#IIRFilterNode: f IIRFilterNode()
#IdleDeadline: f IdleDeadline()
#Image: f Image()
#ImageBitmap: f ImageBitmap()
#ImageBitmapRenderingContext: f ImageBitmapRenderingContext()
#ImageCapture: f ImageCapture()
#ImageData: f ImageData()
#InputDeviceCapabilities: f InputDeviceCapabilities()
#InputDeviceInfo: f InputDeviceInfo()
#InputEvent: f InputEvent()
#Int8Array: f Int8Array()
#Int16Array: f Int16Array()
#Int32Array: f Int32Array()
#IntersectionObserver: f IntersectionObserver()
#IntersectionObserverEntry: f IntersectionObserverEntry()
#Intl: {getCanonicalLocales: ƒ, DateTimeFormat: ƒ, NumberFormat: ƒ, Collator: ƒ, v8BreakIterator: ƒ, …}
#JSON: JSON {Symbol(Symbol.toStringTag): "JSON", parse: ƒ, stringify: ƒ}
#Keyboard: f Keyboard()
#KeyboardEvent: f KeyboardEvent()
#KeyboardLayoutMap: f KeyboardLayoutMap()
#KeyframeEffect: f KeyframeEffect()
#LargestContentfulPaint: f LargestContentfulPaint()
#LayoutShift: f LayoutShift()
#LayoutShiftAttribution: f LayoutShiftAttribution()
#LinearAccelerationSensor: f LinearAccelerationSensor()
#Location: f Location()
#Lock: f Lock()
#LockManager: f LockManager()
#MIDIAccess: f MIDIAccess()
#MIDIConnectionEvent: f MIDIConnectionEvent()
#MIDIInput: f MIDIInput()
#MIDIInputMap: f MIDIInputMap()
#MIDIMessageEvent: f MIDIMessageEvent()
#MIDIOutput: f MIDIOutput()
#MIDIOutputMap: f MIDIOutputMap()
#MIDIPort: f MIDIPort()
#Map: f Map()
#Math: Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
#MediaCapabilities: f MediaCapabilities()
#MediaDeviceInfo: f MediaDeviceInfo()
#MediaDevices: f MediaDevices()
#MediaElementAudioSourceNode: f MediaElementAudioSourceNode()
#MediaEncryptedEvent: f MediaEncryptedEvent()
#MediaError: f MediaError()
#MediaKeyMessageEvent: f MediaKeyMessageEvent()
#MediaKeySession: f MediaKeySession()
#MediaKeyStatusMap: f MediaKeyStatusMap()
#MediaKeySystemAccess: f MediaKeySystemAccess()
#MediaKeys: f MediaKeys()
#MediaList: f MediaList()
#MediaMetadata: f MediaMetadata()
#MediaQueryList: f MediaQueryList()
#MediaQueryListEvent: f MediaQueryListEvent()
#MediaRecorder: f MediaRecorder()
#MediaSession: f MediaSession()
#MediaSettingsRange: f MediaSettingsRange()
#MediaSource: f MediaSource()
#MediaStream: f MediaStream()
#MediaStreamAudioDestinationNode: f MediaStreamAudioDestinationNode()
#MediaStreamAudioSourceNode: f MediaStreamAudioSourceNode()
#MediaStreamEvent: f MediaStreamEvent()
#MediaStreamTrack: f MediaStreamTrack()
#MediaStreamTrackEvent: f MediaStreamTrackEvent()
#MessageChannel: f MessageChannel()
#MessageEvent: f MessageEvent()
#MessagePort: f MessagePort()
#MimeType: f MimeType()
#MimeTypeArray: f MimeTypeArray()
#MouseEvent: f MouseEvent()
#MutationEvent: f MutationEvent()
#MutationObserver: f MutationObserver()
#MutationRecord: f MutationRecord()
#NaN: NaN
#NamedNodeMap: f NamedNodeMap()
#NavigationPreloadManager: f NavigationPreloadManager()
#Navigator: f Navigator()
#NetworkInformation: f NetworkInformation()
#Node: f Node()
#NodeFilter: f NodeFilter()
#NodeIterator: f NodeIterator()
#NodeList: f NodeList()
#Notification: f Notification()
#Number: f Number()
#Object: f Object()
#OfflineAudioCompletionEvent: f OfflineAudioCompletionEvent()
#OfflineAudioContext: f OfflineAudioContext()
#OffscreenCanvas: f OffscreenCanvas()
#OffscreenCanvasRenderingContext2D: f OffscreenCanvasRenderingContext2D()
#Option: f Option()
#OrientationSensor: f OrientationSensor()
#OscillatorNode: f OscillatorNode()
#OverconstrainedError: f OverconstrainedError()
#PageTransitionEvent: f PageTransitionEvent()
#PannerNode: f PannerNode()
#PasswordCredential: f PasswordCredential()
#Path2D: f Path2D()
#PaymentAddress: f PaymentAddress()
#PaymentInstruments: f PaymentInstruments()
#PaymentManager: f PaymentManager()
#PaymentMethodChangeEvent: f PaymentMethodChangeEvent()
#PaymentRequest: f PaymentRequest()
#PaymentRequestUpdateEvent: f PaymentRequestUpdateEvent()
#PaymentResponse: f PaymentResponse()
#Performance: f Performance()
#PerformanceElementTiming: f PerformanceElementTiming()
#PerformanceEntry: f PerformanceEntry()
#PerformanceEventTiming: f PerformanceEventTiming()
#PerformanceLongTaskTiming: f PerformanceLongTaskTiming()
#PerformanceMark: f PerformanceMark()
#PerformanceMeasure: f PerformanceMeasure()
#PerformanceNavigation: f PerformanceNavigation()
#PerformanceNavigationTiming: f PerformanceNavigationTiming()
#PerformanceObserver: f PerformanceObserver()
#PerformanceObserverEntryList: f PerformanceObserverEntryList()
#PerformancePaintTiming: f PerformancePaintTiming()
#PerformanceResourceTiming: f PerformanceResourceTiming()
#PerformanceServerTiming: f PerformanceServerTiming()
#PerformanceTiming: f PerformanceTiming()
#PeriodicSyncManager: f PeriodicSyncManager()
#PeriodicWave: f PeriodicWave()
#PermissionStatus: f PermissionStatus()
#Permissions: f Permissions()
#PhotoCapabilities: f PhotoCapabilities()
#PictureInPictureEvent: f PictureInPictureEvent()
#PictureInPictureWindow: f PictureInPictureWindow()
#Plugin: f Plugin()
#PluginArray: f PluginArray()
#PointerEvent: f PointerEvent()
#PopStateEvent: f PopStateEvent()
#Presentation: f Presentation()
#PresentationAvailability: f PresentationAvailability()
#PresentationConnection: f PresentationConnection()
#PresentationConnectionAvailableEvent: f PresentationConnectionAvailableEvent()
#PresentationConnectionCloseEvent: f PresentationConnectionCloseEvent()
#PresentationConnectionList: f PresentationConnectionList()
#PresentationReceiver: f PresentationReceiver()
#PresentationRequest: f PresentationRequest()
#ProcessingInstruction: f ProcessingInstruction()
#ProgressEvent: f ProgressEvent()
#Promise: f Promise()
#PromiseRejectionEvent: f PromiseRejectionEvent()
#Proxy: f Proxy()
#PublicKeyCredential: f PublicKeyCredential()
#PushManager: f PushManager()
#PushSubscription: f PushSubscription()
#PushSubscriptionOptions: f PushSubscriptionOptions()
#RTCCertificate: f RTCCertificate()
#RTCDTMFSender: f RTCDTMFSender()
#RTCDTMFToneChangeEvent: f RTCDTMFToneChangeEvent()
#RTCDataChannel: f RTCDataChannel()
#RTCDataChannelEvent: f RTCDataChannelEvent()
#RTCDtlsTransport: f RTCDtlsTransport()
#RTCError: f RTCError()
#RTCErrorEvent: f RTCErrorEvent()
#RTCIceCandidate: f RTCIceCandidate()
#RTCIceTransport: f RTCIceTransport()
#RTCPeerConnection: f RTCPeerConnection()
#RTCPeerConnectionIceErrorEvent: f RTCPeerConnectionIceErrorEvent()
#RTCPeerConnectionIceEvent: f RTCPeerConnectionIceEvent()
#RTCRtpReceiver: f RTCRtpReceiver()
#RTCRtpSender: f RTCRtpSender()
#RTCRtpTransceiver: f RTCRtpTransceiver()
#RTCSctpTransport: f RTCSctpTransport()
#RTCSessionDescription: f RTCSessionDescription()
#RTCStatsReport: f RTCStatsReport()
#RTCTrackEvent: f RTCTrackEvent()
#RadioNodeList: f RadioNodeList()
#Range: f Range()
#RangeError: f RangeError()
#ReadableStream: f ReadableStream()
#ReadableStreamDefaultReader: f ReadableStreamDefaultReader()
#ReferenceError: f ReferenceError()
#Reflect: {defineProperty: ƒ, deleteProperty: ƒ, apply: ƒ, construct: ƒ, get: ƒ, …}
#RegExp: f RegExp()
#RelativeOrientationSensor: f RelativeOrientationSensor()
#RemotePlayback: f RemotePlayback()
#ReportingObserver: f ReportingObserver()
#Request: f Request()
#ResizeObserver: f ResizeObserver()
#ResizeObserverEntry: f ResizeObserverEntry()
#ResizeObserverSize: f ResizeObserverSize()
#Response: f Response()
#SVGAElement: f SVGAElement()
#SVGAngle: f SVGAngle()
#SVGAnimateElement: f SVGAnimateElement()
#SVGAnimateMotionElement: f SVGAnimateMotionElement()
#SVGAnimateTransformElement: f SVGAnimateTransformElement()
#SVGAnimatedAngle: f SVGAnimatedAngle()
#SVGAnimatedBoolean: f SVGAnimatedBoolean()
#SVGAnimatedEnumeration: f SVGAnimatedEnumeration()
#SVGAnimatedInteger: f SVGAnimatedInteger()
#SVGAnimatedLength: f SVGAnimatedLength()
#SVGAnimatedLengthList: f SVGAnimatedLengthList()
#SVGAnimatedNumber: f SVGAnimatedNumber()
#SVGAnimatedNumberList: f SVGAnimatedNumberList()
#SVGAnimatedPreserveAspectRatio: f SVGAnimatedPreserveAspectRatio()
#SVGAnimatedRect: f SVGAnimatedRect()
#SVGAnimatedString: f SVGAnimatedString()
#SVGAnimatedTransformList: f SVGAnimatedTransformList()
#SVGAnimationElement: f SVGAnimationElement()
#SVGCircleElement: f SVGCircleElement()
#SVGClipPathElement: f SVGClipPathElement()
#SVGComponentTransferFunctionElement: f SVGComponentTransferFunctionElement()
#SVGDefsElement: f SVGDefsElement()
#SVGDescElement: f SVGDescElement()
#SVGElement: f SVGElement()
#SVGEllipseElement: f SVGEllipseElement()
#SVGFEBlendElement: f SVGFEBlendElement()
#SVGFEColorMatrixElement: f SVGFEColorMatrixElement()
#SVGFEComponentTransferElement: f SVGFEComponentTransferElement()
#SVGFECompositeElement: f SVGFECompositeElement()
#SVGFEConvolveMatrixElement: f SVGFEConvolveMatrixElement()
#SVGFEDiffuseLightingElement: f SVGFEDiffuseLightingElement()
#SVGFEDisplacementMapElement: f SVGFEDisplacementMapElement()
#SVGFEDistantLightElement: f SVGFEDistantLightElement()
#SVGFEDropShadowElement: f SVGFEDropShadowElement()
#SVGFEFloodElement: f SVGFEFloodElement()
#SVGFEFuncAElement: f SVGFEFuncAElement()
#SVGFEFuncBElement: f SVGFEFuncBElement()
#SVGFEFuncGElement: f SVGFEFuncGElement()
#SVGFEFuncRElement: f SVGFEFuncRElement()
#SVGFEGaussianBlurElement: f SVGFEGaussianBlurElement()
#SVGFEImageElement: f SVGFEImageElement()
#SVGFEMergeElement: f SVGFEMergeElement()
#SVGFEMergeNodeElement: f SVGFEMergeNodeElement()
#SVGFEMorphologyElement: f SVGFEMorphologyElement()
#SVGFEOffsetElement: f SVGFEOffsetElement()
#SVGFEPointLightElement: f SVGFEPointLightElement()
#SVGFESpecularLightingElement: f SVGFESpecularLightingElement()
#SVGFESpotLightElement: f SVGFESpotLightElement()
#SVGFETileElement: f SVGFETileElement()
#SVGFETurbulenceElement: f SVGFETurbulenceElement()
#SVGFilterElement: f SVGFilterElement()
#SVGForeignObjectElement: f SVGForeignObjectElement()
#SVGGElement: f SVGGElement()
#SVGGeometryElement: f SVGGeometryElement()
#SVGGradientElement: f SVGGradientElement()
#SVGGraphicsElement: f SVGGraphicsElement()
#SVGImageElement: f SVGImageElement()
#SVGLength: f SVGLength()
#SVGLengthList: f SVGLengthList()
#SVGLineElement: f SVGLineElement()
#SVGLinearGradientElement: f SVGLinearGradientElement()
#SVGMPathElement: f SVGMPathElement()
#SVGMarkerElement: f SVGMarkerElement()
#SVGMaskElement: f SVGMaskElement()
#SVGMatrix: f SVGMatrix()
#SVGMetadataElement: f SVGMetadataElement()
#SVGNumber: f SVGNumber()
#SVGNumberList: f SVGNumberList()
#SVGPathElement: f SVGPathElement()
#SVGPatternElement: f SVGPatternElement()
#SVGPoint: f SVGPoint()
#SVGPointList: f SVGPointList()
#SVGPolygonElement: f SVGPolygonElement()
#SVGPolylineElement: f SVGPolylineElement()
#SVGPreserveAspectRatio: f SVGPreserveAspectRatio()
#SVGRadialGradientElement: f SVGRadialGradientElement()
#SVGRect: f SVGRect()
#SVGRectElement: f SVGRectElement()
#SVGSVGElement: f SVGSVGElement()
#SVGScriptElement: f SVGScriptElement()
#SVGSetElement: f SVGSetElement()
#SVGStopElement: f SVGStopElement()
#SVGStringList: f SVGStringList()
#SVGStyleElement: f SVGStyleElement()
#SVGSwitchElement: f SVGSwitchElement()
#SVGSymbolElement: f SVGSymbolElement()
#SVGTSpanElement: f SVGTSpanElement()
#SVGTextContentElement: f SVGTextContentElement()
#SVGTextElement: f SVGTextElement()
#SVGTextPathElement: f SVGTextPathElement()
#SVGTextPositioningElement: f SVGTextPositioningElement()
#SVGTitleElement: f SVGTitleElement()
#SVGTransform: f SVGTransform()
#SVGTransformList: f SVGTransformList()
#SVGUnitTypes: f SVGUnitTypes()
#SVGUseElement: f SVGUseElement()
#SVGViewElement: f SVGViewElement()
#Screen: f Screen()
#ScreenOrientation: f ScreenOrientation()
#ScriptProcessorNode: f ScriptProcessorNode()
#SecurityPolicyViolationEvent: f SecurityPolicyViolationEvent()
#Selection: f Selection()
#Sensor: f Sensor()
#SensorErrorEvent: f SensorErrorEvent()
#ServiceWorker: f ServiceWorker()
#ServiceWorkerContainer: f ServiceWorkerContainer()
#ServiceWorkerRegistration: f ServiceWorkerRegistration()
#Set: f Set()
#ShadowRoot: f ShadowRoot()
#SharedArrayBuffer: f SharedArrayBuffer()
#SharedWorker: f SharedWorker()
#SourceBuffer: f SourceBuffer()
#SourceBufferList: f SourceBufferList()
#SpeechSynthesisErrorEvent: f SpeechSynthesisErrorEvent()
#SpeechSynthesisEvent: f SpeechSynthesisEvent()
#SpeechSynthesisUtterance: f SpeechSynthesisUtterance()
#StaticRange: f StaticRange()
#StereoPannerNode: f StereoPannerNode()
#Storage: f Storage()
#StorageEvent: f StorageEvent()
#StorageManager: f StorageManager()
#String: f String()
#StylePropertyMap: f StylePropertyMap()
#StylePropertyMapReadOnly: f StylePropertyMapReadOnly()
#StyleSheet: f StyleSheet()
#StyleSheetList: f StyleSheetList()
#SubmitEvent: f SubmitEvent()
#SubtleCrypto: f SubtleCrypto()
#Symbol: f Symbol()
#SyncManager: f SyncManager()
#SyntaxError: f SyntaxError()
#TaskAttributionTiming: f TaskAttributionTiming()
#Text: f Text()
#TextDecoder: f TextDecoder()
#TextDecoderStream: f TextDecoderStream()
#TextEncoder: f TextEncoder()
#TextEncoderStream: f TextEncoderStream()
#TextEvent: f TextEvent()
#TextMetrics: f TextMetrics()
#TextTrack: f TextTrack()
#TextTrackCue: f TextTrackCue()
#TextTrackCueList: f TextTrackCueList()
#TextTrackList: f TextTrackList()
#TimeRanges: f TimeRanges()
#Touch: f Touch()
#TouchEvent: f TouchEvent()
#TouchList: f TouchList()
#TrackEvent: f TrackEvent()
#TransformStream: f TransformStream()
#TransitionEvent: f TransitionEvent()
#TreeWalker: f TreeWalker()
#TrustedHTML: f TrustedHTML()
#TrustedScript: f TrustedScript()
#TrustedScriptURL: f TrustedScriptURL()
#TrustedTypePolicy: f TrustedTypePolicy()
#TrustedTypePolicyFactory: f TrustedTypePolicyFactory()
#TypeError: f TypeError()
#UIEvent: f UIEvent()
#URIError: f URIError()
#URL: f URL()
#URLSearchParams: f URLSearchParams()
#USB: f USB()
#USBAlternateInterface: f USBAlternateInterface()
#USBConfiguration: f USBConfiguration()
#USBConnectionEvent: f USBConnectionEvent()
#USBDevice: f USBDevice()
#USBEndpoint: f USBEndpoint()
#USBInTransferResult: f USBInTransferResult()
#USBInterface: f USBInterface()
#USBIsochronousInTransferPacket: f USBIsochronousInTransferPacket()
#USBIsochronousInTransferResult: f USBIsochronousInTransferResult()
#USBIsochronousOutTransferPacket: f USBIsochronousOutTransferPacket()
#USBIsochronousOutTransferResult: f USBIsochronousOutTransferResult()
#USBOutTransferResult: f USBOutTransferResult()
#Uint8Array: f Uint8Array()
#Uint8ClampedArray: f Uint8ClampedArray()
#Uint16Array: f Uint16Array()
#Uint32Array: f Uint32Array()
#UserActivation: f UserActivation()
#VTTCue: f VTTCue()
#ValidityState: f ValidityState()
#VideoPlaybackQuality: f VideoPlaybackQuality()
#VisualViewport: f VisualViewport()
#WakeLock: f WakeLock()
#WakeLockSentinel: f WakeLockSentinel()
#WaveShaperNode: f WaveShaperNode()
#WeakMap: f WeakMap()
#WeakRef: f WeakRef()
#WeakSet: f WeakSet()
#WebAssembly: WebAssembly {compile: ƒ, validate: ƒ, instantiate: ƒ, compileStreaming: ƒ, instantiateStreaming: ƒ, …}
#WebGL2RenderingContext: f WebGL2RenderingContext()
#WebGLActiveInfo: f WebGLActiveInfo()
#WebGLBuffer: f WebGLBuffer()
#WebGLContextEvent: f WebGLContextEvent()
#WebGLFramebuffer: f WebGLFramebuffer()
#WebGLProgram: f WebGLProgram()
#WebGLQuery: f WebGLQuery()
#WebGLRenderbuffer: f WebGLRenderbuffer()
#WebGLRenderingContext: f WebGLRenderingContext()
#WebGLSampler: f WebGLSampler()
#WebGLShader: f WebGLShader()
#WebGLShaderPrecisionFormat: f WebGLShaderPrecisionFormat()
#WebGLSync: f WebGLSync()
#WebGLTexture: f WebGLTexture()
#WebGLTransformFeedback: f WebGLTransformFeedback()
#WebGLUniformLocation: f WebGLUniformLocation()
#WebGLVertexArrayObject: f WebGLVertexArrayObject()
#WebKitCSSMatrix: f DOMMatrix()
#WebKitMutationObserver: f MutationObserver()
#WebSocket: f WebSocket()
#WheelEvent: f WheelEvent()
#Window: f Window()
#Worker: f Worker()
#Worklet: f Worklet()
#WritableStream: f WritableStream()
#WritableStreamDefaultWriter: f WritableStreamDefaultWriter()
#XMLDocument: f XMLDocument()
#XMLHttpRequest: f XMLHttpRequest()
#XMLHttpRequestEventTarget: f XMLHttpRequestEventTarget()
#XMLHttpRequestUpload: f XMLHttpRequestUpload()
#XMLSerializer: f XMLSerializer()
#XPathEvaluator: f XPathEvaluator()
#XPathExpression: f XPathExpression()
#XPathResult: f XPathResult()
#XRAnchor: f XRAnchor()
#XRAnchorSet: f XRAnchorSet()
#XRBoundedReferenceSpace: f XRBoundedReferenceSpace()
#XRDOMOverlayState: f XRDOMOverlayState()
#XRFrame: f XRFrame()
#XRHitTestResult: f XRHitTestResult()
#XRHitTestSource: f XRHitTestSource()
#XRInputSource: f XRInputSource()
#XRInputSourceArray: f XRInputSourceArray()
#XRInputSourceEvent: f XRInputSourceEvent()
#XRInputSourcesChangeEvent: f XRInputSourcesChangeEvent()
#XRLayer: f XRLayer()
#XRPose: f XRPose()
#XRRay: f XRRay()
#XRReferenceSpace: f XRReferenceSpace()
#XRReferenceSpaceEvent: f XRReferenceSpaceEvent()
#XRRenderState: f XRRenderState()
#XRRigidTransform: f XRRigidTransform()
#XRSession: f XRSession()
#XRSessionEvent: f XRSessionEvent()
#XRSpace: f XRSpace()
#XRSystem: f XRSystem()
#XRTransientInputHitTestResult: f XRTransientInputHitTestResult()
#XRTransientInputHitTestSource: f XRTransientInputHitTestSource()
#XRView: f XRView()
#XRViewerPose: f XRViewerPose()
#XRViewport: f XRViewport()
#XRWebGLLayer: f XRWebGLLayer()
#XSLTProcessor: f XSLTProcessor()
#console: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
#decodeURI: f decodeURI()
#decodeURIComponent: f decodeURIComponent()
#encodeURI: f encodeURI()
#encodeURIComponent: f encodeURIComponent()
#escape: f escape()
#eval: f eval()
#event: undefined
#globalThis: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
#isFinite: f isFinite()
#isNaN: f isNaN()
#offscreenBuffering: true
#parseFloat: f parseFloat()
#parseInt: f parseInt()
#undefined: undefined
#unescape: f unescape()
#webkitMediaStream: f MediaStream()
#webkitRTCPeerConnection: f RTCPeerConnection()
#webkitSpeechGrammar: f SpeechGrammar()
#webkitSpeechGrammarList: f SpeechGrammarList()
#webkitSpeechRecognition: f SpeechRecognition()
#webkitSpeechRecognitionError: f SpeechRecognitionErrorEvent()
#webkitSpeechRecognitionEvent: f SpeechRecognitionEvent()
#webkitURL: f URL()
#__proto__: Window
