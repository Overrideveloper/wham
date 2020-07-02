using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Wham.Hubs
{
    public class CoreHub : Hub {
        public async Task SendMessage(string user, string message) {
            await Clients.All.SendAsync("message", user, message);
        }
    }
}