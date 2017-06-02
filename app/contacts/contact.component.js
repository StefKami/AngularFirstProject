System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this.contact = null;
                }
                ContactComponent.prototype.onCreateNew = function () {
                    this._router.navigate(['NewContact', { lastName: this.contact.lastName }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: "contact",
                        templateUrl: '/dev/contacts/contact.template.html',
                        inputs: ["contact"],
                        styles: ["\n\t\tlabel {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 140px;\n\t\t}\n\n\t\tinput{\n\t\t\twidth:250px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUdDLDBCQUFvQixPQUFlO29CQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRjVCLFlBQU8sR0FBWSxJQUFJLENBQUM7Z0JBRU8sQ0FBQztnQkFFdkMsc0NBQVcsR0FBWDtvQkFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUUsQ0FBQztnQkF0QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNuQixNQUFNLEVBQUUsQ0FBQyxzSEFTUixDQUFDO3FCQUNGLENBQUM7O29DQUFBO2dCQVNGLHVCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCwrQ0FRQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtDb250YWN0fSBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29udGFjdFwiLCBcclxuXHR0ZW1wbGF0ZVVybDogJy9kZXYvY29udGFjdHMvY29udGFjdC50ZW1wbGF0ZS5odG1sJywgXHJcblx0aW5wdXRzOiBbXCJjb250YWN0XCJdLFxyXG5cdHN0eWxlczogW2BcclxuXHRcdGxhYmVsIHtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHR3aWR0aDogMTQwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXR7XHJcblx0XHRcdHdpZHRoOjI1MHB4O1xyXG5cdFx0fVxyXG5cdGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IHtcclxuXHRwdWJsaWMgY29udGFjdDogQ29udGFjdCA9IG51bGw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxyXG5cdFxyXG5cdG9uQ3JlYXRlTmV3KCkge1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnTmV3Q29udGFjdCcsIHtsYXN0TmFtZTogdGhpcy5jb250YWN0Lmxhc3ROYW1lfV0pO1xyXG5cdH1cclxufSJdfQ==
