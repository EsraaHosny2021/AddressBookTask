using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AddressBookWebAPI.Models
{
    public class Job
    {
        [Key]
        public int JobTitleId { get; set; }
        /*------------------------------------------------------*/
        [Column(TypeName = "nvarchar(100)")]
        public string JobTitle { get; set; }

    
    }
}
