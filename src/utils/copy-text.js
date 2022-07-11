export const copyText = (value) => {
  navigator.clipboard.writeText(value).then(
    function () {
      console.log("Copied!");
    },
    function (err) {
      console.error("Error!", err);
    }
  );
};
