  const formData = [
    {
      id: "c0ac49c5-871e-4c72-a878-251de465e6b4",
      type: "input",
      label: "Sample Input",
      placeholder: "Sample placeholder"
    },
    {
      id: "146e69c2-1630-4a27-9d0b-f09e463a66e4",
      type: "select",
      label: "Sample Select",
      options: ["Sample Option 1", "Sample Option 2", "Sample Option 3"]
    },
    {
      id: "45002ecf-85cf-4852-bc46-529f94a758f5",
      type: "textarea",
      label: "Sample Textarea",
      placeholder: "Sample Placeholder"
    },
    {
      id: "680cff8d-c7f9-40be-8767-e3d6ba420952",
      type: "checkbox",
      label: "Sample Checkbox"
    }
  ];

  const form = document.getElementById("form");

  function createFormElement(data) {
    const wrapper = document.createElement("div");
    wrapper.style.marginBottom = "10px";

    const label = document.createElement("label");
    label.textContent = data.label;
    label.style.display = "block";

    let element;
    if (data.type === "input") {
      element = document.createElement("input");
      element.type = "text";
      element.placeholder = data.placeholder || "";
    } else if (data.type === "select") {
      element = document.createElement("select");
      data.options.forEach(optionText => {
        const option = document.createElement("option");
        option.textContent = optionText;
        element.appendChild(option);
      });
    } else if (data.type === "textarea") {
      element = document.createElement("textarea");
      element.placeholder = data.placeholder || "";
    }

    wrapper.appendChild(label);
    wrapper.appendChild(element);
    form.appendChild(wrapper);
  }

  document.getElementById("input").addEventListener("click", () => {
    const inputData = formData.find(item => item.type === "input");
    if (inputData) createFormElement(inputData);
  });

  document.getElementById("select").addEventListener("click", () => {
    const selectData = formData.find(item => item.type === "select");
    if (selectData) createFormElement(selectData);
  });

  document.getElementById("textarea").addEventListener("click", () => {
    const textareaData = formData.find(item => item.type === "textarea");
    if (textareaData) createFormElement(textareaData);
  });


