System.register(['angular2/core', '../contacts/contact.component', './contact.service'], function(exports_1, context_1) {
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
    var core_1, contact_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectedContact = null;
                }
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: "contact-list",
                        templateUrl: './dev/contacts/contact-list.template.html',
                        directives: [contact_component_1.ContactComponent],
                        providers: [contact_service_1.ContactService],
                        styleUrls: ["../src/css/contact-list.css"]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFJQyw4QkFBb0IsZUFBK0I7b0JBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFGNUMsb0JBQWUsR0FBRyxJQUFJLENBQUM7Z0JBRXdCLENBQUM7Z0JBRXZELHVDQUFRLEdBQVIsVUFBUyxPQUFPO29CQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELDBDQUFXLEdBQVg7b0JBQUEsaUJBRUM7b0JBREEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLENBQUMsQ0FBQztnQkFDM0YsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkF2QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLDJDQUEyQzt3QkFDeEQsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7d0JBQzlCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO3FCQUMxQyxDQUFDOzt3Q0FBQTtnQkFrQkYsMkJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHVEQWlCQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSAnLi4vY29udGFjdHMvY29udGFjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7XHJcbmltcG9ydCB7Q29udGFjdH0gZnJvbSAnLi9jb250YWN0JztcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbnRhY3QtbGlzdFwiLCBcclxuXHR0ZW1wbGF0ZVVybDogJy4vZGV2L2NvbnRhY3RzL2NvbnRhY3QtbGlzdC50ZW1wbGF0ZS5odG1sJywgXHJcblx0ZGlyZWN0aXZlczogW0NvbnRhY3RDb21wb25lbnRdLCBcclxuXHRwcm92aWRlcnM6IFtDb250YWN0U2VydmljZV0sIFxyXG5cdHN0eWxlVXJsczogW1wiLi4vc3JjL2Nzcy9jb250YWN0LWxpc3QuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRwdWJsaWMgY29udGFjdHM6IENvbnRhY3RbXTtcclxuXHRwdWJsaWMgc2VsZWN0ZWRDb250YWN0ID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2U6IENvbnRhY3RTZXJ2aWNlKSB7fVxyXG5cclxuXHRvblNlbGVjdChjb250YWN0KXtcclxuXHRcdHRoaXMuc2VsZWN0ZWRDb250YWN0ID0gY29udGFjdDtcclxuXHR9XHJcblxyXG5cdGdldENvbnRhY3RzKCkge1xyXG5cdFx0dGhpcy5fY29udGFjdFNlcnZpY2UuZ2V0Q29udGFjdHMoKS50aGVuKChjb250YWN0czpDb250YWN0W10pID0+IHRoaXMuY29udGFjdHMgPSBjb250YWN0cyk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpOmFueSB7XHJcblx0XHR0aGlzLmdldENvbnRhY3RzKCk7XHJcblx0fVxyXG59Il19
