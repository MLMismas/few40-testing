import { SuperBasicComponent } from './super-basic.component';
import { DefaultsService } from './defaults.service';

xdescribe('testing a component class directly', () => {
  let component: SuperBasicComponent;
  beforeEach(() => {
    component = new SuperBasicComponent(new DefaultsService());
    component.ngOnInit();
  });
  it('has the default word of tacos', () => {
    // const component = new SuperBasicComponent();
    expect(component.word).toBe('Tacos');
  });
  it('changes it to upper case when you call the method', () => {
    // const component = new SuperBasicComponent();
    component.makeUpper();
    expect(component.word).toBe('TACOS');
  });
});
