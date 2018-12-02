<template>
  <div>
    <p>render</p>
    <ul class="list-group">
      <li class="list-group-item">
        <p>@anchored-heading</p>
        <anchored-heading :level="2">
          testing
        </anchored-heading>
      </li>
      <li class="list-group-item">
        <p>@jsx-anchored-heading</p>
        <jsx-anchored-heading />
      </li>
      <li class="list-group-item">
        <p>@div-with-content</p>
        <div-with-content />
      </li>
    </ul>
  </div>
</template>

<script>
// see: https://vuejs.org/v2/guide/render-function.html
// see: https://vuejs.org/v2/guide/render-function.html#createElement-Arguments

const AnchoredHeadingComponent = {
  render: function (createElement) {
    return createElement(
      'h' + this.level, // tag name
      this.$slots.default // array of children
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}

const JsxAnchoredHeadingComponent = {
  render: function (h) {
    return (
      <AnchoredHeadingComponent level={1}>
        <span>Hello</span> world!
      </AnchoredHeadingComponent>
    )
  }
}

const DivWithContentComponent = {
  render(createElement) {
    // @returns {VNode}
    return createElement(
      // {String | Object | Function}
      // An HTML tag name, component options, or async
      // function resolving to one of these. Required.
      'div',

      // {Object}
      // A data object corresponding to the attributes
      // you would use in a template. Optional.
      {
        // (see details in the next section below)
      },

      // {String | Array}
      // Children VNodes, built using `createElement()`,
      // or using strings to get 'text VNodes'. Optional.
      [
        'Some text comes first.',
        createElement('h1', 'A headline'),
        createElement(AnchoredHeadingComponent, {
          props: {
            level: 4
          },
          domProps: {
            innerHTML: 'anchored-headind-via-createElement'
          }
        })
      ]
    )
  }
}

export default {
  components: {
    'anchored-heading': AnchoredHeadingComponent,
    'jsx-anchored-heading': JsxAnchoredHeadingComponent,
    'div-with-content': DivWithContentComponent
  }
}
</script>

<style>
</style>
