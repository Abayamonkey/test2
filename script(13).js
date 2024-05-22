"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9025], {
    35483: function(e, t, i) {
        let s, n;
        i.d(t, {
            D9: function() {
                return ta
            },
            Dr: function() {
                return sP
            },
            HE: function() {
                return $
            },
            HQ: function() {
                return N
            },
            J2: function() {
                return sk
            },
            LO: function() {
                return V
            },
            MR: function() {
                return H
            },
            Uc: function() {
                return K
            },
            Uz: function() {
                return q
            },
            XR: function() {
                return U
            },
            g6: function() {
                return G
            },
            tk: function() {
                return eB
            }
        });
        var a, o = i(75054), r = i(2784), l = i(80589), d = i(52005), h = i(67149), p = i(92613), c = i(43866), u = i(51987), g = i(17947), m = i(24580), f = i(10186), b = i(95374), v = i(17578), y = i(99882), S = Object.defineProperty, I = Object.defineProperties, x = Object.getOwnPropertyDescriptor, k = Object.getOwnPropertyDescriptors, w = Object.getOwnPropertyNames, B = Object.getOwnPropertySymbols, P = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable, E = (e,t,i)=>t in e ? S(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i, z = (e,t)=>{
            for (var i in t || (t = {}))
                P.call(t, i) && E(e, i, t[i]);
            if (B)
                for (var i of B(t))
                    C.call(t, i) && E(e, i, t[i]);
            return e
        }
        , M = (e,t)=>I(e, k(t)), D = (e,t)=>{
            for (var i in t)
                S(e, i, {
                    get: t[i],
                    enumerable: !0
                })
        }
        , j = (e,t,i)=>(E(e, "symbol" != typeof t ? t + "" : t, i),
        i), A = (e,t,i)=>new Promise((s,n)=>{
            var a = e=>{
                try {
                    r(i.next(e))
                } catch (e) {
                    n(e)
                }
            }
              , o = e=>{
                try {
                    r(i.throw(e))
                } catch (e) {
                    n(e)
                }
            }
              , r = e=>e.done ? s(e.value) : Promise.resolve(e.value).then(a, o);
            r((i = i.apply(e, t)).next())
        }
        ), T = class {
            constructor() {
                j(this, "onPinchStart"),
                j(this, "onPinchEnd"),
                j(this, "onPinch"),
                j(this, "onKeyDown"),
                j(this, "onKeyUp"),
                j(this, "onPointerMove"),
                j(this, "onPointerUp"),
                j(this, "onPan"),
                j(this, "onZoom"),
                j(this, "onPointerDown"),
                j(this, "onPointCanvas"),
                j(this, "onDoubleClickCanvas"),
                j(this, "onRightPointCanvas"),
                j(this, "onDragCanvas"),
                j(this, "onReleaseCanvas"),
                j(this, "onPointShape"),
                j(this, "onDoubleClickShape"),
                j(this, "onRightPointShape"),
                j(this, "onDragShape"),
                j(this, "onHoverShape"),
                j(this, "onUnhoverShape"),
                j(this, "onReleaseShape"),
                j(this, "onPointBounds"),
                j(this, "onDoubleClickBounds"),
                j(this, "onRightPointBounds"),
                j(this, "onDragBounds"),
                j(this, "onHoverBounds"),
                j(this, "onUnhoverBounds"),
                j(this, "onReleaseBounds"),
                j(this, "onPointBoundsHandle"),
                j(this, "onDoubleClickBoundsHandle"),
                j(this, "onRightPointBoundsHandle"),
                j(this, "onDragBoundsHandle"),
                j(this, "onHoverBoundsHandle"),
                j(this, "onUnhoverBoundsHandle"),
                j(this, "onReleaseBoundsHandle"),
                j(this, "onPointHandle"),
                j(this, "onDoubleClickHandle"),
                j(this, "onRightPointHandle"),
                j(this, "onDragHandle"),
                j(this, "onHoverHandle"),
                j(this, "onUnhoverHandle"),
                j(this, "onReleaseHandle"),
                j(this, "onShapeBlur"),
                j(this, "onShapeClone")
            }
        }
        , O = ((tY = O || {}).Idle = "idle",
        tY.Connecting = "connecting",
        tY.Connected = "connected",
        tY.Disconnected = "disconnected",
        tY), F = ((t$ = F || {}).Transform = "transform",
        t$.Translate = "translate",
        t$.TransformSingle = "transformSingle",
        t$.Brush = "brush",
        t$.Arrow = "arrow",
        t$.Draw = "draw",
        t$.Erase = "erase",
        t$.Rotate = "rotate",
        t$.Handle = "handle",
        t$.Grid = "grid",
        t$.Edit = "edit",
        t$), L = ((tX = L || {}).Idle = "idle",
        tX.PointingHandle = "pointingHandle",
        tX.PointingBounds = "pointingBounds",
        tX.PointingBoundsHandle = "pointingBoundsHandle",
        tX.TranslatingLabel = "translatingLabel",
        tX.TranslatingHandle = "translatingHandle",
        tX.Translating = "translating",
        tX.Transforming = "transforming",
        tX.Rotating = "rotating",
        tX.Pinching = "pinching",
        tX.Brushing = "brushing",
        tX.Creating = "creating",
        tX.EditingText = "editing-text",
        tX), R = ((tV = R || {}).Backward = "backward",
        tV.Forward = "forward",
        tV.ToFront = "toFront",
        tV.ToBack = "toBack",
        tV), H = ((tq = H || {}).Top = "top",
        tq.CenterVertical = "centerVertical",
        tq.Bottom = "bottom",
        tq.Left = "left",
        tq.CenterHorizontal = "centerHorizontal",
        tq.Right = "right",
        tq), Q = ((tJ = Q || {}).Horizontal = "horizontal",
        tJ.Vertical = "vertical",
        tJ), U = ((t0 = U || {}).Horizontal = "horizontal",
        t0.Vertical = "vertical",
        t0), Z = ((t1 = Z || {}).Horizontal = "horizontal",
        t1.Vertical = "vertical",
        t1), K = ((t2 = K || {}).Sticky = "sticky",
        t2.Ellipse = "ellipse",
        t2.Rectangle = "rectangle",
        t2.Triangle = "triangle",
        t2.Draw = "draw",
        t2.Arrow = "arrow",
        t2.Line = "line",
        t2.Text = "text",
        t2.Group = "group",
        t2.Image = "image",
        t2.Video = "video",
        t2), _ = ((t5 = _ || {}).Arrow = "arrow",
        t5), N = ((t3 = N || {}).White = "white",
        t3.LightGray = "lightGray",
        t3.Gray = "gray",
        t3.Black = "black",
        t3.Green = "green",
        t3.Cyan = "cyan",
        t3.Blue = "blue",
        t3.Indigo = "indigo",
        t3.Violet = "violet",
        t3.Red = "red",
        t3.Orange = "orange",
        t3.Yellow = "yellow",
        t3), W = ((t4 = W || {}).Small = "small",
        t4.Medium = "medium",
        t4.Large = "large",
        t4), G = ((t6 = G || {}).Draw = "draw",
        t6.Solid = "solid",
        t6.Dashed = "dashed",
        t6.Dotted = "dotted",
        t6), Y = ((t8 = Y || {}).Small = "small",
        t8.Medium = "medium",
        t8.Large = "large",
        t8.ExtraLarge = "extraLarge",
        t8), $ = ((t9 = $ || {}).Start = "start",
        t9.Middle = "middle",
        t9.End = "end",
        t9.Justify = "justify",
        t9), X = ((t7 = X || {}).Script = "script",
        t7.Sans = "sans",
        t7.Serif = "serif",
        t7.Mono = "mono",
        t7), V = ((ie = V || {}).Image = "image",
        ie.Video = "video",
        ie), q = ((it = q || {}).PNG = "png",
        it.JPG = "jpeg",
        it.WEBP = "webp",
        it.SVG = "svg",
        it.JSON = "json",
        it), J = ((ii = J || {}).Transparent = "transparent",
        ii.Auto = "auto",
        ii.Light = "light",
        ii.Dark = "dark",
        ii), ee = new Map, et = "tldraw-fonts", ei = `
@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Source+Code+Pro&family=Source+Sans+Pro&family=Crimson+Pro&display=block');

@font-face {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
    U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
    U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Recursive Mono';
  font-style: normal;
  font-weight: 420;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/recursive/v23/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImqvTxvU-MXGX2fSqasNfUlTGZnI14ZeY.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
    U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`, es = r.createContext({});
        function en() {
            return r.useContext(es)
        }
        var ea = r.createContext({})
          , eo = {
            "style.menu.color": "Color",
            "style.menu.fill": "Fill",
            "style.menu.dash": "Dash",
            "style.menu.size": "Size",
            "style.menu.keep.open": "Keep Open",
            "style.menu.font": "Font",
            "style.menu.align": "Align",
            styles: "Styles",
            "zoom.in": "Zoom In",
            "zoom.out": "Zoom Out",
            to: "To",
            "menu.tools": "Tools",
            "menu.transform": "Transform",
            "menu.file": "File",
            "menu.edit": "Edit",
            "menu.view": "View",
            "menu.preferences": "Preferences",
            "menu.sign.in": "Sign In",
            "menu.sign.out": "Sign Out",
            "become.a.sponsor": "Become a Sponsor",
            "zoom.to.content": "Back to content",
            "zoom.to.selection": "Zoom to Selection",
            "zoom.to.fit": "Zoom to Fit",
            "zoom.to": "Zoom to",
            "preferences.dark.mode": "Dark Mode",
            "preferences.focus.mode": "Focus Mode",
            "preferences.debug.mode": "Debug Mode",
            "preferences.show.grid": "Show Grid",
            "preferences.use.cad.selection": "Use CAD Selection",
            "preferences.keep.stylemenu.open": "Keep Style Menu Open",
            "preferences.always.show.snaps": "Always Show Snaps",
            "preferences.rotate.handles": "Rotate Handles",
            "preferences.binding.handles": "Binding Handles",
            "preferences.clone.handles": "Clone Handles",
            undo: "Undo",
            redo: "Redo",
            cut: "Cut",
            copy: "Copy",
            paste: "Paste",
            "copy.as": "Copy As",
            "export.as": "Export As",
            "select.all": "Select All",
            "select.none": "Select None",
            delete: "Delete",
            "new.project": "New Project",
            open: "Open",
            save: "Save",
            "save.as": "Save As",
            "upload.media": "Upload Media",
            "create.page": "Create Page",
            "new.page": "New Page",
            "page.name": "Page Name",
            duplicate: "Duplicate",
            cancel: "Cancel",
            "copy.invite.link": "Copy Invite Link",
            "copy.readonly.link": "Copy ReadOnly Link",
            "create.multiplayer.project": "Create a Multiplayer Project",
            "copy.multiplayer.project": "Copy to Multiplayer Project",
            select: "Select",
            eraser: "Eraser",
            draw: "Draw",
            arrow: "Arrow",
            text: "Text",
            sticky: "Sticky",
            rectangle: "Rectangle",
            ellipse: "Ellipse",
            triangle: "Triangle",
            line: "Line",
            rotate: "Rotate",
            "lock.aspect.ratio": "Lock Aspect Ratio",
            "unlock.aspect.ratio": "Unlock Aspect Ratio",
            group: "Group",
            ungroup: "Ungroup",
            "move.to.back": "Move to Back",
            "move.backward": "Move Backward",
            "move.forward": "Move Forward",
            "move.to.front": "Move to Front",
            "reset.angle": "Reset Angle",
            lock: "Lock",
            unlock: "Unlock",
            "align.distribute": "Align / Distribute",
            "move.to.page": "Move to Page",
            "flip.horizontal": "Flip Horizontal",
            "flip.vertical": "Flip Vertical",
            move: "Move",
            "to.front": "To Front",
            forward: "Forward",
            backward: "Backward",
            back: "To Back",
            language: "Language",
            "translation.link": "Learn More",
            "dock.position": "Dock Position",
            bottom: "Bottom",
            left: "Left",
            right: "Right",
            top: "Top",
            page: "Page",
            "keyboard.shortcuts": "Keyboard shortcuts",
            search: "Search",
            loading: "Loading{dots}",
            "export.background": "Export Background",
            transparent: "Transparent",
            auto: "Auto",
            light: "Light",
            dark: "Dark",
            github: "Github",
            twitter: "Twitter",
            discord: "Discord",
            image: "Image",
            "align.left": "Align Left",
            "align.center.x": "Align Horizontal Center",
            "align.right": "Align Right",
            "align.top": "Align Top",
            "align.center.y": "Align Vertical Center",
            "align.bottom": "Align Bottom",
            "distribute.x": "Distribute Horizontal",
            "distribute.y": "Distribute Vertical",
            "stretch.x": "Stretch Horizontal",
            "stretch.y": "Stretch Vertical",
            "dialog.save.firsttime": "Do you want to save your current project?",
            "dialog.save.again": "Do you want to save changes to your current project?",
            "dialog.cancel": "Cancel",
            "dialog.no": "No",
            "dialog.yes": "Yes",
            "enter.file.name": "Enter file name"
        }
          , er = [{
            locale: "ar",
            label: "عربي",
            messages: {
                "style.menu.color": "اللون",
                "style.menu.fill": "يملأ",
                "style.menu.dash": "متقطع",
                "style.menu.size": "حجم",
                "style.menu.keep.open": "تبقى مفتوحة",
                "style.menu.font": "الخط",
                "style.menu.align": "محاذاة",
                styles: "الأنماط",
                "zoom.in": "تكبير",
                "zoom.out": "تصغير",
                to: "إلى",
                "menu.tools": "أدوات",
                "menu.transform": "التحويلات",
                "menu.file": "ملف",
                "menu.edit": "تحرير",
                "menu.view": "معاينة",
                "menu.preferences": "التفضيلات",
                "menu.sign.in": "تسجيل الدخول",
                "menu.sign.out": "خروج",
                "become.a.sponsor": "كن راعياً",
                "zoom.to.content": "العودة إلى المحتوى",
                "zoom.to.selection": "تكبير للتحديد",
                "zoom.to.fit": "تكبير لتناسب",
                "zoom.to": "تكبير إلى",
                "preferences.dark.mode": "الوضع الداكن",
                "preferences.focus.mode": "وضع التركيز",
                "preferences.debug.mode": "وضع التصحيح",
                "preferences.show.grid": "اظهر الشبكة",
                "preferences.use.cad.selection": "استخدام التحديد CAD",
                "preferences.keep.stylemenu.open": "الاحتفاظ بقائمة النمط مفتوحة",
                "preferences.always.show.snaps": "إظهار اللقطات دائمًا",
                "preferences.rotate.handles": "تدوير المقابض",
                "preferences.binding.handles": "مقابض ملزمة",
                "preferences.clone.handles": "مقابض استنساخ",
                undo: "الغاء",
                redo: "إعادة",
                cut: "قطع",
                copy: "نسح",
                paste: "لصق",
                "copy.as": "نسخ الى",
                "export.as": "صدر الى",
                "select.all": "اختر الكل",
                "select.none": "لا تختر شيء",
                delete: "حذف",
                "new.project": "مشروع جديد",
                open: "فتح",
                save: "حفظ",
                "save.as": "حفظ باسم",
                "upload.media": "تحميل الوسائط",
                "create.page": "إنشاء صفحة",
                "new.page": "صفحة جديدة",
                "page.name": "اسم الصفحة",
                duplicate: "نسخ",
                cancel: "الغاء",
                "copy.invite.link": "نسخ رابط الدعوة",
                "copy.readonly.link": "نسخ رابط دعوة القراءة فقط",
                "create.multiplayer.project": "قم بإنشاء مشروع متعدد اللاعبين",
                "copy.multiplayer.project": "نسخ إلى مشروع متعدد اللاعبين",
                select: "اختر",
                eraser: "ممحاة",
                draw: "رسم",
                arrow: "سهم",
                text: "نص",
                sticky: "لاصق",
                rectangle: "مربع",
                ellipse: "بيضاوي",
                triangle: "مثلث",
                line: "خط",
                rotate: "دوّر",
                "lock.aspect.ratio": "قفل نسبة الابعاد",
                "unlock.aspect.ratio": "فتح قفل نسبة الابعاد",
                group: "جمّع",
                ungroup: "فك التجمع",
                "move.to.back": "انتقل إلى الخلف",
                "move.backward": "تحريك للخلف",
                "move.forward": "تحريك للأمام",
                "move.to.front": "تحرك للأمام",
                "reset.angle": "إعادة ضبط الزاوية",
                lock: "قفل",
                unlock: "الغاء القفل",
                "move.to.page": "انقل إلى الصفحة",
                "flip.horizontal": "انعكاس أفقي",
                "flip.vertical": "انعكاس عمودي",
                move: "حرّك",
                "to.front": "للامام",
                forward: "للخلف",
                backward: "للوراء",
                back: "خلف",
                language: "لغة",
                "translation.link": "للمزيد",
                "dock.position": "موقع الادوات",
                bottom: "اسفل",
                left: "يسار",
                right: "يمين",
                top: "أعلى",
                page: "صفحة",
                "keyboard.shortcuts": "اختصارات لوحة المفاتيح",
                search: "بحث",
                loading: "{dots}تحميل ",
                "export.background": "تصدير الخلفية",
                transparent: "شـفاف",
                auto: "ذاتي",
                light: "خفيف",
                dark: "غامق"
            }
        }, {
            locale: "da",
            label: "Danish",
            messages: {
                "style.menu.color": "Farve",
                "style.menu.fill": "Fyld",
                "style.menu.dash": "Streg",
                "style.menu.size": "St\xf8rrelse",
                "style.menu.keep.open": "Hold \xe5ben",
                "style.menu.font": "Skrifttype",
                "style.menu.align": "Juster",
                styles: "Format",
                "zoom.in": "Zoom ind",
                "zoom.out": "Zoom ud",
                to: "til",
                "menu.file": "Fil",
                "menu.edit": "Rediger",
                "menu.view": "Vis",
                "menu.preferences": "Indstillinger",
                "menu.sign.in": "Log ind",
                "menu.sign.out": "Log ud",
                "become.a.sponsor": "Bliv sponsor",
                "zoom.to.selection": "Zoom til valgte",
                "zoom.to.fit": "Zoom til l\xe6rred",
                "zoom.to": "Zoom til",
                "preferences.dark.mode": "M\xf8rkt udseende",
                "preferences.focus.mode": "Fokus tilstand",
                "preferences.debug.mode": "Debug tilstand",
                "preferences.show.grid": "Vis net",
                "preferences.use.cad.selection": "Brug CAD udv\xe6lgelse",
                "preferences.keep.stylemenu.open": "Hold formatmenuen \xe5ben",
                "preferences.always.show.snaps": "Vis altid snaps",
                "preferences.rotate.handles": "Roteringsh\xe5ndtag",
                "preferences.binding.handles": "Bindingsh\xe5ndtag",
                "preferences.clone.handles": "Kloningsh\xe5ndtag",
                undo: "Fortryd",
                redo: "Gentag",
                cut: "Klip",
                copy: "Kopier",
                paste: "Inds\xe6t",
                "copy.as": "Kopier som",
                "export.as": "Eksporter som",
                "select.all": "V\xe6lg alt",
                "select.none": "Frav\xe6lg alt",
                delete: "Slet",
                "new.project": "Nyt projekt",
                open: "\xc5ben",
                save: "Gem",
                "save.as": "Gem som",
                "upload.media": "Upload medie",
                "create.page": "Opret side",
                "new.page": "Ny side",
                "page.name": "Sidenavn",
                duplicate: "Dupliker",
                cancel: "Fortryd",
                "copy.invite.link": "Kopier invitationslink",
                "create.multiplayer.project": "Opret multiplayer projekt",
                "copy.multiplayer.project": "Kopier til multiplayer projekt",
                select: "V\xe6lg",
                eraser: "Viskel\xe6der",
                draw: "Tegn",
                arrow: "Pil",
                text: "Tekst",
                sticky: "Note",
                rectangle: "Rektangel",
                ellipse: "Ellipse",
                triangle: "Trekant",
                line: "Linje",
                rotate: "Roter",
                "lock.aspect.ratio": "L\xe5s billedformat",
                "unlock.aspect.ratio": "Frig\xf8r billedformat",
                group: "Grupper",
                ungroup: "Opdel gruppe",
                "move.to.back": "Placer bagerst",
                "move.backward": "Flyt tilbage",
                "move.forward": "Flyt frem",
                "move.to.front": "L\xe6g forrest",
                "reset.angle": "Nulstil vinkel",
                lock: "L\xe5s",
                unlock: "L\xe5s op",
                "move.to.page": "Flyt til side",
                "flip.horizontal": "Vend vandret",
                "flip.vertical": "Vend lodret",
                move: "Flyt",
                "to.front": "Forrest",
                forward: "Frem",
                backward: "Tilbage",
                back: "Bagerst",
                language: "Sprog"
            }
        }, {
            locale: "de",
            label: "Deutsch",
            messages: {
                "style.menu.color": "Farbe",
                "style.menu.fill": "F\xfcllen",
                "style.menu.dash": "Strich",
                "style.menu.size": "Gr\xf6\xdfe",
                "style.menu.keep.open": "Offen halten",
                "style.menu.font": "Schriftart",
                "style.menu.align": "Ausrichten",
                styles: "Stile",
                "zoom.in": "Heranzoomen",
                "zoom.out": "Herauszoomen",
                to: "zu",
                "menu.file": "Datei",
                "menu.edit": "Bearbeiten",
                "menu.view": "Ansicht",
                "menu.preferences": "Pr\xe4ferenzen",
                "menu.sign.in": "Einloggen",
                "menu.sign.out": "Ausloggen",
                "become.a.sponsor": "Sponsor werden",
                "zoom.to.selection": "Zur Auswahl zoomen",
                "zoom.to.fit": "Zoom anpassen",
                "zoom.to": "Zoomen nach",
                "preferences.dark.mode": "Dunkler Modus",
                "preferences.focus.mode": "Fokus Modus",
                "preferences.debug.mode": "Debug Modus",
                "preferences.show.grid": "Gitter anzeigen",
                "preferences.use.cad.selection": "CAD Auswahl verwenden",
                "preferences.keep.stylemenu.open": "Stilmen\xfc offen halten",
                "preferences.always.show.snaps": "Hilfslinien immer anzeigen",
                "preferences.rotate.handles": "Rotiergriffe",
                "preferences.binding.handles": "Bindegriffe",
                "preferences.clone.handles": "Klongriffe",
                undo: "R\xfcckg\xe4ngig machen",
                redo: "Wiederherstellen",
                cut: "Ausschneiden",
                copy: "Kopieren",
                paste: "Einf\xfcgen",
                "copy.as": "Kopieren als",
                "export.as": "Exportieren als",
                "select.all": "Alles ausw\xe4hlen",
                "select.none": "Nichts ausw\xe4hlen",
                delete: "L\xf6schen",
                "new.project": "Neues Projekt",
                open: "\xd6ffnen",
                save: "Speichern",
                "save.as": "Speichern als",
                "upload.media": "Medien hochladen",
                "create.page": "Seite erstellen",
                "new.page": "Neue Seite",
                "page.name": "Seitenname",
                duplicate: "Duplizieren",
                cancel: "Abbrechen",
                "copy.invite.link": "Einladungslink kopieren",
                "create.multiplayer.project": "Mehrspielerprojekt kreieren",
                "copy.multiplayer.project": "In Mehrspielerprojekt kopieren",
                select: "Ausw\xe4hlen",
                eraser: "Radierer",
                draw: "Malen",
                arrow: "Pfeil",
                text: "Text",
                sticky: "Notiz",
                rectangle: "Rechteck",
                ellipse: "Ellipse",
                triangle: "Dreieck",
                line: "Linie",
                rotate: "Drehen",
                "lock.aspect.ratio": "Seitenverh\xe4ltnis sperren",
                "unlock.aspect.ratio": "Seitenverh\xe4ltnis entsperren",
                group: "Gruppieren",
                ungroup: "Gruppierung aufheben",
                "move.to.back": "Nach Hinten verschieben",
                "move.backward": "R\xfcckw\xe4rts schieben",
                "move.forward": "Vorw\xe4rts schieben",
                "move.to.front": "Nach Vorne verschieben",
                "reset.angle": "Winkel zur\xfccksetzen",
                lock: "Sperren",
                unlock: "Entsperren",
                "move.to.page": "Zu Seite verschieben",
                "flip.horizontal": "Horizontal spiegeln",
                "flip.vertical": "Vertikal spiegeln",
                move: "Verschieben",
                "to.front": "Nach Vorne",
                forward: "Vorw\xe4rts",
                backward: "R\xfcckw\xe4rts",
                back: "Hinten",
                language: "Sprache"
            }
        }, {
            locale: "en",
            label: "English",
            messages: {}
        }, {
            locale: "es",
            label: "Espa\xf1ol",
            messages: {
                "style.menu.color": "Color",
                "style.menu.fill": "Relleno",
                "style.menu.dash": "L\xednea",
                "style.menu.size": "Tama\xf1o",
                "style.menu.keep.open": "Mantener abierto",
                "style.menu.font": "Fuente",
                "style.menu.align": "Alineaci\xf3n",
                styles: "Estilos",
                "zoom.in": "Acercar",
                "zoom.out": "Alejar",
                to: "A",
                "menu.file": "Archivo",
                "menu.edit": "Editar",
                "menu.view": "Ver",
                "menu.preferences": "Preferencias",
                "menu.sign.in": "Iniciar sesi\xf3n",
                "menu.sign.out": "Cerrar sesi\xf3n",
                "become.a.sponsor": "Convi\xe9rtete en patrocinador",
                "zoom.to.content": "Acercar al contenido",
                "zoom.to.selection": "Acercar a la selecci\xf3n",
                "zoom.to.fit": "Ajustar a la ventana",
                "zoom.to": "Acercar a",
                "preferences.dark.mode": "Modo oscuro",
                "preferences.focus.mode": "Modo concentraci\xf3n",
                "preferences.debug.mode": "Modo depuraci\xf3n",
                "preferences.show.grid": "Mostrar cuadr\xedcula",
                "preferences.use.cad.selection": "Usar selecci\xf3n CAD",
                "preferences.keep.stylemenu.open": "Mantener men\xfa de estilos abierto",
                "preferences.always.show.snaps": "Mostrar puntos de ajuste",
                "preferences.rotate.handles": "Control de rotaci\xf3n",
                "preferences.binding.handles": "Control de vinculaci\xf3n",
                "preferences.clone.handles": "Control de clonaci\xf3n",
                undo: "Deshacer",
                redo: "Rehacer",
                cut: "Cortar",
                copy: "Copiar",
                paste: "Pegar",
                "copy.as": "Copiar como",
                "export.as": "Exportar como",
                "select.all": "Selecionar todo",
                "select.none": "Selecionar nada",
                delete: "Borrar",
                "new.project": "Nuevo Proyecto",
                open: "Abrir",
                save: "Guardar",
                "save.as": "Guardar como",
                "upload.media": "Subir medios",
                "create.page": "Crear p\xe1gina",
                "new.page": "Nueva p\xe1gina",
                "page.name": "Nombre de p\xe1gina",
                duplicate: "Duplicar",
                cancel: "Cancelar",
                "copy.invite.link": "Copiar invitaci\xf3n",
                "copy.readonly.link": "Copiar invitaci\xf3n (solo lectura)",
                "create.multiplayer.project": "Crear proyecto multijugador",
                "copy.multiplayer.project": "Copiar proyecto multijugador",
                select: "Seleccionar",
                eraser: "Borrador",
                draw: "Dibujar",
                arrow: "Flecha",
                text: "Texto",
                sticky: "Pegatina",
                rectangle: "Rect\xe1ngulo",
                ellipse: "Elipse",
                triangle: "Tri\xe1ngulo",
                line: "L\xednea",
                rotate: "Rotar",
                "lock.aspect.ratio": "Bloquear relaci\xf3n de aspecto",
                "unlock.aspect.ratio": "Desbloquear relaci\xf3n de aspecto",
                group: "Agrupar",
                ungroup: "Desagrupar",
                "move.to.back": "Mover al fondo",
                "move.backward": "Mover atr\xe1s",
                "move.forward": "Mover adelante",
                "move.to.front": "Mover al frente",
                "reset.angle": "Restablecer \xe1ngulo",
                lock: "Bloquear",
                unlock: "Desbloquear",
                "move.to.page": "Mover a p\xe1gina",
                "flip.horizontal": "Voltear horizontalmente",
                "flip.vertical": "Voltear verticalmente",
                move: "Mover",
                "to.front": "Al frente",
                forward: "Adelante",
                backward: "Atr\xe1s",
                back: "Fondo",
                language: "Idioma",
                "translation.link": "Saber m\xe1s",
                "dock.position": "Posici\xf3n del dock",
                bottom: "Abajo",
                "keyboard.shortcuts": "Atajos de teclado",
                loading: "Cargando{dots}",
                left: "Izquierda",
                right: "Derecha",
                top: "Arriba",
                search: "Buscar",
                page: "P\xe1gina",
                image: "Imagen"
            }
        }, {
            locale: "fa",
            label: "فارسی",
            messages: {
                "style.menu.color": "رنگ",
                "style.menu.fill": "توپُر",
                "style.menu.dash": "خط‌ چین",
                "style.menu.size": "اندازه",
                "style.menu.keep.open": "باز باش",
                "style.menu.font": "فونت",
                "style.menu.align": "تراز",
                styles: "استایل‌ها",
                "zoom.in": "زوم جلو",
                "zoom.out": "زوم عقب",
                to: "به",
                "menu.file": "فایل",
                "menu.edit": "ویرایش",
                "menu.view": "نمایش",
                "menu.preferences": "تنظیم‌ها",
                "menu.sign.in": "ورود",
                "menu.sign.out": "خروج",
                "become.a.sponsor": " حامی شو",
                "zoom.to.selection": "نمایش انتخاب‌شده‌ها",
                "zoom.to.fit": "نمایش کل صفحه",
                "zoom.to": "زوم به ",
                "preferences.dark.mode": "حالت شب",
                "preferences.focus.mode": "حالت تمرکز",
                "preferences.debug.mode": "حالت عیب‌یایی",
                "preferences.show.grid": "نمایش خطوط راهنما",
                "preferences.use.cad.selection": "استفاده از حالت انتخابی CAD",
                "preferences.keep.stylemenu.open": "منوی استایل باز باشه",
                "preferences.always.show.snaps": "راهنمای لبه‌ها رو نشون بده",
                "preferences.rotate.handles": "دستگیره‌های چرخش رو نشون بده",
                "preferences.binding.handles": "دستهٔ لبه‌ها رو نشون بده",
                "preferences.clone.handles": "دستگیره‌های کپی رو نشون بده",
                undo: "یه قدم عقب",
                redo: "یه قدم جلو",
                cut: "بریدن",
                copy: "کپی",
                paste: "جای‌گذاری",
                "copy.as": "کپی به‌‌عنوان",
                "export.as": "خروجی با فرمت",
                "select.all": "انتخاب همه",
                "select.none": "انتخاب هیچ",
                delete: " پاک‌کردن",
                "new.project": "پروژهٔ تازه",
                open: "باز کن",
                save: "ذخیره",
                "save.as": "ذخیره با اسم",
                "upload.media": "آپلود عکس",
                "create.page": "ساخت صفحه",
                "new.page": "صفحهٔ تازه",
                "page.name": "اسم صفحه",
                duplicate: "کپی درجا",
                cancel: "بی‌خیال",
                "copy.invite.link": "کپی لینک دعوت",
                "create.multiplayer.project": "ساخت پروژهٔ چندنفره",
                "copy.multiplayer.project": "کپی در پروژهٔ چندنفره",
                select: "انتخاب",
                eraser: "پاک‌کن",
                draw: "رسم",
                arrow: "فلِش",
                text: "متن",
                sticky: "یادداشت",
                rectangle: "چارگوش",
                ellipse: "گردی",
                triangle: "سه‌گوش",
                line: "خط",
                rotate: "چرخش",
                "lock.aspect.ratio": "تثبیت نسبت ابعاد",
                "unlock.aspect.ratio": "نسبت ابعاد متغیر",
                group: "جمع کن",
                ungroup: "جدا کن",
                "move.to.back": "ببر آخر",
                "move.backward": "ببر عقب",
                "move.forward": "ببر اول",
                "move.to.front": "ببر جلو",
                "reset.angle": "حذف چرخش",
                lock: "قفل‌ کن",
                unlock: "باز کن",
                "move.to.page": "ببر به صفحه",
                "flip.horizontal": "برگردون افقی",
                "flip.vertical": "برگردون عمودی",
                move: "جابه‌جاش کن",
                "to.front": "به اول",
                forward: "به جلو",
                backward: "به عقب",
                back: "به آخر",
                language: "زبان"
            }
        }, {
            locale: "fr",
            label: "Fran\xe7ais",
            messages: {
                "style.menu.color": "Couleur",
                "style.menu.fill": "Remplir",
                "style.menu.dash": "Bordure",
                "style.menu.size": "Taille",
                "style.menu.keep.open": "Toujours afficher le menu",
                "style.menu.font": "Police",
                "style.menu.align": "Alignement",
                styles: "Styles",
                "zoom.in": "Zoom avant",
                "zoom.out": "Zoom arri\xe8re",
                to: "\xc0",
                "menu.tools": "Outils",
                "menu.transform": "Transformation",
                "menu.file": "Fichier",
                "menu.edit": "\xc9dition",
                "menu.view": "Afficher",
                "menu.preferences": "Pr\xe9f\xe9rences",
                "menu.sign.in": "S'authentifier",
                "menu.sign.out": "Se d\xe9connecter",
                "become.a.sponsor": "Devenir un sponsor",
                "zoom.to.content": "Retour au contenu",
                "zoom.to.selection": "Ajuster le zoom \xe0 la s\xe9lection",
                "zoom.to.fit": "Adapter le zoom au contenu",
                "zoom.to": "R\xe9tablir le zoom \xe0",
                "preferences.dark.mode": "Mode sombre",
                "preferences.focus.mode": "Mode focus",
                "preferences.debug.mode": "Afficher la barre d\xe9veloppeur",
                "preferences.show.grid": "Afficher la grille",
                "preferences.use.cad.selection": "Utiliser la s\xe9lection CAD",
                "preferences.keep.stylemenu.open": "Toujours afficher le menu styles",
                "preferences.always.show.snaps": "Afficher les rep\xe8res dynamiques",
                "preferences.rotate.handles": "Manier la rotation",
                "preferences.binding.handles": "Manier les liaisons",
                "preferences.clone.handles": "Manier le clonage",
                undo: "Annuler",
                redo: "R\xe9tablir",
                cut: "Couper",
                copy: "Copier",
                paste: "Coller",
                "copy.as": "Copier au format",
                "export.as": "Exporter au format",
                "select.all": "Tout s\xe9lectionner",
                "select.none": "Tout d\xe9s\xe9lectionner",
                delete: "Supprimer",
                "new.project": "Nouveau project",
                open: "Ouvrir",
                save: "Enregistrer",
                "save.as": "Enregistrer sous",
                "upload.media": "Importer un m\xe9dia",
                "create.page": "Cr\xe9er une page",
                "new.page": "Nouvelle Page",
                "page.name": "Nom de la page",
                duplicate: "Dupliquer",
                cancel: "Annuler",
                "copy.invite.link": "Copier le lien d'invitation",
                "copy.readonly.link": "Copier le lien en lecture seule d'invitation",
                "create.multiplayer.project": "Cr\xe9er un project multi-joueurs",
                "copy.multiplayer.project": "Copier dans un projet multi-joueurs",
                select: "S\xe9lection",
                eraser: "Gomme",
                draw: "Crayon",
                arrow: "Fl\xe8che",
                text: "Texte",
                sticky: "Note",
                rectangle: "Rectangle",
                ellipse: "Cercle",
                triangle: "Triangle",
                line: "Ligne",
                rotate: "Rotation",
                "lock.aspect.ratio": "Verrouiller les proportions",
                "unlock.aspect.ratio": "D\xe9verrouiller les proportions",
                group: "Grouper",
                ungroup: "D\xe9grouper",
                "move.to.back": "D\xe9placer \xe0 l'arri\xe8re-plan",
                "move.backward": "Reculer d'un plan",
                "move.forward": "Avancer d'un plan",
                "move.to.front": "Placer au premier plan",
                "reset.angle": "R\xe9initialiser la rotation",
                lock: "Verrouiller",
                unlock: "D\xe9verrouiller",
                "align.distribute": "Alignement / R\xe9partion",
                "move.to.page": "D\xe9placer vers la page",
                "flip.horizontal": "Retourner horizontalement",
                "flip.vertical": "Retourner verticalement",
                move: "Disposition",
                "to.front": "Placer au premier plan",
                forward: "Avancer d'un plan",
                backward: "Reculer d'un plan",
                back: "D\xe9placer \xe0 l'arri\xe8re-plan",
                language: "Langage",
                "translation.link": "En savoir plus",
                "dock.position": "Position du dock",
                bottom: "En bas",
                left: "\xc0 gauche",
                right: "\xc0 droite",
                top: "En haut",
                page: "Page",
                "keyboard.shortcuts": "Raccourcis clavier",
                search: "Rechercher",
                loading: "Chargement{dots}",
                "export.background": "Couleur d'arri\xe8re-plan de l'export",
                transparent: "Transparent",
                auto: "Automatique",
                light: "Clair",
                dark: "Sombre"
            }
        }, {
            locale: "he",
            label: "עברית",
            messages: {
                "style.menu.color": "צבע",
                "style.menu.fill": "מלא",
                "style.menu.dash": "גבול",
                "style.menu.size": "גודל",
                "style.menu.keep.open": "השאר פתוח",
                "style.menu.font": "גופן",
                "style.menu.align": "יישור",
                styles: "עיצוב",
                "zoom.in": "הגדל תצוגה",
                "zoom.out": "הקטן תצוגה",
                to: "ל",
                "menu.file": "קובץ",
                "menu.edit": "עריכה",
                "menu.view": "תצוגה",
                "menu.preferences": "מאפיינים",
                "menu.sign.in": "הירשם",
                "menu.sign.out": "התנתק",
                "become.a.sponsor": "מתן חסות",
                "zoom.to.selection": "זום לבחירה",
                "zoom.to.fit": "זום להתאמה",
                "zoom.to": "זום ל",
                "preferences.dark.mode": "מצב חשוך",
                "preferences.focus.mode": "מצב פוקוס",
                "preferences.debug.mode": "מצב דיבאג",
                "preferences.show.grid": "(גריד)הראה רשת עימוד",
                "preferences.use.cad.selection": "סימון CAD",
                "preferences.keep.stylemenu.open": "השאר תפריט עיצוב פתוח",
                "preferences.always.show.snaps": "הראה קווי מתאר",
                "preferences.rotate.handles": "הראה ידיות סיבוב",
                "preferences.binding.handles": "הראה ידיות קשירה",
                "preferences.clone.handles": "הראה ידיות שיכפול",
                undo: "בטל",
                redo: "עשה מחדש",
                cut: "גזור",
                copy: "העתק",
                paste: "הדבק",
                "copy.as": "העתק כ",
                "export.as": "ייצא כ",
                "select.all": "בחר הכל",
                "select.none": "בטל בחירה",
                delete: "מחק",
                "new.project": "פרויקט חדש",
                open: "פתח",
                save: "שמור",
                "save.as": "שמור כ",
                "upload.media": "העלאת מדיה",
                "create.page": "צור דף",
                "new.page": "דף חדש",
                "page.name": "שם הדף",
                duplicate: "שכפל",
                cancel: "בטל",
                "copy.invite.link": "העתק קישור הזמנה",
                "create.multiplayer.project": "צור פרויקט רב משתתפים",
                "copy.multiplayer.project": "העתק לפרויקט רב משתתפים",
                select: "סמן",
                eraser: "מחק",
                draw: "צייר",
                arrow: "חץ",
                text: "טקסט",
                sticky: "דביקי",
                rectangle: "מרובע",
                ellipse: "אליפסה",
                triangle: "משולש",
                line: "קו",
                rotate: "סובב",
                "lock.aspect.ratio": "נעל יחס רוחב-גובה",
                "unlock.aspect.ratio": "שחרר נעילת יחס רוחב-גובה",
                group: "קבץ",
                ungroup: "בטל קיבוץ",
                "move.to.back": "הבא לתחתית",
                "move.backward": "הזז אחורה",
                "move.forward": "הזז קדימה",
                "move.to.front": "הבא לחזית",
                "reset.angle": "אפס זווית",
                lock: "נעל",
                unlock: "שחרר נעילה",
                "move.to.page": "הזז לדף",
                "flip.horizontal": "הפוך אופקית",
                "flip.vertical": "הפוך אנכית",
                move: "הזז",
                "to.front": "הבא לקדימה",
                forward: "קדימה",
                backward: "אחורה",
                back: "בחזרה",
                language: "שפה"
            }
        }, {
            locale: "it",
            label: "Italiano",
            messages: {
                "style.menu.color": "Colore",
                "style.menu.fill": "Riempi",
                "style.menu.dash": "Tratteggo",
                "style.menu.size": "Dimensione",
                "style.menu.keep.open": "Mantieni aperto",
                "style.menu.font": "Font",
                "style.menu.align": "Allineamento",
                styles: "Stile",
                "zoom.in": "Ingrandisci",
                "zoom.out": "Rimpicciolisci",
                to: "Imposta",
                "menu.file": "File",
                "menu.edit": "Modifica",
                "menu.view": "Visualizzazione",
                "menu.preferences": "Preferenze",
                "menu.sign.in": "Accedi",
                "menu.sign.out": "Esci",
                "become.a.sponsor": "Sponsorizza",
                "zoom.to.selection": "Adatta alla selezione",
                "zoom.to.fit": "Adatta",
                "zoom.to": "Ingrandisci",
                "preferences.dark.mode": "Modalit\xe0 scura",
                "preferences.focus.mode": "Modalit\xe0 zen",
                "preferences.debug.mode": "Modalit\xe0 sviluppatore",
                "preferences.show.grid": "Mostra griglia",
                "preferences.use.cad.selection": "Selezione CAD",
                "preferences.keep.stylemenu.open": "Mantieni menu stile aperto",
                "preferences.always.show.snaps": "Mostra sempre le guide",
                "preferences.rotate.handles": "Controlli d'inclinazione",
                "preferences.binding.handles": "Controlli d'associazione",
                "preferences.clone.handles": "Controlli di clonazione",
                undo: "Annulla",
                redo: "Ripristina",
                cut: "Taglia",
                copy: "Copia",
                paste: "Incolla",
                "copy.as": "Copia come",
                "export.as": "Esporta come",
                "select.all": "Seleziona tutto",
                "select.none": "Deseleziona tutto",
                delete: "Elimina",
                "new.project": "Nuovo progetto",
                open: "Apri",
                save: "Salva",
                "save.as": "Salva come",
                "upload.media": "Carica contenuti multimediali",
                "create.page": "Crea nuova pagina",
                "new.page": "Nuova pagina",
                "page.name": "Nome pagina",
                page: "Pagina",
                duplicate: "Duplica",
                cancel: "Chiudi",
                "copy.invite.link": "Copia link invito",
                "create.multiplayer.project": "Crea progetto multiplayer",
                "copy.multiplayer.project": "Trasforma in progetto multiplayer",
                select: "Seleziona",
                eraser: "Gomma",
                draw: "Matita",
                arrow: "Freccia",
                text: "Casella di testo",
                sticky: "Post-it",
                rectangle: "Rettangolo",
                ellipse: "Ellisse",
                triangle: "Triangolo",
                line: "Linea",
                rotate: "Ruota",
                "lock.aspect.ratio": "Blocca rapporto lati",
                "unlock.aspect.ratio": "Sblocca rapporto lati",
                group: "Raggruppa",
                ungroup: "Separa",
                "move.to.back": "Muovi in fondo",
                "move.backward": "Sposta indietro",
                "move.forward": "Sposta avanti",
                "move.to.front": "Muovi in fronte",
                "reset.angle": "Reimposta angolo",
                lock: "Blocca",
                unlock: "Sblocca",
                "move.to.page": "Trasferisci a pagina",
                "flip.horizontal": "Ribalta orizzontalmente",
                "flip.vertical": "Ribalta verticalmente",
                move: "Sposta",
                "to.front": "In primo piano",
                forward: "Sposta avanti",
                backward: "Sposta indietro",
                back: "In fondo",
                language: "Lingua",
                "dock.position": "Posizione dock",
                bottom: "In basso",
                left: "Sinistra",
                right: "Destra",
                top: "In Alto"
            }
        }, {
            locale: "ja",
            label: "日本語",
            messages: {
                "style.menu.color": "色",
                "style.menu.fill": "塗りつぶし",
                "style.menu.dash": "線",
                "style.menu.size": "大きさ",
                "style.menu.keep.open": "常に表示",
                "style.menu.font": "フォント",
                "style.menu.align": "配置",
                styles: "スタイル",
                "zoom.in": "拡大",
                "zoom.out": "縮小",
                to: " ",
                "menu.file": "ファイル",
                "menu.edit": "編集",
                "menu.view": "表示",
                "menu.preferences": "設定",
                "menu.sign.in": "サインイン",
                "menu.sign.out": "サインアウト",
                "become.a.sponsor": "支援する",
                "zoom.to.selection": "選択したアイテムに合わせて拡大",
                "zoom.to.fit": "拡大してすべてを表示",
                "zoom.to": " ",
                "preferences.dark.mode": "ダークモード",
                "preferences.focus.mode": "フォーカスモード",
                "preferences.debug.mode": "デバッグモード",
                "preferences.show.grid": "グリッドを表示",
                "preferences.use.cad.selection": "CADの選択法を使用",
                "preferences.keep.stylemenu.open": "スタイルメニューを常に表示",
                "preferences.always.show.snaps": "スナップを常に表示",
                "preferences.rotate.handles": "回転ハンドルを表示",
                "preferences.binding.handles": "結合ハンドルを表示",
                "preferences.clone.handles": "クローンハンドルを表示",
                undo: "元に戻す",
                redo: "やり直し",
                cut: "切り取り",
                copy: "コピー",
                paste: "貼り付け",
                "copy.as": "形式を選択してコピー",
                "export.as": "形式を選択してエクスポート",
                "select.all": "すべて選択",
                "select.none": "選択を解除",
                delete: "削除",
                "new.project": "新しいプロジェクト",
                open: "開く",
                save: "保存",
                "save.as": "名前をつけて保存",
                "upload.media": "メディアをアップロード",
                "create.page": "ページを作成",
                "new.page": "新規ページ",
                "page.name": "ページ名",
                duplicate: "複製",
                cancel: "キャンセル",
                "copy.invite.link": "共有リンクをクリップボードにコピー",
                "create.multiplayer.project": "マルチプレイヤープロジェクトを作成",
                "copy.multiplayer.project": "マルチプレイヤープロジェクトにコピー",
                select: "選択",
                eraser: "消しゴム",
                draw: "描画",
                arrow: "矢印",
                text: "テキスト",
                sticky: "ふせん",
                rectangle: "長方形",
                ellipse: "楕円形",
                triangle: "三角形",
                line: "線",
                rotate: "回転",
                "lock.aspect.ratio": "縦横比を固定",
                "unlock.aspect.ratio": "縦横比の固定を解除",
                group: "グルーピング",
                ungroup: "グループ解除",
                "move.to.back": "最後面に移動",
                "move.backward": "ひとつ後ろに移動",
                "move.forward": "ひとつ前に移動",
                "move.to.front": "最背面に移動",
                "reset.angle": "角度を初期化",
                lock: "ロック",
                unlock: "アンロック",
                "move.to.page": "ページへ移動",
                "flip.horizontal": "水平方向に反転",
                "flip.vertical": "垂直方向に反転",
                move: "移動",
                "to.front": "最前面へ",
                forward: "ひとつ前へ",
                backward: "ひとつ後ろへ",
                back: "最背面へ",
                language: "言語"
            }
        }, {
            locale: "ko-kr",
            label: "한국어",
            messages: {
                "style.menu.color": "색깔",
                "style.menu.fill": "채우기",
                "style.menu.dash": "테두리",
                "style.menu.size": "크기",
                "style.menu.keep.open": "항상 열기",
                "style.menu.font": "글꼴",
                "style.menu.align": "정렬",
                styles: "스타일",
                "zoom.in": "확대",
                "zoom.out": "축소",
                to: "to",
                "menu.file": "파일",
                "menu.edit": "편집",
                "menu.view": "보기",
                "menu.preferences": "설정",
                "menu.sign.in": "로그인",
                "menu.sign.out": "로그아웃",
                "become.a.sponsor": "후원자 되기",
                "zoom.to.selection": "선택 요소 맞추기",
                "zoom.to.fit": "전체 맞추기",
                "zoom.to": "맞추기",
                "preferences.dark.mode": "다크 모드",
                "preferences.focus.mode": "집중 모드",
                "preferences.debug.mode": "디버그 모드",
                "preferences.show.grid": "격자 보기",
                "preferences.use.cad.selection": "CAD 선택 사용",
                "preferences.keep.stylemenu.open": "스타일 메뉴 항상 열기",
                "preferences.always.show.snaps": "Snap 항상 열기",
                "preferences.rotate.handles": "회전 보이기",
                "preferences.binding.handles": "Binding Handles",
                "preferences.clone.handles": "복제 보이기",
                undo: "실행 취소",
                redo: "다시 실행",
                cut: "자르기",
                copy: "복사",
                paste: "붙여넣기",
                "copy.as": "다른 형식으로 복사하기",
                "export.as": "내보내기",
                "select.all": "전체 선택",
                "select.none": "선택 안함",
                delete: "삭제하기",
                "new.project": "새 프로젝트",
                open: "열기",
                save: "저장",
                "save.as": "다른 이름으로 저장",
                "upload.media": "미디어 업로드",
                "create.page": "새 페이지 만들기",
                "new.page": "새 페이지",
                "page.name": "페이지 이름",
                duplicate: "복제",
                cancel: "취소",
                "copy.invite.link": "초대 링크 복사하기",
                "create.multiplayer.project": "공동 프로젝트 만들기",
                "copy.multiplayer.project": "공동 프로젝트로 복사하기",
                select: "선택",
                eraser: "지우개",
                draw: "그리기",
                arrow: "화살표",
                text: "텍스트",
                sticky: "메모",
                rectangle: "사각형",
                ellipse: "원",
                triangle: "삼각형",
                line: "선",
                rotate: "회전",
                "lock.aspect.ratio": "비율 잠금",
                "unlock.aspect.ratio": "비율 잠금 해제",
                group: "그룹화",
                ungroup: "그룹화 해제",
                "move.to.back": "맨 뒤로 보내기",
                "move.backward": "뒤로 보내기",
                "move.forward": "앞으로 가져오기",
                "move.to.front": "맨 앞으로 가져오기",
                "reset.angle": "회전 초기화",
                lock: "잠구기",
                unlock: "잠금 해제하기",
                "move.to.page": "페이지로 이동",
                "flip.horizontal": "수평으로 뒤집기",
                "flip.vertical": "수직으로 뒤집기",
                move: "순서",
                "to.front": "맨 앞으로",
                forward: "앞으로",
                backward: "뒤로",
                back: "맨 뒤로",
                language: "언어"
            }
        }, {
            locale: "ne",
            label: "नेपाली",
            messages: {
                "style.menu.color": "रंग",
                "style.menu.fill": "भर्नुहोस्",
                "style.menu.dash": "धर्का",
                "style.menu.size": "आकार",
                "style.menu.keep.open": "खुला राख्नुहोस्",
                "style.menu.font": "फन्ट",
                "style.menu.align": "पङ्क्तिबद्ध",
                styles: "शैलीहरू",
                "zoom.in": "जुम इन",
                "zoom.out": "जुम आउट",
                to: "टु",
                "menu.file": "फाइल",
                "menu.edit": "सम्पादन गर्नुहोस्",
                "menu.view": "भ्यू",
                "menu.preferences": "प्राथमिकताहरू",
                "menu.sign.in": "साइन इन गर्नुहोस्",
                "menu.sign.out": "साइन आउट गर्नुहोस्",
                "become.a.sponsor": "प्रायोजक बन्नुहोस्",
                "zoom.to.selection": "जुम टु सेलेक्सन",
                "zoom.to.fit": "जुम टु फिट",
                "zoom.to": "जुम टु",
                "preferences.dark.mode": "अँध्यारो मोड",
                "preferences.focus.mode": "फोकस मोड",
                "preferences.debug.mode": "डिबग मोड",
                "preferences.show.grid": "ग्रिड देखाउनुहोस्",
                "preferences.use.cad.selection": "CAD सेलेक्सन गर्नुहोस्",
                "preferences.keep.stylemenu.open": "स्टाइल मेनु खुला राख्नुहोस्",
                "preferences.always.show.snaps": "सधैँ स्न्यापहरू देखाउनुहोस्",
                "preferences.rotate.handles": "ह्यान्डलहरू घुमाउनुहोस्",
                "preferences.binding.handles": "बाइन्डिङ ह्यान्डलहरू",
                "preferences.clone.handles": "क्लोन ह्यान्डलहरू",
                undo: "पूर्ववत गर्नुहोस्",
                redo: "पुनः गर्नुहोस्",
                cut: "कट गर्नुहोस्",
                copy: "कपि गर्नुहोस्",
                paste: "पेस्ट गर्नुहोस्",
                "copy.as": "कपि एज",
                "export.as": "एक्सपोर्ट एज",
                "select.all": "सबै छान्नुहोस्",
                "select.none": "केहि पनि सेलेक्ट नगर्नुहोस्",
                delete: "मेटाउनुहोस्",
                "new.project": "नयाँ परियोजना",
                open: "खोल्नुहोस्",
                save: "सुरक्षित गर्नुहोस्",
                "save.as": "सेभ एज",
                "upload.media": "मिडिया अपलोड गर्नुहोस्",
                "create.page": "पृष्ठ सिर्जना गर्नुहोस्",
                "new.page": "नयाँ पृष्ठ सिर्जना गर्नुहोस्",
                "page.name": "पृष्ठको नाम",
                duplicate: "अनुलिपि गर्नुहोस्",
                cancel: "रद्द गर्नुहोस्",
                "copy.invite.link": "निमन्त्रणा लिङ्क कपि गर्नुहोस्",
                "create.multiplayer.project": "मल्टिप्लेयर परियोजना सिर्जना गर्नुहोस्",
                "copy.multiplayer.project": "मल्टिप्लेयर प्रोजेक्टमा कपि गर्नुहोस्",
                select: "सेलेक्ट",
                eraser: "इरेजर",
                draw: "चित्र बनाउनु",
                arrow: "तीर",
                text: "शब्द",
                sticky: "टाँसिने",
                rectangle: "आयत",
                ellipse: "दीर्घवृत्त",
                triangle: "त्रिभुज",
                line: "रेखा",
                rotate: "घुमाउनुहोस्",
                "lock.aspect.ratio": "आकार अनुपात लक गर्नुहोस्",
                "unlock.aspect.ratio": "आकार अनुपात अनलक गर्नुहोस्",
                group: "समूह",
                ungroup: "समूह रद्द गर्नुहोस्",
                "move.to.back": "पछाडि सार्नुहोस्",
                "move.backward": "थप पछाडि सार्नुहोस्",
                "move.forward": "अगाडि सार्नुहोस्",
                "move.to.front": "थप अगाडि सार्नुहोस्",
                "reset.angle": "कोण रिसेट गर्नुहोस्",
                lock: "लक गर्नुहोस्",
                unlock: "अनलक गर्नुहोस्",
                "move.to.page": "पृष्ठमा सार्नुहोस्",
                "flip.horizontal": "तेर्सो फ्लिप गर्नुहोस्",
                "flip.vertical": "ठाडो फ्लिप गर्नुहोस्",
                move: "सार्नुहोस्",
                "to.front": "थप अगाडि",
                forward: "अगाडि",
                backward: "पछाडि",
                back: "थप पछाडि",
                language: "भाषा"
            }
        }, {
            locale: "no",
            label: "Norwegian",
            messages: {
                "style.menu.color": "Farge",
                "style.menu.fill": "Fyll",
                "style.menu.dash": "Linje",
                "style.menu.size": "St\xf8rrelse",
                "style.menu.keep.open": "Hold \xe5pen",
                "style.menu.font": "Teksttype",
                "style.menu.align": "Juster",
                styles: "Stiler",
                "zoom.in": "Zoom inn",
                "zoom.out": "Zoom ut",
                to: "til",
                "menu.file": "Fil",
                "menu.edit": "Rediger",
                "menu.view": "Vis",
                "menu.preferences": "Preferanser",
                "menu.sign.in": "Logg inn",
                "menu.sign.out": "Logg ut",
                "become.a.sponsor": "Bli en sponsor",
                "zoom.to.selection": "Zoom til valg",
                "zoom.to.fit": "Zoom for \xe5 passe",
                "zoom.to": "Zoom til",
                "preferences.dark.mode": "M\xf8rk modus",
                "preferences.focus.mode": "Fokus modus",
                "preferences.debug.mode": "Debug modus",
                "preferences.show.grid": "Vis rutenett",
                "preferences.use.cad.selection": "Bruk CAD seleksjon",
                "preferences.keep.stylemenu.open": "Hold stilmeny \xe5pen",
                "preferences.always.show.snaps": "Vis alltid snaps",
                "preferences.rotate.handles": "Vis roteringsh\xe5ndtak",
                "preferences.binding.handles": "Vis bindingsh\xe5ndtak",
                "preferences.clone.handles": "Vis kloningsh\xe5ndtak",
                undo: "Angre",
                redo: "Gj\xf8r om",
                cut: "Klipp ut",
                copy: "Kopier",
                paste: "Lim inn",
                "copy.as": "Kopier som",
                "export.as": "Eksporter som",
                "select.all": "Velg alle",
                "select.none": "Velg ingen",
                delete: "Slett",
                "new.project": "Nytt prosjekt",
                open: "\xc5pne",
                save: "Lagre",
                "save.as": "Lagre som",
                "upload.media": "Last opp media",
                "create.page": "Opprett side",
                "new.page": "Ny side",
                "page.name": "Sidenavn",
                duplicate: "Dupliser",
                cancel: "Avbryt",
                "copy.invite.link": "Kopier invitasjonslink",
                "create.multiplayer.project": "Opprett et flerspiller prosjekt",
                "copy.multiplayer.project": "Kopier til flerspiller prosjekt",
                select: "Velg",
                eraser: "Viskel\xe6r",
                draw: "Tegn",
                arrow: "Pil",
                text: "Tekst",
                sticky: "Lapp",
                rectangle: "Rektangel",
                ellipse: "Ellipse",
                triangle: "Trekant",
                line: "Linje",
                rotate: "Roter",
                "lock.aspect.ratio": "L\xe5s st\xf8rrelsesforhold",
                "unlock.aspect.ratio": "L\xe5s opp st\xf8rrelsesforhold",
                group: "Grupper",
                ungroup: "Avgrupper",
                "move.to.back": "Flytt bakerst",
                "move.backward": "Flytt bakover",
                "move.forward": "Flytt forover",
                "move.to.front": "Flytt til front",
                "reset.angle": "Tilbakestill vinkel",
                lock: "L\xe5s",
                unlock: "L\xe5s opp",
                "move.to.page": "Flytt til side",
                "flip.horizontal": "Snu horisontalt",
                "flip.vertical": "Snu vertikalt",
                move: "Flytt",
                "to.front": "Foran",
                forward: "Framover",
                backward: "Bakover",
                back: "Bakerst",
                language: "Spr\xe5k"
            }
        }, {
            locale: "pl",
            label: "Polski",
            messages: {
                "style.menu.color": "Kolor",
                "style.menu.fill": "Wypełnienie",
                "style.menu.dash": "Linia",
                "style.menu.size": "Rozmiar",
                "style.menu.keep.open": "Zachowaj otwarte",
                "style.menu.font": "Czcionka",
                "style.menu.align": "Wyr\xf3wnanie",
                styles: "Style",
                "zoom.in": "Przybliż",
                "zoom.out": "Oddal",
                to: "do",
                "menu.file": "Plik",
                "menu.edit": "Edycja",
                "menu.view": "Widok",
                "menu.preferences": "Preferencje",
                "menu.sign.in": "Zaloguj",
                "menu.sign.out": "Wyloguj",
                "become.a.sponsor": "Zostań sponsorem",
                "zoom.to.selection": "Przybliż do zaznaczenia",
                "zoom.to.fit": "Wypełnij ekran",
                "zoom.to": "Przybliż do",
                "preferences.dark.mode": "Tryb ciemny",
                "preferences.focus.mode": "Tryb skupienia",
                "preferences.debug.mode": "Tryb debugowania",
                "preferences.show.grid": "Pokaż siatkę",
                "preferences.use.cad.selection": "Użyj zaznaczania CAD",
                "preferences.keep.stylemenu.open": "Zachowaj menu styli otwarte",
                "preferences.always.show.snaps": "Przyciągaj obiekty",
                "preferences.rotate.handles": "Uchwyty obrotu",
                "preferences.binding.handles": "Uchwyty powiązania",
                "preferences.clone.handles": "Uchwyty klonujące",
                undo: "Cofnij",
                redo: "Powt\xf3rz",
                cut: "Wytnij",
                copy: "Kopiuj",
                paste: "Wklej",
                "copy.as": "Kopiuj jako",
                "export.as": "Eksportuj jako",
                "select.all": "Zaznacz wszystko",
                "select.none": "Odznacz wszystko",
                delete: "Usuń",
                "new.project": "Nowy projekt",
                open: "Otw\xf3rz",
                save: "Zapisz",
                "save.as": "Zapisz jako",
                "upload.media": "Załaduj multimedia",
                "create.page": "Utw\xf3rz stronę",
                "new.page": "Nowa strona",
                "page.name": "Nazwa strony",
                duplicate: "Powiel",
                cancel: "Anuluj",
                "copy.invite.link": "Kopiuj link zaproszenia",
                "create.multiplayer.project": "Stw\xf3rz projekt wieloosobowy",
                "copy.multiplayer.project": "Kopiuj do projektu wieloosobowego",
                select: "Zaznacz",
                eraser: "Gumka",
                draw: "Rysuj",
                arrow: "Strzałka",
                text: "Tekst",
                sticky: "Naklejka",
                rectangle: "Prostokąt",
                ellipse: "Elipsa",
                triangle: "Tr\xf3jkąt",
                line: "Linia",
                rotate: "Obr\xf3ć",
                "lock.aspect.ratio": "Zablokuj proporcje",
                "unlock.aspect.ratio": "Odblokuj proporcje",
                group: "Grupuj",
                ungroup: "Rozgrupuj",
                "move.to.back": "Przenieś na tył",
                "move.backward": "Przesuń do tyłu",
                "move.forward": "Przesuń do przodu",
                "move.to.front": "Przenieś na prz\xf3d",
                "reset.angle": "Resetuj kąt",
                lock: "Zablokuj",
                unlock: "Odblokuj",
                "move.to.page": "Przenieś na stronę",
                "flip.horizontal": "Odwr\xf3ć w poziomie",
                "flip.vertical": "Odwr\xf3ć w pionie",
                move: "Przenieś",
                "to.front": "Na wierzch",
                forward: "Do przodu",
                backward: "Do tyłu",
                back: "Na sp\xf3d",
                language: "Język"
            }
        }, {
            locale: "pt",
            label: "Portugu\xeas - Europeu",
            messages: {
                "style.menu.color": "Cor",
                "style.menu.fill": "Preencher",
                "style.menu.dash": "Tra\xe7o",
                "style.menu.size": "Tamanho",
                "style.menu.keep.open": "Manter aberto",
                "style.menu.font": "Fonte",
                "style.menu.align": "Alinhamento",
                styles: "Estilos",
                "zoom.in": "Aumentar zoom",
                "zoom.out": "Diminuir zoom",
                to: "para",
                "menu.file": "Ficheiro",
                "menu.edit": "Editar",
                "menu.view": "Visualizar",
                "menu.preferences": "Prefer\xeancias",
                "menu.sign.in": "Entrar",
                "menu.sign.out": "Sair",
                "become.a.sponsor": "Torne-se um patrocinador",
                "zoom.to.selection": "Zoom na sele\xe7\xe3o",
                "zoom.to.fit": "Zoom para caber",
                "zoom.to": "Zoom para",
                "preferences.dark.mode": "Modo Escuro",
                "preferences.focus.mode": "Modo Foco",
                "preferences.debug.mode": "Modo Debug",
                "preferences.show.grid": "Mostrar Grelha",
                "preferences.use.cad.selection": "Usar sele\xe7\xe3o CAD",
                "preferences.keep.stylemenu.open": "Manter Menu de Estilos Aberto",
                "preferences.always.show.snaps": "Mostrar Pontos de Ajuste",
                "preferences.rotate.handles": "Controlo de Rota\xe7\xe3o",
                "preferences.binding.handles": "Controlo de Binds",
                "preferences.clone.handles": "Controlo de Clone",
                undo: "Desfazer",
                redo: "Refazer",
                cut: "Cortar",
                copy: "Copiar",
                paste: "Colar",
                "copy.as": "Copiar como",
                "export.as": "Exportar como",
                "select.all": "Selecionar todos",
                "select.none": "Selecionar nenhum",
                delete: "Apagar",
                "new.project": "Novo Projeto",
                open: "Abrir",
                save: "Salvar",
                "save.as": "Salvar Como",
                "upload.media": "Upload M\xe9dia",
                "create.page": "Criar P\xe1gina",
                "new.page": "Nova P\xe1gina",
                "page.name": "Nome da P\xe1gina",
                duplicate: "Duplicar",
                cancel: "Cancelar",
                "copy.invite.link": "Copiar Link de Convite",
                "create.multiplayer.project": "Criar um Projeto Multi-Utilizador",
                "copy.multiplayer.project": "Copiar num Projeto Multi-Utilizador",
                select: "Selecionar",
                eraser: "Borracha",
                draw: "Desenhar",
                arrow: "Seta",
                text: "Texto",
                sticky: "Post-it",
                rectangle: "Ret\xe2ngulo",
                ellipse: "Elipse",
                triangle: "Tri\xe2ngulo",
                line: "Linha",
                rotate: "Rodar",
                "lock.aspect.ratio": "Trancar a Propor\xe7\xe3o",
                "unlock.aspect.ratio": "Destrancar a Propor\xe7\xe3o",
                group: "Agrupar",
                ungroup: "Desagrupar",
                "move.to.back": "Colocar no Fundo",
                "move.backward": "Mover abaixo",
                "move.forward": "Mover acima",
                "move.to.front": "Colocar \xe0 Frente",
                "reset.angle": "Reiniciar \xc2ngulo",
                lock: "Trancar",
                unlock: "Destrancar",
                "move.to.page": "Mover para P\xe1gina",
                "flip.horizontal": "Inverter Horizontalmente",
                "flip.vertical": "Inverter Verticalmente",
                move: "Mover",
                "to.front": "Para Frente",
                forward: "Avan\xe7ar",
                backward: "Recuar",
                back: "Voltar",
                language: "L\xedngua"
            }
        }, {
            locale: "pt-br",
            label: "Portugu\xeas - Brasil",
            messages: {
                "style.menu.color": "Cor",
                "style.menu.fill": "Preencher",
                "style.menu.dash": "Tra\xe7o",
                "style.menu.size": "Tamanho",
                "style.menu.keep.open": "Manter aberto",
                "style.menu.font": "Fonte",
                "style.menu.align": "Alinhamento",
                styles: "Estilos",
                "zoom.in": "Aumentar zoom",
                "zoom.out": "Diminuir zoom",
                to: "para",
                "menu.file": "Arquivo",
                "menu.edit": "Editar",
                "menu.view": "Visualizar",
                "menu.preferences": "Prefer\xeancias",
                "menu.sign.in": "Entrar",
                "menu.sign.out": "Sair",
                "become.a.sponsor": "Torne-se um patrocinador",
                "zoom.to.selection": "Zoom para a sele\xe7\xe3o",
                "zoom.to.fit": "Zoom para ajuste",
                "zoom.to": "Zoom para",
                "preferences.dark.mode": "Modo Escuro",
                "preferences.focus.mode": "Modo Foco",
                "preferences.debug.mode": "Modo Debug",
                "preferences.show.grid": "Mostrar Grade",
                "preferences.use.cad.selection": "Usar sele\xe7\xe3o CAD",
                "preferences.keep.stylemenu.open": "Manter Menu de Estilos Aberto",
                "preferences.always.show.snaps": "Mostrar Pontos de Ajuste",
                "preferences.rotate.handles": "Controle de Rota\xe7\xe3o",
                "preferences.binding.handles": "Controle de V\xednculos",
                "preferences.clone.handles": "Controle de Clone",
                undo: "Desfazer",
                redo: "Refazer",
                cut: "Cortar",
                copy: "Copiar",
                paste: "Colar",
                "copy.as": "Copiar como",
                "export.as": "Exportar como",
                "select.all": "Selecionar todos",
                "select.none": "Selecionar nenhum",
                delete: "Deletar",
                "new.project": "Novo Projeto",
                open: "Abrir",
                save: "Salvar",
                "save.as": "Salvar Como",
                "upload.media": "Carregar M\xeddia",
                "create.page": "Criar P\xe1gina",
                "new.page": "Nova P\xe1gina",
                "page.name": "Nome da P\xe1gina",
                duplicate: "Duplicar",
                cancel: "Cancelar",
                "copy.invite.link": "Copiar Link de Convite",
                "create.multiplayer.project": "Criar um Projeto Multijogador",
                "copy.multiplayer.project": "Copiar para Projeto Multijogador",
                select: "Selecionar",
                eraser: "Borracha",
                draw: "Desenhar",
                arrow: "Seta",
                text: "Texto",
                sticky: "Adesivo",
                rectangle: "Ret\xe2ngulo",
                ellipse: "Elipse",
                triangle: "Tri\xe2ngulo",
                line: "Linha",
                rotate: "Rotacionar",
                "lock.aspect.ratio": "Travar Propor\xe7\xe3o da Tela",
                "unlock.aspect.ratio": "Destravar Propor\xe7\xe3o da Tela",
                group: "Agrupar",
                ungroup: "Desagrupar",
                "move.to.back": "Recuar",
                "move.backward": "Enviar para Tr\xe1s",
                "move.forward": "Avan\xe7ar",
                "move.to.front": "Trazer para Frente",
                "reset.angle": "Reiniciar \xc2ngulo",
                lock: "Travar",
                unlock: "Destravar",
                "move.to.page": "Mover para P\xe1gina",
                "flip.horizontal": "Virar Horizontalmente",
                "flip.vertical": "Virar Verticalmente",
                move: "Mover",
                "to.front": "Para Frente",
                forward: "Avan\xe7ar",
                backward: "Recuar",
                back: "Voltar",
                language: "Idioma"
            }
        }, {
            locale: "ru",
            label: "Russian",
            messages: {
                "style.menu.color": "Цвет",
                "style.menu.fill": "Заполнять",
                "style.menu.dash": "Штрих",
                "style.menu.size": "Размер",
                "style.menu.keep.open": "Держать открытым",
                "style.menu.font": "Шрифт",
                "style.menu.align": "Выравнивание",
                styles: "Стиль",
                "zoom.in": "Увеличить",
                "zoom.out": "Уменьшить",
                to: "к",
                "menu.tools": "Инструменты",
                "menu.transform": "Изменение",
                "menu.file": "Файл",
                "menu.edit": "Редактирование",
                "menu.view": "Вид",
                "menu.preferences": "Настройки",
                "menu.sign.in": "Войти",
                "menu.sign.out": "Выйти",
                "become.a.sponsor": "Стать спонсором",
                "zoom.to.content": "Вернуться к содержимому",
                "zoom.to.selection": "Масштабировать по выделению",
                "zoom.to.fit": "Масштабировать по размеру экрана",
                "zoom.to": "Масштабировать к",
                "preferences.dark.mode": "Тёмная тема",
                "preferences.focus.mode": "Минималистичный режим",
                "preferences.debug.mode": "Режим отладки",
                "preferences.show.grid": "Показать сетку",
                "preferences.use.cad.selection": "Использовать CAD выделение",
                "preferences.keep.stylemenu.open": "Держать меню стилей открытым",
                "preferences.always.show.snaps": "Всегда показывать привязки",
                "preferences.rotate.handles": "Ручки вращения",
                "preferences.binding.handles": "Ручки привязки",
                "preferences.clone.handles": "Ручки клонирования",
                undo: "Отменить",
                redo: "Повторить",
                cut: "Вырезать",
                copy: "Копировать",
                paste: "Вставить",
                "copy.as": "Копировать как",
                "export.as": "Экспортировать как",
                "select.all": "Выделить всё",
                "select.none": "Снять выделение",
                delete: "Удалить",
                "new.project": "Новый проект",
                open: "Открыть",
                save: "Сохранить",
                "save.as": "Сохранить как",
                "upload.media": "Загрузить медиафайл",
                "create.page": "Создать страницу",
                "new.page": "Новая страница",
                "page.name": "Название страницы",
                duplicate: "Дублировать",
                cancel: "Отменить",
                "copy.invite.link": "Скопировать ссылку приглашения",
                "copy.readonly.link": "Скопировать ссылку только для чтения",
                "create.multiplayer.project": "Создать многопользовательский проект",
                "copy.multiplayer.project": "Скопировать в многопользовательский проект",
                select: "Выделить",
                eraser: "Ластик",
                draw: "Рисовать",
                arrow: "Стрелка",
                text: "Текст",
                sticky: "Заметка",
                rectangle: "Прямоугольник",
                ellipse: "Эллипс",
                triangle: "Треугольник",
                line: "Линия",
                rotate: "Повернуть",
                "lock.aspect.ratio": "Заблокировать соотношение сторон",
                "unlock.aspect.ratio": "Разблокировать соотношение сторон",
                group: "Сгруппировать",
                ungroup: "Разгруппировать",
                "move.to.back": "Переместить назад",
                "move.backward": "Переместить на задний план",
                "move.forward": "Переместить вперёд",
                "move.to.front": "Переместить на передний план",
                "reset.angle": "Сбросить угол",
                lock: "Блокировать",
                unlock: "Разблокировать",
                "align.distribute": "Выровнять / распределить",
                "move.to.page": "Переместить на страницу",
                "flip.horizontal": "Перевернуть горизонтально",
                "flip.vertical": "Перевернуть вертикально",
                move: "Переместить",
                "to.front": "На передний план",
                forward: "Вперед",
                backward: "На задний план",
                back: "Назад",
                language: "Язык",
                "translation.link": "Подробнее",
                "dock.position": "Расположение панели инструментов",
                bottom: "Снизу",
                left: "Слева",
                right: "Справа",
                top: "Сверху",
                page: "Страница",
                "keyboard.shortcuts": "Сочетания клавиш",
                search: "Поиск",
                loading: "Загрузка",
                "export.background": "Экспорт фона",
                transparent: "Прозрачный",
                auto: "Авто",
                light: "Светлый",
                dark: "Тёмный",
                image: "Изображение",
                "align.left": "Выровнять по левому краю",
                "align.center.x": "Выровнять по центру горизонтально",
                "align.right": "Выровнять по правому краю",
                "align.top": "Выровнять по верхнему краю",
                "align.center.y": "Выровнять по центру вертикально",
                "align.bottom": "Выровнять по нижнему краю",
                "distribute.x": "Распределить горизонтально",
                "distribute.y": "Распределить вертикально",
                "stretch.x": "Растянуть горизонтально",
                "stretch.y": "Растянуть вертикально",
                share: "Поделиться",
                "copy.current.page.link": "Скопировать ссылку на текущую страницу",
                "copy.project.link": "Скопировать ссылку на проект",
                "data.too.big.encoded": "Данные слишком велики, чтобы закодировать их в ссылке. Не включайте изображение или видео!",
                "dialog.save.firsttime": "Сохранить текущий проект?",
                "dialog.save.again": "Сохранить изменения в текущем проекте?",
                "dialog.cancel": "Отменить",
                "dialog.no": "Нет",
                "dialog.yes": "Да",
                "enter.file.name": "Введите имя файла"
            }
        }, {
            locale: "sv",
            label: "Svenska",
            messages: {
                "style.menu.color": "F\xe4rg",
                "style.menu.fill": "Ifylld",
                "style.menu.dash": "Streck",
                "style.menu.size": "Storlek",
                "style.menu.keep.open": "H\xe5ll stilmenyn \xf6ppen",
                "style.menu.font": "Typsnitt",
                "style.menu.align": "Justera",
                styles: "Utseende",
                "zoom.in": "Zooma in",
                "zoom.out": "Zooma ut",
                to: "Till",
                "menu.tools": "Verktyg",
                "menu.transform": "Transform",
                "menu.file": "Arkiv",
                "menu.edit": "Redigera",
                "menu.view": "Inneh\xe5ll",
                "menu.preferences": "Inst\xe4llningar",
                "menu.sign.in": "Logga in",
                "menu.sign.out": "Logga ut",
                "become.a.sponsor": "Bli en sponsor",
                "zoom.to.content": "Anpassa zoom till inneh\xe5ll",
                "zoom.to.selection": "Anpassa zoom till urval",
                "zoom.to.fit": "Anpassa zoom till sk\xe4rm",
                "zoom.to": "Zooma till",
                "preferences.dark.mode": "M\xf6rkt l\xe4ge",
                "preferences.focus.mode": "Fokusl\xe4ge",
                "preferences.debug.mode": "Debugl\xe4ge",
                "preferences.show.grid": "Visa rutn\xe4t",
                "preferences.use.cad.selection": "V\xe4lj som i CAD-mjukvara",
                "preferences.keep.stylemenu.open": "H\xe5ll stilmenyn \xf6ppen",
                "preferences.always.show.snaps": "Visa alltid f\xe4stpunkter",
                "preferences.rotate.handles": "Rotationshandtag",
                "preferences.binding.handles": "Bindningshandtag",
                "preferences.clone.handles": "Kloningshandtag",
                undo: "\xc5ngra",
                redo: "G\xf6r om",
                cut: "Klipp ut",
                copy: "Kopiera",
                paste: "Klistra in",
                "copy.as": "Kopiera som",
                "export.as": "Exportera till",
                "select.all": "V\xe4lj alla",
                "select.none": "V\xe4lj ingen",
                delete: "Radera",
                "new.project": "Nytt projekt",
                open: "\xd6ppna",
                save: "Spara",
                "save.as": "Spara som",
                "upload.media": "Ladda upp media",
                "create.page": "Skapa sida",
                "new.page": "Ny sida",
                "page.name": "Sidnamn",
                duplicate: "Duplicera",
                cancel: "Avbryt",
                "copy.invite.link": "Kopiera l\xe4nk med redigeringsr\xe4ttigheter",
                "copy.readonly.link": "Kopiera l\xe4nk med l\xe4sr\xe4ttigheter",
                "create.multiplayer.project": "Skapa ett Multiplayer-projekt",
                "copy.multiplayer.project": "Kopiera till Multiplayer-project",
                select: "V\xe4lj",
                eraser: "Radera",
                draw: "Rita",
                arrow: "Pil",
                text: "Text",
                sticky: "Klisterlapp",
                rectangle: "Rektangel",
                ellipse: "Ellips",
                triangle: "Triangel",
                line: "Linje",
                rotate: "Rotera",
                "lock.aspect.ratio": "L\xe5s storleksf\xf6rh\xe5llande",
                "unlock.aspect.ratio": "L\xe5s upp storleksf\xf6rh\xe5llande",
                group: "Gruppera",
                ungroup: "Avgruppera",
                "move.to.back": "Placera l\xe4ngst bak",
                "move.backward": "Flytta bak\xe5t",
                "move.forward": "Flytta fram\xe5t",
                "move.to.front": "Placera l\xe4ngst fram",
                "reset.angle": "\xc5terst\xe4ll vinkel",
                lock: "L\xe5s",
                unlock: "L\xe5s upp",
                "align.distribute": "Justera / Placera",
                "move.to.page": "Flytta till sida",
                "flip.horizontal": "V\xe4nd horisontellt",
                "flip.vertical": "V\xe4nd vertikalt",
                move: "Flytta",
                "to.front": "Till l\xe4ngst fram",
                forward: "Fram\xe5t",
                backward: "Bak\xe5t",
                back: "Till l\xe4ngst bak",
                language: "Spr\xe5k",
                "translation.link": "Mer information",
                "dock.position": "Dockningsposition",
                bottom: "Botten",
                left: "V\xe4nster",
                right: "H\xf6ger",
                top: "Topp",
                page: "Sida",
                "keyboard.shortcuts": "Tangentbordsgenv\xe4gar",
                search: "S\xf6k",
                loading: "Laddar{dots}",
                "export.background": "Exportbakgrund",
                transparent: "Transparent",
                auto: "Auto",
                light: "Ljus",
                dark: "M\xf6rk",
                github: "Github",
                twitter: "Twitter",
                discord: "Discord",
                image: "Bild"
            }
        }, {
            locale: "tr",
            label: "T\xfcrk\xe7e",
            messages: {
                "style.menu.color": "Renk",
                "style.menu.fill": "Doldur",
                "style.menu.dash": "\xc7izgi",
                "style.menu.size": "Boyut",
                "style.menu.keep.open": "A\xe7ık Tut",
                "style.menu.font": "Yazı Tipi",
                "style.menu.align": "Hizala",
                styles: "Stiller",
                "zoom.in": "Yakınlaştır",
                "zoom.out": "Uzaklaştır",
                to: "",
                "menu.file": "Dosya",
                "menu.edit": "D\xfczenle",
                "menu.view": "G\xf6r\xfcnt\xfc",
                "menu.preferences": "Tercihler",
                "menu.sign.in": "Giriş Yap",
                "menu.sign.out": "Oturumu Kapat",
                "become.a.sponsor": "Sponsor Ol",
                "zoom.to.selection": "Se\xe7ime Yakınlaştır",
                "zoom.to.fit": "Sığdırmak i\xe7in Yakınlaştır",
                "zoom.to": "Yakınlaştır",
                "preferences.dark.mode": "Karanlık Mod",
                "preferences.focus.mode": "Odak Modu",
                "preferences.debug.mode": "Debug Modu",
                "preferences.show.grid": "Izgarayı G\xf6ster",
                "preferences.use.cad.selection": "CAD Se\xe7imi Kullan",
                "preferences.keep.stylemenu.open": "Stil Men\xfcs\xfcn\xfc A\xe7ık Tut",
                "preferences.always.show.snaps": "Hiza \xc7izgilerini Hep G\xf6ster",
                "preferences.rotate.handles": "Rotasyon Kontrolc\xfcleri",
                "preferences.binding.handles": "Bağlama Kontrolc\xfcleri",
                "preferences.clone.handles": "Klon Kontrolc\xfcleri",
                undo: "Geri Al",
                redo: "Yinele",
                cut: "Kes",
                copy: "Kopyala",
                paste: "Yapıştır",
                "copy.as": "Olarak Kopyala",
                "export.as": "Olarak Dışarı Aktar",
                "select.all": "Hepsini Se\xe7",
                "select.none": "Hi\xe7birini Se\xe7me",
                delete: "Sil",
                "new.project": "Yeni Proje",
                open: "A\xe7",
                save: "Kaydet",
                "save.as": "Farklı Kaydet",
                "upload.media": "Medya Y\xfckle",
                "create.page": "Sayfa Oluştur",
                "new.page": "Yeni Sayfa",
                "page.name": "Sayfa İsmi",
                duplicate: "Kopya Oluştur",
                cancel: "İptal",
                "copy.invite.link": "Davet Linkini Kopyala",
                "create.multiplayer.project": "\xc7ok Oyunculu Proje Oluştur",
                "copy.multiplayer.project": "\xc7ok Oyunculu Projeye Kopyala",
                select: "Se\xe7",
                eraser: "Silgi",
                draw: "\xc7izim",
                arrow: "Ok",
                text: "Yazı",
                sticky: "Yapışkan",
                rectangle: "Dikd\xf6rtgen",
                ellipse: "Elips",
                triangle: "\xdc\xe7gen",
                line: "\xc7izgi",
                rotate: "D\xf6nd\xfcr",
                "lock.aspect.ratio": "En Boy Oranını Kilitle",
                "unlock.aspect.ratio": "En Boy Oranı Kilidini A\xe7",
                group: "Grupla",
                ungroup: "Gruplamayı Kaldır",
                "move.to.back": "Arkaya Taşı",
                "move.backward": "En Arkaya Taşı",
                "move.forward": "En \xd6ne Taşı",
                "move.to.front": "\xd6ne Taşı",
                "reset.angle": "A\xe7ıyı Sıfırla",
                lock: "Kilitle",
                unlock: "Kilidini A\xe7",
                "move.to.page": "Sayfaya Taşı",
                "flip.horizontal": "Yatay \xc7evir",
                "flip.vertical": "Dikey \xc7evir",
                move: "Taşı",
                "to.front": "\xd6ne",
                forward: "En \xd6ne",
                backward: "En Arkaya",
                back: "Arkaya",
                language: "Dil"
            }
        }, {
            locale: "uk",
            label: "Ukrainian",
            messages: {
                "style.menu.color": "Колір",
                "style.menu.fill": "Заповнювати",
                "style.menu.dash": "Штрих",
                "style.menu.size": "Розмір",
                "style.menu.keep.open": "Тримати відкритим",
                "style.menu.font": "Шрифт",
                "style.menu.align": "Вирівняти",
                styles: "Стиль",
                "zoom.in": "Збільшити",
                "zoom.out": "Зменшити",
                to: "до",
                "menu.file": "Файл",
                "menu.edit": "Редагування",
                "menu.view": "Вигляд",
                "menu.preferences": "Налаштування",
                "menu.sign.in": "Увійти",
                "menu.sign.out": "Вийти",
                "become.a.sponsor": "Стати спонсором",
                "zoom.to.selection": "Наблизити до виділення",
                "zoom.to.fit": "Збільшити за розміром екрану",
                "zoom.to": "Наблизити до",
                "preferences.dark.mode": "Темна тема",
                "preferences.focus.mode": "Мінімалістичний режим",
                "preferences.debug.mode": "Режим налагодження",
                "preferences.show.grid": "Показати сітку",
                "preferences.use.cad.selection": "Використовувати CAD виділення",
                "preferences.keep.stylemenu.open": "Тримати меню стилів відкритим",
                "preferences.always.show.snaps": "Завжди показувати прив'язки",
                "preferences.rotate.handles": "Ручки обертання",
                "preferences.binding.handles": "Ручки прив'язки",
                "preferences.clone.handles": "Ручки клонування",
                undo: "Скасувати",
                redo: "Повторити",
                cut: "Вирізати",
                copy: "Скопіювати",
                paste: "Вставити",
                "copy.as": "Скопіювати як",
                "export.as": "Експортувати як",
                "select.all": "Обрати все",
                "select.none": "Зняти виділення",
                delete: "Видалити",
                "new.project": "Новий проект",
                open: "Відкрити",
                save: "Зберегти",
                "save.as": "Зберегти як",
                "upload.media": "Завантажити медіа",
                "create.page": "Створити сторінку",
                "new.page": "Нова сторінка",
                "page.name": "Назва сторінки",
                duplicate: "Дублювати",
                cancel: "Скасувати",
                "copy.invite.link": "Скопіювати посилання на запрошення",
                "create.multiplayer.project": "Створити багатокористувацький проект",
                "copy.multiplayer.project": "Скопіювати в багатокористувацький проект",
                select: "Вибирати",
                eraser: "Ластик",
                draw: "Малювати",
                arrow: "Стрілка",
                text: "Текст",
                sticky: "Нотатка",
                rectangle: "Прямокутник",
                ellipse: "Еліпс",
                triangle: "Трикутник",
                line: " Лінія",
                rotate: "Повернути",
                "lock.aspect.ratio": "Заблокувати співвідношення сторін",
                "unlock.aspect.ratio": " Розблокувати співвідношення сторін",
                group: "Згрупувати",
                ungroup: " Розгрупувати",
                "move.to.back": "Перемістити назад",
                "move.backward": "Перемістити на задній план",
                "move.forward": "Перемістити вперед",
                "move.to.front": "Перемістити на передній план",
                "reset.angle": "Скидання кута",
                lock: "Блокування",
                unlock: " Розблокування",
                "move.to.page": "Перейти на сторінку",
                "flip.horizontal": "Перевернути горизонтально",
                "flip.vertical": "Перевернути вертикально",
                move: "Перемістити",
                "to.front": "На передній план",
                forward: " Вперед",
                backward: "На задній план",
                back: "Назад",
                language: "Мова"
            }
        }, {
            locale: "zh-ch",
            label: "简体中文",
            messages: {
                "style.menu.color": "颜色",
                "style.menu.fill": "填充",
                "style.menu.dash": "边框",
                "style.menu.size": "尺寸",
                "style.menu.keep.open": "保持常开",
                "style.menu.font": "字体",
                "style.menu.align": "对齐",
                styles: "样式",
                "zoom.in": "放大",
                "zoom.out": "缩小",
                to: "缩放至",
                "menu.tools": "工具",
                "menu.transform": "转换",
                "menu.file": "文件",
                "menu.edit": "编辑",
                "menu.view": "视图",
                "menu.preferences": "偏好",
                "menu.sign.in": "登录",
                "menu.sign.out": "登出",
                search: "搜索",
                "become.a.sponsor": "成为赞助者",
                "zoom.to.selection": "缩放选中",
                "zoom.to.fit": "自适应缩放",
                "zoom.to": "缩放至",
                "zoom.to.content": "缩放至内容",
                "preferences.dark.mode": "暗黑模式",
                "preferences.focus.mode": "专注模式",
                "preferences.debug.mode": "调试模式",
                "preferences.show.grid": "显示网格",
                "preferences.use.cad.selection": "使用 CAD 选择",
                "preferences.keep.stylemenu.open": "保持样式菜单常开",
                "preferences.always.show.snaps": "总是展示对齐线",
                "preferences.rotate.handles": "旋转手柄",
                "preferences.binding.handles": "捆绑手柄",
                "preferences.clone.handles": "克隆手柄",
                undo: "撤销",
                redo: "重做",
                cut: "剪切",
                copy: "复制",
                paste: "粘贴",
                "copy.as": "复制为",
                "export.as": "导出为",
                "select.all": "选中全部",
                "select.none": "取消选中",
                delete: "删除",
                "new.project": "新项目",
                open: "打开",
                save: "保存",
                "save.as": "保存为",
                "upload.media": "上传媒体文件",
                "create.page": "创建页面",
                "new.page": "新页面",
                "page.name": "页面名称",
                duplicate: "复制",
                cancel: "取消",
                "copy.invite.link": "复制邀请链接",
                "create.multiplayer.project": "创建多人项目",
                "copy.multiplayer.project": "复制到多人项目",
                select: "选择",
                eraser: "橡皮",
                draw: "画笔",
                arrow: "箭头",
                text: "文本",
                sticky: "便利贴",
                rectangle: "矩形",
                ellipse: "椭圆形",
                triangle: "三角形",
                line: "直线",
                rotate: "旋转",
                "lock.aspect.ratio": "锁定宽高比",
                "unlock.aspect.ratio": "解锁宽高比",
                group: "分组",
                ungroup: "取消分组",
                "move.to.back": "置底",
                "move.backward": "下移一层",
                "move.forward": "上移一层",
                "move.to.front": "置顶",
                "reset.angle": "重置旋转角度",
                lock: "锁定",
                unlock: "解锁",
                "move.to.page": "移动到页面",
                "flip.horizontal": "水平翻转",
                "flip.vertical": "垂直翻转",
                move: "移动",
                "to.front": "置顶",
                forward: "上一层",
                backward: "下一层",
                back: "置底",
                language: "语言",
                "keyboard.shortcuts": "键盘快捷键",
                "translation.link": "了解更多",
                page: "页面",
                "dock.position": "锚点位置",
                bottom: "下面",
                left: "左面",
                right: "右面",
                top: "上面",
                "export.background": "导出背景色",
                transparent: "透明",
                auto: "自动",
                light: "明亮",
                dark: "暗黑",
                "copy.readonly.link": "复制只读链接",
                image: "图片",
                "align.distribute": "对齐 / 分散",
                "dialog.save.firsttime": "您是否想保存当前的项目？",
                "dialog.save.again": "您是否想保存对当前项目的更改？",
                "dialog.cancel": "取消",
                "dialog.no": "否",
                "dialog.yes": "是"
            }
        }, {
            locale: "zh-tw",
            label: "繁體中文 (台灣)",
            messages: {
                "style.menu.color": "顏色",
                "style.menu.fill": "填充",
                "style.menu.dash": "虛線",
                "style.menu.size": "大小",
                "style.menu.keep.open": "保持開啟",
                "style.menu.font": "字型",
                "style.menu.align": "對齊",
                styles: "樣式",
                "zoom.in": "放大",
                "zoom.out": "縮小",
                to: "至",
                "menu.file": "檔案",
                "menu.edit": "編輯",
                "menu.view": "檢視",
                "menu.preferences": "選項",
                "menu.sign.in": "登入",
                "menu.sign.out": "登出",
                "become.a.sponsor": "成為贊助者",
                "zoom.to.selection": "縮放至選取範圍",
                "zoom.to.fit": "縮放至適當大小",
                "zoom.to": "縮放至",
                "preferences.dark.mode": "深色模式",
                "preferences.focus.mode": "專注模式",
                "preferences.debug.mode": "除錯模式",
                "preferences.show.grid": "顯示網格",
                "preferences.use.cad.selection": "使用 CAD 選取",
                "preferences.keep.stylemenu.open": "樣式選單保持開啟",
                "preferences.always.show.snaps": "永遠顯示對齊線",
                "preferences.rotate.handles": "旋轉控點",
                "preferences.binding.handles": "綁定控點",
                "preferences.clone.handles": "複製控點",
                undo: "復原",
                redo: "取消復原",
                cut: "剪下",
                copy: "複製",
                paste: "貼上",
                "copy.as": "複製成",
                "export.as": "匯出成",
                "select.all": "全選",
                "select.none": "取消選取",
                delete: "刪除",
                "new.project": "新專案",
                open: "開啟",
                save: "儲存",
                "save.as": "另存為",
                "upload.media": "上傳媒體",
                "create.page": "建立頁面",
                "new.page": "新頁面",
                "page.name": "頁面名稱",
                duplicate: "複製",
                cancel: "取消",
                "copy.invite.link": "複製邀請連結",
                "copy.readonly.link": "複製唯讀連結",
                "create.multiplayer.project": "建立多人專案",
                "copy.multiplayer.project": "複製至多人專案",
                select: "選取",
                eraser: "橡皮擦",
                draw: "手繪",
                arrow: "箭頭",
                text: "文字",
                sticky: "便利貼",
                rectangle: "長方形",
                ellipse: "橢圓形",
                triangle: "三角形",
                line: "直線",
                rotate: "旋轉",
                "lock.aspect.ratio": "鎖定長寬比",
                "unlock.aspect.ratio": "解鎖長寬比",
                group: "組成群組",
                ungroup: "取消群組",
                "move.to.back": "移到最下層",
                "move.backward": "下移一層",
                "move.forward": "上移一層",
                "move.to.front": "移到最上層",
                "reset.angle": "重設角度",
                lock: "鎖定",
                unlock: "解鎖",
                "move.to.page": "移至頁面",
                "flip.horizontal": "水平翻轉",
                "flip.vertical": "垂直翻轉",
                move: "移動",
                "to.front": "到最上層",
                forward: "到上一層",
                backward: "到下一層",
                back: "到最下層",
                language: "語言",
                "translation.link": "了解詳情",
                "dock.position": "工具列位置",
                bottom: "下方",
                left: "左側",
                right: "右側",
                top: "上方",
                page: "頁面"
            }
        }];
        er.sort((e,t)=>e.locale < t.locale ? -1 : 1);
        var el = r.createContext({})
          , ed = ()=>{
            let e = r.useContext(el);
            if (!e)
                throw Error("useCtx must be inside a Provider with a value");
            return e
        }
          , {styled: eh, createTheme: ep} = (0,
        c.Th)({
            themeMap: z({}, c.E6),
            theme: {
                colors: {
                    bounds: "rgba(65, 132, 244, 1.000)",
                    boundsBg: "rgba(65, 132, 244, 0.05)",
                    hover: "#ececec",
                    overlay: "rgba(0, 0, 0, 0.15)",
                    overlayContrast: "rgba(255, 255, 255, 0.15)",
                    panel: "#fefefe",
                    panelContrast: "#ffffff",
                    selected: "rgba(66, 133, 244, 1.000)",
                    selectedContrast: "#fefefe",
                    text: "#333333",
                    tooltip: "#1d1d1d",
                    tooltipContrast: "#ffffff",
                    warn: "rgba(255, 100, 100, 1)",
                    canvas: "rgb(248, 249, 250)"
                },
                shadows: {
                    2: "0px 1px 1px rgba(0, 0, 0, 0.14)",
                    3: "0px 2px 3px rgba(0, 0, 0, 0.14)",
                    4: "0px 4px 5px -1px rgba(0, 0, 0, 0.14)",
                    8: "0px 12px 17px rgba(0, 0, 0, 0.14)",
                    12: "0px 12px 17px rgba(0, 0, 0, 0.14)",
                    24: "0px 24px 38px rgba(0, 0, 0, 0.14)",
                    key: "1px 1px rgba(0,0,0,1)",
                    panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05), 
        0px 0px 16px -8px rgba(0, 0, 0, 0.05), 
        0px 0px 16px -12px rgba(0, 0, 0, 0.12),
        0px 0px 2px 0px rgba(0, 0, 0, 0.08)`
                },
                space: {
                    0: "2px",
                    1: "3px",
                    2: "4px",
                    3: "8px",
                    4: "12px",
                    5: "16px",
                    6: "32px",
                    7: "48px"
                },
                fontSizes: {
                    0: "10px",
                    1: "12px",
                    2: "13px",
                    3: "16px",
                    4: "18px"
                },
                fonts: {
                    ui: '"Recursive", system-ui, sans-serif',
                    body: '"Recursive", system-ui, sans-serif',
                    mono: '"Recursive Mono", monospace'
                },
                fontWeights: {},
                lineHeights: {},
                letterSpacings: {},
                sizes: {},
                borderWidths: {
                    0: "$1"
                },
                borderStyles: {},
                radii: {
                    0: "2px",
                    1: "4px",
                    2: "8px",
                    3: "12px",
                    4: "16px"
                },
                zIndices: {},
                transitions: {}
            },
            media: {
                micro: "(max-width: 370px)",
                sm: "(min-width: 640px)",
                md: "(min-width: 768px)",
                lg: "(min-width: 1024px)"
            },
            utils: {
                zStrokeWidth: ()=>e=>Array.isArray(e) ? {
                    strokeWidth: `calc(${e[0]}px / var(--camera-zoom))`
                } : {
                    strokeWidth: `calc(${e}px / var(--camera-zoom))`
                }
            }
        })
          , ec = ep({
            colors: {
                bounds: "rgba(38, 150, 255, 1.000)",
                boundsBg: "rgba(38, 150, 255, 0.05)",
                hover: "#444A50",
                overlay: "rgba(0, 0, 0, 0.15)",
                overlayContrast: "rgba(255, 255, 255, 0.15)",
                panel: "#363D44",
                panelContrast: "#49555f",
                selected: "rgba(38, 150, 255, 1.000)",
                selectedContrast: "#fefefe",
                text: "#f8f9fa",
                tooltip: "#1d1d1d",
                tooltipContrast: "#ffffff",
                canvas: "#212529"
            },
            shadows: {
                2: "0px 1px 1px rgba(0, 0, 0, 0.24)",
                3: "0px 2px 3px rgba(0, 0, 0, 0.24)",
                4: "0px 4px 5px -1px rgba(0, 0, 0, 0.24)",
                8: "0px 12px 17px rgba(0, 0, 0, 0.24)",
                12: "0px 12px 17px rgba(0, 0, 0, 0.24)",
                24: "0px 24px 38px rgba(0, 0, 0, 0.24)",
                panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05), 
      0px 0px 16px -8px rgba(0, 0, 0, 0.09), 
      0px 0px 16px -12px rgba(0, 0, 0, 0.2)`
            }
        })
          , eu = e=>e.appState.isLoading;
        function eg() {
            let e = en().useStore(eu);
            return r.createElement(em, {
                hidden: !e
            }, r.createElement(h.Z, {
                id: "loading",
                values: {
                    dots: "..."
                }
            }))
        }
        var em = eh("div", {
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, 0)",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            padding: "8px 16px",
            fontFamily: "var(--fonts-ui)",
            fontSize: "var(--fontSizes-1)",
            boxShadow: "var(--shadows-panel)",
            backgroundColor: "white",
            zIndex: 200,
            pointerEvents: "none",
            "& > div > *": {
                pointerEvents: "all"
            },
            variants: {
                transform: {
                    hidden: {
                        transform: "translate(-50%, 100%)"
                    },
                    visible: {
                        transform: "translate(-50%, 0%)"
                    }
                }
            }
        })
          , ef = "-0.03em"
          , eb = [.5, .5]
          , ev = ".tldr"
          , ey = {
            linear: e=>e,
            easeInQuad: e=>e * e,
            easeOutQuad: e=>e * (2 - e),
            easeInOutQuad: e=>e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e,
            easeInCubic: e=>e * e * e,
            easeOutCubic: e=>--e * e * e + 1,
            easeInOutCubic: e=>e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
            easeInQuart: e=>e * e * e * e,
            easeOutQuart: e=>1 - --e * e * e * e,
            easeInOutQuart: e=>e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
            easeInQuint: e=>e * e * e * e * e,
            easeOutQuint: e=>1 + --e * e * e * e * e,
            easeInOutQuint: e=>e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e,
            easeInSine: e=>1 - Math.cos(e * Math.PI / 2),
            easeOutSine: e=>Math.sin(e * Math.PI / 2),
            easeInOutSine: e=>-(Math.cos(Math.PI * e) - 1) / 2,
            easeInExpo: e=>e <= 0 ? 0 : Math.pow(2, 10 * e - 10),
            easeOutExpo: e=>e >= 1 ? 1 : 1 - Math.pow(2, -10 * e),
            easeInOutExpo: e=>e <= 0 ? 0 : e >= 1 ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2
        }
          , eS = ["#EC5E41", "#F2555A", "#F04F88", "#E34BA9", "#BD54C6", "#9D5BD2", "#7B66DC", "#02B1CC", "#11B3A3", "#39B178", "#55B467", "#FF802B"]
          , eI = "undefined" != typeof Window && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
          , ex = "undefined" != typeof Window && /linux/i.test(navigator.userAgent)
          , ek = [".png", ".svg", ".jpg", ".jpeg", ".gif"]
          , ew = eI ? [] : [".mp4", ".webm"]
          , eB = {};
        function eP(e, t) {
            let i = o.cQ.getFromCache(t, e, ()=>{
                let[t,i] = e.size;
                return {
                    minX: 0,
                    maxX: t,
                    minY: 0,
                    maxY: i,
                    width: t,
                    height: i
                }
            }
            );
            return o.cQ.translateBounds(i, e.point)
        }
        D(eB, {
            LabelMask: ()=>eF,
            PolygonUtils: ()=>eH,
            TextAreaUtils: ()=>e9,
            TextLabel: ()=>to,
            clearPrevSize: ()=>ej,
            defaultStyle: ()=>e6,
            defaultTextStyle: ()=>e8,
            fills: ()=>eW,
            getBoundsRectangle: ()=>eP,
            getFontFace: ()=>e0,
            getFontSize: ()=>eJ,
            getFontStyle: ()=>e2,
            getOffsetPolygon: ()=>eQ,
            getShapeStyle: ()=>e4,
            getStickyFontSize: ()=>e1,
            getStickyFontStyle: ()=>e5,
            getStickyShapeStyle: ()=>e3,
            getStrokeWidth: ()=>eq,
            getTextAlign: ()=>eE,
            getTextLabelSize: ()=>eA,
            getTextSvgElement: ()=>eO,
            stickyFills: ()=>e_,
            strokes: ()=>eN,
            transformRectangle: ()=>tp,
            transformSingleRectangle: ()=>tc
        });
        var eC = {
            start: "left",
            middle: "center",
            end: "right",
            justify: "justify"
        };
        function eE(e="start") {
            return eC[e]
        }
        "undefined" != typeof window && (null == (is = document.getElementById("__textLabelMeasure")) || is.remove(),
        (s = document.createElement("pre")).id = "__textLabelMeasure",
        Object.assign(s.style, {
            whiteSpace: "pre",
            width: "auto",
            border: "1px solid transparent",
            padding: "4px",
            margin: "0px",
            letterSpacing: ef,
            opacity: "0",
            position: "absolute",
            top: "-500px",
            left: "0px",
            zIndex: "9999",
            pointerEvents: "none",
            userSelect: "none",
            alignmentBaseline: "mathematical",
            dominantBaseline: "mathematical",
            lineHeight: 1.3
        }),
        s.tabIndex = -1,
        document.body.appendChild(s),
        ia = s);
        var ez = ""
          , eM = ""
          , eD = [0, 0];
        function ej() {
            ez = ""
        }
        function eA(e, t) {
            return e ? ia ? (ia.parent || document.body.appendChild(ia),
            e === ez && t === eM) ? eD : (ez = e,
            eM = t,
            ia.textContent = e,
            ia.style.font = t,
            eD = [ia.offsetWidth || 1, ia.offsetHeight || 1]) : [10, 10] : [16, 32]
        }
        var eT = RegExp(`${[32, 160, 4961, 65792, 65793, 4153, 4241].map(e=>String.fromCodePoint(e)).join("|")}`);
        function eO(e, t, i, s, n, a=!1) {
            let o = "normal"
              , r = function(e) {
                let t = document.createElement("div");
                t.style.setProperty("position", "absolute"),
                t.style.setProperty("top", "-9999px"),
                t.style.setProperty("left", "-9999px"),
                t.style.setProperty("width", e.width + "px"),
                t.style.setProperty("height", "min-content"),
                t.style.setProperty("font-size", e.fontSize + "px"),
                t.style.setProperty("font-family", e.fontFamily),
                t.style.setProperty("font-weight", e.fontWeight),
                t.style.setProperty("line-height", e.lineHeight * e.fontSize + "px"),
                t.style.setProperty("letter-spacing", e.letterSpacing),
                t.style.setProperty("text-align", e.textAlign),
                document.body.appendChild(t);
                let i = e.text.split(eT).flatMap(e=>e.replaceAll(`
`, ` 
`)).join(" ").split(" ");
                t.innerText = i[0];
                let s = t.offsetHeight
                  , n = [i[0]]
                  , a = [n];
                for (let e = 1; e < i.length; e++) {
                    let o = i[e];
                    t.innerText += " " + o;
                    let r = t.offsetHeight;
                    r > s && (s = r,
                    n = [],
                    a.push(n)),
                    n.push(o)
                }
                return t.remove(),
                a.map(e=>e.join(" "))
            }({
                text: e,
                wrap: a,
                width: n,
                fontSize: t,
                fontWeight: o,
                fontFamily: i,
                fontStyle: "normal",
                textAlign: "left",
                letterSpacing: ef,
                lineHeight: 1
            })
              , l = document.createElementNS("http://www.w3.org/2000/svg", "text");
            l.setAttribute("font-size", t + "px"),
            l.setAttribute("font-family", i),
            l.setAttribute("font-weight", o),
            l.setAttribute("line-height", 1.3 * t + "px"),
            l.setAttribute("letter-spacing", ef),
            l.setAttribute("text-align", null != s ? s : "left"),
            l.setAttribute("dominant-baseline", "mathematical"),
            l.setAttribute("alignment-baseline", "mathematical");
            let d = r.map((e,i)=>{
                let s = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                return s.textContent = e + `
`,
                s.setAttribute("y", 1.3 * t * (i + .5) + "px"),
                l.appendChild(s),
                s
            }
            );
            switch (s) {
            case "middle":
                l.setAttribute("text-align", "center"),
                l.setAttribute("text-anchor", "middle"),
                d.forEach(e=>e.setAttribute("x", 4 + n / 2 + ""));
                break;
            case "end":
                l.setAttribute("text-align", "right"),
                l.setAttribute("text-anchor", "end"),
                d.forEach(e=>e.setAttribute("x", 4 + n + ""));
                break;
            default:
                l.setAttribute("text-align", "left"),
                l.setAttribute("text-anchor", "start"),
                d.forEach(e=>e.setAttribute("x", "4"))
            }
            return l
        }
        function eF({id: e, bounds: t, labelSize: i, offset: s, scale: n=1}) {
            return r.createElement("defs", null, r.createElement("mask", {
                id: e + "_clip"
            }, r.createElement("rect", {
                x: -100,
                y: -100,
                width: t.width + 200,
                height: t.height + 200,
                fill: "white"
            }), r.createElement("rect", {
                x: t.width / 2 - i[0] / 2 * n + ((null == s ? void 0 : s[0]) || 0),
                y: t.height / 2 - i[1] / 2 * n + ((null == s ? void 0 : s[1]) || 0),
                width: i[0] * n,
                height: i[1] * n,
                rx: 4 * n,
                ry: 4 * n,
                fill: "black",
                opacity: Math.max(n, .8)
            })))
        }
        var eL = 2 * Math.PI
          , eR = class {
            static inwardEdgeNormal(e) {
                let t = u.Z.sub(e[1], e[0])
                  , i = u.Z.len2(t);
                return [-t[0] / i, t[1] / i]
            }
            static outwardEdgeNormal(e) {
                return u.Z.neg(eR.inwardEdgeNormal(e))
            }
            static isReflexVertex(e, t) {
                let i = e.length
                  , s = e[(t + i - 1) % i]
                  , n = e[t]
                  , a = e[(t + 1) % i];
                return 0 > eR.leftSide(s, a, n)
            }
            static getEdges(e) {
                return e.map((t,i)=>[t, e[(i + 1) % e.length]])
            }
            static edgesIntersection([e,t], [i,s]) {
                let n = (s[1] - i[1]) * (t[0] - e[0]) - (s[0] - i[0]) * (t[1] - e[1]);
                if (0 == n)
                    return null;
                let a = ((s[0] - i[0]) * (e[1] - i[1]) - (s[1] - i[1]) * (e[0] - i[0])) / n
                  , o = ((t[0] - e[0]) * (e[1] - i[1]) - (t[1] - e[1]) * (e[0] - i[0])) / n;
                return a < 0 || o < 0 || a > 1 || o > 1 ? null : [e[0] + a * (t[0] - e[0]), e[1] + a * (t[1] - e[1])]
            }
            static appendArc(e, t, i, s, n, a=!1) {
                let o = [...e]
                  , r = Math.atan2(s[1] - t[1], s[0] - t[0])
                  , l = Math.atan2(n[1] - t[1], n[0] - t[0]);
                r < 0 && (r += eL),
                l < 0 && (l += eL);
                let d = r > l ? r - l : r + eL - l
                  , h = (a ? -d : eL - d) / 5;
                o.push(s);
                for (let e = 1; e < 5; ++e) {
                    let s = r + h * e;
                    o.push([t[0] + Math.cos(s) * i, t[1] + Math.sin(s) * i])
                }
                return o.push(n),
                o
            }
            static createOffsetEdge(e, t) {
                return e.map(e=>u.Z.add(e, t))
            }
            static getOffsetPolygon(e, t=0) {
                let i = eR.getEdges(e)
                  , s = i.map(e=>eR.createOffsetEdge(e, u.Z.mul(eR.outwardEdgeNormal(e), t)))
                  , n = [];
                for (let e = 0; e < s.length; e++) {
                    let a = s[e]
                      , o = s[(e + s.length - 1) % s.length]
                      , r = eR.edgesIntersection(o, a);
                    r ? n.push(r) : eR.appendArc(n, i[e][0], t, o[1], a[0], !1)
                }
                return n
            }
            static createPaddingPolygon(e, t=0) {
                let i = e.map(e=>eR.createOffsetEdge(e, eR.inwardEdgeNormal(e)))
                  , s = [];
                for (let n = 0; n < i.length; n++) {
                    let a = i[n]
                      , o = i[(n + i.length - 1) % i.length]
                      , r = eR.edgesIntersection(o, a);
                    r ? s.push(r) : eR.appendArc(s, e[n][0], t, o[1], a[0], !0)
                }
                return s
            }
        }
          , eH = eR;
        function eQ(e, t) {
            if (e.length < 3)
                throw Error("Polygon must have at least 3 points");
            let i = e.length;
            return e.map((t,s)=>[t, e[(s + 1) % i]]).map(([e,i])=>{
                let s = u.Z.mul(u.Z.per(u.Z.uni(u.Z.sub(i, e))), t);
                return [u.Z.add(e, s), u.Z.add(i, s)]
            }
            ).map((e,t,i)=>{
                let s = (0,
                g.VB)(e, i[(t + 1) % i.length]);
                if (void 0 === s)
                    throw Error("Expected an intersection");
                return s
            }
            )
        }
        j(eH, "leftSide", u.Z.isLeft);
        var eU = "#fafafa"
          , eZ = "#343d45"
          , eK = {
            white: "#f0f1f3",
            lightGray: "#c6cbd1",
            gray: "#788492",
            black: "#1d1d1d",
            green: "#36b24d",
            cyan: "#0e98ad",
            blue: "#1c7ed6",
            indigo: "#4263eb",
            violet: "#7746f1",
            red: "#ff2133",
            orange: "#ff9433",
            yellow: "#ffc936"
        }
          , e_ = {
            light: M(z({}, Object.fromEntries(Object.entries(eK).map(([e,t])=>[e, o.cQ.lerpColor(t, eU, .45)]))), {
                white: "#ffffff",
                black: "#3d3d3d"
            }),
            dark: M(z({}, Object.fromEntries(Object.entries(eK).map(([e,t])=>[e, o.cQ.lerpColor(o.cQ.lerpColor(t, "#999999", .3), eZ, .4)]))), {
                white: "#1d1d1d",
                black: "#bbbbbb"
            })
        }
          , eN = {
            light: M(z({}, eK), {
                white: "#1d1d1d"
            }),
            dark: M(z({}, Object.fromEntries(Object.entries(eK).map(([e,t])=>[e, o.cQ.lerpColor(t, eZ, .1)]))), {
                white: "#cecece",
                black: "#cecece"
            })
        }
          , eW = {
            light: M(z({}, Object.fromEntries(Object.entries(eK).map(([e,t])=>[e, o.cQ.lerpColor(t, eU, .82)]))), {
                white: "#fefefe"
            }),
            dark: M(z({}, Object.fromEntries(Object.entries(eK).map(([e,t])=>[e, o.cQ.lerpColor(t, eZ, .82)]))), {
                white: "rgb(30,33,37)",
                black: "#1e1e1f"
            })
        }
          , eG = {
            small: 2,
            medium: 3.5,
            large: 5
        }
          , eY = {
            small: 28,
            medium: 48,
            large: 96,
            auto: "auto"
        }
          , e$ = {
            script: '"Caveat Brush"',
            sans: '"Source Sans Pro"',
            serif: '"Crimson Pro"',
            mono: '"Source Code Pro"'
        }
          , eX = {
            script: 1,
            sans: 1,
            serif: 1,
            mono: 1
        }
          , eV = {
            small: 24,
            medium: 36,
            large: 48,
            auto: "auto"
        };
        function eq(e) {
            return eG[e]
        }
        function eJ(e, t="script") {
            return eY[e] * eX[t]
        }
        function e0(e="script") {
            return e$[e]
        }
        function e1(e) {
            return eV[e]
        }
        function e2(e) {
            let t = eJ(e.size, e.font)
              , i = e0(e.font)
              , {scale: s=1} = e;
            return `${t * s}px/1.3 ${i}`
        }
        function e5(e) {
            let t = eV[e.size]
              , i = e0(e.font)
              , {scale: s=1} = e;
            return `${t * s}px/1 ${i}`
        }
        function e3(e, t=!1) {
            let {color: i} = e
              , s = t ? "dark" : "light"
              , n = "white" === i || "black" === i ? "yellow" : i;
            return {
                fill: e_[s][n],
                stroke: eN[s][n],
                color: t ? "#1d1d1d" : "#0d0d0d"
            }
        }
        function e4(e, t) {
            let {color: i, size: s, isFilled: n} = e
              , a = eG[s]
              , o = t ? "dark" : "light";
            return {
                stroke: eN[o][i],
                fill: n ? eW[o][i] : "none",
                strokeWidth: a
            }
        }
        var e6 = {
            color: "black",
            size: "small",
            isFilled: !1,
            dash: "draw",
            scale: 1
        }
          , e8 = M(z({}, e6), {
            font: "script",
            textAlign: "middle"
        })
          , e9 = class {
            static insertTextFirefox(e, t) {
                e.setRangeText(t, e.selectionStart || 0, e.selectionEnd || 0, "end"),
                e.dispatchEvent(new InputEvent("input",{
                    data: t,
                    inputType: "insertText",
                    isComposing: !1
                }))
            }
            static insert(e, t) {
                let i = e.ownerDocument
                  , s = i.activeElement;
                s !== e && e.focus(),
                i.execCommand("insertText", !1, t) || e9.insertTextFirefox(e, t),
                s === i.body ? e.blur() : s instanceof HTMLElement && s !== e && s.focus()
            }
            static set(e, t) {
                e.select(),
                e9.insert(e, t)
            }
            static getSelection(e) {
                let {selectionStart: t, selectionEnd: i} = e;
                return e.value.slice(t || void 0, i || void 0)
            }
            static wrapSelection(e, t, i) {
                let {selectionStart: s, selectionEnd: n} = e
                  , a = e9.getSelection(e);
                e9.insert(e, t + a + (null != i ? i : t)),
                e.selectionStart = (s || 0) + t.length,
                e.selectionEnd = (n || 0) + t.length
            }
            static replace(e, t, i) {
                let s = 0;
                e.value.replace(t, (...t)=>{
                    let n = s + t[t.length - 2]
                      , a = t[0].length;
                    e.selectionStart = n,
                    e.selectionEnd = n + a;
                    let o = "string" == typeof i ? i : i(...t);
                    return e9.insert(e, o),
                    e.selectionStart = n,
                    s += o.length - a,
                    o
                }
                )
            }
            static findLineEnd(e, t) {
                let i = e.lastIndexOf(`
`, t - 1) + 1;
                return "	" !== e.charAt(i) ? t : i + 1
            }
            static indent(e) {
                var t;
                let {selectionStart: i, selectionEnd: s, value: n} = e
                  , a = n.slice(i, s)
                  , o = null == (t = /\n/g.exec(a)) ? void 0 : t.length;
                if (o && o > 0) {
                    let t = n.lastIndexOf(`
`, i - 1) + 1
                      , a = e.value.slice(t, s - 1)
                      , o = a.replace(/^|\n/g, "$&  ")
                      , r = o.length - a.length;
                    e.setSelectionRange(t, s - 1),
                    e9.insert(e, o),
                    e.setSelectionRange(i + 1, s + r)
                } else
                    e9.insert(e, "  ")
            }
            static unindent(e) {
                let {selectionStart: t, selectionEnd: i, value: s} = e
                  , n = s.lastIndexOf(`
`, t - 1) + 1
                  , a = e9.findLineEnd(s, i)
                  , o = e.value.slice(n, a)
                  , r = o.replace(/(^|\n)(\t| {1,2})/g, "$1")
                  , l = o.length - r.length;
                e.setSelectionRange(n, a),
                e9.insert(e, r);
                let d = /\t| {1,2}/.exec(s.slice(n, t))
                  , h = d ? d[0].length : 0
                  , p = t - h;
                e.setSelectionRange(t - h, Math.max(p, i - l))
            }
        }
          , e7 = e=>e.stopPropagation();
        function te(e) {
            if (null === e)
                return e;
            if (e instanceof Date)
                return new Date(e.getTime());
            if ("object" == typeof e) {
                if ("function" == typeof e[Symbol.iterator]) {
                    let t = [];
                    if (e.length > 0)
                        for (let i of e)
                            t.push(te(i));
                    return t
                }
                {
                    let t = Object.keys(e)
                      , i = {};
                    if (t.length > 0)
                        for (let s of t)
                            i[s] = te(e[s]);
                    return i
                }
            }
            return e
        }
        function tt(e, t=0, i=0) {
            let[s,n] = e
              , a = [[s / 2, 0], [s, n], [0, n]];
            return t && (a = eQ(a, t)),
            i && (a = a.map(e=>u.Z.rotWith(e, [s / 2, n / 2], i))),
            a
        }
        function ti(e) {
            let[t,i] = e
              , s = [[t / 2, 0], [t, i], [0, i]];
            return [(s[0][0] + s[1][0] + s[2][0]) / 3, (s[0][1] + s[1][1] + s[2][1]) / 3]
        }
        function ts(e, t, i) {
            let {strokeWidth: s} = e4(i)
              , {points: n} = function(e, t, i) {
                let[s,n] = t
                  , a = o.cQ.rng(e)
                  , r = Array.from([, , , ]).map(()=>[a() * i * .75, a() * i * .75])
                  , l = [u.Z.add([s / 2, 0], r[0]), u.Z.add([s, n], r[1]), u.Z.add([0, n], r[2])]
                  , d = Math.round(Math.abs(6 * a()))
                  , h = o.cQ.rotateArray([u.Z.pointsBetween(l[0], l[1], 32), u.Z.pointsBetween(l[1], l[2], 32), u.Z.pointsBetween(l[2], l[0], 32)], d);
                return {
                    points: [...h.flat(), ...h[0]]
                }
            }(e, t, s);
            return {
                points: n,
                options: {
                    size: s,
                    thinning: .65,
                    streamline: .3,
                    smoothing: 1,
                    simulatePressure: !1,
                    last: !0
                }
            }
        }
        var tn = class {
            static getShapeUtil(e) {
                return iQ(e)
            }
            static getSelectedShapes(e, t) {
                let i = tn.getPage(e, t);
                return tn.getSelectedIds(e, t).map(e=>i.shapes[e])
            }
            static screenToWorld(e, t) {
                let i = tn.getPageState(e, e.appState.currentPageId).camera;
                return u.B.sub(u.B.div(t, i.zoom), i.point)
            }
            static getCameraZoom(e) {
                return o.cQ.clamp(e, .1, 5)
            }
            static getPage(e, t) {
                return e.document.pages[t]
            }
            static getPageState(e, t) {
                return e.document.pageStates[t]
            }
            static getSelectedIds(e, t) {
                return tn.getPageState(e, t).selectedIds
            }
            static getShapes(e, t) {
                return Object.values(tn.getPage(e, t).shapes)
            }
            static getCamera(e, t) {
                return tn.getPageState(e, t).camera
            }
            static getShape(e, t, i) {
                return tn.getPage(e, i).shapes[t]
            }
            static getCenter(e) {
                return tn.getShapeUtil(e).getCenter(e)
            }
            static getBounds(e) {
                return tn.getShapeUtil(e).getBounds(e)
            }
            static getRotatedBounds(e) {
                return tn.getShapeUtil(e).getRotatedBounds(e)
            }
            static getSelectedBounds(e) {
                return o.cQ.getCommonBounds(tn.getSelectedShapes(e, e.appState.currentPageId).map(e=>tn.getShapeUtil(e).getBounds(e)))
            }
            static getParentId(e, t, i) {
                return tn.getShape(e, t, i).parentId
            }
            static getDocumentBranch(e, t, i) {
                let s = tn.getShape(e, t, i);
                return void 0 === s.children ? [t] : [t, ...s.children.flatMap(t=>tn.getDocumentBranch(e, t, i))]
            }
            static getSelectedBranchSnapshot(e, t, i) {
                let s = tn.getPage(e, t)
                  , n = tn.getSelectedIds(e, t).flatMap(i=>tn.getDocumentBranch(e, i, t).map(e=>s.shapes[e])).filter(e=>!e.isLocked).map(o.cQ.deepClone);
                return void 0 !== i ? n.map(e=>z({
                    id: e.id
                }, i(e))) : n
            }
            static getSelectedShapeSnapshot(e, t, i) {
                let s = tn.getSelectedShapes(e, t).filter(e=>!e.isLocked).map(o.cQ.deepClone);
                return void 0 !== i ? s.map(e=>z({
                    id: e.id
                }, i(e))) : s
            }
            static getAllEffectedShapeIds(e, t, i) {
                let s = tn.getPage(e, i)
                  , n = new Set(t);
                return t.forEach(e=>{
                    let t = s.shapes[e];
                    (function e(t) {
                        void 0 !== t.children && t.children.filter(e=>!n.has(e)).forEach(t=>{
                            n.add(t),
                            e(s.shapes[t])
                        }
                        )
                    }
                    )(t),
                    function e(t) {
                        let i = t.parentId;
                        i !== s.id && (n.has(i) || (n.add(i),
                        e(s.shapes[i])))
                    }(t),
                    n.forEach(e=>{
                        Object.values(s.bindings).filter(t=>t.fromId === e || t.toId === e).forEach(t=>n.add(t.fromId === e ? t.toId : t.fromId))
                    }
                    )
                }
                ),
                Array.from(n.values())
            }
            static getLinkedShapeIds(e, t, i, s=!0) {
                let n = tn.getSelectedIds(e, t)
                  , a = tn.getPage(e, t)
                  , o = new Set(n)
                  , r = new Set
                  , l = [...n]
                  , d = new Set(Object.values(a.shapes).filter(e=>{
                    var t;
                    return "arrow" === e.type && (e.handles.start.bindingId || (null == (t = e.handles) ? void 0 : t.end.bindingId))
                }
                ));
                for (; l.length; ) {
                    let e = l.pop();
                    if (!(e && d.size))
                        break;
                    r.has(e) || (r.add(e),
                    d.forEach(t=>{
                        var n, r;
                        let {handles: {start: {bindingId: h}, end: {bindingId: p}}} = t
                          , c = h ? a.bindings[h] : null
                          , u = p ? a.bindings[p] : null;
                        c && c.toId === e ? ("center" === i || ((null == (n = t.decorations) ? void 0 : n.start) && u ? "left" === i : "right" === i)) && (s && o.add(t.id),
                        o.add(e),
                        u && (o.add(u.toId),
                        l.push(u.toId))) : u && u.toId === e && ("center" === i || ((null == (r = t.decorations) ? void 0 : r.end) && c ? "left" === i : "right" === i)) && (s && o.add(t.id),
                        o.add(e),
                        c && (o.add(c.toId),
                        l.push(c.toId))),
                        (!c || o.has(c.toId)) && (!u || o.has(u.toId)) && d.delete(t)
                    }
                    ))
                }
                return Array.from(o.values())
            }
            static getChildIndexAbove(e, t, i) {
                let s = e.document.pages[i], n = s.shapes[t], a;
                if (n.parentId === s.id)
                    a = Object.values(s.shapes).filter(e=>e.parentId === s.id).sort((e,t)=>e.childIndex - t.childIndex);
                else {
                    let e = s.shapes[n.parentId];
                    if (!e.children)
                        throw Error("No children in parent!");
                    a = e.children.map(e=>s.shapes[e]).sort((e,t)=>e.childIndex - t.childIndex)
                }
                let o = a.indexOf(n)
                  , r = a[o + 1];
                return r ? r.childIndex : n.childIndex + 1
            }
            static getBeforeShape(e, t) {
                return Object.fromEntries(Object.keys(t).map(t=>[t, e[t]]))
            }
            static mutateShapes(e, t, i, s, n=!1) {
                let a = {}
                  , r = {};
                t.forEach((o,l)=>{
                    let d = tn.getShape(e, o, s);
                    if (d.isLocked)
                        return;
                    (null == d ? void 0 : d.type) === "group" && (1 === t.length || n) && d.children.forEach((t,n)=>{
                        let o = tn.getShape(e, t, s);
                        if (o.isLocked)
                            return;
                        let l = i(o, n);
                        l && (a[t] = tn.getBeforeShape(o, l),
                        r[t] = l)
                    }
                    );
                    let h = i(d, l);
                    h && (a[o] = tn.getBeforeShape(d, h),
                    r[o] = h)
                }
                );
                let l = o.cQ.deepMerge(e, {
                    document: {
                        pages: {
                            [e.appState.currentPageId]: {
                                shapes: r
                            }
                        }
                    }
                });
                return {
                    before: a,
                    after: r,
                    data: l
                }
            }
            static createShapes(e, t, i) {
                return {
                    before: {
                        document: {
                            pages: {
                                [i]: {
                                    shapes: z({}, Object.fromEntries(t.flatMap(t=>{
                                        let s = [[t.id, void 0]];
                                        if (t.parentId !== i) {
                                            let n = tn.getShape(e, t.parentId, i);
                                            if (!n.children)
                                                throw Error("No children in parent!");
                                            s.push([n.id, {
                                                children: n.children
                                            }])
                                        }
                                        return s
                                    }
                                    )))
                                }
                            }
                        }
                    },
                    after: {
                        document: {
                            pages: {
                                [i]: {
                                    shapes: {
                                        shapes: z({}, Object.fromEntries(t.flatMap(t=>{
                                            let s = [[t.id, t]];
                                            if (t.parentId !== i) {
                                                let n = tn.getShape(e, t.parentId, i);
                                                if (!n.children)
                                                    throw Error("No children in parent!");
                                                s.push([n.id, {
                                                    children: [...n.children, t.id]
                                                }])
                                            }
                                            return s
                                        }
                                        )))
                                    }
                                }
                            }
                        }
                    }
                }
            }
            static deleteShapes(e, t, i) {
                i = i || e.appState.currentPageId;
                let s = tn.getPage(e, i)
                  , n = "string" == typeof t[0] ? t : t.map(e=>e.id);
                return {
                    before: {
                        document: {
                            pages: {
                                [i]: {
                                    shapes: z({}, Object.fromEntries(n.flatMap(e=>{
                                        let t = s.shapes[e]
                                          , n = [[t.id, t]];
                                        if (t.parentId !== i) {
                                            let e = s.shapes[t.parentId];
                                            if (!e.children)
                                                throw Error("No children in parent!");
                                            n.push([e.id, {
                                                children: e.children
                                            }])
                                        }
                                        return n
                                    }
                                    ))),
                                    bindings: z({}, Object.fromEntries(Object.values(s.bindings).filter(e=>n.includes(e.fromId) || n.includes(e.toId)).map(e=>[e.id, e])))
                                }
                            }
                        }
                    },
                    after: {
                        document: {
                            pages: {
                                [i]: {
                                    shapes: z({}, Object.fromEntries(n.flatMap(e=>{
                                        let t = s.shapes[e]
                                          , i = [[t.id, void 0]];
                                        if (t.parentId !== s.id) {
                                            let e = s.shapes[t.parentId];
                                            if (!e.children)
                                                throw Error("No children in parent!");
                                            i.push([e.id, {
                                                children: e.children.filter(e=>e !== t.id)
                                            }])
                                        }
                                        return i
                                    }
                                    )))
                                }
                            }
                        }
                    }
                }
            }
            static onSessionComplete(e) {
                var t, i;
                let s = null == (i = (t = tn.getShapeUtil(e)).onSessionComplete) ? void 0 : i.call(t, e);
                return s ? z(z({}, e), s) : e
            }
            static onChildrenChange(e, t, i) {
                var s, n;
                if (!t.children)
                    return;
                let a = null == (n = (s = tn.getShapeUtil(t)).onChildrenChange) ? void 0 : n.call(s, t, t.children.map(t=>tn.getShape(e, t, i)));
                return a ? z(z({}, t), a) : t
            }
            static updateArrowBindings(e, t) {
                var i, s, n, a, r, l;
                let d = {
                    start: te(t.handles.start),
                    end: te(t.handles.end)
                }
                  , h = {
                    isBound: !1,
                    handle: t.handles.start,
                    point: u.B.add(t.handles.start.point, t.point)
                }
                  , p = {
                    isBound: !1,
                    handle: t.handles.end,
                    point: u.B.add(t.handles.end.point, t.point)
                };
                if (t.handles.start.bindingId) {
                    let s = (null == (i = t.decorations) ? void 0 : i.start) !== void 0
                      , n = t.handles.start
                      , a = e.bindings[t.handles.start.bindingId];
                    if (!a)
                        throw Error("Could not find a binding to match the start handle's bindingId");
                    let r = e.shapes[a.toId]
                      , l = tn.getShapeUtil(r)
                      , d = l.getBounds(r)
                      , p = l.getExpandedBounds(r)
                      , c = s ? o.cQ.expandBounds(d, a.distance) : d
                      , {minX: g, minY: m, width: f, height: b} = p
                      , v = u.B.add([g, m], u.B.mulV([f, b], u.B.rotWith(a.point, [.5, .5], r.rotation || 0)));
                    h = {
                        isBound: !0,
                        hasDecoration: s,
                        binding: a,
                        handle: n,
                        point: v,
                        util: l,
                        target: r,
                        bounds: d,
                        expandedBounds: p,
                        intersectBounds: c,
                        center: l.getCenter(r)
                    }
                }
                if (t.handles.end.bindingId) {
                    let i = (null == (s = t.decorations) ? void 0 : s.end) !== void 0
                      , n = t.handles.end
                      , a = e.bindings[t.handles.end.bindingId];
                    if (!a)
                        throw Error("Could not find a binding to match the end handle's bindingId");
                    let r = e.shapes[a.toId]
                      , l = tn.getShapeUtil(r)
                      , d = l.getBounds(r)
                      , h = l.getExpandedBounds(r)
                      , c = i ? o.cQ.expandBounds(d, a.distance) : d
                      , {minX: g, minY: m, width: f, height: b} = h
                      , v = u.B.add([g, m], u.B.mulV([f, b], u.B.rotWith(a.point, [.5, .5], r.rotation || 0)));
                    p = {
                        isBound: !0,
                        hasDecoration: i,
                        binding: a,
                        handle: n,
                        point: v,
                        util: l,
                        target: r,
                        bounds: d,
                        expandedBounds: h,
                        intersectBounds: c,
                        center: l.getCenter(r)
                    }
                }
                for (let e of ["end", "start"]) {
                    let i = "start" === e ? h : p
                      , s = "start" === e ? p : h;
                    if (i.isBound) {
                        if (i.binding.distance) {
                            let r = u.B.uni(u.B.sub(i.point, s.point));
                            switch (i.target.type) {
                            case "ellipse":
                                {
                                    let n = (0,
                                    g.Zz)(s.point, r, i.center, i.target.radius[0] + (i.hasDecoration ? i.binding.distance : 0), i.target.radius[1] + (i.hasDecoration ? i.binding.distance : 0), i.target.rotation || 0).points.sort((e,t)=>u.B.dist(e, s.point) - u.B.dist(t, s.point));
                                    void 0 !== n[0] && (d[e].point = u.B.toFixed(u.B.sub(n[0], t.point)));
                                    break
                                }
                            case "triangle":
                                {
                                    let n = i.target.point
                                      , a = tt(i.target.size, i.hasDecoration ? 16 : 0, i.target.rotation).map(e=>u.B.add(e, n))
                                      , l = o.cQ.pointsToLineSegments(a, !0).map(([e,t])=>(0,
                                    g.oA)(s.point, r, e, t)).filter(e=>e.didIntersect).flatMap(e=>e.points).sort((e,t)=>u.B.dist(e, s.point) - u.B.dist(t, s.point));
                                    void 0 !== l[0] && (d[e].point = u.B.toFixed(u.B.sub(l[0], t.point)));
                                    break
                                }
                            default:
                                {
                                    let l, h = (0,
                                    g.bW)(s.point, r, i.intersectBounds, i.target.rotation).filter(e=>e.didIntersect).map(e=>e.points[0]).sort((e,t)=>u.B.dist(e, s.point) - u.B.dist(t, s.point));
                                    if (!h[0])
                                        continue;
                                    if (s.isBound && (l = (0,
                                    g.bW)(s.point, r, s.intersectBounds, s.target.rotation).filter(e=>e.didIntersect).map(e=>e.points[0]).sort((e,t)=>u.B.dist(e, s.point) - u.B.dist(t, s.point))[0]),
                                    s.isBound && (h.length < 2 || l && h[0] && 40 > Math.ceil(u.B.dist(h[0], l)) || o.cQ.boundsContain(i.expandedBounds, s.expandedBounds) || o.cQ.boundsCollide(i.expandedBounds, s.expandedBounds))) {
                                        let n = u.B.uni(u.B.sub(s.point, i.point))
                                          , a = (0,
                                        g.bW)(i.point, n, i.bounds, i.target.rotation).filter(e=>e.didIntersect).map(e=>e.points[0]);
                                        if (!a[0])
                                            continue;
                                        d[e].point = u.B.toFixed(u.B.sub(a[0], t.point)),
                                        d["start" === e ? "end" : "start"].point = u.B.toFixed(u.B.add(u.B.sub(a[0], t.point), u.B.mul(n, Math.min(u.B.dist(a[0], s.point), 40 * (o.cQ.boundsContain(s.bounds, i.intersectBounds) ? -1 : 1)))))
                                    } else if (!s.isBound && (h[0] && 40 > u.B.dist(h[0], s.point) || o.cQ.pointInBounds(s.point, i.intersectBounds))) {
                                        let o = u.B.uni(u.B.sub(i.center, s.point));
                                        return null == (a = (n = tn.getShapeUtil(t)).onHandleChange) ? void 0 : a.call(n, t, {
                                            [e]: M(z({}, t.handles[e]), {
                                                point: u.B.toFixed(u.B.add(u.B.sub(s.point, t.point), u.B.mul(o, 40)))
                                            })
                                        })
                                    } else
                                        h[0] && (d[e].point = u.B.toFixed(u.B.sub(h[0], t.point)))
                                }
                            }
                        } else
                            d[e].point = u.B.sub(i.point, t.point)
                    }
                }
                return null == (l = (r = tn.getShapeUtil(t)).onHandleChange) ? void 0 : l.call(r, t, d)
            }
            static transform(e, t, i) {
                let s = tn.getShapeUtil(e).transform(e, t, i);
                return s ? z(z({}, e), s) : e
            }
            static transformSingle(e, t, i) {
                let s = tn.getShapeUtil(e).transformSingle(e, t, i);
                return s ? z(z({}, e), s) : e
            }
            static getRotatedShapeMutation(e, t, i, s) {
                var n, a;
                let r = u.B.sub(t, e.point)
                  , l = u.B.rotWith(t, i, s)
                  , d = u.B.toFixed(u.B.sub(l, r));
                return void 0 !== e.handles ? null == (a = (n = this.getShapeUtil(e)).onHandleChange) ? void 0 : a.call(n, M(z({}, e), {
                    point: d
                }), Object.fromEntries(Object.entries(e.handles).map(([e,t])=>{
                    let i = u.B.toFixed(u.B.rotWith(t.point, r, s));
                    return [e, M(z({}, t), {
                        point: i
                    })]
                }
                ))) : {
                    point: d,
                    rotation: o.cQ.clampRadians((e.rotation || 0) + s)
                }
            }
            static updateParents(e, t, i) {
                let s = tn.getPage(e, t);
                if (0 === i.length)
                    return;
                let {shapes: n} = tn.getPage(e, t)
                  , a = Array.from(new Set(i.map(e=>n[e].parentId).values())).filter(e=>e !== s.id);
                for (let i of a) {
                    let s = n[i];
                    if (!s.children)
                        throw Error("A shape is parented to a shape without a children array.");
                    tn.onChildrenChange(e, s, t)
                }
                tn.updateParents(e, t, a)
            }
            static getBinding(e, t, i) {
                return tn.getPage(e, i).bindings[t]
            }
            static getBindings(e, t) {
                return Object.values(tn.getPage(e, t).bindings)
            }
            static getBindableShapeIds(e) {
                return tn.getShapes(e, e.appState.currentPageId).filter(e=>tn.getShapeUtil(e).canBind).sort((e,t)=>t.childIndex - e.childIndex).map(e=>e.id)
            }
            static getBindingsWithShapeIds(e, t, i) {
                return Array.from(new Set(tn.getBindings(e, i).filter(e=>t.includes(e.toId) || t.includes(e.fromId))).values())
            }
            static getRelatedBindings(e, t, i) {
                let s = new Set(t)
                  , n = Object.values(tn.getPage(e, i).bindings)
                  , a = new Set(n.filter(e=>s.has(e.toId) || s.has(e.fromId)))
                  , o = a.size
                  , r = -1;
                for (; 0 !== r; )
                    a.forEach(e=>{
                        let t = e.fromId;
                        for (let e of n)
                            e.fromId === t && a.add(e),
                            e.toId === t && a.add(e)
                    }
                    ),
                    r = a.size - o,
                    o = a.size;
                return Array.from(a.values())
            }
            static normalizeText(e) {
                return e.replace(tn.fixNewLines, `
`).split(`
`).map(e=>e || " ").join(`
`)
            }
            static assertShapeHasProperty(e, t) {
                if (void 0 === e[t])
                    throw Error()
            }
            static warn(e) {}
            static error(e) {}
            static getSvgString(e, t=1) {
                let i = e.cloneNode(!0);
                return e.setAttribute("width", +e.getAttribute("width") * t + ""),
                e.setAttribute("height", +e.getAttribute("height") * t + ""),
                new XMLSerializer().serializeToString(i).replaceAll("&#10;      ", "").replaceAll(/((\s|")[0-9]*\.[0-9]{2})([0-9]*)(\b|"|\))/g, "$1")
            }
            static getSvgAsDataUrl(e, t=1) {
                return `data:image/svg+xml;base64,${window.btoa(unescape(tn.getSvgString(e, t)))}`
            }
            static getImageForSvg(e) {
                return A(this, arguments, function*(e, t="png", i={}) {
                    let {scale: s=2, quality: n=1} = i
                      , a = tn.getSvgString(e, s)
                      , o = +e.getAttribute("width")
                      , r = +e.getAttribute("height");
                    if (!a)
                        return;
                    let l = yield new Promise(e=>{
                        let t = new Image;
                        t.crossOrigin = "anonymous";
                        let i = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(a)))}`;
                        t.onload = ()=>{
                            let s = document.createElement("canvas")
                              , n = s.getContext("2d");
                            s.width = o,
                            s.height = r,
                            n.drawImage(t, 0, 0, o, r),
                            URL.revokeObjectURL(i),
                            e(s)
                        }
                        ,
                        t.onerror = ()=>{
                            console.warn("Could not convert that SVG to an image.")
                        }
                        ,
                        t.src = i
                    }
                    );
                    return yield new Promise(e=>l.toBlob(t=>e(t), "image/" + t, n))
                })
            }
        }
          , ta = tn;
        j(ta, "copyStringToClipboard", e=>{
            try {
                navigator.clipboard && navigator.clipboard.write([new ClipboardItem({
                    "text/plain": new Blob([e],{
                        type: "text/plain"
                    })
                })])
            } catch (i) {
                let t = document.createElement("textarea");
                t.setAttribute("position", "fixed"),
                t.setAttribute("top", "0"),
                t.setAttribute("readonly", "true"),
                t.setAttribute("contenteditable", "true"),
                t.style.position = "fixed",
                t.value = e,
                document.body.appendChild(t),
                t.focus(),
                t.select();
                try {
                    let e = document.createRange();
                    e.selectNodeContents(t);
                    let i = window.getSelection();
                    i && (i.removeAllRanges(),
                    i.addRange(e),
                    t.setSelectionRange(0, t.value.length)),
                    document.execCommand("copy")
                } catch (e) {} finally {
                    document.body.removeChild(t)
                }
            }
        }
        ),
        j(ta, "flattenShape", (e,t)=>{
            var i;
            return [t, ...(null != (i = t.children) ? i : []).map(t=>tn.getShape(e, t, e.appState.currentPageId)).sort((e,t)=>e.childIndex - t.childIndex).flatMap(t=>tn.flattenShape(e, t))]
        }
        ),
        j(ta, "flattenPage", (e,t)=>Object.values(e.document.pages[t].shapes).sort((e,t)=>e.childIndex - t.childIndex).reduce((t,i)=>[...t, ...tn.flattenShape(e, i)], [])),
        j(ta, "getTopChildIndex", (e,t)=>{
            let i = tn.getShapes(e, t);
            return 0 === i.length ? 1 : i.filter(e=>e.parentId === t).sort((e,t)=>t.childIndex - e.childIndex)[0].childIndex + 1
        }
        ),
        j(ta, "fixNewLines", /\r?\n|\r/g);
        var to = r.memo(function({font: e, text: t, color: i, offsetX: s=0, offsetY: n=0, scale: a=1, isEditing: o=!1, onBlur: l, onChange: d, shape: h}) {
            let p = r.useRef(null)
              , c = r.useRef(!1)
              , u = r.useCallback(e=>{
                d(ta.normalizeText(e.currentTarget.value))
            }
            , [d])
              , g = r.useCallback(e=>{
                if ("Escape" === e.key) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    null == l || l();
                    return
                }
                if ("Tab" === e.key && 0 === t.length) {
                    e.preventDefault();
                    return
                }
                if ("Meta" === e.key || e.metaKey) {
                    if ("z" === e.key && e.metaKey) {
                        e.shiftKey ? document.execCommand("redo", !1) : document.execCommand("undo", !1),
                        e.stopPropagation(),
                        e.preventDefault();
                        return
                    }
                } else
                    e.stopPropagation();
                (e.metaKey || e.ctrlKey) && "=" === e.key && e.preventDefault(),
                "Tab" === e.key && (e.preventDefault(),
                e.shiftKey ? e9.unindent(e.currentTarget) : e9.indent(e.currentTarget),
                null == d || d(ta.normalizeText(e.currentTarget.value)))
            }
            , [d])
              , m = r.useCallback(e=>{
                e.currentTarget.setSelectionRange(0, 0),
                null == l || l()
            }
            , [l])
              , f = r.useCallback(e=>{
                o && c.current && document.activeElement === e.currentTarget && e.currentTarget.select()
            }
            , [o])
              , b = r.useCallback(e=>{
                o && e.stopPropagation()
            }
            , [o]);
            r.useEffect(()=>{
                o ? requestAnimationFrame(()=>{
                    c.current = !0;
                    let e = p.current;
                    e && (e.focus(),
                    e.select())
                }
                ) : null == l || l()
            }
            , [o, l]);
            let v = r.useRef(null);
            return r.useLayoutEffect(()=>{
                let i = v.current;
                if (!i)
                    return;
                let o = eA(t, e);
                i.style.transform = `scale(${a}, ${a}) translate(${s}px, ${n}px)`,
                i.style.width = o[0] + 1 + "px",
                i.style.height = o[1] + 1 + "px"
            }
            , [t, e, n, s, a]),
            r.createElement(tr, null, r.createElement(td, {
                ref: v,
                hasText: !!t,
                isEditing: o,
                style: {
                    font: e,
                    color: i
                },
                "data-color": null == h ? void 0 : h.style.color
            }, o ? r.createElement(th, {
                ref: p,
                style: {
                    font: e,
                    color: i
                },
                name: "text",
                tabIndex: -1,
                autoComplete: "false",
                autoCapitalize: "false",
                autoCorrect: "false",
                autoSave: "false",
                autoFocus: !0,
                placeholder: "",
                spellCheck: "true",
                wrap: "off",
                dir: "auto",
                datatype: "wysiwyg",
                defaultValue: t,
                color: i,
                onFocus: f,
                onChange: u,
                onKeyDown: g,
                onBlur: m,
                onPointerDown: b,
                onContextMenu: e7,
                onCopy: e7,
                onPaste: e7,
                onCut: e7
            }) : t, "​"))
        })
          , tr = eh("div", {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            userSelect: "none",
            variants: {
                isGhost: {
                    false: {
                        opacity: 1
                    },
                    true: {
                        transition: "opacity .2s",
                        opacity: .3
                    }
                }
            }
        })
          , tl = {
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            letterSpacing: ef
        }
          , td = eh("div", z({
            position: "absolute",
            padding: "4px",
            zIndex: 1,
            minHeight: 1,
            minWidth: 1,
            lineHeight: 1,
            outline: 0,
            fontWeight: "500",
            textAlign: "center",
            backfaceVisibility: "hidden",
            userSelect: "none",
            WebkitUserSelect: "none",
            WebkitTouchCallout: "none",
            variants: {
                hasText: {
                    false: {
                        pointerEvents: "none"
                    },
                    true: {
                        pointerEvents: "all"
                    }
                },
                isEditing: {
                    false: {
                        userSelect: "none"
                    },
                    true: {
                        background: "$boundsBg",
                        userSelect: "text",
                        WebkitUserSelect: "text"
                    }
                }
            }
        }, tl))
          , th = eh("textarea", M(z({
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
            border: "none",
            padding: "4px",
            resize: "none",
            textAlign: "inherit",
            minHeight: "inherit",
            minWidth: "inherit",
            lineHeight: "inherit",
            outline: 0,
            fontWeight: "inherit",
            overflow: "hidden",
            backfaceVisibility: "hidden",
            display: "inline-block",
            pointerEvents: "all",
            background: "$boundsBg",
            userSelect: "text",
            WebkitUserSelect: "text",
            fontSmooth: "always",
            WebkitFontSmoothing: "subpixel-antialiased",
            MozOsxFontSmoothing: "auto"
        }, tl), {
            "&:focus": {
                outline: "none",
                border: "none"
            }
        }));
        function tp(e, t, {initialShape: i, transformOrigin: s, scaleX: n, scaleY: a}) {
            return e.rotation || i.isAspectRatioLocked ? {
                size: u.Z.toFixed(u.Z.mul(i.size, Math.min(Math.abs(n), Math.abs(a)))),
                point: u.Z.toFixed([t.minX + (t.width - e.size[0]) * (n < 0 ? 1 - s[0] : s[0]), t.minY + (t.height - e.size[1]) * (a < 0 ? 1 - s[1] : s[1])]),
                rotation: n < 0 && a >= 0 || a < 0 && n >= 0 ? i.rotation ? -i.rotation : 0 : i.rotation
            } : {
                point: u.Z.toFixed([t.minX, t.minY]),
                size: u.Z.toFixed([t.width, t.height])
            }
        }
        function tc(e, t) {
            return {
                size: u.Z.toFixed([t.width, t.height]),
                point: u.Z.toFixed([t.minX, t.minY])
            }
        }
        var tu = class extends o.NI {
            constructor() {
                super(...arguments),
                j(this, "canBind", !1),
                j(this, "canEdit", !1),
                j(this, "canClone", !1),
                j(this, "isAspectRatioLocked", !1),
                j(this, "hideResizeHandles", !1),
                j(this, "bindingDistance", 16),
                j(this, "hitTestPoint", (e,t)=>o.cQ.pointInBounds(t, this.getRotatedBounds(e))),
                j(this, "hitTestLineSegment", (e,t,i)=>{
                    let s = o.cQ.getBoundsFromPoints([t, i])
                      , n = this.getBounds(e);
                    return o.cQ.boundsContain(n, s) || e.rotation ? (0,
                    g.Gc)(t, i, o.cQ.getRotatedCorners(this.getBounds(e))).didIntersect : (0,
                    g.WU)(t, i, this.getBounds(e)).length > 0
                }
                ),
                j(this, "create", e=>(this.refMap.set(e.id, r.createRef()),
                this.getShape(e))),
                j(this, "getCenter", e=>o.cQ.getBoundsCenter(this.getBounds(e))),
                j(this, "getExpandedBounds", e=>o.cQ.expandBounds(this.getBounds(e), this.bindingDistance)),
                j(this, "getBindingPoint", (e,t,i,s,n,a)=>{
                    let r = this.getBounds(e)
                      , l = this.getExpandedBounds(e);
                    if (!o.cQ.pointInBounds(i, l))
                        return;
                    let d = (0,
                    g.bW)(s, n, l).filter(e=>e.didIntersect).map(e=>e.points[0]);
                    if (!d.length)
                        return;
                    let h = this.getCenter(e), p = d.sort((e,t)=>u.B.dist(t, s) - u.B.dist(e, s))[0], c = u.B.med(i, p), m, f;
                    a ? (m = 8 > u.B.dist(i, h) ? h : i,
                    f = 0) : (m = 8 > u.B.distanceToLineSegment(i, c, h) ? h : c,
                    f = o.cQ.pointInBounds(i, r) ? this.bindingDistance : Math.max(this.bindingDistance, o.cQ.getBoundsSides(r).map(e=>u.B.distanceToLineSegment(e[1][0], e[1][1], i)).sort((e,t)=>e - t)[0]));
                    let b = u.B.divV(u.B.sub(m, [l.minX, l.minY]), [l.width, l.height]);
                    return {
                        point: u.B.clampV(b, 0, 1),
                        distance: f
                    }
                }
                ),
                j(this, "mutate", (e,t)=>t),
                j(this, "transform", (e,t,i)=>M(z({}, e), {
                    point: [t.minX, t.minY]
                })),
                j(this, "transformSingle", (e,t,i)=>this.transform(e, t, i)),
                j(this, "updateChildren"),
                j(this, "onChildrenChange"),
                j(this, "onHandleChange"),
                j(this, "onRightPointHandle"),
                j(this, "onDoubleClickHandle"),
                j(this, "onDoubleClickBoundsHandle"),
                j(this, "onSessionComplete"),
                j(this, "getSvgElement", (e,t)=>{
                    var i, s, n, a, o;
                    let r = null == (i = document.getElementById(e.id + "_svg")) ? void 0 : i.cloneNode(!0);
                    if (r) {
                        if (null != (a = null == (n = null == (s = e.label) ? void 0 : s.trim()) ? void 0 : n.length) && a) {
                            let i = document.createElementNS("http://www.w3.org/2000/svg", "g")
                              , s = e2(e.style)
                              , n = eA(e.label, s)
                              , a = eJ(e.style.size, e.style.font) * (null != (o = e.style.scale) ? o : 1)
                              , l = e0(e.style.font).slice(1, -1)
                              , d = eO(e.label, a, l, "middle", n[0], !1)
                              , h = this.getBounds(e);
                            return d.setAttribute("transform", `translate(${h.width / 2 - n[0] / 2}, ${h.height / 2 - n[1] / 2})`),
                            d.setAttribute("fill", e4(e.style, t).stroke),
                            d.setAttribute("data-color", e.style.color),
                            d.setAttribute("transform-origin", "center center"),
                            i.setAttribute("text-align", "center"),
                            i.setAttribute("text-anchor", "middle"),
                            i.appendChild(r),
                            i.appendChild(d),
                            i
                        }
                        return r
                    }
                }
                )
            }
        }
        ;
        function tg(e, t) {
            let {start: i, end: s} = e
              , n = u.Z.dist(i.point, s.point)
              , a = u.Z.med(i.point, s.point)
              , o = n / 2 * t
              , r = u.Z.uni(u.Z.vec(i.point, s.point));
            return u.Z.toFixed(10 > Math.abs(o) ? a : u.Z.add(a, u.Z.mul(u.Z.per(r), o)))
        }
        function tm(e, t, i) {
            return o.cQ.circleFromThreePoints(e, i, t)
        }
        function tf(e, t, i, s, n) {
            let a = (0,
            g.bO)(e, .618 * t, i, s).points;
            if (!a)
                return ta.warn("Could not find an intersection for the arrow head."),
                {
                    left: e,
                    right: e
                };
            let o = n ? a[0] : a[1];
            return {
                left: o ? u.Z.nudge(u.Z.rotWith(o, e, Math.PI / 6), e, -.382 * t) : e,
                right: o ? u.Z.nudge(u.Z.rotWith(o, e, -Math.PI / 6), e, -.382 * t) : e
            }
        }
        function tb(e, t, i) {
            let s = (0,
            g.VC)(e, i, e, t).points;
            if (!s)
                return ta.warn("Could not find an intersection for the arrow head."),
                {
                    left: e,
                    right: e
                };
            let n = s[0];
            return {
                left: n ? u.Z.rotWith(n, e, Math.PI / 6) : e,
                right: n ? u.Z.rotWith(n, e, -Math.PI / 6) : e
            }
        }
        function tv(e, t, i, s, n) {
            let {left: a, right: o} = tf(e, t, i, s, n);
            return `M ${a} L ${e} ${o}`
        }
        function ty(e, t, i) {
            let {left: s, right: n} = tb(e, t, i);
            return `M ${s} L ${e} ${n}`
        }
        function tS(e, t, i) {
            if (4 >= u.Z.dist2(t, u.Z.med(e, i)))
                return [e, i];
            let s = []
              , n = tm(e, t, i)
              , a = [n[0], n[1]]
              , r = n[2]
              , l = u.Z.angle(a, e)
              , d = u.Z.angle(a, i);
            for (let e = .05; e < 1; e += .05) {
                let t = o.cQ.lerpAngles(l, d, e);
                s.push(u.Z.nudgeAtAngle(a, t, r))
            }
            return s
        }
        function tI(e, t, i, s) {
            return t * (2 * Math.PI) * (o.cQ.getSweep(e, i, s) / (2 * Math.PI))
        }
        function tx({left: e, middle: t, right: i, stroke: s, strokeWidth: n}) {
            return r.createElement("g", null, r.createElement("path", {
                className: "tl-stroke-hitarea",
                d: `M ${e} L ${t} ${i}`
            }), r.createElement("path", {
                d: `M ${e} L ${t} ${i}`,
                fill: "none",
                stroke: s,
                strokeWidth: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                pointerEvents: "none"
            }))
        }
        var tk = r.memo(function({id: e, style: t, start: i, bend: s, end: n, arrowBend: a, decorationStart: l, decorationEnd: d, isDraw: h, isDarkMode: p}) {
            let c = u.Z.dist(i, n);
            if (c < 2)
                return null;
            let g = e4(t, p)
              , {strokeWidth: f} = g
              , b = 1 + 1.618 * f
              , v = tm(i, s, n)
              , y = [v[0], v[1]]
              , S = v[2]
              , I = tI(y, S, i, n)
              , x = ey[o.cQ.rng(e)() > 0 ? "easeInOutSine" : "easeInOutCubic"]
              , k = h ? function(e, t, i, s, n, a, r, l, d, h) {
                let p = o.cQ.rng(e)
                  , c = e4(t).strokeWidth
                  , g = n ? u.Z.rotWith(i, r, c / d) : i
                  , f = a ? u.Z.rotWith(s, r, -(c / d)) : s
                  , b = u.Z.angle(r, g)
                  , v = u.Z.angle(r, f)
                  , y = []
                  , S = 8 + Math.floor(Math.abs(d) / 20 * 1 + p() / 2);
                for (let e = 0; e < S; e++) {
                    let t = h(e / S)
                      , i = o.cQ.lerpAngles(b, v, t);
                    y.push(u.Z.toFixed(u.Z.nudgeAtAngle(r, i, l)))
                }
                let I = (0,
                m.ZP)([g, ...y, f], {
                    size: 1 + c,
                    thinning: .618 + .2 * p(),
                    easing: ey.easeOutQuad,
                    simulatePressure: !1,
                    streamline: 0,
                    last: !0
                });
                return o.cQ.getSvgPathFromStroke(I)
            }(e, t, i, n, l, d, y, S, I, x) : ["M", i[0], i[1], "A", v[2], v[2], 0, 0, a < 0 ? 0 : 1, n[0], n[1]].join(" ")
              , {strokeDasharray: w, strokeDashoffset: B} = o.cQ.getPerfectDashProps(Math.abs(I), b, t.dash, 2, !1)
              , P = Math.min(c / 3, 8 * f)
              , C = l ? tf(i, P, y, S, I < 0) : null
              , E = d ? tf(n, P, y, S, I >= 0) : null;
            return r.createElement(r.Fragment, null, r.createElement("path", {
                className: "tl-stroke-hitarea",
                d: k
            }), r.createElement("path", {
                d: k,
                fill: h ? g.stroke : "none",
                stroke: g.stroke,
                strokeWidth: h ? 0 : b,
                strokeDasharray: w,
                strokeDashoffset: B,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                pointerEvents: "none"
            }), C && r.createElement(tx, {
                left: C.left,
                middle: i,
                right: C.right,
                stroke: g.stroke,
                strokeWidth: b
            }), E && r.createElement(tx, {
                left: E.left,
                middle: n,
                right: E.right,
                stroke: g.stroke,
                strokeWidth: b
            }))
        })
          , tw = r.memo(function({id: e, style: t, start: i, end: s, decorationStart: n, decorationEnd: a, isDraw: l, isDarkMode: d}) {
            let h, p, c, g, f, b = u.Z.dist(i, s);
            if (b < 2)
                return null;
            let v = e4(t, d)
              , {strokeWidth: y} = v
              , S = 1 + 1.618 * y
              , I = l ? (h = o.cQ.rng(e),
            p = e4(t).strokeWidth,
            c = n ? u.Z.nudge(i, s, p) : i,
            g = a ? u.Z.nudge(s, i, p) : s,
            f = (0,
            m.ZP)([c, g], {
                size: p,
                thinning: .618 + .2 * h(),
                easing: ey.easeOutQuad,
                simulatePressure: !0,
                streamline: 0,
                last: !0
            }),
            o.cQ.getSvgPathFromStroke(f)) : "M" + u.Z.toFixed(i) + "L" + u.Z.toFixed(s)
              , {strokeDasharray: x, strokeDashoffset: k} = o.cQ.getPerfectDashProps(b, 1.618 * y, t.dash, 2, !1)
              , w = Math.min(b / 3, 8 * y)
              , B = n ? tb(i, s, w) : null
              , P = a ? tb(s, i, w) : null;
            return r.createElement(r.Fragment, null, r.createElement("path", {
                className: "tl-stroke-hitarea",
                d: I
            }), r.createElement("path", {
                d: I,
                fill: v.stroke,
                stroke: v.stroke,
                strokeWidth: l ? S / 2 : S,
                strokeDasharray: x,
                strokeDashoffset: k,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                pointerEvents: "stroke"
            }), B && r.createElement(tx, {
                left: B.left,
                middle: i,
                right: B.right,
                stroke: v.stroke,
                strokeWidth: S
            }), P && r.createElement(tx, {
                left: P.left,
                middle: s,
                right: P.right,
                stroke: v.stroke,
                strokeWidth: S
            }))
        })
          , tB = class extends tu {
            constructor() {
                super(...arguments),
                j(this, "type", "arrow"),
                j(this, "hideBounds", !0),
                j(this, "canEdit", !0),
                j(this, "pathCache", new WeakMap),
                j(this, "getShape", e=>{
                    var t, i, s, n;
                    return z({
                        id: "id",
                        type: "arrow",
                        name: "Arrow",
                        parentId: "page",
                        childIndex: 1,
                        point: [0, 0],
                        rotation: 0,
                        bend: 0,
                        handles: {
                            start: z({
                                id: "start",
                                index: 0,
                                point: [0, 0],
                                canBind: !0
                            }, null == (t = e.handles) ? void 0 : t.start),
                            end: z({
                                id: "end",
                                index: 1,
                                point: [1, 1],
                                canBind: !0
                            }, null == (i = e.handles) ? void 0 : i.end),
                            bend: z({
                                id: "bend",
                                index: 2,
                                point: [.5, .5]
                            }, null == (s = e.handles) ? void 0 : s.bend)
                        },
                        decorations: null != (n = e.decorations) ? n : {
                            end: "arrow"
                        },
                        style: z(M(z({}, e6), {
                            isFilled: !1
                        }), e.style),
                        label: "",
                        labelPoint: [.5, .5]
                    }, e)
                }
                ),
                j(this, "Component", tu.Component(({shape: e, isEditing: t, isGhost: i, meta: s, events: n, onShapeChange: a, onShapeBlur: l},d)=>{
                    var h, p;
                    let {id: c, label: g="", handles: {start: m, bend: f, end: b}, decorations: v={}, style: y} = e
                      , S = null != (p = null == (h = null == g ? void 0 : g.trim()) ? void 0 : h.length) && p
                      , I = 1 > u.B.dist(f.point, u.B.toFixed(u.B.med(m.point, b.point)))
                      , x = e2(y)
                      , k = e4(y, s.isDarkMode)
                      , w = S || t ? eA(g, x) : [0, 0]
                      , B = this.getBounds(e)
                      , P = r.useMemo(()=>{
                        let {start: t, bend: i, end: s} = e.handles;
                        if (I)
                            return u.B.dist(t.point, s.point);
                        let n = tm(t.point, i.point, s.point);
                        return Math.abs(tI(n.slice(0, 2), n[2], t.point, s.point))
                    }
                    , [e.handles])
                      , C = Math.max(.5, Math.min(1, Math.max(P / (w[1] + 128), P / (w[0] + 128))))
                      , E = r.useMemo(()=>{
                        let t = this.getBounds(e);
                        return u.B.sub(e.handles.bend.point, u.B.toFixed([t.width / 2, t.height / 2]))
                    }
                    , [e, C])
                      , M = r.useCallback(e=>{
                        null == a || a({
                            id: c,
                            label: e
                        })
                    }
                    , [a])
                      , D = I ? tw : tk;
                    return r.createElement(tP, z({
                        ref: d
                    }, n), r.createElement(to, {
                        font: x,
                        text: g,
                        color: k.stroke,
                        offsetX: E[0],
                        offsetY: E[1],
                        scale: C,
                        isEditing: t,
                        onChange: M,
                        onBlur: l,
                        shape: e
                    }), r.createElement(o.gk, {
                        id: e.id + "_svg",
                        shapeStyle: y
                    }, r.createElement("defs", null, r.createElement("mask", {
                        id: e.id + "_clip"
                    }, r.createElement("rect", {
                        x: -100,
                        y: -100,
                        width: B.width + 200,
                        height: B.height + 200,
                        fill: "white"
                    }), r.createElement("rect", {
                        x: B.width / 2 - w[0] / 2 * C + E[0],
                        y: B.height / 2 - w[1] / 2 * C + E[1],
                        width: w[0] * C,
                        height: w[1] * C,
                        rx: 4 * C,
                        ry: 4 * C,
                        fill: "black",
                        opacity: 1
                    }))), r.createElement("g", {
                        pointerEvents: "none",
                        opacity: i ? .3 : 1,
                        mask: S || t ? `url(#${e.id}_clip)` : ""
                    }, r.createElement(D, {
                        id: c,
                        style: y,
                        start: m.point,
                        end: b.point,
                        bend: f.point,
                        arrowBend: e.bend,
                        decorationStart: null == v ? void 0 : v.start,
                        decorationEnd: null == v ? void 0 : v.end,
                        isDraw: "draw" === y.dash,
                        isDarkMode: s.isDarkMode
                    }))))
                }
                )),
                j(this, "Indicator", tu.Indicator(({shape: e, bounds: t})=>{
                    var i, s;
                    let {style: n, decorations: a, label: o, handles: {start: l, bend: d, end: h}} = e
                      , p = null != (s = null == (i = null == o ? void 0 : o.trim()) ? void 0 : i.length) && s
                      , c = e2(n)
                      , g = p ? eA(o, c) : [0, 0]
                      , m = 1 > u.B.dist(d.point, u.B.toFixed(u.B.med(l.point, h.point)))
                      , f = r.useMemo(()=>{
                        let {start: t, bend: i, end: s} = e.handles;
                        if (m)
                            return u.B.dist(t.point, s.point);
                        let n = tm(t.point, i.point, s.point);
                        return Math.abs(tI(n.slice(0, 2), n[2], t.point, s.point))
                    }
                    , [e.handles])
                      , b = Math.max(.5, Math.min(1, Math.max(f / (g[1] + 128), f / (g[0] + 128))))
                      , v = r.useMemo(()=>{
                        let t = this.getBounds(e);
                        return u.B.sub(e.handles.bend.point, [t.width / 2, t.height / 2])
                    }
                    , [e, b]);
                    return r.createElement(r.Fragment, null, p && r.createElement(eF, {
                        id: e.id,
                        scale: b,
                        offset: v,
                        bounds: t,
                        labelSize: g
                    }), r.createElement("path", {
                        d: function(e, t, i, s, n, a) {
                            let {strokeWidth: o} = e4(e, !1)
                              , r = Math.min(u.Z.dist(t, s) / 3, 8 * o)
                              , l = [];
                            if (1 > u.Z.dist(i, u.Z.toFixed(u.Z.med(t, s))))
                                l.push(`M ${t} L ${s}`),
                                n && l.push(ty(t, s, r)),
                                a && l.push(ty(s, t, r));
                            else {
                                let e = tm(t, i, s)
                                  , o = [e[0], e[1]]
                                  , d = e[2]
                                  , h = tI(o, d, t, s);
                                l.push(`M ${t} A ${d} ${d} 0 0 ${h > 0 ? "1" : "0"} ${s}`),
                                n && l.push(tv(t, r, o, d, h < 0)),
                                a && l.push(tv(s, r, o, d, h >= 0))
                            }
                            return l.join(" ")
                        }(n, l.point, d.point, h.point, null == a ? void 0 : a.start, null == a ? void 0 : a.end),
                        mask: p ? `url(#${e.id}_clip)` : ""
                    }), p && r.createElement("rect", {
                        x: t.width / 2 - g[0] / 2 * b + v[0],
                        y: t.height / 2 - g[1] / 2 * b + v[1],
                        width: g[0] * b,
                        height: g[1] * b,
                        rx: 4 * b,
                        ry: 4 * b,
                        fill: "transparent"
                    }))
                }
                )),
                j(this, "getBounds", e=>{
                    let t = o.cQ.getFromCache(this.boundsCache, e, ()=>{
                        let {handles: {start: t, bend: i, end: s}} = e;
                        return o.cQ.getBoundsFromPoints(tS(t.point, i.point, s.point))
                    }
                    );
                    return o.cQ.translateBounds(t, e.point)
                }
                ),
                j(this, "getRotatedBounds", e=>{
                    let {handles: {start: t, bend: i, end: s}} = e
                      , n = tS(t.point, i.point, s.point)
                      , {minX: a, minY: r, maxX: l, maxY: d} = o.cQ.getBoundsFromPoints(n);
                    return 0 !== e.rotation && (n = n.map(t=>u.B.rotWith(t, [(a + l) / 2, (r + d) / 2], e.rotation || 0))),
                    o.cQ.translateBounds(o.cQ.getBoundsFromPoints(n), e.point)
                }
                ),
                j(this, "getCenter", e=>{
                    let {start: t, end: i} = e.handles;
                    return u.B.add(e.point, u.B.med(t.point, i.point))
                }
                ),
                j(this, "shouldRender", (e,t)=>t.decorations !== e.decorations || t.handles !== e.handles || t.style !== e.style || t.label !== e.label),
                j(this, "hitTestPoint", (e,t)=>{
                    let {handles: {start: i, bend: s, end: n}} = e
                      , a = u.B.sub(t, e.point)
                      , o = tS(i.point, s.point, n.point);
                    for (let e = 1; e < o.length; e++)
                        if (1 > u.B.distanceToLineSegment(o[e - 1], o[e], a))
                            return !0;
                    return !1
                }
                ),
                j(this, "hitTestLineSegment", (e,t,i)=>{
                    let {handles: {start: s, bend: n, end: a}} = e
                      , o = u.B.sub(t, e.point)
                      , r = u.B.sub(i, e.point)
                      , l = tS(s.point, n.point, a.point);
                    for (let e = 1; e < l.length; e++)
                        if ((0,
                        g.T9)(l[e - 1], l[e], o, r).didIntersect)
                            return !0;
                    return !1
                }
                ),
                j(this, "hitTestBounds", (e,t)=>{
                    let {start: i, end: s, bend: n} = e.handles
                      , a = u.B.add(e.point, i.point)
                      , r = u.B.add(e.point, s.point);
                    if (o.cQ.pointInBounds(a, t) || o.cQ.pointInBounds(r, t))
                        return !0;
                    if (u.B.isEqual(u.B.med(i.point, s.point), n.point))
                        return (0,
                        g.WU)(a, r, t).length > 0;
                    {
                        let[o,l,d] = tm(i.point, n.point, s.point)
                          , h = u.B.add(e.point, [o, l]);
                        return (0,
                        g.Bc)(h, d, a, r, t).length > 0
                    }
                }
                ),
                j(this, "transform", (e,t,{initialShape: i, scaleX: s, scaleY: n})=>{
                    let a = this.getBounds(i)
                      , o = z({}, i.handles);
                    ["start", "end"].forEach(e=>{
                        let[i,r] = o[e].point
                          , l = i / a.width
                          , d = r / a.height;
                        o[e] = M(z({}, o[e]), {
                            point: [t.width * (s < 0 ? 1 - l : l), t.height * (n < 0 ? 1 - d : d)]
                        })
                    }
                    );
                    let {start: r, bend: l, end: d} = o
                      , h = u.B.dist(r.point, d.point)
                      , p = u.B.med(r.point, d.point)
                      , c = h / 2 * i.bend
                      , g = u.B.uni(u.B.vec(r.point, d.point))
                      , m = u.B.add(p, u.B.mul(u.B.per(g), c));
                    return o.bend = M(z({}, l), {
                        point: u.B.toFixed(10 > Math.abs(c) ? p : m)
                    }),
                    {
                        point: u.B.toFixed([t.minX, t.minY]),
                        handles: o
                    }
                }
                ),
                j(this, "onDoubleClickHandle", (e,t)=>{
                    var i, s;
                    switch (t) {
                    case "bend":
                        return {
                            bend: 0,
                            handles: M(z({}, e.handles), {
                                bend: M(z({}, e.handles.bend), {
                                    point: tg(e.handles, e.bend)
                                })
                            })
                        };
                    case "start":
                        return {
                            decorations: M(z({}, e.decorations), {
                                start: (null == (i = e.decorations) ? void 0 : i.start) ? void 0 : "arrow"
                            })
                        };
                    case "end":
                        return {
                            decorations: M(z({}, e.decorations), {
                                end: (null == (s = e.decorations) ? void 0 : s.end) ? void 0 : "arrow"
                            })
                        }
                    }
                    return this
                }
                ),
                j(this, "onHandleChange", (e,t)=>{
                    let i = o.cQ.deepMerge(e.handles, t)
                      , s = e.bend;
                    if (i = o.cQ.deepMerge(i, {
                        start: {
                            point: u.B.toFixed(i.start.point)
                        },
                        end: {
                            point: u.B.toFixed(i.end.point)
                        }
                    }),
                    u.B.isEqual(i.start.point, i.end.point))
                        return;
                    if ("bend"in t) {
                        let {start: e, end: t, bend: n} = i
                          , a = u.B.dist(e.point, t.point)
                          , r = u.B.med(e.point, t.point)
                          , l = u.B.angle(e.point, t.point)
                          , d = u.B.uni(u.B.vec(e.point, t.point))
                          , h = u.B.add(r, u.B.mul(u.B.per(d), a))
                          , p = u.B.sub(r, u.B.mul(u.B.per(d), a))
                          , c = u.B.nearestPointOnLineSegment(h, p, n.point, !0)
                          , g = u.B.dist(r, c) / (a / 2);
                        s = o.cQ.clamp(g, -.99, .99);
                        let m = u.B.angle(e.point, c);
                        u.B.isEqual(r, tg(i, s)) ? s = 0 : function(e, t, i) {
                            if (i === e || i === t)
                                return !0;
                            let s = 2 * Math.PI
                              , n = (t - e + s) % s;
                            return n <= Math.PI != (i - e + s) % s > n
                        }(l, l + Math.PI, m) && (s *= -1)
                    }
                    let n = {
                        point: e.point,
                        bend: s,
                        handles: M(z({}, i), {
                            bend: M(z({}, i.bend), {
                                point: tg(i, s)
                            })
                        })
                    }
                      , a = e.point
                      , r = this.getBounds(z({}, n))
                      , l = u.B.sub([r.minX, r.minY], a);
                    return u.B.isEqual(l, [0, 0]) || (Object.values(n.handles).forEach(e=>{
                        e.point = u.B.toFixed(u.B.sub(e.point, l))
                    }
                    ),
                    n.point = u.B.toFixed(u.B.add(n.point, l))),
                    n
                }
                ),
                j(this, "getSvgElement", (e,t)=>{
                    var i, s, n, a, o;
                    let r = null == (i = document.getElementById(e.id + "_svg")) ? void 0 : i.cloneNode(!0);
                    if (r) {
                        if (null != (a = null == (n = null == (s = e.label) ? void 0 : s.trim()) ? void 0 : n.length) && a) {
                            let i = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = e2(e.style), n = eA(e.label, s), a = eJ(e.style.size, e.style.font) * (null != (o = e.style.scale) ? o : 1), l = e0(e.style.font).slice(1, -1), d = eO(e.label, a, l, "start", n[0], !1), h, {start: p, bend: c, end: g} = e.handles;
                            if (1 > u.B.dist(c.point, u.B.toFixed(u.B.med(p.point, g.point))))
                                h = u.B.dist(p.point, g.point);
                            else {
                                let e = tm(p.point, c.point, g.point);
                                h = Math.abs(tI(e.slice(0, 2), e[2], p.point, g.point))
                            }
                            let m = Math.max(.5, Math.min(1, Math.max(h / (n[1] + 128), h / (n[0] + 128))))
                              , f = this.getBounds(e)
                              , b = u.B.sub(e.handles.bend.point, [f.width / 2, f.height / 2])
                              , v = f.width / 2 - n[0] / 2 * m + b[0]
                              , y = f.height / 2 - n[1] / 2 * m + b[1];
                            return d.setAttribute("transform", `translate(${v}, ${y})`),
                            d.setAttribute("fill", e4(e.style, t).stroke),
                            d.setAttribute("transform-origin", "center center"),
                            i.setAttribute("text-align", "center"),
                            i.setAttribute("text-anchor", "middle"),
                            i.appendChild(r),
                            i.appendChild(d),
                            i
                        }
                        return r
                    }
                }
                )
            }
        }
          , tP = eh("div", {
            width: "100%",
            height: "100%"
        })
          , tC = {
            easing: e=>Math.sin(e * Math.PI / 2),
            simulatePressure: !0
        }
          , tE = {
            easing: e=>e * e,
            simulatePressure: !1
        };
        function tz(e) {
            return M(z({
                size: 1 + 1.5 * e4(e.style).strokeWidth,
                thinning: .65,
                streamline: .65,
                smoothing: .65
            }, .5 === e.points[1][2] ? tC : tE), {
                last: e.isComplete
            })
        }
        function tM(e, t) {
            return (0,
            m.tt)(e.points, t)
        }
        function tD(e) {
            let {points: t} = e;
            if (t.length < 2)
                return "M 0 0 L 0 0";
            let i = tz(e)
              , s = tM(e, i)
              , n = t[t.length - 1];
            return u.Z.isEqual(s[0].point, n) || s.push({
                point: n
            }),
            o.cQ.getSvgPathFromStrokePoints(s)
        }
        var tj = class extends tu {
            constructor() {
                super(...arguments),
                j(this, "type", "draw"),
                j(this, "pointsBoundsCache", new WeakMap([])),
                j(this, "shapeBoundsCache", new Map),
                j(this, "rotatedCache", new WeakMap([])),
                j(this, "pointCache", {}),
                j(this, "canClone", !0),
                j(this, "getShape", e=>o.cQ.deepMerge({
                    id: "id",
                    type: "draw",
                    name: "Draw",
                    parentId: "page",
                    childIndex: 1,
                    point: [0, 0],
                    rotation: 0,
                    style: e6,
                    points: [],
                    isComplete: !1
                }, e)),
                j(this, "Component", tu.Component(({shape: e, meta: t, isSelected: i, isGhost: s, events: n},a)=>{
                    let {points: l, style: d, isComplete: h} = e
                      , p = r.useMemo(()=>e.points.length < 2 ? "" : o.cQ.getSvgPathFromStroke((0,
                    m.tt)(e.points, tz(e)).map(e=>e.point)), [l, d.size])
                      , c = r.useMemo(()=>"draw" === d.dash ? function(e) {
                        if (e.points.length < 2)
                            return "";
                        let t = tz(e)
                          , i = tM(e, t);
                        return o.cQ.getSvgPathFromStroke((0,
                        m.ib)(i, t))
                    }(e) : tD(e), [l, d.size, d.dash, h])
                      , {stroke: g, fill: f, strokeWidth: b} = e4(d, t.isDarkMode)
                      , v = this.getBounds(e);
                    if (v.width <= b / 2 && v.height <= b / 2)
                        return r.createElement(o.gk, z({
                            ref: a,
                            id: e.id + "_svg"
                        }, n), r.createElement("circle", {
                            r: 1 + b,
                            fill: g,
                            stroke: g,
                            pointerEvents: "all",
                            opacity: s ? .3 : 1
                        }));
                    let y = d.isFilled && l.length > 3 && u.B.dist(l[0], l[l.length - 1]) < 2 * b;
                    if ("draw" === e.style.dash)
                        return r.createElement(o.gk, z({
                            ref: a,
                            id: e.id + "_svg"
                        }, n), r.createElement("g", {
                            opacity: s ? .3 : 1
                        }, r.createElement("path", {
                            className: y || i ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                            d: c
                        }), y && r.createElement("path", {
                            d: p,
                            stroke: "none",
                            fill: f,
                            strokeLinejoin: "round",
                            strokeLinecap: "round",
                            pointerEvents: "none"
                        }), r.createElement("path", {
                            d: c,
                            fill: g,
                            stroke: g,
                            strokeWidth: b / 2,
                            strokeLinejoin: "round",
                            strokeLinecap: "round",
                            pointerEvents: "none"
                        })));
                    let S = {
                        draw: "none",
                        solid: "none",
                        dotted: `0.1 ${4 * b}`,
                        dashed: `${4 * b} ${4 * b}`
                    }[d.dash]
                      , I = {
                        draw: "none",
                        solid: "none",
                        dotted: "0",
                        dashed: "0"
                    }[d.dash];
                    return r.createElement(o.gk, z({
                        ref: a,
                        id: e.id + "_svg"
                    }, n), r.createElement("g", {
                        opacity: s ? .3 : 1
                    }, r.createElement("path", {
                        className: y && i ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                        d: c
                    }), r.createElement("path", {
                        d: c,
                        fill: y ? f : "none",
                        stroke: "none",
                        strokeWidth: Math.min(4, 2 * b),
                        strokeLinejoin: "round",
                        strokeLinecap: "round",
                        pointerEvents: "none"
                    }), r.createElement("path", {
                        d: c,
                        fill: "none",
                        stroke: g,
                        strokeWidth: 1 + 1.5 * b,
                        strokeDasharray: S,
                        strokeDashoffset: I,
                        strokeLinejoin: "round",
                        strokeLinecap: "round",
                        pointerEvents: "none"
                    })))
                }
                )),
                j(this, "Indicator", tu.Indicator(({shape: e})=>{
                    let {points: t} = e
                      , i = r.useMemo(()=>tD(e), [t])
                      , s = this.getBounds(e);
                    return s.width < 4 && s.height < 4 ? r.createElement("circle", {
                        x: s.width / 2,
                        y: s.height / 2,
                        r: 1
                    }) : r.createElement("path", {
                        d: i
                    })
                }
                )),
                j(this, "transform", (e,t,{initialShape: i, scaleX: s, scaleY: n})=>{
                    let a = o.cQ.getFromCache(this.boundsCache, i, ()=>o.cQ.getBoundsFromPoints(i.points))
                      , r = i.points.map(([e,i,o])=>[t.width * (s < 0 ? 1 - e / a.width : e / a.width), t.height * (n < 0 ? 1 - i / a.height : i / a.height), o])
                      , l = o.cQ.getBoundsFromPoints(e.points);
                    return {
                        points: r,
                        point: u.B.sub([t.minX, t.minY], [l.minX, l.minY])
                    }
                }
                ),
                j(this, "getBounds", e=>{
                    let t = !this.pointsBoundsCache.has(e.points)
                      , i = this.pointCache[e.id] !== e.point;
                    if (t) {
                        let t = o.cQ.getBoundsFromPoints(e.points);
                        this.pointsBoundsCache.set(e.points, t),
                        this.shapeBoundsCache.set(e.id, o.cQ.translateBounds(t, e.point)),
                        this.pointCache[e.id] = e.point
                    } else
                        i && !t && (this.pointCache[e.id] = e.point,
                        this.shapeBoundsCache.set(e.id, o.cQ.translateBounds(this.pointsBoundsCache.get(e.points), e.point)));
                    return this.shapeBoundsCache.get(e.id)
                }
                ),
                j(this, "shouldRender", (e,t)=>t.points !== e.points || t.style !== e.style || t.isComplete !== e.isComplete),
                j(this, "hitTestPoint", (e,t)=>{
                    let i = u.B.sub(t, e.point);
                    return o.cQ.pointInPolyline(i, e.points)
                }
                ),
                j(this, "hitTestLineSegment", (e,t,i)=>{
                    let {points: s, point: n} = e
                      , a = u.B.sub(t, n)
                      , r = u.B.sub(i, n)
                      , l = this.getBounds(e);
                    if (l.width < 8 && l.height < 8)
                        return 5 > u.B.distanceToLineSegment(t, i, o.cQ.getBoundsCenter(l));
                    if ((0,
                    g.WU)(a, r, l)) {
                        for (let e = 1; e < s.length; e++)
                            if ((0,
                            g.T9)(s[e - 1], s[e], a, r).didIntersect)
                                return !0
                    }
                    return !1
                }
                ),
                j(this, "hitTestBounds", (e,t)=>{
                    if (!e.rotation) {
                        let i = this.getBounds(e);
                        return o.cQ.boundsContain(t, i) || (o.cQ.boundsContain(i, t) || (0,
                        g.Sn)(i, t).length > 0) && (0,
                        g.zb)(o.cQ.translateBounds(t, u.B.neg(e.point)), e.points).length > 0
                    }
                    let i = this.getRotatedBounds(e)
                      , s = o.cQ.getFromCache(this.rotatedCache, e, ()=>{
                        let t = o.cQ.getBoundsCenter(o.cQ.getBoundsFromPoints(e.points));
                        return e.points.map(i=>u.B.rotWith(i, t, e.rotation || 0))
                    }
                    );
                    return o.cQ.boundsContain(t, i) || (0,
                    g.zb)(o.cQ.translateBounds(t, u.B.neg(e.point)), s).length > 0
                }
                )
            }
        }
          , tA = r.memo(function({radius: e, style: t, isSelected: i, isDarkMode: s}) {
            let {stroke: n, strokeWidth: a, fill: l} = e4(t, s)
              , d = 1 + 1.618 * a
              , h = Math.max(0, e[0] - d / 2)
              , p = Math.max(0, e[1] - d / 2)
              , c = o.cQ.perimeterOfEllipse(h, p)
              , {strokeDasharray: u, strokeDashoffset: g} = o.cQ.getPerfectDashProps(c < 64 ? 2 * c : c, 1.618 * a, t.dash, 4);
            return r.createElement(r.Fragment, null, r.createElement("ellipse", {
                className: t.isFilled || i ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                cx: e[0],
                cy: e[1],
                rx: e[0],
                ry: e[1]
            }), r.createElement("ellipse", {
                cx: e[0],
                cy: e[1],
                rx: h,
                ry: p,
                fill: l,
                stroke: n,
                strokeWidth: d,
                strokeDasharray: u,
                strokeDashoffset: g,
                pointerEvents: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }))
        });
        function tT(e, t, i) {
            let {strokeWidth: s} = e4(i)
              , n = o.cQ.rng(e)
              , a = t[0] + n() * s * 2
              , r = t[1] + n() * s * 2
              , l = o.cQ.perimeterOfEllipse(a, r)
              , d = []
              , h = Math.PI + Math.PI * n()
              , p = Math.abs(n())
              , c = Math.max(16, l / 10);
            for (let e = 0; e < c; e++) {
                let i = ey.easeInOutSine(e / (c + 1))
                  , s = 2 * h + Math.PI * (2 + p) * i
                  , o = Math.cos(s)
                  , l = Math.sin(s);
                d.push([a * o + t[0], r * l + t[1], i + .5 + n() / 2])
            }
            return (0,
            m.tt)(d, {
                size: 1 + 2 * s,
                thinning: .618,
                end: {
                    taper: l / 8
                },
                start: {
                    taper: l / 12
                },
                streamline: 0,
                simulatePressure: !0
            })
        }
        function tO(e, t, i) {
            return o.cQ.getSvgPathFromStrokePoints(tT(e, t, i))
        }
        var tF = r.memo(function({id: e, radius: t, style: i, isSelected: s, isDarkMode: n}) {
            let {stroke: a, strokeWidth: l, fill: d} = e4(i, n)
              , h = function(e, t, i) {
                let {strokeWidth: s} = e4(i)
                  , n = o.cQ.rng(e)
                  , a = t[0] + n() * s * 2
                  , r = t[1] + n() * s * 2
                  , l = o.cQ.perimeterOfEllipse(a, r);
                return o.cQ.getSvgPathFromStroke((0,
                m.ib)(tT(e, t, i), {
                    size: 2 + 2 * s,
                    thinning: .618,
                    end: {
                        taper: l / 8
                    },
                    start: {
                        taper: l / 12
                    },
                    streamline: 0,
                    simulatePressure: !0
                }))
            }(e, t, i);
            return r.createElement(r.Fragment, null, r.createElement("ellipse", {
                className: i.isFilled || s ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                cx: t[0],
                cy: t[1],
                rx: t[0],
                ry: t[1]
            }), i.isFilled && r.createElement("path", {
                d: tO(e, t, i),
                stroke: "none",
                fill: d,
                pointerEvents: "none"
            }), r.createElement("path", {
                d: h,
                fill: a,
                stroke: a,
                strokeWidth: l,
                pointerEvents: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }))
        })
          , tL = class extends tu {
            constructor() {
                super(...arguments),
                j(this, "type", "ellipse"),
                j(this, "canBind", !0),
                j(this, "canClone", !0),
                j(this, "canEdit", !0),
                j(this, "getShape", e=>o.cQ.deepMerge({
                    id: "id",
                    type: "ellipse",
                    name: "Ellipse",
                    parentId: "page",
                    childIndex: 1,
                    point: [0, 0],
                    radius: [1, 1],
                    rotation: 0,
                    style: e6,
                    label: "",
                    labelPoint: [.5, .5]
                }, e)),
                j(this, "Component", tu.Component(({shape: e, isGhost: t, isSelected: i, isBinding: s, isEditing: n, meta: a, bounds: l, events: d, onShapeChange: h, onShapeBlur: p},c)=>{
                    let {id: u, radius: g, style: m, label: f="", labelPoint: b=eb} = e
                      , v = e2(e.style)
                      , y = e4(m, a.isDarkMode)
                      , S = 1 + 1.618 * y.strokeWidth
                      , I = Math.max(0, g[0] - S / 2)
                      , x = Math.max(0, g[1] - S / 2)
                      , k = "draw" === m.dash ? tF : tA
                      , w = r.useCallback(e=>null == h ? void 0 : h({
                        id: u,
                        label: e
                    }), [h]);
                    return r.createElement(tR, z({
                        ref: c
                    }, d), r.createElement(to, {
                        isEditing: n,
                        onChange: w,
                        onBlur: p,
                        font: v,
                        text: f,
                        color: y.stroke,
                        offsetX: (b[0] - .5) * l.width,
                        offsetY: (b[1] - .5) * l.height,
                        shape: e
                    }), r.createElement(o.gk, {
                        id: e.id + "_svg",
                        opacity: t ? .3 : 1,
                        shapeStyle: m
                    }, s && r.createElement("ellipse", {
                        className: "tl-binding-indicator",
                        cx: g[0],
                        cy: g[1],
                        rx: I,
                        ry: x,
                        strokeWidth: this.bindingDistance
                    }), r.createElement(k, {
                        id: u,
                        radius: g,
                        style: m,
                        isSelected: i,
                        isDarkMode: a.isDarkMode
                    })))
                }
                )),
                j(this, "Indicator", tu.Indicator(({shape: e})=>{
                    let {id: t, radius: i, style: s} = e
                      , n = 1 + 1.618 * e4(s).strokeWidth
                      , a = Math.max(0, i[0] - n / 2)
                      , o = Math.max(0, i[1] - n / 2);
                    return "draw" === s.dash ? r.createElement("path", {
                        d: tO(t, i, s)
                    }) : r.createElement("ellipse", {
                        cx: i[0],
                        cy: i[1],
                        rx: a,
                        ry: o
                    })
                }
                )),
                j(this, "hitTestPoint", (e,t)=>o.cQ.pointInBounds(t, this.getRotatedBounds(e)) && o.cQ.pointInEllipse(t, this.getCenter(e), e.radius[0], e.radius[1], e.rotation || 0)),
                j(this, "hitTestLineSegment", (e,t,i)=>(0,
                g.qx)(t, i, this.getCenter(e), e.radius[0], e.radius[1], e.rotation || 0).didIntersect),
                j(this, "getBounds", e=>o.cQ.getFromCache(this.boundsCache, e, ()=>o.cQ.getRotatedEllipseBounds(e.point[0], e.point[1], e.radius[0], e.radius[1], 0))),
                j(this, "getRotatedBounds", e=>o.cQ.getRotatedEllipseBounds(e.point[0], e.point[1], e.radius[0], e.radius[1], e.rotation)),
                j(this, "hitTestBounds", (e,t)=>{
                    let i = this.getBounds(e);
                    return o.cQ.boundsContained(i, t) || (0,
                    g.Rt)(this.getCenter(e), e.radius[0], e.radius[1], e.rotation || 0, t).length > 0
                }
                ),
                j(this, "shouldRender", (e,t)=>t.radius !== e.radius || t.style !== e.style || t.label !== e.label),
                j(this, "getCenter", e=>u.B.add(e.point, e.radius)),
                j(this, "getBindingPoint", (e,t,i,s,n,a)=>{
                    {
                        let t = this.getExpandedBounds(e), r = this.getCenter(e), l, d;
                        if (!o.cQ.pointInEllipse(i, r, e.radius[0] + this.bindingDistance, e.radius[1] + this.bindingDistance))
                            return;
                        if (a)
                            l = 12 > u.B.dist(i, this.getCenter(e)) ? [.5, .5] : u.B.divV(u.B.sub(i, [t.minX, t.minY]), [t.width, t.height]),
                            d = 0;
                        else {
                            let a = (0,
                            g.Zz)(s, n, r, e.radius[0], e.radius[1], e.rotation || 0).points.sort((e,t)=>u.B.dist(e, s) - u.B.dist(t, s))[0];
                            if (a || (a = (0,
                            g.qx)(i, r, r, e.radius[0], e.radius[1], e.rotation || 0).points.sort((e,t)=>u.B.dist(e, i) - u.B.dist(t, i))[0]),
                            !a)
                                return;
                            let h = u.B.med(i, a);
                            if (l = 12 > u.B.distanceToLineSegment(i, h, this.getCenter(e)) ? [.5, .5] : u.B.divV(u.B.sub(h, [t.minX, t.minY]), [t.width, t.height]),
                            o.cQ.pointInEllipse(i, r, e.radius[0], e.radius[1], e.rotation || 0))
                                d = this.bindingDistance / 2;
                            else {
                                let t = (0,
                                g.qx)(i, r, r, e.radius[0], e.radius[1], e.rotation || 0).points[0];
                                if (!t)
                                    return;
                                d = Math.max(this.bindingDistance / 2, u.B.dist(i, t))
                            }
                        }
                        return {
                            point: l,
                            distance: d
                        }
                    }
                }
                ),
                j(this, "transform", (e,t,{scaleX: i, scaleY: s, initialShape: n})=>{
                    let {rotation: a=0} = n;
                    return {
                        point: [t.minX, t.minY],
                        radius: [t.width / 2, t.height / 2],
                        rotation: i < 0 && s >= 0 || s < 0 && i >= 0 ? -(a || 0) : a || 0
                    }
                }
                ),
                j(this, "transformSingle", (e,t)=>({
                    point: u.B.toFixed([t.minX, t.minY]),
                    radius: u.B.div([t.width, t.height], 2)
                }))
            }
        }
          , tR = eh("div", {
            width: "100%",
            height: "100%"
        })
          , tH = class extends tu {
            constructor() {
                super(...arguments),
                j(this, "type", "group"),
                j(this, "canBind", !0),
                j(this, "getShape", e=>o.cQ.deepMerge({
                    id: "id",
                    type: "group",
                    name: "Group",
                    parentId: "page",
                    childIndex: 1,
                    point: [0, 0],
                    size: [100, 100],
                    rotation: 0,
                    children: [],
                    style: e6
                }, e)),
                j(this, "Component", tu.Component(({shape: e, isBinding: t, isGhost: i, isHovered: s, isSelected: n, events: a},l)=>{
                    let {id: d, size: h} = e
                      , p = Math.max(0, h[0] - 1)
                      , c = Math.max(0, h[1] - 1)
                      , u = [[[1, 1], [p, 1], p - 1], [[p, 1], [p, c], c - 1], [[p, c], [1, c], p - 1], [[1, c], [1, 1], c - 1]].map(([e,t],i)=>r.createElement("line", {
                        key: d + "_" + i,
                        x1: e[0],
                        y1: e[1],
                        x2: t[0],
                        y2: t[1]
                    }));
                    return r.createElement(o.gk, z({
                        ref: l
                    }, a), t && r.createElement("rect", {
                        className: "tl-binding-indicator",
                        strokeWidth: this.bindingDistance
                    }), r.createElement("g", {
                        opacity: i ? .3 : 1
                    }, r.createElement("rect", {
                        x: 0,
                        y: 0,
                        width: h[0],
                        height: h[1],
                        fill: "transparent",
                        pointerEvents: "all"
                    }), r.createElement(tQ, {
                        stroke: "black",
                        opacity: s || n ? 1 : 0,
                        strokeLinecap: "round",
                        pointerEvents: "stroke"
                    }, u)))
                }
                )),
                j(this, "Indicator", tu.Indicator(({shape: e})=>{
                    let {id: t, size: i} = e
                      , s = Math.max(0, i[0] - 1)
                      , n = Math.max(0, i[1] - 1)
                      , a = [[[1, 1], [s, 1], s - 1], [[s, 1], [s, n], n - 1], [[s, n], [1, n], s - 1], [[1, n], [1, 1], n - 1]].map(([e,i],s)=>r.createElement("line", {
                        key: t + "_" + s,
                        x1: e[0],
                        y1: e[1],
                        x2: i[0],
                        y2: i[1]
                    }));
                    return r.createElement(tQ, {
                        strokeLinecap: "round",
                        pointerEvents: "stroke"
                    }, a)
                }
                )),
                j(this, "getBounds", e=>eP(e, this.boundsCache)),
                j(this, "shouldRender", (e,t)=>t.size !== e.size || t.style !== e.style)
            }
        }
          , tQ = eh("g", {
            strokeWidth: "calc(1.5px * var(--tl-scale))",
            strokeDasharray: "calc(1px * var(--tl-scale)), calc(3px * var(--tl-scale))"
        })
          , tU = class extends tu {
            constructor() {
                super(...arguments),
                j(this, "type", "image"),
                j(this, "canBind", !0),
                j(this, "canClone", !0),
                j(this, "isAspectRatioLocked", !0),
                j(this, "showCloneHandles", !1),
                j(this, "getShape", e=>o.cQ.deepMerge({
                    id: "image",
                    type: "image",
                    name: "Image",
                    parentId: "page",
                    childIndex: 1,
                    point: [0, 0],
                    size: [1, 1],
                    rotation: 0,
                    style: M(z({}, e6), {
                        isFilled: !0
                    }),
                    assetId: "assetId"
                }, e)),
                j(this, "Component", tu.Component(({shape: e, asset: t={
                    src: ""
                }, isBinding: i, isGhost: s, meta: n, events: a, onShapeChange: l},d)=>{
                    let {size: h, style: p} = e
                      , {bindingDistance: c} = this
                      , u = r.useRef(null)
                      , g = r.useRef(null);
                    return r.useLayoutEffect(()=>{
                        let e = g.current;
                        if (!e)
                            return;
                        let[t,i] = h;
                        e.style.width = `${t}px`,
                        e.style.height = `${i}px`
                    }
                    , [h]),
                    r.createElement(o.G7, z({
                        ref: d
                    }, a), i && r.createElement("div", {
                        className: "tl-binding-indicator",
                        style: {
                            position: "absolute",
                            top: `calc(${-c}px * var(--tl-zoom))`,
                            left: `calc(${-c}px * var(--tl-zoom))`,
                            width: `calc(100% + ${2 * c}px * var(--tl-zoom))`,
                            height: `calc(100% + ${2 * c}px * var(--tl-zoom))`,
                            backgroundColor: "var(--tl-selectFill)"
                        }
                    }), r.createElement(tZ, {
                        ref: g,
                        isDarkMode: n.isDarkMode,
                        isFilled: p.isFilled,
                        isGhost: s
                    }, r.createElement(tK, {
                        id: e.id + "_image",
                        ref: u,
                        src: t.src,
                        alt: "tl_image_asset",
                        draggable: !1
                    })))
                }
                )),
                j(this, "Indicator", tu.Indicator(({shape: e})=>{
                    let {size: [t,i]} = e;
                    return r.createElement("rect", {
                        x: 0,
                        y: 0,
                        rx: 2,
                        ry: 2,
                        width: Math.max(1, t),
                        height: Math.max(1, i)
                    })
                }
                )),
                j(this, "getBounds", e=>eP(e, this.boundsCache)),
                j(this, "shouldRender", (e,t)=>t.size !== e.size || t.style !== e.style),
                j(this, "transform", tp),
                j(this, "transformSingle", tc),
                j(this, "getSvgElement", e=>{
                    let t = this.getBounds(e)
                      , i = document.createElementNS("http://www.w3.org/2000/svg", "image");
                    return i.setAttribute("width", `${t.width}`),
                    i.setAttribute("height", `${t.height}`),
                    i.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
                    i
                }
                )
            }
        }
          , tZ = (0,
        c.zo)("div", {
            pointerEvents: "all",
            position: "relative",
            fontFamily: "sans-serif",
            fontSize: "2em",
            height: "100%",
            width: "100%",
            borderRadius: "3px",
            perspective: "800px",
            overflow: "hidden",
            p: {
                userSelect: "none"
            },
            img: {
                userSelect: "none"
            },
            variants: {
                isGhost: {
                    false: {
                        opacity: 1
                    },
                    true: {
                        transition: "opacity .2s",
                        opacity: .3
                    }
                },
                isFilled: {
                    true: {},
                    false: {}
                },
                isDarkMode: {
                    true: {},
                    false: {}
                }
            },
            compoundVariants: [{
                isFilled: !0,
                isDarkMode: !0,
                css: {}
            }, {
                isFilled: !0,
                isDarkMode: !1,
                css: {}
            }]
        })
          , tK = (0,
        c.zo)("img", {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            minWidth: "100%",
            pointerEvents: "none",
            objectFit: "cover",
            userSelect: "none",
            borderRadius: 2
        });
        function t_({strokeWidth: e, size: t}) {
            return r.createElement("rect", {
                className: "tl-binding-indicator",
                x: e,
                y: e,
                width: Math.max(0, t[0] - e / 2),
                height: Math.max(0, t[1] - e / 2),
                strokeWidth: 32
            })
        }
        var tN = r.memo(function({id: e, style: t, size: i, isSelected: s, isDarkMode: n}) {
            let {stroke: a, strokeWidth: l, fill: d} = e4(t, n)
              , h = 1 + 1.618 * l
              , p = Math.max(0, i[0] - h / 2)
              , c = Math.max(0, i[1] - h / 2)
              , u = [[[h / 2, h / 2], [p, h / 2], p - h / 2], [[p, h / 2], [p, c], c - h / 2], [[p, c], [h / 2, c], p - h / 2], [[h / 2, c], [h / 2, h / 2], c - h / 2]].map(([i,s,n],a)=>{
                let {strokeDasharray: d, strokeDashoffset: h} = o.cQ.getPerfectDashProps(n, 1.618 * l, t.dash);
                return r.createElement("line", {
                    key: e + "_" + a,
                    x1: i[0],
                    y1: i[1],
                    x2: s[0],
                    y2: s[1],
                    strokeDasharray: d,
                    strokeDashoffset: h
                })
            }
            );
            return r.createElement(r.Fragment, null, r.createElement("rect", {
                className: s || t.isFilled ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                x: h / 2,
                y: h / 2,
                width: p,
                height: c,
                strokeWidth: 16
            }), t.isFilled && r.createElement("rect", {
                x: h / 2,
                y: h / 2,
                width: p,
                height: c,
                fill: d,
                pointerEvents: "none"
            }), r.createElement("g", {
                pointerEvents: "none",
                stroke: a,
                strokeWidth: h,
                strokeLinecap: "round"
            }, u))
        });
        function tW(e, t, i) {
            let s, n, a, r, l, d, h, p, c, g, m, f, b, v, y, S;
            let {points: I} = (s = e4(t),
            n = o.cQ.rng(e),
            a = s.strokeWidth,
            r = Math.max(0, i[0]),
            l = Math.max(0, i[1]),
            d = Array.from([, , , , ]).map(()=>[n() * a * .75, n() * a * .75]),
            h = u.Z.add([a / 2, a / 2], d[0]),
            p = u.Z.add([r - a / 2, a / 2], d[1]),
            c = u.Z.add([r - a / 2, l - a / 2], d[2]),
            g = u.Z.add([a / 2, l - a / 2], d[3]),
            m = Math.round(Math.abs(8 * n())),
            f = Math.min(r / 4, 2 * a),
            b = Math.min(l / 4, 2 * a),
            v = Math.max(8, Math.floor(r / 16)),
            y = Math.max(8, Math.floor(l / 16)),
            {
                points: [...(S = o.cQ.rotateArray([u.Z.pointsBetween(u.Z.add(h, [f, 0]), u.Z.sub(p, [f, 0]), v), u.Z.pointsBetween(u.Z.add(p, [0, b]), u.Z.sub(c, [0, b]), y), u.Z.pointsBetween(u.Z.sub(c, [f, 0]), u.Z.add(g, [f, 0]), v), u.Z.pointsBetween(u.Z.sub(g, [0, b]), u.Z.add(h, [0, b]), y)], m)).flat(), ...S[0]].slice(5, Math.floor(-((m % 2 == 0 ? v : y) / 2)) + 3)
            })
              , {strokeWidth: x} = e4(t);
            return {
                points: I,
                options: {
                    size: x,
                    thinning: .65,
                    streamline: .3,
                    smoothing: 1,
                    simulatePressure: !1,
                    last: !0
                }
            }
        }
        function tG(e, t, i) {
            let {points: s, options: n} = tW(e, t, i);
            return o.cQ.getSvgPathFromStrokePoints((0,
            m.tt)(s, n))
        }
        var tY, t$, tX, tV, tq, tJ, t0, t1, t2, t5, t3, t4, t6, t8, t9, t7, ie, it, ii, is, ia, io, ir = r.memo(function({id: e, style: t, size: i, isSelected: s, isDarkMode: n}) {
            let {isFilled: a} = t
              , {stroke: l, strokeWidth: d, fill: h} = e4(t, n)
              , p = function(e, t, i) {
                let {points: s, options: n} = tW(e, t, i)
                  , a = (0,
                m.ZP)(s, n);
                return o.cQ.getSvgPathFromStroke(a)
            }(e, t, i)
              , c = tG(e, t, i);
            return r.createElement(r.Fragment, null, r.createElement("path", {
                className: t.isFilled || s ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                d: c
            }), a && r.createElement("path", {
                d: c,
                fill: h,
                pointerEvents: "none"
            }), r.createElement("path", {
                d: p,
                fill: l,
                stroke: l,
                strokeWidth: d,
                pointerEvents: "none"
            }))
        }), il = class extends tu {
            constructor() {
                super(...arguments),
                j(this, "type", "rectangle"),
                j(this, "canBind", !0),
                j(this, "canClone", !0),
                j(this, "canEdit", !0),
                j(this, "getShape", e=>o.cQ.deepMerge({
                    id: "id",
                    type: "rectangle",
                    name: "Rectangle",
                    parentId: "page",
                    childIndex: 1,
                    point: [0, 0],
                    size: [1, 1],
                    rotation: 0,
                    style: e6,
                    label: "",
                    labelPoint: [.5, .5]
                }, e)),
                j(this, "Component", tu.Component(({shape: e, isEditing: t, isBinding: i, isSelected: s, isGhost: n, meta: a, bounds: l, events: d, onShapeBlur: h, onShapeChange: p},c)=>{
                    let {id: u, size: g, style: m, label: f="", labelPoint: b=eb} = e
                      , v = e2(m)
                      , y = e4(m, a.isDarkMode)
                      , S = "draw" === m.dash ? ir : tN
                      , I = r.useCallback(e=>null == p ? void 0 : p({
                        id: u,
                        label: e
                    }), [p]);
                    return r.createElement(id, z({
                        ref: c
                    }, d), r.createElement(to, {
                        isEditing: t,
                        onChange: I,
                        onBlur: h,
                        font: v,
                        text: f,
                        color: y.stroke,
                        offsetX: (b[0] - .5) * l.width,
                        offsetY: (b[1] - .5) * l.height,
                        shape: e
                    }), r.createElement(o.gk, {
                        id: e.id + "_svg",
                        opacity: n ? .3 : 1,
                        shapeStyle: m
                    }, i && r.createElement(t_, {
                        strokeWidth: y.strokeWidth,
                        size: g
                    }), r.createElement(S, {
                        id: u,
                        style: m,
                        size: g,
                        isSelected: s,
                        isDarkMode: a.isDarkMode
                    })))
                }
                )),
                j(this, "Indicator", tu.Indicator(({shape: e})=>{
                    let {id: t, style: i, size: s} = e
                      , n = e4(i, !1).strokeWidth;
                    return "draw" === i.dash ? r.createElement("path", {
                        d: tG(t, i, s)
                    }) : r.createElement("rect", {
                        x: n,
                        y: n,
                        rx: 1,
                        ry: 1,
                        width: Math.max(1, s[0] - 2 * n),
                        height: Math.max(1, s[1] - 2 * n)
                    })
                }
                )),
                j(this, "getBounds", e=>eP(e, this.boundsCache)),
                j(this, "shouldRender", (e,t)=>t.size !== e.size || t.style !== e.style || t.label !== e.label),
                j(this, "transform", tp),
                j(this, "transformSingle", tc)
            }
        }
        , id = eh("div", {
            width: "100%",
            height: "100%"
        }), ih = class extends tu {
            constructor() {
                super(...arguments),
                j(this, "type", "sticky"),
                j(this, "canBind", !0),
                j(this, "canEdit", !0),
                j(this, "canClone", !0),
                j(this, "hideResizeHandles", !0),
                j(this, "showCloneHandles", !0),
                j(this, "getShape", e=>o.cQ.deepMerge({
                    id: "id",
                    type: "sticky",
                    name: "Sticky",
                    parentId: "page",
                    childIndex: 1,
                    point: [0, 0],
                    size: [200, 200],
                    text: "",
                    rotation: 0,
                    style: e8
                }, e)),
                j(this, "Component", tu.Component(({shape: e, meta: t, events: i, isGhost: s, isBinding: n, isEditing: a, onShapeBlur: l, onShapeChange: d},h)=>{
                    let p = e5(e.style)
                      , {color: c, fill: u} = e3(e.style, t.isDarkMode)
                      , g = r.useRef(null)
                      , m = r.useRef(null)
                      , f = r.useRef(null)
                      , b = r.useRef(!1)
                      , v = r.useCallback(e=>{
                        e.stopPropagation()
                    }
                    , [])
                      , y = r.useCallback(t=>{
                        null == d || d({
                            id: e.id,
                            type: e.type,
                            text: ta.normalizeText(t)
                        })
                    }
                    , [e.id])
                      , S = r.useCallback(e=>{
                        y(e.currentTarget.value)
                    }
                    , [d, y])
                      , I = r.useCallback(t=>{
                        if ("Escape" === t.key) {
                            t.preventDefault(),
                            t.stopPropagation(),
                            null == l || l();
                            return
                        }
                        if ("Tab" === t.key && 0 === e.text.length) {
                            t.preventDefault();
                            return
                        }
                        if ("Meta" === t.key || t.metaKey) {
                            if ("z" === t.key && t.metaKey) {
                                t.shiftKey ? document.execCommand("redo", !1) : document.execCommand("undo", !1),
                                t.stopPropagation(),
                                t.preventDefault();
                                return
                            }
                        } else
                            t.stopPropagation();
                        (t.metaKey || t.ctrlKey) && "=" === t.key && t.preventDefault(),
                        "Tab" === t.key && (t.preventDefault(),
                        t.shiftKey ? e9.unindent(t.currentTarget) : e9.indent(t.currentTarget),
                        null == d || d(M(z({}, e), {
                            text: ta.normalizeText(t.currentTarget.value)
                        })))
                    }
                    , [e, d])
                      , x = r.useCallback(e=>{
                        e.currentTarget.setSelectionRange(0, 0),
                        null == l || l()
                    }
                    , [])
                      , k = r.useCallback(e=>{
                        a && b.current && e.currentTarget.select()
                    }
                    , [a]);
                    r.useEffect(()=>{
                        if (a) {
                            b.current = !0;
                            let e = m.current;
                            e.focus(),
                            e.select()
                        }
                    }
                    , [a]),
                    r.useEffect(()=>{
                        let t = f.current
                          , {size: i} = e
                          , {offsetHeight: s} = t
                          , n = ic - 2 * ip;
                        if (s === i[1] - 2 * ip)
                            return;
                        if (s > n) {
                            null == d || d({
                                id: e.id,
                                size: [i[0], s + 2 * ip]
                            });
                            return
                        }
                        if (s < n && i[1] > ic) {
                            null == d || d({
                                id: e.id,
                                size: [i[0], ic]
                            });
                            return
                        }
                        let a = m.current;
                        null == a || a.focus()
                    }
                    , [e.text, e.size[1], e.style]);
                    let w = {
                        font: p,
                        color: c,
                        textShadow: t.isDarkMode ? "0.5px 0.5px 2px rgba(255, 255, 255,.25)" : "0.5px 0.5px 2px rgba(255, 255, 255,.5)"
                    };
                    return r.createElement(o.G7, z({
                        ref: h
                    }, i), r.createElement(iu, {
                        ref: g,
                        isDarkMode: t.isDarkMode,
                        isGhost: s,
                        style: z({
                            backgroundColor: u
                        }, w)
                    }, n && r.createElement("div", {
                        className: "tl-binding-indicator",
                        style: {
                            position: "absolute",
                            top: -this.bindingDistance,
                            left: -this.bindingDistance,
                            width: `calc(100% + ${2 * this.bindingDistance}px)`,
                            height: `calc(100% + ${2 * this.bindingDistance}px)`,
                            backgroundColor: "var(--tl-selectFill)"
                        }
                    }), r.createElement(im, {
                        ref: f,
                        isEditing: a,
                        alignment: e.style.textAlign
                    }, e.text, "​"), a && r.createElement(ib, {
                        ref: m,
                        onPointerDown: v,
                        value: e.text,
                        onChange: S,
                        onKeyDown: I,
                        onFocus: k,
                        onBlur: x,
                        tabIndex: -1,
                        autoComplete: "false",
                        autoCapitalize: "false",
                        autoCorrect: "false",
                        autoSave: "false",
                        autoFocus: !0,
                        spellCheck: !0,
                        alignment: e.style.textAlign,
                        onContextMenu: e7,
                        onCopy: e7,
                        onPaste: e7,
                        onCut: e7
                    })))
                }
                )),
                j(this, "Indicator", tu.Indicator(({shape: e})=>{
                    let {size: [t,i]} = e;
                    return r.createElement("rect", {
                        x: 0,
                        y: 0,
                        rx: 3,
                        ry: 3,
                        width: Math.max(1, t),
                        height: Math.max(1, i)
                    })
                }
                )),
                j(this, "getBounds", e=>eP(e, this.boundsCache)),
                j(this, "shouldRender", (e,t)=>t.size !== e.size || t.style !== e.style || t.text !== e.text),
                j(this, "transform", (e,t,{scaleX: i, scaleY: s, transformOrigin: n})=>({
                    point: u.B.toFixed([t.minX + (t.width - e.size[0]) * (i < 0 ? 1 - n[0] : n[0]), t.minY + (t.height - e.size[1]) * (s < 0 ? 1 - n[1] : n[1])])
                })),
                j(this, "transformSingle", e=>e),
                j(this, "getSvgElement", (e,t)=>{
                    var i, s;
                    let n = this.getBounds(e)
                      , a = e3(e.style, t)
                      , o = eV[e.style.size] * (null != (i = e.style.scale) ? i : 1)
                      , r = e0(e.style.font).slice(1, -1)
                      , l = null != (s = e.style.textAlign) ? s : "start"
                      , d = eO(e.text, o, r, l, n.width - 2 * ip, !0);
                    d.setAttribute("fill", a.color),
                    d.setAttribute("transform", `translate(${ip}, ${ip})`);
                    let h = document.createElementNS("http://www.w3.org/2000/svg", "g")
                      , p = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    return p.setAttribute("width", n.width + ""),
                    p.setAttribute("height", n.height + ""),
                    p.setAttribute("fill", a.fill),
                    p.setAttribute("rx", "3"),
                    p.setAttribute("ry", "3"),
                    h.appendChild(p),
                    h.appendChild(d),
                    h
                }
                )
            }
        }
        , ip = 16, ic = 200, iu = eh("div", {
            pointerEvents: "all",
            position: "relative",
            backgroundColor: "rgba(255, 220, 100)",
            fontFamily: "sans-serif",
            height: "100%",
            width: "100%",
            padding: "16px",
            borderRadius: "3px",
            perspective: "800px",
            variants: {
                isGhost: {
                    false: {
                        opacity: 1
                    },
                    true: {
                        transition: "opacity .2s",
                        opacity: .3
                    }
                },
                isDarkMode: {
                    true: {
                        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)"
                    },
                    false: {
                        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)"
                    }
                }
            }
        }), ig = {
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            letterSpacing: ef
        }, im = eh("div", z({
            position: "absolute",
            top: ip,
            left: ip,
            width: `calc(100% - ${2 * ip}px)`,
            height: "fit-content",
            font: "inherit",
            pointerEvents: "none",
            userSelect: "none",
            variants: {
                isEditing: {
                    true: {
                        opacity: 1
                    },
                    false: {
                        opacity: 1
                    }
                },
                alignment: {
                    start: {
                        textAlign: "left"
                    },
                    middle: {
                        textAlign: "center"
                    },
                    end: {
                        textAlign: "right"
                    },
                    justify: {
                        textAlign: "justify"
                    }
                }
            }
        }, ig)), ib = eh("textarea", M(z({
            width: "100%",
            height: "100%",
            border: "none",
            overflow: "hidden",
            background: "none",
            outline: "none",
            textAlign: "left",
            font: "inherit",
            padding: 0,
            color: "transparent",
            verticalAlign: "top",
            resize: "none",
            caretColor: "black"
        }, ig), {
            variants: {
                alignment: {
                    start: {
                        textAlign: "left"
                    },
                    middle: {
                        textAlign: "center"
                    },
                    end: {
                        textAlign: "right"
                    },
                    justify: {
                        textAlign: "justify"
                    }
                }
            },
            "&:focus": {
                outline: "none",
                border: "none"
            }
        })), iv = class extends tu {
            constructor() {
                super(...arguments),
                j(this, "type", "text"),
                j(this, "isAspectRatioLocked", !0),
                j(this, "canEdit", !0),
                j(this, "canBind", !0),
                j(this, "canClone", !0),
                j(this, "bindingDistance", 8),
                j(this, "getShape", e=>o.cQ.deepMerge({
                    id: "id",
                    type: "text",
                    name: "Text",
                    parentId: "page",
                    childIndex: 1,
                    point: [0, 0],
                    rotation: 0,
                    text: " ",
                    style: e8
                }, e)),
                j(this, "texts", new Map),
                j(this, "Component", tu.Component(({shape: e, isBinding: t, isGhost: i, isEditing: s, onShapeBlur: n, onShapeChange: a, meta: l, events: d},h)=>{
                    let {text: p, style: c} = e
                      , g = e4(c, l.isDarkMode)
                      , m = e2(e.style)
                      , f = r.useRef(null)
                      , b = r.useRef(!1)
                      , v = r.useRef(p);
                    r.useLayoutEffect(()=>{
                        if (p !== v.current) {
                            let t = [0, 0];
                            this.texts.set(e.id, p);
                            let i = this.getBounds(e)
                              , s = this.getBounds(e);
                            switch (e.style.textAlign) {
                            case "start":
                                break;
                            case "middle":
                                t = u.B.div([s.width - i.width, 0], 2);
                                break;
                            case "end":
                                t = [s.width - i.width, 0]
                            }
                            v.current = p,
                            null == a || a(M(z({}, e), {
                                id: e.id,
                                point: u.B.sub(e.point, t),
                                text: p
                            }))
                        }
                    }
                    , [p]);
                    let y = r.useCallback(t=>{
                        let i = [0, 0]
                          , s = ta.normalizeText(t.currentTarget.value)
                          , n = this.getBounds(e);
                        this.texts.set(e.id, s);
                        let o = this.getBounds(M(z({}, e), {
                            text: s
                        }));
                        switch (e.style.textAlign) {
                        case "start":
                            break;
                        case "middle":
                            i = u.B.div([o.width - n.width, 0], 2);
                            break;
                        case "end":
                            i = [o.width - n.width, 0]
                        }
                        v.current = s,
                        null == a || a(M(z({}, e), {
                            id: e.id,
                            point: u.B.sub(e.point, i),
                            text: s
                        }))
                    }
                    , [e.id, e.point])
                      , S = r.useCallback(t=>{
                        if ("Escape" === t.key) {
                            t.preventDefault(),
                            t.stopPropagation(),
                            null == n || n();
                            return
                        }
                        if ("Tab" === t.key && 0 === e.text.length) {
                            t.preventDefault();
                            return
                        }
                        if ("Enter" === t.key && (t.metaKey || t.ctrlKey)) {
                            t.preventDefault(),
                            t.stopPropagation(),
                            f.current.blur();
                            return
                        }
                        if ("Meta" === t.key || t.metaKey) {
                            if ("z" === t.key && t.metaKey) {
                                t.shiftKey ? document.execCommand("redo", !1) : document.execCommand("undo", !1),
                                t.stopPropagation(),
                                t.preventDefault();
                                return
                            }
                        } else
                            t.stopPropagation();
                        (t.metaKey || t.ctrlKey) && "=" === t.key && t.preventDefault(),
                        "Tab" === t.key && (t.preventDefault(),
                        t.shiftKey ? e9.unindent(t.currentTarget) : e9.indent(t.currentTarget),
                        null == a || a(M(z({}, e), {
                            text: ta.normalizeText(t.currentTarget.value)
                        })))
                    }
                    , [e, a])
                      , I = r.useCallback(e=>{
                        e.currentTarget.setSelectionRange(0, 0),
                        null == n || n()
                    }
                    , [])
                      , x = r.useCallback(e=>{
                        s && b.current && document.activeElement === e.currentTarget && e.currentTarget.select()
                    }
                    , [s])
                      , k = r.useCallback(e=>{
                        s && e.stopPropagation()
                    }
                    , [s]);
                    return r.useEffect(()=>{
                        s ? (this.texts.set(e.id, p),
                        requestAnimationFrame(()=>{
                            b.current = !0;
                            let e = f.current;
                            e && (e.focus(),
                            e.select())
                        }
                        )) : null == n || n()
                    }
                    , [s]),
                    r.createElement(o.G7, z({
                        ref: h
                    }, d), r.createElement(iy, {
                        isGhost: i,
                        isEditing: s,
                        onPointerDown: k
                    }, r.createElement(iI, {
                        style: {
                            font: m,
                            color: g.stroke,
                            textAlign: eE(c.textAlign)
                        },
                        "data-color": e.style.color
                    }, t && r.createElement("div", {
                        className: "tl-binding-indicator",
                        style: {
                            position: "absolute",
                            top: -this.bindingDistance,
                            left: -this.bindingDistance,
                            width: `calc(100% + ${2 * this.bindingDistance}px)`,
                            height: `calc(100% + ${2 * this.bindingDistance}px)`,
                            backgroundColor: "var(--tl-selectFill)"
                        }
                    }), s ? r.createElement(ix, {
                        ref: f,
                        style: {
                            font: m,
                            color: g.stroke
                        },
                        name: "text",
                        tabIndex: -1,
                        autoComplete: "false",
                        autoCapitalize: "false",
                        autoCorrect: "false",
                        autoSave: "false",
                        autoFocus: !0,
                        placeholder: "",
                        spellCheck: "true",
                        wrap: "off",
                        dir: "auto",
                        datatype: "wysiwyg",
                        defaultValue: p,
                        color: g.stroke,
                        onFocus: x,
                        onChange: y,
                        onKeyDown: S,
                        onBlur: I,
                        onPointerDown: k,
                        onContextMenu: e7,
                        onCopy: e7,
                        onPaste: e7,
                        onCut: e7
                    }) : p, "​")))
                }
                )),
                j(this, "Indicator", tu.Indicator(({shape: e})=>{
                    let {width: t, height: i} = this.getBounds(e);
                    return r.createElement("rect", {
                        x: 0,
                        y: 0,
                        width: t,
                        height: i
                    })
                }
                )),
                j(this, "getBounds", e=>{
                    let t = o.cQ.getFromCache(this.boundsCache, e, ()=>{
                        var t;
                        if (!io)
                            return {
                                minX: 0,
                                minY: 0,
                                maxX: 10,
                                maxY: 10,
                                width: 10,
                                height: 10
                            };
                        io.parentNode || document.body.appendChild(io),
                        io.style.font = e2(e.style),
                        io.textContent = null != (t = this.texts.get(e.id)) ? t : e.text;
                        let i = io.offsetWidth || 1
                          , s = io.offsetHeight || 1;
                        return {
                            minX: 0,
                            maxX: i,
                            minY: 0,
                            maxY: s,
                            width: i,
                            height: s
                        }
                    }
                    );
                    return o.cQ.translateBounds(t, e.point)
                }
                ),
                j(this, "shouldRender", (e,t)=>t.text !== e.text || t.style.scale !== e.style.scale || t.style !== e.style),
                j(this, "transform", (e,t,{initialShape: i, scaleX: s, scaleY: n})=>{
                    let {rotation: a=0, style: {scale: o=1}} = i;
                    return {
                        point: [t.minX, t.minY],
                        rotation: s < 0 && n >= 0 || n < 0 && s >= 0 ? -(a || 0) : a,
                        style: M(z({}, i.style), {
                            scale: o * Math.abs(Math.min(s, n))
                        })
                    }
                }
                ),
                j(this, "transformSingle", (e,t,{initialShape: i, scaleX: s, scaleY: n})=>{
                    let {style: {scale: a=1}} = i;
                    return {
                        point: u.B.toFixed([t.minX, t.minY]),
                        style: M(z({}, i.style), {
                            scale: a * Math.max(Math.abs(n), Math.abs(s))
                        })
                    }
                }
                ),
                j(this, "onDoubleClickBoundsHandle", e=>{
                    let t = this.getCenter(e)
                      , i = this.getCenter(M(z({}, e), {
                        style: M(z({}, e.style), {
                            scale: 1
                        })
                    }));
                    return {
                        style: M(z({}, e.style), {
                            scale: 1
                        }),
                        point: u.B.toFixed(u.B.add(e.point, u.B.sub(t, i)))
                    }
                }
                ),
                j(this, "getSvgElement", (e,t)=>{
                    var i, s;
                    let n = this.getBounds(e)
                      , a = e4(e.style, t)
                      , o = eJ(e.style.size, e.style.font) * (null != (i = e.style.scale) ? i : 1)
                      , r = e0(e.style.font).slice(1, -1)
                      , l = null != (s = e.style.textAlign) ? s : "start"
                      , d = eO(e.text, o, r, l, n.width, !1);
                    return d.setAttribute("fill", a.stroke),
                    d.setAttribute("data-color", e.style.color),
                    d
                }
                )
            }
        }
        ;
        "undefined" != typeof window && (null == (a = document.getElementById("__textMeasure")) || a.remove(),
        (n = document.createElement("pre")).id = "__textMeasure",
        Object.assign(n.style, {
            whiteSpace: "pre",
            width: "auto",
            border: "1px solid transparent",
            padding: "4px",
            margin: "0px",
            letterSpacing: ef,
            opacity: "0",
            position: "absolute",
            top: "-500px",
            left: "0px",
            zIndex: "9999",
            pointerEvents: "none",
            userSelect: "none",
            alignmentBaseline: "mathematical",
            dominantBaseline: "mathematical"
        }),
        n.tabIndex = -1,
        document.body.appendChild(n),
        io = n);
        var iy = eh("div", {
            width: "100%",
            height: "100%",
            variants: {
                isGhost: {
                    false: {
                        opacity: 1
                    },
                    true: {
                        transition: "opacity .2s",
                        opacity: .3
                    }
                },
                isEditing: {
                    false: {
                        pointerEvents: "all",
                        userSelect: "all"
                    },
                    true: {
                        pointerEvents: "none",
                        userSelect: "none"
                    }
                }
            }
        })
          , iS = {
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word"
        }
          , iI = eh("div", z({
            position: "absolute",
            width: "100%",
            height: "100%",
            padding: "4px",
            zIndex: 1,
            minHeight: 1,
            minWidth: 1,
            lineHeight: 1,
            letterSpacing: ef,
            outline: 0,
            fontWeight: "500",
            backfaceVisibility: "hidden",
            userSelect: "none",
            pointerEvents: "none",
            WebkitUserSelect: "none",
            WebkitTouchCallout: "none",
            isEditing: {
                false: {},
                true: {
                    pointerEvents: "all",
                    background: "$boundsBg",
                    userSelect: "text",
                    WebkitUserSelect: "text"
                }
            }
        }, iS))
          , ix = eh("textarea", M(z({
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
            border: "none",
            padding: "4px",
            resize: "none",
            textAlign: "inherit",
            minHeight: "inherit",
            minWidth: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit",
            outline: 0,
            fontWeight: "inherit",
            overflow: "hidden",
            backfaceVisibility: "hidden",
            display: "inline-block",
            pointerEvents: "all",
            background: "$boundsBg",
            userSelect: "text",
            WebkitUserSelect: "text"
        }, iS), {
            "&:focus": {
                outline: "none",
                border: "none"
            }
        }))
          , ik = r.memo(function({id: e, size: t, style: i, isSelected: s, isDarkMode: n}) {
            let {stroke: a, strokeWidth: l, fill: d} = e4(i, n)
              , h = 1 + 1.618 * l
              , p = tt(t)
              , c = o.cQ.pointsToLineSegments(p, !0).map(([t,s],n)=>{
                let {strokeDasharray: d, strokeDashoffset: p} = o.cQ.getPerfectDashProps(u.Z.dist(t, s), 1.618 * l, i.dash);
                return r.createElement("line", {
                    key: e + "_" + n,
                    x1: t[0],
                    y1: t[1],
                    x2: s[0],
                    y2: s[1],
                    stroke: a,
                    strokeWidth: h,
                    strokeLinecap: "round",
                    strokeDasharray: d,
                    strokeDashoffset: p
                })
            }
            )
              , g = p.join();
            return r.createElement(r.Fragment, null, r.createElement("polygon", {
                className: i.isFilled || s ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                points: g
            }), i.isFilled && r.createElement("polygon", {
                fill: d,
                points: g,
                pointerEvents: "none"
            }), r.createElement("g", {
                pointerEvents: "stroke"
            }, c))
        })
          , iw = r.memo(function({id: e, size: t, style: i, isSelected: s, isDarkMode: n}) {
            let {stroke: a, strokeWidth: l, fill: d} = e4(i, n)
              , h = function(e, t, i) {
                let {points: s, options: n} = ts(e, t, i)
                  , a = (0,
                m.ZP)(s, n);
                return o.cQ.getSvgPathFromStroke(a)
            }(e, t, i)
              , p = function(e, t, i) {
                let {points: s, options: n} = ts(e, t, i);
                return o.cQ.getSvgPathFromStrokePoints((0,
                m.tt)(s, n))
            }(e, t, i);
            return r.createElement(r.Fragment, null, r.createElement("path", {
                className: i.isFilled || s ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                d: p
            }), i.isFilled && r.createElement("path", {
                d: p,
                fill: d,
                pointerEvents: "none"
            }), r.createElement("path", {
                d: h,
                fill: a,
                stroke: a,
                strokeWidth: l,
                pointerEvents: "none"
            }))
        });
        function iB({size: e}) {
            let t = tt(e).join();
            return r.createElement("polygon", {
                className: "tl-binding-indicator",
                points: t,
                strokeWidth: 32
            })
        }
        var iP = class extends tu {
            constructor() {
                super(...arguments),
                j(this, "type", "triangle"),
                j(this, "canBind", !0),
                j(this, "canClone", !0),
                j(this, "canEdit", !0),
                j(this, "getShape", e=>o.cQ.deepMerge({
                    id: "id",
                    type: "triangle",
                    name: "Triangle",
                    parentId: "page",
                    childIndex: 1,
                    point: [0, 0],
                    size: [1, 1],
                    rotation: 0,
                    style: e6,
                    label: "",
                    labelPoint: [.5, .5]
                }, e)),
                j(this, "Component", tu.Component(({shape: e, bounds: t, isBinding: i, isEditing: s, isSelected: n, isGhost: a, meta: l, events: d, onShapeChange: h, onShapeBlur: p},c)=>{
                    let {id: u, label: g="", size: m, style: f, labelPoint: b=eb} = e
                      , v = e2(f)
                      , y = e4(f, l.isDarkMode)
                      , S = "draw" === f.dash ? iw : ik
                      , I = r.useCallback(e=>null == h ? void 0 : h({
                        id: u,
                        label: e
                    }), [h])
                      , x = r.useMemo(()=>this.getLabelOffsetY(e), [m]);
                    return r.createElement(iC, z({
                        ref: c
                    }, d), r.createElement(to, {
                        font: v,
                        text: g,
                        color: y.stroke,
                        offsetX: (b[0] - .5) * t.width,
                        offsetY: x + (b[1] - .5) * t.height,
                        isEditing: s,
                        onChange: I,
                        onBlur: p,
                        shape: e
                    }), r.createElement(o.gk, {
                        id: e.id + "_svg",
                        opacity: a ? .3 : 1,
                        shapeStyle: f
                    }, i && r.createElement(iB, {
                        size: m
                    }), r.createElement(S, {
                        id: u,
                        style: f,
                        size: m,
                        isSelected: n,
                        isDarkMode: l.isDarkMode
                    })))
                }
                )),
                j(this, "Indicator", tu.Indicator(({shape: e})=>{
                    let {size: t} = e;
                    return r.createElement("polygon", {
                        points: tt(t).join()
                    })
                }
                )),
                j(this, "shouldRender", (e,t)=>t.size !== e.size || t.style !== e.style || t.label !== e.label),
                j(this, "getBounds", e=>eP(e, this.boundsCache)),
                j(this, "getExpandedBounds", e=>o.cQ.getBoundsFromPoints(tt(e.size, this.bindingDistance).map(t=>u.Z.add(t, e.point)))),
                j(this, "hitTestLineSegment", (e,t,i)=>(0,
                g.Gc)(t, i, this.getPoints(e)).didIntersect),
                j(this, "hitTestBounds", (e,t)=>o.cQ.boundsContained(this.getBounds(e), t) || (0,
                g.ou)(t, this.getPoints(e)).length > 0),
                j(this, "getBindingPoint", (e,t,i,s,n,a)=>{
                    let r = this.getExpandedBounds(e);
                    if (!o.cQ.pointInBounds(i, r))
                        return;
                    let l = tt(e.size).map(t=>u.Z.add(t, e.point))
                      , d = tt(e.size, this.bindingDistance).map(t=>u.Z.add(t, e.point))
                      , h = o.cQ.pointsToLineSegments(l, !0).map(([e,t])=>u.Z.distanceToLineSegment(e, t, i)).sort((e,t)=>e - t)[0];
                    if (!(o.cQ.pointInPolygon(i, d) || h < this.bindingDistance))
                        return;
                    let p = o.cQ.pointsToLineSegments(d.concat([d[0]])).map(e=>(0,
                    g.oA)(s, n, e[0], e[1])).filter(e=>e.didIntersect).flatMap(e=>e.points);
                    if (!p.length)
                        return;
                    let c = u.Z.add(ti(e.size), e.point), m = p.sort((e,t)=>u.Z.dist(t, s) - u.Z.dist(e, s))[0], f = u.Z.med(i, m), b, v;
                    a ? (b = 8 > u.Z.dist(i, c) ? c : i,
                    v = 0) : (b = 8 > u.Z.distanceToLineSegment(i, f, c) ? c : f,
                    v = o.cQ.pointInPolygon(i, l) ? this.bindingDistance : Math.max(this.bindingDistance, h));
                    let y = u.Z.divV(u.Z.sub(b, [r.minX, r.minY]), [r.width, r.height]);
                    return {
                        point: u.Z.clampV(y, 0, 1),
                        distance: v
                    }
                }
                ),
                j(this, "transform", tp),
                j(this, "transformSingle", tc),
                j(this, "getSvgElement", e=>{
                    var t, i;
                    let s = null == (t = document.getElementById(e.id + "_svg")) ? void 0 : t.cloneNode(!0);
                    if (s) {
                        if ("label"in e && void 0 !== e.label) {
                            let t = document.createElementNS("http://www.w3.org/2000/svg", "g")
                              , n = this.getBounds(e)
                              , a = e2(e.style)
                              , o = void 0 !== e.style.scale ? e.style.scale : 1
                              , r = eJ(e.style.size, e.style.font) * (null != (i = e.style.scale) ? i : 1)
                              , l = e0(e.style.font).slice(1, -1)
                              , d = eA(e.label, a)
                              , h = eO(e.label, r, l, "middle", d[0], !1);
                            return h.setAttribute("fill", e4(e.style).stroke),
                            h.setAttribute("transform-origin", "top left"),
                            h.setAttribute("transform", `translate(${(n.width - d[0] * o) / 2}, ${(n.height - d[1] * o) / 2 + this.getLabelOffsetY(e)})`),
                            t.appendChild(s),
                            t.appendChild(h),
                            t
                        }
                        return s
                    }
                }
                ),
                j(this, "getLabelOffsetY", e=>{
                    let t = u.Z.div(e.size, 2);
                    return (ti(e.size)[1] - t[1]) * .72
                }
                )
            }
            getPoints(e) {
                let {rotation: t=0, point: [i,s], size: [n,a]} = e;
                return [[i + n / 2, s], [i, s + a], [i + n, s + a]].map(i=>u.Z.rotWith(i, this.getCenter(e), t))
            }
        }
          , iC = eh("div", {
            width: "100%",
            height: "100%"
        })
          , iE = class extends tu {
            constructor() {
                super(...arguments),
                j(this, "type", "video"),
                j(this, "canBind", !0),
                j(this, "canEdit", !0),
                j(this, "canClone", !0),
                j(this, "isAspectRatioLocked", !0),
                j(this, "showCloneHandles", !1),
                j(this, "isStateful", !0),
                j(this, "getShape", e=>o.cQ.deepMerge({
                    id: "video",
                    type: "video",
                    name: "Video",
                    parentId: "page",
                    childIndex: 1,
                    point: [0, 0],
                    size: [1, 1],
                    rotation: 0,
                    style: e6,
                    assetId: "assetId",
                    isPlaying: !0,
                    currentTime: 0
                }, e)),
                j(this, "Component", tu.Component(({shape: e, asset: t={
                    src: ""
                }, isBinding: i, isEditing: s, isGhost: n, meta: a, events: l, onShapeChange: d},h)=>{
                    let p = r.useRef(null)
                      , c = r.useRef(null)
                      , {currentTime: u=0, size: g, isPlaying: m, style: f} = e;
                    r.useLayoutEffect(()=>{
                        let e = c.current;
                        if (!e)
                            return;
                        let[t,i] = g;
                        e.style.width = `${t}px`,
                        e.style.height = `${i}px`
                    }
                    , [g]),
                    r.useLayoutEffect(()=>{
                        let e = p.current;
                        e && (m ? e.play() : e.pause())
                    }
                    , [m]),
                    r.useLayoutEffect(()=>{
                        let e = p.current;
                        e && (u === e.currentTime || (e.currentTime = u))
                    }
                    , [u]);
                    let b = r.useCallback(()=>{
                        null == d || d({
                            id: e.id,
                            isPlaying: !0
                        })
                    }
                    , [])
                      , v = r.useCallback(()=>{
                        null == d || d({
                            id: e.id,
                            isPlaying: !1
                        })
                    }
                    , [])
                      , y = r.useCallback(()=>{
                        let t = p.current;
                        t && s && null != d && d({
                            id: e.id,
                            currentTime: t.currentTime
                        })
                    }
                    , [s]);
                    return r.createElement(o.G7, z({
                        ref: h
                    }, l), i && r.createElement("div", {
                        className: "tl-binding-indicator",
                        style: {
                            position: "absolute",
                            top: -this.bindingDistance,
                            left: -this.bindingDistance,
                            width: `calc(100% + ${2 * this.bindingDistance}px)`,
                            height: `calc(100% + ${2 * this.bindingDistance}px)`,
                            backgroundColor: "var(--tl-selectFill)"
                        }
                    }), r.createElement(iz, {
                        ref: c,
                        isDarkMode: a.isDarkMode,
                        isGhost: n,
                        isFilled: f.isFilled
                    }, r.createElement(iM, {
                        ref: p,
                        id: e.id + "_video",
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        disableRemotePlayback: !0,
                        disablePictureInPicture: !0,
                        controls: s,
                        autoPlay: m,
                        onPlay: b,
                        onPause: v,
                        onTimeUpdate: y
                    }, r.createElement("source", {
                        src: t.src
                    }))))
                }
                )),
                j(this, "Indicator", tu.Indicator(({shape: e})=>{
                    let {size: [t,i]} = e;
                    return r.createElement("rect", {
                        x: 0,
                        y: 0,
                        rx: 2,
                        ry: 2,
                        width: Math.max(1, t),
                        height: Math.max(1, i)
                    })
                }
                )),
                j(this, "getBounds", e=>eP(e, this.boundsCache)),
                j(this, "shouldRender", (e,t)=>t.size !== e.size || t.style !== e.style || t.isPlaying !== e.isPlaying),
                j(this, "getSvgElement", e=>{
                    let t = this.getBounds(e)
                      , i = document.createElementNS("http://www.w3.org/2000/svg", "image");
                    return i.setAttribute("width", `${t.width}`),
                    i.setAttribute("height", `${t.height}`),
                    i.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
                    i
                }
                ),
                j(this, "transform", tp),
                j(this, "transformSingle", tc)
            }
        }
          , iz = (0,
        c.zo)("div", {
            pointerEvents: "all",
            position: "relative",
            fontFamily: "sans-serif",
            fontSize: "2em",
            height: "100%",
            width: "100%",
            borderRadius: "3px",
            perspective: "800px",
            overflow: "hidden",
            p: {
                userSelect: "none"
            },
            img: {
                userSelect: "none"
            },
            variants: {
                isGhost: {
                    false: {
                        opacity: 1
                    },
                    true: {
                        transition: "opacity .2s",
                        opacity: .3
                    }
                },
                isFilled: {
                    true: {},
                    false: {}
                },
                isDarkMode: {
                    true: {},
                    false: {}
                }
            },
            compoundVariants: [{
                isFilled: !0,
                isDarkMode: !0,
                css: {
                    boxShadow: "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)"
                }
            }, {
                isFilled: !0,
                isDarkMode: !1,
                css: {
                    boxShadow: "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)"
                }
            }]
        })
          , iM = (0,
        c.zo)("video", {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            minWidth: "100%",
            pointerEvents: "none",
            objectFit: "cover",
            userSelect: "none",
            borderRadius: 2
        })
          , iD = new il
          , ij = new iP
          , iA = new tL
          , iT = new tj
          , iO = new tB
          , iF = new iv
          , iL = new tH
          , iR = new ih
          , iH = {
            rectangle: iD,
            triangle: ij,
            ellipse: iA,
            draw: iT,
            arrow: iO,
            text: iF,
            group: iL,
            sticky: iR,
            image: new tU,
            video: new iE
        }
          , iQ = e=>"string" == typeof e ? iH[e] : iH[e.type]
          , iU = "tldraw_clipboard"
          , iZ = class {
            constructor(e, t, i, s) {
                j(this, "_idbId"),
                j(this, "initialState"),
                j(this, "store"),
                j(this, "pointer", -1),
                j(this, "_state"),
                j(this, "_status", "loading"),
                j(this, "stack", []),
                j(this, "_snapshot"),
                j(this, "useStore"),
                j(this, "ready"),
                j(this, "isPaused", !1),
                j(this, "persist", (e,t)=>{
                    if ("ready" === this._status && (this.onPersist && this.onPersist(this._state, e, t),
                    this._idbId))
                        return f.t8(this._idbId, this._state).catch(e=>console.error(e))
                }
                ),
                j(this, "applyPatch", (e,t)=>{
                    let i = this._state
                      , s = o.cQ.deepMerge(this._state, e)
                      , n = this.cleanup(s, i, e, t);
                    return this.onStateWillChange && this.onStateWillChange(n, t),
                    this._state = n,
                    this.store.setState(this._state, !0),
                    this.onStateDidChange && this.onStateDidChange(this._state, t),
                    this
                }
                ),
                j(this, "migrate", e=>e),
                j(this, "cleanup", (e,t,i,s)=>e),
                j(this, "onStateWillChange"),
                j(this, "onStateDidChange"),
                j(this, "patchState", (e,t)=>(this.applyPatch(e, t),
                this.onPatch && this.onPatch(this._state, e, t),
                this)),
                j(this, "replaceState", (e,t)=>{
                    let i = this.cleanup(e, this._state, e, t);
                    return this.onStateWillChange && this.onStateWillChange(i, "replace"),
                    this._state = i,
                    this.store.setState(this._state, !0),
                    this.onStateDidChange && this.onStateDidChange(this._state, "replace"),
                    this
                }
                ),
                j(this, "setState", (e,t=e.id)=>(this.pointer < this.stack.length - 1 && (this.stack = this.stack.slice(0, this.pointer + 1)),
                this.stack.push(M(z({}, e), {
                    id: t
                })),
                this.pointer = this.stack.length - 1,
                this.applyPatch(e.after, t),
                this.onCommand && this.onCommand(this._state, e, t),
                this.persist(e.after, t),
                this)),
                j(this, "onReady"),
                j(this, "onPatch"),
                j(this, "onCommand"),
                j(this, "onPersist"),
                j(this, "onReplace"),
                j(this, "onReset"),
                j(this, "onResetHistory"),
                j(this, "onUndo"),
                j(this, "onRedo"),
                j(this, "reset", ()=>(this.onStateWillChange && this.onStateWillChange(this.initialState, "reset"),
                this._state = this.initialState,
                this.store.setState(this._state, !0),
                this.resetHistory(),
                this.persist({}, "reset"),
                this.onStateDidChange && this.onStateDidChange(this._state, "reset"),
                this.onReset && this.onReset(this._state),
                this)),
                j(this, "replaceHistory", (e,t=e.length - 1)=>(this.stack = e,
                this.pointer = t,
                this.onReplace && this.onReplace(this._state),
                this)),
                j(this, "resetHistory", ()=>(this.stack = [],
                this.pointer = -1,
                this.onResetHistory && this.onResetHistory(this._state),
                this)),
                j(this, "undo", ()=>{
                    if (!this.isPaused) {
                        if (!this.canUndo)
                            return this;
                        let e = this.stack[this.pointer];
                        this.pointer--,
                        this.applyPatch(e.before, "undo"),
                        this.persist(e.before, "undo")
                    }
                    return this.onUndo && this.onUndo(this._state),
                    this
                }
                ),
                j(this, "redo", ()=>{
                    if (!this.isPaused) {
                        if (!this.canRedo)
                            return this;
                        this.pointer++;
                        let e = this.stack[this.pointer];
                        this.applyPatch(e.after, "redo"),
                        this.persist(e.after, "undo")
                    }
                    return this.onRedo && this.onRedo(this._state),
                    this
                }
                ),
                j(this, "setSnapshot", ()=>(this._snapshot = z({}, this._state),
                this)),
                j(this, "forceUpdate", ()=>{
                    this.store.setState(this._state, !0)
                }
                ),
                this._idbId = t,
                this._state = te(e),
                this._snapshot = te(e),
                this.initialState = te(e),
                this.store = (0,
                v.Z)(()=>this._state),
                this.useStore = (0,
                b.ZP)(this.store),
                this.ready = new Promise(n=>{
                    let a = "none";
                    this._idbId ? (a = "restored",
                    f.U2(this._idbId).then(o=>A(this, null, function*() {
                        if (o) {
                            let n = o;
                            if (i) {
                                let r = yield f.U2(t + "_version");
                                r && r < i && (n = s ? s(o, e, r) : e,
                                a = "migrated")
                            }
                            yield f.t8(t + "_version", i || -1);
                            let r = this._state.appState.isEmptyCanvas;
                            n = this.migrate(n),
                            this._state = te(n),
                            this._snapshot = te(n),
                            this._state.appState.isEmptyCanvas = r,
                            this.store.setState(this._state, !0)
                        } else
                            yield f.t8(t + "_version", i || -1);
                        this._status = "ready",
                        n(a)
                    })).catch(e=>console.error(e))) : (this._status = "ready",
                    n(a))
                }
                ).then(e=>(this.onReady && this.onReady(e),
                e))
            }
            pause() {
                this.isPaused = !0
            }
            resume() {
                this.isPaused = !1
            }
            get canUndo() {
                return this.pointer > -1
            }
            get canRedo() {
                return this.pointer < this.stack.length - 1
            }
            get state() {
                return this._state
            }
            get status() {
                return this._status
            }
            get snapshot() {
                return this._snapshot
            }
        }
        ;
        function iK(e, t, i=[]) {
            let {currentPageId: s} = e
              , n = {}
              , a = {};
            t.forEach(e=>{
                n[e.id] = void 0,
                a[e.id] = e
            }
            );
            let o = {}
              , r = {};
            return i.forEach(e=>{
                o[e.id] = void 0,
                r[e.id] = e
            }
            ),
            {
                id: "create",
                before: {
                    document: {
                        pages: {
                            [s]: {
                                shapes: n,
                                bindings: o
                            }
                        },
                        pageStates: {
                            [s]: {
                                selectedIds: [...e.selectedIds]
                            }
                        }
                    }
                },
                after: {
                    document: {
                        pages: {
                            [s]: {
                                shapes: a,
                                bindings: r
                            }
                        },
                        pageStates: {
                            [s]: {
                                selectedIds: t.map(e=>e.id)
                            }
                        }
                    }
                }
            }
        }
        var i_ = (e,t)=>{
            let i = z({}, e);
            return t.forEach(e=>i[e] = void 0),
            i
        }
        ;
        function iN(e, t, i=e.currentPageId) {
            var s;
            let n, a, o, r, l, d;
            let {pageState: h, selectedIds: p, document: {assets: c}} = e
              , {before: u, after: g, assetsToRemove: m} = (s = e.state,
            n = {
                shapes: {},
                bindings: {}
            },
            a = {
                shapes: {},
                bindings: {}
            },
            o = [],
            r = new Set,
            l = new Set,
            t.filter(e=>!ta.getShape(s, e, i).isLocked).forEach(e=>{
                r.add(e);
                let t = ta.getShape(s, e, i);
                n.shapes[e] = t,
                a.shapes[e] = void 0,
                void 0 !== t.children && t.children.forEach(e=>{
                    r.add(e);
                    let t = ta.getShape(s, e, i);
                    n.shapes[e] = t,
                    a.shapes[e] = void 0
                }
                ),
                t.parentId !== i && o.push(ta.getShape(s, t.parentId, i)),
                t.assetId && l.add(t.assetId)
            }
            ),
            o.forEach(e=>{
                var o;
                t.includes(e.id) || (r.add(e.id),
                n.shapes[e.id] = {
                    children: e.children
                },
                a.shapes[e.id] = {
                    children: e.children.filter(e=>!t.includes(e))
                },
                (null == (o = a.shapes[e.id]) ? void 0 : o.children.length) === 0 && (a.shapes[e.id] = void 0,
                n.shapes[e.id] = ta.getShape(s, e.id, i)))
            }
            ),
            Object.values((d = ta.getPage(s, i)).bindings).filter(e=>r.has(e.fromId) || r.has(e.toId)).forEach(e=>{
                for (let t of [e.toId, e.fromId])
                    if (void 0 === a.shapes[t]) {
                        n.bindings[e.id] = e,
                        a.bindings[e.id] = void 0;
                        let i = d.shapes[t];
                        i && i.handles && Object.values(i.handles).filter(t=>t.bindingId === e.id).forEach(i=>{
                            var s, o, l, d, h, p;
                            n.shapes[t] = M(z({}, n.shapes[t]), {
                                handles: M(z({}, null == (s = n.shapes[t]) ? void 0 : s.handles), {
                                    [i.id]: M(z({}, null == (l = null == (o = n.shapes[t]) ? void 0 : o.handles) ? void 0 : l[i.id]), {
                                        bindingId: e.id
                                    })
                                })
                            }),
                            r.has(t) || (a.shapes[t] = M(z({}, a.shapes[t]), {
                                handles: M(z({}, null == (d = a.shapes[t]) ? void 0 : d.handles), {
                                    [i.id]: M(z({}, null == (p = null == (h = a.shapes[t]) ? void 0 : h.handles) ? void 0 : p[i.id]), {
                                        bindingId: void 0
                                    })
                                })
                            }))
                        }
                        )
                    }
            }
            ),
            Object.values(s.document.pages).flatMap(e=>Object.values(e.shapes)).forEach(e=>{
                "assetId"in e && e.assetId && !r.has(e.id) && l.delete(e.assetId)
            }
            ),
            {
                before: n,
                after: a,
                assetsToRemove: Array.from(l)
            })
              , f = i_(c, m);
            return {
                id: "delete",
                before: {
                    document: {
                        assets: c,
                        pages: {
                            [i]: u
                        },
                        pageStates: {
                            [i]: {
                                selectedIds: [...e.selectedIds]
                            }
                        }
                    }
                },
                after: {
                    document: {
                        assets: f,
                        pages: {
                            [i]: g
                        },
                        pageStates: {
                            [i]: {
                                selectedIds: p.filter(e=>!t.includes(e)),
                                hoveredId: h.hoveredId && t.includes(h.hoveredId) ? void 0 : h.hoveredId
                            }
                        }
                    }
                }
            }
        }
        function iW(e, t, i) {
            let {selectedIds: s, currentPageId: n, page: {shapes: a}} = e
              , r = t.map(e=>ta.getBounds(a[e]))
              , l = 1 === t.length && "group" === a[t[0]].type
              , d = o.cQ.getCommonBounds(r)
              , {before: h, after: p} = ta.mutateShapes(e.state, t, e=>{
                let t = ta.getBounds(e)
                  , s = e.parentId !== n;
                switch (i) {
                case "horizontal":
                    {
                        if (s && !l) {
                            let i = ta.getBounds(a[e.parentId])
                              , s = o.cQ.getRelativeTransformedBoundingBox(d, d, i, !0, !1).minX - i.minX;
                            return ta.getShapeUtil(e).transform(e, M(z({}, t), {
                                minX: t.minX + s,
                                maxX: t.maxX + s
                            }), {
                                type: o.P0.TopLeft,
                                scaleX: 1,
                                scaleY: 1,
                                initialShape: e,
                                transformOrigin: [.5, .5]
                            })
                        }
                        let i = o.cQ.getRelativeTransformedBoundingBox(d, d, t, !0, !1);
                        return ta.getShapeUtil(e).transform(e, i, {
                            type: o.P0.TopLeft,
                            scaleX: -1,
                            scaleY: 1,
                            initialShape: e,
                            transformOrigin: [.5, .5]
                        })
                    }
                case "vertical":
                    {
                        if (s && !l) {
                            let i = ta.getBounds(a[e.parentId])
                              , s = o.cQ.getRelativeTransformedBoundingBox(d, d, i, !1, !0).minY - i.minY;
                            return ta.getShapeUtil(e).transform(e, M(z({}, t), {
                                minY: t.minY + s,
                                maxY: t.maxY + s
                            }), {
                                type: o.P0.TopLeft,
                                scaleX: 1,
                                scaleY: 1,
                                initialShape: e,
                                transformOrigin: [.5, .5]
                            })
                        }
                        let i = o.cQ.getRelativeTransformedBoundingBox(d, d, t, !1, !0);
                        return ta.getShapeUtil(e).transform(e, i, {
                            type: o.P0.TopLeft,
                            scaleX: 1,
                            scaleY: -1,
                            initialShape: e,
                            transformOrigin: [.5, .5]
                        })
                    }
                }
            }
            , n, !0);
            return {
                id: "flip",
                before: {
                    document: {
                        pages: {
                            [n]: {
                                shapes: h
                            }
                        },
                        pageStates: {
                            [n]: {
                                selectedIds: s
                            }
                        }
                    }
                },
                after: {
                    document: {
                        pages: {
                            [n]: {
                                shapes: p
                            }
                        },
                        pageStates: {
                            [n]: {
                                selectedIds: t
                            }
                        }
                    }
                }
            }
        }
        function iG(e, t, i) {
            let {currentPageId: s, page: n} = e, a = new Set(t.map(t=>e.getShape(t).parentId)), o = {
                before: {},
                after: {}
            }, r, l, d;
            return Array.from(a.values()).forEach(a=>{
                let h = [];
                if (a === n.id)
                    h = Object.values(n.shapes).sort((e,t)=>e.childIndex - t.childIndex);
                else {
                    let t = e.getShape(a);
                    if (!t.children)
                        throw Error("No children in parent!");
                    h = t.children.map(t=>e.getShape(t)).sort((e,t)=>e.childIndex - t.childIndex)
                }
                let p = h.map(e=>e.id)
                  , c = t.filter(e=>p.includes(e)).map(e=>p.indexOf(e)).sort((e,t)=>e - t);
                if (c.length !== p.length)
                    switch (i) {
                    case "toBack":
                        for (let e = 0; e < p.length; e++)
                            if (!c.includes(e)) {
                                r = e;
                                break
                            }
                        d = (l = h[r].childIndex) / (c.length + 1),
                        o = ta.mutateShapes(e.state, c.map(e=>h[e].id).reverse(), (e,t)=>({
                            childIndex: l - (t + 1) * d
                        }), s);
                        break;
                    case "toFront":
                        for (let e = p.length - 1; e >= 0; e--)
                            if (!c.includes(e)) {
                                r = e;
                                break
                            }
                        l = h[r].childIndex,
                        d = 1,
                        o = ta.mutateShapes(e.state, c.map(e=>h[e].id), (e,t)=>({
                            childIndex: l + (t + 1)
                        }), s);
                        break;
                    case "backward":
                        {
                            let t = {};
                            for (let e = p.length - 1; e >= 0; e--)
                                if (c.includes(e)) {
                                    for (let i = e; i >= 0; i--)
                                        if (!c.includes(i)) {
                                            let s = h[i].childIndex, n, a;
                                            0 === i ? (n = s / 2,
                                            a = s / 2 / (e - i + 1)) : (a = (s - (n = h[i - 1].childIndex)) / (e - i + 1),
                                            n += a);
                                            for (let s = 0; s < e - i; s++)
                                                t[h[i + s + 1].id] = n + a * s;
                                            break
                                        }
                                }
                            Object.values(t).length > 0 && (o = ta.mutateShapes(e.state, c.map(e=>h[e].id), e=>({
                                childIndex: t[e.id]
                            }), s));
                            break
                        }
                    case "forward":
                        {
                            let t = {};
                            for (let e = 0; e < p.length; e++)
                                if (c.includes(e)) {
                                    for (let i = e; i < p.length; i++)
                                        if (!c.includes(i)) {
                                            l = h[i].childIndex;
                                            let s = i === p.length - 1 ? 1 : (h[i + 1].childIndex - l) / (i - e + 1);
                                            for (let n = 0; n < i - e; n++)
                                                t[h[e + n].id] = l + s * (n + 1);
                                            break
                                        }
                                }
                            Object.values(t).length > 0 && (o = ta.mutateShapes(e.state, c.map(e=>h[e].id), e=>({
                                childIndex: t[e.id]
                            }), s))
                        }
                    }
            }
            ),
            {
                id: "move",
                before: {
                    document: {
                        pages: {
                            [s]: {
                                shapes: o.before
                            }
                        },
                        pageStates: {
                            [s]: {
                                selectedIds: t
                            }
                        }
                    }
                },
                after: {
                    document: {
                        pages: {
                            [s]: {
                                shapes: o.after
                            }
                        },
                        pageStates: {
                            [s]: {
                                selectedIds: t
                            }
                        }
                    }
                }
            }
        }
        function iY(e, t, i) {
            let {currentPageId: s} = e
              , {before: n, after: a} = ta.mutateShapes(e.state, t, t=>{
                var i, s;
                return null == (s = (i = e.getShapeUtil(t)).onDoubleClickBoundsHandle) ? void 0 : s.call(i, t)
            }
            , i);
            return {
                id: "reset_bounds",
                before: {
                    document: {
                        pages: {
                            [s]: {
                                shapes: n
                            }
                        },
                        pageStates: {
                            [s]: {
                                selectedIds: t
                            }
                        }
                    }
                },
                after: {
                    document: {
                        pages: {
                            [s]: {
                                shapes: a
                            }
                        },
                        pageStates: {
                            [s]: {
                                selectedIds: t
                            }
                        }
                    }
                }
            }
        }
        var i$ = 2 * Math.PI;
        function iX(e, t, i) {
            let {currentPageId: s} = e
              , n = t.map(t=>e.getShape(t)).filter(e=>"isLocked" === i || !e.isLocked)
              , a = n.every(e=>e[i])
              , o = {}
              , r = {};
            return n.forEach(e=>{
                o[e.id] = {
                    [i]: e[i]
                },
                r[e.id] = {
                    [i]: !a
                }
            }
            ),
            {
                id: "toggle",
                before: {
                    document: {
                        pages: {
                            [s]: {
                                shapes: o
                            }
                        },
                        pageStates: {
                            [s]: {
                                selectedIds: t
                            }
                        }
                    }
                },
                after: {
                    document: {
                        pages: {
                            [s]: {
                                shapes: r
                            }
                        },
                        pageStates: {
                            [s]: {
                                selectedIds: t
                            }
                        }
                    }
                }
            }
        }
        function iV(e, t, i) {
            let s = t.map(e=>e.id)
              , n = ta.mutateShapes(e.state, s.filter(t=>!e.getShape(t, i).isLocked), (e,i)=>t[i], i);
            return {
                id: "update",
                before: {
                    document: {
                        pages: {
                            [i]: {
                                shapes: n.before
                            }
                        }
                    }
                },
                after: {
                    document: {
                        pages: {
                            [i]: {
                                shapes: n.after
                            }
                        }
                    }
                }
            }
        }
        var iq = {};
        function iJ(e, t) {
            let {document: i, settings: s} = e
              , {version: n=0} = i;
            "assets"in i || (i.assets = {});
            let a = new Set;
            return Object.values(i.pages).forEach(e=>Object.values(e.shapes).forEach(t=>{
                let {parentId: i, children: s, assetId: n} = t;
                n && a.add(n),
                i === e.id || e.shapes[i] || (console.warn("Encountered a shape with a missing parent!"),
                t.parentId = e.id),
                "group" === t.type && s && s.forEach(i=>{
                    e.shapes[i] || (console.warn("Encountered a parent with a missing child!", t.id, i),
                    null == s || s.splice(s.indexOf(i), 1))
                }
                )
            }
            )),
            Object.keys(i.assets).forEach(e=>{
                a.has(e) || delete i.assets[e]
            }
            ),
            n === t || (n < 14 && Object.values(i.pages).forEach(e=>{
                Object.values(e.shapes).filter(e=>"text" === e.type).forEach(e=>"script" === e.style.font)
            }
            ),
            n <= 13 && Object.values(i.pages).forEach(e=>{
                Object.values(e.bindings).forEach(e=>{
                    Object.assign(e, e.meta)
                }
                ),
                Object.values(e.shapes).forEach(e=>{
                    Object.entries(e.style).forEach(([t,i])=>{
                        "string" == typeof i && (e.style[t] = i.toLowerCase())
                    }
                    ),
                    "arrow" === e.type && e.decorations && Object.entries(e.decorations).forEach(([t,i])=>{
                        "Arrow" === i && (e.decorations = M(z({}, e.decorations), {
                            [t]: "arrow"
                        }))
                    }
                    )
                }
                )
            }
            ),
            n <= 13.1 && (i.name = "New Document"),
            n < 15 && (i.assets = {}),
            Object.values(i.pages).forEach(e=>{
                Object.values(e.shapes).forEach(e=>{
                    n < 15.2 && ("image" === e.type || "video" === e.type) && (e.style.isFilled = !0),
                    n < 15.3 && ("rectangle" === e.type || "triangle" === e.type || "ellipse" === e.type || "arrow" === e.type) && (e.label = e.text || "",
                    e.labelPoint = [.5, .5])
                }
                )
            }
            ),
            n < 15.4 && (s.dockPosition = "bottom"),
            n < 15.5 && (s.exportBackground = "transparent"),
            Object.values(i.pageStates).forEach(e=>{
                e.selectedIds = e.selectedIds.filter(t=>void 0 !== i.pages[e.id].shapes[t]),
                e.bindingId = void 0,
                e.editingId = void 0,
                e.hoveredId = void 0,
                e.pointedId = void 0
            }
            ),
            i.version = t),
            e
        }
        D(iq, {
            fileToBase64: ()=>i8,
            fileToText: ()=>i9,
            getImageSizeFromSrc: ()=>i7,
            getVideoSizeFromSrc: ()=>se,
            loadFileHandle: ()=>i2,
            migrate: ()=>iJ,
            openAssetsFromFileSystem: ()=>i6,
            openFromFileSystem: ()=>i4,
            saveFileHandle: ()=>i5,
            saveToFileSystem: ()=>i3
        });
        var i0 = {
            mode: "readwrite"
        }
          , i1 = e=>A(void 0, null, function*() {
            return (yield e.queryPermission(i0)) === "granted" || (yield e.requestPermission(i0)) === "granted"
        });
        function i2() {
            return A(this, null, function*() {
                if ("undefined" != typeof Window && "_location"in Window)
                    return (yield(0,
                    f.U2)(`Tldraw_file_handle_${window.location.origin}`)) || null
            })
        }
        function i5(e) {
            return A(this, null, function*() {
                return (0,
                f.t8)(`Tldraw_file_handle_${window.location.origin}`, e)
            })
        }
        function i3(e, t, i) {
            return A(this, null, function*() {
                let s = {
                    name: e.name || "New Document",
                    fileHandle: null != t ? t : null,
                    document: e,
                    assets: {}
                }
                  , n = JSON.stringify(s, null, 2)
                  , a = new Blob([n],{
                    type: "application/vnd.Tldraw+json"
                });
                if (t && !(yield i1(t)))
                    return null;
                let o = !y.supported && (null == i ? void 0 : i.length) ? i : `${s.name}`
                  , r = yield(0,
                y.fileSave)(a, {
                    fileName: `${o}${ev}`,
                    description: "Tldraw File",
                    extensions: [`${ev}`]
                }, t);
                return yield i5(r),
                r
            })
        }
        function i4() {
            return A(this, null, function*() {
                var e;
                let t = yield(0,
                y.fileOpen)({
                    description: "Tldraw File",
                    extensions: [`${ev}`],
                    multiple: !1
                });
                if (!t)
                    return null;
                let i = JSON.parse((yield new Promise(e=>{
                    let i = new FileReader;
                    i.onloadend = ()=>{
                        i.readyState === FileReader.DONE && e(i.result)
                    }
                    ,
                    i.readAsText(t, "utf8")
                }
                )))
                  , s = null != (e = t.handle) ? e : null;
                return yield i5(s),
                {
                    fileHandle: s,
                    document: i.document
                }
            })
        }
        function i6() {
            return A(this, null, function*() {
                return (0,
                y.fileOpen)({
                    description: "Image or Video",
                    extensions: [...ek, ...ew],
                    multiple: !0
                })
            })
        }
        function i8(e) {
            return new Promise((t,i)=>{
                if (e) {
                    let s = new FileReader;
                    s.readAsDataURL(e),
                    s.onload = ()=>t(s.result),
                    s.onerror = e=>i(e),
                    s.onabort = e=>i(e)
                }
            }
            )
        }
        function i9(e) {
            return new Promise((t,i)=>{
                if (e) {
                    let s = new FileReader;
                    s.readAsText(e),
                    s.onload = ()=>t(s.result),
                    s.onerror = e=>i(e),
                    s.onabort = e=>i(e)
                }
            }
            )
        }
        function i7(e) {
            return new Promise((t,i)=>{
                let s = new Image;
                s.onload = ()=>t([s.width, s.height]),
                s.onerror = ()=>i(Error("Could not get image size")),
                s.src = e
            }
            )
        }
        function se(e) {
            return new Promise((t,i)=>{
                let s = document.createElement("video");
                s.onloadedmetadata = ()=>t([s.videoWidth, s.videoHeight]),
                s.onerror = ()=>i(Error("Could not get video size")),
                s.src = e
            }
            )
        }
        ((e,t,i,s)=>{
            if (t && "object" == typeof t || "function" == typeof t)
                for (let i of w(t))
                    P.call(e, i) || "default" === i || S(e, i, {
                        get: ()=>t[i],
                        enumerable: !(s = x(t, i)) || s.enumerable
                    })
        }
        )(iq, y);
        var st = class {
            constructor(e) {
                this.app = e
            }
        }
          , si = class extends st {
            constructor(e, t, i, s=!1) {
                var n, a, r;
                super(e),
                j(this, "type", "arrow"),
                j(this, "performanceMode"),
                j(this, "status", "translatingHandle"),
                j(this, "newStartBindingId", o.cQ.uniqueId()),
                j(this, "draggedBindingId", o.cQ.uniqueId()),
                j(this, "didBind", !1),
                j(this, "initialShape"),
                j(this, "handleId"),
                j(this, "bindableShapeIds"),
                j(this, "initialBinding"),
                j(this, "startBindingShapeId"),
                j(this, "isCreate"),
                j(this, "start", ()=>{}
                ),
                j(this, "update", ()=>{
                    var e, t, i;
                    let {initialShape: s} = this
                      , {currentPoint: n, shiftKey: a, altKey: r, metaKey: l, currentGrid: d, settings: {showGrid: h}} = this.app
                      , p = this.app.getShape(s.id);
                    if (p.isLocked)
                        return;
                    let {handles: c} = s
                      , g = this.handleId;
                    if (!c[g].canBind)
                        return;
                    let m = u.B.sub(n, u.B.add(c[g].point, s.point));
                    if (a) {
                        let e = r ? u.B.med(c.start.point, c.end.point) : c["start" === g ? "end" : "start"].point
                          , t = c[g].point
                          , i = u.B.add(t, m)
                          , s = u.B.angle(e, i)
                          , n = u.B.rotWith(i, e, o.cQ.snapAngleToSegments(s, 24) - s);
                        m = u.B.add(m, u.B.sub(n, i))
                    }
                    let f = u.B.add(c[g].point, m)
                      , b = {
                        [g]: M(z({}, c[g]), {
                            point: h ? u.B.snap(f, d) : u.B.toFixed(f),
                            bindingId: void 0
                        })
                    }
                      , v = iH.arrow
                      , y = null == (e = v.onHandleChange) ? void 0 : e.call(v, s, b);
                    if (!y)
                        return;
                    let S = {
                        shape: o.cQ.deepMerge(p, y),
                        bindings: {}
                    }, I, x = S.shape.handles[this.handleId], k = S.shape.handles["start" === this.handleId ? "end" : "start"];
                    if (this.startBindingShapeId) {
                        let e, t = this.app.page.shapes[this.startBindingShapeId], i = ta.getShapeUtil(t), a = i.getCenter(t), r = S.shape.handles.start, d = S.shape.handles.end, h = u.B.add(r.point, S.shape.point);
                        u.B.isEqual(h, a) && h[1]++;
                        let c = i.hitTestPoint(t, n)
                          , g = u.B.uni(u.B.sub(h, a))
                          , m = void 0 !== this.app.getBinding(this.newStartBindingId);
                        l || i.hitTestPoint(t, u.B.add(S.shape.point, d.point)) || (e = this.findBindingPoint(p, t, "start", this.newStartBindingId, a, a, g, c)),
                        e && !m ? (this.didBind = !0,
                        S.bindings[this.newStartBindingId] = e,
                        S.shape = o.cQ.deepMerge(S.shape, {
                            handles: {
                                start: {
                                    bindingId: e.id
                                }
                            }
                        })) : !e && m && (this.didBind = !1,
                        S.bindings[this.newStartBindingId] = void 0,
                        S.shape = o.cQ.deepMerge(s, {
                            handles: {
                                start: {
                                    bindingId: void 0
                                }
                            }
                        }))
                    }
                    if (!l) {
                        let e = u.B.add(k.point, S.shape.point)
                          , t = u.B.add(x.point, S.shape.point)
                          , i = u.B.uni(u.B.sub(t, e))
                          , s = u.B.add(S.shape.point, S.shape.handles.start.point)
                          , n = u.B.add(S.shape.point, S.shape.handles.end.point);
                        for (let a of this.bindableShapeIds.map(e=>this.app.page.shapes[e]).sort((e,t)=>t.childIndex - e.childIndex).filter(e=>{
                            if (e.isLocked)
                                return !1;
                            let t = ta.getShapeUtil(e);
                            return ![s, n].every(i=>t.hitTestPoint(e, i))
                        }
                        ))
                            if (I = this.findBindingPoint(p, a, this.handleId, this.draggedBindingId, t, e, i, r))
                                break
                    }
                    if (I)
                        this.didBind = !0,
                        S.bindings[this.draggedBindingId] = I,
                        S.shape = o.cQ.deepMerge(S.shape, {
                            handles: {
                                [this.handleId]: {
                                    bindingId: this.draggedBindingId
                                }
                            }
                        });
                    else {
                        this.didBind = this.didBind || !1;
                        let e = p.handles[this.handleId].bindingId;
                        void 0 !== e && (S.bindings[e] = void 0,
                        S.shape = o.cQ.deepMerge(S.shape, {
                            handles: {
                                [this.handleId]: {
                                    bindingId: void 0
                                }
                            }
                        }))
                    }
                    let w = null == (i = (t = ta.getShapeUtil(S.shape)).onHandleChange) ? void 0 : i.call(t, S.shape, S.shape.handles);
                    return {
                        document: {
                            pages: {
                                [this.app.currentPageId]: {
                                    shapes: {
                                        [p.id]: z(z({}, S.shape), null != w ? w : {})
                                    },
                                    bindings: S.bindings
                                }
                            },
                            pageStates: {
                                [this.app.currentPageId]: {
                                    bindingId: S.shape.handles[g].bindingId
                                }
                            }
                        }
                    }
                }
                ),
                j(this, "cancel", ()=>{
                    let {initialShape: e, initialBinding: t, newStartBindingId: i, draggedBindingId: s} = this
                      , n = ta.onSessionComplete(this.app.page.shapes[e.id])
                      , a = this.isCreate || 4 > u.B.dist(n.handles.start.point, n.handles.end.point)
                      , o = {};
                    return o[s] = void 0,
                    t && (o[t.id] = a ? void 0 : t),
                    i && (o[i] = void 0),
                    {
                        document: {
                            pages: {
                                [this.app.currentPageId]: {
                                    shapes: {
                                        [e.id]: a ? void 0 : e
                                    },
                                    bindings: o
                                }
                            },
                            pageStates: {
                                [this.app.currentPageId]: {
                                    selectedIds: a ? [] : [e.id],
                                    bindingId: void 0,
                                    hoveredId: void 0,
                                    editingId: void 0
                                }
                            }
                        }
                    }
                }
                ),
                j(this, "complete", ()=>{
                    let {initialShape: e, initialBinding: t, newStartBindingId: i, startBindingShapeId: s, handleId: n} = this
                      , a = ta.onSessionComplete(this.app.page.shapes[e.id])
                      , o = a.handles[n].bindingId
                      , r = u.B.dist(a.handles.start.point, a.handles.end.point);
                    if (!(o || t) && r < 4)
                        return this.cancel();
                    let l = {}
                      , d = {};
                    return t && (l[t.id] = this.isCreate ? void 0 : t,
                    d[t.id] = void 0),
                    o && (l[o] = void 0,
                    d[o] = this.app.page.bindings[o]),
                    s && (l[i] = void 0,
                    d[i] = this.app.page.bindings[i]),
                    {
                        id: "arrow",
                        before: {
                            document: {
                                pages: {
                                    [this.app.currentPageId]: {
                                        shapes: {
                                            [e.id]: this.isCreate ? void 0 : e
                                        },
                                        bindings: l
                                    }
                                },
                                pageStates: {
                                    [this.app.currentPageId]: {
                                        selectedIds: this.isCreate ? [] : [e.id],
                                        bindingId: void 0,
                                        hoveredId: void 0,
                                        editingId: void 0
                                    }
                                }
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [this.app.currentPageId]: {
                                        shapes: {
                                            [e.id]: a
                                        },
                                        bindings: d
                                    }
                                },
                                pageStates: {
                                    [this.app.currentPageId]: {
                                        selectedIds: [e.id],
                                        bindingId: void 0,
                                        hoveredId: void 0,
                                        editingId: void 0
                                    }
                                }
                            }
                        }
                    }
                }
                ),
                j(this, "findBindingPoint", (e,t,i,s,n,a,o,r)=>{
                    let l = ta.getShapeUtil(t.type).getBindingPoint(t, e, n, a, o, r);
                    if (l)
                        return {
                            id: s,
                            type: "arrow",
                            fromId: e.id,
                            toId: t.id,
                            handleId: i,
                            point: u.B.toFixed(l.point),
                            distance: l.distance
                        }
                }
                ),
                this.isCreate = s;
                let {currentPageId: l} = e.state.appState
                  , d = e.state.document.pages[l];
                this.handleId = i,
                this.initialShape = te(d.shapes[t]),
                this.bindableShapeIds = ta.getBindableShapeIds(e.state).filter(e=>!(e === this.initialShape.id || e === this.initialShape.parentId));
                let h = null == (n = this.initialShape.handles["start" === i ? "end" : "start"]) ? void 0 : n.bindingId;
                if (h) {
                    let e = null == (a = d.bindings[h]) ? void 0 : a.toId;
                    e && (this.bindableShapeIds = this.bindableShapeIds.filter(t=>t !== e))
                }
                let {originPoint: p} = this.app;
                if (this.isCreate)
                    this.startBindingShapeId = null == (r = this.bindableShapeIds.map(e=>d.shapes[e]).filter(e=>!e.isLocked && o.cQ.pointInBounds(p, ta.getShapeUtil(e).getBounds(e))).sort((e,t)=>t.childIndex - e.childIndex)[0]) ? void 0 : r.id,
                    this.startBindingShapeId && this.bindableShapeIds.splice(this.bindableShapeIds.indexOf(this.startBindingShapeId), 1);
                else {
                    let e = this.initialShape.handles[this.handleId].bindingId;
                    e ? this.initialBinding = d.bindings[e] : this.initialShape.handles[this.handleId].bindingId = void 0
                }
            }
        }
          , ss = class extends st {
            constructor(e) {
                super(e),
                j(this, "type", "brush"),
                j(this, "performanceMode"),
                j(this, "status", "brushing"),
                j(this, "initialSelectedIds"),
                j(this, "shapesToTest"),
                j(this, "start", ()=>{}
                ),
                j(this, "update", ()=>{
                    let {initialSelectedIds: e, shapesToTest: t, app: {metaKey: i, settings: s, originPoint: n, currentPoint: a}} = this
                      , r = o.cQ.getBoundsFromPoints([n, a])
                      , l = s.isCadSelectMode ? !i && n[0] < a[0] : i
                      , d = new Set
                      , h = new Set(e);
                    t.forEach(({id: e, selectId: t})=>{
                        let i = this.app.getShape(e);
                        if (!d.has(t)) {
                            let e = this.app.getShapeUtil(i);
                            (l ? o.cQ.boundsContain(r, e.getBounds(i)) : e.hitTestBounds(i, r)) ? (d.add(t),
                            h.has(t) || h.add(t)) : h.has(t) && h.delete(t)
                        }
                    }
                    );
                    let p = this.app.selectedIds
                      , c = h.size !== p.length || p.some(e=>!h.has(e))
                      , u = c ? Array.from(h.values()) : p;
                    return c ? {
                        appState: {
                            selectByContain: l
                        },
                        document: {
                            pageStates: {
                                [this.app.currentPageId]: {
                                    brush: r,
                                    selectedIds: u
                                }
                            }
                        }
                    } : {
                        appState: {
                            selectByContain: l
                        },
                        document: {
                            pageStates: {
                                [this.app.currentPageId]: {
                                    brush: r
                                }
                            }
                        }
                    }
                }
                ),
                j(this, "cancel", ()=>({
                    appState: {
                        selectByContain: !1
                    },
                    document: {
                        pageStates: {
                            [this.app.currentPageId]: {
                                brush: null,
                                selectedIds: Array.from(this.initialSelectedIds.values())
                            }
                        }
                    }
                })),
                j(this, "complete", ()=>({
                    appState: {
                        selectByContain: !1
                    },
                    document: {
                        pageStates: {
                            [this.app.currentPageId]: {
                                brush: null,
                                selectedIds: [...this.app.selectedIds]
                            }
                        }
                    }
                }));
                let {currentPageId: t} = e;
                this.initialSelectedIds = new Set(this.app.selectedIds),
                this.shapesToTest = this.app.shapes.filter(e=>!(e.isLocked || e.isHidden || e.parentId !== t || this.initialSelectedIds.has(e.id) || this.initialSelectedIds.has(e.parentId))).map(e=>({
                    id: e.id,
                    bounds: this.app.getShapeUtil(e).getBounds(e),
                    selectId: e.id
                })),
                this.update()
            }
        }
          , sn = class extends st {
            constructor(e, t) {
                var i;
                super(e),
                j(this, "type", "draw"),
                j(this, "performanceMode"),
                j(this, "status", "creating"),
                j(this, "topLeft"),
                j(this, "points"),
                j(this, "initialShape"),
                j(this, "lastAdjustedPoint"),
                j(this, "shiftedPoints", []),
                j(this, "shapeId"),
                j(this, "isLocked"),
                j(this, "isExtending"),
                j(this, "lockedDirection"),
                j(this, "start", ()=>{
                    var e;
                    let t = this.app.originPoint
                      , i = [0, 0, null != (e = t[2]) ? e : .5];
                    this.points.push(i);
                    let s = [Math.min(this.topLeft[0], t[0]), Math.min(this.topLeft[1], t[1])]
                      , n = u.B.sub(s, t);
                    return this.topLeft = s,
                    this.shiftedPoints = this.points.map(e=>u.B.toFixed(u.B.sub(e, n)).concat(e[2])),
                    {
                        document: {
                            pages: {
                                [this.app.currentPageId]: {
                                    shapes: {
                                        [this.shapeId]: {
                                            point: this.topLeft,
                                            points: this.shiftedPoints
                                        }
                                    }
                                }
                            },
                            pageStates: {
                                [this.app.currentPageId]: {
                                    selectedIds: [this.shapeId]
                                }
                            }
                        }
                    }
                }
                ),
                j(this, "update", ()=>{
                    let {shapeId: e} = this
                      , {currentPoint: t, originPoint: i, shiftKey: s, zoom: n} = this.app;
                    if (!this.lockedDirection && this.points.length > 1) {
                        let e = u.B.sub(t, i);
                        u.B.len(e) > 3 / n && (this.lockedDirection = Math.abs(e[0]) > Math.abs(e[1]) ? "horizontal" : "vertical")
                    }
                    if (s) {
                        if (!this.isLocked && this.points.length > 2) {
                            if (!this.lockedDirection) {
                                let e = u.B.sub(t, i);
                                u.B.len(e) > 3 / n && (this.lockedDirection = Math.abs(e[0]) > Math.abs(e[1]) ? "horizontal" : "vertical")
                            }
                            this.isLocked = !0;
                            let e = [...this.lastAdjustedPoint];
                            "vertical" === this.lockedDirection ? e[0] = 0 : e[1] = 0,
                            this.points.push(e.concat(t[2]))
                        }
                    } else
                        this.isLocked && (this.isLocked = !1);
                    this.isLocked && ("vertical" === this.lockedDirection ? t[0] = i[0] : t[1] = i[1]);
                    let a = this.addPoint(t);
                    if (a)
                        return {
                            document: {
                                pages: {
                                    [this.app.currentPageId]: {
                                        shapes: {
                                            [e]: a
                                        }
                                    }
                                },
                                pageStates: {
                                    [this.app.currentPageId]: {
                                        selectedIds: [e]
                                    }
                                }
                            }
                        }
                }
                ),
                j(this, "cancel", ()=>{
                    let {shapeId: e} = this
                      , t = this.app.currentPageId;
                    return {
                        document: {
                            pages: {
                                [t]: {
                                    shapes: {
                                        [e]: this.isExtending ? this.initialShape : void 0
                                    }
                                }
                            },
                            pageStates: {
                                [t]: {
                                    selectedIds: []
                                }
                            }
                        }
                    }
                }
                ),
                j(this, "complete", ()=>{
                    let {shapeId: e} = this
                      , t = this.app.currentPageId
                      , i = this.app.getShape(e);
                    return {
                        id: "create_draw",
                        before: {
                            document: {
                                pages: {
                                    [t]: {
                                        shapes: {
                                            [e]: this.isExtending ? this.initialShape : void 0
                                        }
                                    }
                                },
                                pageStates: {
                                    [t]: {
                                        selectedIds: []
                                    }
                                }
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [t]: {
                                        shapes: {
                                            [e]: M(z({}, i), {
                                                point: u.B.toFixed(i.point),
                                                points: i.points.map(e=>u.B.toFixed(e)),
                                                isComplete: !0
                                            })
                                        }
                                    }
                                },
                                pageStates: {
                                    [this.app.currentPageId]: {
                                        selectedIds: []
                                    }
                                }
                            }
                        }
                    }
                }
                ),
                j(this, "addPoint", e=>{
                    let {originPoint: t} = this.app
                      , i = u.B.toFixed(u.B.sub(e, t)).concat(e[2]);
                    if (u.B.isEqual(this.lastAdjustedPoint, i))
                        return;
                    this.points.push(i),
                    this.lastAdjustedPoint = i;
                    let s = [...this.topLeft], n = [Math.min(this.topLeft[0], e[0]), Math.min(this.topLeft[1], e[1])], a = u.B.sub(n, t), o;
                    return s[0] !== n[0] || s[1] !== n[1] ? (this.topLeft = n,
                    o = this.points.map(e=>u.B.toFixed(u.B.sub(e, a)).concat(e[2]))) : o = [...this.shiftedPoints, u.B.sub(i, a).concat(i[2])],
                    this.shiftedPoints = o,
                    {
                        point: this.topLeft,
                        points: o
                    }
                }
                );
                let {originPoint: s} = this.app;
                this.shapeId = t,
                this.initialShape = this.app.getShape(t),
                this.topLeft = [...this.initialShape.point];
                let n = [0, 0, null != (i = s[2]) ? i : .5]
                  , a = u.B.sub(s, this.topLeft)
                  , o = this.initialShape.points.map(e=>u.B.sub(e, a).concat(e[2]));
                this.isExtending = o.length > 0;
                let r = [];
                if (this.isExtending) {
                    let e = o[o.length - 1];
                    if (e) {
                        r.push(e, e);
                        let t = Math.floor(u.B.dist(e, n) / 16);
                        if (t > 1)
                            for (let i = 0; i < t; i++) {
                                let s = i / (t - 1);
                                r.push(u.B.lrp(e, n, s).concat(e[2]))
                            }
                        else
                            r.push(n, n)
                    }
                } else
                    r.push(n);
                this.points = [...o, ...r],
                this.shiftedPoints = this.points.map(e=>u.B.add(e, a).concat(e[2])),
                this.lastAdjustedPoint = this.points[this.points.length - 1]
            }
        }
          , sa = class extends st {
            constructor(e, t, i) {
                super(e),
                j(this, "type", "edit"),
                j(this, "performanceMode"),
                j(this, "initialShape"),
                j(this, "initialSelectedIds"),
                j(this, "currentPageId"),
                j(this, "isCreating"),
                j(this, "start", ()=>{}
                ),
                j(this, "update", ()=>{}
                ),
                j(this, "cancel", ()=>({
                    document: {
                        pages: {
                            [this.currentPageId]: {
                                shapes: {
                                    [this.initialShape.id]: this.isCreating ? void 0 : this.initialShape
                                }
                            }
                        },
                        pageStates: {
                            [this.currentPageId]: {
                                selectedIds: this.isCreating ? [] : this.initialSelectedIds,
                                editingId: void 0
                            }
                        }
                    }
                })),
                j(this, "complete", ()=>{
                    let e = this.app.getShape(this.initialShape.id);
                    return {
                        id: "edit",
                        before: {
                            document: {
                                pages: {
                                    [this.currentPageId]: {
                                        shapes: {
                                            [this.initialShape.id]: this.isCreating ? void 0 : this.initialShape
                                        }
                                    }
                                },
                                pageStates: {
                                    [this.currentPageId]: {
                                        selectedIds: this.isCreating ? [] : this.initialSelectedIds,
                                        editingId: void 0
                                    }
                                }
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [this.currentPageId]: {
                                        shapes: {
                                            [this.initialShape.id]: e
                                        }
                                    }
                                },
                                pageStates: {
                                    [this.currentPageId]: {
                                        selectedIds: [e.id],
                                        editingId: void 0
                                    }
                                }
                            }
                        }
                    }
                }
                ),
                this.initialShape = e.getShape(t, e.currentPageId),
                this.currentPageId = e.currentPageId,
                this.isCreating = i,
                this.initialSelectedIds = [...e.selectedIds]
            }
        }
          , so = class extends st {
            constructor(e) {
                super(e),
                j(this, "type", "draw"),
                j(this, "performanceMode"),
                j(this, "status", "creating"),
                j(this, "isLocked"),
                j(this, "lockedDirection"),
                j(this, "erasedShapes", new Set),
                j(this, "erasedBindings", new Set),
                j(this, "initialSelectedShapes"),
                j(this, "erasableShapes"),
                j(this, "prevPoint"),
                j(this, "prevEraseShapesSize", 0),
                j(this, "interval"),
                j(this, "timestamp1", 0),
                j(this, "timestamp2", 0),
                j(this, "prevErasePoint", []),
                j(this, "loop", ()=>{
                    let e = Date.now()
                      , t = e - this.timestamp1
                      , i = e - this.timestamp2
                      , {eraseLine: s} = this.app.appState
                      , n = [...s]
                      , a = !1;
                    t > 16 && this.prevErasePoint !== this.prevPoint && (a = !0,
                    n = [...s, this.prevPoint],
                    this.prevErasePoint = this.prevPoint),
                    i > 32 && n.length > 1 && (a = !0,
                    n.splice(0, Math.ceil(.1 * n.length)),
                    this.timestamp2 = e),
                    a && this.app.patchState({
                        appState: {
                            eraseLine: n
                        }
                    }, "eraseline"),
                    this.interval = requestAnimationFrame(this.loop)
                }
                ),
                j(this, "start", ()=>{}
                ),
                j(this, "update", ()=>{
                    let {page: e, shiftKey: t, originPoint: i, currentPoint: s, zoom: n} = this.app;
                    if (t) {
                        let e = u.B.sub(s, i);
                        if (!this.isLocked && u.B.len(e) > 3 / n) {
                            if (!this.lockedDirection) {
                                let e = u.B.sub(s, i);
                                this.lockedDirection = Math.abs(e[0]) > Math.abs(e[1]) ? "horizontal" : "vertical"
                            }
                            this.isLocked = !0
                        }
                    } else
                        this.isLocked && (this.isLocked = !1);
                    this.isLocked && ("vertical" === this.lockedDirection ? s[0] = i[0] : s[1] = i[1]);
                    let a = u.B.toFixed(u.B.add(i, u.B.sub(s, i)))
                      , o = new Set([]);
                    this.erasableShapes.forEach(e=>{
                        if (!this.erasedShapes.has(e) && this.app.getShapeUtil(e).hitTestLineSegment(e, this.prevPoint, a) && (this.erasedShapes.add(e),
                        o.add(e.id),
                        void 0 !== e.children))
                            for (let t of e.children)
                                this.erasedShapes.add(this.app.getShape(t)),
                                o.add(t)
                    }
                    ),
                    Object.values(e.bindings).forEach(e=>{
                        for (let t of [e.toId, e.fromId])
                            o.has(t) && this.erasedBindings.add(e)
                    }
                    ),
                    this.erasedShapes.forEach(e=>{
                        this.app.getShape(e.id) || (this.erasedShapes.delete(e),
                        this.erasableShapes.delete(e),
                        o.delete(e.id))
                    }
                    );
                    let r = Array.from(this.erasedShapes.values());
                    if (this.prevPoint = a,
                    r.length !== this.prevEraseShapesSize)
                        return this.prevEraseShapesSize = r.length,
                        {
                            document: {
                                pages: {
                                    [e.id]: {
                                        shapes: Object.fromEntries(r.map(e=>[e.id, {
                                            isGhost: !0
                                        }]))
                                    }
                                }
                            }
                        }
                }
                ),
                j(this, "cancel", ()=>{
                    let {page: e} = this.app;
                    cancelAnimationFrame(this.interval),
                    this.erasedShapes.forEach(e=>{
                        this.app.getShape(e.id) || (this.erasedShapes.delete(e),
                        this.erasableShapes.delete(e))
                    }
                    );
                    let t = Array.from(this.erasedShapes.values());
                    return {
                        document: {
                            pages: {
                                [e.id]: {
                                    shapes: Object.fromEntries(t.map(e=>[e.id, {
                                        isGhost: !1
                                    }]))
                                }
                            },
                            pageStates: {
                                [e.id]: {
                                    selectedIds: this.initialSelectedShapes.map(e=>e.id)
                                }
                            }
                        },
                        appState: {
                            eraseLine: []
                        }
                    }
                }
                ),
                j(this, "complete", ()=>{
                    let {page: e} = this.app;
                    cancelAnimationFrame(this.interval),
                    this.erasedShapes.forEach(e=>{
                        this.app.getShape(e.id) || (this.erasedShapes.delete(e),
                        this.erasableShapes.delete(e))
                    }
                    ),
                    this.erasedBindings.forEach(e=>{
                        this.app.getBinding(e.id) || this.erasedBindings.delete(e)
                    }
                    );
                    let t = Array.from(this.erasedShapes.values())
                      , i = Array.from(this.erasedBindings.values())
                      , s = t.map(e=>e.id)
                      , n = i.map(e=>e.id)
                      , a = {
                        shapes: Object.fromEntries(t.map(e=>[e.id, e])),
                        bindings: Object.fromEntries(i.map(e=>[e.id, e]))
                    }
                      , o = {
                        shapes: Object.fromEntries(t.map(e=>[e.id, void 0])),
                        bindings: Object.fromEntries(i.map(e=>[e.id, void 0]))
                    };
                    return this.app.shapes.forEach(e=>{
                        e.handles && !o.shapes[e.id] && Object.values(e.handles).forEach(t=>{
                            var i, r;
                            t.bindingId && n.includes(t.bindingId) && (a.shapes[e.id] = M(z({}, a.shapes[e.id]), {
                                handles: M(z({}, null == (i = a.shapes[e.id]) ? void 0 : i.handles), {
                                    [t.id]: t
                                })
                            }),
                            s.includes(e.id) || (o.shapes[e.id] = M(z({}, o.shapes[e.id]), {
                                handles: M(z({}, null == (r = o.shapes[e.id]) ? void 0 : r.handles), {
                                    [t.id]: M(z({}, t), {
                                        bindingId: void 0
                                    })
                                })
                            })))
                        }
                        )
                    }
                    ),
                    {
                        id: "erase",
                        before: {
                            document: {
                                pages: {
                                    [e.id]: a
                                },
                                pageStates: {
                                    [e.id]: {
                                        selectedIds: this.initialSelectedShapes.filter(e=>!!this.app.getShape(e.id)).map(e=>e.id)
                                    }
                                }
                            },
                            appState: {
                                eraseLine: []
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [e.id]: o
                                },
                                pageStates: {
                                    [e.id]: {
                                        selectedIds: this.initialSelectedShapes.filter(e=>!!this.app.getShape(e.id)).filter(e=>!s.includes(e.id)).map(e=>e.id)
                                    }
                                }
                            },
                            appState: {
                                eraseLine: []
                            }
                        }
                    }
                }
                ),
                this.prevPoint = [...e.originPoint],
                this.initialSelectedShapes = this.app.selectedIds.map(e=>this.app.getShape(e)),
                this.erasableShapes = new Set(this.app.shapes.filter(e=>!e.isLocked)),
                this.interval = this.loop()
            }
        }
          , sr = class extends st {
            constructor(e, t) {
                var i;
                super(e),
                j(this, "type", "grid"),
                j(this, "performanceMode"),
                j(this, "status", "translating"),
                j(this, "shape"),
                j(this, "bounds"),
                j(this, "initialSelectedIds"),
                j(this, "initialSiblings"),
                j(this, "grid", {}),
                j(this, "columns", 1),
                j(this, "rows", 1),
                j(this, "isCopying", !1),
                j(this, "start", ()=>{}
                ),
                j(this, "update", ()=>{
                    let {currentPageId: e, altKey: t, shiftKey: i, currentPoint: s} = this.app
                      , n = {}
                      , a = o.cQ.getBoundsCenter(this.bounds)
                      , r = u.B.sub(s, a);
                    i && (Math.abs(r[0]) < Math.abs(r[1]) ? r[0] = 0 : r[1] = 0);
                    let l = this.bounds.width + 32
                      , d = this.bounds.height + 32
                      , h = Math.ceil(r[0] / l)
                      , p = Math.ceil(r[1] / d)
                      , c = Math.min(h, 0)
                      , g = Math.min(p, 0)
                      , m = Math.max(h, 1)
                      , f = Math.max(p, 1)
                      , b = new Set;
                    t !== this.isCopying && (Object.values(this.grid).filter(e=>e !== this.shape.id).forEach(e=>n[e] = void 0),
                    this.grid = {
                        "0_0": this.shape.id
                    },
                    this.isCopying = t);
                    for (let e = c; e < m; e++)
                        for (let i = g; i < f; i++) {
                            let s = `${e}_${i}`;
                            if (b.add(s),
                            this.grid[s] || 0 === e && 0 === i)
                                continue;
                            let a = this.getClone(u.B.add(this.shape.point, [e * l, i * d]), t);
                            n[a.id] = a,
                            this.grid[s] = a.id
                        }
                    if (Object.entries(this.grid).forEach(([e,t])=>{
                        b.has(e) || (n[t] = void 0,
                        delete this.grid[e])
                    }
                    ),
                    0 !== Object.values(n).length)
                        return this.initialSiblings && (n[this.shape.parentId] = {
                            children: [...this.initialSiblings, ...Object.values(this.grid)]
                        }),
                        {
                            document: {
                                pages: {
                                    [e]: {
                                        shapes: n
                                    }
                                },
                                pageStates: {
                                    [e]: {}
                                }
                            }
                        }
                }
                ),
                j(this, "cancel", ()=>{
                    let {currentPageId: e} = this.app
                      , t = {};
                    return Object.values(this.grid).forEach(e=>{
                        t[e] = void 0
                    }
                    ),
                    t[this.shape.id] = M(z({}, t[this.shape.id]), {
                        point: this.shape.point
                    }),
                    this.initialSiblings && (t[this.shape.parentId] = {
                        children: [...this.initialSiblings, this.shape.id]
                    }),
                    {
                        document: {
                            pages: {
                                [e]: {
                                    shapes: t
                                }
                            },
                            pageStates: {
                                [e]: {
                                    selectedIds: [this.shape.id]
                                }
                            }
                        }
                    }
                }
                ),
                j(this, "complete", ()=>{
                    let {currentPageId: e} = this.app
                      , t = {}
                      , i = {}
                      , s = [];
                    if (Object.values(this.grid).forEach(e=>{
                        t[e] = void 0,
                        i[e] = this.app.getShape(e),
                        s.push(e)
                    }
                    ),
                    t[this.shape.id] = this.shape,
                    this.initialSiblings && (t[this.shape.parentId] = {
                        children: [...this.initialSiblings, this.shape.id]
                    },
                    i[this.shape.parentId] = {
                        children: [...this.initialSiblings, ...Object.values(this.grid)]
                    }),
                    1 !== s.length)
                        return {
                            id: "grid",
                            before: {
                                document: {
                                    pages: {
                                        [e]: {
                                            shapes: t
                                        }
                                    },
                                    pageStates: {
                                        [e]: {
                                            selectedIds: [],
                                            hoveredId: void 0
                                        }
                                    }
                                }
                            },
                            after: {
                                document: {
                                    pages: {
                                        [e]: {
                                            shapes: i
                                        }
                                    },
                                    pageStates: {
                                        [e]: {
                                            selectedIds: s,
                                            hoveredId: void 0
                                        }
                                    }
                                }
                            }
                        }
                }
                ),
                j(this, "getClone", (e,t)=>{
                    let i = M(z({}, this.shape), {
                        id: o.cQ.uniqueId(),
                        point: e
                    });
                    return t || "sticky" === i.type && (i.text = ""),
                    i
                }
                ),
                this.shape = this.app.getShape(t),
                this.grid["0_0"] = this.shape.id,
                this.bounds = this.app.getShapeBounds(t),
                this.initialSelectedIds = [...this.app.selectedIds],
                this.shape.parentId !== this.app.currentPageId && (this.initialSiblings = null == (i = this.app.getShape(this.shape.parentId).children) ? void 0 : i.filter(e=>e !== this.shape.id))
            }
        }
          , sl = {
            arrow: si,
            brush: ss,
            draw: sn,
            erase: so,
            handle: class extends st {
                constructor(e, t, i, s="move_handle") {
                    super(e),
                    j(this, "type", "handle"),
                    j(this, "performanceMode"),
                    j(this, "status", "translatingHandle"),
                    j(this, "commandId"),
                    j(this, "topLeft"),
                    j(this, "shiftKey", !1),
                    j(this, "initialShape"),
                    j(this, "handleId"),
                    j(this, "start", ()=>{}
                    ),
                    j(this, "update", ()=>{
                        var e, t;
                        let {initialShape: i, app: {currentPageId: s, currentPoint: n}} = this
                          , a = this.app.getShape(i.id);
                        if (a.isLocked)
                            return;
                        let o = a.handles
                          , r = this.handleId
                          , l = u.B.sub(n, o[r].point)
                          , d = {
                            [r]: M(z({}, o[r]), {
                                point: u.B.sub(u.B.add(o[r].point, l), a.point)
                            })
                        }
                          , h = null == (t = (e = ta.getShapeUtil(a)).onHandleChange) ? void 0 : t.call(e, a, d);
                        if (h)
                            return {
                                document: {
                                    pages: {
                                        [s]: {
                                            shapes: {
                                                [a.id]: h
                                            }
                                        }
                                    }
                                }
                            }
                    }
                    ),
                    j(this, "cancel", ()=>{
                        let {initialShape: e, app: {currentPageId: t}} = this;
                        return {
                            document: {
                                pages: {
                                    [t]: {
                                        shapes: {
                                            [e.id]: e
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ),
                    j(this, "complete", ()=>{
                        let {initialShape: e, app: {currentPageId: t}} = this;
                        return {
                            id: this.commandId,
                            before: {
                                document: {
                                    pages: {
                                        [t]: {
                                            shapes: {
                                                [e.id]: e
                                            }
                                        }
                                    }
                                }
                            },
                            after: {
                                document: {
                                    pages: {
                                        [t]: {
                                            shapes: {
                                                [e.id]: ta.onSessionComplete(this.app.getShape(this.initialShape.id))
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    );
                    let {originPoint: n} = e;
                    this.topLeft = [...n],
                    this.handleId = i,
                    this.initialShape = this.app.getShape(t),
                    this.commandId = s
                }
            }
            ,
            rotate: class extends st {
                constructor(e) {
                    super(e),
                    j(this, "type", "rotate"),
                    j(this, "status", "transforming"),
                    j(this, "performanceMode"),
                    j(this, "delta", [0, 0]),
                    j(this, "commonBoundsCenter"),
                    j(this, "initialAngle"),
                    j(this, "initialShapes"),
                    j(this, "changes", {}),
                    j(this, "start", ()=>{}
                    ),
                    j(this, "update", ()=>{
                        let {commonBoundsCenter: e, initialShapes: t, app: {currentPageId: i, currentPoint: s, shiftKey: n}} = this
                          , a = {}
                          , r = u.B.angle(e, s) - this.initialAngle;
                        return n && (r = o.cQ.snapAngleToSegments(r, 24)),
                        t.forEach(({center: t, shape: i})=>{
                            let {rotation: s=0} = i
                              , l = 0;
                            n && (l = o.cQ.snapAngleToSegments(s, 24) - s);
                            let d = ta.getRotatedShapeMutation(i, t, e, n ? r + l : r);
                            d && (a[i.id] = d)
                        }
                        ),
                        this.changes = a,
                        {
                            document: {
                                pages: {
                                    [i]: {
                                        shapes: a
                                    }
                                }
                            }
                        }
                    }
                    ),
                    j(this, "cancel", ()=>{
                        let {initialShapes: e, app: {currentPageId: t}} = this
                          , i = {};
                        return e.forEach(({shape: e})=>i[e.id] = e),
                        {
                            document: {
                                pages: {
                                    [t]: {
                                        shapes: i
                                    }
                                }
                            }
                        }
                    }
                    ),
                    j(this, "complete", ()=>{
                        let {initialShapes: e, app: {currentPageId: t}} = this
                          , i = {}
                          , s = this.changes;
                        return e.forEach(({shape: {id: e, point: t, rotation: s, handles: n}})=>{
                            i[e] = {
                                point: t,
                                rotation: s,
                                handles: n
                            }
                        }
                        ),
                        {
                            id: "rotate",
                            before: {
                                document: {
                                    pages: {
                                        [t]: {
                                            shapes: i
                                        }
                                    }
                                }
                            },
                            after: {
                                document: {
                                    pages: {
                                        [t]: {
                                            shapes: s
                                        }
                                    }
                                }
                            }
                        }
                    }
                    );
                    let {app: {currentPageId: t, pageState: i, originPoint: s}} = this
                      , n = ta.getSelectedBranchSnapshot(e.state, t).filter(e=>!e.isLocked);
                    if (0 === n.length)
                        throw Error("No selected shapes!");
                    if (e.rotationInfo.selectedIds === i.selectedIds) {
                        if (void 0 === e.rotationInfo.center)
                            throw Error("We should have a center for rotation!");
                        this.commonBoundsCenter = e.rotationInfo.center
                    } else
                        this.commonBoundsCenter = o.cQ.getBoundsCenter(o.cQ.getCommonBounds(n.map(ta.getBounds))),
                        e.rotationInfo.selectedIds = i.selectedIds,
                        e.rotationInfo.center = this.commonBoundsCenter;
                    this.initialShapes = n.filter(e=>void 0 === e.children).map(e=>({
                        shape: e,
                        center: this.app.getShapeUtil(e).getCenter(e)
                    })),
                    this.initialAngle = u.B.angle(this.commonBoundsCenter, s)
                }
            }
            ,
            transform: class extends st {
                constructor(e, t=o.P0.BottomRight, i=!1) {
                    super(e),
                    this.transformType = t,
                    this.isCreate = i,
                    j(this, "type", "transform"),
                    j(this, "performanceMode"),
                    j(this, "status", "transforming"),
                    j(this, "scaleX", 1),
                    j(this, "scaleY", 1),
                    j(this, "initialShapes"),
                    j(this, "initialShapeIds"),
                    j(this, "initialSelectedIds"),
                    j(this, "shapeBounds"),
                    j(this, "hasUnlockedShapes"),
                    j(this, "isAllAspectRatioLocked"),
                    j(this, "initialCommonBounds"),
                    j(this, "snapInfo", {
                        state: "empty"
                    }),
                    j(this, "prevPoint", [0, 0]),
                    j(this, "speed", 1),
                    j(this, "start", ()=>{
                        this.snapInfo = {
                            state: "ready",
                            bounds: this.app.shapes.filter(e=>!this.initialShapeIds.includes(e.id)).map(e=>o.cQ.getBoundsWithCenter(ta.getRotatedBounds(e)))
                        }
                    }
                    ),
                    j(this, "update", ()=>{
                        let {transformType: e, shapeBounds: t, initialCommonBounds: i, isAllAspectRatioLocked: s, app: {currentPageId: n, pageState: {camera: a}, viewport: r, currentPoint: l, previousPoint: d, originPoint: h, shiftKey: p, altKey: c, metaKey: g, currentGrid: m, settings: {isSnapping: f, showGrid: b}}} = this
                          , v = {}
                          , y = c ? u.B.mul(u.B.sub(l, h), 2) : u.B.sub(l, h)
                          , S = o.cQ.getTransformedBoundingBox(i, e, y, 0, p || s);
                        c && (S = z(z({}, S), o.cQ.centerBounds(S, o.cQ.getBoundsCenter(i)))),
                        b && (S = z(z({}, S), o.cQ.snapBoundsToGrid(S, m)));
                        let I = u.B.dist(l, d) - this.speed;
                        this.speed = this.speed + I * (I > 1 ? .5 : .15);
                        let x = [];
                        if ((f && !g || !f && g) && this.speed * a.zoom < 10 && "ready" === this.snapInfo.state) {
                            let t = o.cQ.getSnapPoints(o.cQ.getBoundsWithCenter(S), this.snapInfo.bounds.filter(e=>o.cQ.boundsContain(r, e) || o.cQ.boundsCollide(r, e)), 5 / a.zoom);
                            t && (x = t.snapLines,
                            S = o.cQ.getTransformedBoundingBox(i, e, u.B.sub(y, t.offset), 0, p || s))
                        }
                        return this.scaleX = S.scaleX,
                        this.scaleY = S.scaleY,
                        t.forEach(({initialShape: e, initialShapeBounds: t, transformOrigin: s})=>{
                            let n = o.cQ.getRelativeTransformedBoundingBox(S, i, t, this.scaleX < 0, this.scaleY < 0);
                            b && (n = o.cQ.snapBoundsToGrid(n, m));
                            let a = ta.transform(this.app.getShape(e.id), n, {
                                type: this.transformType,
                                initialShape: e,
                                scaleX: this.scaleX,
                                scaleY: this.scaleY,
                                transformOrigin: s
                            });
                            v[e.id] = a
                        }
                        ),
                        {
                            appState: {
                                snapLines: x
                            },
                            document: {
                                pages: {
                                    [n]: {
                                        shapes: v
                                    }
                                }
                            }
                        }
                    }
                    ),
                    j(this, "cancel", ()=>{
                        let {shapeBounds: e, app: {currentPageId: t}} = this
                          , i = {};
                        return this.isCreate ? e.forEach(e=>i[e.initialShape.id] = void 0) : e.forEach(e=>i[e.initialShape.id] = e.initialShape),
                        {
                            appState: {
                                snapLines: []
                            },
                            document: {
                                pages: {
                                    [t]: {
                                        shapes: i
                                    }
                                },
                                pageStates: {
                                    [t]: {
                                        selectedIds: this.isCreate ? [] : e.map(e=>e.initialShape.id)
                                    }
                                }
                            }
                        }
                    }
                    ),
                    j(this, "complete", ()=>{
                        let {isCreate: e, shapeBounds: t, hasUnlockedShapes: i, app: {currentPageId: s}} = this;
                        if (!i)
                            return;
                        if (this.isCreate && 2 > u.B.dist(this.app.originPoint, this.app.currentPoint))
                            return this.cancel();
                        let n = {}, a = {}, o, r;
                        return e ? (o = [],
                        r = [],
                        t.forEach(({initialShape: e})=>{
                            n[e.id] = void 0,
                            a[e.id] = this.app.getShape(e.id)
                        }
                        )) : (o = this.initialSelectedIds,
                        r = this.initialSelectedIds,
                        t.forEach(({initialShape: e})=>{
                            n[e.id] = e,
                            a[e.id] = this.app.getShape(e.id)
                        }
                        )),
                        {
                            id: "transform",
                            before: {
                                appState: {
                                    snapLines: []
                                },
                                document: {
                                    pages: {
                                        [s]: {
                                            shapes: n
                                        }
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: o,
                                            hoveredId: void 0,
                                            editingId: void 0
                                        }
                                    }
                                }
                            },
                            after: {
                                appState: {
                                    snapLines: []
                                },
                                document: {
                                    pages: {
                                        [s]: {
                                            shapes: a
                                        }
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: r,
                                            hoveredId: void 0,
                                            editingId: void 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ),
                    this.initialSelectedIds = [...this.app.selectedIds],
                    this.app.rotationInfo.selectedIds = [...this.initialSelectedIds],
                    this.initialShapes = ta.getSelectedBranchSnapshot(this.app.state, this.app.currentPageId).filter(e=>!e.isLocked),
                    this.initialShapeIds = this.initialShapes.map(e=>e.id),
                    this.hasUnlockedShapes = this.initialShapes.length > 0,
                    this.isAllAspectRatioLocked = this.initialShapes.every(e=>e.isAspectRatioLocked || ta.getShapeUtil(e).isAspectRatioLocked);
                    let s = Object.fromEntries(this.initialShapes.map(e=>[e.id, ta.getBounds(e)]))
                      , n = Object.values(s);
                    this.initialCommonBounds = o.cQ.getCommonBounds(n);
                    let a = o.cQ.getBoundsFromPoints(n.map(o.cQ.getBoundsCenter));
                    this.shapeBounds = this.initialShapes.map(e=>{
                        let t = s[e.id]
                          , i = o.cQ.getBoundsCenter(t);
                        return {
                            initialShape: e,
                            initialShapeBounds: t,
                            transformOrigin: [(i[0] - a.minX) / a.width, (i[1] - a.minY) / a.height]
                        }
                    }
                    )
                }
            }
            ,
            transformSingle: class extends st {
                constructor(e, t, i, s=!1) {
                    super(e),
                    j(this, "type", "transformSingle"),
                    j(this, "status", "transforming"),
                    j(this, "performanceMode"),
                    j(this, "transformType"),
                    j(this, "scaleX", 1),
                    j(this, "scaleY", 1),
                    j(this, "isCreate"),
                    j(this, "initialShape"),
                    j(this, "initialShapeBounds"),
                    j(this, "initialCommonBounds"),
                    j(this, "snapInfo", {
                        state: "empty"
                    }),
                    j(this, "prevPoint", [0, 0]),
                    j(this, "speed", 1),
                    j(this, "start", ()=>{
                        this.snapInfo = {
                            state: "ready",
                            bounds: this.app.shapes.filter(e=>e.id !== this.initialShape.id).map(e=>o.cQ.getBoundsWithCenter(ta.getRotatedBounds(e)))
                        }
                    }
                    ),
                    j(this, "update", ()=>{
                        let {transformType: e, initialShape: t, initialShapeBounds: i, app: {settings: {isSnapping: s, showGrid: n}, currentPageId: a, pageState: {camera: r}, viewport: l, currentPoint: d, previousPoint: h, originPoint: p, currentGrid: c, shiftKey: g, altKey: m, metaKey: f}} = this;
                        if (t.isLocked)
                            return;
                        let b = {}
                          , v = m ? u.B.mul(u.B.sub(d, p), 2) : u.B.sub(d, p)
                          , y = this.app.getShape(t.id)
                          , S = ta.getShapeUtil(y)
                          , I = o.cQ.getTransformedBoundingBox(i, e, v, y.rotation, g || y.isAspectRatioLocked || S.isAspectRatioLocked);
                        m && (I = z(z({}, I), o.cQ.centerBounds(I, o.cQ.getBoundsCenter(i)))),
                        n && (I = z(z({}, I), o.cQ.snapBoundsToGrid(I, c)));
                        let x = u.B.dist(d, h) - this.speed;
                        this.speed = this.speed + x * (x > 1 ? .5 : .15);
                        let k = [];
                        if ((s && !f || !s && f) && !t.rotation && this.speed * r.zoom < 10 && "ready" === this.snapInfo.state) {
                            let t = o.cQ.getSnapPoints(o.cQ.getBoundsWithCenter(I), this.snapInfo.bounds.filter(e=>o.cQ.boundsContain(l, e) || o.cQ.boundsCollide(l, e)), 5 / r.zoom);
                            t && (k = t.snapLines,
                            I = o.cQ.getTransformedBoundingBox(i, e, u.B.sub(v, t.offset), y.rotation, g || y.isAspectRatioLocked || S.isAspectRatioLocked))
                        }
                        let w = ta.getShapeUtil(y).transformSingle(y, I, {
                            initialShape: t,
                            type: this.transformType,
                            scaleX: I.scaleX,
                            scaleY: I.scaleY,
                            transformOrigin: [.5, .5]
                        });
                        return w && (b[y.id] = w),
                        n && w && w.point && (w.point = u.B.snap(w.point, c)),
                        {
                            appState: {
                                snapLines: k
                            },
                            document: {
                                pages: {
                                    [a]: {
                                        shapes: b
                                    }
                                }
                            }
                        }
                    }
                    ),
                    j(this, "cancel", ()=>{
                        let {initialShape: e, app: {currentPageId: t}} = this
                          , i = {};
                        return this.isCreate ? i[e.id] = void 0 : i[e.id] = e,
                        {
                            appState: {
                                snapLines: []
                            },
                            document: {
                                pages: {
                                    [t]: {
                                        shapes: i
                                    }
                                },
                                pageStates: {
                                    [t]: {
                                        selectedIds: this.isCreate ? [] : [e.id]
                                    }
                                }
                            }
                        }
                    }
                    ),
                    j(this, "complete", ()=>{
                        let {initialShape: e, app: {currentPageId: t}} = this;
                        if (e.isLocked)
                            return;
                        if (this.isCreate && 2 > u.B.dist(this.app.originPoint, this.app.currentPoint))
                            return this.cancel();
                        let i = {}
                          , s = {};
                        return i[e.id] = this.isCreate ? void 0 : e,
                        s[e.id] = ta.onSessionComplete(this.app.getShape(e.id)),
                        {
                            id: "transform_single",
                            before: {
                                appState: {
                                    snapLines: []
                                },
                                document: {
                                    pages: {
                                        [t]: {
                                            shapes: i
                                        }
                                    },
                                    pageStates: {
                                        [t]: {
                                            selectedIds: this.isCreate ? [] : [e.id],
                                            editingId: void 0,
                                            hoveredId: void 0
                                        }
                                    }
                                }
                            },
                            after: {
                                appState: {
                                    snapLines: []
                                },
                                document: {
                                    pages: {
                                        [t]: {
                                            shapes: s
                                        }
                                    },
                                    pageStates: {
                                        [t]: {
                                            selectedIds: [e.id],
                                            editingId: void 0,
                                            hoveredId: void 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ),
                    this.isCreate = s,
                    this.transformType = i;
                    let n = this.app.getShape(t);
                    this.initialShape = n,
                    this.initialShapeBounds = ta.getBounds(n),
                    this.initialCommonBounds = ta.getRotatedBounds(n),
                    this.app.rotationInfo.selectedIds = [n.id]
                }
            }
            ,
            translate: class extends st {
                constructor(e, t=!1, i=!1) {
                    super(e),
                    j(this, "performanceMode"),
                    j(this, "type", "translate"),
                    j(this, "status", "translating"),
                    j(this, "delta", [0, 0]),
                    j(this, "prev", [0, 0]),
                    j(this, "prevPoint", [0, 0]),
                    j(this, "speed", 1),
                    j(this, "cloneInfo", {
                        state: "empty"
                    }),
                    j(this, "snapInfo", {
                        state: "empty"
                    }),
                    j(this, "snapLines", []),
                    j(this, "isCloning", !1),
                    j(this, "isCreate"),
                    j(this, "link"),
                    j(this, "initialIds"),
                    j(this, "hasUnlockedShapes"),
                    j(this, "initialSelectedIds"),
                    j(this, "initialCommonBounds"),
                    j(this, "initialShapes"),
                    j(this, "initialParentChildren"),
                    j(this, "bindingsToDelete"),
                    j(this, "start", ()=>{
                        let {bindingsToDelete: e, initialIds: t, app: {currentPageId: i, page: s}} = this
                          , n = []
                          , a = [];
                        if (Object.values(s.shapes).forEach(e=>{
                            let i = o.cQ.getBoundsWithCenter(ta.getRotatedBounds(e));
                            n.push(i),
                            t.has(e.id) || a.push(i)
                        }
                        ),
                        this.snapInfo = {
                            state: "ready",
                            bounds: n,
                            others: a
                        },
                        0 === e.length)
                            return;
                        let r = {};
                        return e.forEach(e=>r[e.id] = void 0),
                        {
                            document: {
                                pages: {
                                    [i]: {
                                        bindings: r
                                    }
                                }
                            }
                        }
                    }
                    ),
                    j(this, "update", ()=>{
                        let {initialParentChildren: e, initialShapes: t, initialCommonBounds: i, bindingsToDelete: s, app: {pageState: {camera: n}, settings: {isSnapping: a, showGrid: r}, currentPageId: l, viewport: d, selectedIds: h, currentPoint: p, previousPoint: c, originPoint: g, altKey: m, shiftKey: f, metaKey: b, currentGrid: v}} = this
                          , y = {}
                          , S = {}
                          , I = {}
                          , x = u.B.sub(p, g)
                          , k = !1;
                        this.isCreate || (m && !this.isCloning ? (this.isCloning = !0,
                        k = !0) : !m && this.isCloning && (this.isCloning = !1,
                        k = !0)),
                        f && (Math.abs(x[0]) < Math.abs(x[1]) ? x[0] = 0 : x[1] = 0);
                        let w = u.B.dist(p, c) - this.speed;
                        if (this.speed = this.speed + w * (w > 1 ? .5 : .15),
                        this.snapLines = [],
                        (a && !b || !a && b) && this.speed * n.zoom < 10 && "ready" === this.snapInfo.state) {
                            let e = o.cQ.getSnapPoints(o.cQ.getBoundsWithCenter(r ? o.cQ.snapBoundsToGrid(o.cQ.translateBounds(i, x), v) : o.cQ.translateBounds(i, x)), (this.isCloning ? this.snapInfo.bounds : this.snapInfo.others).filter(e=>o.cQ.boundsContain(d, e) || o.cQ.boundsCollide(d, e)), 5 / n.zoom);
                            e && (this.snapLines = e.snapLines,
                            x = u.B.sub(x, e.offset))
                        }
                        if (this.prev = x,
                        this.isCloning) {
                            if (k) {
                                if ("empty" === this.cloneInfo.state && this.createCloneInfo(),
                                "empty" === this.cloneInfo.state)
                                    throw Error;
                                let {clones: i, clonedBindings: n} = this.cloneInfo;
                                for (let a of (this.isCloning = !0,
                                s.forEach(e=>y[e.id] = e),
                                t.forEach(e=>S[e.id] = {
                                    point: e.point
                                }),
                                i.forEach(t=>{
                                    var i;
                                    if (S[t.id] = z({}, t),
                                    t.parentId !== l && !h.includes(t.parentId)) {
                                        let s = (null == (i = S[t.parentId]) ? void 0 : i.children) || e[t.parentId];
                                        s.includes(t.id) || (S[t.parentId] = M(z({}, S[t.parentId]), {
                                            children: [...s, t.id]
                                        }))
                                    }
                                }
                                ),
                                n))
                                    y[a.id] = a;
                                I.selectedIds = i.map(e=>e.id),
                                i.forEach(e=>{
                                    S[e.id] = M(z({}, e), {
                                        point: r ? u.B.snap(u.B.toFixed(u.B.add(e.point, x)), v) : u.B.toFixed(u.B.add(e.point, x))
                                    })
                                }
                                )
                            } else {
                                if ("empty" === this.cloneInfo.state)
                                    throw Error;
                                let {clones: e} = this.cloneInfo;
                                e.forEach(e=>{
                                    S[e.id] = {
                                        point: r ? u.B.snap(u.B.toFixed(u.B.add(e.point, x)), v) : u.B.toFixed(u.B.add(e.point, x))
                                    }
                                }
                                )
                            }
                        } else if (k) {
                            if ("empty" === this.cloneInfo.state)
                                throw Error;
                            let {clones: i, clonedBindings: n} = this.cloneInfo;
                            for (let a of (this.isCloning = !1,
                            s.forEach(e=>y[e.id] = void 0),
                            i.forEach(t=>{
                                t.parentId !== l && (S[t.parentId] = M(z({}, S[t.parentId]), {
                                    children: e[t.parentId]
                                }))
                            }
                            ),
                            i.forEach(e=>S[e.id] = void 0),
                            t.forEach(e=>{
                                S[e.id] = {
                                    point: r ? u.B.snap(u.B.toFixed(u.B.add(e.point, x)), v) : u.B.toFixed(u.B.add(e.point, x))
                                }
                            }
                            ),
                            n))
                                y[a.id] = void 0;
                            I.selectedIds = t.map(e=>e.id)
                        } else
                            t.forEach(e=>{
                                S[e.id] = {
                                    point: r ? u.B.snap(u.B.toFixed(u.B.add(e.point, x)), v) : u.B.toFixed(u.B.add(e.point, x))
                                }
                            }
                            );
                        return {
                            appState: {
                                snapLines: this.snapLines
                            },
                            document: {
                                pages: {
                                    [l]: {
                                        shapes: S,
                                        bindings: y
                                    }
                                },
                                pageStates: {
                                    [l]: I
                                }
                            }
                        }
                    }
                    ),
                    j(this, "cancel", ()=>{
                        let {initialShapes: e, initialSelectedIds: t, bindingsToDelete: i, app: {currentPageId: s}} = this
                          , n = {}
                          , a = {}
                          , o = {
                            editingId: void 0,
                            hoveredId: void 0
                        };
                        if (i.forEach(e=>n[e.id] = e),
                        this.isCreate ? (e.forEach(({id: e})=>a[e] = void 0),
                        o.selectedIds = []) : (e.forEach(({id: e, point: t})=>a[e] = M(z({}, a[e]), {
                            point: t
                        })),
                        o.selectedIds = t),
                        "ready" === this.cloneInfo.state) {
                            let {clones: e, clonedBindings: t} = this.cloneInfo;
                            e.forEach(e=>a[e.id] = void 0),
                            t.forEach(e=>n[e.id] = void 0)
                        }
                        return {
                            appState: {
                                snapLines: []
                            },
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: a,
                                        bindings: n
                                    }
                                },
                                pageStates: {
                                    [s]: o
                                }
                            }
                        }
                    }
                    ),
                    j(this, "complete", ()=>{
                        let {initialShapes: e, initialParentChildren: t, bindingsToDelete: i, app: {currentPageId: s}} = this
                          , n = {}
                          , a = {}
                          , o = {}
                          , r = {};
                        if (this.isCloning) {
                            if ("empty" === this.cloneInfo.state && this.createCloneInfo(),
                            "ready" !== this.cloneInfo.state)
                                throw Error;
                            let {clones: e, clonedBindings: i} = this.cloneInfo;
                            e.forEach(e=>{
                                a[e.id] = void 0,
                                r[e.id] = this.app.getShape(e.id),
                                e.parentId !== s && (a[e.parentId] = M(z({}, a[e.parentId]), {
                                    children: t[e.parentId]
                                }),
                                r[e.parentId] = M(z({}, r[e.parentId]), {
                                    children: this.app.getShape(e.parentId).children
                                }))
                            }
                            ),
                            i.forEach(e=>{
                                n[e.id] = void 0,
                                o[e.id] = this.app.getBinding(e.id)
                            }
                            )
                        } else
                            e.forEach(e=>{
                                a[e.id] = this.isCreate ? void 0 : M(z({}, a[e.id]), {
                                    point: e.point
                                }),
                                r[e.id] = z(z({}, r[e.id]), this.isCreate ? this.app.getShape(e.id) : {
                                    point: this.app.getShape(e.id).point
                                })
                            }
                            );
                        return i.forEach(e=>{
                            for (let t of (n[e.id] = e,
                            [e.toId, e.fromId])) {
                                let i = this.app.getShape(t);
                                i.handles && Object.values(i.handles).filter(t=>t.bindingId === e.id).forEach(i=>{
                                    a[t] = M(z({}, a[t]), {
                                        handles: {}
                                    }),
                                    r[t] = M(z({}, r[t]), {
                                        handles: {}
                                    }),
                                    a[t].handles[i.id] = {
                                        bindingId: e.id
                                    },
                                    r[t].handles[i.id] = {
                                        bindingId: void 0
                                    }
                                }
                                )
                            }
                        }
                        ),
                        {
                            id: "translate",
                            before: {
                                appState: {
                                    snapLines: []
                                },
                                document: {
                                    pages: {
                                        [s]: {
                                            shapes: a,
                                            bindings: n
                                        }
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: this.isCreate ? [] : [...this.initialSelectedIds]
                                        }
                                    }
                                }
                            },
                            after: {
                                appState: {
                                    snapLines: []
                                },
                                document: {
                                    pages: {
                                        [s]: {
                                            shapes: r,
                                            bindings: o
                                        }
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: [...this.app.selectedIds]
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ),
                    j(this, "createCloneInfo", ()=>{
                        let {initialShapes: e, initialParentChildren: t, app: {selectedIds: i, currentPageId: s, page: n}} = this
                          , a = {}
                          , r = {}
                          , l = []
                          , d = [];
                        e.forEach(e=>{
                            let i = o.cQ.uniqueId();
                            t[i] = t[e.id],
                            a[e.id] = i;
                            let n = M(z({}, o.cQ.deepClone(e)), {
                                id: i,
                                parentId: e.parentId,
                                childIndex: ta.getChildIndexAbove(this.app.state, e.id, s)
                            });
                            if ("video" === n.type) {
                                let t = document.getElementById(e.id + "_video");
                                t && (n.currentTime = (t.currentTime + 16) % t.duration)
                            }
                            d.push(n)
                        }
                        ),
                        d.forEach(e=>{
                            void 0 !== e.children && (e.children = e.children.map(e=>a[e]))
                        }
                        ),
                        d.forEach(e=>{
                            i.includes(e.parentId) && (e.parentId = a[e.parentId])
                        }
                        );
                        let h = new Set(Object.keys(a));
                        Object.values(n.bindings).filter(e=>h.has(e.fromId) || h.has(e.toId)).forEach(e=>{
                            if (h.has(e.fromId) && h.has(e.toId)) {
                                let t = o.cQ.uniqueId()
                                  , i = M(z({}, o.cQ.deepClone(e)), {
                                    id: t,
                                    fromId: a[e.fromId] || e.fromId,
                                    toId: a[e.toId] || e.toId
                                });
                                r[e.id] = t,
                                l.push(i)
                            }
                        }
                        ),
                        d.forEach(e=>{
                            if (e.handles && e.handles)
                                for (let t in e.handles) {
                                    let i = e.handles[t];
                                    i.bindingId = i.bindingId ? r[i.bindingId] : void 0
                                }
                        }
                        ),
                        d.forEach(e=>{
                            if (n.shapes[e.id])
                                throw Error("uh oh, we didn't clone correctly")
                        }
                        ),
                        this.cloneInfo = {
                            state: "ready",
                            clones: d,
                            cloneMap: a,
                            clonedBindings: l
                        }
                    }
                    ),
                    this.isCreate = t,
                    this.link = i;
                    let {currentPageId: s, selectedIds: n, page: a} = this.app;
                    this.initialSelectedIds = [...n];
                    let r = (i ? ta.getLinkedShapeIds(this.app.state, s, i, !1) : n).map(e=>this.app.getShape(e)).filter(e=>!e.isLocked)
                      , l = new Set(r.map(e=>e.id));
                    this.hasUnlockedShapes = r.length > 0,
                    this.initialShapes = Array.from(new Set(r.filter(e=>!l.has(e.parentId)).flatMap(e=>e.children ? [e, ...e.children.map(e=>this.app.getShape(e))] : [e])).values()),
                    this.initialIds = new Set(this.initialShapes.map(e=>e.id)),
                    this.bindingsToDelete = [],
                    Object.values(a.bindings).filter(e=>this.initialIds.has(e.fromId) || this.initialIds.has(e.toId)).forEach(e=>{
                        this.initialIds.has(e.fromId) && (this.initialIds.has(e.toId) || this.bindingsToDelete.push(e))
                    }
                    ),
                    this.initialParentChildren = {},
                    this.initialShapes.map(e=>e.parentId).filter(e=>e !== a.id).forEach(e=>{
                        this.initialParentChildren[e] = this.app.getShape(e).children
                    }
                    ),
                    this.initialCommonBounds = o.cQ.getCommonBounds(this.initialShapes.map(ta.getRotatedBounds)),
                    this.app.rotationInfo.selectedIds = [...this.app.selectedIds]
                }
            }
            ,
            grid: sr,
            edit: sa
        }
          , sd = e=>sl[e]
          , sh = class extends T {
            constructor(e) {
                super(),
                this.app = e,
                j(this, "type", "select"),
                j(this, "previous"),
                j(this, "status", "idle"),
                j(this, "setStatus", e=>{
                    this.status = e,
                    this.app.setStatus(this.status)
                }
                ),
                j(this, "onEnter", ()=>{
                    this.setStatus("idle")
                }
                ),
                j(this, "onExit", ()=>{
                    this.setStatus("idle")
                }
                ),
                j(this, "onCancel", ()=>{
                    "idle" === this.status ? this.app.selectTool("select") : this.setStatus("idle"),
                    this.app.cancelSession()
                }
                ),
                j(this, "getNextChildIndex", ()=>{
                    let {shapes: e, appState: {currentPageId: t}} = this.app;
                    return 0 === e.length ? 1 : e.filter(e=>e.parentId === t).sort((e,t)=>t.childIndex - e.childIndex)[0].childIndex + 1
                }
                ),
                j(this, "onPinchStart", ()=>{
                    this.app.cancelSession(),
                    this.setStatus("pinching")
                }
                ),
                j(this, "onPinchEnd", ()=>{
                    o.cQ.isMobileSafari() && this.app.undoSelect(),
                    this.setStatus("idle")
                }
                ),
                j(this, "onPinch", (e,t)=>{
                    var i;
                    "pinching" === this.status && (isNaN(e.delta[0]) || isNaN(e.delta[1]) || (this.app.pinchZoom(e.point, e.delta, e.delta[2]),
                    null == (i = this.onPointerMove) || i.call(this, e, t)))
                }
                ),
                j(this, "onKeyDown", e=>{
                    if ("Escape" === e) {
                        this.onCancel();
                        return
                    }
                    if ("Meta" === e || "Control" === e || "Alt" === e) {
                        this.app.updateSession();
                        return
                    }
                }
                ),
                j(this, "onKeyUp", e=>{
                    if ("Meta" === e || "Control" === e || "Alt" === e) {
                        this.app.updateSession();
                        return
                    }
                }
                ),
                j(this, "onPointerMove", ()=>{
                    "creating" === this.status && this.app.updateSession()
                }
                ),
                j(this, "onPointerUp", ()=>{
                    if ("creating" === this.status) {
                        this.app.completeSession();
                        let {isToolLocked: e} = this.app.appState;
                        e || this.app.selectTool("select")
                    }
                    this.setStatus("idle")
                }
                )
            }
        }
          , sp = class extends sh {
            constructor() {
                super(...arguments),
                j(this, "type", "arrow"),
                j(this, "onPointerDown", ()=>{
                    if ("idle" !== this.status)
                        return;
                    let {currentPoint: e, currentGrid: t, settings: {showGrid: i}, appState: {currentPageId: s, currentStyle: n}} = this.app
                      , a = this.getNextChildIndex()
                      , r = o.cQ.uniqueId()
                      , l = iO.create({
                        id: r,
                        parentId: s,
                        childIndex: a,
                        point: i ? u.Z.snap(e, t) : e,
                        style: z({}, n)
                    });
                    this.app.patchCreate([l]),
                    this.app.startSession("arrow", l.id, "end", !0),
                    this.setStatus("creating")
                }
                )
            }
        }
          , sc = class extends sh {
            constructor() {
                super(...arguments),
                j(this, "type", "draw"),
                j(this, "lastShapeId"),
                j(this, "onEnter", ()=>{
                    this.lastShapeId = void 0
                }
                ),
                j(this, "onCancel", ()=>{
                    "idle" === this.status ? this.app.selectTool("select") : this.setStatus("idle"),
                    this.app.cancelSession()
                }
                ),
                j(this, "onPointerDown", e=>{
                    if ("idle" !== this.status || this.app.readOnly)
                        return;
                    let {currentPoint: t, appState: {currentPageId: i, currentStyle: s}} = this.app
                      , n = this.lastShapeId && this.app.getShape(this.lastShapeId);
                    if (e.shiftKey && n)
                        this.app.startSession("draw", n.id),
                        this.setStatus("extending");
                    else {
                        let e = this.getNextChildIndex()
                          , n = o.cQ.uniqueId()
                          , a = iT.create({
                            id: n,
                            parentId: i,
                            childIndex: e,
                            point: t,
                            style: z({}, s)
                        });
                        this.lastShapeId = n,
                        this.app.patchCreate([a]),
                        this.app.startSession("draw", n),
                        this.setStatus("creating")
                    }
                }
                ),
                j(this, "onPointerMove", ()=>{
                    if (!this.app.readOnly)
                        switch (this.status) {
                        case "extending":
                        case "creating":
                            this.app.updateSession()
                        }
                }
                ),
                j(this, "onPointerUp", ()=>{
                    this.app.completeSession(),
                    this.setStatus("idle")
                }
                )
            }
        }
          , su = class extends sh {
            constructor() {
                super(...arguments),
                j(this, "type", "ellipse"),
                j(this, "onPointerDown", ()=>{
                    if (this.app.readOnly || "idle" !== this.status)
                        return;
                    let {currentPoint: e, currentGrid: t, settings: {showGrid: i}, appState: {currentPageId: s, currentStyle: n}} = this.app
                      , a = this.getNextChildIndex()
                      , r = o.cQ.uniqueId()
                      , l = iA.create({
                        id: r,
                        parentId: s,
                        childIndex: a,
                        point: i ? u.Z.snap(e, t) : e,
                        style: z({}, n)
                    });
                    this.app.patchCreate([l]),
                    this.app.startSession("transformSingle", l.id, o.P0.BottomRight, !0),
                    this.setStatus("creating")
                }
                )
            }
        }
          , sg = class extends sh {
            constructor() {
                super(...arguments),
                j(this, "type", "erase"),
                j(this, "status", "idle"),
                j(this, "onPointerDown", ()=>{
                    this.app.readOnly || "idle" === this.status && this.setStatus("pointing")
                }
                ),
                j(this, "onPointerMove", e=>{
                    if (!this.app.readOnly)
                        switch (this.status) {
                        case "pointing":
                            u.Z.dist(e.origin, e.point) > 3 && (this.app.startSession("erase"),
                            this.app.updateSession(),
                            this.setStatus("erasing"));
                            break;
                        case "erasing":
                            this.app.updateSession()
                        }
                }
                ),
                j(this, "onPointerUp", ()=>{
                    if (!this.app.readOnly) {
                        switch (this.status) {
                        case "pointing":
                            {
                                let e = this.app.shapes.filter(e=>!e.isLocked).filter(e=>this.app.getShapeUtil(e).hitTestPoint(e, this.app.currentPoint)).flatMap(e=>e.children ? [e.id, ...e.children] : e.id);
                                this.app.delete(e);
                                break
                            }
                        case "erasing":
                            this.app.completeSession()
                        }
                        this.setStatus("idle")
                    }
                }
                ),
                j(this, "onCancel", ()=>{
                    "idle" === this.status ? this.previous ? this.app.selectTool(this.previous) : this.app.selectTool("select") : this.setStatus("idle"),
                    this.app.cancelSession()
                }
                )
            }
        }
          , sm = class extends sh {
            constructor() {
                super(...arguments),
                j(this, "type", "line"),
                j(this, "onPointerDown", ()=>{
                    if (this.app.readOnly || "idle" !== this.status)
                        return;
                    let {currentPoint: e, currentGrid: t, settings: {showGrid: i}, appState: {currentPageId: s, currentStyle: n}} = this.app
                      , a = this.getNextChildIndex()
                      , r = o.cQ.uniqueId()
                      , l = iO.create({
                        id: r,
                        parentId: s,
                        childIndex: a,
                        point: i ? u.Z.snap(e, t) : e,
                        decorations: {
                            start: void 0,
                            end: void 0
                        },
                        style: z({}, n)
                    });
                    this.app.patchCreate([l]),
                    this.app.startSession("arrow", l.id, "end", !0),
                    this.setStatus("creating")
                }
                )
            }
        }
          , sf = class extends sh {
            constructor() {
                super(...arguments),
                j(this, "type", "rectangle"),
                j(this, "onPointerDown", ()=>{
                    if (this.app.readOnly || "idle" !== this.status)
                        return;
                    let {currentPoint: e, currentGrid: t, settings: {showGrid: i}, appState: {currentPageId: s, currentStyle: n}} = this.app
                      , a = this.getNextChildIndex()
                      , r = o.cQ.uniqueId()
                      , l = iD.create({
                        id: r,
                        parentId: s,
                        childIndex: a,
                        point: i ? u.Z.snap(e, t) : e,
                        style: z({}, n)
                    });
                    this.app.patchCreate([l]),
                    this.app.startSession("transformSingle", l.id, o.P0.BottomRight, !0),
                    this.setStatus("creating")
                }
                )
            }
        }
          , sb = class extends sh {
            constructor() {
                super(...arguments),
                j(this, "type", "select"),
                j(this, "pointedId"),
                j(this, "selectedGroupId"),
                j(this, "pointedHandleId"),
                j(this, "pointedBoundsHandle"),
                j(this, "pointedLinkHandleId"),
                j(this, "onEnter", ()=>{
                    this.setStatus("idle")
                }
                ),
                j(this, "onExit", ()=>{
                    this.setStatus("idle")
                }
                ),
                j(this, "clonePaint", e=>{
                    if (0 === this.app.selectedIds.length)
                        return;
                    let t = this.app.selectedIds.map(e=>this.app.getShape(e))
                      , i = o.cQ.expandBounds(o.cQ.getCommonBounds(t.map(ta.getBounds)), 16)
                      , s = o.cQ.getBoundsCenter(i)
                      , n = [i.width, i.height]
                      , a = [s[0] + n[0] * Math.floor((e[0] + n[0] / 2 - s[0]) / n[0]), s[1] + n[1] * Math.floor((e[1] + n[1] / 2 - s[1]) / n[1])]
                      , r = o.cQ.centerBounds(i, a);
                    this.app.shapes.some(e=>ta.getShapeUtil(e).hitTestBounds(e, r)) || this.app.duplicate(this.app.selectedIds, a)
                }
                ),
                j(this, "getShapeClone", (e,t)=>{
                    let i = this.app.getShape(e)
                      , s = ta.getShapeUtil(i);
                    if (s.canClone) {
                        let e = s.getBounds(i)
                          , n = s.getCenter(i)
                          , a = {
                            top: [e.minX, e.minY - (e.height + 32)],
                            right: [e.maxX + 32, e.minY],
                            bottom: [e.minX, e.maxY + 32],
                            left: [e.minX - (e.width + 32), e.minY],
                            topLeft: [e.minX - (e.width + 32), e.minY - (e.height + 32)],
                            topRight: [e.maxX + 32, e.minY - (e.height + 32)],
                            bottomLeft: [e.minX - (e.width + 32), e.maxY + 32],
                            bottomRight: [e.maxX + 32, e.maxY + 32]
                        }[t];
                        if (0 !== i.rotation) {
                            let t = u.Z.add(a, [e.width / 2, e.height / 2])
                              , s = u.Z.rotWith(t, n, i.rotation || 0);
                            a = u.Z.sub(s, [e.width / 2, e.height / 2])
                        }
                        let r = o.cQ.uniqueId()
                          , l = M(z({}, i), {
                            id: r,
                            point: a
                        });
                        return "sticky" === l.type && (l.text = ""),
                        l
                    }
                }
                ),
                j(this, "onCancel", ()=>{
                    this.app.session ? this.app.cancelSession() : this.selectNone(),
                    this.setStatus("idle")
                }
                ),
                j(this, "onKeyDown", (e,t,i)=>{
                    switch (e) {
                    case "Escape":
                        this.onCancel();
                        break;
                    case "Tab":
                        if (this.app.readOnly)
                            return;
                        if (!this.app.pageState.editingId && "idle" === this.status && 1 === this.app.selectedIds.length) {
                            let[e] = this.app.selectedIds
                              , t = this.getShapeClone(e, "right");
                            t && (this.app.createShapes(t),
                            this.setStatus("idle"),
                            "sticky" === t.type && (this.app.select(t.id),
                            this.app.setEditingId(t.id)))
                        }
                        break;
                    case "Meta":
                    case "Control":
                    case "Alt":
                        this.app.updateSession();
                        break;
                    case "Enter":
                        {
                            if (this.app.readOnly)
                                return;
                            let {pageState: e} = this.app;
                            1 !== e.selectedIds.length || e.editingId || (this.app.setEditingId(e.selectedIds[0]),
                            i.preventDefault())
                        }
                    }
                }
                ),
                j(this, "onKeyUp", (e,t)=>{
                    if ("clonePainting" === this.status && !(t.altKey && t.shiftKey)) {
                        this.setStatus("idle");
                        return
                    }
                    if ("Meta" === e || "Control" === e || "Alt" === e) {
                        this.app.updateSession();
                        return
                    }
                }
                ),
                j(this, "onPointerMove", ()=>{
                    let {originPoint: e, currentPoint: t} = this.app;
                    if (this.app.readOnly && this.app.isPointing) {
                        this.app.session ? this.app.updateSession() : u.Z.dist(e, t) > 3 && (this.app.startSession("brush"),
                        this.setStatus("brushing"));
                        return
                    }
                    switch (this.status) {
                    case "pointingBoundsHandle":
                        if (!this.pointedBoundsHandle)
                            throw Error("No pointed bounds handle");
                        if (u.Z.dist(e, t) > 3) {
                            if ("rotate" === this.pointedBoundsHandle)
                                this.setStatus("rotating"),
                                this.app.startSession("rotate");
                            else if ("center" === this.pointedBoundsHandle || "left" === this.pointedBoundsHandle || "right" === this.pointedBoundsHandle)
                                this.setStatus("translating"),
                                this.app.startSession("translate", !1, this.pointedBoundsHandle);
                            else {
                                this.setStatus("transforming");
                                let e = this.app.selectedIds.flatMap(e=>ta.getDocumentBranch(this.app.state, e, this.app.currentPageId));
                                1 === e.length ? this.app.startSession("transformSingle", e[0], this.pointedBoundsHandle) : this.app.startSession("transform", this.pointedBoundsHandle)
                            }
                            this.app.updateSession()
                        }
                        break;
                    case "pointingCanvas":
                        u.Z.dist(e, t) > 3 && (this.app.startSession("brush"),
                        this.setStatus("brushing"));
                        break;
                    case "pointingClone":
                        u.Z.dist(e, t) > 3 && (this.setStatus("translatingClone"),
                        this.app.startSession("translate"),
                        this.app.updateSession());
                        break;
                    case "pointingBounds":
                        u.Z.dist(e, t) > 3 && (this.setStatus("translating"),
                        this.app.startSession("translate"),
                        this.app.updateSession());
                        break;
                    case "pointingHandle":
                        if (!this.pointedHandleId)
                            throw Error("No pointed handle");
                        if (u.Z.dist(e, t) > 3) {
                            this.setStatus("translatingHandle");
                            let e = this.app.getShape(this.app.selectedIds[0]);
                            e && ("bend" === this.pointedHandleId ? this.app.startSession("handle", e.id, this.pointedHandleId) : this.app.startSession("arrow", e.id, this.pointedHandleId, !1),
                            this.app.updateSession())
                        }
                        break;
                    case "clonePainting":
                        this.clonePaint(t);
                        break;
                    default:
                        this.app.session && this.app.updateSession()
                    }
                }
                ),
                j(this, "onPointerDown", (e,t)=>{
                    if ("canvas" === e.target && "idle" === this.status) {
                        let {currentPoint: i} = this.app;
                        if (!e.spaceKey || 1 !== t.buttons) {
                            if ("idle" === this.status && e.altKey && e.shiftKey) {
                                this.setStatus("clonePainting"),
                                this.clonePaint(i);
                                return
                            }
                            if (!e.shiftKey) {
                                if (this.app.onShapeBlur(),
                                e.altKey && this.app.selectedIds.length > 0) {
                                    this.app.duplicate(this.app.selectedIds, i);
                                    return
                                }
                                this.selectNone()
                            }
                            this.setStatus("pointingCanvas")
                        }
                    }
                }
                ),
                j(this, "onPointerUp", e=>{
                    var t;
                    if ("translatingClone" === this.status || "pointingClone" === this.status) {
                        this.pointedId && (this.app.completeSession(),
                        this.app.setEditingId(this.pointedId)),
                        this.setStatus("idle"),
                        this.pointedId = void 0;
                        return
                    }
                    if ("pointingBounds" === this.status) {
                        if ("bounds" === e.target)
                            this.selectNone();
                        else if (this.app.isSelected(e.target))
                            e.shiftKey ? this.pointedId !== e.target && this.deselect(e.target) : this.pointedId !== e.target && this.app.selectedIds.length > 1 && this.select(e.target);
                        else if (this.pointedId === e.target) {
                            if (this.app.getShape(e.target).isLocked)
                                return;
                            e.shiftKey ? this.pushSelect(e.target) : this.select(e.target)
                        }
                    }
                    this.setStatus("idle"),
                    this.pointedBoundsHandle = void 0,
                    this.pointedHandleId = void 0,
                    this.pointedId = void 0,
                    (null == (t = this.app.session) ? void 0 : t.type) !== "edit" && this.app.completeSession()
                }
                ),
                j(this, "onDoubleClickCanvas", ()=>{
                    this.app.readOnly
                }
                ),
                j(this, "onPointShape", (e,t)=>{
                    if (e.spaceKey && 1 === t.buttons || this.app.getShape(e.target).isLocked)
                        return;
                    let {editingId: i, hoveredId: s} = this.app.pageState;
                    if (i && e.target !== i && this.app.onShapeBlur(),
                    ("idle" === this.status || "pointingBounds" === this.status) && e.metaKey && e.shiftKey && s) {
                        this.pointedId = s,
                        this.app.isSelected(s) ? this.deselect(s) : (this.pushSelect(s),
                        this.setStatus("pointingBounds"));
                        return
                    }
                    if ("pointingBounds" === this.status) {
                        let {parentId: t} = this.app.getShape(e.target);
                        this.pointedId = t === this.app.currentPageId ? e.target : t;
                        return
                    }
                    if ("idle" === this.status) {
                        if (this.setStatus("pointingBounds"),
                        e.metaKey) {
                            e.shiftKey || this.selectNone(),
                            this.app.startSession("brush"),
                            this.setStatus("brushing");
                            return
                        }
                        let t, {parentId: i} = this.app.getShape(e.target);
                        i === this.app.currentPageId ? (t = e.target,
                        this.selectedGroupId = void 0) : i === this.selectedGroupId ? t = e.target : (t = i,
                        this.selectedGroupId = void 0),
                        this.app.isSelected(t) || (this.pointedId = t,
                        e.shiftKey ? this.pushSelect(t) : this.select(t))
                    }
                }
                ),
                j(this, "onDoubleClickShape", e=>{
                    if (this.app.readOnly)
                        return;
                    let t = this.app.getShape(e.target);
                    if (t.isLocked) {
                        this.app.select(e.target);
                        return
                    }
                    ta.getShapeUtil(t.type).canEdit && (t.parentId === this.app.currentPageId || t.parentId === this.selectedGroupId) && this.app.setEditingId(e.target),
                    t.parentId !== this.app.currentPageId && (this.selectedGroupId = t.parentId),
                    this.app.select(e.target)
                }
                ),
                j(this, "onRightPointShape", e=>{
                    this.app.isSelected(e.target) || this.app.select(e.target)
                }
                ),
                j(this, "onHoverShape", e=>{
                    this.app.setHoveredId(e.target)
                }
                ),
                j(this, "onUnhoverShape", e=>{
                    let {currentPageId: t} = this.app;
                    requestAnimationFrame(()=>{
                        t === this.app.currentPageId && this.app.pageState.hoveredId === e.target && this.app.setHoveredId(void 0)
                    }
                    )
                }
                ),
                j(this, "onPointBounds", e=>{
                    if (e.metaKey) {
                        e.shiftKey || this.selectNone(),
                        this.app.startSession("brush"),
                        this.setStatus("brushing");
                        return
                    }
                    this.setStatus("pointingBounds")
                }
                ),
                j(this, "onRightPointBounds", (e,t)=>{
                    t.stopPropagation()
                }
                ),
                j(this, "onReleaseBounds", ()=>{
                    ("translating" === this.status || "brushing" === this.status) && this.app.completeSession(),
                    this.setStatus("idle")
                }
                ),
                j(this, "onPointBoundsHandle", e=>{
                    this.pointedBoundsHandle = e.target,
                    this.setStatus("pointingBoundsHandle")
                }
                ),
                j(this, "onDoubleClickBoundsHandle", e=>{
                    switch (e.target) {
                    case "center":
                    case "left":
                    case "right":
                        this.app.select(...ta.getLinkedShapeIds(this.app.state, this.app.currentPageId, e.target, e.shiftKey));
                        break;
                    default:
                        if (1 === this.app.selectedIds.length) {
                            this.app.resetBounds(this.app.selectedIds);
                            let e = this.app.getShape(this.app.selectedIds[0]);
                            "label"in e && this.app.setEditingId(e.id)
                        }
                    }
                }
                ),
                j(this, "onReleaseBoundsHandle", ()=>{
                    this.setStatus("idle")
                }
                ),
                j(this, "onPointHandle", e=>{
                    this.pointedHandleId = e.target,
                    this.setStatus("pointingHandle")
                }
                ),
                j(this, "onDoubleClickHandle", e=>{
                    if ("bend" === e.target) {
                        let {selectedIds: e} = this.app;
                        if (1 !== e.length)
                            return;
                        let t = this.app.getShape(e[0]);
                        ta.getShapeUtil(t.type).canEdit && (t.parentId === this.app.currentPageId || t.parentId === this.selectedGroupId) && this.app.setEditingId(t.id);
                        return
                    }
                    this.app.toggleDecoration(e.target)
                }
                ),
                j(this, "onReleaseHandle", ()=>{
                    this.setStatus("idle")
                }
                ),
                j(this, "onShapeClone", e=>{
                    let t = this.app.selectedIds[0]
                      , i = this.getShapeClone(t, e.target);
                    "left" === e.target || "right" === e.target || "top" === e.target || "bottom" === e.target ? i && (this.app.createShapes(i),
                    this.pointedId = i.id,
                    this.setStatus("pointingClone")) : (this.setStatus("gridCloning"),
                    this.app.startSession("grid", t))
                }
                )
            }
            deselect(e) {
                this.app.select(...this.app.selectedIds.filter(t=>t !== e))
            }
            select(e) {
                this.app.select(e)
            }
            pushSelect(e) {
                let t = this.app.getShape(e);
                this.app.select(...this.app.selectedIds.filter(e=>e !== t.parentId), e)
            }
            selectNone() {
                this.app.selectNone()
            }
        }
          , sv = class extends sh {
            constructor() {
                super(...arguments),
                j(this, "type", "sticky"),
                j(this, "shapeId"),
                j(this, "onPointerDown", ()=>{
                    if (!this.app.readOnly) {
                        if ("creating" === this.status) {
                            this.setStatus("idle"),
                            this.app.appState.isToolLocked || this.app.selectTool("select");
                            return
                        }
                        if ("idle" === this.status) {
                            let {currentPoint: e, currentGrid: t, settings: {showGrid: i}, appState: {currentPageId: s, currentStyle: n}} = this.app
                              , a = this.getNextChildIndex()
                              , r = o.cQ.uniqueId();
                            this.shapeId = r;
                            let l = iR.create({
                                id: r,
                                parentId: s,
                                childIndex: a,
                                point: i ? u.Z.snap(e, t) : e,
                                style: z({}, n)
                            })
                              , d = iR.getBounds(l);
                            l.point = u.Z.sub(l.point, [d.width / 2, d.height / 2]),
                            this.app.patchCreate([l]),
                            this.app.startSession("translate"),
                            this.setStatus("creating")
                        }
                    }
                }
                ),
                j(this, "onPointerUp", ()=>{
                    this.app.readOnly || "creating" === this.status && (this.setStatus("idle"),
                    this.app.completeSession(),
                    this.app.selectTool("select"),
                    this.app.setEditingId(this.shapeId))
                }
                )
            }
        }
          , sy = class extends sh {
            constructor() {
                super(...arguments),
                j(this, "type", "text"),
                j(this, "stopEditingShape", ()=>{
                    this.setStatus("idle"),
                    this.app.appState.isToolLocked || this.app.selectTool("select")
                }
                ),
                j(this, "onKeyUp", ()=>{}
                ),
                j(this, "onKeyDown", ()=>{}
                ),
                j(this, "onPointerDown", ()=>{
                    if ("creating" === this.status) {
                        this.stopEditingShape();
                        return
                    }
                    if ("idle" === this.status) {
                        let {currentPoint: e, currentGrid: t, settings: {showGrid: i}} = this.app;
                        this.app.createTextShapeAtPoint(i ? u.Z.snap(e, t) : e, void 0, !0),
                        this.setStatus("creating");
                        return
                    }
                }
                ),
                j(this, "onPointerUp", ()=>{}
                ),
                j(this, "onPointShape", e=>{
                    if (this.app.readOnly)
                        return;
                    let t = this.app.getShape(e.target);
                    "text" === t.type && (this.setStatus("idle"),
                    this.app.setEditingId(t.id))
                }
                ),
                j(this, "onShapeBlur", ()=>{
                    this.app.readOnly || this.stopEditingShape()
                }
                )
            }
        }
          , sS = class extends sh {
            constructor() {
                super(...arguments),
                j(this, "type", "triangle"),
                j(this, "onPointerDown", ()=>{
                    if (this.app.readOnly || "idle" !== this.status)
                        return;
                    let {currentPoint: e, currentGrid: t, settings: {showGrid: i}, appState: {currentPageId: s, currentStyle: n}} = this.app
                      , a = this.getNextChildIndex()
                      , r = o.cQ.uniqueId()
                      , l = ij.create({
                        id: r,
                        parentId: s,
                        childIndex: a,
                        point: i ? u.Z.snap(e, t) : e,
                        style: z({}, n)
                    });
                    this.app.patchCreate([l]),
                    this.app.startSession("transformSingle", l.id, o.P0.BottomRight, !0),
                    this.setStatus("creating")
                }
                )
            }
        }
          , sI = o.cQ.uniqueId()
          , sx = class extends iZ {
            constructor(e, t={}) {
                super(sx.defaultState, e, sx.version, (e,t,i)=>iJ(M(z({}, t), {
                    document: M(z(z({}, t.document), e.document), {
                        version: i
                    })
                }), sx.version)),
                j(this, "callbacks", {}),
                j(this, "tools", {
                    select: new sb(this),
                    erase: new sg(this),
                    text: new sy(this),
                    draw: new sc(this),
                    ellipse: new su(this),
                    rectangle: new sf(this),
                    triangle: new sS(this),
                    line: new sm(this),
                    arrow: new sp(this),
                    sticky: new sv(this)
                }),
                j(this, "currentTool", this.tools.select),
                j(this, "session"),
                j(this, "readOnly", !1),
                j(this, "isDirty", !1),
                j(this, "isCreating", !1),
                j(this, "originPoint", [0, 0]),
                j(this, "currentPoint", [0, 0]),
                j(this, "previousPoint", [0, 0]),
                j(this, "shiftKey", !1),
                j(this, "altKey", !1),
                j(this, "metaKey", !1),
                j(this, "ctrlKey", !1),
                j(this, "spaceKey", !1),
                j(this, "isPointing", !1),
                j(this, "isForcePanning", !1),
                j(this, "isPastePrevented", !1),
                j(this, "editingStartTime", -1),
                j(this, "fileSystemHandle", null),
                j(this, "viewport", o.cQ.getBoundsFromPoints([[0, 0], [100, 100]])),
                j(this, "rendererBounds", o.cQ.getBoundsFromPoints([[0, 0], [100, 100]])),
                j(this, "selectHistory", {
                    stack: [[]],
                    pointer: 0
                }),
                j(this, "clipboard"),
                j(this, "rotationInfo", {
                    selectedIds: [],
                    center: [0, 0]
                }),
                j(this, "migrate", e=>iJ(e, sx.version)),
                j(this, "onReady", ()=>{
                    var e, t;
                    this.loadDocument(this.document),
                    i2().then(e=>{
                        this.fileSystemHandle = e
                    }
                    );
                    try {
                        this.patchState(M(z({}, iJ(this.state, sx.version)), {
                            appState: {
                                status: "idle"
                            }
                        }))
                    } catch (e) {
                        console.error("The data appears to be corrupted. Resetting!", e),
                        localStorage.setItem(this.document.id + "_corrupted", JSON.stringify(this.document)),
                        this.patchState(M(z({}, sx.defaultState), {
                            appState: M(z({}, sx.defaultState.appState), {
                                status: "idle"
                            })
                        }))
                    }
                    null == (t = (e = this.callbacks).onMount) || t.call(e, this)
                }
                ),
                j(this, "cleanup", (e,t)=>{
                    var i;
                    let s = z({}, e);
                    s.document !== t.document && Object.entries(s.document.pages).forEach(([e,i])=>{
                        if (void 0 === i) {
                            delete s.document.pages[e],
                            delete s.document.pageStates[e];
                            return
                        }
                        let n = t.document.pages[e]
                          , a = {};
                        if (!n || i.shapes !== n.shapes || i.bindings !== n.bindings) {
                            i.shapes = z({}, i.shapes),
                            i.bindings = z({}, i.bindings);
                            let t = new Set;
                            Object.entries(i.shapes).forEach(([o,r])=>{
                                var l;
                                let d;
                                r ? d = r.parentId : (d = null == (l = null == n ? void 0 : n.shapes[o]) ? void 0 : l.parentId,
                                delete i.shapes[o]),
                                i.id === s.appState.currentPageId && (null == n ? void 0 : n.shapes[o]) !== r && (a[o] = r),
                                d && d !== e && void 0 !== i.shapes[d] && t.add(i.shapes[d])
                            }
                            ),
                            Object.keys(i.bindings).forEach(e=>{
                                i.bindings[e] || delete i.bindings[e]
                            }
                            ),
                            s.document.pages[e] = i;
                            let r = ta.getRelatedBindings(s, Object.keys(a), e)
                              , l = new Set;
                            r.forEach(t=>{
                                if (!i.bindings[t.id])
                                    return;
                                let n = i.shapes[t.toId]
                                  , a = i.shapes[t.fromId];
                                if (!(n && a)) {
                                    delete s.document.pages[e].bindings[t.id];
                                    return
                                }
                                if (l.has(a))
                                    return;
                                let o = ta.updateArrowBindings(i, a);
                                if (l.add(a),
                                o) {
                                    let e = z(z({}, a), o);
                                    i.shapes[a.id] = e
                                }
                            }
                            ),
                            t.forEach(e=>{
                                if (!e)
                                    throw Error("no group!");
                                let t = e.children.filter(e=>void 0 !== i.shapes[e])
                                  , s = o.cQ.getCommonBounds(t.map(e=>i.shapes[e]).filter(Boolean).map(e=>ta.getRotatedBounds(e)));
                                i.shapes[e.id] = M(z({}, e), {
                                    point: [s.minX, s.minY],
                                    size: [s.width, s.height],
                                    children: t
                                })
                            }
                            )
                        }
                        let r = z({}, s.document.pageStates[e]);
                        r.brush || delete r.brush,
                        r.hoveredId && !i.shapes[r.hoveredId] && delete r.hoveredId,
                        r.bindingId && !i.bindings[r.bindingId] && (ta.warn(`Could not find the binding of ${e}`),
                        delete r.bindingId),
                        r.editingId && !i.shapes[r.editingId] && (ta.warn("Could not find the editing shape!"),
                        delete r.editingId),
                        s.document.pageStates[e] = r
                    }
                    ),
                    Object.keys(null != (i = s.document.assets) ? i : {}).forEach(e=>{
                        var t, i;
                        (null == (t = s.document.assets) ? void 0 : t[e]) || null == (i = s.document.assets) || delete i[e]
                    }
                    );
                    let n = s.appState.currentPageId
                      , a = s.document.pageStates[n];
                    if (s.room && s.room !== t.room) {
                        let e = M(z({}, s.room), {
                            users: z({}, s.room.users)
                        });
                        t.room && Object.values(t.room.users).filter(Boolean).forEach(t=>{
                            void 0 === e.users[t.id] && delete e.users[t.id]
                        }
                        ),
                        s.room = e
                    }
                    return s.room && (s.room.users[s.room.userId] = M(z({}, s.room.users[s.room.userId]), {
                        point: this.currentPoint,
                        selectedIds: a.selectedIds
                    })),
                    this.readOnly && (s.document.pages = t.document.pages),
                    s
                }
                ),
                j(this, "broadcastPatch", (e,t)=>{
                    var i, s, n, a, o, r, l, d, h;
                    let p = {}
                      , c = {}
                      , u = {}
                      , g = null == (n = null == (s = null == (i = null == e ? void 0 : e.document) ? void 0 : i.pages) ? void 0 : s[this.currentPageId]) ? void 0 : n.shapes
                      , m = null == (r = null == (o = null == (a = null == e ? void 0 : e.document) ? void 0 : a.pages) ? void 0 : o[this.currentPageId]) ? void 0 : r.bindings
                      , f = null == (l = null == e ? void 0 : e.document) ? void 0 : l.assets;
                    g && Object.keys(g).forEach(e=>{
                        p[e] = this.getShape(e, this.currentPageId)
                    }
                    ),
                    m && Object.keys(m).forEach(e=>{
                        c[e] = this.getBinding(e, this.currentPageId)
                    }
                    ),
                    f && Object.keys(f).forEach(e=>{
                        u[e] = this.document.assets[e]
                    }
                    ),
                    null == (h = (d = this.callbacks).onChangePage) || h.call(d, this, p, c, u, t)
                }
                ),
                j(this, "onPatch", (e,t,i)=>{
                    var s, n, a, o, r, l;
                    (this.callbacks.onChangePage && (null == (n = null == (s = null == t ? void 0 : t.document) ? void 0 : s.pages) ? void 0 : n[this.currentPageId]) || (null == (a = null == t ? void 0 : t.document) ? void 0 : a.assets)) && ((null == (o = null == t ? void 0 : t.document) ? void 0 : o.assets) || this.session && "brush" !== this.session.type && "erase" !== this.session.type && "draw" !== this.session.type) && this.broadcastPatch(t, !1),
                    null == (l = (r = this.callbacks).onPatch) || l.call(r, this, t, i)
                }
                ),
                j(this, "onCommand", (e,t,i)=>{
                    var s, n;
                    this.clearSelectHistory(),
                    this.isDirty = !0,
                    null == (n = (s = this.callbacks).onCommand) || n.call(s, this, t, i)
                }
                ),
                j(this, "onReplace", ()=>{
                    this.clearSelectHistory(),
                    this.isDirty = !1
                }
                ),
                j(this, "onUndo", ()=>{
                    var e, t;
                    this.rotationInfo.selectedIds = [...this.selectedIds],
                    null == (t = (e = this.callbacks).onUndo) || t.call(e, this)
                }
                ),
                j(this, "onRedo", ()=>{
                    var e, t;
                    this.rotationInfo.selectedIds = [...this.selectedIds],
                    null == (t = (e = this.callbacks).onRedo) || t.call(e, this)
                }
                ),
                j(this, "onPersist", (e,t)=>{
                    var i, s;
                    null == (s = (i = this.callbacks).onPersist) || s.call(i, this),
                    this.broadcastPatch(t, !0)
                }
                ),
                j(this, "prevSelectedIds", this.selectedIds),
                j(this, "onStateDidChange", (e,t)=>{
                    var i, s, n, a;
                    null == (s = (i = this.callbacks).onChange) || s.call(i, this, t),
                    this.room && this.selectedIds !== this.prevSelectedIds && (null == (a = (n = this.callbacks).onChangePresence) || a.call(n, this, M(z({}, this.room.users[this.room.userId]), {
                        selectedIds: this.selectedIds,
                        session: !!this.session
                    })),
                    this.prevSelectedIds = this.selectedIds)
                }
                ),
                j(this, "preventPaste", ()=>{
                    if (this.isPastePrevented)
                        return;
                    let e = e=>e.stopImmediatePropagation();
                    document.addEventListener("paste", e, {
                        capture: !0
                    }),
                    window.addEventListener("pointerup", ()=>{
                        setTimeout(()=>{
                            document.removeEventListener("paste", e, {
                                capture: !0
                            }),
                            this.isPastePrevented = !1
                        }
                        , 50)
                    }
                    , {
                        once: !0
                    }),
                    this.isPastePrevented = !0
                }
                ),
                j(this, "justSent", !1),
                j(this, "getReservedContent", (e,t=this.currentPageId)=>{
                    let {bindings: i} = this.document.pages[t]
                      , s = {}
                      , n = {}
                      , a = Object.values(i)
                      , o = [new Map(a.map(e=>[e.toId, e])), new Map(a.map(e=>[e.fromId, e]))]
                      , r = [];
                    this.session && e.forEach(e=>r.push(e)),
                    this.pageState.editingId && r.push(this.pageState.editingId);
                    let l = new Set(r)
                      , d = new Set;
                    for (; r.length > 0; ) {
                        let e = r.pop();
                        if (!e)
                            break;
                        if (d.has(e))
                            continue;
                        d.add(e);
                        let i = this.getShape(e);
                        s[e] = i,
                        i.parentId !== t && r.push(i.parentId),
                        i.children && r.push(...i.children),
                        o.map(e=>e.get(i.id)).filter(Boolean).forEach(e=>{
                            n[e.id] = e,
                            r.push(e.toId, e.fromId)
                        }
                        )
                    }
                    return {
                        reservedShapes: s,
                        reservedBindings: n,
                        strongReservedShapeIds: l
                    }
                }
                ),
                j(this, "replacePageContent", (e,t,i,s=this.currentPageId)=>{
                    if (this.justSent)
                        return this.justSent = !1,
                        this;
                    let n = this.document.pages[this.currentPageId];
                    return Object.values(e).forEach(t=>{
                        t.parentId === s || n.shapes[t.parentId] || e[t.parentId] || (console.warn("Added a shape without a parent on the page"),
                        t.parentId = s)
                    }
                    ),
                    this.useStore.setState(n=>{
                        let {hoveredId: a, editingId: r, bindingId: l, selectedIds: d} = n.document.pageStates[s]
                          , h = [...d]
                          , p = r && n.document.pages[this.currentPageId].shapes[r];
                        p && h.push(p.id);
                        let {reservedShapes: c, reservedBindings: u, strongReservedShapeIds: g} = this.getReservedContent(h, this.currentPageId);
                        Object.values(c).filter(e=>!("text"in e)).forEach(t=>{
                            let i = e[t.id];
                            if (i) {
                                if (!("arrow" === t.type || g.has(t.id))) {
                                    e[t.id] = i;
                                    return
                                }
                                "decorations"in i && "decorations"in t && (e[t.id] = M(z({}, t), {
                                    decorations: i.decorations
                                })),
                                t.style = i.style
                            }
                        }
                        );
                        let m = z(z({}, e), c);
                        p && (m[p.id] = p);
                        let f = z(z({}, t), u)
                          , b = z({}, i)
                          , v = M(z({}, n), {
                            document: M(z({}, n.document), {
                                pages: {
                                    [s]: M(z({}, n.document.pages[s]), {
                                        shapes: m,
                                        bindings: f
                                    })
                                },
                                assets: b,
                                pageStates: M(z({}, n.document.pageStates), {
                                    [s]: M(z({}, n.document.pageStates[s]), {
                                        selectedIds: d.filter(e=>void 0 !== m[e]),
                                        hoveredId: a ? void 0 === m[a] ? void 0 : a : void 0,
                                        editingId: r,
                                        bindingId: l ? void 0 === f[l] ? void 0 : l : void 0
                                    })
                                })
                            })
                        })
                          , y = v.document.pages[s]
                          , S = ta.getRelatedBindings(v, Object.keys(m), s)
                          , I = new Set;
                        return S.forEach(e=>{
                            if (!y.bindings[e.id])
                                return;
                            let t = y.shapes[e.fromId];
                            if (I.has(t))
                                return;
                            let i = ta.updateArrowBindings(y, t);
                            if (I.add(t),
                            i) {
                                let e = z(z({}, t), i);
                                y.shapes[t.id] = e
                            }
                        }
                        ),
                        Object.values(m).forEach(e=>{
                            if ("group" !== e.type)
                                return;
                            let t = e.children.filter(e=>void 0 !== y.shapes[e])
                              , i = o.cQ.getCommonBounds(t.map(e=>y.shapes[e]).filter(Boolean).map(e=>ta.getRotatedBounds(e)));
                            y.shapes[e.id] = M(z({}, e), {
                                point: [i.minX, i.minY],
                                size: [i.width, i.height],
                                children: t
                            })
                        }
                        ),
                        this.state.document = v.document,
                        v
                    }
                    , !0),
                    this
                }
                ),
                j(this, "updateBounds", e=>{
                    this.rendererBounds = e;
                    let {point: t, zoom: i} = this.camera;
                    this.updateViewport(t, i),
                    !this.readOnly && this.session && this.session.update()
                }
                ),
                j(this, "updateViewport", (e,t)=>{
                    let {width: i, height: s} = this.rendererBounds
                      , [n,a] = u.B.sub(u.B.div([0, 0], t), e)
                      , [o,r] = u.B.sub(u.B.div([i, s], t), e);
                    this.viewport = {
                        minX: n,
                        minY: a,
                        maxX: o,
                        maxY: r,
                        height: o - n,
                        width: r - a
                    }
                }
                ),
                j(this, "setEditingId", (e,t=!1)=>{
                    if (!this.readOnly) {
                        if (e)
                            this.startSession("edit", e, t);
                        else {
                            if (!this.pageState.editingId)
                                return;
                            this.completeSession()
                        }
                        this.editingStartTime = performance.now(),
                        this.patchState({
                            document: {
                                pageStates: {
                                    [this.currentPageId]: {
                                        editingId: e
                                    }
                                }
                            }
                        }, "set_editing_id")
                    }
                }
                ),
                j(this, "setHoveredId", e=>{
                    this.patchState({
                        document: {
                            pageStates: {
                                [this.currentPageId]: {
                                    hoveredId: e
                                }
                            }
                        }
                    }, "set_hovered_id")
                }
                ),
                j(this, "setSetting", (e,t)=>{
                    if (this.session)
                        return this;
                    let i = {
                        settings: {
                            [e]: "function" == typeof t ? t(this.settings[e]) : t
                        }
                    };
                    return this.patchState(i, `settings:${e}`),
                    this.persist(i),
                    this
                }
                ),
                j(this, "toggleFocusMode", ()=>{
                    if (this.session)
                        return this;
                    let e = {
                        settings: {
                            isFocusMode: !this.settings.isFocusMode
                        }
                    };
                    return this.patchState(e, "settings:toggled_focus_mode"),
                    this.persist(e),
                    this
                }
                ),
                j(this, "togglePenMode", ()=>{
                    if (this.session)
                        return this;
                    let e = {
                        settings: {
                            isPenMode: !this.settings.isPenMode
                        }
                    };
                    return this.patchState(e, "settings:toggled_pen_mode"),
                    this.persist(e),
                    this
                }
                ),
                j(this, "toggleDarkMode", ()=>{
                    if (this.session)
                        return this;
                    let e = {
                        settings: {
                            isDarkMode: !this.settings.isDarkMode
                        }
                    };
                    return this.patchState(e, "settings:toggled_dark_mode"),
                    this.persist(e),
                    this
                }
                ),
                j(this, "toggleZoomSnap", ()=>{
                    if (this.session)
                        return this;
                    let e = {
                        settings: {
                            isZoomSnap: !this.settings.isZoomSnap
                        }
                    };
                    return this.patchState(e, "settings:toggled_zoom_snap"),
                    this.persist(e),
                    this
                }
                ),
                j(this, "toggleDebugMode", ()=>{
                    if (this.session)
                        return this;
                    let e = {
                        settings: {
                            isDebugMode: !this.settings.isDebugMode
                        }
                    };
                    return this.patchState(e, "settings:toggled_debug"),
                    this.persist(e),
                    this
                }
                ),
                j(this, "setMenuOpen", e=>{
                    let t = {
                        appState: {
                            isMenuOpen: e
                        }
                    };
                    return this.patchState(t, "ui:toggled_menu_opened"),
                    this.persist(t),
                    this
                }
                ),
                j(this, "setIsLoading", e=>{
                    let t = {
                        appState: {
                            isLoading: e
                        }
                    };
                    return this.patchState(t, "ui:toggled_is_loading"),
                    this.persist(t),
                    this
                }
                ),
                j(this, "setDisableAssets", e=>(this.patchState({
                    appState: {
                        disableAssets: e
                    }
                }, "ui:toggled_disable_images"),
                this)),
                j(this, "toggleGrid", ()=>{
                    if (this.session)
                        return this;
                    let e = {
                        settings: {
                            showGrid: !this.settings.showGrid
                        }
                    };
                    return this.patchState(e, "settings:toggled_grid"),
                    this.persist(e),
                    this
                }
                ),
                j(this, "selectTool", e=>{
                    if (this.readOnly || this.session)
                        return this;
                    this.isPointing = !1;
                    let t = this.tools[e];
                    return t === this.currentTool ? (this.patchState({
                        appState: {
                            isToolLocked: !1
                        }
                    }),
                    this) : (this.currentTool.onExit(),
                    t.previous = this.currentTool.type,
                    this.currentTool = t,
                    this.currentTool.onEnter(),
                    this.patchState({
                        appState: {
                            activeTool: e,
                            isToolLocked: !1
                        }
                    }, `selected_tool:${e}`))
                }
                ),
                j(this, "toggleToolLock", ()=>this.session ? this : this.patchState({
                    appState: {
                        isToolLocked: !this.appState.isToolLocked
                    }
                }, "toggled_tool_lock")),
                j(this, "resetDocument", ()=>(this.session || (this.session = void 0,
                this.currentTool = this.tools.select,
                sx.defaultDocument.pages.page.name = "Page 1",
                this.resetHistory().clearSelectHistory().loadDocument(sx.defaultDocument).persist({})),
                this)),
                j(this, "updateUsers", (e,t=!1)=>{
                    this.patchState({
                        room: {
                            users: Object.fromEntries(e.map(e=>[e.id, e]))
                        }
                    }, t ? "room:self:update" : "room:user:update")
                }
                ),
                j(this, "removeUser", e=>{
                    this.patchState({
                        room: {
                            users: {
                                [e]: void 0
                            }
                        }
                    })
                }
                ),
                j(this, "mergeDocument", e=>{
                    if (this.document.id !== e.id)
                        return this.replaceState(M(z({}, iJ(M(z({}, this.state), {
                            document: e
                        }), sx.version)), {
                            appState: M(z({}, this.appState), {
                                currentPageId: Object.keys(e.pages)[0]
                            })
                        })),
                        this;
                    let t = z({}, this.document.pageStates)
                      , i = M(z({}, this.appState), {
                        currentPageId: e.pages[this.currentPageId] ? this.currentPageId : Object.keys(e.pages)[0],
                        pages: Object.values(e.pages).map((e,t)=>({
                            id: e.id,
                            name: e.name,
                            childIndex: e.childIndex || t
                        }))
                    });
                    this.resetHistory(),
                    Object.keys(this.document.pages).forEach(i=>{
                        e.pages[i] || (i === this.appState.currentPageId && (this.cancelSession(),
                        this.selectNone()),
                        t[i] = void 0)
                    }
                    ),
                    this.session && this.selectedIds.filter(t=>!e.pages[this.currentPageId].shapes[t]).forEach(t=>e.pages[this.currentPageId].shapes[t] = this.page.shapes[t]),
                    Object.entries(t).forEach(([t,i])=>{
                        i.selectedIds = i.selectedIds.filter(i=>!!e.pages[t].shapes[i])
                    }
                    );
                    let {editingId: s} = this.pageState;
                    return s && (e.pages[this.currentPageId].shapes[s] = this.page.shapes[s],
                    t[this.currentPageId].selectedIds = [s]),
                    this.replaceState(M(z({}, iJ(M(z({}, this.state), {
                        document: M(z({}, e), {
                            pageStates: t
                        })
                    }), sx.version)), {
                        appState: i
                    }), "merge")
                }
                ),
                j(this, "updateDocument", (e,t="updated_document")=>{
                    let i = this.state
                      , s = M(z({}, i), {
                        document: M(z({}, i.document), {
                            assets: e.assets
                        })
                    });
                    e.pages[this.currentPageId] || (s.appState = M(z({}, i.appState), {
                        currentPageId: Object.keys(e.pages)[0]
                    }));
                    let n = 1;
                    for (let t of Object.values(e.pages))
                        t !== i.document.pages[t.id] && (s.document.pages[t.id] = t,
                        t.name || (s.document.pages[t.id].name = `Page ${n + 1}`,
                        n++));
                    for (let t of Object.values(e.pageStates))
                        if (t !== i.document.pageStates[t.id]) {
                            s.document.pageStates[t.id] = t;
                            let i = e.pages[t.id];
                            for (let e of ["bindingId", "editingId", "hoveredId", "pointedId"])
                                i.shapes[e] || (t[e] = void 0);
                            t.selectedIds = t.selectedIds.filter(t=>!!e.pages[i.id].shapes[t])
                        }
                    return this.replaceState(iJ(s, s.document.version || 0), `${t}:${e.id}`)
                }
                ),
                j(this, "loadRoom", e=>(this.patchState({
                    room: {
                        id: e,
                        userId: sI,
                        users: {
                            [sI]: {
                                id: sI,
                                color: eS[Math.floor(Math.random() * eS.length)],
                                point: [100, 100],
                                selectedIds: [],
                                activeShapes: []
                            }
                        }
                    }
                }),
                this)),
                j(this, "loadDocument", e=>{
                    this.setIsLoading(!0),
                    this.selectNone(),
                    this.resetHistory(),
                    this.clearSelectHistory(),
                    this.session = void 0;
                    let t = M(z({}, sx.defaultState), {
                        settings: z({}, this.state.settings),
                        document: e,
                        appState: M(z(z({}, sx.defaultState.appState), this.state.appState), {
                            currentPageId: Object.keys(e.pages)[0],
                            disableAssets: this.disableAssets
                        })
                    });
                    this.replaceState(iJ(t, sx.version), "loaded_document");
                    let {point: i, zoom: s} = this.camera;
                    return this.updateViewport(i, s),
                    this.setIsLoading(!1),
                    this
                }
                ),
                j(this, "loadPageFromURL", (e,t)=>{
                    let i = e.id
                      , s = M(z({}, this.state.document), {
                        pageStates: M(z({}, this.state.document.pageStates), {
                            [i]: t
                        }),
                        pages: M(z({}, this.document.pages), {
                            [i]: e
                        })
                    });
                    this.loadDocument(s),
                    this.persist({})
                }
                ),
                j(this, "newProject", ()=>{
                    this.isLocal && (this.fileSystemHandle = null,
                    this.resetDocument())
                }
                ),
                j(this, "saveProject", ()=>A(this, null, function*() {
                    if (this.readOnly)
                        return;
                    let e = yield i3(iJ(this.state, sx.version).document, this.fileSystemHandle);
                    return this.fileSystemHandle = e,
                    this.persist({}),
                    this.isDirty = !1,
                    this
                })),
                j(this, "saveProjectAs", e=>A(this, null, function*() {
                    try {
                        let t = yield i3(this.document, null, e);
                        this.fileSystemHandle = t,
                        this.persist({}),
                        this.isDirty = !1
                    } catch (e) {
                        console.error(e.message)
                    }
                    return this
                })),
                j(this, "openProject", ()=>A(this, null, function*() {
                    if (this.isLocal)
                        try {
                            let e = yield i4();
                            if (!e)
                                throw Error();
                            let {fileHandle: t, document: i} = e;
                            this.loadDocument(i),
                            this.fileSystemHandle = t,
                            this.zoomToFit(),
                            this.persist({})
                        } catch (e) {
                            console.error(e)
                        } finally {
                            this.persist({})
                        }
                })),
                j(this, "openAsset", ()=>A(this, null, function*() {
                    if (!this.disableAssets)
                        try {
                            let e = yield i6();
                            if (Array.isArray(e))
                                this.addMediaFromFiles(e, this.centerPoint);
                            else {
                                if (!e)
                                    return;
                                this.addMediaFromFiles([e])
                            }
                        } catch (e) {
                            console.error(e)
                        } finally {
                            this.persist({})
                        }
                })),
                j(this, "signOut", ()=>{}
                ),
                j(this, "getAppState", ()=>this.appState),
                j(this, "getPage", (e=this.currentPageId)=>ta.getPage(this.state, e || this.currentPageId)),
                j(this, "getShapes", (e=this.currentPageId)=>ta.getShapes(this.state, e || this.currentPageId)),
                j(this, "getBindings", (e=this.currentPageId)=>ta.getBindings(this.state, e || this.currentPageId)),
                j(this, "getShape", (e,t=this.currentPageId)=>ta.getShape(this.state, e, t)),
                j(this, "getShapeBounds", (e,t=this.currentPageId)=>ta.getBounds(this.getShape(e, t))),
                j(this, "getBinding", (e,t=this.currentPageId)=>ta.getBinding(this.state, e, t)),
                j(this, "getPageState", (e=this.currentPageId)=>ta.getPageState(this.state, e || this.currentPageId)),
                j(this, "getPagePoint", (e,t=this.currentPageId)=>{
                    let {camera: i} = this.getPageState(t);
                    return u.B.sub(u.B.div(e, i.zoom), i.point)
                }
                ),
                j(this, "createPage", (e,t)=>{
                    if (this.readOnly)
                        return this;
                    let {width: i, height: s} = this.rendererBounds;
                    return this.setState(function(e, t, i=o.cQ.uniqueId(), s="Page") {
                        let {currentPageId: n} = e
                          , a = Object.values(e.state.document.pages).sort((e,t)=>{
                            var i, s;
                            return (null != (i = e.childIndex) ? i : 0) - (null != (s = t.childIndex) ? s : 0)
                        }
                        )
                          , r = a[a.length - 1]
                          , l = (null == r ? void 0 : r.childIndex) ? (null == r ? void 0 : r.childIndex) + 1 : 1
                          , d = {
                            id: i,
                            name: function(e, t) {
                                var i;
                                let s = e
                                  , n = new Set(t);
                                for (; n.has(s); )
                                    s = (null == (i = /^.*(\d+)$/.exec(s)) ? void 0 : i[1]) ? s.replace(/(\d+)(?=\D?)$/, e=>(+e + 1).toString()) : `${s} 1`;
                                return s
                            }(s, a.map(e=>{
                                var t;
                                return null != (t = e.name) ? t : ""
                            }
                            )),
                            childIndex: l,
                            shapes: {},
                            bindings: {}
                        };
                        return {
                            id: "create_page",
                            before: {
                                appState: {
                                    currentPageId: n
                                },
                                document: {
                                    pages: {
                                        [i]: void 0
                                    },
                                    pageStates: {
                                        [i]: void 0
                                    }
                                }
                            },
                            after: {
                                appState: {
                                    currentPageId: d.id
                                },
                                document: {
                                    pages: {
                                        [i]: d
                                    },
                                    pageStates: {
                                        [i]: {
                                            id: i,
                                            selectedIds: [],
                                            camera: {
                                                point: t,
                                                zoom: 1
                                            },
                                            editingId: void 0,
                                            bindingId: void 0,
                                            hoveredId: void 0,
                                            pointedId: void 0
                                        }
                                    }
                                }
                            }
                        }
                    }(this, [-i / 2, -s / 2], e, t))
                }
                ),
                j(this, "changePage", e=>this.setState({
                    id: "change_page",
                    before: {
                        appState: {
                            currentPageId: this.currentPageId
                        }
                    },
                    after: {
                        appState: {
                            currentPageId: e
                        }
                    }
                })),
                j(this, "movePage", (e,t)=>this.readOnly ? this : this.setState(function(e, t, i) {
                    let {pages: s} = e.document
                      , n = s[t]
                      , a = Object.values(s).sort((e,t)=>{
                        var i, s;
                        return (null != (i = e.childIndex) ? i : 0) - (null != (s = t.childIndex) ? s : 0)
                    }
                    )
                      , o = a.indexOf(n)
                      , r = [...a];
                    return r.splice(o, 1),
                    r.splice(i > o ? i - 1 : i, 0, n),
                    {
                        id: "move_page",
                        before: {
                            document: {
                                pages: Object.fromEntries(a.map(e=>[e.id, {
                                    childIndex: e.childIndex
                                }]))
                            }
                        },
                        after: {
                            document: {
                                pages: Object.fromEntries(r.map((e,t)=>[e.id, {
                                    childIndex: t
                                }]))
                            }
                        }
                    }
                }(this, e, t))),
                j(this, "renamePage", (e,t)=>this.readOnly ? this : this.setState(function(e, t, i) {
                    let {page: s} = e;
                    return {
                        id: "rename_page",
                        before: {
                            document: {
                                pages: {
                                    [t]: {
                                        name: s.name
                                    }
                                }
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [t]: {
                                        name: i
                                    }
                                }
                            }
                        }
                    }
                }(this, e, t))),
                j(this, "duplicatePage", e=>this.readOnly ? this : this.setState(function(e, t) {
                    let {currentPageId: i, pageState: {camera: s}} = e
                      , n = e.document.pages[t]
                      , a = o.cQ.uniqueId()
                      , r = M(z({}, n), {
                        id: a,
                        name: n.name + " Copy",
                        shapes: Object.fromEntries(Object.entries(n.shapes).map(([e,t])=>[e, M(z({}, t), {
                            parentId: t.parentId === n.id ? a : t.parentId
                        })]))
                    });
                    return {
                        id: "duplicate_page",
                        before: {
                            appState: {
                                currentPageId: i
                            },
                            document: {
                                pages: {
                                    [a]: void 0
                                },
                                pageStates: {
                                    [a]: void 0
                                }
                            }
                        },
                        after: {
                            appState: {
                                currentPageId: a
                            },
                            document: {
                                pages: {
                                    [a]: r
                                },
                                pageStates: {
                                    [a]: M(z({}, n), {
                                        id: a,
                                        selectedIds: [],
                                        camera: z({}, s),
                                        editingId: void 0,
                                        bindingId: void 0,
                                        hoveredId: void 0,
                                        pointedId: void 0
                                    })
                                }
                            }
                        }
                    }
                }(this, e))),
                j(this, "deletePage", e=>this.readOnly ? this : Object.values(this.document.pages).length <= 1 ? this : this.setState(function(e, t) {
                    let {currentPageId: i, document: {pages: s, pageStates: n}} = e, a = Object.values(s).sort((e,t)=>(e.childIndex || 0) - (t.childIndex || 0)), o = a.findIndex(e=>e.id === t), r;
                    return r = t === i ? o === a.length - 1 ? a[a.length - 2].id : a[o + 1].id : i,
                    {
                        id: "delete_page",
                        before: {
                            appState: {
                                currentPageId: t
                            },
                            document: {
                                pages: {
                                    [t]: z({}, s[t])
                                },
                                pageStates: {
                                    [t]: z({}, n[t])
                                }
                            }
                        },
                        after: {
                            appState: {
                                currentPageId: r
                            },
                            document: {
                                pages: {
                                    [t]: void 0
                                },
                                pageStates: {
                                    [t]: void 0
                                }
                            }
                        }
                    }
                }(this, e || this.currentPageId))),
                j(this, "cut", (e=this.selectedIds,t)=>(null == t || t.preventDefault(),
                this.copy(e, t),
                this.readOnly || this.delete(e),
                this)),
                j(this, "copy", (e=this.selectedIds,t)=>{
                    var i;
                    null == t || t.preventDefault(),
                    this.clipboard = this.getContent(e);
                    let s = `<tldraw>${JSON.stringify(z({
                        type: "tldr/clipboard"
                    }, this.clipboard))}</tldraw>`;
                    return function(e) {
                        A(this, null, function*() {
                            return (0,
                            f.t8)(iU, e)
                        })
                    }(s),
                    t && (null == (i = t.clipboardData) || i.setData("text/html", s)),
                    navigator.clipboard && window.ClipboardItem && navigator.clipboard.write([new ClipboardItem({
                        "text/html": new Blob([s],{
                            type: "text/html"
                        })
                    })]),
                    this
                }
                ),
                j(this, "paste", (e,t)=>A(this, null, function*() {
                    var i, s;
                    if (this.readOnly)
                        return;
                    let n = [], a = [], r, l = e=>A(this, null, function*() {
                        let t = document.createElement("div");
                        t.innerHTML = e;
                        let i = t.firstChild;
                        i.style.setProperty("background-color", "transparent");
                        let s = yield ta.getImageForSvg(i, "svg", {
                            scale: 1,
                            quality: 1
                        });
                        if (s) {
                            let e = new File([s],"image.svg");
                            n.push(e)
                        } else
                            d(e)
                    }), d = t=>{
                        let i = this.getPagePoint(null != e ? e : this.centerPoint, this.currentPageId)
                          , s = t.includes(`
`);
                        a.push(ta.getShapeUtil("text").getShape({
                            id: o.cQ.uniqueId(),
                            type: "text",
                            parentId: this.appState.currentPageId,
                            text: ta.normalizeText(t.trim()),
                            point: i,
                            style: M(z({}, this.appState.currentStyle), {
                                textAlign: s ? "start" : this.appState.currentStyle.textAlign
                            })
                        }))
                    }
                    , h = e=>{
                        var t;
                        try {
                            let i = null == (t = e.match(/<tldraw>(.*)<\/tldraw>/)) ? void 0 : t[1];
                            if (!i)
                                return;
                            let s = JSON.parse(i);
                            if ("tldr/clipboard" === s.type) {
                                r = s;
                                return
                            }
                            throw Error("Not tldraw data!")
                        } catch (t) {
                            d(e)
                        }
                    }
                    ;
                    if (void 0 !== t) {
                        let e = Array.from(null != (s = null == (i = t.clipboardData) ? void 0 : i.items) ? s : []);
                        yield Promise.all(e.map(e=>A(this, null, function*() {
                            var t;
                            let {type: i, kind: s} = e;
                            switch (s) {
                            case "string":
                                {
                                    let s = yield new Promise(t=>e.getAsString(t));
                                    switch (i) {
                                    case "text/html":
                                        if (null == (t = s.match(/<tldraw>(.*)<\/tldraw>/)) ? void 0 : t[1]) {
                                            h(s);
                                            return
                                        }
                                        break;
                                    case "text/plain":
                                        s.startsWith("<svg") ? yield l(s) : d(s)
                                    }
                                    break
                                }
                            case "file":
                                {
                                    let t = e.getAsFile();
                                    t && n.push(t)
                                }
                            }
                        })))
                    }
                    if (r)
                        return this.insertContent(r, {
                            point: e,
                            select: !0
                        }),
                        this;
                    if (n.length)
                        return this.addMediaFromFiles(n, e),
                        this;
                    if (a.length) {
                        let t = this.getPagePoint(null != e ? e : this.centerPoint, this.currentPageId)
                          , i = u.B.add(t, [0, 0]);
                        return a.forEach((e,t)=>{
                            let s = ta.getBounds(e);
                            0 === t && (i[0] -= s.width / 2,
                            i[1] -= s.height / 2),
                            e.point = [...i],
                            i[0] += s.width
                        }
                        ),
                        this.createShapes(...a),
                        this
                    }
                    return this.clipboard ? this.insertContent(this.clipboard) : (function() {
                        return A(this, null, function*() {
                            return (0,
                            f.U2)(iU)
                        })
                    }
                    )().then(e=>{
                        e && h(e)
                    }
                    ),
                    this
                })),
                j(this, "getSvg", (...e)=>A(this, [...e], function*(e=this.selectedIds.length ? this.selectedIds : Object.keys(this.page.shapes), t={}) {
                    if (0 === e.length)
                        return;
                    let i = document.createElementNS("http://www.w3.org/2000/svg", "svg")
                      , s = document.createElementNS("http://www.w3.org/2000/svg", "defs")
                      , n = document.createElementNS("http://www.w3.org/2000/svg", "style");
                    if ("undefined" != typeof window && window.focus(),
                    t.includeFonts)
                        try {
                            let {fonts: e} = yield fetch(sx.assetSrc, {
                                mode: "no-cors"
                            }).then(e=>e.json());
                            n.textContent = `
          @font-face {
            font-family: 'Caveat Brush';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${e.caveat}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Source Code Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${e.source_code_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Source Sans Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${e.source_sans_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Crimson Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${e.crimson_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          `
                        } catch (e) {
                            ta.warn("Could not find tldraw-assets.json file.")
                        }
                    else
                        n.textContent = "@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Source+Code+Pro&family=Source+Sans+Pro&family=Crimson+Pro&display=block');";
                    s.append(n),
                    i.append(s);
                    let a = e.map(e=>this.getShape(e, this.currentPageId)).sort((e,t)=>e.childIndex - t.childIndex)
                      , r = o.cQ.getCommonBounds(a.map(ta.getRotatedBounds))
                      , l = t.padding || 16
                      , d = e=>{
                        let t = ta.getShapeUtil(e)
                          , i = t.getBounds(e)
                          , s = t.getSvgElement(e, this.settings.isDarkMode);
                        if (s)
                            return "image" === e.type ? s.setAttribute("xlink:href", this.document.assets[e.assetId].src) : "video" === e.type && s.setAttribute("xlink:href", this.serializeVideo(e.id)),
                            s.setAttribute("transform", `translate(${(l + e.point[0] - r.minX).toFixed(2)}, ${(l + e.point[1] - r.minY).toFixed(2)}) rotate(${(180 * (e.rotation || 0) / Math.PI).toFixed(2)}, ${(i.width / 2).toFixed(2)}, ${(i.height / 2).toFixed(2)})`),
                            s
                    }
                    ;
                    a.forEach(e=>{
                        var t;
                        if (null == (t = e.children) ? void 0 : t.length) {
                            let t = document.createElementNS("http://www.w3.org/2000/svg", "g");
                            e.children.forEach(e=>{
                                let i = d(this.getShape(e, this.currentPageId));
                                i && t.append(i)
                            }
                            ),
                            i.append(t);
                            return
                        }
                        let s = d(e);
                        s && i.append(s)
                    }
                    ),
                    i.setAttribute("viewBox", [0, 0, r.width + 2 * l, r.height + 2 * l].join(" ")),
                    i.setAttribute("width", (r.width + 2 * l).toString()),
                    i.setAttribute("height", (r.height + 2 * l).toString());
                    let h = this.settings.exportBackground
                      , p = "#212529"
                      , c = "rgb(248, 249, 250)";
                    switch (h) {
                    case "auto":
                        i.style.setProperty("background-color", this.settings.isDarkMode ? p : c);
                        break;
                    case "dark":
                        i.style.setProperty("background-color", p);
                        break;
                    case "light":
                        i.style.setProperty("background-color", c);
                        break;
                    default:
                        i.style.setProperty("background-color", "transparent")
                    }
                    return i.querySelectorAll(".tl-fill-hitarea, .tl-stroke-hitarea, .tl-binding-indicator").forEach(e=>e.remove()),
                    i
                })),
                j(this, "copySvg", (...e)=>A(this, [...e], function*(e=this.selectedIds.length ? this.selectedIds : Object.keys(this.page.shapes)) {
                    if (0 === e.length)
                        return;
                    let t = yield this.getSvg(e);
                    if (!t)
                        return;
                    let i = ta.getSvgString(t, 1);
                    this.clipboard = this.getContent(e);
                    let s = JSON.stringify(z({
                        type: "tldr/clipboard"
                    }, this.clipboard));
                    return navigator.clipboard && window.ClipboardItem && navigator.clipboard.write([new ClipboardItem({
                        "text/html": new Blob([s],{
                            type: "text/html"
                        }),
                        "text/plain": new Blob([i],{
                            type: "text/plain"
                        })
                    })]),
                    i
                })),
                j(this, "getContent", e=>{
                    let t = this.getPage(this.currentPageId);
                    if (e && 0 === e.length || (e || (e = this.selectedIds),
                    0 === e.length && (e = Object.keys(t.shapes)),
                    0 === e.length))
                        return;
                    let i = e.map(e=>t.shapes[e]).flatMap(e=>{
                        var i;
                        return [e, ...(null != (i = e.children) ? i : []).map(e=>t.shapes[e])]
                    }
                    ).map(te)
                      , s = new Set(i.map(e=>e.id));
                    i.forEach(e=>{
                        e.parentId === this.currentPageId && (e.parentId = "currentPageId")
                    }
                    );
                    let n = Object.values(t.bindings).filter(e=>{
                        if (s.has(e.fromId) || s.has(e.toId))
                            return !0;
                        if (s.has(e.fromId)) {
                            let t = i.find(t=>t.id === e.fromId).handles;
                            t && Object.values(t).forEach(t=>{
                                t.bindingId === e.id && (t.bindingId = void 0)
                            }
                            )
                        }
                        if (s.has(e.toId)) {
                            let t = i.find(t=>t.id === e.toId).handles;
                            t && Object.values(t).forEach(t=>{
                                t.bindingId === e.id && (t.bindingId = void 0)
                            }
                            )
                        }
                        return !1
                    }
                    ).map(te)
                      , a = [...new Set(i.map(e=>{
                        if (e.assetId)
                            return this.document.assets[e.assetId]
                    }
                    ).filter(Boolean).map(te))];
                    return {
                        shapes: i,
                        bindings: n,
                        assets: a
                    }
                }
                ),
                j(this, "copyJson", (e=this.selectedIds)=>{
                    let t = this.getContent(e);
                    return t && ta.copyStringToClipboard(JSON.stringify(t)),
                    this
                }
                ),
                j(this, "exportJson", (e=this.selectedIds)=>{
                    let t = this.getContent(e);
                    if (t) {
                        let e = new Blob([JSON.stringify(t)],{
                            type: "application/json"
                        })
                          , i = URL.createObjectURL(e)
                          , s = document.createElement("a");
                        s.href = i,
                        s.download = "export.json",
                        s.click()
                    }
                    return this
                }
                ),
                j(this, "insertContent", (e,t={})=>this.setState(function(e, t, i={}) {
                    let {currentPageId: s} = e
                      , {point: n, select: a, overwrite: r} = i
                      , l = e.document.pages[s]
                      , d = {
                        shapes: {},
                        bindings: {}
                    }
                      , h = {}
                      , p = {
                        shapes: {},
                        bindings: {}
                    };
                    if (r) {
                        for (let e of t.shapes)
                            d.shapes[e.id] = l.shapes[e.id],
                            p.shapes[e.id] = e;
                        if (t.bindings)
                            for (let e of t.bindings)
                                d.bindings[e.id] = l.bindings[e.id],
                                p.bindings[e.id] = e;
                        if (t.assets)
                            for (let e of t.assets)
                                h[e.id] = e
                    } else {
                        let i = {}
                          , a = ta.getTopChildIndex(e.state, s)
                          , r = t.shapes.sort((e,t)=>e.childIndex - t.childIndex).map(e=>{
                            let t = o.cQ.uniqueId();
                            return i[e.id] = t,
                            M(z({}, o.cQ.deepClone(e)), {
                                id: t
                            })
                        }
                        )
                          , l = new Set;
                        for (; r.length > 0; ) {
                            let e = r.shift();
                            if (!e)
                                break;
                            if (l.add(e.id),
                            "currentPageId" === e.parentId)
                                e.parentId = s,
                                e.childIndex = a++;
                            else {
                                e.parentId = i[e.parentId];
                                let t = p.shapes[e.parentId];
                                if (!t) {
                                    l.has(e.id) && (e.parentId = "currentPageId"),
                                    r.push(e);
                                    continue
                                }
                                t.children.push(e.id)
                            }
                            e.children && (e.children = []),
                            d.shapes[e.id] = void 0,
                            p.shapes[e.id] = e
                        }
                        Object.values(p.shapes).forEach(e=>{
                            e.children && 0 === e.children.length && (delete d.shapes[e.id],
                            delete p.shapes[e.id])
                        }
                        ),
                        t.bindings && t.bindings.forEach(e=>{
                            let t = o.cQ.uniqueId();
                            i[e.id] = t;
                            let s = i[e.toId]
                              , n = i[e.fromId];
                            if (!s || !n) {
                                if (n) {
                                    let t = p.shapes[n].handles;
                                    t && Object.values(t).forEach(t=>{
                                        t.bindingId === e.id && (t.bindingId = void 0)
                                    }
                                    )
                                }
                                if (s) {
                                    let t = p.shapes[s].handles;
                                    t && Object.values(t).forEach(t=>{
                                        t.bindingId === e.id && (t.bindingId = void 0)
                                    }
                                    )
                                }
                                return
                            }
                            let a = p.shapes[n].handles;
                            a && Object.values(a).forEach(i=>{
                                i.bindingId === e.id && (i.bindingId = t)
                            }
                            ),
                            p.shapes[s].handles && Object.values(p.shapes[s].handles).forEach(i=>{
                                i.bindingId === e.id && (i.bindingId = t)
                            }
                            );
                            let r = M(z({}, o.cQ.deepClone(e)), {
                                id: t,
                                toId: s,
                                fromId: n
                            });
                            d.bindings[r.id] = void 0,
                            p.bindings[r.id] = r
                        }
                        );
                        let c = Object.values(p.shapes);
                        if (c.length > 0) {
                            if (n) {
                                let e = o.cQ.getCommonBounds(c.map(e=>ta.getBounds(e)))
                                  , t = o.cQ.getBoundsCenter(e);
                                c.forEach(e=>{
                                    e.point && (e.point = u.B.sub(n, u.B.sub(t, e.point)))
                                }
                                )
                            } else {
                                let t = o.cQ.getCommonBounds(c.map(ta.getBounds));
                                if (!(o.cQ.boundsContain(e.viewport, t) || o.cQ.boundsCollide(e.viewport, t))) {
                                    let i = u.B.toFixed(e.getPagePoint(e.centerPoint))
                                      , s = o.cQ.centerBounds(t, i)
                                      , n = u.B.sub(o.cQ.getBoundsCenter(s), o.cQ.getBoundsCenter(t));
                                    c.forEach(e=>{
                                        e.point = u.B.toFixed(u.B.add(e.point, n))
                                    }
                                    )
                                }
                            }
                        }
                        if (t.assets)
                            for (let e of t.assets)
                                h[e.id] = e
                    }
                    let c = document.createElement("textarea");
                    return Object.values(p.shapes).forEach(e=>{
                        "text"in e && (c.innerHTML = e.text,
                        e.text = c.value),
                        "label"in e && (c.innerHTML = e.label,
                        e.label = c.value)
                    }
                    ),
                    c.remove(),
                    {
                        id: "insert",
                        before: {
                            document: {
                                pages: {
                                    [s]: d
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: [...e.selectedIds]
                                    }
                                }
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [s]: p
                                },
                                assets: h,
                                pageStates: {
                                    [s]: {
                                        selectedIds: a ? Object.keys(p.shapes) : [...e.selectedIds]
                                    }
                                }
                            }
                        }
                    }
                }(this, e, t), "insert_content")),
                j(this, "getImage", (...e)=>A(this, [...e], function*(e="png", t={}) {
                    let {ids: i=this.selectedIds.length ? this.selectedIds : Object.keys(this.page.shapes)} = t
                      , s = yield this.getSvg(i, {
                        includeFonts: "svg" !== e
                    });
                    if (!s)
                        return;
                    if ("svg" === e) {
                        let e = ta.getSvgString(s, 1);
                        return new Blob([e],{
                            type: "image/svg+xml"
                        })
                    }
                    let n = yield ta.getImageForSvg(s, e, t);
                    if (n)
                        return n
                })),
                j(this, "copyImage", (...e)=>A(this, [...e], function*(e="png", t={}) {
                    if ("svg" === e) {
                        this.copySvg(t.ids);
                        return
                    }
                    if (!(navigator.clipboard && window.ClipboardItem)) {
                        console.warn("Sorry, your browser does not support copying images.");
                        return
                    }
                    let i = yield this.getImage(e, t);
                    i && navigator.clipboard.write([new ClipboardItem({
                        [i.type]: i
                    })])
                })),
                j(this, "exportImage", (...e)=>A(this, [...e], function*(e="png", t={}) {
                    var i;
                    let {pageId: s=this.currentPageId} = t
                      , n = yield this.getImage(e, t);
                    if (!n)
                        return;
                    let a = null != (i = this.document.pages[s].name) ? i : "export";
                    if (this.callbacks.onExport)
                        this.callbacks.onExport(this, {
                            name: a,
                            type: e,
                            blob: n
                        });
                    else {
                        let t = URL.createObjectURL(n)
                          , i = document.createElement("a");
                        i.href = t,
                        i.download = `${a}.${e}`,
                        i.click()
                    }
                })),
                j(this, "setCamera", (e,t,i)=>(this.updateViewport(e, t),
                this.patchState({
                    document: {
                        pageStates: {
                            [this.currentPageId]: {
                                camera: {
                                    point: e,
                                    zoom: t
                                }
                            }
                        }
                    }
                }, i),
                this)),
                j(this, "resetCamera", ()=>this.setCamera(this.centerPoint, 1, "reset_camera")),
                j(this, "pan", e=>{
                    let {camera: t} = this.pageState;
                    return this.setCamera(u.B.toFixed(u.B.sub(t.point, e)), t.zoom, "panned")
                }
                ),
                j(this, "pinchZoom", (e,t,i)=>{
                    let {camera: s} = this.pageState
                      , n = u.B.sub(s.point, u.B.div(t, s.zoom))
                      , a = u.B.sub(u.B.div(e, s.zoom), n)
                      , o = u.B.sub(u.B.div(e, i), n);
                    return this.setCamera(u.B.toFixed(u.B.add(n, u.B.sub(o, a))), i, "pinch_zoomed")
                }
                ),
                j(this, "zoomTo", (e,t=this.centerPoint)=>{
                    let {zoom: i, point: s} = this.camera
                      , n = u.B.sub(u.B.div(t, i), s)
                      , a = u.B.sub(u.B.div(t, e), s);
                    return this.setCamera(u.B.toFixed(u.B.add(s, u.B.sub(a, n))), e, "zoomed_camera")
                }
                ),
                j(this, "zoomIn", ()=>{
                    let e = Math.round(100 * this.camera.zoom / 25)
                      , t = ta.getCameraZoom((e + 1) * .25);
                    return this.zoomTo(t)
                }
                ),
                j(this, "zoomOut", ()=>{
                    let e = Math.round(100 * this.camera.zoom / 25)
                      , t = ta.getCameraZoom((e - 1) * .25);
                    return this.zoomTo(t)
                }
                ),
                j(this, "zoomToFit", ()=>{
                    let {shapes: e, pageState: {camera: t}} = this;
                    if (0 === e.length)
                        return this;
                    let {rendererBounds: i} = this
                      , s = o.cQ.getCommonBounds(e.map(ta.getBounds))
                      , n = ta.getCameraZoom(Math.min((i.width - 128) / s.width, (i.height - 128) / s.height));
                    n = t.zoom === n || t.zoom < 1 ? Math.min(1, n) : n;
                    let a = (i.width - s.width * n) / 2 / n
                      , r = (i.height - s.height * n) / 2 / n;
                    return this.setCamera(u.B.toFixed(u.B.sub([a, r], [s.minX, s.minY])), n, "zoomed_to_fit")
                }
                ),
                j(this, "zoomToSelection", ()=>{
                    if (0 === this.selectedIds.length)
                        return this;
                    let {rendererBounds: e} = this
                      , t = ta.getSelectedBounds(this.state)
                      , i = ta.getCameraZoom(Math.min((e.width - 128) / t.width, (e.height - 128) / t.height));
                    i = this.camera.zoom === i || this.camera.zoom < 1 ? Math.min(1, i) : i;
                    let s = (e.width - t.width * i) / 2 / i
                      , n = (e.height - t.height * i) / 2 / i;
                    return this.setCamera(u.B.toFixed(u.B.sub([s, n], [t.minX, t.minY])), i, "zoomed_to_selection")
                }
                ),
                j(this, "zoomToContent", ()=>{
                    let e = this.shapes
                      , t = this.pageState;
                    if (0 === e.length)
                        return this;
                    let {rendererBounds: i} = this
                      , {zoom: s} = t.camera
                      , n = o.cQ.getCommonBounds(e.map(ta.getBounds))
                      , a = (i.width - n.width * s) / 2 / s
                      , r = (i.height - n.height * s) / 2 / s;
                    return this.setCamera(u.B.toFixed(u.B.sub([a, r], [n.minX, n.minY])), this.camera.zoom, "zoomed_to_content")
                }
                ),
                j(this, "resetZoom", ()=>this.zoomTo(1)),
                j(this, "zoomBy", o.cQ.throttle((e,t)=>{
                    let {zoom: i} = this.camera
                      , s = ta.getCameraZoom(i - e * i);
                    return this.zoomTo(s, t)
                }
                , 16)),
                j(this, "clearSelectHistory", ()=>(this.selectHistory.pointer = 0,
                this.selectHistory.stack = [this.selectedIds],
                this)),
                j(this, "addToSelectHistory", e=>(this.selectHistory.pointer < this.selectHistory.stack.length && (this.selectHistory.stack = this.selectHistory.stack.slice(0, this.selectHistory.pointer + 1)),
                this.selectHistory.pointer++,
                this.selectHistory.stack.push(e),
                this)),
                j(this, "setSelectedIds", (e,t=!1)=>{
                    let i = t ? [...this.pageState.selectedIds, ...e] : [...e];
                    return this.patchState({
                        appState: {
                            activeTool: "select"
                        },
                        document: {
                            pageStates: {
                                [this.currentPageId]: {
                                    selectedIds: i
                                }
                            }
                        }
                    }, "selected")
                }
                ),
                j(this, "undoSelect", ()=>(this.selectHistory.pointer > 0 && (this.selectHistory.pointer--,
                this.setSelectedIds(this.selectHistory.stack[this.selectHistory.pointer])),
                this)),
                j(this, "redoSelect", ()=>(this.selectHistory.pointer < this.selectHistory.stack.length - 1 && (this.selectHistory.pointer++,
                this.setSelectedIds(this.selectHistory.stack[this.selectHistory.pointer])),
                this)),
                j(this, "select", (...e)=>(e.forEach(e=>{
                    if (!this.page.shapes[e])
                        throw Error(`That shape does not exist on page ${this.currentPageId}`)
                }
                ),
                this.setSelectedIds(e),
                this.addToSelectHistory(e),
                this)),
                j(this, "selectAll", (e=this.currentPageId)=>(this.session || (this.setSelectedIds(Object.values(this.document.pages[e].shapes).filter(t=>t.parentId === e).map(e=>e.id)),
                this.addToSelectHistory(this.selectedIds),
                this.selectTool("select")),
                this)),
                j(this, "selectNone", ()=>(this.setSelectedIds([]),
                this.addToSelectHistory(this.selectedIds),
                this)),
                j(this, "startSession", (e,...t)=>{
                    var i, s;
                    if (this.readOnly && "brush" !== e)
                        return this;
                    this.session && (ta.warn(`Already in a session! (${this.session.constructor.name})`),
                    this.cancelSession());
                    let n = sd(e);
                    this.session = new n(this,...t);
                    let a = this.session.start();
                    return a && this.patchState(a, `session:start_${this.session.constructor.name}`),
                    null == (s = (i = this.callbacks).onSessionStart) || s.call(i, this, this.session.constructor.name),
                    this
                }
                ),
                j(this, "updateSession", ()=>{
                    let {session: e} = this;
                    if (!e)
                        return this;
                    let t = e.update();
                    return t ? this.patchState(t, `session:${null == e ? void 0 : e.constructor.name}`) : this
                }
                ),
                j(this, "cancelSession", ()=>{
                    var e, t;
                    let {session: i} = this;
                    if (!i)
                        return this;
                    this.session = void 0;
                    let s = i.cancel();
                    return s && this.patchState(s, `session:cancel:${i.constructor.name}`),
                    this.setEditingId(),
                    null == (t = (e = this.callbacks).onSessionEnd) || t.call(e, this, i.constructor.name),
                    this
                }
                ),
                j(this, "completeSession", ()=>{
                    var e, t, i, s, n, a, o, r, l;
                    let {session: d} = this;
                    if (!d)
                        return this;
                    this.session = void 0;
                    let h = d.complete();
                    return void 0 === h ? (this.isCreating = !1,
                    this.patchState({
                        appState: {
                            status: "idle"
                        },
                        document: {
                            pageStates: {
                                [this.currentPageId]: {
                                    editingId: void 0,
                                    bindingId: void 0,
                                    hoveredId: void 0
                                }
                            }
                        }
                    }, `session:complete:${d.constructor.name}`)) : "after"in h ? (this.isCreating && (h.before = {
                        appState: M(z({}, h.before.appState), {
                            status: "idle"
                        }),
                        document: {
                            pages: {
                                [this.currentPageId]: {
                                    shapes: Object.fromEntries(this.selectedIds.map(e=>[e, void 0]))
                                }
                            },
                            pageStates: {
                                [this.currentPageId]: {
                                    selectedIds: [],
                                    editingId: null,
                                    bindingId: null,
                                    hoveredId: null
                                }
                            }
                        }
                    },
                    this.appState.isToolLocked && (((null == (i = null == (t = null == (e = h.after) ? void 0 : e.document) ? void 0 : t.pageStates) ? void 0 : i[this.currentPageId]) || {}).selectedIds = []),
                    this.isCreating = !1),
                    h.after.appState = M(z({}, h.after.appState), {
                        status: "idle"
                    }),
                    h.after.document = M(z({}, h.after.document), {
                        pageStates: M(z({}, null == (s = h.after.document) ? void 0 : s.pageStates), {
                            [this.currentPageId]: M(z({}, ((null == (n = h.after.document) ? void 0 : n.pageStates) || {})[this.currentPageId]), {
                                editingId: null
                            })
                        })
                    }),
                    this.setState(h, `session:complete:${d.constructor.name}`)) : this.patchState(M(z({}, h), {
                        appState: M(z({}, h.appState), {
                            status: "idle"
                        }),
                        document: M(z({}, h.document), {
                            pageStates: {
                                [this.currentPageId]: M(z({}, null == (o = null == (a = h.document) ? void 0 : a.pageStates) ? void 0 : o[this.currentPageId]), {
                                    editingId: null
                                })
                            }
                        })
                    }), `session:complete:${d.constructor.name}`),
                    null == (l = (r = this.callbacks).onSessionEnd) || l.call(r, this, d.constructor.name),
                    this
                }
                ),
                j(this, "createShapes", (...e)=>0 === e.length ? this : this.create(e.map(e=>ta.getShapeUtil(e.type).create(z({
                    parentId: this.currentPageId
                }, e))))),
                j(this, "updateShapes", (...e)=>{
                    let t = this.document.pages[this.currentPageId].shapes
                      , i = e.filter(e=>t[e.id]);
                    return 0 === i.length ? this : this.setState(iV(this, i, this.currentPageId), "updated_shapes")
                }
                ),
                j(this, "create", (e=[],t=[])=>0 === e.length ? this : this.setState(iK(this, e, t))),
                j(this, "patchCreate", (e=[],t=[])=>0 === e.length ? this : this.patchState(iK(this, e, t).after)),
                j(this, "delete", (e=this.selectedIds)=>{
                    var t, i;
                    if (0 === e.length || this.session)
                        return this;
                    let s = iN(this, e);
                    if (this.callbacks.onAssetDelete && (null == (t = s.before.document) ? void 0 : t.assets) && (null == (i = s.after.document) ? void 0 : i.assets)) {
                        let e = Object.keys(s.before.document.assets).filter(e=>!!s.before.document.assets[e])
                          , t = Object.keys(s.after.document.assets).filter(e=>!!s.after.document.assets[e]);
                        e.filter(e=>!t.includes(e)).forEach(e=>this.callbacks.onAssetDelete(this, e))
                    }
                    return this.setState(s)
                }
                ),
                j(this, "deleteAll", ()=>(this.selectAll(),
                this.delete(),
                this)),
                j(this, "style", (e,t=this.selectedIds)=>this.setState(function(e, t, i) {
                    let {currentPageId: s, selectedIds: n} = e
                      , a = t.flatMap(t=>ta.getDocumentBranch(e.state, t, s)).filter(t=>!e.getShape(t).isLocked)
                      , o = {}
                      , r = {};
                    return a.map(t=>e.getShape(t)).filter(e=>!e.isLocked).forEach(t=>{
                        o[t.id] = {
                            style: z({}, Object.fromEntries(Object.keys(i).map(e=>[e, t.style[e]])))
                        },
                        r[t.id] = {
                            style: i
                        },
                        "text" === t.type && (o[t.id].point = t.point,
                        r[t.id].point = u.B.toFixed(u.B.add(t.point, u.B.sub(e.getShapeUtil(t).getCenter(t), e.getShapeUtil(t).getCenter(M(z({}, t), {
                            style: z(z({}, t.style), i)
                        }))))))
                    }
                    ),
                    {
                        id: "style",
                        before: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: o
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: n
                                    }
                                }
                            },
                            appState: {
                                currentStyle: z({}, e.appState.currentStyle)
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: r
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: t
                                    }
                                }
                            },
                            appState: {
                                currentStyle: i
                            }
                        }
                    }
                }(this, t, e))),
                j(this, "align", (e,t=this.selectedIds)=>t.length < 2 ? this : this.setState(function(e, t, i) {
                    let {currentPageId: s} = e
                      , n = t.map(t=>e.getShape(t))
                      , a = n.map(e=>({
                        id: e.id,
                        point: [...e.point],
                        bounds: ta.getBounds(e)
                    }))
                      , r = o.cQ.getCommonBounds(a.map(({bounds: e})=>e))
                      , l = r.minX + r.width / 2
                      , d = r.minY + r.height / 2
                      , h = Object.fromEntries(a.map(({id: e, point: t, bounds: s})=>[e, {
                        prev: t,
                        next: {
                            top: [t[0], r.minY],
                            centerVertical: [t[0], d - s.height / 2],
                            bottom: [t[0], r.maxY - s.height],
                            left: [r.minX, t[1]],
                            centerHorizontal: [l - s.width / 2, t[1]],
                            right: [r.maxX - s.width, t[1]]
                        }[i]
                    }]))
                      , {before: p, after: c} = ta.mutateShapes(e.state, t, e=>h[e.id] ? {
                        point: h[e.id].next
                    } : e, s, !1);
                    return n.forEach(t=>{
                        if ("group" === t.type) {
                            let i = u.B.sub(c[t.id].point, p[t.id].point);
                            t.children.forEach(t=>{
                                let s = e.getShape(t);
                                p[s.id] = {
                                    point: s.point
                                },
                                c[s.id] = {
                                    point: u.B.add(s.point, i)
                                }
                            }
                            ),
                            delete p[t.id],
                            delete c[t.id]
                        }
                    }
                    ),
                    {
                        id: "align",
                        before: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: p
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: t
                                    }
                                }
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: c
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: t
                                    }
                                }
                            }
                        }
                    }
                }(this, t, e))),
                j(this, "distribute", (e,t=this.selectedIds)=>t.length < 3 ? this : this.setState(function(e, t, i) {
                    let {currentPageId: s} = e
                      , n = t.map(t=>e.getShape(t))
                      , a = Object.fromEntries((function(e, t) {
                        let i = e.map(e=>{
                            let t = ta.getShapeUtil(e);
                            return {
                                id: e.id,
                                point: [...e.point],
                                bounds: t.getBounds(e),
                                center: t.getCenter(e)
                            }
                        }
                        )
                          , s = i.length
                          , n = o.cQ.getCommonBounds(i.map(({bounds: e})=>e))
                          , a = [];
                        switch (t) {
                        case "horizontal":
                            {
                                let e = i.reduce((e,t)=>e + t.bounds.width, 0);
                                if (e > n.width) {
                                    let e = i.sort((e,t)=>e.bounds.minX - t.bounds.minX)[0]
                                      , t = i.sort((e,t)=>t.bounds.maxX - e.bounds.maxX)[0]
                                      , n = i.filter(i=>i !== e && i !== t).sort((e,t)=>e.center[0] - t.center[0])
                                      , o = (t.center[0] - e.center[0]) / (s - 1)
                                      , r = e.center[0] + o;
                                    n.forEach(({id: e, point: t, bounds: i},s)=>{
                                        a.push({
                                            id: e,
                                            prev: t,
                                            next: [r + o * s - i.width / 2, i.minY]
                                        })
                                    }
                                    )
                                } else {
                                    let t = i.sort((e,t)=>e.center[0] - t.center[0])
                                      , o = n.minX
                                      , r = (n.width - e) / (s - 1);
                                    t.forEach(({id: e, point: t, bounds: i})=>{
                                        a.push({
                                            id: e,
                                            prev: t,
                                            next: [o, i.minY]
                                        }),
                                        o += i.width + r
                                    }
                                    )
                                }
                                break
                            }
                        case "vertical":
                            {
                                let e = i.reduce((e,t)=>e + t.bounds.height, 0);
                                if (e > n.height) {
                                    let e = i.sort((e,t)=>e.bounds.minY - t.bounds.minY)[0]
                                      , t = i.sort((e,t)=>t.bounds.maxY - e.bounds.maxY)[0]
                                      , n = i.filter(i=>i !== e && i !== t).sort((e,t)=>e.center[1] - t.center[1])
                                      , o = (t.center[1] - e.center[1]) / (s - 1)
                                      , r = e.center[1] + o;
                                    n.forEach(({id: e, point: t, bounds: i},s)=>{
                                        a.push({
                                            id: e,
                                            prev: t,
                                            next: [i.minX, r + o * s - i.height / 2]
                                        })
                                    }
                                    )
                                } else {
                                    let t = i.sort((e,t)=>e.center[1] - t.center[1])
                                      , o = n.minY
                                      , r = (n.height - e) / (s - 1);
                                    t.forEach(({id: e, point: t, bounds: i})=>{
                                        a.push({
                                            id: e,
                                            prev: t,
                                            next: [i.minX, o]
                                        }),
                                        o += i.height + r
                                    }
                                    )
                                }
                            }
                        }
                        return a
                    }
                    )(n, i).map(e=>[e.id, e]))
                      , {before: r, after: l} = ta.mutateShapes(e.state, t.filter(e=>void 0 !== a[e]), e=>{
                        var t;
                        return {
                            point: null == (t = a[e.id]) ? void 0 : t.next
                        }
                    }
                    , s);
                    return n.forEach(t=>{
                        if ("group" === t.type) {
                            let i = u.Z.sub(l[t.id].point, r[t.id].point);
                            t.children.forEach(t=>{
                                let s = e.getShape(t);
                                r[s.id] = {
                                    point: s.point
                                },
                                l[s.id] = {
                                    point: u.Z.add(s.point, i)
                                }
                            }
                            ),
                            delete r[t.id],
                            delete l[t.id]
                        }
                    }
                    ),
                    {
                        id: "distribute",
                        before: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: r
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: t
                                    }
                                }
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: l
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: t
                                    }
                                }
                            }
                        }
                    }
                }(this, t, e))),
                j(this, "stretch", (e,t=this.selectedIds)=>t.length < 2 ? this : this.setState(function(e, t, i) {
                    let {currentPageId: s, selectedIds: n} = e
                      , a = t.map(t=>e.getShape(t))
                      , r = a.map(e=>ta.getBounds(e))
                      , l = o.cQ.getCommonBounds(r)
                      , d = t.flatMap(t=>{
                        let i = e.getShape(t);
                        return i.children ? i.children : i.id
                    }
                    ).filter(t=>!e.getShape(t).isLocked)
                      , {before: h, after: p} = ta.mutateShapes(e.state, d, e=>{
                        let t = ta.getBounds(e);
                        switch (i) {
                        case "horizontal":
                            {
                                let i = M(z({}, t), {
                                    minX: l.minX,
                                    maxX: l.maxX,
                                    width: l.width
                                });
                                return ta.getShapeUtil(e).transformSingle(e, i, {
                                    type: o.P0.TopLeft,
                                    scaleX: i.width / t.width,
                                    scaleY: 1,
                                    initialShape: e,
                                    transformOrigin: [.5, .5]
                                })
                            }
                        case "vertical":
                            {
                                let i = M(z({}, t), {
                                    minY: l.minY,
                                    maxY: l.maxY,
                                    height: l.height
                                });
                                return ta.getShapeUtil(e).transformSingle(e, i, {
                                    type: o.P0.TopLeft,
                                    scaleX: 1,
                                    scaleY: i.height / t.height,
                                    initialShape: e,
                                    transformOrigin: [.5, .5]
                                })
                            }
                        }
                    }
                    , s);
                    return a.forEach(e=>{
                        "group" === e.type && (delete h[e.id],
                        delete p[e.id])
                    }
                    ),
                    {
                        id: "stretch",
                        before: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: h
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: n
                                    }
                                }
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: p
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: t
                                    }
                                }
                            }
                        }
                    }
                }(this, t, e))),
                j(this, "flipHorizontal", (e=this.selectedIds)=>0 === e.length ? this : this.setState(iW(this, e, "horizontal"))),
                j(this, "flipVertical", (e=this.selectedIds)=>0 === e.length ? this : this.setState(iW(this, e, "vertical"))),
                j(this, "moveToPage", (e,t=this.currentPageId,i=this.selectedIds)=>{
                    if (0 === i.length)
                        return this;
                    let {rendererBounds: s} = this;
                    return this.setState(function(e, t, i, s, n) {
                        let {page: a} = e
                          , r = {
                            before: {
                                shapes: {},
                                bindings: {}
                            },
                            after: {
                                shapes: {},
                                bindings: {}
                            }
                        }
                          , l = {
                            before: {
                                shapes: {},
                                bindings: {}
                            },
                            after: {
                                shapes: {},
                                bindings: {}
                            }
                        }
                          , d = new Set
                          , h = new Set;
                        t.map(t=>e.getShape(t, s)).filter(e=>!e.isLocked).forEach(t=>{
                            d.add(t.id),
                            h.add(t),
                            void 0 !== t.children && t.children.forEach(t=>{
                                d.add(t),
                                h.add(e.getShape(t, s))
                            }
                            )
                        }
                        );
                        let p = ta.getTopChildIndex(e.state, n)
                          , c = Array.from(h.values());
                        c.forEach((t,i)=>{
                            if (r.before.shapes[t.id] = t,
                            r.after.shapes[t.id] = void 0,
                            l.before.shapes[t.id] = void 0,
                            l.after.shapes[t.id] = t,
                            !d.has(t.parentId) && (l.after.shapes[t.id] = M(z({}, t), {
                                parentId: n,
                                childIndex: p + i
                            }),
                            t.parentId !== s)) {
                                let i = e.getShape(t.parentId, s);
                                r.before.shapes[i.id] = {
                                    children: i.children
                                },
                                r.after.shapes[i.id] = {
                                    children: i.children.filter(e=>e !== t.id)
                                }
                            }
                        }
                        ),
                        Object.values(a.bindings).filter(e=>d.has(e.fromId) || d.has(e.toId)).forEach(t=>{
                            r.before.bindings[t.id] = t,
                            r.after.bindings[t.id] = void 0;
                            let i = e.getShape(t.fromId, s);
                            if (d.has(t.fromId) && d.has(t.toId))
                                l.before.bindings[t.id] = void 0,
                                l.after.bindings[t.id] = t;
                            else if (d.has(t.fromId)) {
                                let n = e.getShape(t.fromId, s)
                                  , a = Object.values(i.handles).find(e=>e.bindingId === t.id).id
                                  , o = l.after.shapes[n.id];
                                o.handles = M(z({}, o.handles), {
                                    [a]: M(z({}, o.handles[a]), {
                                        bindingId: void 0
                                    })
                                })
                            } else {
                                let n = e.getShape(t.fromId, s)
                                  , a = Object.values(i.handles).find(e=>e.bindingId === t.id);
                                r.before.shapes[n.id] = {
                                    handles: {
                                        [a.id]: {
                                            bindingId: t.id
                                        }
                                    }
                                },
                                r.after.shapes[n.id] = {
                                    handles: {
                                        [a.id]: {
                                            bindingId: void 0
                                        }
                                    }
                                }
                            }
                        }
                        );
                        let g = e.state.document.pageStates[n]
                          , m = o.cQ.getCommonBounds(c.map(e=>ta.getBounds(e)))
                          , f = ta.getCameraZoom(i.width < i.height ? (i.width - 128) / m.width : (i.height - 128) / m.height)
                          , b = (i.width - m.width * f) / 2 / f
                          , v = (i.height - m.height * f) / 2 / f
                          , y = u.B.toFixed(u.B.add([-m.minX, -m.minY], [b, v]));
                        return {
                            id: "move_to_page",
                            before: {
                                appState: {
                                    currentPageId: s
                                },
                                document: {
                                    pages: {
                                        [s]: r.before,
                                        [n]: l.before
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: t
                                        },
                                        [n]: {
                                            selectedIds: g.selectedIds,
                                            camera: g.camera
                                        }
                                    }
                                }
                            },
                            after: {
                                appState: {
                                    currentPageId: n
                                },
                                document: {
                                    pages: {
                                        [s]: r.after,
                                        [n]: l.after
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: []
                                        },
                                        [n]: {
                                            selectedIds: t,
                                            camera: {
                                                zoom: f,
                                                point: y
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }(this, i, s, t, e)),
                    this
                }
                ),
                j(this, "moveToBack", (e=this.selectedIds)=>0 === e.length ? this : this.setState(iG(this, e, "toBack"))),
                j(this, "moveBackward", (e=this.selectedIds)=>0 === e.length ? this : this.setState(iG(this, e, "backward"))),
                j(this, "moveForward", (e=this.selectedIds)=>0 === e.length ? this : this.setState(iG(this, e, "forward"))),
                j(this, "moveToFront", (e=this.selectedIds)=>0 === e.length ? this : this.setState(iG(this, e, "toFront"))),
                j(this, "nudge", (e,t=!1,i=this.selectedIds)=>{
                    if (0 === i.length)
                        return this;
                    let s = t ? this.settings.showGrid ? 4 * this.currentGrid : 10 : this.settings.showGrid ? this.currentGrid : 1;
                    return this.setState(function(e, t, i) {
                        let {currentPageId: s, selectedIds: n} = e;
                        e.rotationInfo.selectedIds = [...n];
                        let a = {
                            shapes: {},
                            bindings: {}
                        }
                          , o = {
                            shapes: {},
                            bindings: {}
                        }
                          , r = t.flatMap(t=>{
                            let i = e.getShape(t);
                            return i.children ? i.children : i.id
                        }
                        ).filter(t=>!e.getShape(t).isLocked)
                          , l = ta.mutateShapes(e.state, r, e=>({
                            point: u.B.toFixed(u.B.add(e.point, i))
                        }), s);
                        return a.shapes = l.before,
                        o.shapes = l.after,
                        ta.getBindings(e.state, s).filter(e=>t.includes(e.fromId) && !t.includes(e.toId)).forEach(t=>{
                            for (let i of (a.bindings[t.id] = t,
                            o.bindings[t.id] = void 0,
                            [t.toId, t.fromId])) {
                                let s = e.getShape(i);
                                s.handles && Object.values(s.handles).filter(e=>e.bindingId === t.id).forEach(e=>{
                                    var s, n;
                                    a.shapes[i] = M(z({}, a.shapes[i]), {
                                        handles: M(z({}, null == (s = a.shapes[i]) ? void 0 : s.handles), {
                                            [e.id]: {
                                                bindingId: t.id
                                            }
                                        })
                                    }),
                                    o.shapes[i] = M(z({}, o.shapes[i]), {
                                        handles: M(z({}, null == (n = o.shapes[i]) ? void 0 : n.handles), {
                                            [e.id]: {
                                                bindingId: void 0
                                            }
                                        })
                                    })
                                }
                                )
                            }
                        }
                        ),
                        {
                            id: "translate",
                            before: {
                                document: {
                                    pages: {
                                        [s]: a
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: t
                                        }
                                    }
                                }
                            },
                            after: {
                                document: {
                                    pages: {
                                        [s]: o
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: t
                                        }
                                    }
                                }
                            }
                        }
                    }(this, i, u.B.mul(e, s)))
                }
                ),
                j(this, "duplicate", (e=this.selectedIds,t)=>this.readOnly ? this : 0 === e.length ? this : this.setState(function(e, t, i) {
                    let {selectedIds: s, currentPageId: n, page: a, shapes: r} = e
                      , l = {
                        shapes: {},
                        bindings: {}
                    }
                      , d = {
                        shapes: {},
                        bindings: {}
                    }
                      , h = {}
                      , p = t.map(t=>e.getShape(t)).filter(e=>!t.includes(e.parentId));
                    p.forEach(t=>{
                        let i = o.cQ.uniqueId();
                        if (l.shapes[i] = void 0,
                        d.shapes[i] = M(z({}, o.cQ.deepClone(t)), {
                            id: i,
                            childIndex: ta.getChildIndexAbove(e.state, t.id, n)
                        }),
                        t.children && (d.shapes[i].children = []),
                        t.parentId !== n) {
                            let s = e.getShape(t.parentId);
                            l.shapes[s.id] = M(z({}, l.shapes[s.id]), {
                                children: s.children
                            }),
                            d.shapes[s.id] = M(z({}, d.shapes[s.id]), {
                                children: [...(d.shapes[s.id] || s).children, i]
                            })
                        }
                        h[t.id] = i
                    }
                    ),
                    p.forEach(t=>{
                        t.children && t.children.forEach(i=>{
                            var s, a;
                            let r = e.getShape(i)
                              , p = o.cQ.uniqueId()
                              , c = h[t.id];
                            l.shapes[p] = void 0,
                            d.shapes[p] = M(z({}, o.cQ.deepClone(r)), {
                                id: p,
                                parentId: c,
                                childIndex: ta.getChildIndexAbove(e.state, r.id, n)
                            }),
                            h[i] = p,
                            null == (a = null == (s = d.shapes[h[t.id]]) ? void 0 : s.children) || a.push(p)
                        }
                        )
                    }
                    );
                    let c = new Set(Object.keys(h));
                    Object.values(a.bindings).filter(e=>c.has(e.fromId) || c.has(e.toId)).forEach(e=>{
                        if (c.has(e.fromId)) {
                            if (c.has(e.toId)) {
                                let t = o.cQ.uniqueId()
                                  , i = M(z({}, o.cQ.deepClone(e)), {
                                    id: t,
                                    fromId: h[e.fromId],
                                    toId: h[e.toId]
                                });
                                l.bindings[t] = void 0,
                                d.bindings[t] = i,
                                Object.values(d.shapes[i.fromId].handles).forEach(i=>{
                                    i.bindingId === e.id && (i.bindingId = t)
                                }
                                )
                            } else
                                Object.values(d.shapes[h[e.fromId]].handles).forEach(t=>{
                                    t.bindingId === e.id && (t.bindingId = void 0)
                                }
                                )
                        }
                    }
                    );
                    let g = Object.values(d.shapes);
                    if (i) {
                        let e = o.cQ.getCommonBounds(g.map(e=>ta.getBounds(e)))
                          , t = o.cQ.getBoundsCenter(e);
                        g.forEach(e=>{
                            e.point && (e.point = u.B.sub(i, u.B.sub(t, e.point)))
                        }
                        )
                    } else {
                        let e = [16, 16];
                        g.forEach(t=>{
                            t.point && (t.point = u.B.add(t.point, e))
                        }
                        )
                    }
                    return g.forEach(e=>{
                        e.isLocked && (e.isLocked = !1)
                    }
                    ),
                    {
                        id: "duplicate",
                        before: {
                            document: {
                                pages: {
                                    [n]: l
                                },
                                pageStates: {
                                    [n]: {
                                        selectedIds: s
                                    }
                                }
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [n]: d
                                },
                                pageStates: {
                                    [n]: {
                                        selectedIds: Array.from(c.values()).map(e=>h[e])
                                    }
                                }
                            }
                        }
                    }
                }(this, e, t))),
                j(this, "resetBounds", (e=this.selectedIds)=>{
                    let t = iY(this, e, this.currentPageId);
                    return this.setState(iY(this, e, this.currentPageId), t.id)
                }
                ),
                j(this, "toggleHidden", (e=this.selectedIds)=>0 === e.length ? this : this.setState(iX(this, e, "isHidden"))),
                j(this, "toggleLocked", (e=this.selectedIds)=>0 === e.length ? this : this.setState(iX(this, e, "isLocked"))),
                j(this, "toggleAspectRatioLocked", (e=this.selectedIds)=>0 === e.length ? this : this.setState(iX(this, e, "isAspectRatioLocked"))),
                j(this, "toggleDecoration", (e,t=this.selectedIds)=>0 !== t.length && ("start" === e || "end" === e) ? this.setState(function(e, t, i) {
                    let {currentPageId: s, selectedIds: n} = e;
                    return {
                        id: "toggle_decorations",
                        before: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: Object.fromEntries(t.map(t=>{
                                            var s;
                                            return [t, {
                                                decorations: {
                                                    [i]: null == (s = e.getShape(t).decorations) ? void 0 : s[i]
                                                }
                                            }]
                                        }
                                        ))
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: n
                                    }
                                }
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: Object.fromEntries(t.filter(t=>!e.getShape(t).isLocked).map(t=>{
                                            var s;
                                            return [t, {
                                                decorations: {
                                                    [i]: (null == (s = e.getShape(t).decorations) ? void 0 : s[i]) ? void 0 : "arrow"
                                                }
                                            }]
                                        }
                                        ))
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: t
                                    }
                                }
                            }
                        }
                    }
                }(this, t, e)) : this),
                j(this, "setShapeProps", (e,t=this.selectedIds)=>this.setState(function(e, t, i) {
                    let {currentPageId: s, selectedIds: n} = e
                      , a = t.map(t=>e.getShape(t)).filter(e=>!!i.isLocked || !e.isLocked)
                      , o = {}
                      , r = {}
                      , l = Object.keys(i);
                    return a.forEach(e=>{
                        o[e.id] = Object.fromEntries(l.map(t=>[t, e[t]])),
                        r[e.id] = i
                    }
                    ),
                    {
                        id: "set_props",
                        before: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: o
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: n
                                    }
                                }
                            }
                        },
                        after: {
                            document: {
                                pages: {
                                    [s]: {
                                        shapes: r
                                    }
                                },
                                pageStates: {
                                    [s]: {
                                        selectedIds: n
                                    }
                                }
                            }
                        }
                    }
                }(this, t, e))),
                j(this, "rotate", (e=-.5 * Math.PI,t=this.selectedIds)=>{
                    if (0 === t.length)
                        return this;
                    let i = function(e, t, i=-i$ / 4) {
                        let {currentPageId: s} = e
                          , n = {}
                          , a = {}
                          , r = t.flatMap(t=>{
                            let i = e.getShape(t);
                            return i.children ? i.children.map(t=>e.getShape(t)) : i
                        }
                        ).filter(e=>!e.isLocked)
                          , l = o.cQ.getBoundsCenter(o.cQ.getCommonBounds(r.map(e=>ta.getBounds(e))));
                        return r.forEach(e=>{
                            let t = ta.getRotatedShapeMutation(e, ta.getCenter(e), l, i);
                            t && (n[e.id] = ta.getBeforeShape(e, t),
                            a[e.id] = t)
                        }
                        ),
                        {
                            id: "rotate",
                            before: {
                                document: {
                                    pages: {
                                        [s]: {
                                            shapes: n
                                        }
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: t
                                        }
                                    }
                                }
                            },
                            after: {
                                document: {
                                    pages: {
                                        [s]: {
                                            shapes: a
                                        }
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: t
                                        }
                                    }
                                }
                            }
                        }
                    }(this, t, e);
                    return i ? this.setState(i) : this
                }
                ),
                j(this, "group", (e=this.selectedIds,t=o.cQ.uniqueId(),i=this.currentPageId)=>{
                    if (this.readOnly)
                        return this;
                    if (1 === e.length && "group" === this.getShape(e[0], i).type)
                        return this.ungroup(e, i);
                    if (e.length < 2)
                        return this;
                    let s = function(e, t, i, s) {
                        var n, a;
                        if (t.length < 2)
                            return;
                        let r = {}
                          , l = {}
                          , d = {}
                          , h = {}
                          , p = [...t]
                          , c = []
                          , u = []
                          , g = [];
                        for (let i of t) {
                            let t = e.getShape(i);
                            if (!t.isLocked) {
                                if (void 0 === t.children)
                                    c.push(t);
                                else {
                                    let i = t.children.filter(t=>!e.getShape(t).isLocked);
                                    g.push(t),
                                    p.push(...i),
                                    c.push(...i.map(t=>e.getShape(t)).filter(Boolean))
                                }
                            }
                        }
                        if (c.every(e=>e.parentId === c[0].parentId) && c[0].parentId !== s && (null == (n = e.getShape(c[0].parentId).children) ? void 0 : n.length) === p.length)
                            return;
                        let m = ta.flattenPage(e.state, s)
                          , f = Object.fromEntries(c.map(e=>[e.id, m.indexOf(e)]))
                          , b = c.sort((e,t)=>f[e.id] - f[t.id])
                          , v = (b.filter(e=>e.parentId === s)[0] || b[0]).childIndex
                          , y = o.cQ.getCommonBounds(c.map(e=>ta.getBounds(e)));
                        for (r[i] = void 0,
                        l[i] = ta.getShapeUtil("group").create({
                            id: i,
                            childIndex: v,
                            parentId: s,
                            point: [y.minX, y.minY],
                            size: [y.width, y.height],
                            children: b.map(e=>e.id)
                        }),
                        b.forEach((t,n)=>{
                            if (t.parentId !== s) {
                                let i = e.getShape(t.parentId);
                                g.push(i)
                            }
                            r[t.id] = M(z({}, r[t.id]), {
                                parentId: t.parentId,
                                childIndex: t.childIndex
                            }),
                            l[t.id] = M(z({}, l[t.id]), {
                                parentId: i,
                                childIndex: n + 1
                            })
                        }
                        ); g.length > 0; ) {
                            let t = g.pop();
                            if (!t)
                                break;
                            let i = ((null == (a = r[t.id]) ? void 0 : a.children) || t.children).filter(e=>e && !(p.includes(e) || u.includes(e)));
                            0 === i.length ? (r[t.id] = t,
                            l[t.id] = void 0,
                            t.parentId !== s && (u.push(t.id),
                            g.push(e.getShape(t.parentId)))) : (r[t.id] = M(z({}, r[t.id]), {
                                children: t.children
                            }),
                            l[t.id] = M(z({}, l[t.id]), {
                                children: i
                            }))
                        }
                        let {bindings: S} = e
                          , I = new Set(u);
                        return S.forEach(t=>{
                            for (let i of [t.toId, t.fromId])
                                if (I.has(i)) {
                                    d[t.id] = t,
                                    h[t.id] = void 0;
                                    let s = e.getShape(i);
                                    s.handles && Object.values(s.handles).filter(e=>e.bindingId === t.id).forEach(e=>{
                                        var s, n;
                                        r[i] = M(z({}, r[i]), {
                                            handles: M(z({}, null == (s = r[i]) ? void 0 : s.handles), {
                                                [e.id]: {
                                                    bindingId: t.id
                                                }
                                            })
                                        }),
                                        u.includes(i) || (l[i] = M(z({}, l[i]), {
                                            handles: M(z({}, null == (n = l[i]) ? void 0 : n.handles), {
                                                [e.id]: {
                                                    bindingId: void 0
                                                }
                                            })
                                        }))
                                    }
                                    )
                                }
                        }
                        ),
                        {
                            id: "group",
                            before: {
                                document: {
                                    pages: {
                                        [s]: {
                                            shapes: r,
                                            bindings: d
                                        }
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: t
                                        }
                                    }
                                }
                            },
                            after: {
                                document: {
                                    pages: {
                                        [s]: {
                                            shapes: l,
                                            bindings: d
                                        }
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: [i]
                                        }
                                    }
                                }
                            }
                        }
                    }(this, e, t, i);
                    return s ? this.setState(s) : this
                }
                ),
                j(this, "ungroup", (e=this.selectedIds,t=this.currentPageId)=>{
                    if (this.readOnly)
                        return this;
                    let i = e.map(e=>this.getShape(e, t)).filter(e=>"group" === e.type);
                    if (0 === i.length)
                        return this;
                    let s = function(e, t, i, s) {
                        let {bindings: n} = e
                          , a = {}
                          , o = {}
                          , r = {}
                          , l = {}
                          , d = t.filter(e=>!i.find(t=>t.id === e));
                        return i.filter(e=>!e.isLocked).forEach(t=>{
                            let i = []
                              , h = [];
                            a[t.id] = t,
                            o[t.id] = void 0,
                            t.children.forEach(t=>{
                                d.push(t);
                                let n = e.getShape(t, s);
                                i.push(n)
                            }
                            );
                            let p = t.childIndex
                              , c = (ta.getChildIndexAbove(e.state, t.id, s) - p) / i.length;
                            i.sort((e,t)=>e.childIndex - t.childIndex).forEach((e,t)=>{
                                a[e.id] = {
                                    parentId: e.parentId,
                                    childIndex: e.childIndex
                                },
                                o[e.id] = {
                                    parentId: s,
                                    childIndex: p + c * t
                                }
                            }
                            ),
                            n.filter(e=>e.toId === t.id || e.fromId === t.id).forEach(t=>{
                                for (let i of [t.toId, t.fromId])
                                    if (void 0 === o[i]) {
                                        r[t.id] = t,
                                        l[t.id] = void 0;
                                        let n = e.getShape(i, s);
                                        n.handles && Object.values(n.handles).filter(e=>e.bindingId === t.id).forEach(e=>{
                                            var s, n;
                                            a[i] = M(z({}, a[i]), {
                                                handles: M(z({}, null == (s = a[i]) ? void 0 : s.handles), {
                                                    [e.id]: {
                                                        bindingId: t.id
                                                    }
                                                })
                                            }),
                                            h.includes(i) || (o[i] = M(z({}, o[i]), {
                                                handles: M(z({}, null == (n = o[i]) ? void 0 : n.handles), {
                                                    [e.id]: {
                                                        bindingId: void 0
                                                    }
                                                })
                                            }))
                                        }
                                        )
                                    }
                            }
                            )
                        }
                        ),
                        {
                            id: "ungroup",
                            before: {
                                document: {
                                    pages: {
                                        [s]: {
                                            shapes: a,
                                            bindings: r
                                        }
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: t
                                        }
                                    }
                                }
                            },
                            after: {
                                document: {
                                    pages: {
                                        [s]: {
                                            shapes: o,
                                            bindings: r
                                        }
                                    },
                                    pageStates: {
                                        [s]: {
                                            selectedIds: d
                                        }
                                    }
                                }
                            }
                        }
                    }(this, e, i, t);
                    return s ? this.setState(s) : this
                }
                ),
                j(this, "cancel", ()=>{
                    var e, t;
                    return null == (t = (e = this.currentTool).onCancel) || t.call(e),
                    this
                }
                ),
                j(this, "addMediaFromFiles", (e,...t)=>A(this, [e, ...t], function*(e, t=this.centerPoint) {
                    this.setIsLoading(!0);
                    let i = []
                      , s = this.getPagePoint(t);
                    for (let s of e) {
                        let e = o.cQ.uniqueId()
                          , n = s.name.match(/\.[0-9a-z]+$/i);
                        if (!n)
                            throw Error("No extension");
                        let a = ek.includes(n[0].toLowerCase())
                          , r = ew.includes(n[0].toLowerCase());
                        if (!(a || r))
                            throw Error("Wrong extension");
                        let l = a ? "image" : "video", d = a ? "image" : "video", h;
                        try {
                            if (this.callbacks.onAssetCreate) {
                                let t = yield this.callbacks.onAssetCreate(this, s, e);
                                if (!t)
                                    throw Error("Asset creation callback returned false");
                                h = t
                            } else
                                h = yield i8(s);
                            if ("string" == typeof h) {
                                let o = [0, 0];
                                if (a) {
                                    if (".svg" == n[0]) {
                                        let e, t = yield i9(s), i = this.getViewboxFromSVG(t);
                                        i && (e = i.split(" "),
                                        o[0] = parseFloat(e[2]),
                                        o[1] = parseFloat(e[3]))
                                    }
                                    u.B.isEqual(o, [0, 0]) && (o = yield i7(h))
                                } else
                                    o = yield se(h);
                                let r = Object.values(this.document.assets).find(e=>e.type === d && e.src === h), p;
                                if (r)
                                    p = r.id;
                                else {
                                    let t = {
                                        id: p = e,
                                        type: d,
                                        name: s.name,
                                        src: h,
                                        size: o
                                    };
                                    this.patchState({
                                        document: {
                                            assets: {
                                                [p]: t
                                            }
                                        }
                                    })
                                }
                                i.push(this.getImageOrVideoShapeAtPoint(e, l, t, o, p))
                            }
                        } catch (e) {
                            console.warn(e)
                        }
                    }
                    if (i.length) {
                        let e = u.B.add(s, [0, 0]);
                        i.forEach((t,i)=>{
                            let s = ta.getBounds(t);
                            0 === i && (e[0] -= s.width / 2,
                            e[1] -= s.height / 2),
                            t.point = [...e],
                            e[0] += s.width
                        }
                        );
                        let t = o.cQ.getCommonBounds(i.map(ta.getBounds));
                        this.createShapes(...i),
                        o.cQ.boundsContain(this.viewport, t) || (this.zoomToSelection(),
                        this.zoom > 1 && this.resetZoom())
                    }
                    return this.setIsLoading(!1),
                    this
                })),
                j(this, "getViewboxFromSVG", e=>{
                    if ("string" == typeof e) {
                        let t = e.match(/.*?viewBox=["'](-?[\d.]+[, ]+-?[\d.]+[, ][\d.]+[, ][\d.]+)["']/);
                        return t && t.length >= 2 ? t[1] : null
                    }
                    return this.setIsLoading(!1),
                    null
                }
                ),
                j(this, "onKeyDown", (e,t,i)=>{
                    var s, n;
                    switch (i.key) {
                    case "/":
                        if ("idle" === this.status && !this.pageState.editingId) {
                            let {shiftKey: e, metaKey: i, altKey: s, ctrlKey: n, spaceKey: a} = this;
                            this.onPointerDown({
                                target: "canvas",
                                pointerId: 0,
                                origin: t.point,
                                point: t.point,
                                delta: [0, 0],
                                pressure: .5,
                                shiftKey: e,
                                ctrlKey: n,
                                metaKey: i,
                                altKey: s,
                                spaceKey: a
                            }, {
                                shiftKey: e,
                                altKey: s,
                                ctrlKey: n,
                                pointerId: 0,
                                clientX: t.point[0],
                                clientY: t.point[1]
                            })
                        }
                        break;
                    case "Escape":
                        this.cancel();
                        break;
                    case "Meta":
                        this.metaKey = !0;
                        break;
                    case "Alt":
                        this.altKey = !0;
                        break;
                    case "Control":
                        this.ctrlKey = !0;
                        break;
                    case " ":
                        this.isForcePanning = !0,
                        this.spaceKey = !0
                    }
                    return null == (n = (s = this.currentTool).onKeyDown) || n.call(s, e, t, i),
                    this
                }
                ),
                j(this, "onKeyUp", (e,t,i)=>{
                    var s, n;
                    if (t) {
                        switch (i.key) {
                        case "/":
                            {
                                let {currentPoint: e, shiftKey: t, metaKey: i, altKey: s, ctrlKey: n, spaceKey: a} = this;
                                this.onPointerUp({
                                    target: "canvas",
                                    pointerId: 0,
                                    origin: e,
                                    point: e,
                                    delta: [0, 0],
                                    pressure: .5,
                                    shiftKey: t,
                                    ctrlKey: n,
                                    metaKey: i,
                                    altKey: s,
                                    spaceKey: a
                                }, {
                                    shiftKey: t,
                                    altKey: s,
                                    ctrlKey: n,
                                    pointerId: 0,
                                    clientX: e[0],
                                    clientY: e[1]
                                });
                                break
                            }
                        case "Meta":
                            this.metaKey = !1;
                            break;
                        case "Alt":
                            this.altKey = !1;
                            break;
                        case "Control":
                            this.ctrlKey = !1;
                            break;
                        case " ":
                            this.isForcePanning = !1,
                            this.spaceKey = !1
                        }
                        null == (n = (s = this.currentTool).onKeyUp) || n.call(s, e, t, i)
                    }
                }
                ),
                j(this, "refreshBoundingBoxes", ()=>{
                    let e = this.shapes.map(e=>[e.id, z({
                        point: [...e.point]
                    }, "label"in e && {
                        label: ""
                    })])
                      , t = this.shapes.map(e=>[e.id, z({
                        point: [...e.point]
                    }, "label"in e && {
                        label: e.label
                    })]);
                    ej(),
                    this.patchState({
                        document: {
                            pages: {
                                [this.currentPageId]: {
                                    shapes: Object.fromEntries(e)
                                }
                            }
                        }
                    }),
                    this.patchState({
                        document: {
                            pages: {
                                [this.currentPageId]: {
                                    shapes: Object.fromEntries(t)
                                }
                            }
                        }
                    })
                }
                ),
                j(this, "onDragOver", e=>{
                    e.preventDefault()
                }
                ),
                j(this, "onDrop", e=>A(this, null, function*() {
                    var t;
                    return e.preventDefault(),
                    this.disableAssets || (null == (t = e.dataTransfer.files) ? void 0 : t.length) && this.addMediaFromFiles(Object.values(e.dataTransfer.files), [e.clientX, e.clientY]),
                    this
                })),
                j(this, "onPinchStart", (e,t)=>{
                    var i, s;
                    null == (s = (i = this.currentTool).onPinchStart) || s.call(i, e, t)
                }
                ),
                j(this, "onPinchEnd", (e,t)=>{
                    var i, s;
                    return null == (s = (i = this.currentTool).onPinchEnd) ? void 0 : s.call(i, e, t)
                }
                ),
                j(this, "onPinch", (e,t)=>{
                    var i, s;
                    return null == (s = (i = this.currentTool).onPinch) ? void 0 : s.call(i, e, t)
                }
                ),
                j(this, "onPan", (e,t)=>{
                    if ("pinching" === this.appState.status)
                        return;
                    let i = u.B.div(e.delta, this.camera.zoom)
                      , s = this.camera.point
                      , n = u.B.sub(s, i);
                    u.B.isEqual(n, s) || (this.pan(i),
                    this.isForcePanning || this.onPointerMove(e, t),
                    ex && this.isForcePanning && this.preventPaste())
                }
                ),
                j(this, "onZoom", (e,t)=>{
                    if ("idle" !== this.state.appState.status)
                        return;
                    let i = e.delta[2] / 50;
                    this.zoomBy(i, e.point),
                    this.onPointerMove(e, t)
                }
                ),
                j(this, "updateInputs", e=>{
                    this.currentPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.shiftKey = e.shiftKey,
                    this.altKey = e.altKey,
                    this.ctrlKey = e.ctrlKey,
                    this.metaKey = e.metaKey
                }
                ),
                j(this, "onPointerMove", (e,t)=>{
                    var i, s, n, a, o;
                    if (this.previousPoint = this.currentPoint,
                    this.updateInputs(e, t),
                    this.isForcePanning && this.isPointing) {
                        null == (i = this.onPan) || i.call(this, M(z({}, e), {
                            delta: u.B.neg(e.delta)
                        }), t);
                        return
                    }
                    if (null == (n = (s = this.currentTool).onPointerMove) || n.call(s, e, t),
                    this.state.room) {
                        let {users: t, userId: i} = this.state.room;
                        null == (o = (a = this.callbacks).onChangePresence) || o.call(a, this, M(z({}, t[i]), {
                            point: this.getPagePoint(e.point),
                            session: !!this.session
                        }))
                    }
                }
                ),
                j(this, "onPointerDown", (e,t)=>{
                    var i, s;
                    if (4 === t.buttons)
                        this.isForcePanning = !0;
                    else if (this.isPointing)
                        return;
                    this.isPointing = !0,
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    this.isForcePanning || null == (s = (i = this.currentTool).onPointerDown) || s.call(i, e, t)
                }
                ),
                j(this, "onPointerUp", (e,t)=>{
                    var i, s;
                    this.isPointing = !1,
                    this.shiftKey || (this.isForcePanning = !1),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onPointerUp) || s.call(i, e, t)
                }
                ),
                j(this, "onPointCanvas", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onPointCanvas) || s.call(i, e, t)
                }
                ),
                j(this, "onDoubleClickCanvas", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onDoubleClickCanvas) || s.call(i, e, t)
                }
                ),
                j(this, "onRightPointCanvas", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onRightPointCanvas) || s.call(i, e, t)
                }
                ),
                j(this, "onDragCanvas", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onDragCanvas) || s.call(i, e, t)
                }
                ),
                j(this, "onReleaseCanvas", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onReleaseCanvas) || s.call(i, e, t)
                }
                ),
                j(this, "onPointShape", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onPointShape) || s.call(i, e, t)
                }
                ),
                j(this, "onReleaseShape", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onReleaseShape) || s.call(i, e, t)
                }
                ),
                j(this, "onDoubleClickShape", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onDoubleClickShape) || s.call(i, e, t)
                }
                ),
                j(this, "onRightPointShape", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onRightPointShape) || s.call(i, e, t)
                }
                ),
                j(this, "onDragShape", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onDragShape) || s.call(i, e, t)
                }
                ),
                j(this, "onHoverShape", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onHoverShape) || s.call(i, e, t)
                }
                ),
                j(this, "onUnhoverShape", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onUnhoverShape) || s.call(i, e, t)
                }
                ),
                j(this, "onPointBounds", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onPointBounds) || s.call(i, e, t)
                }
                ),
                j(this, "onDoubleClickBounds", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onDoubleClickBounds) || s.call(i, e, t)
                }
                ),
                j(this, "onRightPointBounds", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onRightPointBounds) || s.call(i, e, t)
                }
                ),
                j(this, "onDragBounds", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onDragBounds) || s.call(i, e, t)
                }
                ),
                j(this, "onHoverBounds", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onHoverBounds) || s.call(i, e, t)
                }
                ),
                j(this, "onUnhoverBounds", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onUnhoverBounds) || s.call(i, e, t)
                }
                ),
                j(this, "onReleaseBounds", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onReleaseBounds) || s.call(i, e, t)
                }
                ),
                j(this, "onPointBoundsHandle", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onPointBoundsHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onDoubleClickBoundsHandle", (e,t)=>{
                    var i, s;
                    if (this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onDoubleClickBoundsHandle) || s.call(i, e, t),
                    1 !== this.selectedIds.length)
                        return;
                    let n = this.getShape(this.selectedIds[0]);
                    if ("image" === n.type || "video" === n.type) {
                        let e = this.document.assets[n.assetId]
                          , t = ta.getShapeUtil(n)
                          , i = t.getCenter(n)
                          , s = t.getCenter(M(z({}, n), {
                            size: e.size
                        }))
                          , a = u.B.sub(s, i);
                        this.updateShapes({
                            id: n.id,
                            point: u.B.sub(n.point, a),
                            size: e.size
                        })
                    }
                }
                ),
                j(this, "onRightPointBoundsHandle", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onRightPointBoundsHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onDragBoundsHandle", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onDragBoundsHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onHoverBoundsHandle", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onHoverBoundsHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onUnhoverBoundsHandle", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onUnhoverBoundsHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onReleaseBoundsHandle", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onReleaseBoundsHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onPointHandle", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onPointHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onDoubleClickHandle", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onDoubleClickHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onRightPointHandle", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onRightPointHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onDragHandle", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onDragHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onHoverHandle", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onHoverHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onUnhoverHandle", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onUnhoverHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onReleaseHandle", (e,t)=>{
                    var i, s;
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onReleaseHandle) || s.call(i, e, t)
                }
                ),
                j(this, "onShapeChange", e=>{
                    let t = iV(this, [z(z({}, this.document.pages[this.currentPageId].shapes[e.id]), e)], this.currentPageId).after;
                    return this.patchState(t, "patched_shapes")
                }
                ),
                j(this, "onShapeBlur", ()=>{
                    var e, t;
                    if (performance.now() - this.editingStartTime < 50)
                        return;
                    let {editingId: i} = this.pageState
                      , {isToolLocked: s} = this.getAppState();
                    if (i) {
                        let e = this.getShape(i);
                        this.setEditingId(),
                        "text" === e.type && (e.text.trim().length <= 0 ? this.patchState(iN(this, [i]).after, "delete_empty_text") : s || this.select(i))
                    }
                    null == (t = (e = this.currentTool).onShapeBlur) || t.call(e)
                }
                ),
                j(this, "onShapeClone", (e,t)=>{
                    var i, s;
                    this.originPoint = this.getPagePoint(e.point).concat(e.pressure),
                    this.updateInputs(e, t),
                    null == (s = (i = this.currentTool).onShapeClone) || s.call(i, e, t)
                }
                ),
                j(this, "onRenderCountChange", e=>{
                    let t = this.getAppState();
                    t.isEmptyCanvas && e.length > 0 ? this.patchState({
                        appState: {
                            isEmptyCanvas: !1
                        }
                    }, "empty_canvas:false") : !t.isEmptyCanvas && e.length <= 0 && this.patchState({
                        appState: {
                            isEmptyCanvas: !0
                        }
                    }, "empty_canvas:true")
                }
                ),
                j(this, "onError", ()=>{}
                ),
                j(this, "getShapeUtil", ta.getShapeUtil),
                this.callbacks = t
            }
            setStatus(e) {
                return this.patchState({
                    appState: {
                        status: e
                    }
                }, `set_status:${e}`)
            }
            get isMenuOpen() {
                return this.appState.isMenuOpen
            }
            get isLoading() {
                return this.appState.isLoading
            }
            get disableAssets() {
                return this.appState.disableAssets
            }
            get history() {
                return this.stack.slice(0, this.pointer + 1)
            }
            set history(e) {
                this.replaceHistory(e)
            }
            get document() {
                return this.state.document
            }
            get settings() {
                return this.state.settings
            }
            get appState() {
                return this.state.appState
            }
            get currentPageId() {
                return this.state.appState.currentPageId
            }
            get page() {
                return this.state.document.pages[this.currentPageId]
            }
            get shapes() {
                return Object.values(this.page.shapes)
            }
            get bindings() {
                return Object.values(this.page.bindings)
            }
            get assets() {
                return Object.values(this.document.assets)
            }
            get pageState() {
                return this.state.document.pageStates[this.currentPageId]
            }
            get camera() {
                return this.pageState.camera
            }
            get zoom() {
                return this.pageState.camera.zoom
            }
            get selectedIds() {
                return this.pageState.selectedIds
            }
            createTextShapeAtPoint(e, t, i) {
                let {shapes: s, appState: {currentPageId: n, currentStyle: a}} = this
                  , r = 0 === s.length ? 1 : s.filter(e=>e.parentId === n).sort((e,t)=>t.childIndex - e.childIndex)[0].childIndex + 1
                  , l = iH.text
                  , d = l.create({
                    id: t || o.cQ.uniqueId(),
                    parentId: n,
                    childIndex: r,
                    point: e,
                    style: z({}, a)
                })
                  , h = l.getBounds(d);
                return d.point = u.B.sub(d.point, [h.width / 2, h.height / 2]),
                i ? this.patchCreate([ta.getShapeUtil(d.type).create(d)]) : this.createShapes(d),
                this.setEditingId(d.id, !0),
                this
            }
            getImageOrVideoShapeAtPoint(e, t, i, s, n) {
                let {shapes: a, appState: {currentPageId: o, currentStyle: r}} = this
                  , l = 0 === a.length ? 1 : a.filter(e=>e.parentId === o).sort((e,t)=>t.childIndex - e.childIndex)[0].childIndex + 1
                  , d = iH[t];
                if (s[0] > this.viewport.width) {
                    let e = s[1] / s[0];
                    s[0] = this.viewport.width - 128 / this.camera.zoom * 2,
                    s[1] = s[0] * e,
                    (s[1] < 32 || s[1] < 32) && (s[1] = 32,
                    s[0] = s[1] / e)
                } else if (s[1] > this.viewport.height) {
                    let e = s[0] / s[1];
                    s[1] = this.viewport.height - 128 / this.camera.zoom * 2,
                    s[0] = s[1] * e,
                    (s[1] < 32 || s[1] < 32) && (s[0] = 32,
                    s[1] = s[0] / e)
                }
                return d.create({
                    id: e,
                    parentId: o,
                    childIndex: l,
                    point: i,
                    size: s,
                    style: z({}, r),
                    assetId: n
                })
            }
            isSelected(e) {
                return this.selectedIds.includes(e)
            }
            serializeVideo(e) {
                let t = document.getElementById(e + "_video");
                if (t) {
                    let e = document.createElement("canvas");
                    return e.width = t.videoWidth,
                    e.height = t.videoHeight,
                    e.getContext("2d").drawImage(t, 0, 0),
                    e.toDataURL("image/png")
                }
                throw Error("Video with id " + e + " not found")
            }
            serializeImage(e) {
                let t = document.getElementById(e + "_image");
                if (t) {
                    let e = document.createElement("canvas");
                    return e.width = t.width,
                    e.height = t.height,
                    e.getContext("2d").drawImage(t, 0, 0),
                    e.toDataURL("image/png")
                }
                throw Error("Image with id " + e + " not found")
            }
            patchAssets(e) {
                this.document.assets = z(z({}, this.document.assets), e)
            }
            get room() {
                return this.state.room
            }
            get isLocal() {
                return void 0 === this.state.room || "local" === this.state.room.id
            }
            get status() {
                return this.appState.status
            }
            get currentUser() {
                if (this.state.room)
                    return this.state.room.users[this.state.room.userId]
            }
            get centerPoint() {
                let {width: e, height: t} = this.rendererBounds;
                return u.B.toFixed([e / 2, t / 2])
            }
            get currentGrid() {
                let {zoom: e} = this.camera;
                return e < .15 ? 128 : e < 1 ? 32 : 8
            }
        }
          , sk = sx;
        j(sk, "version", 15.5),
        j(sk, "defaultDocument", {
            id: "doc",
            name: "New Document",
            version: sx.version,
            pages: {
                page: {
                    id: "page",
                    name: "Page 1",
                    childIndex: 1,
                    shapes: {},
                    bindings: {}
                }
            },
            pageStates: {
                page: {
                    id: "page",
                    selectedIds: [],
                    camera: {
                        point: [0, 0],
                        zoom: 1
                    }
                }
            },
            assets: {}
        }),
        j(sk, "defaultState", {
            settings: {
                isCadSelectMode: !1,
                isPenMode: !1,
                isDarkMode: !1,
                isZoomSnap: !1,
                isFocusMode: !1,
                isSnapping: !1,
                isDebugMode: !1,
                isReadonlyMode: !1,
                keepStyleMenuOpen: !1,
                nudgeDistanceLarge: 16,
                nudgeDistanceSmall: 1,
                showRotateHandles: !0,
                showBindingHandles: !0,
                showCloneHandles: !1,
                showGrid: !1,
                language: "en",
                dockPosition: "bottom",
                exportBackground: "transparent"
            },
            appState: {
                status: "idle",
                activeTool: "select",
                hoveredId: void 0,
                currentPageId: "page",
                currentStyle: e6,
                isToolLocked: !1,
                isMenuOpen: !1,
                isEmptyCanvas: !1,
                eraseLine: [],
                snapLines: [],
                isLoading: !1,
                disableAssets: !1
            },
            document: sx.defaultDocument
        }),
        j(sk, "assetSrc", "tldraw-assets.json");
        var sw = l.ErrorBoundary
          , sB = "undefined" != typeof window && !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        function sP({id: e, document: t, currentPageId: i, autofocus: s=!0, showMenu: n=!0, showMultiplayerMenu: a=!0, showPages: o=!0, showTools: l=!0, showZoom: d=!0, showStyles: h=!0, showUI: p=!0, readOnly: c=!1, disableAssets: u=!1, darkMode: g=sB, onMount: m, onChange: f, onChangePresence: b, onNewProject: v, onSaveProject: y, onSaveProjectAs: S, onOpenProject: I, onOpenMedia: x, onUndo: k, onRedo: w, onPersist: B, onPatch: P, onCommand: C, onChangePage: E, onAssetCreate: z, onAssetDelete: M, onAssetUpload: D, onSessionStart: j, onSessionEnd: A, onExport: T}) {
            let[O,F] = r.useState(e)
              , [L,R] = r.useState(()=>new sk(e,{
                onMount: m,
                onChange: f,
                onChangePresence: b,
                onNewProject: v,
                onSaveProject: y,
                onSaveProjectAs: S,
                onOpenProject: I,
                onOpenMedia: x,
                onUndo: k,
                onRedo: w,
                onPersist: B,
                onPatch: P,
                onCommand: C,
                onChangePage: E,
                onAssetDelete: M,
                onAssetCreate: z,
                onAssetUpload: D,
                onSessionStart: j,
                onSessionEnd: A
            }))
              , [H,Q] = r.useState(null)
              , [U,Z] = r.useState(null)
              , [K,_] = r.useState(null)
              , [N,W] = r.useState(null)
              , G = r.useCallback((e,t,i,s)=>{
                W(()=>e),
                Q(()=>s),
                Z(()=>t),
                _(()=>i)
            }
            , []);
            return r.useLayoutEffect(()=>{
                if (e === O)
                    return;
                let t = new sk(e,{
                    onMount: m,
                    onChange: f,
                    onChangePresence: b,
                    onNewProject: v,
                    onSaveProject: y,
                    onSaveProjectAs: S,
                    onOpenProject: I,
                    onOpenMedia: x,
                    onUndo: k,
                    onRedo: w,
                    onPersist: B,
                    onPatch: P,
                    onCommand: C,
                    onChangePage: E,
                    onAssetDelete: M,
                    onAssetCreate: z,
                    onAssetUpload: D,
                    onExport: T,
                    onSessionStart: j,
                    onSessionEnd: A
                });
                F(e),
                R(t)
            }
            , [O, e]),
            r.useEffect(()=>{
                t && (t.id === L.document.id ? L.updateDocument(t) : L.loadDocument(t))
            }
            , [t, L]),
            r.useEffect(()=>{
                L.setDisableAssets(u)
            }
            , [L, u]),
            r.useEffect(()=>{
                i && L.changePage(i)
            }
            , [i, L]),
            r.useEffect(()=>{
                L.readOnly = c,
                c || (L.selectNone(),
                L.cancelSession(),
                L.setEditingId())
            }
            , [L, c]),
            r.useEffect(()=>{
                g !== L.settings.isDarkMode && L.toggleDarkMode()
            }
            , [L, g]),
            r.useEffect(()=>{
                L.callbacks = {
                    onMount: m,
                    onChange: f,
                    onChangePresence: b,
                    onNewProject: v,
                    onSaveProject: y,
                    onSaveProjectAs: S,
                    onOpenProject: I,
                    onOpenMedia: x,
                    onUndo: k,
                    onRedo: w,
                    onPersist: B,
                    onPatch: P,
                    onCommand: C,
                    onChangePage: E,
                    onAssetDelete: M,
                    onAssetCreate: z,
                    onAssetUpload: D,
                    onExport: T,
                    onSessionStart: j,
                    onSessionEnd: A
                }
            }
            , [m, f, b, v, y, S, I, x, k, w, B, P, C, E, M, z, D, T, j, A]),
            r.useLayoutEffect(()=>{
                var e;
                if ("undefined" != typeof window && (null == (e = window.document) ? void 0 : e.fonts))
                    return window.document.fonts.addEventListener("loadingdone", t),
                    ()=>{
                        window.document.fonts.removeEventListener("loadingdone", t)
                    }
                    ;
                function t() {
                    L.refreshBoundingBoxes()
                }
            }
            , [L]),
            r.createElement(es.Provider, {
                value: L
            }, r.createElement(el.Provider, {
                value: {
                    onYes: U,
                    onCancel: H,
                    onNo: K,
                    dialogState: N,
                    setDialogState: W,
                    openDialog: G
                }
            }, r.createElement(sC, {
                key: O || "Tldraw",
                id: O,
                autofocus: s,
                showPages: o,
                showMenu: n,
                showMultiplayerMenu: a,
                showStyles: h,
                showZoom: d,
                showTools: l,
                showUI: p,
                readOnly: c
            })))
        }
        var sC = r.memo(function({id: e, autofocus: t, showPages: i, showMenu: s, showMultiplayerMenu: n, showZoom: a, showStyles: l, showTools: h, readOnly: p, showUI: c}) {
            var u, g, m;
            let f = en()
              , [b,v] = r.useState(null)
              , y = r.useRef(null)
              , S = f.useStore()
              , {document: I, settings: x, appState: k, room: w} = S
              , B = "select" === S.appState.activeTool
              , P = I.pages[k.currentPageId]
              , C = I.pageStates[P.id]
              , E = I.assets
              , {selectedIds: M} = C
              , D = 1 === M.length && P.shapes[M[0]] && ta.getShapeUtil(P.shapes[M[0]].type).hideBounds
              , j = 1 === M.length && P.shapes[M[0]] && ta.getShapeUtil(P.shapes[M[0]].type).hideResizeHandles
              , A = r.useMemo(()=>({
                isDarkMode: x.isDarkMode
            }), [x.isDarkMode])
              , T = x.isCadSelectMode ? !k.selectByContain : k.selectByContain
              , O = r.useMemo(()=>{
                let {selectByContain: e} = k
                  , {isDarkMode: t, isCadSelectMode: i} = x;
                if (t) {
                    let t = i ? e ? "69, 155, 255" : "105, 209, 73" : "180, 180, 180";
                    return {
                        brushFill: `rgba(${t}, ${i ? .08 : .05})`,
                        brushStroke: `rgba(${t}, ${i ? .5 : .25})`,
                        brushDashStroke: `rgba(${t}, .6)`,
                        selected: "rgba(38, 150, 255, 1.000)",
                        selectFill: "rgba(38, 150, 255, 0.05)",
                        background: "#212529",
                        foreground: "#49555f"
                    }
                }
                let s = i ? e ? "0, 89, 242" : "51, 163, 23" : "0,0,0";
                return {
                    brushFill: `rgba(${s}, ${i ? .08 : .05})`,
                    brushStroke: `rgba(${s}, ${i ? .4 : .25})`,
                    brushDashStroke: `rgba(${s}, .6)`
                }
            }
            , [x.isDarkMode, x.isCadSelectMode, k.selectByContain])
              , F = void 0 !== f.session
              , L = F && (null == (u = f.session) ? void 0 : u.constructor.name) !== "BrushSession" || !B || D || !!C.editingId
              , R = F && "brushing" !== S.appState.status || !B
              , H = F || !B || C.camera.zoom < .2
              , Q = (m = x.language,
            r.useMemo(()=>{
                var e, t;
                let i;
                return e = null != m ? m : navigator.language.split(/[-_]/)[0],
                i = er.find(t=>t.locale === e),
                {
                    locale: e,
                    label: null != (t = null == i ? void 0 : i.label) ? t : e,
                    messages: z(z({}, eo), null == i ? void 0 : i.messages)
                }
            }
            , [m]));
            return r.useLayoutEffect(()=>{
                let e = y.current;
                e && (x.isDarkMode ? e.classList.add(ec) : e.classList.remove(ec))
            }
            , [x.isDarkMode]),
            r.useEffect(()=>{
                let e = !1
                  , t = !1
                  , i = y.current;
                if (!i)
                    return;
                let s = s=>{
                    " " !== s.key || t || (t = !0,
                    e ? i.setAttribute("style", "cursor: grabbing !important") : i.setAttribute("style", "cursor: grab !important"))
                }
                  , n = e=>{
                    " " === e.key && (t = !1,
                    i.setAttribute("style", "cursor: initial"))
                }
                  , a = s=>{
                    e = !0,
                    1 === s.button && i.setAttribute("style", "cursor: grabbing !important"),
                    0 === s.button && t && i.setAttribute("style", "cursor: grabbing !important")
                }
                  , o = ()=>{
                    e = !1,
                    t ? i.setAttribute("style", "cursor: grab !important") : i.setAttribute("style", "cursor: initial")
                }
                ;
                return i.addEventListener("keydown", s),
                i.addEventListener("keyup", n),
                i.addEventListener("pointerdown", a),
                i.addEventListener("pointerup", o),
                ()=>{
                    i.removeEventListener("keydown", s),
                    i.removeEventListener("keyup", n),
                    i.removeEventListener("pointerdown", a),
                    i.removeEventListener("pointerup", o)
                }
            }
            , [y.current]),
            r.createElement(ea.Provider, {
                value: y
            }, r.createElement(d.Z, {
                locale: Q.locale,
                messages: Q.messages
            }, r.createElement(sz, {
                ref: y,
                tabIndex: -0
            }, r.createElement(eg, null), r.createElement(sE, {
                focusableRef: y,
                autofocus: t
            }), r.createElement(sw, {
                FallbackComponent: r.createElement("span", null)
            }, r.createElement(o.Th, {
                id: e,
                containerRef: y,
                shapeUtils: iH,
                page: P,
                pageState: C,
                assets: E,
                snapLines: k.snapLines,
                eraseLine: k.eraseLine,
                grid: 8,
                users: null == w ? void 0 : w.users,
                userId: null == w ? void 0 : w.userId,
                theme: O,
                meta: A,
                hideBounds: L,
                hideHandles: F || !B,
                hideResizeHandles: j,
                hideIndicators: R,
                hideBindingHandles: !x.showBindingHandles,
                hideCloneHandles: H,
                hideRotateHandles: !x.showRotateHandles,
                hideGrid: !x.showGrid,
                showDashedBrush: T,
                performanceMode: null == (g = f.session) ? void 0 : g.performanceMode,
                onPinchStart: f.onPinchStart,
                onPinchEnd: f.onPinchEnd,
                onPinch: f.onPinch,
                onPan: f.onPan,
                onZoom: f.onZoom,
                onPointerDown: f.onPointerDown,
                onPointerMove: f.onPointerMove,
                onPointerUp: f.onPointerUp,
                onPointCanvas: f.onPointCanvas,
                onDoubleClickCanvas: f.onDoubleClickCanvas,
                onRightPointCanvas: f.onRightPointCanvas,
                onDragCanvas: f.onDragCanvas,
                onReleaseCanvas: f.onReleaseCanvas,
                onPointShape: f.onPointShape,
                onDoubleClickShape: f.onDoubleClickShape,
                onRightPointShape: f.onRightPointShape,
                onDragShape: f.onDragShape,
                onHoverShape: f.onHoverShape,
                onUnhoverShape: f.onUnhoverShape,
                onReleaseShape: f.onReleaseShape,
                onPointBounds: f.onPointBounds,
                onDoubleClickBounds: f.onDoubleClickBounds,
                onRightPointBounds: f.onRightPointBounds,
                onDragBounds: f.onDragBounds,
                onHoverBounds: f.onHoverBounds,
                onUnhoverBounds: f.onUnhoverBounds,
                onReleaseBounds: f.onReleaseBounds,
                onPointBoundsHandle: f.onPointBoundsHandle,
                onDoubleClickBoundsHandle: f.onDoubleClickBoundsHandle,
                onRightPointBoundsHandle: f.onRightPointBoundsHandle,
                onDragBoundsHandle: f.onDragBoundsHandle,
                onHoverBoundsHandle: f.onHoverBoundsHandle,
                onUnhoverBoundsHandle: f.onUnhoverBoundsHandle,
                onReleaseBoundsHandle: f.onReleaseBoundsHandle,
                onPointHandle: f.onPointHandle,
                onDoubleClickHandle: f.onDoubleClickHandle,
                onRightPointHandle: f.onRightPointHandle,
                onDragHandle: f.onDragHandle,
                onHoverHandle: f.onHoverHandle,
                onUnhoverHandle: f.onUnhoverHandle,
                onReleaseHandle: f.onReleaseHandle,
                onError: f.onError,
                onRenderCountChange: f.onRenderCountChange,
                onShapeChange: f.onShapeChange,
                onShapeBlur: f.onShapeBlur,
                onShapeClone: f.onShapeClone,
                onBoundsChange: f.updateBounds,
                onKeyDown: f.onKeyDown,
                onKeyUp: f.onKeyUp,
                onDragOver: f.onDragOver,
                onDrop: f.onDrop
            })))))
        })
          , sE = r.memo(function({focusableRef: e, autofocus: t}) {
            return function(e) {
                let t = en()
                  , i = r.useCallback((i=!1)=>{
                    let s = e.current;
                    return !!i && (!!t.isMenuOpen || !!t.settings.keepStyleMenuOpen) || (null == s || s.focus(),
                    s && (document.activeElement === s || s.contains(document.activeElement)))
                }
                , [e]);
                r.useEffect(()=>{
                    if (!t)
                        return;
                    let e = e=>{
                        if (i(!0)) {
                            if (t.readOnly) {
                                t.copy(void 0, e);
                                return
                            }
                            t.cut(void 0, e)
                        }
                    }
                      , s = e=>{
                        i(!0) && t.copy(void 0, e)
                    }
                      , n = e=>{
                        !i(!0) || t.readOnly || t.paste(void 0, e)
                    }
                    ;
                    return document.addEventListener("cut", e),
                    document.addEventListener("copy", s),
                    document.addEventListener("paste", n),
                    ()=>{
                        document.removeEventListener("cut", e),
                        document.removeEventListener("copy", s),
                        document.removeEventListener("paste", n)
                    }
                }
                , [t]),
                (0,
                p.y1)("v,1", ()=>{
                    i(!0) && t.selectTool("select")
                }
                , [t, e.current]),
                (0,
                p.y1)("d,p,2", ()=>{
                    i(!0) && t.selectTool("draw")
                }
                , void 0, [t]),
                (0,
                p.y1)("e,3", ()=>{
                    i(!0) && t.selectTool("erase")
                }
                , void 0, [t]),
                (0,
                p.y1)("r,4", ()=>{
                    i(!0) && t.selectTool("rectangle")
                }
                , void 0, [t]),
                (0,
                p.y1)("o,5", ()=>{
                    i(!0) && t.selectTool("ellipse")
                }
                , void 0, [t]),
                (0,
                p.y1)("g,6", ()=>{
                    i() && t.selectTool("triangle")
                }
                , void 0, [t]),
                (0,
                p.y1)("l,7", ()=>{
                    i(!0) && t.selectTool("line")
                }
                , void 0, [t]),
                (0,
                p.y1)("a,8", ()=>{
                    i(!0) && t.selectTool("arrow")
                }
                , void 0, [t]),
                (0,
                p.y1)("t,9", ()=>{
                    i(!0) && t.selectTool("text")
                }
                , void 0, [t]),
                (0,
                p.y1)("s,0", ()=>{
                    i(!0) && t.selectTool("sticky")
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+shift+d,⌘+shift+d", e=>{
                    i(!0) && (t.toggleDarkMode(),
                    e.preventDefault())
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+.,⌘+.", ()=>{
                    i(!0) && t.toggleFocusMode()
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+shift+g,⌘+shift+g", ()=>{
                    i(!0) && t.toggleGrid()
                }
                , void 0, [t]);
                let {onNewProject: s, onOpenProject: n, onSaveProject: a, onSaveProjectAs: o, onOpenMedia: l} = function() {
                    let e = en()
                      , {openDialog: t} = ed();
                    return {
                        onNewProject: r.useCallback(i=>A(this, null, function*() {
                            var s, n;
                            i && e.callbacks.onOpenProject && i.preventDefault(),
                            null == (n = (s = e.callbacks).onNewProject) || n.call(s, e, t)
                        }), [e, t]),
                        onSaveProject: r.useCallback(t=>{
                            var i, s;
                            t && e.callbacks.onOpenProject && t.preventDefault(),
                            null == (s = (i = e.callbacks).onSaveProject) || s.call(i, e)
                        }
                        , [e]),
                        onSaveProjectAs: r.useCallback(t=>{
                            var i, s;
                            t && e.callbacks.onOpenProject && t.preventDefault(),
                            null == (s = (i = e.callbacks).onSaveProjectAs) || s.call(i, e)
                        }
                        , [e]),
                        onOpenProject: r.useCallback(i=>A(this, null, function*() {
                            var s, n;
                            i && e.callbacks.onOpenProject && i.preventDefault(),
                            null == (n = (s = e.callbacks).onOpenProject) || n.call(s, e, t)
                        }), [e, t]),
                        onOpenMedia: r.useCallback(t=>A(this, null, function*() {
                            var i, s;
                            t && e.callbacks.onOpenMedia && t.preventDefault(),
                            null == (s = (i = e.callbacks).onOpenMedia) || s.call(i, e)
                        }), [e])
                    }
                }();
                (0,
                p.y1)("ctrl+n,⌘+n", e=>{
                    e.preventDefault(),
                    i() && s(e)
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+s,⌘+s", e=>{
                    i() && a(e)
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+shift+s,⌘+shift+s", e=>{
                    i() && o(e)
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+o,⌘+o", e=>{
                    i() && n(e)
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+u,⌘+u", e=>{
                    i() && l(e)
                }
                , void 0, [t]),
                (0,
                p.y1)("⌘+z,ctrl+z", e=>{
                    e.preventDefault(),
                    i(!0) && (t.session ? t.cancelSession() : t.undo())
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+shift+z,⌘+shift+z", ()=>{
                    i(!0) && (t.session ? t.cancelSession() : t.redo())
                }
                , void 0, [t]),
                (0,
                p.y1)("⌘+u,ctrl+u", ()=>{
                    i() && t.undoSelect()
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+shift-u,⌘+shift+u", ()=>{
                    i() && t.redoSelect()
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+=,⌘+=,ctrl+num_add,⌘+num_add", e=>{
                    i(!0) && (t.zoomIn(),
                    e.preventDefault())
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+-,⌘+-,ctrl+num_subtract,⌘+num_subtract", e=>{
                    i(!0) && (t.zoomOut(),
                    e.preventDefault())
                }
                , void 0, [t]),
                (0,
                p.y1)("shift+0,ctrl+numpad_0,⌘+numpad_0", ()=>{
                    i(!0) && t.resetZoom()
                }
                , void 0, [t]),
                (0,
                p.y1)("shift+1", ()=>{
                    i(!0) && t.zoomToFit()
                }
                , void 0, [t]),
                (0,
                p.y1)("shift+2", ()=>{
                    i(!0) && t.zoomToSelection()
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+d,⌘+d", e=>{
                    i() && (t.duplicate(),
                    e.preventDefault())
                }
                , void 0, [t]),
                (0,
                p.y1)("shift+h", ()=>{
                    i(!0) && t.flipHorizontal()
                }
                , void 0, [t]),
                (0,
                p.y1)("shift+v", ()=>{
                    i(!0) && t.flipVertical()
                }
                , void 0, [t]),
                (0,
                p.y1)("escape", ()=>{
                    i(!0) && t.cancel()
                }
                , void 0, [t]),
                (0,
                p.y1)("backspace,del", ()=>{
                    i() && t.delete()
                }
                , void 0, [t]),
                (0,
                p.y1)("⌘+a,ctrl+a", ()=>{
                    i(!0) && t.selectAll()
                }
                , void 0, [t]),
                (0,
                p.y1)("up", ()=>{
                    i() && t.nudge([0, -1], !1)
                }
                , void 0, [t]),
                (0,
                p.y1)("right", ()=>{
                    i() && t.nudge([1, 0], !1)
                }
                , void 0, [t]),
                (0,
                p.y1)("down", ()=>{
                    i() && t.nudge([0, 1], !1)
                }
                , void 0, [t]),
                (0,
                p.y1)("left", ()=>{
                    i() && t.nudge([-1, 0], !1)
                }
                , void 0, [t]),
                (0,
                p.y1)("shift+up", ()=>{
                    i() && t.nudge([0, -1], !0)
                }
                , void 0, [t]),
                (0,
                p.y1)("shift+right", ()=>{
                    i() && t.nudge([1, 0], !0)
                }
                , void 0, [t]),
                (0,
                p.y1)("shift+down", ()=>{
                    i() && t.nudge([0, 1], !0)
                }
                , void 0, [t]),
                (0,
                p.y1)("shift+left", ()=>{
                    i() && t.nudge([-1, 0], !0)
                }
                , void 0, [t]),
                (0,
                p.y1)("⌘+shift+l,ctrl+shift+l", ()=>{
                    i() && t.toggleLocked()
                }
                , void 0, [t]),
                (0,
                p.y1)("⌘+shift+c,ctrl+shift+c", e=>{
                    i() && (t.copySvg(),
                    e.preventDefault())
                }
                , void 0, [t]),
                (0,
                p.y1)("⌘+g,ctrl+g", e=>{
                    i() && (t.group(),
                    e.preventDefault())
                }
                , void 0, [t]),
                (0,
                p.y1)("⌘+shift+g,ctrl+shift+g", e=>{
                    i() && (t.ungroup(),
                    e.preventDefault())
                }
                , void 0, [t]),
                (0,
                p.y1)("[", ()=>{
                    i(!0) && t.moveBackward()
                }
                , void 0, [t]),
                (0,
                p.y1)("]", ()=>{
                    i(!0) && t.moveForward()
                }
                , void 0, [t]),
                (0,
                p.y1)("shift+[", ()=>{
                    i(!0) && t.moveToBack()
                }
                , void 0, [t]),
                (0,
                p.y1)("shift+]", ()=>{
                    i(!0) && t.moveToFront()
                }
                , void 0, [t]),
                (0,
                p.y1)("ctrl+shift+backspace,⌘+shift+backspace", e=>{
                    i() && (t.settings.isDebugMode && t.resetDocument(),
                    e.preventDefault())
                }
                , void 0, [t]),
                (0,
                p.y1)("alt+command+l,alt+ctrl+l", e=>{
                    i(!0) && (t.style({
                        textAlign: "start"
                    }),
                    e.preventDefault())
                }
                , void 0, [t]),
                (0,
                p.y1)("alt+command+t,alt+ctrl+t", e=>{
                    i(!0) && (t.style({
                        textAlign: "middle"
                    }),
                    e.preventDefault())
                }
                , void 0, [t]),
                (0,
                p.y1)("alt+command+r,alt+ctrl+r", e=>{
                    i(!0) && (t.style({
                        textAlign: "end"
                    }),
                    e.preventDefault())
                }
                , void 0, [t])
            }(e),
            r.useLayoutEffect(()=>{
                if (ee.get(et))
                    return;
                let e = document.createElement("style");
                return e.innerHTML = ei,
                e.setAttribute("id", et),
                document.head.appendChild(e),
                ee.set(et, e),
                ()=>{
                    e && document.head.contains(e) && (document.head.removeChild(e),
                    ee.delete(et))
                }
            }
            , []),
            r.useEffect(()=>{
                var i;
                t && (null == (i = e.current) || i.focus())
            }
            , [t]),
            null
        })
          , sz = eh("div", {
            position: "absolute",
            height: "100%",
            width: "100%",
            minHeight: 0,
            minWidth: 0,
            maxHeight: "100%",
            maxWidth: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
            outline: "none",
            "& .tl-container": {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                zIndex: 1
            },
            "& input, textarea, button, select, label, button": {
                webkitTouchCallout: "none",
                webkitUserSelect: "none",
                "-webkit-tap-highlight-color": "transparent",
                "tap-highlight-color": "transparent"
            }
        });
        eh("div", {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            padding: "8px 8px 0 8px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            pointerEvents: "none",
            zIndex: 2,
            "& > *": {
                pointerEvents: "all"
            }
        }),
        eh("div", {
            flexGrow: 2
        })
    }
}]);
//# sourceMappingURL=b13ba9de-11ef9f2e07c3e310.js.map
