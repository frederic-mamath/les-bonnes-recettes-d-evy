module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "This is a global component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Type the component's name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{name}}/{{name}}.tsx",
        templateFile: "plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "components/{{name}}/index.ts",
        templateFile: "plop-templates/index.hbs",
      },
    ],
  });
};
