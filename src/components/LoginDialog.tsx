
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LoginDialog = () => {
  const [activeTab, setActiveTab] = useState('admin');
  const { toast } = useToast();
  
  const handleLogin = (e: React.FormEvent, role: string) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    toast({
      title: `${role} login attempted`,
      description: "This is a demonstration. Authentication would happen here in a real application.",
    });
  };

  const closeDialog = () => {
    const dialog = document.getElementById('login-dialog') as HTMLDialogElement | null;
    if (dialog) {
      dialog.close();
    }
  };

  return (
    <dialog id="login-dialog" className="fixed inset-0 bg-black/25 backdrop-blur-sm w-full h-full flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative mx-4">
        <button
          onClick={closeDialog}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <Tabs defaultValue="admin" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="admin">Admin</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
            <TabsTrigger value="member">Member</TabsTrigger>
          </TabsList>

          <TabsContent value="admin">
            <form onSubmit={(e) => handleLogin(e, 'Admin')}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="admin-email">Email</Label>
                  <Input id="admin-email" type="email" placeholder="admin@example.com" required />
                </div>
                <div>
                  <Label htmlFor="admin-password">Password</Label>
                  <Input id="admin-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">Login as Admin</Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="staff">
            <form onSubmit={(e) => handleLogin(e, 'Staff')}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="staff-email">Email</Label>
                  <Input id="staff-email" type="email" placeholder="staff@example.com" required />
                </div>
                <div>
                  <Label htmlFor="staff-password">Password</Label>
                  <Input id="staff-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">Login as Staff</Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="member">
            <form onSubmit={(e) => handleLogin(e, 'Member')}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="member-email">Email</Label>
                  <Input id="member-email" type="email" placeholder="member@example.com" required />
                </div>
                <div>
                  <Label htmlFor="member-password">Password</Label>
                  <Input id="member-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">Login as Member</Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 text-center text-sm text-gray-500">
          <a href="#" className="hover:underline">Forgot password?</a>
        </div>
      </div>
    </dialog>
  );
};

export default LoginDialog;
