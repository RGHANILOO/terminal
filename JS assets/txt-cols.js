let i;
setInterval(() => {
  let spans = document.querySelectorAll("span");
  if (i === spans.length) return;
  spans.forEach((span) => {
    const color = span.getAttribute("data-color");
    span.style.color = color;
  });
  document.querySelectorAll(".help").forEach((span) => {
    span.onclick = () => {
      let inputs = document.querySelectorAll("input");
      inputs[inputs.length - 1].value = "help";
    //   clicking on help? will trigger a enter event and use help as command in inout
      window?.onkeydown({ key: "Enter" });
    };
  });
  i = spans.length;
});
