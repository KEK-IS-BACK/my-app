import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {create} from 'react-test-renderer'

describe("Test Status component", () => {
  test('Span should be render', () => {
    const component = create(<ProfileStatusWithHooks status={'Hi'}/>)
    const instance = component.root
    const span = instance.findByType('span')
    expect(span).not.toBeNull()
  })

  test('Span should have current status', () => {
    const component = create(<ProfileStatusWithHooks status={'Hi'}/>)
    const instance = component.root
    const span = instance.findByType('span')
    expect(span.children[0]).toBe('Hi')
  })

  test('On doubleClick should display input', () => {
    const mock = jest.fn()
    const component = create(<ProfileStatusWithHooks status={'Hi'}/>)
    const instance = component.root
    const span = instance.findByType('span')
    span.simulate('doubleClick')

  })
})