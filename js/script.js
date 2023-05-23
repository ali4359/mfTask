// Sample array of 50 records in Chinese
var records = [
  {
    No: "1",
    基本类型: "类型1",
    申请类型: "申请类型1",
    提交文件: "보기1",
    申请时间: "2023-01-10 09:00:00",
    批准与否: "승인대기1",
    批准拒绝原因:
      "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    批准时间: "批准时间1",
    管理员: "管理员1",
    标签1: "标签1值",
    标签2: "标签2值",
    标签3: "标签3值",
    标签4: "标签4值",
    标签5: "标签5值",
    标签6: "标签6值",
    标签7: "标签7值",
    标签8: "标签8值",
    标签9: "标签9值",
    // 标签10: "标签10值",
  },
];

for (var i = 2; i <= 150; i++) {
  var newObj = {
    No: i.toString(),
    基本类型: "类型" + i.toString(),
    申请类型: "申请类型" + i.toString(),
    提交文件: "보기" + i.toString(),
    申请时间: "2023-01-10 09:00:00" + i.toString(),
    批准与否: "승인대기" + i.toString(),
    批准拒绝原因:
      "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가" +
      i.toString(),
    批准时间: "批准时间" + i.toString(),
    管理员: "管理员" + i.toString(),
    标签1: "标签1值",
    标签2: "标签2值",
    标签3: "标签3值",
    标签4: "标签4值",
    标签5: "标签5值",
    标签6: "标签6值",
    标签7: "标签7值",
    标签8: "标签8值",
    标签9: "标签9值",
    // 标签10: "标签10值",
  };
  records.push(newObj);
}

var itemsPerPage = 30;
var currentPage = 1;
var totalPages = Math.ceil(records.length / itemsPerPage);

var table = document.getElementById("myTable");
var thead = table.createTHead();
var tbody = table.createTBody();
var paginationNumbers = document.getElementById("paginationNumbers");
var prevPageBtn = document.getElementById("prevPage");
var nextPageBtn = document.getElementById("nextPage");

function displayTable() {
  // Clear table body content
  tbody.innerHTML = "";

  // Loop through visible records and create table rows
  var startIndex = (currentPage - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  var visibleRecords = records.slice(startIndex, endIndex);
  // Define an array of colors
  var bgColors = ["#FFEDD5", "#FEE2E2", "#DCFCE7"];
  var textColors = ["#9A3412", "#991B1B", "#166534"];

  visibleRecords.forEach(function (record, rowIndex) {
    var row = tbody.insertRow();

    // Add class to even rows
    if (rowIndex % 2 === 1) {
      row.classList.add("even-row");
    }

    // Create checkbox cell
    var checkboxCell = row.insertCell();
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxCell.appendChild(checkbox);

    // Create table cells and populate data
    Object.keys(record).forEach(function (key, index) {
      var cell = row.insertCell();

      if (index === 3) {
        // Create a new div element within the cell
        var div = document.createElement("div");
        div.textContent = record[key];
        div.classList.add("table_pill");
        cell.appendChild(div);
      } else if (index === 5) {
        // Create a new div element within the cell
        var div = document.createElement("div");
        div.textContent = record[key];
        div.classList.add("table_pill_color");

        var randomIndex = Math.floor(Math.random() * bgColors.length);
        var bgColor = bgColors[randomIndex];
        var textColor = textColors[randomIndex];

        div.style.backgroundColor = bgColor;
        div.style.color = textColor;
        cell.appendChild(div);
      } else {
        cell.textContent = record[key];
      }
    });
  });
}

var firstPageBtn = document.getElementById("firstPage");
var lastPageBtn = document.getElementById("lastPage");

function generatePaginationNumbers() {
  paginationNumbers.innerHTML = "";
  for (var i = 1; i <= totalPages; i++) {
    var pageNumber = document.createElement("span");
    pageNumber.textContent = i;
    pageNumber.style.width = "40px";
    pageNumber.style.height = "40px";
    if (i === currentPage) {
      pageNumber.classList.add("active");
    }
    pageNumber.addEventListener("click", function () {
      currentPage = parseInt(this.textContent);
      displayTable();
      generatePaginationNumbers();
    });
    paginationNumbers.appendChild(pageNumber);
  }
}

function updatePaginationButtons() {
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;
}

prevPageBtn.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    displayTable();
    generatePaginationNumbers();
    updatePaginationButtons();
  }
});

nextPageBtn.addEventListener("click", function () {
  if (currentPage < totalPages) {
    currentPage++;
    displayTable();
    generatePaginationNumbers();
    updatePaginationButtons();
  }
});

firstPageBtn.addEventListener("click", function () {
  if (currentPage !== 1) {
    currentPage = 1;
    displayTable();
    generatePaginationNumbers();
    updatePaginationButtons();
  }
});

lastPageBtn.addEventListener("click", function () {
  if (currentPage !== totalPages) {
    currentPage = totalPages;
    displayTable();
    generatePaginationNumbers();
    updatePaginationButtons();
  }
});

displayTable();
generatePaginationNumbers();
updatePaginationButtons();

// "Select All" checkbox logic
var selectAllCheckbox = document.getElementById("selectAll");
var checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');

selectAllCheckbox.addEventListener("change", function () {
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = selectAllCheckbox.checked;
  });
});

// button group
var buttons = document.getElementsByClassName("button");

// Add click event listener to each button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // Remove active class from all buttons
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }

    // Add active class to the clicked button
    this.classList.add("active");
  });
}

function dropdownToggle(index) {
  var dropdownMenus = document.getElementsByClassName("dropdown-menu");

  // Close all other dropdowns
  for (var i = 0; i < dropdownMenus.length; i++) {
    if (i !== index) {
      dropdownMenus[i].classList.remove("show");
    }
  }

  // Toggle the visibility of the clicked dropdown
  var dropdownMenu = document.getElementById("dropdownMenu" + index);
  dropdownMenu.classList.toggle("show");

  // Set the dropdown value to the button
  var button = document.getElementsByClassName("dropdown-toggle")[index];
  var dropdownItems = dropdownMenu.getElementsByClassName("dropdown-item");
  for (var j = 0; j < dropdownItems.length; j++) {
    dropdownItems[j].addEventListener("click", function () {
      var selectedValue = this.innerText;
      button.innerText = selectedValue;

      // Close the dropdown
      dropdownMenu.classList.remove("show");
    });
  }
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-toggle")) {
    var dropdownMenus = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdownMenus.length; i++) {
      var openDropdown = dropdownMenus[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// show and hide sections
// Hide all divs except the first one
var divs = document.querySelectorAll('[id^="div"]');
for (var i = 1; i < divs.length; i++) {
  divs[i].style.display = "none";
}

function showDiv(index) {
  // Hide all divs
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }

  // Show the selected div
  var selectedDiv = document.getElementById("div" + index);
  selectedDiv.style.display = "block";
}

// modal animation
var modal = document.getElementById("registractionModal");
var successModal = document.getElementById("successModal");
var successModalClose = document.getElementById("success-span");
var inqueryModal = document.getElementById("inqueryModal");

// Get the button that opens the modal
var btn = document.getElementById("registractionBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == successModal) {
    successModal.style.display = "none";
  } else if (event.target == inqueryModal) {
    inqueryModal.style.display = "none";
  }
};

function hideDialog() {
  successModal.style.display = "none";
}
function closeInqueryTab() {
  inqueryModal.style.display = "none";
}
function successDialog() {
  successModal.style.display = "block";
  inqueryModal.style.display = "none";
}

// upload and delete file
function handleFileSelect(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];
  const uploadedFileSection = document.getElementById("uploadedFileSection");

  // Display the selected file name
  const fileName = file ? file.name : "";
  uploadedFileSection.innerHTML = `
    <div class="uploaded-file">
      <span class="file-name">${fileName}</span>
      <span class="delete-button" onclick="deleteFile()">&times;</span>
    </div>
  `;
}

function deleteFile() {
  const uploadedFileSection = document.getElementById("uploadedFileSection");

  // Clear the uploaded file section
  uploadedFileSection.innerHTML = "";
  // Reset the file input value
  document.getElementById("documentUpload").value = "";
}

// save button animation
function showLoader(button) {
  // Hide the button text
  button.innerText = "";

  // Show the loader
  const loader = document.createElement("img");
  loader.src = "./assets/loader.png"; // Replace "loading.gif" with the path to your loading GIF image
  loader.classList.add("loader");
  button.appendChild(loader);

  // Set a timeout to hide the loader after 2 seconds
  setTimeout(function () {
    hideLoader(button);
  }, 2000);
}

function hideLoader(button) {
  // Remove the loader
  const loader = button.querySelector(".loader");
  if (loader) {
    button.removeChild(loader);
    modal.style.display = "none";
    inqueryModal.style.display = "block";
  }

  // Restore the button text
  button.innerText = "저장";
}

// textbox enable and disable
function toggleTextArea(checkbox) {
  var textarea = document.getElementById("reasonTextArea");
  textarea.disabled = !checkbox.checked;
}
