namespace Application.Entities
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Dob { get; set; }
        public string Address { get; set; }
    }
}
