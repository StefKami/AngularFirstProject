System.register(['angular2/core', './contact.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, contact_service_1, router_1;
    var NewContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParams) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.passedLastName = "";
                }
                NewContactComponent.prototype.onAddContact = function (firstName, lastName, phone, email) {
                    var contact = { firstName: firstName, lastName: lastName, phone: phone, email: email };
                    this._contactService.insertContact(contact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.passedLastName = this._routeParams.get('lastName');
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/dev/contacts/new-contact.template.html',
                        providers: [contact_service_1.ContactService],
                        styles: ["\n\t\tlabel {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 140px;\n\t\t}\n\n\t\tinput{\n\t\t\twidth:250px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_1.RouteParams])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL25ldy1jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFJQyw2QkFBb0IsZUFBK0IsRUFBVSxPQUFlLEVBQVUsWUFBeUI7b0JBQTNGLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUZ4RyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztnQkFFdUYsQ0FBQztnQkFFbkgsMENBQVksR0FBWixVQUFhLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUs7b0JBQzdDLElBQUksT0FBTyxHQUFZLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDO29CQUM5RixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUVELHNDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkE3QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixXQUFXLEVBQUUseUNBQXlDO3dCQUN0RCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3dCQUMzQixNQUFNLEVBQUUsQ0FBQyxzSEFTUixDQUFDO3FCQUNGLENBQUM7O3VDQUFBO2dCQWlCRiwwQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQscURBZUMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9uZXctY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDb250YWN0U2VydmljZX0gZnJvbSAnLi9jb250YWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbnRhY3R9IGZyb20gJy4vY29udGFjdCc7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZVVybDogJy9kZXYvY29udGFjdHMvbmV3LWNvbnRhY3QudGVtcGxhdGUuaHRtbCcsIFxyXG5cdHByb3ZpZGVyczogW0NvbnRhY3RTZXJ2aWNlXSwgXHJcblx0c3R5bGVzOiBbYFxyXG5cdFx0bGFiZWwge1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdHdpZHRoOiAxNDBweDtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dHtcclxuXHRcdFx0d2lkdGg6MjUwcHg7XHJcblx0XHR9XHJcblx0YF0gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Q29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0XHJcblx0cHVibGljIHBhc3NlZExhc3ROYW1lID0gXCJcIjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2U6IENvbnRhY3RTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7fVxyXG5cclxuXHRvbkFkZENvbnRhY3QoZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmUsIGVtYWlsKSB7XHJcblx0XHRsZXQgY29udGFjdDogQ29udGFjdCA9IHtmaXJzdE5hbWU6IGZpcnN0TmFtZSwgbGFzdE5hbWU6IGxhc3ROYW1lLCBwaG9uZTogcGhvbmUsIGVtYWlsOiBlbWFpbH07XHJcblx0XHR0aGlzLl9jb250YWN0U2VydmljZS5pbnNlcnRDb250YWN0KGNvbnRhY3QpO1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQ29udGFjdHMnXSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHR0aGlzLnBhc3NlZExhc3ROYW1lID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdsYXN0TmFtZScpO1xyXG5cdH1cclxufSJdfQ==
