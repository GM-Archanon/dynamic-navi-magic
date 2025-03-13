
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginDialog = ({ isOpen, onClose }: LoginDialogProps) => {
  const [activeTab, setActiveTab] = useState('admin');
  const { toast } = useToast();
  
  const handleLogin = (e: React.FormEvent, role: string) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    toast({
      title: `${role} login attempted`,
      description: "This is a demonstration. Authentication would happen here in a real application.",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Login</DialogTitle>
        </DialogHeader>
        <DialogClose className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </DialogClose>
        
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
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
