using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AddressBookWebAPI.Models
{
    public class Person
    {
        [Key]
        public int PersonId { get; set; }
        /*------------------------------------------------------*/
        [Required]

        [Column(TypeName = "nvarchar(100)")]
        public string FullName { get; set; }
        /*------------------------------------------------------*/
        [ForeignKey("JobTitleId")]
        public int JobTitleId { get; set; }
        /*------------------------------------------------------*/
        [ForeignKey("DepartmentId")]
        public int DepartmentId { get; set; }
        /*------------------------------------------------------*/
        [DataType(DataType.PhoneNumber)]
        [Display(Name = "Phone Number")]
        [Required(ErrorMessage = "Phone Number Required!")]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$",
                   ErrorMessage = "Entered phone format is not valid.")]
        public string MobileNumber { get; set; }
        /*------------------------------------------------------*/
        /*[Required]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        [Display(Name = "Birthdate")]
        [DataType(DataType.Date)]
        */
        public int DateOfBirth { get; set; }
        /*------------------------------------------------------*/
        public string Address { get; set; }
        /*------------------------------------------------------*/
        [DataType(DataType.EmailAddress)]
        [Required(ErrorMessage = "Please enter Email ID")]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Email is not valid.")]
        public string Email { get; set; }
     /*------------------------------------------------------*/
        public byte[] Photo { get; set; }
        /*------------------------------------------------------*/
        public int Age { get; set; }
        /*------------------------------------------------------*/
        //navigation properties
        public ICollection<Job> Jobs { get; set; }
        public ICollection<Department> Departments { get; set; }

    }
}
