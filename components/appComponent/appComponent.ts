
export class Hero {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
};


function AppComponent() {
    const title: string = 'Tour of Heroes';

    const hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    function insertHeader(title:string, name: string, id: number): boolean {
        const header = document.createElement('h1');
        const subheader = document.createElement('h2');
        
        const createContainer = (parentTag: string, childTag: string, outerText: string, innerText: string): HTMLElement => {
            const parentElement = document.createElement(parentTag);
            const childElement = document.createElement(childTag);

            const childNode = document.createTextNode(innerText);
            const parentNode = document.createTextNode(outerText);

            childElement.appendChild(childNode);
            parentElement.appendChild(childElement);
            parentElement.appendChild(parentNode);

            return parentElement;

            // container.appendChild(textNode);
            // return container;
        }
        
        header.textContent = title;
        subheader.textContent = `${name} details!`;

        const rootElement: HTMLElement | null = document.getElementById('root');

        if (!rootElement) {
            console.error('Root element not found');
            return false;
        } else {
            const headingTags = [
                header,
                subheader
            ];
            const heroDetailsElements = [
                ['div', 'label', id.toString(), 'id:\u00A0'],
                ['div', 'label', hero.name, 'name:\u00A0']
            ];

            headingTags.forEach(element => {
                rootElement.appendChild(element);
            });

            heroDetailsElements.forEach(([parentTag, childTag, outerText, innerText]) => {
                rootElement.appendChild(createContainer(
                    parentTag,
                    childTag,
                    outerText,
                    innerText
                )
            );
            });
        };
        return true;
      };

      insertHeader(title, hero.name, hero?.id);
  
};
export default AppComponent;

