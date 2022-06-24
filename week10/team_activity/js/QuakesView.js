
export default class QuakesView {
  renderQuakeList(quakeList, listElement) {
      console.log('This is the quakelist in renderQuakeList', quakeList);
      listElement.innerText = '';
      let liList = quakeList.features
      .map(quake => {
          let li = document.createElement('li');
          li.setAttribute('data-id', quake.properties.id);
          li.addEventListener('click', this.renderQuake.bind(this, quake, li))
          li.innerText = `${quake.properties.title}, ${new Date(
              quake.properties.time
          )}`;
          return li;
      });
      liList.forEach(li => {
          listElement.appendChild(li);
      });
  }
  renderQuake(quake, element) {
      const quakeProperties = Object.entries(quake.properties);
      // console.log(`The quake properties for quake ${quake.properties.id}: `, quakeProperties);
      element.innerHTML = quakeProperties.map(property => {
          return `${property[0]}: ${property[1]}`
      })
      .join('<br>');
  }
}