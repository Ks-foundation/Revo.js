class RevoPseudoDOM {
  constructor() {
    this.elements = [];
  }

  createElement(tagName, attributes, textContent) {
    const element = { tagName, attributes: attributes || {}, textContent };
    this.elements.push(element);
    return element;
  }

  render() {
    let output = '';
    this.elements.forEach(element => {
      let attributes = Object.entries(element.attributes).map(([attr, value]) => `${attr}="${value}"`).join(' ');
      if (attributes) {
        attributes = ' ' + attributes;
      }
      const textContent = element.textContent || '';
      output += `<${element.tagName}${attributes}>${textContent}</${element.tagName}>`;
    });
    return output;
  }
}
