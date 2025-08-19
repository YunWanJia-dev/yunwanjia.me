class SocialLinkElement extends HTMLElement {
    // shadowRoot: ShadowRoot = this.attachShadow({ mode: 'open' });

    // static get observedAttributes() {
    //     return ['icon', 'text', 'link'];
    constructor() {
        super();
    }

    // }
    get text(): string {
        return this.getAttribute('text')!!
    }

    get icon() {
        return this.getAttribute('icon')!!;
    }

    get link() {
        return this.getAttribute('link')!!;
    }

    connectedCallback() {
        this.render();
    }

    private render() {
        const template = document.getElementById('social-link') as HTMLTemplateElement;
        // if (!template) return;

        // 克隆模板内容
        const instance = template.content.cloneNode(true) as DocumentFragment;

        // 替换模板中的变量
        // const button = instance.querySelector('button')!;

        const span = instance.querySelector('span')! as HTMLSpanElement;
        span.textContent = this.text;

        // 设置图标URL为CSS变量
        const iconSpan = instance.querySelector('svg')! as SVGElement;
        iconSpan.style.setProperty('--icon-url', `url('/icons/${this.icon}.svg')`);

        const a = instance.querySelector('a')! as HTMLAnchorElement
        a.href = this.link
        // this.shadowRoot!.appendChild(instance);
        this.append(instance);
    }
}

// 注册自定义元素
customElements.define('social-link', SocialLinkElement);

// 示例：动态添加元素（可选）
// document.addEventListener('DOMContentLoaded', () => {
//     const main = document.querySelector('main')!;
//
//     // 创建新的自定义元素实例
//     const newElement = document.createElement('social-link');
//     newElement.setAttribute('icon', 'settings');
//     newElement.setAttribute('text', '设置');
//
//     main.appendChild(newElement);
// });