import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue', () => {
  // mount weaves the component with the test utilities
  let wrapper
  beforeEach(() => {
    // mount the component
    wrapper = mount(TodoApp, {})
  })

  afterEach(() => {
  })

  // should render todo app
  it('renders todo app', () => {
    expect(wrapper.find('[data-test="todo-app"]').exists()).toBe(true)
  })

  // should render todo list
  it('renders todo list', () => {
    expect(wrapper.find('[data-test="todo-list"]').exists()).toBe(true)
  })

  // should render todo text
  it('renders todo text', () => {
    // Works just like `find` but will throw an error if nothing matching the given selector is found. 
    // You should use `find` when searching for an element that may not exist. 
    expect(wrapper.get('[data-test="todo-text"]').text()).toBe('What needs to be done?')
  })

  it('sould add new todo', async()=> {
    // lenght of [data-test="todo"] should be 1
    expect(wrapper.findAll('[data-test="todo"]').length).toBe(1)
    
    // set value to todo-input
    wrapper.get('[data-test="todo-input"]').setValue('New Todo')

    // trigger wrapper form
    wrapper.get('[data-test="todo-form"]').trigger('submit.prevent')

    // wait for next tick
    await wrapper.vm.$nextTick()

    // lenght of [data-test="todo"] should be 2
    expect(wrapper.findAll('[data-test="todo"]').length).toBe(2)
    
  })
  
  it('should remove todo', async()=> {
    // lenght of [data-test="todo"] should be 1
    expect(wrapper.findAll('[data-test="todo"]').length).toBe(1)
    
    // trigger remove button
    wrapper.find('[data-test="todo-remove"]').trigger('click')

    // wait for next tick
    await wrapper.vm.$nextTick()

    // lenght of [data-test="todo"] should be 1
    expect(wrapper.findAll('[data-test="todo"]').length).toBe(0)
    
  })

  // should be able to mark todo as completed
  it('should mark todo as completed', async()=> {
    // todo-text should not have class completed
    expect(wrapper.get('[data-test="todo-text"]').classes()).not.toContain('completed')
    
    // complete todo
    wrapper.get('[data-test="todo-checkbox"]').trigger('click')

    // wait for next tick
    await wrapper.vm.$nextTick()

    // todo-text should have class completed
    expect(wrapper.get('[data-test="todo-text"]').classes()).toContain('completed')
  })

})
